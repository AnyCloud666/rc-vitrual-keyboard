!(function () {
  var yl = Object.defineProperty,
    xl = Object.defineProperties;
  var wl = Object.getOwnPropertyDescriptors;
  var Mn = Object.getOwnPropertySymbols;
  var X1 = Object.prototype.hasOwnProperty,
    z1 = Object.prototype.propertyIsEnumerable;
  var G1 = (Re, w, $) =>
      w in Re
        ? yl(Re, w, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $,
          })
        : (Re[w] = $),
    J1 = (Re, w) => {
      for (var $ in w || (w = {})) X1.call(w, $) && G1(Re, $, w[$]);
      if (Mn) for (var $ of Mn(w)) z1.call(w, $) && G1(Re, $, w[$]);
      return Re;
    },
    Q1 = (Re, w) => xl(Re, wl(w));
  var Ds = (Re, w) => {
    var $ = {};
    for (var u in Re) X1.call(Re, u) && w.indexOf(u) < 0 && ($[u] = Re[u]);
    if (Re != null && Mn)
      for (var u of Mn(Re))
        w.indexOf(u) < 0 && z1.call(Re, u) && ($[u] = Re[u]);
    return $;
  };
  (self.webpackChunkreact_virtual_keyboard =
    self.webpackChunkreact_virtual_keyboard || []).push([
    [93],
    {
      40653: function (Re, w, $) {
        (function (u, e) {
          e(w, $(78750), $(19861), $(2634));
        })(this, function (u, e, ge, L) {
          'use strict';
          class D {
            constructor({ file: te, sourceRoot: ue } = {}) {
              (this._names = new e.SetArray()),
                (this._sources = new e.SetArray()),
                (this._sourcesContent = []),
                (this._mappings = []),
                (this.file = te),
                (this.sourceRoot = ue),
                (this._ignoreList = new e.SetArray());
            }
          }
          function r(se) {
            return se;
          }
          function x(se, te, ue, z, ve, Ne, we, O) {
            return Y(!1, se, te, ue, z, ve, Ne, we, O);
          }
          function ie(se, te) {
            return Ze(!1, se, te);
          }
          const B = (se, te, ue, z, ve, Ne, we, O) =>
              Y(!0, se, te, ue, z, ve, Ne, we, O),
            Z = (se, te) => Ze(!0, se, te);
          function C(se, te, ue) {
            const { _sources: z, _sourcesContent: ve } = se,
              Ne = e.put(z, te);
            ve[Ne] = ue;
          }
          function j(se, te, ue = !0) {
            const { _sources: z, _sourcesContent: ve, _ignoreList: Ne } = se,
              we = e.put(z, te);
            we === ve.length && (ve[we] = null),
              ue ? e.put(Ne, we) : e.remove(Ne, we);
          }
          function le(se) {
            const {
              _mappings: te,
              _sources: ue,
              _sourcesContent: z,
              _names: ve,
              _ignoreList: Ne,
            } = se;
            return (
              Le(te),
              {
                version: 3,
                file: se.file || void 0,
                names: ve.array,
                sourceRoot: se.sourceRoot || void 0,
                sources: ue.array,
                sourcesContent: z,
                mappings: te,
                ignoreList: Ne.array,
              }
            );
          }
          function v(se) {
            const te = le(se);
            return Object.assign(Object.assign({}, te), {
              mappings: ge.encode(te.mappings),
            });
          }
          function K(se) {
            const te = new L.TraceMap(se),
              ue = new D({ file: te.file, sourceRoot: te.sourceRoot });
            return (
              Ie(ue._names, te.names),
              Ie(ue._sources, te.sources),
              (ue._sourcesContent =
                te.sourcesContent || te.sources.map(() => null)),
              (ue._mappings = L.decodedMappings(te)),
              te.ignoreList && Ie(ue._ignoreList, te.ignoreList),
              ue
            );
          }
          function _e(se) {
            const te = [],
              { _mappings: ue, _sources: z, _names: ve } = se;
            for (let Ne = 0; Ne < ue.length; Ne++) {
              const we = ue[Ne];
              for (let O = 0; O < we.length; O++) {
                const Se = we[O],
                  Ke = { line: Ne + 1, column: Se[0] };
                let T, S, P;
                Se.length !== 1 &&
                  ((T = z.array[Se[1]]),
                  (S = { line: Se[2] + 1, column: Se[3] }),
                  Se.length === 5 && (P = ve.array[Se[4]])),
                  te.push({ generated: Ke, source: T, original: S, name: P });
              }
            }
            return te;
          }
          function Y(se, te, ue, z, ve, Ne, we, O, Se) {
            const {
                _mappings: Ke,
                _sources: T,
                _sourcesContent: S,
                _names: P,
              } = te,
              M = Ae(Ke, ue),
              G = Ee(M, z);
            if (!ve) return se && I(M, G) ? void 0 : Ue(M, G, [z]);
            const ae = e.put(T, ve),
              _ = O ? e.put(P, O) : -1;
            if (
              (ae === S.length && (S[ae] = Se != null ? Se : null),
              !(se && he(M, G, ae, Ne, we, _)))
            )
              return Ue(M, G, O ? [z, ae, Ne, we, _] : [z, ae, Ne, we]);
          }
          function Ae(se, te) {
            for (let ue = se.length; ue <= te; ue++) se[ue] = [];
            return se[te];
          }
          function Ee(se, te) {
            let ue = se.length;
            for (let z = ue - 1; z >= 0; ue = z--) {
              const ve = se[z];
              if (te >= ve[0]) break;
            }
            return ue;
          }
          function Ue(se, te, ue) {
            for (let z = se.length; z > te; z--) se[z] = se[z - 1];
            se[te] = ue;
          }
          function Le(se) {
            const { length: te } = se;
            let ue = te;
            for (let z = ue - 1; z >= 0 && !(se[z].length > 0); ue = z, z--);
            ue < te && (se.length = ue);
          }
          function Ie(se, te) {
            for (let ue = 0; ue < te.length; ue++) e.put(se, te[ue]);
          }
          function I(se, te) {
            return te === 0 ? !0 : se[te - 1].length === 1;
          }
          function he(se, te, ue, z, ve, Ne) {
            if (te === 0) return !1;
            const we = se[te - 1];
            return we.length === 1
              ? !1
              : ue === we[1] &&
                  z === we[2] &&
                  ve === we[3] &&
                  Ne === (we.length === 5 ? we[4] : -1);
          }
          function Ze(se, te, ue) {
            const {
              generated: z,
              source: ve,
              original: Ne,
              name: we,
              content: O,
            } = ue;
            return ve
              ? Y(
                  se,
                  te,
                  z.line - 1,
                  z.column,
                  ve,
                  Ne.line - 1,
                  Ne.column,
                  we,
                  O,
                )
              : Y(se, te, z.line - 1, z.column, null, null, null, null, null);
          }
          (u.GenMapping = D),
            (u.addMapping = ie),
            (u.addSegment = x),
            (u.allMappings = _e),
            (u.fromMap = K),
            (u.maybeAddMapping = Z),
            (u.maybeAddSegment = B),
            (u.setIgnore = j),
            (u.setSourceContent = C),
            (u.toDecodedMap = le),
            (u.toEncodedMap = v),
            Object.defineProperty(u, '__esModule', { value: !0 });
        });
      },
      54498: function (Re) {
        (function (w, $) {
          Re.exports = $();
        })(this, function () {
          'use strict';
          const w = /^[\w+.-]+:\/\//,
            $ =
              /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,
            u =
              /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
          function e(B) {
            return w.test(B);
          }
          function ge(B) {
            return B.startsWith('//');
          }
          function L(B) {
            return B.startsWith('/');
          }
          function W(B) {
            return B.startsWith('file:');
          }
          function A(B) {
            return /^[.?#]/.test(B);
          }
          function h(B) {
            const Z = $.exec(B);
            return N(
              Z[1],
              Z[2] || '',
              Z[3],
              Z[4] || '',
              Z[5] || '/',
              Z[6] || '',
              Z[7] || '',
            );
          }
          function m(B) {
            const Z = u.exec(B),
              C = Z[2];
            return N(
              'file:',
              '',
              Z[1] || '',
              '',
              L(C) ? C : '/' + C,
              Z[3] || '',
              Z[4] || '',
            );
          }
          function N(B, Z, C, j, le, v, K) {
            return {
              scheme: B,
              user: Z,
              host: C,
              port: j,
              path: le,
              query: v,
              hash: K,
              type: 7,
            };
          }
          function E(B) {
            if (ge(B)) {
              const C = h('http:' + B);
              return (C.scheme = ''), (C.type = 6), C;
            }
            if (L(B)) {
              const C = h('http://foo.com' + B);
              return (C.scheme = ''), (C.host = ''), (C.type = 5), C;
            }
            if (W(B)) return m(B);
            if (e(B)) return h(B);
            const Z = h('http://foo.com/' + B);
            return (
              (Z.scheme = ''),
              (Z.host = ''),
              (Z.type = B
                ? B.startsWith('?')
                  ? 3
                  : B.startsWith('#')
                  ? 2
                  : 4
                : 1),
              Z
            );
          }
          function D(B) {
            if (B.endsWith('/..')) return B;
            const Z = B.lastIndexOf('/');
            return B.slice(0, Z + 1);
          }
          function r(B, Z) {
            x(Z, Z.type),
              B.path === '/'
                ? (B.path = Z.path)
                : (B.path = D(Z.path) + B.path);
          }
          function x(B, Z) {
            const C = Z <= 4,
              j = B.path.split('/');
            let le = 1,
              v = 0,
              K = !1;
            for (let Y = 1; Y < j.length; Y++) {
              const Ae = j[Y];
              if (!Ae) {
                K = !0;
                continue;
              }
              if (((K = !1), Ae !== '.')) {
                if (Ae === '..') {
                  v ? ((K = !0), v--, le--) : C && (j[le++] = Ae);
                  continue;
                }
                (j[le++] = Ae), v++;
              }
            }
            let _e = '';
            for (let Y = 1; Y < le; Y++) _e += '/' + j[Y];
            (!_e || (K && !_e.endsWith('/..'))) && (_e += '/'), (B.path = _e);
          }
          function ie(B, Z) {
            if (!B && !Z) return '';
            const C = E(B);
            let j = C.type;
            if (Z && j !== 7) {
              const v = E(Z),
                K = v.type;
              switch (j) {
                case 1:
                  C.hash = v.hash;
                case 2:
                  C.query = v.query;
                case 3:
                case 4:
                  r(C, v);
                case 5:
                  (C.user = v.user), (C.host = v.host), (C.port = v.port);
                case 6:
                  C.scheme = v.scheme;
              }
              K > j && (j = K);
            }
            x(C, j);
            const le = C.query + C.hash;
            switch (j) {
              case 2:
              case 3:
                return le;
              case 4: {
                const v = C.path.slice(1);
                return v
                  ? A(Z || B) && !A(v)
                    ? './' + v + le
                    : v + le
                  : le || '.';
              }
              case 5:
                return C.path + le;
              default:
                return C.scheme + '//' + C.user + C.host + C.port + C.path + le;
            }
          }
          return ie;
        });
      },
      78750: function (Re, w) {
        (function ($, u) {
          u(w);
        })(this, function ($) {
          'use strict';
          class u {
            constructor() {
              (this._indexes = { __proto__: null }), (this.array = []);
            }
          }
          function e(h) {
            return h;
          }
          function ge(h, m) {
            return h._indexes[m];
          }
          function L(h, m) {
            const N = ge(h, m);
            if (N !== void 0) return N;
            const { array: E, _indexes: D } = h,
              r = E.push(m);
            return (D[m] = r - 1);
          }
          function W(h) {
            const { array: m, _indexes: N } = h;
            if (m.length === 0) return;
            const E = m.pop();
            N[E] = void 0;
          }
          function A(h, m) {
            const N = ge(h, m);
            if (N === void 0) return;
            const { array: E, _indexes: D } = h;
            for (let r = N + 1; r < E.length; r++) {
              const x = E[r];
              (E[r - 1] = x), D[x]--;
            }
            (D[m] = void 0), E.pop();
          }
          ($.SetArray = u),
            ($.get = ge),
            ($.pop = W),
            ($.put = L),
            ($.remove = A),
            Object.defineProperty($, '__esModule', { value: !0 });
        });
      },
      19861: function (Re, w, $) {
        var u = $(36379).lW;
        (function (e, ge) {
          ge(w);
        })(this, function (e) {
          'use strict';
          const W =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            A = new Uint8Array(64),
            h = new Uint8Array(128);
          for (let C = 0; C < W.length; C++) {
            const j = W.charCodeAt(C);
            (A[C] = j), (h[j] = C);
          }
          const m =
            typeof TextDecoder != 'undefined'
              ? new TextDecoder()
              : typeof u != 'undefined'
              ? {
                  decode(C) {
                    return u
                      .from(C.buffer, C.byteOffset, C.byteLength)
                      .toString();
                  },
                }
              : {
                  decode(C) {
                    let j = '';
                    for (let le = 0; le < C.length; le++)
                      j += String.fromCharCode(C[le]);
                    return j;
                  },
                };
          function N(C) {
            const j = new Int32Array(5),
              le = [];
            let v = 0;
            do {
              const K = E(C, v),
                _e = [];
              let Y = !0,
                Ae = 0;
              j[0] = 0;
              for (let Ee = v; Ee < K; Ee++) {
                let Ue;
                Ee = D(C, Ee, j, 0);
                const Le = j[0];
                Le < Ae && (Y = !1),
                  (Ae = Le),
                  r(C, Ee, K)
                    ? ((Ee = D(C, Ee, j, 1)),
                      (Ee = D(C, Ee, j, 2)),
                      (Ee = D(C, Ee, j, 3)),
                      r(C, Ee, K)
                        ? ((Ee = D(C, Ee, j, 4)),
                          (Ue = [Le, j[1], j[2], j[3], j[4]]))
                        : (Ue = [Le, j[1], j[2], j[3]]))
                    : (Ue = [Le]),
                  _e.push(Ue);
              }
              Y || x(_e), le.push(_e), (v = K + 1);
            } while (v <= C.length);
            return le;
          }
          function E(C, j) {
            const le = C.indexOf(';', j);
            return le === -1 ? C.length : le;
          }
          function D(C, j, le, v) {
            let K = 0,
              _e = 0,
              Y = 0;
            do {
              const Ee = C.charCodeAt(j++);
              (Y = h[Ee]), (K |= (Y & 31) << _e), (_e += 5);
            } while (Y & 32);
            const Ae = K & 1;
            return (K >>>= 1), Ae && (K = -2147483648 | -K), (le[v] += K), j;
          }
          function r(C, j, le) {
            return j >= le ? !1 : C.charCodeAt(j) !== 44;
          }
          function x(C) {
            C.sort(ie);
          }
          function ie(C, j) {
            return C[0] - j[0];
          }
          function B(C) {
            const j = new Int32Array(5),
              le = 1024 * 16,
              v = le - 36,
              K = new Uint8Array(le),
              _e = K.subarray(0, v);
            let Y = 0,
              Ae = '';
            for (let Ee = 0; Ee < C.length; Ee++) {
              const Ue = C[Ee];
              if (
                (Ee > 0 &&
                  (Y === le && ((Ae += m.decode(K)), (Y = 0)), (K[Y++] = 59)),
                Ue.length !== 0)
              ) {
                j[0] = 0;
                for (let Le = 0; Le < Ue.length; Le++) {
                  const Ie = Ue[Le];
                  Y > v &&
                    ((Ae += m.decode(_e)), K.copyWithin(0, v, Y), (Y -= v)),
                    Le > 0 && (K[Y++] = 44),
                    (Y = Z(K, Y, j, Ie, 0)),
                    Ie.length !== 1 &&
                      ((Y = Z(K, Y, j, Ie, 1)),
                      (Y = Z(K, Y, j, Ie, 2)),
                      (Y = Z(K, Y, j, Ie, 3)),
                      Ie.length !== 4 && (Y = Z(K, Y, j, Ie, 4)));
                }
              }
            }
            return Ae + m.decode(K.subarray(0, Y));
          }
          function Z(C, j, le, v, K) {
            const _e = v[K];
            let Y = _e - le[K];
            (le[K] = _e), (Y = Y < 0 ? (-Y << 1) | 1 : Y << 1);
            do {
              let Ae = Y & 31;
              (Y >>>= 5), Y > 0 && (Ae |= 32), (C[j++] = A[Ae]);
            } while (Y > 0);
            return j;
          }
          (e.decode = N),
            (e.encode = B),
            Object.defineProperty(e, '__esModule', { value: !0 });
        });
      },
      2634: function (Re, w, $) {
        (function (u, e) {
          e(w, $(19861), $(54498));
        })(this, function (u, e, ge) {
          'use strict';
          function L(l, p) {
            return p && !p.endsWith('/') && (p += '/'), ge(l, p);
          }
          function W(l) {
            if (!l) return '';
            const p = l.lastIndexOf('/');
            return l.slice(0, p + 1);
          }
          const A = 0,
            h = 1,
            m = 2,
            N = 3,
            E = 4,
            D = 1,
            r = 2;
          function x(l, p) {
            const k = ie(l, 0);
            if (k === l.length) return l;
            p || (l = l.slice());
            for (let g = k; g < l.length; g = ie(l, g + 1)) l[g] = Z(l[g], p);
            return l;
          }
          function ie(l, p) {
            for (let k = p; k < l.length; k++) if (!B(l[k])) return k;
            return l.length;
          }
          function B(l) {
            for (let p = 1; p < l.length; p++)
              if (l[p][A] < l[p - 1][A]) return !1;
            return !0;
          }
          function Z(l, p) {
            return p || (l = l.slice()), l.sort(C);
          }
          function C(l, p) {
            return l[A] - p[A];
          }
          let j = !1;
          function le(l, p, k, g) {
            for (; k <= g; ) {
              const V = k + ((g - k) >> 1),
                U = l[V][A] - p;
              if (U === 0) return (j = !0), V;
              U < 0 ? (k = V + 1) : (g = V - 1);
            }
            return (j = !1), k - 1;
          }
          function v(l, p, k) {
            for (let g = k + 1; g < l.length && l[g][A] === p; k = g++);
            return k;
          }
          function K(l, p, k) {
            for (let g = k - 1; g >= 0 && l[g][A] === p; k = g--);
            return k;
          }
          function _e() {
            return { lastKey: -1, lastNeedle: -1, lastIndex: -1 };
          }
          function Y(l, p, k, g) {
            const { lastKey: V, lastNeedle: U, lastIndex: ce } = k;
            let be = 0,
              re = l.length - 1;
            if (g === V) {
              if (p === U) return (j = ce !== -1 && l[ce][A] === p), ce;
              p >= U ? (be = ce === -1 ? 0 : ce) : (re = ce);
            }
            return (
              (k.lastKey = g),
              (k.lastNeedle = p),
              (k.lastIndex = le(l, p, be, re))
            );
          }
          function Ae(l, p) {
            const k = p.map(Ue);
            for (let g = 0; g < l.length; g++) {
              const V = l[g];
              for (let U = 0; U < V.length; U++) {
                const ce = V[U];
                if (ce.length === 1) continue;
                const be = ce[h],
                  re = ce[m],
                  H = ce[N],
                  He = k[be],
                  Be = He[re] || (He[re] = []),
                  je = p[be];
                let Xe = v(Be, H, Y(Be, H, je, re));
                (je.lastIndex = ++Xe), Ee(Be, Xe, [H, g, ce[A]]);
              }
            }
            return k;
          }
          function Ee(l, p, k) {
            for (let g = l.length; g > p; g--) l[g] = l[g - 1];
            l[p] = k;
          }
          function Ue() {
            return { __proto__: null };
          }
          const Le = function (l, p) {
            const k = Ie(l);
            if (!('sections' in k)) return new Ne(k, p);
            const g = [],
              V = [],
              U = [],
              ce = [],
              be = [];
            I(k, p, g, V, U, ce, be, 0, 0, 1 / 0, 1 / 0);
            const re = {
              version: 3,
              file: k.file,
              names: ce,
              sources: V,
              sourcesContent: U,
              mappings: g,
              ignoreList: be,
            };
            return Te(re);
          };
          function Ie(l) {
            return typeof l == 'string' ? JSON.parse(l) : l;
          }
          function I(l, p, k, g, V, U, ce, be, re, H, He) {
            const { sections: Be } = l;
            for (let je = 0; je < Be.length; je++) {
              const { map: Xe, offset: at } = Be[je];
              let gt = H,
                bt = He;
              if (je + 1 < Be.length) {
                const _t = Be[je + 1].offset;
                (gt = Math.min(H, be + _t.line)),
                  gt === H
                    ? (bt = Math.min(He, re + _t.column))
                    : gt < H && (bt = re + _t.column);
              }
              he(Xe, p, k, g, V, U, ce, be + at.line, re + at.column, gt, bt);
            }
          }
          function he(l, p, k, g, V, U, ce, be, re, H, He) {
            const Be = Ie(l);
            if ('sections' in Be) return I(...arguments);
            const je = new Ne(Be, p),
              Xe = g.length,
              at = U.length,
              gt = Se(je),
              { resolvedSources: bt, sourcesContent: _t, ignoreList: qt } = je;
            if ((Ze(g, bt), Ze(U, je.names), _t)) Ze(V, _t);
            else for (let nt = 0; nt < bt.length; nt++) V.push(null);
            if (qt) for (let nt = 0; nt < qt.length; nt++) ce.push(qt[nt] + Xe);
            for (let nt = 0; nt < gt.length; nt++) {
              const Xt = be + nt;
              if (Xt > H) return;
              const zt = se(k, Xt),
                Ce = nt === 0 ? re : 0,
                hn = gt[nt];
              for (let Ct = 0; Ct < hn.length; Ct++) {
                const yt = hn[Ct],
                  Rt = Ce + yt[A];
                if (Xt === H && Rt >= He) return;
                if (yt.length === 1) {
                  zt.push([Rt]);
                  continue;
                }
                const pn = Xe + yt[h],
                  mn = yt[m],
                  dn = yt[N];
                zt.push(
                  yt.length === 4
                    ? [Rt, pn, mn, dn]
                    : [Rt, pn, mn, dn, at + yt[E]],
                );
              }
            }
          }
          function Ze(l, p) {
            for (let k = 0; k < p.length; k++) l.push(p[k]);
          }
          function se(l, p) {
            for (let k = l.length; k <= p; k++) l[k] = [];
            return l[p];
          }
          const te = '`line` must be greater than 0 (lines start at line 1)',
            ue =
              '`column` must be greater than or equal to 0 (columns start at column 0)',
            z = -1,
            ve = 1;
          class Ne {
            constructor(p, k) {
              const g = typeof p == 'string';
              if (!g && p._decodedMemo) return p;
              const V = g ? JSON.parse(p) : p,
                {
                  version: U,
                  file: ce,
                  names: be,
                  sourceRoot: re,
                  sources: H,
                  sourcesContent: He,
                } = V;
              (this.version = U),
                (this.file = ce),
                (this.names = be || []),
                (this.sourceRoot = re),
                (this.sources = H),
                (this.sourcesContent = He),
                (this.ignoreList =
                  V.ignoreList || V.x_google_ignoreList || void 0);
              const Be = L(re || '', W(k));
              this.resolvedSources = H.map((Xe) => L(Xe || '', Be));
              const { mappings: je } = V;
              typeof je == 'string'
                ? ((this._encoded = je), (this._decoded = void 0))
                : ((this._encoded = void 0), (this._decoded = x(je, g))),
                (this._decodedMemo = _e()),
                (this._bySources = void 0),
                (this._bySourceMemos = void 0);
            }
          }
          function we(l) {
            return l;
          }
          function O(l) {
            var p, k;
            return (p = (k = l)._encoded) !== null && p !== void 0
              ? p
              : (k._encoded = e.encode(l._decoded));
          }
          function Se(l) {
            var p;
            return (p = l)._decoded || (p._decoded = e.decode(l._encoded));
          }
          function Ke(l, p, k) {
            const g = Se(l);
            if (p >= g.length) return null;
            const V = g[p],
              U = o(V, l._decodedMemo, p, k, ve);
            return U === -1 ? null : V[U];
          }
          function T(l, p) {
            let { line: k, column: g, bias: V } = p;
            if ((k--, k < 0)) throw new Error(te);
            if (g < 0) throw new Error(ue);
            const U = Se(l);
            if (k >= U.length) return y(null, null, null, null);
            const ce = U[k],
              be = o(ce, l._decodedMemo, k, g, V || ve);
            if (be === -1) return y(null, null, null, null);
            const re = ce[be];
            if (re.length === 1) return y(null, null, null, null);
            const { names: H, resolvedSources: He } = l;
            return y(
              He[re[h]],
              re[m] + 1,
              re[N],
              re.length === 5 ? H[re[E]] : null,
            );
          }
          function S(l, p) {
            const { source: k, line: g, column: V, bias: U } = p;
            return a(l, k, g, V, U || ve, !1);
          }
          function P(l, p) {
            const { source: k, line: g, column: V, bias: U } = p;
            return a(l, k, g, V, U || z, !0);
          }
          function M(l, p) {
            const k = Se(l),
              { names: g, resolvedSources: V } = l;
            for (let U = 0; U < k.length; U++) {
              const ce = k[U];
              for (let be = 0; be < ce.length; be++) {
                const re = ce[be],
                  H = U + 1,
                  He = re[0];
                let Be = null,
                  je = null,
                  Xe = null,
                  at = null;
                re.length !== 1 &&
                  ((Be = V[re[1]]), (je = re[2] + 1), (Xe = re[3])),
                  re.length === 5 && (at = g[re[4]]),
                  p({
                    generatedLine: H,
                    generatedColumn: He,
                    source: Be,
                    originalLine: je,
                    originalColumn: Xe,
                    name: at,
                  });
              }
            }
          }
          function G(l, p) {
            const { sources: k, resolvedSources: g } = l;
            let V = k.indexOf(p);
            return V === -1 && (V = g.indexOf(p)), V;
          }
          function ae(l, p) {
            const { sourcesContent: k } = l;
            if (k == null) return null;
            const g = G(l, p);
            return g === -1 ? null : k[g];
          }
          function _(l, p) {
            const { ignoreList: k } = l;
            if (k == null) return !1;
            const g = G(l, p);
            return g === -1 ? !1 : k.includes(g);
          }
          function Te(l, p) {
            const k = new Ne(ne(l, []), p);
            return (k._decoded = l.mappings), k;
          }
          function Me(l) {
            return ne(l, Se(l));
          }
          function Q(l) {
            return ne(l, O(l));
          }
          function ne(l, p) {
            return {
              version: l.version,
              file: l.file,
              names: l.names,
              sourceRoot: l.sourceRoot,
              sources: l.sources,
              sourcesContent: l.sourcesContent,
              mappings: p,
              ignoreList: l.ignoreList || l.x_google_ignoreList,
            };
          }
          function y(l, p, k, g) {
            return { source: l, line: p, column: k, name: g };
          }
          function De(l, p) {
            return { line: l, column: p };
          }
          function o(l, p, k, g, V) {
            let U = Y(l, g, p, k);
            return (
              j ? (U = (V === z ? v : K)(l, g, U)) : V === z && U++,
              U === -1 || U === l.length ? -1 : U
            );
          }
          function i(l, p, k, g, V) {
            let U = o(l, p, k, g, ve);
            if ((!j && V === z && U++, U === -1 || U === l.length)) return [];
            const ce = j ? g : l[U][A];
            j || (U = K(l, ce, U));
            const be = v(l, ce, U),
              re = [];
            for (; U <= be; U++) {
              const H = l[U];
              re.push(De(H[D] + 1, H[r]));
            }
            return re;
          }
          function a(l, p, k, g, V, U) {
            var ce;
            if ((k--, k < 0)) throw new Error(te);
            if (g < 0) throw new Error(ue);
            const { sources: be, resolvedSources: re } = l;
            let H = be.indexOf(p);
            if ((H === -1 && (H = re.indexOf(p)), H === -1))
              return U ? [] : De(null, null);
            const Be = ((ce = l)._bySources ||
              (ce._bySources = Ae(Se(l), (l._bySourceMemos = be.map(_e)))))[H][
              k
            ];
            if (Be == null) return U ? [] : De(null, null);
            const je = l._bySourceMemos[H];
            if (U) return i(Be, je, k, g, V);
            const Xe = o(Be, je, k, g, V);
            if (Xe === -1) return De(null, null);
            const at = Be[Xe];
            return De(at[D] + 1, at[r]);
          }
          (u.AnyMap = Le),
            (u.GREATEST_LOWER_BOUND = ve),
            (u.LEAST_UPPER_BOUND = z),
            (u.TraceMap = Ne),
            (u.allGeneratedPositionsFor = P),
            (u.decodedMap = Me),
            (u.decodedMappings = Se),
            (u.eachMapping = M),
            (u.encodedMap = Q),
            (u.encodedMappings = O),
            (u.generatedPositionFor = S),
            (u.isIgnored = _),
            (u.originalPositionFor = T),
            (u.presortedDecodedMap = Te),
            (u.sourceContentFor = ae),
            (u.traceSegment = Ke);
        });
      },
      65415: function (Re, w) {
        'use strict';
        (w.byteLength = h), (w.toByteArray = N), (w.fromByteArray = r);
        for (
          var $ = [],
            u = [],
            e = typeof Uint8Array != 'undefined' ? Uint8Array : Array,
            ge =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            L = 0,
            W = ge.length;
          L < W;
          ++L
        )
          ($[L] = ge[L]), (u[ge.charCodeAt(L)] = L);
        (u[45] = 62), (u[95] = 63);
        function A(x) {
          var ie = x.length;
          if (ie % 4 > 0)
            throw new Error('Invalid string. Length must be a multiple of 4');
          var B = x.indexOf('=');
          B === -1 && (B = ie);
          var Z = B === ie ? 0 : 4 - (B % 4);
          return [B, Z];
        }
        function h(x) {
          var ie = A(x),
            B = ie[0],
            Z = ie[1];
          return ((B + Z) * 3) / 4 - Z;
        }
        function m(x, ie, B) {
          return ((ie + B) * 3) / 4 - B;
        }
        function N(x) {
          var ie,
            B = A(x),
            Z = B[0],
            C = B[1],
            j = new e(m(x, Z, C)),
            le = 0,
            v = C > 0 ? Z - 4 : Z,
            K;
          for (K = 0; K < v; K += 4)
            (ie =
              (u[x.charCodeAt(K)] << 18) |
              (u[x.charCodeAt(K + 1)] << 12) |
              (u[x.charCodeAt(K + 2)] << 6) |
              u[x.charCodeAt(K + 3)]),
              (j[le++] = (ie >> 16) & 255),
              (j[le++] = (ie >> 8) & 255),
              (j[le++] = ie & 255);
          return (
            C === 2 &&
              ((ie = (u[x.charCodeAt(K)] << 2) | (u[x.charCodeAt(K + 1)] >> 4)),
              (j[le++] = ie & 255)),
            C === 1 &&
              ((ie =
                (u[x.charCodeAt(K)] << 10) |
                (u[x.charCodeAt(K + 1)] << 4) |
                (u[x.charCodeAt(K + 2)] >> 2)),
              (j[le++] = (ie >> 8) & 255),
              (j[le++] = ie & 255)),
            j
          );
        }
        function E(x) {
          return (
            $[(x >> 18) & 63] + $[(x >> 12) & 63] + $[(x >> 6) & 63] + $[x & 63]
          );
        }
        function D(x, ie, B) {
          for (var Z, C = [], j = ie; j < B; j += 3)
            (Z =
              ((x[j] << 16) & 16711680) +
              ((x[j + 1] << 8) & 65280) +
              (x[j + 2] & 255)),
              C.push(E(Z));
          return C.join('');
        }
        function r(x) {
          for (
            var ie,
              B = x.length,
              Z = B % 3,
              C = [],
              j = 16383,
              le = 0,
              v = B - Z;
            le < v;
            le += j
          )
            C.push(D(x, le, le + j > v ? v : le + j));
          return (
            Z === 1
              ? ((ie = x[B - 1]), C.push($[ie >> 2] + $[(ie << 4) & 63] + '=='))
              : Z === 2 &&
                ((ie = (x[B - 2] << 8) + x[B - 1]),
                C.push(
                  $[ie >> 10] + $[(ie >> 4) & 63] + $[(ie << 2) & 63] + '=',
                )),
            C.join('')
          );
        }
      },
      36379: function (Re, w, $) {
        'use strict';
        var u;
        var e = $(65415),
          ge = $(30551),
          L = $(79673);
        (w.lW = m),
          (u = j),
          (w.h2 = 50),
          (m.TYPED_ARRAY_SUPPORT =
            $.g.TYPED_ARRAY_SUPPORT !== void 0 ? $.g.TYPED_ARRAY_SUPPORT : W()),
          (u = A());
        function W() {
          try {
            var o = new Uint8Array(1);
            return (
              (o.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function () {
                  return 42;
                },
              }),
              o.foo() === 42 &&
                typeof o.subarray == 'function' &&
                o.subarray(1, 1).byteLength === 0
            );
          } catch (i) {
            return !1;
          }
        }
        function A() {
          return m.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function h(o, i) {
          if (A() < i) throw new RangeError('Invalid typed array length');
          return (
            m.TYPED_ARRAY_SUPPORT
              ? ((o = new Uint8Array(i)), (o.__proto__ = m.prototype))
              : (o === null && (o = new m(i)), (o.length = i)),
            o
          );
        }
        function m(o, i, a) {
          if (!m.TYPED_ARRAY_SUPPORT && !(this instanceof m))
            return new m(o, i, a);
          if (typeof o == 'number') {
            if (typeof i == 'string')
              throw new Error(
                'If encoding is specified then the first argument must be a string',
              );
            return r(this, o);
          }
          return N(this, o, i, a);
        }
        (m.poolSize = 8192),
          (m._augment = function (o) {
            return (o.__proto__ = m.prototype), o;
          });
        function N(o, i, a, l) {
          if (typeof i == 'number')
            throw new TypeError('"value" argument must not be a number');
          return typeof ArrayBuffer != 'undefined' && i instanceof ArrayBuffer
            ? B(o, i, a, l)
            : typeof i == 'string'
            ? x(o, i, a)
            : Z(o, i);
        }
        (m.from = function (o, i, a) {
          return N(null, o, i, a);
        }),
          m.TYPED_ARRAY_SUPPORT &&
            ((m.prototype.__proto__ = Uint8Array.prototype),
            (m.__proto__ = Uint8Array),
            typeof Symbol != 'undefined' &&
              Symbol.species &&
              m[Symbol.species] === m &&
              Object.defineProperty(m, Symbol.species, {
                value: null,
                configurable: !0,
              }));
        function E(o) {
          if (typeof o != 'number')
            throw new TypeError('"size" argument must be a number');
          if (o < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function D(o, i, a, l) {
          return (
            E(i),
            i <= 0
              ? h(o, i)
              : a !== void 0
              ? typeof l == 'string'
                ? h(o, i).fill(a, l)
                : h(o, i).fill(a)
              : h(o, i)
          );
        }
        m.alloc = function (o, i, a) {
          return D(null, o, i, a);
        };
        function r(o, i) {
          if ((E(i), (o = h(o, i < 0 ? 0 : C(i) | 0)), !m.TYPED_ARRAY_SUPPORT))
            for (var a = 0; a < i; ++a) o[a] = 0;
          return o;
        }
        (m.allocUnsafe = function (o) {
          return r(null, o);
        }),
          (m.allocUnsafeSlow = function (o) {
            return r(null, o);
          });
        function x(o, i, a) {
          if (
            ((typeof a != 'string' || a === '') && (a = 'utf8'),
            !m.isEncoding(a))
          )
            throw new TypeError('"encoding" must be a valid string encoding');
          var l = le(i, a) | 0;
          o = h(o, l);
          var p = o.write(i, a);
          return p !== l && (o = o.slice(0, p)), o;
        }
        function ie(o, i) {
          var a = i.length < 0 ? 0 : C(i.length) | 0;
          o = h(o, a);
          for (var l = 0; l < a; l += 1) o[l] = i[l] & 255;
          return o;
        }
        function B(o, i, a, l) {
          if ((i.byteLength, a < 0 || i.byteLength < a))
            throw new RangeError("'offset' is out of bounds");
          if (i.byteLength < a + (l || 0))
            throw new RangeError("'length' is out of bounds");
          return (
            a === void 0 && l === void 0
              ? (i = new Uint8Array(i))
              : l === void 0
              ? (i = new Uint8Array(i, a))
              : (i = new Uint8Array(i, a, l)),
            m.TYPED_ARRAY_SUPPORT
              ? ((o = i), (o.__proto__ = m.prototype))
              : (o = ie(o, i)),
            o
          );
        }
        function Z(o, i) {
          if (m.isBuffer(i)) {
            var a = C(i.length) | 0;
            return (o = h(o, a)), o.length === 0 || i.copy(o, 0, 0, a), o;
          }
          if (i) {
            if (
              (typeof ArrayBuffer != 'undefined' &&
                i.buffer instanceof ArrayBuffer) ||
              'length' in i
            )
              return typeof i.length != 'number' || De(i.length)
                ? h(o, 0)
                : ie(o, i);
            if (i.type === 'Buffer' && L(i.data)) return ie(o, i.data);
          }
          throw new TypeError(
            'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.',
          );
        }
        function C(o) {
          if (o >= A())
            throw new RangeError(
              'Attempt to allocate Buffer larger than maximum size: 0x' +
                A().toString(16) +
                ' bytes',
            );
          return o | 0;
        }
        function j(o) {
          return +o != o && (o = 0), m.alloc(+o);
        }
        (m.isBuffer = function (i) {
          return !!(i != null && i._isBuffer);
        }),
          (m.compare = function (i, a) {
            if (!m.isBuffer(i) || !m.isBuffer(a))
              throw new TypeError('Arguments must be Buffers');
            if (i === a) return 0;
            for (
              var l = i.length, p = a.length, k = 0, g = Math.min(l, p);
              k < g;
              ++k
            )
              if (i[k] !== a[k]) {
                (l = i[k]), (p = a[k]);
                break;
              }
            return l < p ? -1 : p < l ? 1 : 0;
          }),
          (m.isEncoding = function (i) {
            switch (String(i).toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'latin1':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return !0;
              default:
                return !1;
            }
          }),
          (m.concat = function (i, a) {
            if (!L(i))
              throw new TypeError(
                '"list" argument must be an Array of Buffers',
              );
            if (i.length === 0) return m.alloc(0);
            var l;
            if (a === void 0)
              for (a = 0, l = 0; l < i.length; ++l) a += i[l].length;
            var p = m.allocUnsafe(a),
              k = 0;
            for (l = 0; l < i.length; ++l) {
              var g = i[l];
              if (!m.isBuffer(g))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers',
                );
              g.copy(p, k), (k += g.length);
            }
            return p;
          });
        function le(o, i) {
          if (m.isBuffer(o)) return o.length;
          if (
            typeof ArrayBuffer != 'undefined' &&
            typeof ArrayBuffer.isView == 'function' &&
            (ArrayBuffer.isView(o) || o instanceof ArrayBuffer)
          )
            return o.byteLength;
          typeof o != 'string' && (o = '' + o);
          var a = o.length;
          if (a === 0) return 0;
          for (var l = !1; ; )
            switch (i) {
              case 'ascii':
              case 'latin1':
              case 'binary':
                return a;
              case 'utf8':
              case 'utf-8':
              case void 0:
                return Te(o).length;
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return a * 2;
              case 'hex':
                return a >>> 1;
              case 'base64':
                return ne(o).length;
              default:
                if (l) return Te(o).length;
                (i = ('' + i).toLowerCase()), (l = !0);
            }
        }
        m.byteLength = le;
        function v(o, i, a) {
          var l = !1;
          if (
            ((i === void 0 || i < 0) && (i = 0),
            i > this.length ||
              ((a === void 0 || a > this.length) && (a = this.length),
              a <= 0) ||
              ((a >>>= 0), (i >>>= 0), a <= i))
          )
            return '';
          for (o || (o = 'utf8'); ; )
            switch (o) {
              case 'hex':
                return ve(this, i, a);
              case 'utf8':
              case 'utf-8':
                return Ze(this, i, a);
              case 'ascii':
                return ue(this, i, a);
              case 'latin1':
              case 'binary':
                return z(this, i, a);
              case 'base64':
                return he(this, i, a);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return Ne(this, i, a);
              default:
                if (l) throw new TypeError('Unknown encoding: ' + o);
                (o = (o + '').toLowerCase()), (l = !0);
            }
        }
        m.prototype._isBuffer = !0;
        function K(o, i, a) {
          var l = o[i];
          (o[i] = o[a]), (o[a] = l);
        }
        (m.prototype.swap16 = function () {
          var i = this.length;
          if (i % 2 !== 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (var a = 0; a < i; a += 2) K(this, a, a + 1);
          return this;
        }),
          (m.prototype.swap32 = function () {
            var i = this.length;
            if (i % 4 !== 0)
              throw new RangeError('Buffer size must be a multiple of 32-bits');
            for (var a = 0; a < i; a += 4)
              K(this, a, a + 3), K(this, a + 1, a + 2);
            return this;
          }),
          (m.prototype.swap64 = function () {
            var i = this.length;
            if (i % 8 !== 0)
              throw new RangeError('Buffer size must be a multiple of 64-bits');
            for (var a = 0; a < i; a += 8)
              K(this, a, a + 7),
                K(this, a + 1, a + 6),
                K(this, a + 2, a + 5),
                K(this, a + 3, a + 4);
            return this;
          }),
          (m.prototype.toString = function () {
            var i = this.length | 0;
            return i === 0
              ? ''
              : arguments.length === 0
              ? Ze(this, 0, i)
              : v.apply(this, arguments);
          }),
          (m.prototype.equals = function (i) {
            if (!m.isBuffer(i))
              throw new TypeError('Argument must be a Buffer');
            return this === i ? !0 : m.compare(this, i) === 0;
          }),
          (m.prototype.inspect = function () {
            var i = '',
              a = w.h2;
            return (
              this.length > 0 &&
                ((i = this.toString('hex', 0, a).match(/.{2}/g).join(' ')),
                this.length > a && (i += ' ... ')),
              '<Buffer ' + i + '>'
            );
          }),
          (m.prototype.compare = function (i, a, l, p, k) {
            if (!m.isBuffer(i))
              throw new TypeError('Argument must be a Buffer');
            if (
              (a === void 0 && (a = 0),
              l === void 0 && (l = i ? i.length : 0),
              p === void 0 && (p = 0),
              k === void 0 && (k = this.length),
              a < 0 || l > i.length || p < 0 || k > this.length)
            )
              throw new RangeError('out of range index');
            if (p >= k && a >= l) return 0;
            if (p >= k) return -1;
            if (a >= l) return 1;
            if (((a >>>= 0), (l >>>= 0), (p >>>= 0), (k >>>= 0), this === i))
              return 0;
            for (
              var g = k - p,
                V = l - a,
                U = Math.min(g, V),
                ce = this.slice(p, k),
                be = i.slice(a, l),
                re = 0;
              re < U;
              ++re
            )
              if (ce[re] !== be[re]) {
                (g = ce[re]), (V = be[re]);
                break;
              }
            return g < V ? -1 : V < g ? 1 : 0;
          });
        function _e(o, i, a, l, p) {
          if (o.length === 0) return -1;
          if (
            (typeof a == 'string'
              ? ((l = a), (a = 0))
              : a > 2147483647
              ? (a = 2147483647)
              : a < -2147483648 && (a = -2147483648),
            (a = +a),
            isNaN(a) && (a = p ? 0 : o.length - 1),
            a < 0 && (a = o.length + a),
            a >= o.length)
          ) {
            if (p) return -1;
            a = o.length - 1;
          } else if (a < 0)
            if (p) a = 0;
            else return -1;
          if ((typeof i == 'string' && (i = m.from(i, l)), m.isBuffer(i)))
            return i.length === 0 ? -1 : Y(o, i, a, l, p);
          if (typeof i == 'number')
            return (
              (i = i & 255),
              m.TYPED_ARRAY_SUPPORT &&
              typeof Uint8Array.prototype.indexOf == 'function'
                ? p
                  ? Uint8Array.prototype.indexOf.call(o, i, a)
                  : Uint8Array.prototype.lastIndexOf.call(o, i, a)
                : Y(o, [i], a, l, p)
            );
          throw new TypeError('val must be string, number or Buffer');
        }
        function Y(o, i, a, l, p) {
          var k = 1,
            g = o.length,
            V = i.length;
          if (
            l !== void 0 &&
            ((l = String(l).toLowerCase()),
            l === 'ucs2' ||
              l === 'ucs-2' ||
              l === 'utf16le' ||
              l === 'utf-16le')
          ) {
            if (o.length < 2 || i.length < 2) return -1;
            (k = 2), (g /= 2), (V /= 2), (a /= 2);
          }
          function U(He, Be) {
            return k === 1 ? He[Be] : He.readUInt16BE(Be * k);
          }
          var ce;
          if (p) {
            var be = -1;
            for (ce = a; ce < g; ce++)
              if (U(o, ce) === U(i, be === -1 ? 0 : ce - be)) {
                if ((be === -1 && (be = ce), ce - be + 1 === V)) return be * k;
              } else be !== -1 && (ce -= ce - be), (be = -1);
          } else
            for (a + V > g && (a = g - V), ce = a; ce >= 0; ce--) {
              for (var re = !0, H = 0; H < V; H++)
                if (U(o, ce + H) !== U(i, H)) {
                  re = !1;
                  break;
                }
              if (re) return ce;
            }
          return -1;
        }
        (m.prototype.includes = function (i, a, l) {
          return this.indexOf(i, a, l) !== -1;
        }),
          (m.prototype.indexOf = function (i, a, l) {
            return _e(this, i, a, l, !0);
          }),
          (m.prototype.lastIndexOf = function (i, a, l) {
            return _e(this, i, a, l, !1);
          });
        function Ae(o, i, a, l) {
          a = Number(a) || 0;
          var p = o.length - a;
          l ? ((l = Number(l)), l > p && (l = p)) : (l = p);
          var k = i.length;
          if (k % 2 !== 0) throw new TypeError('Invalid hex string');
          l > k / 2 && (l = k / 2);
          for (var g = 0; g < l; ++g) {
            var V = parseInt(i.substr(g * 2, 2), 16);
            if (isNaN(V)) return g;
            o[a + g] = V;
          }
          return g;
        }
        function Ee(o, i, a, l) {
          return y(Te(i, o.length - a), o, a, l);
        }
        function Ue(o, i, a, l) {
          return y(Me(i), o, a, l);
        }
        function Le(o, i, a, l) {
          return Ue(o, i, a, l);
        }
        function Ie(o, i, a, l) {
          return y(ne(i), o, a, l);
        }
        function I(o, i, a, l) {
          return y(Q(i, o.length - a), o, a, l);
        }
        (m.prototype.write = function (i, a, l, p) {
          if (a === void 0) (p = 'utf8'), (l = this.length), (a = 0);
          else if (l === void 0 && typeof a == 'string')
            (p = a), (l = this.length), (a = 0);
          else if (isFinite(a))
            (a = a | 0),
              isFinite(l)
                ? ((l = l | 0), p === void 0 && (p = 'utf8'))
                : ((p = l), (l = void 0));
          else
            throw new Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported',
            );
          var k = this.length - a;
          if (
            ((l === void 0 || l > k) && (l = k),
            (i.length > 0 && (l < 0 || a < 0)) || a > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds');
          p || (p = 'utf8');
          for (var g = !1; ; )
            switch (p) {
              case 'hex':
                return Ae(this, i, a, l);
              case 'utf8':
              case 'utf-8':
                return Ee(this, i, a, l);
              case 'ascii':
                return Ue(this, i, a, l);
              case 'latin1':
              case 'binary':
                return Le(this, i, a, l);
              case 'base64':
                return Ie(this, i, a, l);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return I(this, i, a, l);
              default:
                if (g) throw new TypeError('Unknown encoding: ' + p);
                (p = ('' + p).toLowerCase()), (g = !0);
            }
        }),
          (m.prototype.toJSON = function () {
            return {
              type: 'Buffer',
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function he(o, i, a) {
          return i === 0 && a === o.length
            ? e.fromByteArray(o)
            : e.fromByteArray(o.slice(i, a));
        }
        function Ze(o, i, a) {
          a = Math.min(o.length, a);
          for (var l = [], p = i; p < a; ) {
            var k = o[p],
              g = null,
              V = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
            if (p + V <= a) {
              var U, ce, be, re;
              switch (V) {
                case 1:
                  k < 128 && (g = k);
                  break;
                case 2:
                  (U = o[p + 1]),
                    (U & 192) === 128 &&
                      ((re = ((k & 31) << 6) | (U & 63)), re > 127 && (g = re));
                  break;
                case 3:
                  (U = o[p + 1]),
                    (ce = o[p + 2]),
                    (U & 192) === 128 &&
                      (ce & 192) === 128 &&
                      ((re = ((k & 15) << 12) | ((U & 63) << 6) | (ce & 63)),
                      re > 2047 && (re < 55296 || re > 57343) && (g = re));
                  break;
                case 4:
                  (U = o[p + 1]),
                    (ce = o[p + 2]),
                    (be = o[p + 3]),
                    (U & 192) === 128 &&
                      (ce & 192) === 128 &&
                      (be & 192) === 128 &&
                      ((re =
                        ((k & 15) << 18) |
                        ((U & 63) << 12) |
                        ((ce & 63) << 6) |
                        (be & 63)),
                      re > 65535 && re < 1114112 && (g = re));
              }
            }
            g === null
              ? ((g = 65533), (V = 1))
              : g > 65535 &&
                ((g -= 65536),
                l.push(((g >>> 10) & 1023) | 55296),
                (g = 56320 | (g & 1023))),
              l.push(g),
              (p += V);
          }
          return te(l);
        }
        var se = 4096;
        function te(o) {
          var i = o.length;
          if (i <= se) return String.fromCharCode.apply(String, o);
          for (var a = '', l = 0; l < i; )
            a += String.fromCharCode.apply(String, o.slice(l, (l += se)));
          return a;
        }
        function ue(o, i, a) {
          var l = '';
          a = Math.min(o.length, a);
          for (var p = i; p < a; ++p) l += String.fromCharCode(o[p] & 127);
          return l;
        }
        function z(o, i, a) {
          var l = '';
          a = Math.min(o.length, a);
          for (var p = i; p < a; ++p) l += String.fromCharCode(o[p]);
          return l;
        }
        function ve(o, i, a) {
          var l = o.length;
          (!i || i < 0) && (i = 0), (!a || a < 0 || a > l) && (a = l);
          for (var p = '', k = i; k < a; ++k) p += _(o[k]);
          return p;
        }
        function Ne(o, i, a) {
          for (var l = o.slice(i, a), p = '', k = 0; k < l.length; k += 2)
            p += String.fromCharCode(l[k] + l[k + 1] * 256);
          return p;
        }
        m.prototype.slice = function (i, a) {
          var l = this.length;
          (i = ~~i),
            (a = a === void 0 ? l : ~~a),
            i < 0 ? ((i += l), i < 0 && (i = 0)) : i > l && (i = l),
            a < 0 ? ((a += l), a < 0 && (a = 0)) : a > l && (a = l),
            a < i && (a = i);
          var p;
          if (m.TYPED_ARRAY_SUPPORT)
            (p = this.subarray(i, a)), (p.__proto__ = m.prototype);
          else {
            var k = a - i;
            p = new m(k, void 0);
            for (var g = 0; g < k; ++g) p[g] = this[g + i];
          }
          return p;
        };
        function we(o, i, a) {
          if (o % 1 !== 0 || o < 0) throw new RangeError('offset is not uint');
          if (o + i > a)
            throw new RangeError('Trying to access beyond buffer length');
        }
        (m.prototype.readUIntLE = function (i, a, l) {
          (i = i | 0), (a = a | 0), l || we(i, a, this.length);
          for (var p = this[i], k = 1, g = 0; ++g < a && (k *= 256); )
            p += this[i + g] * k;
          return p;
        }),
          (m.prototype.readUIntBE = function (i, a, l) {
            (i = i | 0), (a = a | 0), l || we(i, a, this.length);
            for (var p = this[i + --a], k = 1; a > 0 && (k *= 256); )
              p += this[i + --a] * k;
            return p;
          }),
          (m.prototype.readUInt8 = function (i, a) {
            return a || we(i, 1, this.length), this[i];
          }),
          (m.prototype.readUInt16LE = function (i, a) {
            return a || we(i, 2, this.length), this[i] | (this[i + 1] << 8);
          }),
          (m.prototype.readUInt16BE = function (i, a) {
            return a || we(i, 2, this.length), (this[i] << 8) | this[i + 1];
          }),
          (m.prototype.readUInt32LE = function (i, a) {
            return (
              a || we(i, 4, this.length),
              (this[i] | (this[i + 1] << 8) | (this[i + 2] << 16)) +
                this[i + 3] * 16777216
            );
          }),
          (m.prototype.readUInt32BE = function (i, a) {
            return (
              a || we(i, 4, this.length),
              this[i] * 16777216 +
                ((this[i + 1] << 16) | (this[i + 2] << 8) | this[i + 3])
            );
          }),
          (m.prototype.readIntLE = function (i, a, l) {
            (i = i | 0), (a = a | 0), l || we(i, a, this.length);
            for (var p = this[i], k = 1, g = 0; ++g < a && (k *= 256); )
              p += this[i + g] * k;
            return (k *= 128), p >= k && (p -= Math.pow(2, 8 * a)), p;
          }),
          (m.prototype.readIntBE = function (i, a, l) {
            (i = i | 0), (a = a | 0), l || we(i, a, this.length);
            for (var p = a, k = 1, g = this[i + --p]; p > 0 && (k *= 256); )
              g += this[i + --p] * k;
            return (k *= 128), g >= k && (g -= Math.pow(2, 8 * a)), g;
          }),
          (m.prototype.readInt8 = function (i, a) {
            return (
              a || we(i, 1, this.length),
              this[i] & 128 ? (255 - this[i] + 1) * -1 : this[i]
            );
          }),
          (m.prototype.readInt16LE = function (i, a) {
            a || we(i, 2, this.length);
            var l = this[i] | (this[i + 1] << 8);
            return l & 32768 ? l | 4294901760 : l;
          }),
          (m.prototype.readInt16BE = function (i, a) {
            a || we(i, 2, this.length);
            var l = this[i + 1] | (this[i] << 8);
            return l & 32768 ? l | 4294901760 : l;
          }),
          (m.prototype.readInt32LE = function (i, a) {
            return (
              a || we(i, 4, this.length),
              this[i] |
                (this[i + 1] << 8) |
                (this[i + 2] << 16) |
                (this[i + 3] << 24)
            );
          }),
          (m.prototype.readInt32BE = function (i, a) {
            return (
              a || we(i, 4, this.length),
              (this[i] << 24) |
                (this[i + 1] << 16) |
                (this[i + 2] << 8) |
                this[i + 3]
            );
          }),
          (m.prototype.readFloatLE = function (i, a) {
            return a || we(i, 4, this.length), ge.read(this, i, !0, 23, 4);
          }),
          (m.prototype.readFloatBE = function (i, a) {
            return a || we(i, 4, this.length), ge.read(this, i, !1, 23, 4);
          }),
          (m.prototype.readDoubleLE = function (i, a) {
            return a || we(i, 8, this.length), ge.read(this, i, !0, 52, 8);
          }),
          (m.prototype.readDoubleBE = function (i, a) {
            return a || we(i, 8, this.length), ge.read(this, i, !1, 52, 8);
          });
        function O(o, i, a, l, p, k) {
          if (!m.isBuffer(o))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (i > p || i < k)
            throw new RangeError('"value" argument is out of bounds');
          if (a + l > o.length) throw new RangeError('Index out of range');
        }
        (m.prototype.writeUIntLE = function (i, a, l, p) {
          if (((i = +i), (a = a | 0), (l = l | 0), !p)) {
            var k = Math.pow(2, 8 * l) - 1;
            O(this, i, a, l, k, 0);
          }
          var g = 1,
            V = 0;
          for (this[a] = i & 255; ++V < l && (g *= 256); )
            this[a + V] = (i / g) & 255;
          return a + l;
        }),
          (m.prototype.writeUIntBE = function (i, a, l, p) {
            if (((i = +i), (a = a | 0), (l = l | 0), !p)) {
              var k = Math.pow(2, 8 * l) - 1;
              O(this, i, a, l, k, 0);
            }
            var g = l - 1,
              V = 1;
            for (this[a + g] = i & 255; --g >= 0 && (V *= 256); )
              this[a + g] = (i / V) & 255;
            return a + l;
          }),
          (m.prototype.writeUInt8 = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || O(this, i, a, 1, 255, 0),
              m.TYPED_ARRAY_SUPPORT || (i = Math.floor(i)),
              (this[a] = i & 255),
              a + 1
            );
          });
        function Se(o, i, a, l) {
          i < 0 && (i = 65535 + i + 1);
          for (var p = 0, k = Math.min(o.length - a, 2); p < k; ++p)
            o[a + p] =
              (i & (255 << (8 * (l ? p : 1 - p)))) >>> ((l ? p : 1 - p) * 8);
        }
        (m.prototype.writeUInt16LE = function (i, a, l) {
          return (
            (i = +i),
            (a = a | 0),
            l || O(this, i, a, 2, 65535, 0),
            m.TYPED_ARRAY_SUPPORT
              ? ((this[a] = i & 255), (this[a + 1] = i >>> 8))
              : Se(this, i, a, !0),
            a + 2
          );
        }),
          (m.prototype.writeUInt16BE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || O(this, i, a, 2, 65535, 0),
              m.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i >>> 8), (this[a + 1] = i & 255))
                : Se(this, i, a, !1),
              a + 2
            );
          });
        function Ke(o, i, a, l) {
          i < 0 && (i = 4294967295 + i + 1);
          for (var p = 0, k = Math.min(o.length - a, 4); p < k; ++p)
            o[a + p] = (i >>> ((l ? p : 3 - p) * 8)) & 255;
        }
        (m.prototype.writeUInt32LE = function (i, a, l) {
          return (
            (i = +i),
            (a = a | 0),
            l || O(this, i, a, 4, 4294967295, 0),
            m.TYPED_ARRAY_SUPPORT
              ? ((this[a + 3] = i >>> 24),
                (this[a + 2] = i >>> 16),
                (this[a + 1] = i >>> 8),
                (this[a] = i & 255))
              : Ke(this, i, a, !0),
            a + 4
          );
        }),
          (m.prototype.writeUInt32BE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || O(this, i, a, 4, 4294967295, 0),
              m.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i >>> 24),
                  (this[a + 1] = i >>> 16),
                  (this[a + 2] = i >>> 8),
                  (this[a + 3] = i & 255))
                : Ke(this, i, a, !1),
              a + 4
            );
          }),
          (m.prototype.writeIntLE = function (i, a, l, p) {
            if (((i = +i), (a = a | 0), !p)) {
              var k = Math.pow(2, 8 * l - 1);
              O(this, i, a, l, k - 1, -k);
            }
            var g = 0,
              V = 1,
              U = 0;
            for (this[a] = i & 255; ++g < l && (V *= 256); )
              i < 0 && U === 0 && this[a + g - 1] !== 0 && (U = 1),
                (this[a + g] = (((i / V) >> 0) - U) & 255);
            return a + l;
          }),
          (m.prototype.writeIntBE = function (i, a, l, p) {
            if (((i = +i), (a = a | 0), !p)) {
              var k = Math.pow(2, 8 * l - 1);
              O(this, i, a, l, k - 1, -k);
            }
            var g = l - 1,
              V = 1,
              U = 0;
            for (this[a + g] = i & 255; --g >= 0 && (V *= 256); )
              i < 0 && U === 0 && this[a + g + 1] !== 0 && (U = 1),
                (this[a + g] = (((i / V) >> 0) - U) & 255);
            return a + l;
          }),
          (m.prototype.writeInt8 = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || O(this, i, a, 1, 127, -128),
              m.TYPED_ARRAY_SUPPORT || (i = Math.floor(i)),
              i < 0 && (i = 255 + i + 1),
              (this[a] = i & 255),
              a + 1
            );
          }),
          (m.prototype.writeInt16LE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || O(this, i, a, 2, 32767, -32768),
              m.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i & 255), (this[a + 1] = i >>> 8))
                : Se(this, i, a, !0),
              a + 2
            );
          }),
          (m.prototype.writeInt16BE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || O(this, i, a, 2, 32767, -32768),
              m.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i >>> 8), (this[a + 1] = i & 255))
                : Se(this, i, a, !1),
              a + 2
            );
          }),
          (m.prototype.writeInt32LE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || O(this, i, a, 4, 2147483647, -2147483648),
              m.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i & 255),
                  (this[a + 1] = i >>> 8),
                  (this[a + 2] = i >>> 16),
                  (this[a + 3] = i >>> 24))
                : Ke(this, i, a, !0),
              a + 4
            );
          }),
          (m.prototype.writeInt32BE = function (i, a, l) {
            return (
              (i = +i),
              (a = a | 0),
              l || O(this, i, a, 4, 2147483647, -2147483648),
              i < 0 && (i = 4294967295 + i + 1),
              m.TYPED_ARRAY_SUPPORT
                ? ((this[a] = i >>> 24),
                  (this[a + 1] = i >>> 16),
                  (this[a + 2] = i >>> 8),
                  (this[a + 3] = i & 255))
                : Ke(this, i, a, !1),
              a + 4
            );
          });
        function T(o, i, a, l, p, k) {
          if (a + l > o.length) throw new RangeError('Index out of range');
          if (a < 0) throw new RangeError('Index out of range');
        }
        function S(o, i, a, l, p) {
          return (
            p || T(o, i, a, 4, 34028234663852886e22, -34028234663852886e22),
            ge.write(o, i, a, l, 23, 4),
            a + 4
          );
        }
        (m.prototype.writeFloatLE = function (i, a, l) {
          return S(this, i, a, !0, l);
        }),
          (m.prototype.writeFloatBE = function (i, a, l) {
            return S(this, i, a, !1, l);
          });
        function P(o, i, a, l, p) {
          return (
            p || T(o, i, a, 8, 17976931348623157e292, -17976931348623157e292),
            ge.write(o, i, a, l, 52, 8),
            a + 8
          );
        }
        (m.prototype.writeDoubleLE = function (i, a, l) {
          return P(this, i, a, !0, l);
        }),
          (m.prototype.writeDoubleBE = function (i, a, l) {
            return P(this, i, a, !1, l);
          }),
          (m.prototype.copy = function (i, a, l, p) {
            if (
              (l || (l = 0),
              !p && p !== 0 && (p = this.length),
              a >= i.length && (a = i.length),
              a || (a = 0),
              p > 0 && p < l && (p = l),
              p === l || i.length === 0 || this.length === 0)
            )
              return 0;
            if (a < 0) throw new RangeError('targetStart out of bounds');
            if (l < 0 || l >= this.length)
              throw new RangeError('sourceStart out of bounds');
            if (p < 0) throw new RangeError('sourceEnd out of bounds');
            p > this.length && (p = this.length),
              i.length - a < p - l && (p = i.length - a + l);
            var k = p - l,
              g;
            if (this === i && l < a && a < p)
              for (g = k - 1; g >= 0; --g) i[g + a] = this[g + l];
            else if (k < 1e3 || !m.TYPED_ARRAY_SUPPORT)
              for (g = 0; g < k; ++g) i[g + a] = this[g + l];
            else Uint8Array.prototype.set.call(i, this.subarray(l, l + k), a);
            return k;
          }),
          (m.prototype.fill = function (i, a, l, p) {
            if (typeof i == 'string') {
              if (
                (typeof a == 'string'
                  ? ((p = a), (a = 0), (l = this.length))
                  : typeof l == 'string' && ((p = l), (l = this.length)),
                i.length === 1)
              ) {
                var k = i.charCodeAt(0);
                k < 256 && (i = k);
              }
              if (p !== void 0 && typeof p != 'string')
                throw new TypeError('encoding must be a string');
              if (typeof p == 'string' && !m.isEncoding(p))
                throw new TypeError('Unknown encoding: ' + p);
            } else typeof i == 'number' && (i = i & 255);
            if (a < 0 || this.length < a || this.length < l)
              throw new RangeError('Out of range index');
            if (l <= a) return this;
            (a = a >>> 0),
              (l = l === void 0 ? this.length : l >>> 0),
              i || (i = 0);
            var g;
            if (typeof i == 'number') for (g = a; g < l; ++g) this[g] = i;
            else {
              var V = m.isBuffer(i) ? i : Te(new m(i, p).toString()),
                U = V.length;
              for (g = 0; g < l - a; ++g) this[g + a] = V[g % U];
            }
            return this;
          });
        var M = /[^+\/0-9A-Za-z-_]/g;
        function G(o) {
          if (((o = ae(o).replace(M, '')), o.length < 2)) return '';
          for (; o.length % 4 !== 0; ) o = o + '=';
          return o;
        }
        function ae(o) {
          return o.trim ? o.trim() : o.replace(/^\s+|\s+$/g, '');
        }
        function _(o) {
          return o < 16 ? '0' + o.toString(16) : o.toString(16);
        }
        function Te(o, i) {
          i = i || 1 / 0;
          for (var a, l = o.length, p = null, k = [], g = 0; g < l; ++g) {
            if (((a = o.charCodeAt(g)), a > 55295 && a < 57344)) {
              if (!p) {
                if (a > 56319) {
                  (i -= 3) > -1 && k.push(239, 191, 189);
                  continue;
                } else if (g + 1 === l) {
                  (i -= 3) > -1 && k.push(239, 191, 189);
                  continue;
                }
                p = a;
                continue;
              }
              if (a < 56320) {
                (i -= 3) > -1 && k.push(239, 191, 189), (p = a);
                continue;
              }
              a = (((p - 55296) << 10) | (a - 56320)) + 65536;
            } else p && (i -= 3) > -1 && k.push(239, 191, 189);
            if (((p = null), a < 128)) {
              if ((i -= 1) < 0) break;
              k.push(a);
            } else if (a < 2048) {
              if ((i -= 2) < 0) break;
              k.push((a >> 6) | 192, (a & 63) | 128);
            } else if (a < 65536) {
              if ((i -= 3) < 0) break;
              k.push((a >> 12) | 224, ((a >> 6) & 63) | 128, (a & 63) | 128);
            } else if (a < 1114112) {
              if ((i -= 4) < 0) break;
              k.push(
                (a >> 18) | 240,
                ((a >> 12) & 63) | 128,
                ((a >> 6) & 63) | 128,
                (a & 63) | 128,
              );
            } else throw new Error('Invalid code point');
          }
          return k;
        }
        function Me(o) {
          for (var i = [], a = 0; a < o.length; ++a)
            i.push(o.charCodeAt(a) & 255);
          return i;
        }
        function Q(o, i) {
          for (var a, l, p, k = [], g = 0; g < o.length && !((i -= 2) < 0); ++g)
            (a = o.charCodeAt(g)),
              (l = a >> 8),
              (p = a % 256),
              k.push(p),
              k.push(l);
          return k;
        }
        function ne(o) {
          return e.toByteArray(G(o));
        }
        function y(o, i, a, l) {
          for (var p = 0; p < l && !(p + a >= i.length || p >= o.length); ++p)
            i[p + a] = o[p];
          return p;
        }
        function De(o) {
          return o !== o;
        }
      },
      14093: function (Re, w, $) {
        'use strict';
        $.r(w),
          $.d(w, {
            default: function () {
              return nl;
            },
          });
        var u;
        (function (t) {
          t[(t.NONE = 0)] = 'NONE';
          const s = 1;
          t[(t._abstract = s)] = '_abstract';
          const c = s + 1;
          t[(t._accessor = c)] = '_accessor';
          const f = c + 1;
          t[(t._as = f)] = '_as';
          const d = f + 1;
          t[(t._assert = d)] = '_assert';
          const b = d + 1;
          t[(t._asserts = b)] = '_asserts';
          const F = b + 1;
          t[(t._async = F)] = '_async';
          const J = F + 1;
          t[(t._await = J)] = '_await';
          const oe = J + 1;
          t[(t._checks = oe)] = '_checks';
          const ye = oe + 1;
          t[(t._constructor = ye)] = '_constructor';
          const pe = ye + 1;
          t[(t._declare = pe)] = '_declare';
          const ee = pe + 1;
          t[(t._enum = ee)] = '_enum';
          const ke = ee + 1;
          t[(t._exports = ke)] = '_exports';
          const Pe = ke + 1;
          t[(t._from = Pe)] = '_from';
          const Qe = Pe + 1;
          t[(t._get = Qe)] = '_get';
          const We = Qe + 1;
          t[(t._global = We)] = '_global';
          const et = We + 1;
          t[(t._implements = et)] = '_implements';
          const ze = et + 1;
          t[(t._infer = ze)] = '_infer';
          const lt = ze + 1;
          t[(t._interface = lt)] = '_interface';
          const Je = lt + 1;
          t[(t._is = Je)] = '_is';
          const vt = Je + 1;
          t[(t._keyof = vt)] = '_keyof';
          const wt = vt + 1;
          t[(t._mixins = wt)] = '_mixins';
          const Nt = wt + 1;
          t[(t._module = Nt)] = '_module';
          const mt = Nt + 1;
          t[(t._namespace = mt)] = '_namespace';
          const dt = mt + 1;
          t[(t._of = dt)] = '_of';
          const kt = dt + 1;
          t[(t._opaque = kt)] = '_opaque';
          const It = kt + 1;
          t[(t._out = It)] = '_out';
          const X = It + 1;
          t[(t._override = X)] = '_override';
          const R = X + 1;
          t[(t._private = R)] = '_private';
          const q = R + 1;
          t[(t._protected = q)] = '_protected';
          const fe = q + 1;
          t[(t._proto = fe)] = '_proto';
          const xe = fe + 1;
          t[(t._public = xe)] = '_public';
          const me = xe + 1;
          t[(t._readonly = me)] = '_readonly';
          const Oe = me + 1;
          t[(t._require = Oe)] = '_require';
          const $e = Oe + 1;
          t[(t._satisfies = $e)] = '_satisfies';
          const Ve = $e + 1;
          t[(t._set = Ve)] = '_set';
          const st = Ve + 1;
          t[(t._static = st)] = '_static';
          const tt = st + 1;
          t[(t._symbol = tt)] = '_symbol';
          const ot = tt + 1;
          t[(t._type = ot)] = '_type';
          const Gt = ot + 1;
          t[(t._unique = Gt)] = '_unique';
          const fn = Gt + 1;
          t[(t._using = fn)] = '_using';
        })(u || (u = {}));
        var e;
        (function (t) {
          t[(t.PRECEDENCE_MASK = 15)] = 'PRECEDENCE_MASK';
          const s = 16;
          t[(t.IS_KEYWORD = s)] = 'IS_KEYWORD';
          const c = 32;
          t[(t.IS_ASSIGN = c)] = 'IS_ASSIGN';
          const f = 64;
          t[(t.IS_RIGHT_ASSOCIATIVE = f)] = 'IS_RIGHT_ASSOCIATIVE';
          const d = 128;
          t[(t.IS_PREFIX = d)] = 'IS_PREFIX';
          const b = 256;
          t[(t.IS_POSTFIX = b)] = 'IS_POSTFIX';
          const F = 512;
          t[(t.IS_EXPRESSION_START = F)] = 'IS_EXPRESSION_START';
          const J = 512;
          t[(t.num = J)] = 'num';
          const oe = 1536;
          t[(t.bigint = oe)] = 'bigint';
          const ye = 2560;
          t[(t.decimal = ye)] = 'decimal';
          const pe = 3584;
          t[(t.regexp = pe)] = 'regexp';
          const ee = 4608;
          t[(t.string = ee)] = 'string';
          const ke = 5632;
          t[(t.name = ke)] = 'name';
          const Pe = 6144;
          t[(t.eof = Pe)] = 'eof';
          const Qe = 7680;
          t[(t.bracketL = Qe)] = 'bracketL';
          const We = 8192;
          t[(t.bracketR = We)] = 'bracketR';
          const et = 9728;
          t[(t.braceL = et)] = 'braceL';
          const ze = 10752;
          t[(t.braceBarL = ze)] = 'braceBarL';
          const lt = 11264;
          t[(t.braceR = lt)] = 'braceR';
          const Je = 12288;
          t[(t.braceBarR = Je)] = 'braceBarR';
          const vt = 13824;
          t[(t.parenL = vt)] = 'parenL';
          const wt = 14336;
          t[(t.parenR = wt)] = 'parenR';
          const Nt = 15360;
          t[(t.comma = Nt)] = 'comma';
          const mt = 16384;
          t[(t.semi = mt)] = 'semi';
          const dt = 17408;
          t[(t.colon = dt)] = 'colon';
          const kt = 18432;
          t[(t.doubleColon = kt)] = 'doubleColon';
          const It = 19456;
          t[(t.dot = It)] = 'dot';
          const X = 20480;
          t[(t.question = X)] = 'question';
          const R = 21504;
          t[(t.questionDot = R)] = 'questionDot';
          const q = 22528;
          t[(t.arrow = q)] = 'arrow';
          const fe = 23552;
          t[(t.template = fe)] = 'template';
          const xe = 24576;
          t[(t.ellipsis = xe)] = 'ellipsis';
          const me = 25600;
          t[(t.backQuote = me)] = 'backQuote';
          const Oe = 27136;
          t[(t.dollarBraceL = Oe)] = 'dollarBraceL';
          const $e = 27648;
          t[(t.at = $e)] = 'at';
          const Ve = 29184;
          t[(t.hash = Ve)] = 'hash';
          const st = 29728;
          t[(t.eq = st)] = 'eq';
          const tt = 30752;
          t[(t.assign = tt)] = 'assign';
          const ot = 32640;
          t[(t.preIncDec = ot)] = 'preIncDec';
          const Gt = 33664;
          t[(t.postIncDec = Gt)] = 'postIncDec';
          const fn = 34432;
          t[(t.bang = fn)] = 'bang';
          const Er = 35456;
          t[(t.tilde = Er)] = 'tilde';
          const Ar = 35841;
          t[(t.pipeline = Ar)] = 'pipeline';
          const Sr = 36866;
          t[(t.nullishCoalescing = Sr)] = 'nullishCoalescing';
          const vr = 37890;
          t[(t.logicalOR = vr)] = 'logicalOR';
          const Nr = 38915;
          t[(t.logicalAND = Nr)] = 'logicalAND';
          const Cr = 39940;
          t[(t.bitwiseOR = Cr)] = 'bitwiseOR';
          const Rr = 40965;
          t[(t.bitwiseXOR = Rr)] = 'bitwiseXOR';
          const Pr = 41990;
          t[(t.bitwiseAND = Pr)] = 'bitwiseAND';
          const Lr = 43015;
          t[(t.equality = Lr)] = 'equality';
          const Dr = 44040;
          t[(t.lessThan = Dr)] = 'lessThan';
          const Fr = 45064;
          t[(t.greaterThan = Fr)] = 'greaterThan';
          const Or = 46088;
          t[(t.relationalOrEqual = Or)] = 'relationalOrEqual';
          const Mr = 47113;
          t[(t.bitShiftL = Mr)] = 'bitShiftL';
          const Br = 48137;
          t[(t.bitShiftR = Br)] = 'bitShiftR';
          const jr = 49802;
          t[(t.plus = jr)] = 'plus';
          const qr = 50826;
          t[(t.minus = qr)] = 'minus';
          const Ur = 51723;
          t[(t.modulo = Ur)] = 'modulo';
          const $r = 52235;
          t[(t.star = $r)] = 'star';
          const Vr = 53259;
          t[(t.slash = Vr)] = 'slash';
          const Wr = 54348;
          t[(t.exponent = Wr)] = 'exponent';
          const Hr = 55296;
          t[(t.jsxName = Hr)] = 'jsxName';
          const Yr = 56320;
          t[(t.jsxText = Yr)] = 'jsxText';
          const Gr = 57344;
          t[(t.jsxEmptyText = Gr)] = 'jsxEmptyText';
          const Xr = 58880;
          t[(t.jsxTagStart = Xr)] = 'jsxTagStart';
          const zr = 59392;
          t[(t.jsxTagEnd = zr)] = 'jsxTagEnd';
          const Jr = 60928;
          t[(t.typeParameterStart = Jr)] = 'typeParameterStart';
          const Qr = 61440;
          t[(t.nonNullAssertion = Qr)] = 'nonNullAssertion';
          const Zr = 62480;
          t[(t._break = Zr)] = '_break';
          const Kr = 63504;
          t[(t._case = Kr)] = '_case';
          const es = 64528;
          t[(t._catch = es)] = '_catch';
          const ts = 65552;
          t[(t._continue = ts)] = '_continue';
          const ns = 66576;
          t[(t._debugger = ns)] = '_debugger';
          const rs = 67600;
          t[(t._default = rs)] = '_default';
          const ss = 68624;
          t[(t._do = ss)] = '_do';
          const os = 69648;
          t[(t._else = os)] = '_else';
          const is = 70672;
          t[(t._finally = is)] = '_finally';
          const as = 71696;
          t[(t._for = as)] = '_for';
          const cs = 73232;
          t[(t._function = cs)] = '_function';
          const ls = 73744;
          t[(t._if = ls)] = '_if';
          const us = 74768;
          t[(t._return = us)] = '_return';
          const fs = 75792;
          t[(t._switch = fs)] = '_switch';
          const hs = 77456;
          t[(t._throw = hs)] = '_throw';
          const ps = 77840;
          t[(t._try = ps)] = '_try';
          const ms = 78864;
          t[(t._var = ms)] = '_var';
          const ds = 79888;
          t[(t._let = ds)] = '_let';
          const ks = 80912;
          t[(t._const = ks)] = '_const';
          const gs = 81936;
          t[(t._while = gs)] = '_while';
          const _s = 82960;
          t[(t._with = _s)] = '_with';
          const ys = 84496;
          t[(t._new = ys)] = '_new';
          const xs = 85520;
          t[(t._this = xs)] = '_this';
          const ws = 86544;
          t[(t._super = ws)] = '_super';
          const Is = 87568;
          t[(t._class = Is)] = '_class';
          const bs = 88080;
          t[(t._extends = bs)] = '_extends';
          const Ts = 89104;
          t[(t._export = Ts)] = '_export';
          const Es = 90640;
          t[(t._import = Es)] = '_import';
          const As = 91664;
          t[(t._yield = As)] = '_yield';
          const Ss = 92688;
          t[(t._null = Ss)] = '_null';
          const vs = 93712;
          t[(t._true = vs)] = '_true';
          const Ns = 94736;
          t[(t._false = Ns)] = '_false';
          const Cs = 95256;
          t[(t._in = Cs)] = '_in';
          const Rs = 96280;
          t[(t._instanceof = Rs)] = '_instanceof';
          const Ps = 97936;
          t[(t._typeof = Ps)] = '_typeof';
          const Ls = 98960;
          t[(t._void = Ls)] = '_void';
          const rl = 99984;
          t[(t._delete = rl)] = '_delete';
          const sl = 100880;
          t[(t._async = sl)] = '_async';
          const ol = 101904;
          t[(t._get = ol)] = '_get';
          const il = 102928;
          t[(t._set = il)] = '_set';
          const al = 103952;
          t[(t._declare = al)] = '_declare';
          const cl = 104976;
          t[(t._readonly = cl)] = '_readonly';
          const ll = 106e3;
          t[(t._abstract = ll)] = '_abstract';
          const ul = 107024;
          t[(t._static = ul)] = '_static';
          const fl = 107536;
          t[(t._public = fl)] = '_public';
          const hl = 108560;
          t[(t._private = hl)] = '_private';
          const pl = 109584;
          t[(t._protected = pl)] = '_protected';
          const ml = 110608;
          t[(t._override = ml)] = '_override';
          const dl = 112144;
          t[(t._as = dl)] = '_as';
          const kl = 113168;
          t[(t._enum = kl)] = '_enum';
          const gl = 114192;
          t[(t._type = gl)] = '_type';
          const _l = 115216;
          t[(t._implements = _l)] = '_implements';
        })(e || (e = {}));
        function ge(t) {
          switch (t) {
            case e.num:
              return 'num';
            case e.bigint:
              return 'bigint';
            case e.decimal:
              return 'decimal';
            case e.regexp:
              return 'regexp';
            case e.string:
              return 'string';
            case e.name:
              return 'name';
            case e.eof:
              return 'eof';
            case e.bracketL:
              return '[';
            case e.bracketR:
              return ']';
            case e.braceL:
              return '{';
            case e.braceBarL:
              return '{|';
            case e.braceR:
              return '}';
            case e.braceBarR:
              return '|}';
            case e.parenL:
              return '(';
            case e.parenR:
              return ')';
            case e.comma:
              return ',';
            case e.semi:
              return ';';
            case e.colon:
              return ':';
            case e.doubleColon:
              return '::';
            case e.dot:
              return '.';
            case e.question:
              return '?';
            case e.questionDot:
              return '?.';
            case e.arrow:
              return '=>';
            case e.template:
              return 'template';
            case e.ellipsis:
              return '...';
            case e.backQuote:
              return '`';
            case e.dollarBraceL:
              return '${';
            case e.at:
              return '@';
            case e.hash:
              return '#';
            case e.eq:
              return '=';
            case e.assign:
              return '_=';
            case e.preIncDec:
              return '++/--';
            case e.postIncDec:
              return '++/--';
            case e.bang:
              return '!';
            case e.tilde:
              return '~';
            case e.pipeline:
              return '|>';
            case e.nullishCoalescing:
              return '??';
            case e.logicalOR:
              return '||';
            case e.logicalAND:
              return '&&';
            case e.bitwiseOR:
              return '|';
            case e.bitwiseXOR:
              return '^';
            case e.bitwiseAND:
              return '&';
            case e.equality:
              return '==/!=';
            case e.lessThan:
              return '<';
            case e.greaterThan:
              return '>';
            case e.relationalOrEqual:
              return '<=/>=';
            case e.bitShiftL:
              return '<<';
            case e.bitShiftR:
              return '>>/>>>';
            case e.plus:
              return '+';
            case e.minus:
              return '-';
            case e.modulo:
              return '%';
            case e.star:
              return '*';
            case e.slash:
              return '/';
            case e.exponent:
              return '**';
            case e.jsxName:
              return 'jsxName';
            case e.jsxText:
              return 'jsxText';
            case e.jsxEmptyText:
              return 'jsxEmptyText';
            case e.jsxTagStart:
              return 'jsxTagStart';
            case e.jsxTagEnd:
              return 'jsxTagEnd';
            case e.typeParameterStart:
              return 'typeParameterStart';
            case e.nonNullAssertion:
              return 'nonNullAssertion';
            case e._break:
              return 'break';
            case e._case:
              return 'case';
            case e._catch:
              return 'catch';
            case e._continue:
              return 'continue';
            case e._debugger:
              return 'debugger';
            case e._default:
              return 'default';
            case e._do:
              return 'do';
            case e._else:
              return 'else';
            case e._finally:
              return 'finally';
            case e._for:
              return 'for';
            case e._function:
              return 'function';
            case e._if:
              return 'if';
            case e._return:
              return 'return';
            case e._switch:
              return 'switch';
            case e._throw:
              return 'throw';
            case e._try:
              return 'try';
            case e._var:
              return 'var';
            case e._let:
              return 'let';
            case e._const:
              return 'const';
            case e._while:
              return 'while';
            case e._with:
              return 'with';
            case e._new:
              return 'new';
            case e._this:
              return 'this';
            case e._super:
              return 'super';
            case e._class:
              return 'class';
            case e._extends:
              return 'extends';
            case e._export:
              return 'export';
            case e._import:
              return 'import';
            case e._yield:
              return 'yield';
            case e._null:
              return 'null';
            case e._true:
              return 'true';
            case e._false:
              return 'false';
            case e._in:
              return 'in';
            case e._instanceof:
              return 'instanceof';
            case e._typeof:
              return 'typeof';
            case e._void:
              return 'void';
            case e._delete:
              return 'delete';
            case e._async:
              return 'async';
            case e._get:
              return 'get';
            case e._set:
              return 'set';
            case e._declare:
              return 'declare';
            case e._readonly:
              return 'readonly';
            case e._abstract:
              return 'abstract';
            case e._static:
              return 'static';
            case e._public:
              return 'public';
            case e._private:
              return 'private';
            case e._protected:
              return 'protected';
            case e._override:
              return 'override';
            case e._as:
              return 'as';
            case e._enum:
              return 'enum';
            case e._type:
              return 'type';
            case e._implements:
              return 'implements';
            default:
              return '';
          }
        }
        class L {
          constructor(n, s, c) {
            (this.startTokenIndex = n),
              (this.endTokenIndex = s),
              (this.isFunctionScope = c);
          }
        }
        class W {
          constructor(n, s, c, f, d, b, F, J, oe, ye, pe, ee, ke) {
            (this.potentialArrowAt = n),
              (this.noAnonFunctionType = s),
              (this.inDisallowConditionalTypesContext = c),
              (this.tokensLength = f),
              (this.scopesLength = d),
              (this.pos = b),
              (this.type = F),
              (this.contextualKeyword = J),
              (this.start = oe),
              (this.end = ye),
              (this.isType = pe),
              (this.scopeDepth = ee),
              (this.error = ke);
          }
        }
        class A {
          constructor() {
            A.prototype.__init.call(this),
              A.prototype.__init2.call(this),
              A.prototype.__init3.call(this),
              A.prototype.__init4.call(this),
              A.prototype.__init5.call(this),
              A.prototype.__init6.call(this),
              A.prototype.__init7.call(this),
              A.prototype.__init8.call(this),
              A.prototype.__init9.call(this),
              A.prototype.__init10.call(this),
              A.prototype.__init11.call(this),
              A.prototype.__init12.call(this),
              A.prototype.__init13.call(this);
          }
          __init() {
            this.potentialArrowAt = -1;
          }
          __init2() {
            this.noAnonFunctionType = !1;
          }
          __init3() {
            this.inDisallowConditionalTypesContext = !1;
          }
          __init4() {
            this.tokens = [];
          }
          __init5() {
            this.scopes = [];
          }
          __init6() {
            this.pos = 0;
          }
          __init7() {
            this.type = e.eof;
          }
          __init8() {
            this.contextualKeyword = u.NONE;
          }
          __init9() {
            this.start = 0;
          }
          __init10() {
            this.end = 0;
          }
          __init11() {
            this.isType = !1;
          }
          __init12() {
            this.scopeDepth = 0;
          }
          __init13() {
            this.error = null;
          }
          snapshot() {
            return new W(
              this.potentialArrowAt,
              this.noAnonFunctionType,
              this.inDisallowConditionalTypesContext,
              this.tokens.length,
              this.scopes.length,
              this.pos,
              this.type,
              this.contextualKeyword,
              this.start,
              this.end,
              this.isType,
              this.scopeDepth,
              this.error,
            );
          }
          restoreFromSnapshot(n) {
            (this.potentialArrowAt = n.potentialArrowAt),
              (this.noAnonFunctionType = n.noAnonFunctionType),
              (this.inDisallowConditionalTypesContext =
                n.inDisallowConditionalTypesContext),
              (this.tokens.length = n.tokensLength),
              (this.scopes.length = n.scopesLength),
              (this.pos = n.pos),
              (this.type = n.type),
              (this.contextualKeyword = n.contextualKeyword),
              (this.start = n.start),
              (this.end = n.end),
              (this.isType = n.isType),
              (this.scopeDepth = n.scopeDepth),
              (this.error = n.error);
          }
        }
        var h;
        (function (t) {
          t[(t.backSpace = 8)] = 'backSpace';
          const s = 10;
          t[(t.lineFeed = s)] = 'lineFeed';
          const c = 9;
          t[(t.tab = c)] = 'tab';
          const f = 13;
          t[(t.carriageReturn = f)] = 'carriageReturn';
          const d = 14;
          t[(t.shiftOut = d)] = 'shiftOut';
          const b = 32;
          t[(t.space = b)] = 'space';
          const F = 33;
          t[(t.exclamationMark = F)] = 'exclamationMark';
          const J = 34;
          t[(t.quotationMark = J)] = 'quotationMark';
          const oe = 35;
          t[(t.numberSign = oe)] = 'numberSign';
          const ye = 36;
          t[(t.dollarSign = ye)] = 'dollarSign';
          const pe = 37;
          t[(t.percentSign = pe)] = 'percentSign';
          const ee = 38;
          t[(t.ampersand = ee)] = 'ampersand';
          const ke = 39;
          t[(t.apostrophe = ke)] = 'apostrophe';
          const Pe = 40;
          t[(t.leftParenthesis = Pe)] = 'leftParenthesis';
          const Qe = 41;
          t[(t.rightParenthesis = Qe)] = 'rightParenthesis';
          const We = 42;
          t[(t.asterisk = We)] = 'asterisk';
          const et = 43;
          t[(t.plusSign = et)] = 'plusSign';
          const ze = 44;
          t[(t.comma = ze)] = 'comma';
          const lt = 45;
          t[(t.dash = lt)] = 'dash';
          const Je = 46;
          t[(t.dot = Je)] = 'dot';
          const vt = 47;
          t[(t.slash = vt)] = 'slash';
          const wt = 48;
          t[(t.digit0 = wt)] = 'digit0';
          const Nt = 49;
          t[(t.digit1 = Nt)] = 'digit1';
          const mt = 50;
          t[(t.digit2 = mt)] = 'digit2';
          const dt = 51;
          t[(t.digit3 = dt)] = 'digit3';
          const kt = 52;
          t[(t.digit4 = kt)] = 'digit4';
          const It = 53;
          t[(t.digit5 = It)] = 'digit5';
          const X = 54;
          t[(t.digit6 = X)] = 'digit6';
          const R = 55;
          t[(t.digit7 = R)] = 'digit7';
          const q = 56;
          t[(t.digit8 = q)] = 'digit8';
          const fe = 57;
          t[(t.digit9 = fe)] = 'digit9';
          const xe = 58;
          t[(t.colon = xe)] = 'colon';
          const me = 59;
          t[(t.semicolon = me)] = 'semicolon';
          const Oe = 60;
          t[(t.lessThan = Oe)] = 'lessThan';
          const $e = 61;
          t[(t.equalsTo = $e)] = 'equalsTo';
          const Ve = 62;
          t[(t.greaterThan = Ve)] = 'greaterThan';
          const st = 63;
          t[(t.questionMark = st)] = 'questionMark';
          const tt = 64;
          t[(t.atSign = tt)] = 'atSign';
          const ot = 65;
          t[(t.uppercaseA = ot)] = 'uppercaseA';
          const Gt = 66;
          t[(t.uppercaseB = Gt)] = 'uppercaseB';
          const fn = 67;
          t[(t.uppercaseC = fn)] = 'uppercaseC';
          const Er = 68;
          t[(t.uppercaseD = Er)] = 'uppercaseD';
          const Ar = 69;
          t[(t.uppercaseE = Ar)] = 'uppercaseE';
          const Sr = 70;
          t[(t.uppercaseF = Sr)] = 'uppercaseF';
          const vr = 71;
          t[(t.uppercaseG = vr)] = 'uppercaseG';
          const Nr = 72;
          t[(t.uppercaseH = Nr)] = 'uppercaseH';
          const Cr = 73;
          t[(t.uppercaseI = Cr)] = 'uppercaseI';
          const Rr = 74;
          t[(t.uppercaseJ = Rr)] = 'uppercaseJ';
          const Pr = 75;
          t[(t.uppercaseK = Pr)] = 'uppercaseK';
          const Lr = 76;
          t[(t.uppercaseL = Lr)] = 'uppercaseL';
          const Dr = 77;
          t[(t.uppercaseM = Dr)] = 'uppercaseM';
          const Fr = 78;
          t[(t.uppercaseN = Fr)] = 'uppercaseN';
          const Or = 79;
          t[(t.uppercaseO = Or)] = 'uppercaseO';
          const Mr = 80;
          t[(t.uppercaseP = Mr)] = 'uppercaseP';
          const Br = 81;
          t[(t.uppercaseQ = Br)] = 'uppercaseQ';
          const jr = 82;
          t[(t.uppercaseR = jr)] = 'uppercaseR';
          const qr = 83;
          t[(t.uppercaseS = qr)] = 'uppercaseS';
          const Ur = 84;
          t[(t.uppercaseT = Ur)] = 'uppercaseT';
          const $r = 85;
          t[(t.uppercaseU = $r)] = 'uppercaseU';
          const Vr = 86;
          t[(t.uppercaseV = Vr)] = 'uppercaseV';
          const Wr = 87;
          t[(t.uppercaseW = Wr)] = 'uppercaseW';
          const Hr = 88;
          t[(t.uppercaseX = Hr)] = 'uppercaseX';
          const Yr = 89;
          t[(t.uppercaseY = Yr)] = 'uppercaseY';
          const Gr = 90;
          t[(t.uppercaseZ = Gr)] = 'uppercaseZ';
          const Xr = 91;
          t[(t.leftSquareBracket = Xr)] = 'leftSquareBracket';
          const zr = 92;
          t[(t.backslash = zr)] = 'backslash';
          const Jr = 93;
          t[(t.rightSquareBracket = Jr)] = 'rightSquareBracket';
          const Qr = 94;
          t[(t.caret = Qr)] = 'caret';
          const Zr = 95;
          t[(t.underscore = Zr)] = 'underscore';
          const Kr = 96;
          t[(t.graveAccent = Kr)] = 'graveAccent';
          const es = 97;
          t[(t.lowercaseA = es)] = 'lowercaseA';
          const ts = 98;
          t[(t.lowercaseB = ts)] = 'lowercaseB';
          const ns = 99;
          t[(t.lowercaseC = ns)] = 'lowercaseC';
          const rs = 100;
          t[(t.lowercaseD = rs)] = 'lowercaseD';
          const ss = 101;
          t[(t.lowercaseE = ss)] = 'lowercaseE';
          const os = 102;
          t[(t.lowercaseF = os)] = 'lowercaseF';
          const is = 103;
          t[(t.lowercaseG = is)] = 'lowercaseG';
          const as = 104;
          t[(t.lowercaseH = as)] = 'lowercaseH';
          const cs = 105;
          t[(t.lowercaseI = cs)] = 'lowercaseI';
          const ls = 106;
          t[(t.lowercaseJ = ls)] = 'lowercaseJ';
          const us = 107;
          t[(t.lowercaseK = us)] = 'lowercaseK';
          const fs = 108;
          t[(t.lowercaseL = fs)] = 'lowercaseL';
          const hs = 109;
          t[(t.lowercaseM = hs)] = 'lowercaseM';
          const ps = 110;
          t[(t.lowercaseN = ps)] = 'lowercaseN';
          const ms = 111;
          t[(t.lowercaseO = ms)] = 'lowercaseO';
          const ds = 112;
          t[(t.lowercaseP = ds)] = 'lowercaseP';
          const ks = 113;
          t[(t.lowercaseQ = ks)] = 'lowercaseQ';
          const gs = 114;
          t[(t.lowercaseR = gs)] = 'lowercaseR';
          const _s = 115;
          t[(t.lowercaseS = _s)] = 'lowercaseS';
          const ys = 116;
          t[(t.lowercaseT = ys)] = 'lowercaseT';
          const xs = 117;
          t[(t.lowercaseU = xs)] = 'lowercaseU';
          const ws = 118;
          t[(t.lowercaseV = ws)] = 'lowercaseV';
          const Is = 119;
          t[(t.lowercaseW = Is)] = 'lowercaseW';
          const bs = 120;
          t[(t.lowercaseX = bs)] = 'lowercaseX';
          const Ts = 121;
          t[(t.lowercaseY = Ts)] = 'lowercaseY';
          const Es = 122;
          t[(t.lowercaseZ = Es)] = 'lowercaseZ';
          const As = 123;
          t[(t.leftCurlyBrace = As)] = 'leftCurlyBrace';
          const Ss = 124;
          t[(t.verticalBar = Ss)] = 'verticalBar';
          const vs = 125;
          t[(t.rightCurlyBrace = vs)] = 'rightCurlyBrace';
          const Ns = 126;
          t[(t.tilde = Ns)] = 'tilde';
          const Cs = 160;
          t[(t.nonBreakingSpace = Cs)] = 'nonBreakingSpace';
          const Rs = 5760;
          t[(t.oghamSpaceMark = Rs)] = 'oghamSpaceMark';
          const Ps = 8232;
          t[(t.lineSeparator = Ps)] = 'lineSeparator';
          const Ls = 8233;
          t[(t.paragraphSeparator = Ls)] = 'paragraphSeparator';
        })(h || (h = {}));
        function m(t) {
          return (
            (t >= h.digit0 && t <= h.digit9) ||
            (t >= h.lowercaseA && t <= h.lowercaseF) ||
            (t >= h.uppercaseA && t <= h.uppercaseF)
          );
        }
        let N, E, D, r, x, ie;
        function B() {
          return ie++;
        }
        function Z(t) {
          if ('pos' in t) {
            const n = j(t.pos);
            (t.message += ` (${n.line}:${n.column})`), (t.loc = n);
          }
          return t;
        }
        class C {
          constructor(n, s) {
            (this.line = n), (this.column = s);
          }
        }
        function j(t) {
          let n = 1,
            s = 1;
          for (let c = 0; c < t; c++)
            x.charCodeAt(c) === h.lineFeed ? (n++, (s = 1)) : s++;
          return new C(n, s);
        }
        function le(t, n, s, c) {
          (x = t), (r = new A()), (ie = 1), (N = n), (E = s), (D = c);
        }
        function v(t) {
          return r.contextualKeyword === t;
        }
        function K(t) {
          const n = l();
          return n.type === e.name && n.contextualKeyword === t;
        }
        function _e(t) {
          return r.contextualKeyword === t && y(e.name);
        }
        function Y(t) {
          _e(t) || he();
        }
        function Ae() {
          return o(e.eof) || o(e.braceR) || Ee();
        }
        function Ee() {
          const t = r.tokens[r.tokens.length - 1],
            n = t ? t.end : 0;
          for (let s = n; s < r.start; s++) {
            const c = x.charCodeAt(s);
            if (
              c === h.lineFeed ||
              c === h.carriageReturn ||
              c === 8232 ||
              c === 8233
            )
              return !0;
          }
          return !1;
        }
        function Ue() {
          const t = p();
          for (let n = r.end; n < t; n++) {
            const s = x.charCodeAt(n);
            if (
              s === h.lineFeed ||
              s === h.carriageReturn ||
              s === 8232 ||
              s === 8233
            )
              return !0;
          }
          return !1;
        }
        function Le() {
          return y(e.semi) || Ae();
        }
        function Ie() {
          Le() || he('Unexpected token, expected ";"');
        }
        function I(t) {
          y(t) || he(`Unexpected token, expected "${ge(t)}"`);
        }
        function he(t = 'Unexpected token', n = r.start) {
          if (r.error) return;
          const s = new SyntaxError(t);
          (s.pos = n), (r.error = s), (r.pos = x.length), H(e.eof);
        }
        const Ze = [
            9,
            11,
            12,
            h.space,
            h.nonBreakingSpace,
            h.oghamSpaceMark,
            8192,
            8193,
            8194,
            8195,
            8196,
            8197,
            8198,
            8199,
            8200,
            8201,
            8202,
            8239,
            8287,
            12288,
            65279,
          ],
          se = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
          te = new Uint8Array(65536);
        for (const t of Ze) te[t] = 1;
        function ue(t) {
          if (t < 48) return t === 36;
          if (t < 58) return !0;
          if (t < 65) return !1;
          if (t < 91) return !0;
          if (t < 97) return t === 95;
          if (t < 123) return !0;
          if (t < 128) return !1;
          throw new Error('Should not be called with non-ASCII char code.');
        }
        const z = new Uint8Array(65536);
        for (let t = 0; t < 128; t++) z[t] = ue(t) ? 1 : 0;
        for (let t = 128; t < 65536; t++) z[t] = 1;
        for (const t of Ze) z[t] = 0;
        (z[8232] = 0), (z[8233] = 0);
        const ve = z.slice();
        for (let t = h.digit0; t <= h.digit9; t++) ve[t] = 0;
        const Ne = new Int32Array([
          -1,
          27,
          783,
          918,
          1755,
          2376,
          2862,
          3483,
          -1,
          3699,
          -1,
          4617,
          4752,
          4833,
          5130,
          5508,
          5940,
          -1,
          6480,
          6939,
          7749,
          8181,
          8451,
          8613,
          -1,
          8829,
          -1,
          -1,
          -1,
          54,
          243,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          432,
          -1,
          -1,
          -1,
          675,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          81,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          108,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          135,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          162,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          189,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          216,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._abstract << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          270,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          297,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          324,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          351,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          378,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          405,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._accessor << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._as << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          459,
          -1,
          -1,
          -1,
          -1,
          -1,
          594,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          486,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          513,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          540,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._assert << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          567,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._asserts << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          621,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          648,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._async << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          702,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          729,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          756,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._await << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          810,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          837,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          864,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          891,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._break << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          945,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1107,
          -1,
          -1,
          -1,
          1242,
          -1,
          -1,
          1350,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          972,
          1026,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          999,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._case << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1053,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1080,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._catch << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1134,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1161,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1188,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1215,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._checks << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1269,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1296,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1323,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._class << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1377,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1404,
          1620,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1431,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._const << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1458,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1485,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1512,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1539,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1566,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1593,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._constructor << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1647,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1674,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1701,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1728,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._continue << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1782,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2349,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1809,
          1971,
          -1,
          -1,
          2106,
          -1,
          -1,
          -1,
          -1,
          -1,
          2241,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1836,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1863,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1890,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1917,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1944,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._debugger << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          1998,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2025,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2052,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2079,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._declare << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2133,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2160,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2187,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2214,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._default << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2268,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2295,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2322,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._delete << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._do << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2403,
          -1,
          2484,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2565,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2430,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2457,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._else << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2511,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2538,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._enum << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2592,
          -1,
          -1,
          -1,
          2727,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2619,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2646,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2673,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._export << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2700,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._exports << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2754,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2781,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2808,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2835,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._extends << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2889,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2997,
          -1,
          -1,
          -1,
          -1,
          -1,
          3159,
          -1,
          -1,
          3213,
          -1,
          -1,
          3294,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2916,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2943,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          2970,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._false << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3024,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3051,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3078,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3105,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3132,
          -1,
          (e._finally << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3186,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._for << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3240,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3267,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._from << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3321,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3348,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3375,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3402,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3429,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3456,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._function << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3510,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3564,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3537,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._get << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3591,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3618,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3645,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3672,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._global << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3726,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3753,
          4077,
          -1,
          -1,
          -1,
          -1,
          4590,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._if << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3780,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3807,
          -1,
          -1,
          3996,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3834,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3861,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3888,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3915,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3942,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          3969,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._implements << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4023,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4050,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._import << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._in << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4104,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4185,
          4401,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4131,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4158,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._infer << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4212,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4239,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4266,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4293,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4320,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4347,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4374,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._instanceof << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4428,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4455,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4482,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4509,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4536,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4563,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._interface << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._is << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4644,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4671,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4698,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4725,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._keyof << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4779,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4806,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._let << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4860,
          -1,
          -1,
          -1,
          -1,
          -1,
          4995,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4887,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4914,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4941,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          4968,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._mixins << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5022,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5049,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5076,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5103,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._module << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5157,
          -1,
          -1,
          -1,
          5373,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5427,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5184,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5211,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5238,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5265,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5292,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5319,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5346,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._namespace << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5400,
          -1,
          -1,
          -1,
          (e._new << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5454,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5481,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._null << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5535,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5562,
          -1,
          -1,
          -1,
          -1,
          5697,
          5751,
          -1,
          -1,
          -1,
          -1,
          u._of << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5589,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5616,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5643,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5670,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._opaque << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5724,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._out << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5778,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5805,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5832,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5859,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5886,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5913,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._override << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5967,
          -1,
          -1,
          6345,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          5994,
          -1,
          -1,
          -1,
          -1,
          -1,
          6129,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6021,
          -1,
          -1,
          -1,
          -1,
          -1,
          6048,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6075,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6102,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._private << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6156,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6183,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6318,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6210,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6237,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6264,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6291,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._protected << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._proto << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6372,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6399,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6426,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6453,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._public << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6507,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6534,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6696,
          -1,
          -1,
          6831,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6561,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6588,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6615,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6642,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6669,
          -1,
          u._readonly << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6723,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6750,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6777,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6804,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._require << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6858,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6885,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6912,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._return << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6966,
          -1,
          -1,
          -1,
          7182,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7236,
          7371,
          -1,
          7479,
          -1,
          7614,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          6993,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7020,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7047,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7074,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7101,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7128,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7155,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._satisfies << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7209,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._set << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7263,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7290,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7317,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7344,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._static << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7398,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7425,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7452,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._super << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7506,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7533,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7560,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7587,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._switch << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7641,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7668,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7695,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7722,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._symbol << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7776,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7938,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8046,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7803,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7857,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7830,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._this << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7884,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7911,
          -1,
          -1,
          -1,
          (e._throw << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7965,
          -1,
          -1,
          -1,
          8019,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          7992,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._true << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._try << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8073,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8100,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._type << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8127,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8154,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._typeof << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8208,
          -1,
          -1,
          -1,
          -1,
          8343,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8235,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8262,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8289,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8316,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._unique << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8370,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8397,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8424,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          u._using << 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8478,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8532,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8505,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._var << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8559,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8586,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._void << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8640,
          8748,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8667,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8694,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8721,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._while << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8775,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8802,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._with << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8856,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8883,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8910,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          8937,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          (e._yield << 1) + 1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
          -1,
        ]);
        function we() {
          let t = 0,
            n = 0,
            s = r.pos;
          for (
            ;
            s < x.length &&
            ((n = x.charCodeAt(s)), !(n < h.lowercaseA || n > h.lowercaseZ));

          ) {
            const f = Ne[t + (n - h.lowercaseA) + 1];
            if (f === -1) break;
            (t = f), s++;
          }
          const c = Ne[t];
          if (c > -1 && !z[n]) {
            (r.pos = s), c & 1 ? H(c >>> 1) : H(e.name, c >>> 1);
            return;
          }
          for (; s < x.length; ) {
            const f = x.charCodeAt(s);
            if (z[f]) s++;
            else if (f === h.backslash) {
              if (((s += 2), x.charCodeAt(s) === h.leftCurlyBrace)) {
                for (; s < x.length && x.charCodeAt(s) !== h.rightCurlyBrace; )
                  s++;
                s++;
              }
            } else if (f === h.atSign && x.charCodeAt(s + 1) === h.atSign)
              s += 2;
            else break;
          }
          (r.pos = s), H(e.name);
        }
        var O;
        (function (t) {
          t[(t.Access = 0)] = 'Access';
          const s = 1;
          t[(t.ExportAccess = s)] = 'ExportAccess';
          const c = s + 1;
          t[(t.TopLevelDeclaration = c)] = 'TopLevelDeclaration';
          const f = c + 1;
          t[(t.FunctionScopedDeclaration = f)] = 'FunctionScopedDeclaration';
          const d = f + 1;
          t[(t.BlockScopedDeclaration = d)] = 'BlockScopedDeclaration';
          const b = d + 1;
          t[(t.ObjectShorthandTopLevelDeclaration = b)] =
            'ObjectShorthandTopLevelDeclaration';
          const F = b + 1;
          t[(t.ObjectShorthandFunctionScopedDeclaration = F)] =
            'ObjectShorthandFunctionScopedDeclaration';
          const J = F + 1;
          t[(t.ObjectShorthandBlockScopedDeclaration = J)] =
            'ObjectShorthandBlockScopedDeclaration';
          const oe = J + 1;
          t[(t.ObjectShorthand = oe)] = 'ObjectShorthand';
          const ye = oe + 1;
          t[(t.ImportDeclaration = ye)] = 'ImportDeclaration';
          const pe = ye + 1;
          t[(t.ObjectKey = pe)] = 'ObjectKey';
          const ee = pe + 1;
          t[(t.ImportAccess = ee)] = 'ImportAccess';
        })(O || (O = {}));
        var Se;
        (function (t) {
          t[(t.NoChildren = 0)] = 'NoChildren';
          const s = 1;
          t[(t.OneChild = s)] = 'OneChild';
          const c = s + 1;
          t[(t.StaticChildren = c)] = 'StaticChildren';
          const f = c + 1;
          t[(t.KeyAfterPropSpread = f)] = 'KeyAfterPropSpread';
        })(Se || (Se = {}));
        function Ke(t) {
          const n = t.identifierRole;
          return (
            n === O.TopLevelDeclaration ||
            n === O.FunctionScopedDeclaration ||
            n === O.BlockScopedDeclaration ||
            n === O.ObjectShorthandTopLevelDeclaration ||
            n === O.ObjectShorthandFunctionScopedDeclaration ||
            n === O.ObjectShorthandBlockScopedDeclaration
          );
        }
        function T(t) {
          const n = t.identifierRole;
          return (
            n === O.FunctionScopedDeclaration ||
            n === O.BlockScopedDeclaration ||
            n === O.ObjectShorthandFunctionScopedDeclaration ||
            n === O.ObjectShorthandBlockScopedDeclaration
          );
        }
        function S(t) {
          const n = t.identifierRole;
          return (
            n === O.TopLevelDeclaration ||
            n === O.ObjectShorthandTopLevelDeclaration ||
            n === O.ImportDeclaration
          );
        }
        function P(t) {
          const n = t.identifierRole;
          return (
            n === O.TopLevelDeclaration ||
            n === O.BlockScopedDeclaration ||
            n === O.ObjectShorthandTopLevelDeclaration ||
            n === O.ObjectShorthandBlockScopedDeclaration
          );
        }
        function M(t) {
          const n = t.identifierRole;
          return (
            n === O.FunctionScopedDeclaration ||
            n === O.ObjectShorthandFunctionScopedDeclaration
          );
        }
        function G(t) {
          return (
            t.identifierRole === O.ObjectShorthandTopLevelDeclaration ||
            t.identifierRole === O.ObjectShorthandBlockScopedDeclaration ||
            t.identifierRole === O.ObjectShorthandFunctionScopedDeclaration
          );
        }
        class ae {
          constructor() {
            (this.type = r.type),
              (this.contextualKeyword = r.contextualKeyword),
              (this.start = r.start),
              (this.end = r.end),
              (this.scopeDepth = r.scopeDepth),
              (this.isType = r.isType),
              (this.identifierRole = null),
              (this.jsxRole = null),
              (this.shadowsGlobal = !1),
              (this.isAsyncOperation = !1),
              (this.contextId = null),
              (this.rhsEndIndex = null),
              (this.isExpression = !1),
              (this.numNullishCoalesceStarts = 0),
              (this.numNullishCoalesceEnds = 0),
              (this.isOptionalChainStart = !1),
              (this.isOptionalChainEnd = !1),
              (this.subscriptStartIndex = null),
              (this.nullishStartIndex = null);
          }
        }
        function _() {
          r.tokens.push(new ae()), V();
        }
        function Te() {
          r.tokens.push(new ae()), (r.start = r.pos), mn();
        }
        function Me() {
          r.type === e.assign && --r.pos, hn();
        }
        function Q(t) {
          for (let s = r.tokens.length - t; s < r.tokens.length; s++)
            r.tokens[s].isType = !0;
          const n = r.isType;
          return (r.isType = !0), n;
        }
        function ne(t) {
          r.isType = t;
        }
        function y(t) {
          return o(t) ? (_(), !0) : !1;
        }
        function De(t) {
          const n = r.isType;
          (r.isType = !0), y(t), (r.isType = n);
        }
        function o(t) {
          return r.type === t;
        }
        function i() {
          const t = r.snapshot();
          _();
          const n = r.type;
          return r.restoreFromSnapshot(t), n;
        }
        class a {
          constructor(n, s) {
            (this.type = n), (this.contextualKeyword = s);
          }
        }
        function l() {
          const t = r.snapshot();
          _();
          const n = r.type,
            s = r.contextualKeyword;
          return r.restoreFromSnapshot(t), new a(n, s);
        }
        function p() {
          return k(r.pos);
        }
        function k(t) {
          se.lastIndex = t;
          const n = se.exec(x);
          return t + n[0].length;
        }
        function g() {
          return x.charCodeAt(p());
        }
        function V() {
          if ((re(), (r.start = r.pos), r.pos >= x.length)) {
            const t = r.tokens;
            t.length >= 2 &&
              t[t.length - 1].start >= x.length &&
              t[t.length - 2].start >= x.length &&
              he('Unexpectedly reached the end of input.'),
              H(e.eof);
            return;
          }
          U(x.charCodeAt(r.pos));
        }
        function U(t) {
          ve[t] ||
          t === h.backslash ||
          (t === h.atSign && x.charCodeAt(r.pos + 1) === h.atSign)
            ? we()
            : zt(t);
        }
        function ce() {
          for (
            ;
            x.charCodeAt(r.pos) !== h.asterisk ||
            x.charCodeAt(r.pos + 1) !== h.slash;

          )
            if ((r.pos++, r.pos > x.length)) {
              he('Unterminated comment', r.pos - 2);
              return;
            }
          r.pos += 2;
        }
        function be(t) {
          let n = x.charCodeAt((r.pos += t));
          if (r.pos < x.length)
            for (
              ;
              n !== h.lineFeed &&
              n !== h.carriageReturn &&
              n !== h.lineSeparator &&
              n !== h.paragraphSeparator &&
              ++r.pos < x.length;

            )
              n = x.charCodeAt(r.pos);
        }
        function re() {
          for (; r.pos < x.length; ) {
            const t = x.charCodeAt(r.pos);
            switch (t) {
              case h.carriageReturn:
                x.charCodeAt(r.pos + 1) === h.lineFeed && ++r.pos;
              case h.lineFeed:
              case h.lineSeparator:
              case h.paragraphSeparator:
                ++r.pos;
                break;
              case h.slash:
                switch (x.charCodeAt(r.pos + 1)) {
                  case h.asterisk:
                    (r.pos += 2), ce();
                    break;
                  case h.slash:
                    be(2);
                    break;
                  default:
                    return;
                }
                break;
              default:
                if (te[t]) ++r.pos;
                else return;
            }
          }
        }
        function H(t, n = u.NONE) {
          (r.end = r.pos), (r.type = t), (r.contextualKeyword = n);
        }
        function He() {
          const t = x.charCodeAt(r.pos + 1);
          if (t >= h.digit0 && t <= h.digit9) {
            Rt(!0);
            return;
          }
          t === h.dot && x.charCodeAt(r.pos + 2) === h.dot
            ? ((r.pos += 3), H(e.ellipsis))
            : (++r.pos, H(e.dot));
        }
        function Be() {
          x.charCodeAt(r.pos + 1) === h.equalsTo
            ? Ce(e.assign, 2)
            : Ce(e.slash, 1);
        }
        function je(t) {
          let n = t === h.asterisk ? e.star : e.modulo,
            s = 1,
            c = x.charCodeAt(r.pos + 1);
          t === h.asterisk &&
            c === h.asterisk &&
            (s++, (c = x.charCodeAt(r.pos + 2)), (n = e.exponent)),
            c === h.equalsTo &&
              x.charCodeAt(r.pos + 2) !== h.greaterThan &&
              (s++, (n = e.assign)),
            Ce(n, s);
        }
        function Xe(t) {
          const n = x.charCodeAt(r.pos + 1);
          if (n === t) {
            x.charCodeAt(r.pos + 2) === h.equalsTo
              ? Ce(e.assign, 3)
              : Ce(t === h.verticalBar ? e.logicalOR : e.logicalAND, 2);
            return;
          }
          if (t === h.verticalBar) {
            if (n === h.greaterThan) {
              Ce(e.pipeline, 2);
              return;
            } else if (n === h.rightCurlyBrace && D) {
              Ce(e.braceBarR, 2);
              return;
            }
          }
          if (n === h.equalsTo) {
            Ce(e.assign, 2);
            return;
          }
          Ce(t === h.verticalBar ? e.bitwiseOR : e.bitwiseAND, 1);
        }
        function at() {
          x.charCodeAt(r.pos + 1) === h.equalsTo
            ? Ce(e.assign, 2)
            : Ce(e.bitwiseXOR, 1);
        }
        function gt(t) {
          const n = x.charCodeAt(r.pos + 1);
          if (n === t) {
            Ce(e.preIncDec, 2);
            return;
          }
          n === h.equalsTo
            ? Ce(e.assign, 2)
            : t === h.plusSign
            ? Ce(e.plus, 1)
            : Ce(e.minus, 1);
        }
        function bt() {
          const t = x.charCodeAt(r.pos + 1);
          if (t === h.lessThan) {
            if (x.charCodeAt(r.pos + 2) === h.equalsTo) {
              Ce(e.assign, 3);
              return;
            }
            r.isType ? Ce(e.lessThan, 1) : Ce(e.bitShiftL, 2);
            return;
          }
          t === h.equalsTo ? Ce(e.relationalOrEqual, 2) : Ce(e.lessThan, 1);
        }
        function _t() {
          if (r.isType) {
            Ce(e.greaterThan, 1);
            return;
          }
          const t = x.charCodeAt(r.pos + 1);
          if (t === h.greaterThan) {
            const n = x.charCodeAt(r.pos + 2) === h.greaterThan ? 3 : 2;
            if (x.charCodeAt(r.pos + n) === h.equalsTo) {
              Ce(e.assign, n + 1);
              return;
            }
            Ce(e.bitShiftR, n);
            return;
          }
          t === h.equalsTo ? Ce(e.relationalOrEqual, 2) : Ce(e.greaterThan, 1);
        }
        function qt() {
          r.type === e.greaterThan && ((r.pos -= 1), _t());
        }
        function nt(t) {
          const n = x.charCodeAt(r.pos + 1);
          if (n === h.equalsTo) {
            Ce(e.equality, x.charCodeAt(r.pos + 2) === h.equalsTo ? 3 : 2);
            return;
          }
          if (t === h.equalsTo && n === h.greaterThan) {
            (r.pos += 2), H(e.arrow);
            return;
          }
          Ce(t === h.equalsTo ? e.eq : e.bang, 1);
        }
        function Xt() {
          const t = x.charCodeAt(r.pos + 1),
            n = x.charCodeAt(r.pos + 2);
          t === h.questionMark && !(D && r.isType)
            ? n === h.equalsTo
              ? Ce(e.assign, 3)
              : Ce(e.nullishCoalescing, 2)
            : t === h.dot && !(n >= h.digit0 && n <= h.digit9)
            ? ((r.pos += 2), H(e.questionDot))
            : (++r.pos, H(e.question));
        }
        function zt(t) {
          switch (t) {
            case h.numberSign:
              ++r.pos, H(e.hash);
              return;
            case h.dot:
              He();
              return;
            case h.leftParenthesis:
              ++r.pos, H(e.parenL);
              return;
            case h.rightParenthesis:
              ++r.pos, H(e.parenR);
              return;
            case h.semicolon:
              ++r.pos, H(e.semi);
              return;
            case h.comma:
              ++r.pos, H(e.comma);
              return;
            case h.leftSquareBracket:
              ++r.pos, H(e.bracketL);
              return;
            case h.rightSquareBracket:
              ++r.pos, H(e.bracketR);
              return;
            case h.leftCurlyBrace:
              D && x.charCodeAt(r.pos + 1) === h.verticalBar
                ? Ce(e.braceBarL, 2)
                : (++r.pos, H(e.braceL));
              return;
            case h.rightCurlyBrace:
              ++r.pos, H(e.braceR);
              return;
            case h.colon:
              x.charCodeAt(r.pos + 1) === h.colon
                ? Ce(e.doubleColon, 2)
                : (++r.pos, H(e.colon));
              return;
            case h.questionMark:
              Xt();
              return;
            case h.atSign:
              ++r.pos, H(e.at);
              return;
            case h.graveAccent:
              ++r.pos, H(e.backQuote);
              return;
            case h.digit0: {
              const n = x.charCodeAt(r.pos + 1);
              if (
                n === h.lowercaseX ||
                n === h.uppercaseX ||
                n === h.lowercaseO ||
                n === h.uppercaseO ||
                n === h.lowercaseB ||
                n === h.uppercaseB
              ) {
                yt();
                return;
              }
            }
            case h.digit1:
            case h.digit2:
            case h.digit3:
            case h.digit4:
            case h.digit5:
            case h.digit6:
            case h.digit7:
            case h.digit8:
            case h.digit9:
              Rt(!1);
              return;
            case h.quotationMark:
            case h.apostrophe:
              pn(t);
              return;
            case h.slash:
              Be();
              return;
            case h.percentSign:
            case h.asterisk:
              je(t);
              return;
            case h.verticalBar:
            case h.ampersand:
              Xe(t);
              return;
            case h.caret:
              at();
              return;
            case h.plusSign:
            case h.dash:
              gt(t);
              return;
            case h.lessThan:
              bt();
              return;
            case h.greaterThan:
              _t();
              return;
            case h.equalsTo:
            case h.exclamationMark:
              nt(t);
              return;
            case h.tilde:
              Ce(e.tilde, 1);
              return;
            default:
              break;
          }
          he(`Unexpected character '${String.fromCharCode(t)}'`, r.pos);
        }
        function Ce(t, n) {
          (r.pos += n), H(t);
        }
        function hn() {
          const t = r.pos;
          let n = !1,
            s = !1;
          for (;;) {
            if (r.pos >= x.length) {
              he('Unterminated regular expression', t);
              return;
            }
            const c = x.charCodeAt(r.pos);
            if (n) n = !1;
            else {
              if (c === h.leftSquareBracket) s = !0;
              else if (c === h.rightSquareBracket && s) s = !1;
              else if (c === h.slash && !s) break;
              n = c === h.backslash;
            }
            ++r.pos;
          }
          ++r.pos, dn(), H(e.regexp);
        }
        function Ct() {
          for (;;) {
            const t = x.charCodeAt(r.pos);
            if ((t >= h.digit0 && t <= h.digit9) || t === h.underscore) r.pos++;
            else break;
          }
        }
        function yt() {
          for (r.pos += 2; ; ) {
            const n = x.charCodeAt(r.pos);
            if (
              (n >= h.digit0 && n <= h.digit9) ||
              (n >= h.lowercaseA && n <= h.lowercaseF) ||
              (n >= h.uppercaseA && n <= h.uppercaseF) ||
              n === h.underscore
            )
              r.pos++;
            else break;
          }
          x.charCodeAt(r.pos) === h.lowercaseN
            ? (++r.pos, H(e.bigint))
            : H(e.num);
        }
        function Rt(t) {
          let n = !1,
            s = !1;
          t || Ct();
          let c = x.charCodeAt(r.pos);
          if (
            (c === h.dot && (++r.pos, Ct(), (c = x.charCodeAt(r.pos))),
            (c === h.uppercaseE || c === h.lowercaseE) &&
              ((c = x.charCodeAt(++r.pos)),
              (c === h.plusSign || c === h.dash) && ++r.pos,
              Ct(),
              (c = x.charCodeAt(r.pos))),
            c === h.lowercaseN
              ? (++r.pos, (n = !0))
              : c === h.lowercaseM && (++r.pos, (s = !0)),
            n)
          ) {
            H(e.bigint);
            return;
          }
          if (s) {
            H(e.decimal);
            return;
          }
          H(e.num);
        }
        function pn(t) {
          for (r.pos++; ; ) {
            if (r.pos >= x.length) {
              he('Unterminated string constant');
              return;
            }
            const n = x.charCodeAt(r.pos);
            if (n === h.backslash) r.pos++;
            else if (n === t) break;
            r.pos++;
          }
          r.pos++, H(e.string);
        }
        function mn() {
          for (;;) {
            if (r.pos >= x.length) {
              he('Unterminated template');
              return;
            }
            const t = x.charCodeAt(r.pos);
            if (
              t === h.graveAccent ||
              (t === h.dollarSign &&
                x.charCodeAt(r.pos + 1) === h.leftCurlyBrace)
            ) {
              if (r.pos === r.start && o(e.template))
                if (t === h.dollarSign) {
                  (r.pos += 2), H(e.dollarBraceL);
                  return;
                } else {
                  ++r.pos, H(e.backQuote);
                  return;
                }
              H(e.template);
              return;
            }
            t === h.backslash && r.pos++, r.pos++;
          }
        }
        function dn() {
          for (; r.pos < x.length; ) {
            const t = x.charCodeAt(r.pos);
            if (z[t]) r.pos++;
            else if (t === h.backslash) {
              if (((r.pos += 2), x.charCodeAt(r.pos) === h.leftCurlyBrace)) {
                for (
                  ;
                  r.pos < x.length && x.charCodeAt(r.pos) !== h.rightCurlyBrace;

                )
                  r.pos++;
                r.pos++;
              }
            } else break;
          }
        }
        function Jt(t, n = t.currentIndex()) {
          let s = n + 1;
          if (kn(t, s)) {
            const c = t.identifierNameAtIndex(n);
            return { isType: !1, leftName: c, rightName: c, endIndex: s };
          }
          if ((s++, kn(t, s)))
            return { isType: !0, leftName: null, rightName: null, endIndex: s };
          if ((s++, kn(t, s)))
            return {
              isType: !1,
              leftName: t.identifierNameAtIndex(n),
              rightName: t.identifierNameAtIndex(n + 2),
              endIndex: s,
            };
          if ((s++, kn(t, s)))
            return { isType: !0, leftName: null, rightName: null, endIndex: s };
          throw new Error(`Unexpected import/export specifier at ${n}`);
        }
        function kn(t, n) {
          const s = t.tokens[n];
          return s.type === e.braceR || s.type === e.comma;
        }
        var Z1 = new Map([
          ['quot', '"'],
          ['amp', '&'],
          ['apos', "'"],
          ['lt', '<'],
          ['gt', '>'],
          ['nbsp', '\xA0'],
          ['iexcl', '\xA1'],
          ['cent', '\xA2'],
          ['pound', '\xA3'],
          ['curren', '\xA4'],
          ['yen', '\xA5'],
          ['brvbar', '\xA6'],
          ['sect', '\xA7'],
          ['uml', '\xA8'],
          ['copy', '\xA9'],
          ['ordf', '\xAA'],
          ['laquo', '\xAB'],
          ['not', '\xAC'],
          ['shy', '\xAD'],
          ['reg', '\xAE'],
          ['macr', '\xAF'],
          ['deg', '\xB0'],
          ['plusmn', '\xB1'],
          ['sup2', '\xB2'],
          ['sup3', '\xB3'],
          ['acute', '\xB4'],
          ['micro', '\xB5'],
          ['para', '\xB6'],
          ['middot', '\xB7'],
          ['cedil', '\xB8'],
          ['sup1', '\xB9'],
          ['ordm', '\xBA'],
          ['raquo', '\xBB'],
          ['frac14', '\xBC'],
          ['frac12', '\xBD'],
          ['frac34', '\xBE'],
          ['iquest', '\xBF'],
          ['Agrave', '\xC0'],
          ['Aacute', '\xC1'],
          ['Acirc', '\xC2'],
          ['Atilde', '\xC3'],
          ['Auml', '\xC4'],
          ['Aring', '\xC5'],
          ['AElig', '\xC6'],
          ['Ccedil', '\xC7'],
          ['Egrave', '\xC8'],
          ['Eacute', '\xC9'],
          ['Ecirc', '\xCA'],
          ['Euml', '\xCB'],
          ['Igrave', '\xCC'],
          ['Iacute', '\xCD'],
          ['Icirc', '\xCE'],
          ['Iuml', '\xCF'],
          ['ETH', '\xD0'],
          ['Ntilde', '\xD1'],
          ['Ograve', '\xD2'],
          ['Oacute', '\xD3'],
          ['Ocirc', '\xD4'],
          ['Otilde', '\xD5'],
          ['Ouml', '\xD6'],
          ['times', '\xD7'],
          ['Oslash', '\xD8'],
          ['Ugrave', '\xD9'],
          ['Uacute', '\xDA'],
          ['Ucirc', '\xDB'],
          ['Uuml', '\xDC'],
          ['Yacute', '\xDD'],
          ['THORN', '\xDE'],
          ['szlig', '\xDF'],
          ['agrave', '\xE0'],
          ['aacute', '\xE1'],
          ['acirc', '\xE2'],
          ['atilde', '\xE3'],
          ['auml', '\xE4'],
          ['aring', '\xE5'],
          ['aelig', '\xE6'],
          ['ccedil', '\xE7'],
          ['egrave', '\xE8'],
          ['eacute', '\xE9'],
          ['ecirc', '\xEA'],
          ['euml', '\xEB'],
          ['igrave', '\xEC'],
          ['iacute', '\xED'],
          ['icirc', '\xEE'],
          ['iuml', '\xEF'],
          ['eth', '\xF0'],
          ['ntilde', '\xF1'],
          ['ograve', '\xF2'],
          ['oacute', '\xF3'],
          ['ocirc', '\xF4'],
          ['otilde', '\xF5'],
          ['ouml', '\xF6'],
          ['divide', '\xF7'],
          ['oslash', '\xF8'],
          ['ugrave', '\xF9'],
          ['uacute', '\xFA'],
          ['ucirc', '\xFB'],
          ['uuml', '\xFC'],
          ['yacute', '\xFD'],
          ['thorn', '\xFE'],
          ['yuml', '\xFF'],
          ['OElig', '\u0152'],
          ['oelig', '\u0153'],
          ['Scaron', '\u0160'],
          ['scaron', '\u0161'],
          ['Yuml', '\u0178'],
          ['fnof', '\u0192'],
          ['circ', '\u02C6'],
          ['tilde', '\u02DC'],
          ['Alpha', '\u0391'],
          ['Beta', '\u0392'],
          ['Gamma', '\u0393'],
          ['Delta', '\u0394'],
          ['Epsilon', '\u0395'],
          ['Zeta', '\u0396'],
          ['Eta', '\u0397'],
          ['Theta', '\u0398'],
          ['Iota', '\u0399'],
          ['Kappa', '\u039A'],
          ['Lambda', '\u039B'],
          ['Mu', '\u039C'],
          ['Nu', '\u039D'],
          ['Xi', '\u039E'],
          ['Omicron', '\u039F'],
          ['Pi', '\u03A0'],
          ['Rho', '\u03A1'],
          ['Sigma', '\u03A3'],
          ['Tau', '\u03A4'],
          ['Upsilon', '\u03A5'],
          ['Phi', '\u03A6'],
          ['Chi', '\u03A7'],
          ['Psi', '\u03A8'],
          ['Omega', '\u03A9'],
          ['alpha', '\u03B1'],
          ['beta', '\u03B2'],
          ['gamma', '\u03B3'],
          ['delta', '\u03B4'],
          ['epsilon', '\u03B5'],
          ['zeta', '\u03B6'],
          ['eta', '\u03B7'],
          ['theta', '\u03B8'],
          ['iota', '\u03B9'],
          ['kappa', '\u03BA'],
          ['lambda', '\u03BB'],
          ['mu', '\u03BC'],
          ['nu', '\u03BD'],
          ['xi', '\u03BE'],
          ['omicron', '\u03BF'],
          ['pi', '\u03C0'],
          ['rho', '\u03C1'],
          ['sigmaf', '\u03C2'],
          ['sigma', '\u03C3'],
          ['tau', '\u03C4'],
          ['upsilon', '\u03C5'],
          ['phi', '\u03C6'],
          ['chi', '\u03C7'],
          ['psi', '\u03C8'],
          ['omega', '\u03C9'],
          ['thetasym', '\u03D1'],
          ['upsih', '\u03D2'],
          ['piv', '\u03D6'],
          ['ensp', '\u2002'],
          ['emsp', '\u2003'],
          ['thinsp', '\u2009'],
          ['zwnj', '\u200C'],
          ['zwj', '\u200D'],
          ['lrm', '\u200E'],
          ['rlm', '\u200F'],
          ['ndash', '\u2013'],
          ['mdash', '\u2014'],
          ['lsquo', '\u2018'],
          ['rsquo', '\u2019'],
          ['sbquo', '\u201A'],
          ['ldquo', '\u201C'],
          ['rdquo', '\u201D'],
          ['bdquo', '\u201E'],
          ['dagger', '\u2020'],
          ['Dagger', '\u2021'],
          ['bull', '\u2022'],
          ['hellip', '\u2026'],
          ['permil', '\u2030'],
          ['prime', '\u2032'],
          ['Prime', '\u2033'],
          ['lsaquo', '\u2039'],
          ['rsaquo', '\u203A'],
          ['oline', '\u203E'],
          ['frasl', '\u2044'],
          ['euro', '\u20AC'],
          ['image', '\u2111'],
          ['weierp', '\u2118'],
          ['real', '\u211C'],
          ['trade', '\u2122'],
          ['alefsym', '\u2135'],
          ['larr', '\u2190'],
          ['uarr', '\u2191'],
          ['rarr', '\u2192'],
          ['darr', '\u2193'],
          ['harr', '\u2194'],
          ['crarr', '\u21B5'],
          ['lArr', '\u21D0'],
          ['uArr', '\u21D1'],
          ['rArr', '\u21D2'],
          ['dArr', '\u21D3'],
          ['hArr', '\u21D4'],
          ['forall', '\u2200'],
          ['part', '\u2202'],
          ['exist', '\u2203'],
          ['empty', '\u2205'],
          ['nabla', '\u2207'],
          ['isin', '\u2208'],
          ['notin', '\u2209'],
          ['ni', '\u220B'],
          ['prod', '\u220F'],
          ['sum', '\u2211'],
          ['minus', '\u2212'],
          ['lowast', '\u2217'],
          ['radic', '\u221A'],
          ['prop', '\u221D'],
          ['infin', '\u221E'],
          ['ang', '\u2220'],
          ['and', '\u2227'],
          ['or', '\u2228'],
          ['cap', '\u2229'],
          ['cup', '\u222A'],
          ['int', '\u222B'],
          ['there4', '\u2234'],
          ['sim', '\u223C'],
          ['cong', '\u2245'],
          ['asymp', '\u2248'],
          ['ne', '\u2260'],
          ['equiv', '\u2261'],
          ['le', '\u2264'],
          ['ge', '\u2265'],
          ['sub', '\u2282'],
          ['sup', '\u2283'],
          ['nsub', '\u2284'],
          ['sube', '\u2286'],
          ['supe', '\u2287'],
          ['oplus', '\u2295'],
          ['otimes', '\u2297'],
          ['perp', '\u22A5'],
          ['sdot', '\u22C5'],
          ['lceil', '\u2308'],
          ['rceil', '\u2309'],
          ['lfloor', '\u230A'],
          ['rfloor', '\u230B'],
          ['lang', '\u2329'],
          ['rang', '\u232A'],
          ['loz', '\u25CA'],
          ['spades', '\u2660'],
          ['clubs', '\u2663'],
          ['hearts', '\u2665'],
          ['diams', '\u2666'],
        ]);
        function Fs(t) {
          const [n, s] = Os(t.jsxPragma || 'React.createElement'),
            [c, f] = Os(t.jsxFragmentPragma || 'React.Fragment');
          return { base: n, suffix: s, fragmentBase: c, fragmentSuffix: f };
        }
        function Os(t) {
          let n = t.indexOf('.');
          return n === -1 && (n = t.length), [t.slice(0, n), t.slice(n)];
        }
        class ut {
          getPrefixCode() {
            return '';
          }
          getHoistedCode() {
            return '';
          }
          getSuffixCode() {
            return '';
          }
        }
        class Pt extends ut {
          __init() {
            this.lastLineNumber = 1;
          }
          __init2() {
            this.lastIndex = 0;
          }
          __init3() {
            this.filenameVarName = null;
          }
          __init4() {
            this.esmAutomaticImportNameResolutions = {};
          }
          __init5() {
            this.cjsAutomaticModuleNameResolutions = {};
          }
          constructor(n, s, c, f, d) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.importProcessor = c),
              (this.nameManager = f),
              (this.options = d),
              Pt.prototype.__init.call(this),
              Pt.prototype.__init2.call(this),
              Pt.prototype.__init3.call(this),
              Pt.prototype.__init4.call(this),
              Pt.prototype.__init5.call(this),
              (this.jsxPragmaInfo = Fs(d)),
              (this.isAutomaticRuntime = d.jsxRuntime === 'automatic'),
              (this.jsxImportSource = d.jsxImportSource || 'react');
          }
          process() {
            return this.tokens.matches1(e.jsxTagStart)
              ? (this.processJSXTag(), !0)
              : !1;
          }
          getPrefixCode() {
            let n = '';
            if (
              (this.filenameVarName &&
                (n += `const ${this.filenameVarName} = ${JSON.stringify(
                  this.options.filePath || '',
                )};`),
              this.isAutomaticRuntime)
            )
              if (this.importProcessor)
                for (const [c, f] of Object.entries(
                  this.cjsAutomaticModuleNameResolutions,
                ))
                  n += `var ${f} = require("${c}");`;
              else {
                const s = this.esmAutomaticImportNameResolutions,
                  { createElement: c } = s,
                  f = Ds(s, ['createElement']);
                c &&
                  (n += `import {createElement as ${c}} from "${this.jsxImportSource}";`);
                const d = Object.entries(f)
                  .map(([b, F]) => `${b} as ${F}`)
                  .join(', ');
                if (d) {
                  const b =
                    this.jsxImportSource +
                    (this.options.production
                      ? '/jsx-runtime'
                      : '/jsx-dev-runtime');
                  n += `import {${d}} from "${b}";`;
                }
              }
            return n;
          }
          processJSXTag() {
            const { jsxRole: n, start: s } = this.tokens.currentToken(),
              c = this.options.production
                ? null
                : this.getElementLocationCode(s);
            this.isAutomaticRuntime && n !== Se.KeyAfterPropSpread
              ? this.transformTagToJSXFunc(c, n)
              : this.transformTagToCreateElement(c);
          }
          getElementLocationCode(n) {
            return `lineNumber: ${this.getLineNumberForIndex(n)}`;
          }
          getLineNumberForIndex(n) {
            const s = this.tokens.code;
            for (; this.lastIndex < n && this.lastIndex < s.length; )
              s[this.lastIndex] ===
                `
` && this.lastLineNumber++,
                this.lastIndex++;
            return this.lastLineNumber;
          }
          transformTagToJSXFunc(n, s) {
            const c = s === Se.StaticChildren;
            this.tokens.replaceToken(this.getJSXFuncInvocationCode(c));
            let f = null;
            if (this.tokens.matches1(e.jsxTagEnd))
              this.tokens.replaceToken(`${this.getFragmentCode()}, {`),
                this.processAutomaticChildrenAndEndProps(s);
            else {
              if (
                (this.processTagIntro(),
                this.tokens.appendCode(', {'),
                (f = this.processProps(!0)),
                this.tokens.matches2(e.slash, e.jsxTagEnd))
              )
                this.tokens.appendCode('}');
              else if (this.tokens.matches1(e.jsxTagEnd))
                this.tokens.removeToken(),
                  this.processAutomaticChildrenAndEndProps(s);
              else
                throw new Error(
                  'Expected either /> or > at the end of the tag.',
                );
              f && this.tokens.appendCode(`, ${f}`);
            }
            for (
              this.options.production ||
                (f === null && this.tokens.appendCode(', void 0'),
                this.tokens.appendCode(
                  `, ${c}, ${this.getDevSource(n)}, this`,
                )),
                this.tokens.removeInitialToken();
              !this.tokens.matches1(e.jsxTagEnd);

            )
              this.tokens.removeToken();
            this.tokens.replaceToken(')');
          }
          transformTagToCreateElement(n) {
            if (
              (this.tokens.replaceToken(this.getCreateElementInvocationCode()),
              this.tokens.matches1(e.jsxTagEnd))
            )
              this.tokens.replaceToken(`${this.getFragmentCode()}, null`),
                this.processChildren(!0);
            else if (
              (this.processTagIntro(),
              this.processPropsObjectWithDevInfo(n),
              !this.tokens.matches2(e.slash, e.jsxTagEnd))
            )
              if (this.tokens.matches1(e.jsxTagEnd))
                this.tokens.removeToken(), this.processChildren(!0);
              else
                throw new Error(
                  'Expected either /> or > at the end of the tag.',
                );
            for (
              this.tokens.removeInitialToken();
              !this.tokens.matches1(e.jsxTagEnd);

            )
              this.tokens.removeToken();
            this.tokens.replaceToken(')');
          }
          getJSXFuncInvocationCode(n) {
            return this.options.production
              ? n
                ? this.claimAutoImportedFuncInvocation('jsxs', '/jsx-runtime')
                : this.claimAutoImportedFuncInvocation('jsx', '/jsx-runtime')
              : this.claimAutoImportedFuncInvocation(
                  'jsxDEV',
                  '/jsx-dev-runtime',
                );
          }
          getCreateElementInvocationCode() {
            if (this.isAutomaticRuntime)
              return this.claimAutoImportedFuncInvocation('createElement', '');
            {
              const { jsxPragmaInfo: n } = this;
              return `${
                (this.importProcessor &&
                  this.importProcessor.getIdentifierReplacement(n.base)) ||
                n.base
              }${n.suffix}(`;
            }
          }
          getFragmentCode() {
            if (this.isAutomaticRuntime)
              return this.claimAutoImportedName(
                'Fragment',
                this.options.production ? '/jsx-runtime' : '/jsx-dev-runtime',
              );
            {
              const { jsxPragmaInfo: n } = this;
              return (
                ((this.importProcessor &&
                  this.importProcessor.getIdentifierReplacement(
                    n.fragmentBase,
                  )) ||
                  n.fragmentBase) + n.fragmentSuffix
              );
            }
          }
          claimAutoImportedFuncInvocation(n, s) {
            const c = this.claimAutoImportedName(n, s);
            return this.importProcessor ? `${c}.call(void 0, ` : `${c}(`;
          }
          claimAutoImportedName(n, s) {
            if (this.importProcessor) {
              const c = this.jsxImportSource + s;
              return (
                this.cjsAutomaticModuleNameResolutions[c] ||
                  (this.cjsAutomaticModuleNameResolutions[c] =
                    this.importProcessor.getFreeIdentifierForPath(c)),
                `${this.cjsAutomaticModuleNameResolutions[c]}.${n}`
              );
            } else
              return (
                this.esmAutomaticImportNameResolutions[n] ||
                  (this.esmAutomaticImportNameResolutions[n] =
                    this.nameManager.claimFreeName(`_${n}`)),
                this.esmAutomaticImportNameResolutions[n]
              );
          }
          processTagIntro() {
            let n = this.tokens.currentIndex() + 1;
            for (
              ;
              this.tokens.tokens[n].isType ||
              (!this.tokens.matches2AtIndex(n - 1, e.jsxName, e.jsxName) &&
                !this.tokens.matches2AtIndex(n - 1, e.greaterThan, e.jsxName) &&
                !this.tokens.matches1AtIndex(n, e.braceL) &&
                !this.tokens.matches1AtIndex(n, e.jsxTagEnd) &&
                !this.tokens.matches2AtIndex(n, e.slash, e.jsxTagEnd));

            )
              n++;
            if (n === this.tokens.currentIndex() + 1) {
              const s = this.tokens.identifierName();
              Ms(s) && this.tokens.replaceToken(`'${s}'`);
            }
            for (; this.tokens.currentIndex() < n; )
              this.rootTransformer.processToken();
          }
          processPropsObjectWithDevInfo(n) {
            const s = this.options.production
              ? ''
              : `__self: this, __source: ${this.getDevSource(n)}`;
            if (
              !this.tokens.matches1(e.jsxName) &&
              !this.tokens.matches1(e.braceL)
            ) {
              s
                ? this.tokens.appendCode(`, {${s}}`)
                : this.tokens.appendCode(', null');
              return;
            }
            this.tokens.appendCode(', {'),
              this.processProps(!1),
              s
                ? this.tokens.appendCode(` ${s}}`)
                : this.tokens.appendCode('}');
          }
          processProps(n) {
            let s = null;
            for (;;) {
              if (this.tokens.matches2(e.jsxName, e.eq)) {
                const c = this.tokens.identifierName();
                if (n && c === 'key') {
                  s !== null && this.tokens.appendCode(s.replace(/[^\n]/g, '')),
                    this.tokens.removeToken(),
                    this.tokens.removeToken();
                  const f = this.tokens.snapshot();
                  this.processPropValue(),
                    (s =
                      this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(f));
                  continue;
                } else
                  this.processPropName(c),
                    this.tokens.replaceToken(': '),
                    this.processPropValue();
              } else if (this.tokens.matches1(e.jsxName)) {
                const c = this.tokens.identifierName();
                this.processPropName(c), this.tokens.appendCode(': true');
              } else if (this.tokens.matches1(e.braceL))
                this.tokens.replaceToken(''),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.replaceToken('');
              else break;
              this.tokens.appendCode(',');
            }
            return s;
          }
          processPropName(n) {
            n.includes('-')
              ? this.tokens.replaceToken(`'${n}'`)
              : this.tokens.copyToken();
          }
          processPropValue() {
            this.tokens.matches1(e.braceL)
              ? (this.tokens.replaceToken(''),
                this.rootTransformer.processBalancedCode(),
                this.tokens.replaceToken(''))
              : this.tokens.matches1(e.jsxTagStart)
              ? this.processJSXTag()
              : this.processStringPropValue();
          }
          processStringPropValue() {
            const n = this.tokens.currentToken(),
              s = this.tokens.code.slice(n.start + 1, n.end - 1),
              c = Bs(s),
              f = eo(s);
            this.tokens.replaceToken(f + c);
          }
          processAutomaticChildrenAndEndProps(n) {
            n === Se.StaticChildren
              ? (this.tokens.appendCode(' children: ['),
                this.processChildren(!1),
                this.tokens.appendCode(']}'))
              : (n === Se.OneChild && this.tokens.appendCode(' children: '),
                this.processChildren(!1),
                this.tokens.appendCode('}'));
          }
          processChildren(n) {
            let s = n;
            for (;;) {
              if (this.tokens.matches2(e.jsxTagStart, e.slash)) return;
              let c = !1;
              if (this.tokens.matches1(e.braceL))
                this.tokens.matches2(e.braceL, e.braceR)
                  ? (this.tokens.replaceToken(''), this.tokens.replaceToken(''))
                  : (this.tokens.replaceToken(s ? ', ' : ''),
                    this.rootTransformer.processBalancedCode(),
                    this.tokens.replaceToken(''),
                    (c = !0));
              else if (this.tokens.matches1(e.jsxTagStart))
                this.tokens.appendCode(s ? ', ' : ''),
                  this.processJSXTag(),
                  (c = !0);
              else if (
                this.tokens.matches1(e.jsxText) ||
                this.tokens.matches1(e.jsxEmptyText)
              )
                c = this.processChildTextElement(s);
              else
                throw new Error(
                  'Unexpected token when processing JSX children.',
                );
              c && (s = !0);
            }
          }
          processChildTextElement(n) {
            const s = this.tokens.currentToken(),
              c = this.tokens.code.slice(s.start, s.end),
              f = Bs(c),
              d = K1(c);
            return d === '""'
              ? (this.tokens.replaceToken(f), !1)
              : (this.tokens.replaceToken(`${n ? ', ' : ''}${d}${f}`), !0);
          }
          getDevSource(n) {
            return `{fileName: ${this.getFilenameVarName()}, ${n}}`;
          }
          getFilenameVarName() {
            return (
              this.filenameVarName ||
                (this.filenameVarName =
                  this.nameManager.claimFreeName('_jsxFileName')),
              this.filenameVarName
            );
          }
        }
        function Ms(t) {
          const n = t.charCodeAt(0);
          return n >= h.lowercaseA && n <= h.lowercaseZ;
        }
        function K1(t) {
          let n = '',
            s = '',
            c = !1,
            f = !1;
          for (let d = 0; d < t.length; d++) {
            const b = t[d];
            if (b === ' ' || b === '	' || b === '\r') c || (s += b);
            else if (
              b ===
              `
`
            )
              (s = ''), (c = !0);
            else {
              if ((f && c && (n += ' '), (n += s), (s = ''), b === '&')) {
                const { entity: F, newI: J } = js(t, d + 1);
                (d = J - 1), (n += F);
              } else n += b;
              (f = !0), (c = !1);
            }
          }
          return c || (n += s), JSON.stringify(n);
        }
        function Bs(t) {
          let n = 0,
            s = 0;
          for (const c of t)
            c ===
            `
`
              ? (n++, (s = 0))
              : c === ' ' && s++;
          return (
            `
`.repeat(n) + ' '.repeat(s)
          );
        }
        function eo(t) {
          let n = '';
          for (let s = 0; s < t.length; s++) {
            const c = t[s];
            if (
              c ===
              `
`
            )
              if (/\s/.test(t[s + 1]))
                for (n += ' '; s < t.length && /\s/.test(t[s + 1]); ) s++;
              else
                n += `
`;
            else if (c === '&') {
              const { entity: f, newI: d } = js(t, s + 1);
              (n += f), (s = d - 1);
            } else n += c;
          }
          return JSON.stringify(n);
        }
        function js(t, n) {
          let s = '',
            c = 0,
            f,
            d = n;
          if (t[d] === '#') {
            let b = 10;
            d++;
            let F;
            if (t[d] === 'x')
              for (b = 16, d++, F = d; d < t.length && no(t.charCodeAt(d)); )
                d++;
            else for (F = d; d < t.length && to(t.charCodeAt(d)); ) d++;
            if (t[d] === ';') {
              const J = t.slice(F, d);
              J && (d++, (f = String.fromCodePoint(parseInt(J, b))));
            }
          } else
            for (; d < t.length && c++ < 10; ) {
              const b = t[d];
              if ((d++, b === ';')) {
                f = Z1.get(s);
                break;
              }
              s += b;
            }
          return f ? { entity: f, newI: d } : { entity: '&', newI: n };
        }
        function to(t) {
          return t >= h.digit0 && t <= h.digit9;
        }
        function no(t) {
          return (
            (t >= h.digit0 && t <= h.digit9) ||
            (t >= h.lowercaseA && t <= h.lowercaseF) ||
            (t >= h.uppercaseA && t <= h.uppercaseF)
          );
        }
        function qs(t, n) {
          const s = Fs(n),
            c = new Set();
          for (let f = 0; f < t.tokens.length; f++) {
            const d = t.tokens[f];
            if (
              (d.type === e.name &&
                !d.isType &&
                (d.identifierRole === O.Access ||
                  d.identifierRole === O.ObjectShorthand ||
                  d.identifierRole === O.ExportAccess) &&
                !d.shadowsGlobal &&
                c.add(t.identifierNameForToken(d)),
              d.type === e.jsxTagStart && c.add(s.base),
              d.type === e.jsxTagStart &&
                f + 1 < t.tokens.length &&
                t.tokens[f + 1].type === e.jsxTagEnd &&
                (c.add(s.base), c.add(s.fragmentBase)),
              d.type === e.jsxName && d.identifierRole === O.Access)
            ) {
              const b = t.identifierNameForToken(d);
              (!Ms(b) || t.tokens[f + 1].type === e.dot) &&
                c.add(t.identifierNameForToken(d));
            }
          }
          return c;
        }
        class Lt {
          __init() {
            this.nonTypeIdentifiers = new Set();
          }
          __init2() {
            this.importInfoByPath = new Map();
          }
          __init3() {
            this.importsToReplace = new Map();
          }
          __init4() {
            this.identifierReplacements = new Map();
          }
          __init5() {
            this.exportBindingsByLocalName = new Map();
          }
          constructor(n, s, c, f, d, b, F) {
            (this.nameManager = n),
              (this.tokens = s),
              (this.enableLegacyTypeScriptModuleInterop = c),
              (this.options = f),
              (this.isTypeScriptTransformEnabled = d),
              (this.keepUnusedImports = b),
              (this.helperManager = F),
              Lt.prototype.__init.call(this),
              Lt.prototype.__init2.call(this),
              Lt.prototype.__init3.call(this),
              Lt.prototype.__init4.call(this),
              Lt.prototype.__init5.call(this);
          }
          preprocessTokens() {
            for (let n = 0; n < this.tokens.tokens.length; n++)
              this.tokens.matches1AtIndex(n, e._import) &&
                !this.tokens.matches3AtIndex(n, e._import, e.name, e.eq) &&
                this.preprocessImportAtIndex(n),
                this.tokens.matches1AtIndex(n, e._export) &&
                  !this.tokens.matches2AtIndex(n, e._export, e.eq) &&
                  this.preprocessExportAtIndex(n);
            this.generateImportReplacements();
          }
          pruneTypeOnlyImports() {
            this.nonTypeIdentifiers = qs(this.tokens, this.options);
            for (const [n, s] of this.importInfoByPath.entries()) {
              if (
                s.hasBareImport ||
                s.hasStarExport ||
                s.exportStarNames.length > 0 ||
                s.namedExports.length > 0
              )
                continue;
              [
                ...s.defaultNames,
                ...s.wildcardNames,
                ...s.namedImports.map(({ localName: f }) => f),
              ].every((f) => this.shouldAutomaticallyElideImportedName(f)) &&
                this.importsToReplace.set(n, '');
            }
          }
          shouldAutomaticallyElideImportedName(n) {
            return (
              this.isTypeScriptTransformEnabled &&
              !this.keepUnusedImports &&
              !this.nonTypeIdentifiers.has(n)
            );
          }
          generateImportReplacements() {
            for (const [n, s] of this.importInfoByPath.entries()) {
              const {
                defaultNames: c,
                wildcardNames: f,
                namedImports: d,
                namedExports: b,
                exportStarNames: F,
                hasStarExport: J,
              } = s;
              if (
                c.length === 0 &&
                f.length === 0 &&
                d.length === 0 &&
                b.length === 0 &&
                F.length === 0 &&
                !J
              ) {
                this.importsToReplace.set(n, `require('${n}');`);
                continue;
              }
              const oe = this.getFreeIdentifierForPath(n);
              let ye;
              this.enableLegacyTypeScriptModuleInterop
                ? (ye = oe)
                : (ye = f.length > 0 ? f[0] : this.getFreeIdentifierForPath(n));
              let pe = `var ${oe} = require('${n}');`;
              if (f.length > 0)
                for (const ee of f) {
                  const ke = this.enableLegacyTypeScriptModuleInterop
                    ? oe
                    : `${this.helperManager.getHelperName(
                        'interopRequireWildcard',
                      )}(${oe})`;
                  pe += ` var ${ee} = ${ke};`;
                }
              else
                F.length > 0 && ye !== oe
                  ? (pe += ` var ${ye} = ${this.helperManager.getHelperName(
                      'interopRequireWildcard',
                    )}(${oe});`)
                  : c.length > 0 &&
                    ye !== oe &&
                    (pe += ` var ${ye} = ${this.helperManager.getHelperName(
                      'interopRequireDefault',
                    )}(${oe});`);
              for (const { importedName: ee, localName: ke } of b)
                pe += ` ${this.helperManager.getHelperName(
                  'createNamedExportFrom',
                )}(${oe}, '${ke}', '${ee}');`;
              for (const ee of F) pe += ` exports.${ee} = ${ye};`;
              J &&
                (pe += ` ${this.helperManager.getHelperName(
                  'createStarExport',
                )}(${oe});`),
                this.importsToReplace.set(n, pe);
              for (const ee of c)
                this.identifierReplacements.set(ee, `${ye}.default`);
              for (const { importedName: ee, localName: ke } of d)
                this.identifierReplacements.set(ke, `${oe}.${ee}`);
            }
          }
          getFreeIdentifierForPath(n) {
            const s = n.split('/'),
              f = s[s.length - 1].replace(/\W/g, '');
            return this.nameManager.claimFreeName(`_${f}`);
          }
          preprocessImportAtIndex(n) {
            const s = [],
              c = [],
              f = [];
            if (
              (n++,
              ((this.tokens.matchesContextualAtIndex(n, u._type) ||
                this.tokens.matches1AtIndex(n, e._typeof)) &&
                !this.tokens.matches1AtIndex(n + 1, e.comma) &&
                !this.tokens.matchesContextualAtIndex(n + 1, u._from)) ||
                this.tokens.matches1AtIndex(n, e.parenL))
            )
              return;
            if (
              (this.tokens.matches1AtIndex(n, e.name) &&
                (s.push(this.tokens.identifierNameAtIndex(n)),
                n++,
                this.tokens.matches1AtIndex(n, e.comma) && n++),
              this.tokens.matches1AtIndex(n, e.star) &&
                ((n += 2), c.push(this.tokens.identifierNameAtIndex(n)), n++),
              this.tokens.matches1AtIndex(n, e.braceL))
            ) {
              const F = this.getNamedImports(n + 1);
              n = F.newIndex;
              for (const J of F.namedImports)
                J.importedName === 'default' ? s.push(J.localName) : f.push(J);
            }
            if (
              (this.tokens.matchesContextualAtIndex(n, u._from) && n++,
              !this.tokens.matches1AtIndex(n, e.string))
            )
              throw new Error(
                'Expected string token at the end of import statement.',
              );
            const d = this.tokens.stringValueAtIndex(n),
              b = this.getImportInfo(d);
            b.defaultNames.push(...s),
              b.wildcardNames.push(...c),
              b.namedImports.push(...f),
              s.length === 0 &&
                c.length === 0 &&
                f.length === 0 &&
                (b.hasBareImport = !0);
          }
          preprocessExportAtIndex(n) {
            if (
              this.tokens.matches2AtIndex(n, e._export, e._var) ||
              this.tokens.matches2AtIndex(n, e._export, e._let) ||
              this.tokens.matches2AtIndex(n, e._export, e._const)
            )
              this.preprocessVarExportAtIndex(n);
            else if (
              this.tokens.matches2AtIndex(n, e._export, e._function) ||
              this.tokens.matches2AtIndex(n, e._export, e._class)
            ) {
              const s = this.tokens.identifierNameAtIndex(n + 2);
              this.addExportBinding(s, s);
            } else if (
              this.tokens.matches3AtIndex(n, e._export, e.name, e._function)
            ) {
              const s = this.tokens.identifierNameAtIndex(n + 3);
              this.addExportBinding(s, s);
            } else
              this.tokens.matches2AtIndex(n, e._export, e.braceL)
                ? this.preprocessNamedExportAtIndex(n)
                : this.tokens.matches2AtIndex(n, e._export, e.star) &&
                  this.preprocessExportStarAtIndex(n);
          }
          preprocessVarExportAtIndex(n) {
            let s = 0;
            for (let c = n + 2; ; c++)
              if (
                this.tokens.matches1AtIndex(c, e.braceL) ||
                this.tokens.matches1AtIndex(c, e.dollarBraceL) ||
                this.tokens.matches1AtIndex(c, e.bracketL)
              )
                s++;
              else if (
                this.tokens.matches1AtIndex(c, e.braceR) ||
                this.tokens.matches1AtIndex(c, e.bracketR)
              )
                s--;
              else {
                if (s === 0 && !this.tokens.matches1AtIndex(c, e.name)) break;
                if (this.tokens.matches1AtIndex(1, e.eq)) {
                  const f = this.tokens.currentToken().rhsEndIndex;
                  if (f == null)
                    throw new Error('Expected = token with an end index.');
                  c = f - 1;
                } else {
                  const f = this.tokens.tokens[c];
                  if (Ke(f)) {
                    const d = this.tokens.identifierNameAtIndex(c);
                    this.identifierReplacements.set(d, `exports.${d}`);
                  }
                }
              }
          }
          preprocessNamedExportAtIndex(n) {
            n += 2;
            const { newIndex: s, namedImports: c } = this.getNamedImports(n);
            if (((n = s), this.tokens.matchesContextualAtIndex(n, u._from)))
              n++;
            else {
              for (const { importedName: b, localName: F } of c)
                this.addExportBinding(b, F);
              return;
            }
            if (!this.tokens.matches1AtIndex(n, e.string))
              throw new Error(
                'Expected string token at the end of import statement.',
              );
            const f = this.tokens.stringValueAtIndex(n);
            this.getImportInfo(f).namedExports.push(...c);
          }
          preprocessExportStarAtIndex(n) {
            let s = null;
            if (
              (this.tokens.matches3AtIndex(n, e._export, e.star, e._as)
                ? ((n += 3),
                  (s = this.tokens.identifierNameAtIndex(n)),
                  (n += 2))
                : (n += 3),
              !this.tokens.matches1AtIndex(n, e.string))
            )
              throw new Error(
                'Expected string token at the end of star export statement.',
              );
            const c = this.tokens.stringValueAtIndex(n),
              f = this.getImportInfo(c);
            s !== null ? f.exportStarNames.push(s) : (f.hasStarExport = !0);
          }
          getNamedImports(n) {
            const s = [];
            for (;;) {
              if (this.tokens.matches1AtIndex(n, e.braceR)) {
                n++;
                break;
              }
              const c = Jt(this.tokens, n);
              if (
                ((n = c.endIndex),
                c.isType ||
                  s.push({ importedName: c.leftName, localName: c.rightName }),
                this.tokens.matches2AtIndex(n, e.comma, e.braceR))
              ) {
                n += 2;
                break;
              } else if (this.tokens.matches1AtIndex(n, e.braceR)) {
                n++;
                break;
              } else if (this.tokens.matches1AtIndex(n, e.comma)) n++;
              else
                throw new Error(
                  `Unexpected token: ${JSON.stringify(this.tokens.tokens[n])}`,
                );
            }
            return { newIndex: n, namedImports: s };
          }
          getImportInfo(n) {
            const s = this.importInfoByPath.get(n);
            if (s) return s;
            const c = {
              defaultNames: [],
              wildcardNames: [],
              namedImports: [],
              namedExports: [],
              hasBareImport: !1,
              exportStarNames: [],
              hasStarExport: !1,
            };
            return this.importInfoByPath.set(n, c), c;
          }
          addExportBinding(n, s) {
            this.exportBindingsByLocalName.has(n) ||
              this.exportBindingsByLocalName.set(n, []),
              this.exportBindingsByLocalName.get(n).push(s);
          }
          claimImportCode(n) {
            const s = this.importsToReplace.get(n);
            return this.importsToReplace.set(n, ''), s || '';
          }
          getIdentifierReplacement(n) {
            return this.identifierReplacements.get(n) || null;
          }
          resolveExportBinding(n) {
            const s = this.exportBindingsByLocalName.get(n);
            return !s || s.length === 0
              ? null
              : s.map((c) => `exports.${c}`).join(' = ');
          }
          getGlobalNames() {
            return new Set([
              ...this.identifierReplacements.keys(),
              ...this.exportBindingsByLocalName.keys(),
            ]);
          }
        }
        var Qt = $(40653);
        function ro({ code: t, mappings: n }, s, c, f, d) {
          const b = so(f, d),
            F = new Qt.GenMapping({ file: c.compiledFilename });
          let J = 0,
            oe = n[0];
          for (; oe === void 0 && J < n.length - 1; ) J++, (oe = n[J]);
          let ye = 0,
            pe = 0;
          oe !== pe && (0, Qt.maybeAddSegment)(F, ye, 0, s, ye, 0);
          for (let We = 0; We < t.length; We++) {
            if (We === oe) {
              const et = oe - pe,
                ze = b[J];
              for (
                (0, Qt.maybeAddSegment)(F, ye, et, s, ye, ze);
                (oe === We || oe === void 0) && J < n.length - 1;

              )
                J++, (oe = n[J]);
            }
            t.charCodeAt(We) === h.lineFeed &&
              (ye++,
              (pe = We + 1),
              oe !== pe && (0, Qt.maybeAddSegment)(F, ye, 0, s, ye, 0));
          }
          const Qe = (0, Qt.toEncodedMap)(F),
            { sourceRoot: ee, sourcesContent: ke } = Qe;
          return Ds(Qe, ['sourceRoot', 'sourcesContent']);
        }
        function so(t, n) {
          const s = new Array(n.length);
          let c = 0,
            f = n[c].start,
            d = 0;
          for (let b = 0; b < t.length; b++)
            b === f && ((s[c] = f - d), c++, (f = n[c].start)),
              t.charCodeAt(b) === h.lineFeed && (d = b + 1);
          return s;
        }
        const oo = {
          require: `
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,
          interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
          interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
          createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,
          createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,
          nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
          asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
          optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
          asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
          optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
          asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
        };
        class gn {
          __init() {
            this.helperNames = {};
          }
          __init2() {
            this.createRequireName = null;
          }
          constructor(n) {
            (this.nameManager = n),
              gn.prototype.__init.call(this),
              gn.prototype.__init2.call(this);
          }
          getHelperName(n) {
            let s = this.helperNames[n];
            return (
              s ||
              ((s = this.nameManager.claimFreeName(`_${n}`)),
              (this.helperNames[n] = s),
              s)
            );
          }
          emitHelpers() {
            let n = '';
            this.helperNames.optionalChainDelete &&
              this.getHelperName('optionalChain'),
              this.helperNames.asyncOptionalChainDelete &&
                this.getHelperName('asyncOptionalChain');
            for (const [s, c] of Object.entries(oo)) {
              const f = this.helperNames[s];
              let d = c;
              s === 'optionalChainDelete'
                ? (d = d.replace(
                    'OPTIONAL_CHAIN_NAME',
                    this.helperNames.optionalChain,
                  ))
                : s === 'asyncOptionalChainDelete'
                ? (d = d.replace(
                    'ASYNC_OPTIONAL_CHAIN_NAME',
                    this.helperNames.asyncOptionalChain,
                  ))
                : s === 'require' &&
                  (this.createRequireName === null &&
                    (this.createRequireName =
                      this.nameManager.claimFreeName('_createRequire')),
                  (d = d.replace(
                    /CREATE_REQUIRE_NAME/g,
                    this.createRequireName,
                  ))),
                f &&
                  ((n += ' '),
                  (n += d.replace(s, f).replace(/\s+/g, ' ').trim()));
            }
            return n;
          }
        }
        function Us(t, n, s) {
          io(t, s) && ao(t, n, s);
        }
        function io(t, n) {
          for (const s of t.tokens)
            if (
              s.type === e.name &&
              !s.isType &&
              T(s) &&
              n.has(t.identifierNameForToken(s))
            )
              return !0;
          return !1;
        }
        function ao(t, n, s) {
          const c = [];
          let f = n.length - 1;
          for (let d = t.tokens.length - 1; ; d--) {
            for (; c.length > 0 && c[c.length - 1].startTokenIndex === d + 1; )
              c.pop();
            for (; f >= 0 && n[f].endTokenIndex === d + 1; ) c.push(n[f]), f--;
            if (d < 0) break;
            const b = t.tokens[d],
              F = t.identifierNameForToken(b);
            if (c.length > 1 && !b.isType && b.type === e.name && s.has(F)) {
              if (P(b)) $s(c[c.length - 1], t, F);
              else if (M(b)) {
                let J = c.length - 1;
                for (; J > 0 && !c[J].isFunctionScope; ) J--;
                if (J < 0)
                  throw new Error('Did not find parent function scope.');
                $s(c[J], t, F);
              }
            }
          }
          if (c.length > 0)
            throw new Error(
              'Expected empty scope stack after processing file.',
            );
        }
        function $s(t, n, s) {
          for (let c = t.startTokenIndex; c < t.endTokenIndex; c++) {
            const f = n.tokens[c];
            (f.type === e.name || f.type === e.jsxName) &&
              n.identifierNameForToken(f) === s &&
              (f.shadowsGlobal = !0);
          }
        }
        function co(t, n) {
          const s = [];
          for (const c of n)
            c.type === e.name && s.push(t.slice(c.start, c.end));
          return s;
        }
        class Bn {
          __init() {
            this.usedNames = new Set();
          }
          constructor(n, s) {
            Bn.prototype.__init.call(this),
              (this.usedNames = new Set(co(n, s)));
          }
          claimFreeName(n) {
            const s = this.findFreeName(n);
            return this.usedNames.add(s), s;
          }
          findFreeName(n) {
            if (!this.usedNames.has(n)) return n;
            let s = 2;
            for (; this.usedNames.has(n + String(s)); ) s++;
            return n + String(s);
          }
        }
        var Fe = $(59541);
        const lo = Fe.union(
            Fe.lit('jsx'),
            Fe.lit('typescript'),
            Fe.lit('flow'),
            Fe.lit('imports'),
            Fe.lit('react-hot-loader'),
            Fe.lit('jest'),
          ),
          uo = Fe.iface([], { compiledFilename: 'string' }),
          fo = Fe.iface([], {
            transforms: Fe.array('Transform'),
            disableESTransforms: Fe.opt('boolean'),
            jsxRuntime: Fe.opt(
              Fe.union(
                Fe.lit('classic'),
                Fe.lit('automatic'),
                Fe.lit('preserve'),
              ),
            ),
            production: Fe.opt('boolean'),
            jsxImportSource: Fe.opt('string'),
            jsxPragma: Fe.opt('string'),
            jsxFragmentPragma: Fe.opt('string'),
            keepUnusedImports: Fe.opt('boolean'),
            preserveDynamicImport: Fe.opt('boolean'),
            injectCreateRequireForImportRequire: Fe.opt('boolean'),
            enableLegacyTypeScriptModuleInterop: Fe.opt('boolean'),
            enableLegacyBabel5ModuleInterop: Fe.opt('boolean'),
            sourceMapOptions: Fe.opt('SourceMapOptions'),
            filePath: Fe.opt('string'),
          });
        var ho = { Transform: lo, SourceMapOptions: uo, Options: fo };
        const { Options: po } = (0, Fe.createCheckers)(ho);
        function mo(t) {
          po.strictCheck(t);
        }
        function Vs() {
          _(), Ge(!1);
        }
        function Ws(t) {
          _(), yn(t);
        }
        function Tt(t) {
          de(), jn(t);
        }
        function _n() {
          de(),
            (r.tokens[r.tokens.length - 1].identifierRole =
              O.ImportDeclaration);
        }
        function jn(t) {
          let n;
          r.scopeDepth === 0
            ? (n = O.TopLevelDeclaration)
            : t
            ? (n = O.BlockScopedDeclaration)
            : (n = O.FunctionScopedDeclaration),
            (r.tokens[r.tokens.length - 1].identifierRole = n);
        }
        function yn(t) {
          switch (r.type) {
            case e._this: {
              const n = Q(0);
              _(), ne(n);
              return;
            }
            case e._yield:
            case e.name: {
              (r.type = e.name), Tt(t);
              return;
            }
            case e.bracketL: {
              _(), qn(e.bracketR, t, !0);
              return;
            }
            case e.braceL:
              sr(!0, t);
              return;
            default:
              he();
          }
        }
        function qn(t, n, s = !1, c = !1, f = 0) {
          let d = !0,
            b = !1;
          const F = r.tokens.length;
          for (; !y(t) && !r.error; )
            if (
              (d
                ? (d = !1)
                : (I(e.comma),
                  (r.tokens[r.tokens.length - 1].contextId = f),
                  !b &&
                    r.tokens[F].isType &&
                    ((r.tokens[r.tokens.length - 1].isType = !0), (b = !0))),
              !(s && o(e.comma)))
            ) {
              if (y(t)) break;
              if (o(e.ellipsis)) {
                Ws(n), Hs(), y(e.comma), I(t);
                break;
              } else ko(c, n);
            }
        }
        function ko(t, n) {
          t &&
            $n([u._public, u._protected, u._private, u._readonly, u._override]),
            xn(n),
            Hs(),
            xn(n, !0);
        }
        function Hs() {
          D ? Da() : E && Ti();
        }
        function xn(t, n = !1) {
          if ((n || yn(t), !y(e.eq))) return;
          const s = r.tokens.length - 1;
          Ge(), (r.tokens[s].rhsEndIndex = r.tokens.length);
        }
        function Un() {
          return o(e.name);
        }
        function go() {
          return (
            o(e.name) ||
            !!(r.type & e.IS_KEYWORD) ||
            o(e.string) ||
            o(e.num) ||
            o(e.bigint) ||
            o(e.decimal)
          );
        }
        function Ys() {
          const t = r.snapshot();
          return (
            _(),
            (o(e.bracketL) ||
              o(e.braceL) ||
              o(e.star) ||
              o(e.ellipsis) ||
              o(e.hash) ||
              go()) &&
            !Ee()
              ? !0
              : (r.restoreFromSnapshot(t), !1)
          );
        }
        function $n(t) {
          for (; Gs(t) !== null; );
        }
        function Gs(t) {
          if (!o(e.name)) return null;
          const n = r.contextualKeyword;
          if (t.indexOf(n) !== -1 && Ys()) {
            switch (n) {
              case u._readonly:
                r.tokens[r.tokens.length - 1].type = e._readonly;
                break;
              case u._abstract:
                r.tokens[r.tokens.length - 1].type = e._abstract;
                break;
              case u._static:
                r.tokens[r.tokens.length - 1].type = e._static;
                break;
              case u._public:
                r.tokens[r.tokens.length - 1].type = e._public;
                break;
              case u._private:
                r.tokens[r.tokens.length - 1].type = e._private;
                break;
              case u._protected:
                r.tokens[r.tokens.length - 1].type = e._protected;
                break;
              case u._override:
                r.tokens[r.tokens.length - 1].type = e._override;
                break;
              case u._declare:
                r.tokens[r.tokens.length - 1].type = e._declare;
                break;
              default:
                break;
            }
            return n;
          }
          return null;
        }
        function Zt() {
          for (de(); y(e.dot); ) de();
        }
        function _o() {
          Zt(), !Ee() && o(e.lessThan) && Vt();
        }
        function yo() {
          _(), en();
        }
        function xo() {
          _();
        }
        function wo() {
          I(e._typeof),
            o(e._import) ? Xs() : Zt(),
            !Ee() && o(e.lessThan) && Vt();
        }
        function Xs() {
          I(e._import),
            I(e.parenL),
            I(e.string),
            I(e.parenR),
            y(e.dot) && Zt(),
            o(e.lessThan) && Vt();
        }
        function Io() {
          y(e._const);
          const t = y(e._in),
            n = _e(u._out);
          y(e._const),
            (t || n) && !o(e.name)
              ? (r.tokens[r.tokens.length - 1].type = e.name)
              : de(),
            y(e._extends) && qe(),
            y(e.eq) && qe();
        }
        function Dt() {
          o(e.lessThan) && wn();
        }
        function wn() {
          const t = Q(0);
          for (
            o(e.lessThan) || o(e.typeParameterStart) ? _() : he();
            !y(e.greaterThan) && !r.error;

          )
            Io(), y(e.comma);
          ne(t);
        }
        function Vn(t) {
          const n = t === e.arrow;
          Dt(),
            I(e.parenL),
            r.scopeDepth++,
            bo(!1),
            r.scopeDepth--,
            (n || o(t)) && Kt(t);
        }
        function bo(t) {
          qn(e.parenR, t);
        }
        function In() {
          y(e.comma) || Ie();
        }
        function zs() {
          Vn(e.colon), In();
        }
        function To() {
          const t = r.snapshot();
          _();
          const n = y(e.name) && o(e.colon);
          return r.restoreFromSnapshot(t), n;
        }
        function Js() {
          if (!(o(e.bracketL) && To())) return !1;
          const t = Q(0);
          return (
            I(e.bracketL), de(), en(), I(e.bracketR), Ut(), In(), ne(t), !0
          );
        }
        function Qs(t) {
          y(e.question),
            !t && (o(e.parenL) || o(e.lessThan))
              ? (Vn(e.colon), In())
              : (Ut(), In());
        }
        function Eo() {
          if (o(e.parenL) || o(e.lessThan)) {
            zs();
            return;
          }
          if (o(e._new)) {
            _(), o(e.parenL) || o(e.lessThan) ? zs() : Qs(!1);
            return;
          }
          const t = !!Gs([u._readonly]);
          Js() || ((v(u._get) || v(u._set)) && Ys(), nn(-1), Qs(t));
        }
        function Ao() {
          Zs();
        }
        function Zs() {
          for (I(e.braceL); !y(e.braceR) && !r.error; ) Eo();
        }
        function So() {
          const t = r.snapshot(),
            n = vo();
          return r.restoreFromSnapshot(t), n;
        }
        function vo() {
          return (
            _(),
            y(e.plus) || y(e.minus)
              ? v(u._readonly)
              : (v(u._readonly) && _(),
                !o(e.bracketL) || (_(), !Un()) ? !1 : (_(), o(e._in)))
          );
        }
        function No() {
          de(), I(e._in), qe();
        }
        function Co() {
          I(e.braceL),
            o(e.plus) || o(e.minus) ? (_(), Y(u._readonly)) : _e(u._readonly),
            I(e.bracketL),
            No(),
            _e(u._as) && qe(),
            I(e.bracketR),
            o(e.plus) || o(e.minus) ? (_(), I(e.question)) : y(e.question),
            Wo(),
            Ie(),
            I(e.braceR);
        }
        function Ro() {
          for (I(e.bracketL); !y(e.bracketR) && !r.error; ) Po(), y(e.comma);
        }
        function Po() {
          y(e.ellipsis) ? qe() : (qe(), y(e.question)), y(e.colon) && qe();
        }
        function Lo() {
          I(e.parenL), qe(), I(e.parenR);
        }
        function Do() {
          for (Te(), Te(); !o(e.backQuote) && !r.error; )
            I(e.dollarBraceL), qe(), Te(), Te();
          _();
        }
        var Et;
        (function (t) {
          t[(t.TSFunctionType = 0)] = 'TSFunctionType';
          const s = 1;
          t[(t.TSConstructorType = s)] = 'TSConstructorType';
          const c = s + 1;
          t[(t.TSAbstractConstructorType = c)] = 'TSAbstractConstructorType';
        })(Et || (Et = {}));
        function Wn(t) {
          t === Et.TSAbstractConstructorType && Y(u._abstract),
            (t === Et.TSConstructorType ||
              t === Et.TSAbstractConstructorType) &&
              I(e._new);
          const n = r.inDisallowConditionalTypesContext;
          (r.inDisallowConditionalTypesContext = !1),
            Vn(e.arrow),
            (r.inDisallowConditionalTypesContext = n);
        }
        function Fo() {
          switch (r.type) {
            case e.name:
              _o();
              return;
            case e._void:
            case e._null:
              _();
              return;
            case e.string:
            case e.num:
            case e.bigint:
            case e.decimal:
            case e._true:
            case e._false:
              Ht();
              return;
            case e.minus:
              _(), Ht();
              return;
            case e._this: {
              xo(), v(u._is) && !Ee() && yo();
              return;
            }
            case e._typeof:
              wo();
              return;
            case e._import:
              Xs();
              return;
            case e.braceL:
              So() ? Co() : Ao();
              return;
            case e.bracketL:
              Ro();
              return;
            case e.parenL:
              Lo();
              return;
            case e.backQuote:
              Do();
              return;
            default:
              if (r.type & e.IS_KEYWORD) {
                _(), (r.tokens[r.tokens.length - 1].type = e.name);
                return;
              }
              break;
          }
          he();
        }
        function Oo() {
          for (Fo(); !Ee() && y(e.bracketL); )
            y(e.bracketR) || (qe(), I(e.bracketR));
        }
        function Mo() {
          if ((Y(u._infer), de(), o(e._extends))) {
            const t = r.snapshot();
            I(e._extends);
            const n = r.inDisallowConditionalTypesContext;
            (r.inDisallowConditionalTypesContext = !0),
              qe(),
              (r.inDisallowConditionalTypesContext = n),
              (r.error ||
                (!r.inDisallowConditionalTypesContext && o(e.question))) &&
                r.restoreFromSnapshot(t);
          }
        }
        function Hn() {
          if (v(u._keyof) || v(u._unique) || v(u._readonly)) _(), Hn();
          else if (v(u._infer)) Mo();
          else {
            const t = r.inDisallowConditionalTypesContext;
            (r.inDisallowConditionalTypesContext = !1),
              Oo(),
              (r.inDisallowConditionalTypesContext = t);
          }
        }
        function Ks() {
          if ((y(e.bitwiseAND), Hn(), o(e.bitwiseAND)))
            for (; y(e.bitwiseAND); ) Hn();
        }
        function Bo() {
          if ((y(e.bitwiseOR), Ks(), o(e.bitwiseOR)))
            for (; y(e.bitwiseOR); ) Ks();
        }
        function jo() {
          return o(e.lessThan) ? !0 : o(e.parenL) && Uo();
        }
        function qo() {
          if (o(e.name) || o(e._this)) return _(), !0;
          if (o(e.braceL) || o(e.bracketL)) {
            let t = 1;
            for (_(); t > 0 && !r.error; )
              o(e.braceL) || o(e.bracketL)
                ? t++
                : (o(e.braceR) || o(e.bracketR)) && t--,
                _();
            return !0;
          }
          return !1;
        }
        function Uo() {
          const t = r.snapshot(),
            n = $o();
          return r.restoreFromSnapshot(t), n;
        }
        function $o() {
          return (
            _(),
            !!(
              o(e.parenR) ||
              o(e.ellipsis) ||
              (qo() &&
                (o(e.colon) ||
                  o(e.comma) ||
                  o(e.question) ||
                  o(e.eq) ||
                  (o(e.parenR) && (_(), o(e.arrow)))))
            )
          );
        }
        function Kt(t) {
          const n = Q(0);
          I(t), Ho() || qe(), ne(n);
        }
        function Vo() {
          o(e.colon) && Kt(e.colon);
        }
        function Ut() {
          o(e.colon) && en();
        }
        function Wo() {
          y(e.colon) && qe();
        }
        function Ho() {
          const t = r.snapshot();
          return v(u._asserts)
            ? (_(),
              _e(u._is)
                ? (qe(), !0)
                : Un() || o(e._this)
                ? (_(), _e(u._is) && qe(), !0)
                : (r.restoreFromSnapshot(t), !1))
            : Un() || o(e._this)
            ? (_(),
              v(u._is) && !Ee()
                ? (_(), qe(), !0)
                : (r.restoreFromSnapshot(t), !1))
            : !1;
        }
        function en() {
          const t = Q(0);
          I(e.colon), qe(), ne(t);
        }
        function qe() {
          if (
            (e1(),
            r.inDisallowConditionalTypesContext || Ee() || !y(e._extends))
          )
            return;
          const t = r.inDisallowConditionalTypesContext;
          (r.inDisallowConditionalTypesContext = !0),
            e1(),
            (r.inDisallowConditionalTypesContext = t),
            I(e.question),
            qe(),
            I(e.colon),
            qe();
        }
        function Yo() {
          return v(u._abstract) && i() === e._new;
        }
        function e1() {
          if (jo()) {
            Wn(Et.TSFunctionType);
            return;
          }
          if (o(e._new)) {
            Wn(Et.TSConstructorType);
            return;
          } else if (Yo()) {
            Wn(Et.TSAbstractConstructorType);
            return;
          }
          Bo();
        }
        function Go() {
          const t = Q(1);
          qe(), I(e.greaterThan), ne(t), tn();
        }
        function Xo() {
          if (y(e.jsxTagStart)) {
            r.tokens[r.tokens.length - 1].type = e.typeParameterStart;
            const t = Q(1);
            for (; !o(e.greaterThan) && !r.error; ) qe(), y(e.comma);
            ct(), ne(t);
          }
        }
        function t1() {
          for (; !o(e.braceL) && !r.error; ) zo(), y(e.comma);
        }
        function zo() {
          Zt(), o(e.lessThan) && Vt();
        }
        function Jo() {
          Tt(!1), Dt(), y(e._extends) && t1(), Zs();
        }
        function Qo() {
          Tt(!1), Dt(), I(e.eq), qe(), Ie();
        }
        function Zo() {
          if ((o(e.string) ? Ht() : de(), y(e.eq))) {
            const t = r.tokens.length - 1;
            Ge(), (r.tokens[t].rhsEndIndex = r.tokens.length);
          }
        }
        function Yn() {
          for (Tt(!1), I(e.braceL); !y(e.braceR) && !r.error; )
            Zo(), y(e.comma);
        }
        function Gn() {
          I(e.braceL), Pn(e.braceR);
        }
        function Xn() {
          Tt(!1), y(e.dot) ? Xn() : Gn();
        }
        function n1() {
          v(u._global) ? de() : o(e.string) ? xt() : he(),
            o(e.braceL) ? Gn() : Ie();
        }
        function zn() {
          _n(), I(e.eq), ei(), Ie();
        }
        function Ko() {
          return v(u._require) && i() === e.parenL;
        }
        function ei() {
          Ko() ? ti() : Zt();
        }
        function ti() {
          Y(u._require), I(e.parenL), o(e.string) || he(), Ht(), I(e.parenR);
        }
        function ni() {
          if (Le()) return !1;
          switch (r.type) {
            case e._function: {
              const t = Q(1);
              _();
              const n = r.start;
              return Mt(n, !0), ne(t), !0;
            }
            case e._class: {
              const t = Q(1);
              return Bt(!0, !1), ne(t), !0;
            }
            case e._const:
              if (o(e._const) && K(u._enum)) {
                const t = Q(1);
                return (
                  I(e._const),
                  Y(u._enum),
                  (r.tokens[r.tokens.length - 1].type = e._enum),
                  Yn(),
                  ne(t),
                  !0
                );
              }
            case e._var:
            case e._let: {
              const t = Q(1);
              return Rn(r.type !== e._var), ne(t), !0;
            }
            case e.name: {
              const t = Q(1),
                n = r.contextualKeyword;
              let s = !1;
              return (
                n === u._global ? (n1(), (s = !0)) : (s = bn(n, !0)), ne(t), s
              );
            }
            default:
              return !1;
          }
        }
        function r1() {
          return bn(r.contextualKeyword, !0);
        }
        function ri(t) {
          switch (t) {
            case u._declare: {
              const n = r.tokens.length - 1;
              if (ni()) return (r.tokens[n].type = e._declare), !0;
              break;
            }
            case u._global:
              if (o(e.braceL)) return Gn(), !0;
              break;
            default:
              return bn(t, !1);
          }
          return !1;
        }
        function bn(t, n) {
          switch (t) {
            case u._abstract:
              if ($t(n) && o(e._class))
                return (
                  (r.tokens[r.tokens.length - 1].type = e._abstract),
                  Bt(!0, !1),
                  !0
                );
              break;
            case u._enum:
              if ($t(n) && o(e.name))
                return (r.tokens[r.tokens.length - 1].type = e._enum), Yn(), !0;
              break;
            case u._interface:
              if ($t(n) && o(e.name)) {
                const s = Q(n ? 2 : 1);
                return Jo(), ne(s), !0;
              }
              break;
            case u._module:
              if ($t(n)) {
                if (o(e.string)) {
                  const s = Q(n ? 2 : 1);
                  return n1(), ne(s), !0;
                } else if (o(e.name)) {
                  const s = Q(n ? 2 : 1);
                  return Xn(), ne(s), !0;
                }
              }
              break;
            case u._namespace:
              if ($t(n) && o(e.name)) {
                const s = Q(n ? 2 : 1);
                return Xn(), ne(s), !0;
              }
              break;
            case u._type:
              if ($t(n) && o(e.name)) {
                const s = Q(n ? 2 : 1);
                return Qo(), ne(s), !0;
              }
              break;
            default:
              break;
          }
          return !1;
        }
        function $t(t) {
          return t ? (_(), !0) : !Le();
        }
        function si() {
          const t = r.snapshot();
          return (
            wn(),
            Yt(),
            Vo(),
            I(e.arrow),
            r.error ? (r.restoreFromSnapshot(t), !1) : (sn(!0), !0)
          );
        }
        function Jn() {
          r.type === e.bitShiftL && ((r.pos -= 1), H(e.lessThan)), Vt();
        }
        function Vt() {
          const t = Q(0);
          for (I(e.lessThan); !o(e.greaterThan) && !r.error; ) qe(), y(e.comma);
          t
            ? (I(e.greaterThan), ne(t))
            : (ne(t),
              qt(),
              I(e.greaterThan),
              (r.tokens[r.tokens.length - 1].isType = !0));
        }
        function s1() {
          if (o(e.name))
            switch (r.contextualKeyword) {
              case u._abstract:
              case u._declare:
              case u._enum:
              case u._interface:
              case u._module:
              case u._namespace:
              case u._type:
                return !0;
              default:
                break;
            }
          return !1;
        }
        function oi(t, n) {
          if ((o(e.colon) && Kt(e.colon), !o(e.braceL) && Le())) {
            let s = r.tokens.length - 1;
            for (
              ;
              s >= 0 &&
              (r.tokens[s].start >= t ||
                r.tokens[s].type === e._default ||
                r.tokens[s].type === e._export);

            )
              (r.tokens[s].isType = !0), s--;
            return;
          }
          sn(!1, n);
        }
        function ii(t, n, s) {
          if (!Ee() && y(e.bang)) {
            r.tokens[r.tokens.length - 1].type = e.nonNullAssertion;
            return;
          }
          if (o(e.lessThan) || o(e.bitShiftL)) {
            const c = r.snapshot();
            if (!n && h1() && si()) return;
            if (
              (Jn(),
              !n && y(e.parenL)
                ? ((r.tokens[r.tokens.length - 1].subscriptStartIndex = t),
                  At())
                : o(e.backQuote)
                ? rr()
                : (r.type === e.greaterThan ||
                    (r.type !== e.parenL &&
                      r.type & e.IS_EXPRESSION_START &&
                      !Ee())) &&
                  he(),
              r.error)
            )
              r.restoreFromSnapshot(c);
            else return;
          } else
            !n &&
              o(e.questionDot) &&
              i() === e.lessThan &&
              (_(),
              (r.tokens[t].isOptionalChainStart = !0),
              (r.tokens[r.tokens.length - 1].subscriptStartIndex = t),
              Vt(),
              I(e.parenL),
              At());
          Kn(t, n, s);
        }
        function ai() {
          if (y(e._import))
            return v(u._type) && i() !== e.eq && Y(u._type), zn(), !0;
          if (y(e.eq)) return Ye(), Ie(), !0;
          if (_e(u._as)) return Y(u._namespace), de(), Ie(), !0;
          if (v(u._type)) {
            const t = i();
            (t === e.braceL || t === e.star) && _();
          }
          return !1;
        }
        function ci() {
          if ((de(), o(e.comma) || o(e.braceR))) {
            r.tokens[r.tokens.length - 1].identifierRole = O.ImportDeclaration;
            return;
          }
          if ((de(), o(e.comma) || o(e.braceR))) {
            (r.tokens[r.tokens.length - 1].identifierRole =
              O.ImportDeclaration),
              (r.tokens[r.tokens.length - 2].isType = !0),
              (r.tokens[r.tokens.length - 1].isType = !0);
            return;
          }
          if ((de(), o(e.comma) || o(e.braceR))) {
            (r.tokens[r.tokens.length - 3].identifierRole = O.ImportAccess),
              (r.tokens[r.tokens.length - 1].identifierRole =
                O.ImportDeclaration);
            return;
          }
          de(),
            (r.tokens[r.tokens.length - 3].identifierRole = O.ImportAccess),
            (r.tokens[r.tokens.length - 1].identifierRole =
              O.ImportDeclaration),
            (r.tokens[r.tokens.length - 4].isType = !0),
            (r.tokens[r.tokens.length - 3].isType = !0),
            (r.tokens[r.tokens.length - 2].isType = !0),
            (r.tokens[r.tokens.length - 1].isType = !0);
        }
        function li() {
          if ((de(), o(e.comma) || o(e.braceR))) {
            r.tokens[r.tokens.length - 1].identifierRole = O.ExportAccess;
            return;
          }
          if ((de(), o(e.comma) || o(e.braceR))) {
            (r.tokens[r.tokens.length - 1].identifierRole = O.ExportAccess),
              (r.tokens[r.tokens.length - 2].isType = !0),
              (r.tokens[r.tokens.length - 1].isType = !0);
            return;
          }
          if ((de(), o(e.comma) || o(e.braceR))) {
            r.tokens[r.tokens.length - 3].identifierRole = O.ExportAccess;
            return;
          }
          de(),
            (r.tokens[r.tokens.length - 3].identifierRole = O.ExportAccess),
            (r.tokens[r.tokens.length - 4].isType = !0),
            (r.tokens[r.tokens.length - 3].isType = !0),
            (r.tokens[r.tokens.length - 2].isType = !0),
            (r.tokens[r.tokens.length - 1].isType = !0);
        }
        function ui() {
          if (v(u._abstract) && i() === e._class)
            return (r.type = e._abstract), _(), Bt(!0, !0), !0;
          if (v(u._interface)) {
            const t = Q(2);
            return bn(u._interface, !0), ne(t), !0;
          }
          return !1;
        }
        function fi() {
          if (r.type === e._const) {
            const t = l();
            if (t.type === e.name && t.contextualKeyword === u._enum)
              return (
                I(e._const),
                Y(u._enum),
                (r.tokens[r.tokens.length - 1].type = e._enum),
                Yn(),
                !0
              );
          }
          return !1;
        }
        function hi(t) {
          const n = r.tokens.length;
          $n([u._abstract, u._readonly, u._declare, u._static, u._override]);
          const s = r.tokens.length;
          if (Js()) {
            const f = t ? n - 1 : n;
            for (let d = f; d < s; d++) r.tokens[d].isType = !0;
            return !0;
          }
          return !1;
        }
        function pi(t) {
          ri(t) || Ie();
        }
        function mi() {
          const t = _e(u._declare);
          t && (r.tokens[r.tokens.length - 1].type = e._declare);
          let n = !1;
          if (o(e.name))
            if (t) {
              const s = Q(2);
              (n = r1()), ne(s);
            } else n = r1();
          if (!n)
            if (t) {
              const s = Q(2);
              it(!0), ne(s);
            } else it(!0);
        }
        function di(t) {
          if (
            (t && (o(e.lessThan) || o(e.bitShiftL)) && Jn(), _e(u._implements))
          ) {
            r.tokens[r.tokens.length - 1].type = e._implements;
            const n = Q(1);
            t1(), ne(n);
          }
        }
        function ki() {
          Dt();
        }
        function gi() {
          Dt();
        }
        function _i() {
          const t = Q(0);
          Ee() || y(e.bang), Ut(), ne(t);
        }
        function yi() {
          o(e.colon) && en();
        }
        function xi(t, n) {
          return N ? wi(t, n) : Ii(t, n);
        }
        function wi(t, n) {
          if (!o(e.lessThan)) return ht(t, n);
          const s = r.snapshot();
          let c = ht(t, n);
          if (r.error) r.restoreFromSnapshot(s);
          else return c;
          return (
            (r.type = e.typeParameterStart), wn(), (c = ht(t, n)), c || he(), c
          );
        }
        function Ii(t, n) {
          if (!o(e.lessThan)) return ht(t, n);
          const s = r.snapshot();
          wn();
          const c = ht(t, n);
          if ((c || he(), r.error)) r.restoreFromSnapshot(s);
          else return c;
          return ht(t, n);
        }
        function bi() {
          if (o(e.colon)) {
            const t = r.snapshot();
            Kt(e.colon),
              Ae() && he(),
              o(e.arrow) || he(),
              r.error && r.restoreFromSnapshot(t);
          }
          return y(e.arrow);
        }
        function Ti() {
          const t = Q(0);
          y(e.question), Ut(), ne(t);
        }
        function Ei() {
          (o(e.lessThan) || o(e.bitShiftL)) && Jn(), S1();
        }
        function Ai() {
          let t = !1,
            n = !1;
          for (;;) {
            if (r.pos >= x.length) {
              he('Unterminated JSX contents');
              return;
            }
            const s = x.charCodeAt(r.pos);
            if (s === h.lessThan || s === h.leftCurlyBrace) {
              if (r.pos === r.start) {
                if (s === h.lessThan) {
                  r.pos++, H(e.jsxTagStart);
                  return;
                }
                zt(s);
                return;
              }
              H(t && !n ? e.jsxEmptyText : e.jsxText);
              return;
            }
            s === h.lineFeed
              ? (t = !0)
              : s !== h.space &&
                s !== h.carriageReturn &&
                s !== h.tab &&
                (n = !0),
              r.pos++;
          }
        }
        function Si(t) {
          for (r.pos++; ; ) {
            if (r.pos >= x.length) {
              he('Unterminated string constant');
              return;
            }
            if (x.charCodeAt(r.pos) === t) {
              r.pos++;
              break;
            }
            r.pos++;
          }
          H(e.string);
        }
        function vi() {
          let t;
          do {
            if (r.pos > x.length) {
              he('Unexpectedly reached the end of input.');
              return;
            }
            t = x.charCodeAt(++r.pos);
          } while (z[t] || t === h.dash);
          H(e.jsxName);
        }
        function Qn() {
          ct();
        }
        function o1(t) {
          if ((Qn(), !y(e.colon))) {
            r.tokens[r.tokens.length - 1].identifierRole = t;
            return;
          }
          Qn();
        }
        function i1() {
          const t = r.tokens.length;
          o1(O.Access);
          let n = !1;
          for (; o(e.dot); ) (n = !0), ct(), Qn();
          if (!n) {
            const s = r.tokens[t],
              c = x.charCodeAt(s.start);
            c >= h.lowercaseA && c <= h.lowercaseZ && (s.identifierRole = null);
          }
        }
        function Ni() {
          switch (r.type) {
            case e.braceL:
              _(), Ye(), ct();
              return;
            case e.jsxTagStart:
              c1(), ct();
              return;
            case e.string:
              ct();
              return;
            default:
              he(
                'JSX value should be either an expression or a quoted JSX text',
              );
          }
        }
        function Ci() {
          I(e.ellipsis), Ye();
        }
        function Ri(t) {
          if (o(e.jsxTagEnd)) return !1;
          i1(), E && Xo();
          let n = !1;
          for (; !o(e.slash) && !o(e.jsxTagEnd) && !r.error; ) {
            if (y(e.braceL)) {
              (n = !0), I(e.ellipsis), Ge(), ct();
              continue;
            }
            n &&
              r.end - r.start === 3 &&
              x.charCodeAt(r.start) === h.lowercaseK &&
              x.charCodeAt(r.start + 1) === h.lowercaseE &&
              x.charCodeAt(r.start + 2) === h.lowercaseY &&
              (r.tokens[t].jsxRole = Se.KeyAfterPropSpread),
              o1(O.ObjectKey),
              o(e.eq) && (ct(), Ni());
          }
          const s = o(e.slash);
          return s && ct(), s;
        }
        function Pi() {
          o(e.jsxTagEnd) || i1();
        }
        function a1() {
          const t = r.tokens.length - 1;
          r.tokens[t].jsxRole = Se.NoChildren;
          let n = 0;
          if (!Ri(t))
            for (Wt(); ; )
              switch (r.type) {
                case e.jsxTagStart:
                  if ((ct(), o(e.slash))) {
                    ct(),
                      Pi(),
                      r.tokens[t].jsxRole !== Se.KeyAfterPropSpread &&
                        (n === 1
                          ? (r.tokens[t].jsxRole = Se.OneChild)
                          : n > 1 && (r.tokens[t].jsxRole = Se.StaticChildren));
                    return;
                  }
                  n++, a1(), Wt();
                  break;
                case e.jsxText:
                  n++, Wt();
                  break;
                case e.jsxEmptyText:
                  Wt();
                  break;
                case e.braceL:
                  _(),
                    o(e.ellipsis)
                      ? (Ci(), Wt(), (n += 2))
                      : (o(e.braceR) || (n++, Ye()), Wt());
                  break;
                default:
                  he();
                  return;
              }
        }
        function c1() {
          ct(), a1();
        }
        function ct() {
          r.tokens.push(new ae()), re(), (r.start = r.pos);
          const t = x.charCodeAt(r.pos);
          if (ve[t]) vi();
          else if (t === h.quotationMark || t === h.apostrophe) Si(t);
          else
            switch ((++r.pos, t)) {
              case h.greaterThan:
                H(e.jsxTagEnd);
                break;
              case h.lessThan:
                H(e.jsxTagStart);
                break;
              case h.slash:
                H(e.slash);
                break;
              case h.equalsTo:
                H(e.eq);
                break;
              case h.leftCurlyBrace:
                H(e.braceL);
                break;
              case h.dot:
                H(e.dot);
                break;
              case h.colon:
                H(e.colon);
                break;
              default:
                he();
            }
        }
        function Wt() {
          r.tokens.push(new ae()), (r.start = r.pos), Ai();
        }
        function Li(t) {
          if (o(e.question)) {
            const n = i();
            if (n === e.colon || n === e.comma || n === e.parenR) return;
          }
          l1(t);
        }
        function Di() {
          De(e.question), o(e.colon) && (E ? en() : D && Ot());
        }
        class Fi {
          constructor(n) {
            this.stop = n;
          }
        }
        function Ye(t = !1) {
          if ((Ge(t), o(e.comma))) for (; y(e.comma); ) Ge(t);
        }
        function Ge(t = !1, n = !1) {
          return E ? xi(t, n) : D ? qa(t, n) : ht(t, n);
        }
        function ht(t, n) {
          if (o(e._yield)) return Qi(), !1;
          (o(e.parenL) || o(e.name) || o(e._yield)) &&
            (r.potentialArrowAt = r.start);
          const s = Oi(t);
          return n && nr(), r.type & e.IS_ASSIGN ? (_(), Ge(t), !1) : s;
        }
        function Oi(t) {
          return Bi(t) ? !0 : (Mi(t), !1);
        }
        function Mi(t) {
          E || D ? Li(t) : l1(t);
        }
        function l1(t) {
          y(e.question) && (Ge(), I(e.colon), Ge(t));
        }
        function Bi(t) {
          const n = r.tokens.length;
          return tn() ? !0 : (Tn(n, -1, t), !1);
        }
        function Tn(t, n, s) {
          if (
            E &&
            (e._in & e.PRECEDENCE_MASK) > n &&
            !Ee() &&
            (_e(u._as) || _e(u._satisfies))
          ) {
            const f = Q(1);
            qe(), ne(f), qt(), Tn(t, n, s);
            return;
          }
          const c = r.type & e.PRECEDENCE_MASK;
          if (c > 0 && (!s || !o(e._in)) && c > n) {
            const f = r.type;
            _(),
              f === e.nullishCoalescing &&
                (r.tokens[r.tokens.length - 1].nullishStartIndex = t);
            const d = r.tokens.length;
            tn(),
              Tn(d, f & e.IS_RIGHT_ASSOCIATIVE ? c - 1 : c, s),
              f === e.nullishCoalescing &&
                (r.tokens[t].numNullishCoalesceStarts++,
                r.tokens[r.tokens.length - 1].numNullishCoalesceEnds++),
              Tn(t, n, s);
          }
        }
        function tn() {
          if (E && !N && y(e.lessThan)) return Go(), !1;
          if (v(u._module) && g() === h.leftCurlyBrace && !Ue())
            return Zi(), !1;
          if (r.type & e.IS_PREFIX) return _(), tn(), !1;
          if (u1()) return !0;
          for (; r.type & e.IS_POSTFIX && !Ae(); )
            r.type === e.preIncDec && (r.type = e.postIncDec), _();
          return !1;
        }
        function u1() {
          const t = r.tokens.length;
          return xt()
            ? !0
            : (Zn(t),
              r.tokens.length > t &&
                r.tokens[t].isOptionalChainStart &&
                (r.tokens[r.tokens.length - 1].isOptionalChainEnd = !0),
              !1);
        }
        function Zn(t, n = !1) {
          D ? $a(t, n) : f1(t, n);
        }
        function f1(t, n = !1) {
          const s = new Fi(!1);
          do ji(t, n, s);
          while (!s.stop && !r.error);
        }
        function ji(t, n, s) {
          E ? ii(t, n, s) : D ? Ia(t, n, s) : Kn(t, n, s);
        }
        function Kn(t, n, s) {
          if (!n && y(e.doubleColon)) er(), (s.stop = !0), Zn(t, n);
          else if (o(e.questionDot)) {
            if (
              ((r.tokens[t].isOptionalChainStart = !0), n && i() === e.parenL)
            ) {
              s.stop = !0;
              return;
            }
            _(),
              (r.tokens[r.tokens.length - 1].subscriptStartIndex = t),
              y(e.bracketL) ? (Ye(), I(e.bracketR)) : y(e.parenL) ? At() : En();
          } else if (y(e.dot))
            (r.tokens[r.tokens.length - 1].subscriptStartIndex = t), En();
          else if (y(e.bracketL))
            (r.tokens[r.tokens.length - 1].subscriptStartIndex = t),
              Ye(),
              I(e.bracketR);
          else if (!n && o(e.parenL))
            if (h1()) {
              const c = r.snapshot(),
                f = r.tokens.length;
              _(), (r.tokens[r.tokens.length - 1].subscriptStartIndex = t);
              const d = B();
              (r.tokens[r.tokens.length - 1].contextId = d),
                At(),
                (r.tokens[r.tokens.length - 1].contextId = d),
                qi() &&
                  (r.restoreFromSnapshot(c),
                  (s.stop = !0),
                  r.scopeDepth++,
                  Yt(),
                  Ui(f));
            } else {
              _(), (r.tokens[r.tokens.length - 1].subscriptStartIndex = t);
              const c = B();
              (r.tokens[r.tokens.length - 1].contextId = c),
                At(),
                (r.tokens[r.tokens.length - 1].contextId = c);
            }
          else o(e.backQuote) ? rr() : (s.stop = !0);
        }
        function h1() {
          return (
            r.tokens[r.tokens.length - 1].contextualKeyword === u._async &&
            !Ae()
          );
        }
        function At() {
          let t = !0;
          for (; !y(e.parenR) && !r.error; ) {
            if (t) t = !1;
            else if ((I(e.comma), y(e.parenR))) break;
            k1(!1);
          }
        }
        function qi() {
          return o(e.colon) || o(e.arrow);
        }
        function Ui(t) {
          E ? yi() : D && ja(), I(e.arrow), rn(t);
        }
        function er() {
          const t = r.tokens.length;
          xt(), Zn(t, !0);
        }
        function xt() {
          if (y(e.modulo)) return de(), !1;
          if (o(e.jsxText) || o(e.jsxEmptyText)) return Ht(), !1;
          if (o(e.lessThan) && N)
            return (r.type = e.jsxTagStart), c1(), _(), !1;
          const t = r.potentialArrowAt === r.start;
          switch (r.type) {
            case e.slash:
            case e.assign:
              Me();
            case e._super:
            case e._this:
            case e.regexp:
            case e.num:
            case e.bigint:
            case e.decimal:
            case e.string:
            case e._null:
            case e._true:
            case e._false:
              return _(), !1;
            case e._import:
              return (
                _(),
                o(e.dot) &&
                  ((r.tokens[r.tokens.length - 1].type = e.name), _(), de()),
                !1
              );
            case e.name: {
              const n = r.tokens.length,
                s = r.start,
                c = r.contextualKeyword;
              return (
                de(),
                c === u._await
                  ? (Ji(), !1)
                  : c === u._async && o(e._function) && !Ae()
                  ? (_(), Mt(s, !1), !1)
                  : t && c === u._async && !Ae() && o(e.name)
                  ? (r.scopeDepth++, Tt(!1), I(e.arrow), rn(n), !0)
                  : o(e._do) && !Ae()
                  ? (_(), St(), !1)
                  : t && !Ae() && o(e.arrow)
                  ? (r.scopeDepth++, jn(!1), I(e.arrow), rn(n), !0)
                  : ((r.tokens[r.tokens.length - 1].identifierRole = O.Access),
                    !1)
              );
            }
            case e._do:
              return _(), St(), !1;
            case e.parenL:
              return p1(t);
            case e.bracketL:
              return _(), d1(e.bracketR, !0), !1;
            case e.braceL:
              return sr(!1, !1), !1;
            case e._function:
              return $i(), !1;
            case e.at:
              kr();
            case e._class:
              return Bt(!1), !1;
            case e._new:
              return Wi(), !1;
            case e.backQuote:
              return rr(), !1;
            case e.doubleColon:
              return _(), er(), !1;
            case e.hash: {
              const n = g();
              return ve[n] || n === h.backslash ? En() : _(), !1;
            }
            default:
              return he(), !1;
          }
        }
        function En() {
          y(e.hash), de();
        }
        function $i() {
          const t = r.start;
          de(), y(e.dot) && de(), Mt(t, !1);
        }
        function Ht() {
          _();
        }
        function An() {
          I(e.parenL), Ye(), I(e.parenR);
        }
        function p1(t) {
          const n = r.snapshot(),
            s = r.tokens.length;
          I(e.parenL);
          let c = !0;
          for (; !o(e.parenR) && !r.error; ) {
            if (c) c = !1;
            else if ((I(e.comma), o(e.parenR))) break;
            if (o(e.ellipsis)) {
              Ws(!1), nr();
              break;
            } else Ge(!1, !0);
          }
          return (
            I(e.parenR),
            t && Vi() && tr()
              ? (r.restoreFromSnapshot(n),
                r.scopeDepth++,
                Yt(),
                tr(),
                rn(s),
                r.error ? (r.restoreFromSnapshot(n), p1(!1), !1) : !0)
              : !1
          );
        }
        function Vi() {
          return o(e.colon) || !Ae();
        }
        function tr() {
          return E ? bi() : D ? Ua() : y(e.arrow);
        }
        function nr() {
          (E || D) && Di();
        }
        function Wi() {
          if ((I(e._new), y(e.dot))) {
            de();
            return;
          }
          Hi(), D && ba(), y(e.parenL) && d1(e.parenR);
        }
        function Hi() {
          er(), y(e.questionDot);
        }
        function rr() {
          for (Te(), Te(); !o(e.backQuote) && !r.error; )
            I(e.dollarBraceL), Ye(), Te(), Te();
          _();
        }
        function sr(t, n) {
          const s = B();
          let c = !0;
          for (
            _(), r.tokens[r.tokens.length - 1].contextId = s;
            !y(e.braceR) && !r.error;

          ) {
            if (c) c = !1;
            else if ((I(e.comma), y(e.braceR))) break;
            let f = !1;
            if (o(e.ellipsis)) {
              const d = r.tokens.length;
              if (
                (Vs(), t && (r.tokens.length === d + 2 && jn(n), y(e.braceR)))
              )
                break;
              continue;
            }
            t || (f = y(e.star)),
              !t && v(u._async)
                ? (f && he(),
                  de(),
                  o(e.colon) ||
                    o(e.parenL) ||
                    o(e.braceR) ||
                    o(e.eq) ||
                    o(e.comma) ||
                    (o(e.star) && (_(), (f = !0)), nn(s)))
                : nn(s),
              zi(t, n, s);
          }
          r.tokens[r.tokens.length - 1].contextId = s;
        }
        function Yi(t) {
          return (
            !t &&
            (o(e.string) ||
              o(e.num) ||
              o(e.bracketL) ||
              o(e.name) ||
              !!(r.type & e.IS_KEYWORD))
          );
        }
        function Gi(t, n) {
          const s = r.start;
          return o(e.parenL)
            ? (t && he(), or(s, !1), !0)
            : Yi(t)
            ? (nn(n), or(s, !1), !0)
            : !1;
        }
        function Xi(t, n) {
          if (y(e.colon)) {
            t ? xn(n) : Ge(!1);
            return;
          }
          let s;
          t
            ? r.scopeDepth === 0
              ? (s = O.ObjectShorthandTopLevelDeclaration)
              : n
              ? (s = O.ObjectShorthandBlockScopedDeclaration)
              : (s = O.ObjectShorthandFunctionScopedDeclaration)
            : (s = O.ObjectShorthand),
            (r.tokens[r.tokens.length - 1].identifierRole = s),
            xn(n, !0);
        }
        function zi(t, n, s) {
          E ? ki() : D && La(), Gi(t, s) || Xi(t, n);
        }
        function nn(t) {
          D && dr(),
            y(e.bracketL)
              ? ((r.tokens[r.tokens.length - 1].contextId = t),
                Ge(),
                I(e.bracketR),
                (r.tokens[r.tokens.length - 1].contextId = t))
              : (o(e.num) || o(e.string) || o(e.bigint) || o(e.decimal)
                  ? xt()
                  : En(),
                (r.tokens[r.tokens.length - 1].identifierRole = O.ObjectKey),
                (r.tokens[r.tokens.length - 1].contextId = t));
        }
        function or(t, n) {
          const s = B();
          r.scopeDepth++;
          const c = r.tokens.length;
          Yt(n, s), m1(t, s);
          const d = r.tokens.length;
          r.scopes.push(new L(c, d, !0)), r.scopeDepth--;
        }
        function rn(t) {
          sn(!0);
          const n = r.tokens.length;
          r.scopes.push(new L(t, n, !0)), r.scopeDepth--;
        }
        function m1(t, n = 0) {
          E ? oi(t, n) : D ? wa(n) : sn(!1, n);
        }
        function sn(t, n = 0) {
          t && !o(e.braceL) ? Ge() : St(!0, n);
        }
        function d1(t, n = !1) {
          let s = !0;
          for (; !y(t) && !r.error; ) {
            if (s) s = !1;
            else if ((I(e.comma), y(t))) break;
            k1(n);
          }
        }
        function k1(t) {
          (t && o(e.comma)) ||
            (o(e.ellipsis) ? (Vs(), nr()) : o(e.question) ? _() : Ge(!1, !0));
        }
        function de() {
          _(), (r.tokens[r.tokens.length - 1].type = e.name);
        }
        function Ji() {
          tn();
        }
        function Qi() {
          _(), !o(e.semi) && !Ae() && (y(e.star), Ge());
        }
        function Zi() {
          Y(u._module), I(e.braceL), Pn(e.braceR);
        }
        function Ki(t) {
          return (
            (t.type === e.name || !!(t.type & e.IS_KEYWORD)) &&
            t.contextualKeyword !== u._from
          );
        }
        function pt(t) {
          const n = Q(0);
          I(t || e.colon), rt(), ne(n);
        }
        function g1() {
          I(e.modulo), Y(u._checks), y(e.parenL) && (Ye(), I(e.parenR));
        }
        function ir() {
          const t = Q(0);
          I(e.colon), o(e.modulo) ? g1() : (rt(), o(e.modulo) && g1()), ne(t);
        }
        function ea() {
          _(), cr(!0);
        }
        function ta() {
          _(),
            de(),
            o(e.lessThan) && ft(),
            I(e.parenL),
            mr(),
            I(e.parenR),
            ir(),
            Ie();
        }
        function ar() {
          o(e._class)
            ? ea()
            : o(e._function)
            ? ta()
            : o(e._var)
            ? na()
            : _e(u._module)
            ? y(e.dot)
              ? oa()
              : ra()
            : v(u._type)
            ? ia()
            : v(u._opaque)
            ? aa()
            : v(u._interface)
            ? ca()
            : o(e._export)
            ? sa()
            : he();
        }
        function na() {
          _(), b1(), Ie();
        }
        function ra() {
          for (
            o(e.string) ? xt() : de(), I(e.braceL);
            !o(e.braceR) && !r.error;

          )
            o(e._import) ? (_(), F1()) : he();
          I(e.braceR);
        }
        function sa() {
          I(e._export),
            y(e._default)
              ? o(e._function) || o(e._class)
                ? ar()
                : (rt(), Ie())
              : o(e._var) || o(e._function) || o(e._class) || v(u._opaque)
              ? ar()
              : o(e.star) ||
                o(e.braceL) ||
                v(u._interface) ||
                v(u._type) ||
                v(u._opaque)
              ? L1()
              : he();
        }
        function oa() {
          Y(u._exports), Ot(), Ie();
        }
        function ia() {
          _(), ur();
        }
        function aa() {
          _(), fr(!0);
        }
        function ca() {
          _(), cr();
        }
        function cr(t = !1) {
          if ((vn(), o(e.lessThan) && ft(), y(e._extends)))
            do Sn();
            while (!t && y(e.comma));
          if (v(u._mixins)) {
            _();
            do Sn();
            while (y(e.comma));
          }
          if (v(u._implements)) {
            _();
            do Sn();
            while (y(e.comma));
          }
          Nn(t, !1, t);
        }
        function Sn() {
          _1(!1), o(e.lessThan) && Ft();
        }
        function lr() {
          cr();
        }
        function vn() {
          de();
        }
        function ur() {
          vn(), o(e.lessThan) && ft(), pt(e.eq), Ie();
        }
        function fr(t) {
          Y(u._type),
            vn(),
            o(e.lessThan) && ft(),
            o(e.colon) && pt(e.colon),
            t || pt(e.eq),
            Ie();
        }
        function la() {
          dr(), b1(), y(e.eq) && rt();
        }
        function ft() {
          const t = Q(0);
          o(e.lessThan) || o(e.typeParameterStart) ? _() : he();
          do la(), o(e.greaterThan) || I(e.comma);
          while (!o(e.greaterThan) && !r.error);
          I(e.greaterThan), ne(t);
        }
        function Ft() {
          const t = Q(0);
          for (I(e.lessThan); !o(e.greaterThan) && !r.error; )
            rt(), o(e.greaterThan) || I(e.comma);
          I(e.greaterThan), ne(t);
        }
        function ua() {
          if ((Y(u._interface), y(e._extends)))
            do Sn();
            while (y(e.comma));
          Nn(!1, !1, !1);
        }
        function hr() {
          o(e.num) || o(e.string) ? xt() : de();
        }
        function fa() {
          i() === e.colon ? (hr(), pt()) : rt(), I(e.bracketR), pt();
        }
        function ha() {
          hr(),
            I(e.bracketR),
            I(e.bracketR),
            o(e.lessThan) || o(e.parenL) ? pr() : (y(e.question), pt());
        }
        function pr() {
          for (
            o(e.lessThan) && ft(), I(e.parenL);
            !o(e.parenR) && !o(e.ellipsis) && !r.error;

          )
            Cn(), o(e.parenR) || I(e.comma);
          y(e.ellipsis) && Cn(), I(e.parenR), pt();
        }
        function pa() {
          pr();
        }
        function Nn(t, n, s) {
          let c;
          for (
            n && o(e.braceBarL)
              ? (I(e.braceBarL), (c = e.braceBarR))
              : (I(e.braceL), (c = e.braceR));
            !o(c) && !r.error;

          ) {
            if (s && v(u._proto)) {
              const f = i();
              f !== e.colon && f !== e.question && (_(), (t = !1));
            }
            if (t && v(u._static)) {
              const f = i();
              f !== e.colon && f !== e.question && _();
            }
            if ((dr(), y(e.bracketL))) y(e.bracketL) ? ha() : fa();
            else if (o(e.parenL) || o(e.lessThan)) pa();
            else {
              if (v(u._get) || v(u._set)) {
                const f = i();
                (f === e.name || f === e.string || f === e.num) && _();
              }
              ma();
            }
            da();
          }
          I(c);
        }
        function ma() {
          if (o(e.ellipsis)) {
            if ((I(e.ellipsis), y(e.comma) || y(e.semi), o(e.braceR))) return;
            rt();
          } else
            hr(), o(e.lessThan) || o(e.parenL) ? pr() : (y(e.question), pt());
        }
        function da() {
          !y(e.semi) && !y(e.comma) && !o(e.braceR) && !o(e.braceBarR) && he();
        }
        function _1(t) {
          for (t || de(); y(e.dot); ) de();
        }
        function ka() {
          _1(!0), o(e.lessThan) && Ft();
        }
        function ga() {
          I(e._typeof), y1();
        }
        function _a() {
          for (
            I(e.bracketL);
            r.pos < x.length && !o(e.bracketR) && (rt(), !o(e.bracketR));

          )
            I(e.comma);
          I(e.bracketR);
        }
        function Cn() {
          const t = i();
          t === e.colon || t === e.question
            ? (de(), y(e.question), pt())
            : rt();
        }
        function mr() {
          for (; !o(e.parenR) && !o(e.ellipsis) && !r.error; )
            Cn(), o(e.parenR) || I(e.comma);
          y(e.ellipsis) && Cn();
        }
        function y1() {
          let t = !1;
          const n = r.noAnonFunctionType;
          switch (r.type) {
            case e.name: {
              if (v(u._interface)) {
                ua();
                return;
              }
              de(), ka();
              return;
            }
            case e.braceL:
              Nn(!1, !1, !1);
              return;
            case e.braceBarL:
              Nn(!1, !0, !1);
              return;
            case e.bracketL:
              _a();
              return;
            case e.lessThan:
              ft(), I(e.parenL), mr(), I(e.parenR), I(e.arrow), rt();
              return;
            case e.parenL:
              if ((_(), !o(e.parenR) && !o(e.ellipsis)))
                if (o(e.name)) {
                  const s = i();
                  t = s !== e.question && s !== e.colon;
                } else t = !0;
              if (t)
                if (
                  ((r.noAnonFunctionType = !1),
                  rt(),
                  (r.noAnonFunctionType = n),
                  r.noAnonFunctionType ||
                    !(o(e.comma) || (o(e.parenR) && i() === e.arrow)))
                ) {
                  I(e.parenR);
                  return;
                } else y(e.comma);
              mr(), I(e.parenR), I(e.arrow), rt();
              return;
            case e.minus:
              _(), Ht();
              return;
            case e.string:
            case e.num:
            case e._true:
            case e._false:
            case e._null:
            case e._this:
            case e._void:
            case e.star:
              _();
              return;
            default:
              if (r.type === e._typeof) {
                ga();
                return;
              } else if (r.type & e.IS_KEYWORD) {
                _(), (r.tokens[r.tokens.length - 1].type = e.name);
                return;
              }
          }
          he();
        }
        function ya() {
          for (y1(); !Ae() && (o(e.bracketL) || o(e.questionDot)); )
            y(e.questionDot),
              I(e.bracketL),
              y(e.bracketR) || (rt(), I(e.bracketR));
        }
        function x1() {
          y(e.question) ? x1() : ya();
        }
        function w1() {
          x1(), !r.noAnonFunctionType && y(e.arrow) && rt();
        }
        function I1() {
          for (y(e.bitwiseAND), w1(); y(e.bitwiseAND); ) w1();
        }
        function xa() {
          for (y(e.bitwiseOR), I1(); y(e.bitwiseOR); ) I1();
        }
        function rt() {
          xa();
        }
        function Ot() {
          pt();
        }
        function b1() {
          de(), o(e.colon) && Ot();
        }
        function dr() {
          (o(e.plus) || o(e.minus)) &&
            (_(), (r.tokens[r.tokens.length - 1].isType = !0));
        }
        function wa(t) {
          o(e.colon) && ir(), sn(!1, t);
        }
        function Ia(t, n, s) {
          if (o(e.questionDot) && i() === e.lessThan) {
            if (n) {
              s.stop = !0;
              return;
            }
            _(), Ft(), I(e.parenL), At();
            return;
          } else if (!n && o(e.lessThan)) {
            const c = r.snapshot();
            if ((Ft(), I(e.parenL), At(), r.error)) r.restoreFromSnapshot(c);
            else return;
          }
          Kn(t, n, s);
        }
        function ba() {
          if (o(e.lessThan)) {
            const t = r.snapshot();
            Ft(), r.error && r.restoreFromSnapshot(t);
          }
        }
        function Ta() {
          if (o(e.name) && r.contextualKeyword === u._interface) {
            const t = Q(0);
            return _(), lr(), ne(t), !0;
          } else if (v(u._enum)) return T1(), !0;
          return !1;
        }
        function Ea() {
          return v(u._enum) ? (T1(), !0) : !1;
        }
        function Aa(t) {
          if (t === u._declare) {
            if (
              o(e._class) ||
              o(e.name) ||
              o(e._function) ||
              o(e._var) ||
              o(e._export)
            ) {
              const n = Q(1);
              ar(), ne(n);
            }
          } else if (o(e.name)) {
            if (t === u._interface) {
              const n = Q(1);
              lr(), ne(n);
            } else if (t === u._type) {
              const n = Q(1);
              ur(), ne(n);
            } else if (t === u._opaque) {
              const n = Q(1);
              fr(!1), ne(n);
            }
          }
          Ie();
        }
        function Sa() {
          return v(u._type) || v(u._interface) || v(u._opaque) || v(u._enum);
        }
        function va() {
          return (
            o(e.name) &&
            (r.contextualKeyword === u._type ||
              r.contextualKeyword === u._interface ||
              r.contextualKeyword === u._opaque ||
              r.contextualKeyword === u._enum)
          );
        }
        function Na() {
          if (v(u._type)) {
            const t = Q(1);
            _(), o(e.braceL) ? (yr(), cn()) : ur(), ne(t);
          } else if (v(u._opaque)) {
            const t = Q(1);
            _(), fr(!1), ne(t);
          } else if (v(u._interface)) {
            const t = Q(1);
            _(), lr(), ne(t);
          } else it(!0);
        }
        function Ca() {
          return o(e.star) || (v(u._type) && i() === e.star);
        }
        function Ra() {
          if (_e(u._type)) {
            const t = Q(2);
            _r(), ne(t);
          } else _r();
        }
        function Pa(t) {
          if ((t && o(e.lessThan) && Ft(), v(u._implements))) {
            const n = Q(0);
            _(), (r.tokens[r.tokens.length - 1].type = e._implements);
            do vn(), o(e.lessThan) && Ft();
            while (y(e.comma));
            ne(n);
          }
        }
        function La() {
          o(e.lessThan) && (ft(), o(e.parenL) || he());
        }
        function Da() {
          const t = Q(0);
          y(e.question), o(e.colon) && Ot(), ne(t);
        }
        function Fa() {
          if (o(e._typeof) || v(u._type)) {
            const t = l();
            (Ki(t) || t.type === e.braceL || t.type === e.star) && _();
          }
        }
        function Oa() {
          const t = r.contextualKeyword === u._type || r.type === e._typeof;
          t ? _() : de(),
            v(u._as) && !K(u._as)
              ? (de(), (t && !o(e.name) && !(r.type & e.IS_KEYWORD)) || de())
              : (t && (o(e.name) || r.type & e.IS_KEYWORD) && de(),
                _e(u._as) && de());
        }
        function Ma() {
          if (o(e.lessThan)) {
            const t = Q(0);
            ft(), ne(t);
          }
        }
        function Ba() {
          o(e.colon) && Ot();
        }
        function ja() {
          if (o(e.colon)) {
            const t = r.noAnonFunctionType;
            (r.noAnonFunctionType = !0), Ot(), (r.noAnonFunctionType = t);
          }
        }
        function qa(t, n) {
          if (o(e.lessThan)) {
            const s = r.snapshot();
            let c = ht(t, n);
            if (r.error)
              r.restoreFromSnapshot(s), (r.type = e.typeParameterStart);
            else return c;
            const f = Q(0);
            if ((ft(), ne(f), (c = ht(t, n)), c)) return !0;
            he();
          }
          return ht(t, n);
        }
        function Ua() {
          if (o(e.colon)) {
            const t = Q(0),
              n = r.snapshot(),
              s = r.noAnonFunctionType;
            (r.noAnonFunctionType = !0),
              ir(),
              (r.noAnonFunctionType = s),
              Ae() && he(),
              o(e.arrow) || he(),
              r.error && r.restoreFromSnapshot(n),
              ne(t);
          }
          return y(e.arrow);
        }
        function $a(t, n = !1) {
          if (
            r.tokens[r.tokens.length - 1].contextualKeyword === u._async &&
            o(e.lessThan)
          ) {
            const s = r.snapshot();
            if (Va() && !r.error) return;
            r.restoreFromSnapshot(s);
          }
          f1(t, n);
        }
        function Va() {
          r.scopeDepth++;
          const t = r.tokens.length;
          return Yt(), tr() ? (rn(t), !0) : !1;
        }
        function T1() {
          Y(u._enum),
            (r.tokens[r.tokens.length - 1].type = e._enum),
            de(),
            Wa();
        }
        function Wa() {
          _e(u._of) && _(), I(e.braceL), Ha(), I(e.braceR);
        }
        function Ha() {
          for (; !o(e.braceR) && !r.error && !y(e.ellipsis); )
            Ya(), o(e.braceR) || I(e.comma);
        }
        function Ya() {
          de(), y(e.eq) && _();
        }
        function Ga() {
          if (
            (Pn(e.eof),
            r.scopes.push(new L(0, r.tokens.length, !0)),
            r.scopeDepth !== 0)
          )
            throw new Error(
              `Invalid scope depth at end of file: ${r.scopeDepth}`,
            );
          return new Lc(r.tokens, r.scopes);
        }
        function it(t) {
          (D && Ta()) || (o(e.at) && kr(), Xa(t));
        }
        function Xa(t) {
          if (E && fi()) return;
          const n = r.type;
          switch (n) {
            case e._break:
            case e._continue:
              Ja();
              return;
            case e._debugger:
              Qa();
              return;
            case e._do:
              Za();
              return;
            case e._for:
              Ka();
              return;
            case e._function:
              if (i() === e.dot) break;
              t || he(), nc();
              return;
            case e._class:
              t || he(), Bt(!0);
              return;
            case e._if:
              rc();
              return;
            case e._return:
              sc();
              return;
            case e._switch:
              oc();
              return;
            case e._throw:
              ic();
              return;
            case e._try:
              cc();
              return;
            case e._let:
            case e._const:
              t || he();
            case e._var:
              Rn(n !== e._var);
              return;
            case e._while:
              lc();
              return;
            case e.braceL:
              St();
              return;
            case e.semi:
              uc();
              return;
            case e._export:
            case e._import: {
              const f = i();
              if (f === e.parenL || f === e.dot) break;
              _(), n === e._import ? F1() : L1();
              return;
            }
            case e.name:
              if (r.contextualKeyword === u._async) {
                const f = r.start,
                  d = r.snapshot();
                if ((_(), o(e._function) && !Ae())) {
                  I(e._function), Mt(f, !0);
                  return;
                } else r.restoreFromSnapshot(d);
              } else if (
                r.contextualKeyword === u._using &&
                !Ue() &&
                i() === e.name
              ) {
                Rn(!0);
                return;
              } else if (E1()) {
                Y(u._await), Rn(!0);
                return;
              }
            default:
              break;
          }
          const s = r.tokens.length;
          Ye();
          let c = null;
          if (r.tokens.length === s + 1) {
            const f = r.tokens[r.tokens.length - 1];
            f.type === e.name && (c = f.contextualKeyword);
          }
          if (c == null) {
            Ie();
            return;
          }
          y(e.colon) ? fc() : hc(c);
        }
        function E1() {
          if (!v(u._await)) return !1;
          const t = r.snapshot();
          return (
            _(),
            !v(u._using) || Ee() || (_(), !o(e.name) || Ee())
              ? (r.restoreFromSnapshot(t), !1)
              : (r.restoreFromSnapshot(t), !0)
          );
        }
        function kr() {
          for (; o(e.at); ) A1();
        }
        function A1() {
          if ((_(), y(e.parenL))) Ye(), I(e.parenR);
          else {
            for (de(); y(e.dot); ) de();
            za();
          }
        }
        function za() {
          E ? Ei() : S1();
        }
        function S1() {
          y(e.parenL) && At();
        }
        function Ja() {
          _(), Le() || (de(), Ie());
        }
        function Qa() {
          _(), Ie();
        }
        function Za() {
          _(), it(!1), I(e._while), An(), y(e.semi);
        }
        function Ka() {
          r.scopeDepth++;
          const t = r.tokens.length;
          tc();
          const n = r.tokens.length;
          r.scopes.push(new L(t, n, !1)), r.scopeDepth--;
        }
        function ec() {
          return !(!v(u._using) || K(u._of));
        }
        function tc() {
          _();
          let t = !1;
          if ((v(u._await) && ((t = !0), _()), I(e.parenL), o(e.semi))) {
            t && he(), gr();
            return;
          }
          const n = E1();
          if (n || o(e._var) || o(e._let) || o(e._const) || ec()) {
            if (
              (n && Y(u._await),
              _(),
              N1(!0, r.type !== e._var),
              o(e._in) || v(u._of))
            ) {
              v1(t);
              return;
            }
            gr();
            return;
          }
          if ((Ye(!0), o(e._in) || v(u._of))) {
            v1(t);
            return;
          }
          t && he(), gr();
        }
        function nc() {
          const t = r.start;
          _(), Mt(t, !0);
        }
        function rc() {
          _(), An(), it(!1), y(e._else) && it(!1);
        }
        function sc() {
          _(), Le() || (Ye(), Ie());
        }
        function oc() {
          _(), An(), r.scopeDepth++;
          const t = r.tokens.length;
          for (I(e.braceL); !o(e.braceR) && !r.error; )
            if (o(e._case) || o(e._default)) {
              const s = o(e._case);
              _(), s && Ye(), I(e.colon);
            } else it(!0);
          _();
          const n = r.tokens.length;
          r.scopes.push(new L(t, n, !1)), r.scopeDepth--;
        }
        function ic() {
          _(), Ye(), Ie();
        }
        function ac() {
          yn(!0), E && Ut();
        }
        function cc() {
          if ((_(), St(), o(e._catch))) {
            _();
            let t = null;
            if (
              (o(e.parenL) &&
                (r.scopeDepth++,
                (t = r.tokens.length),
                I(e.parenL),
                ac(),
                I(e.parenR)),
              St(),
              t != null)
            ) {
              const n = r.tokens.length;
              r.scopes.push(new L(t, n, !1)), r.scopeDepth--;
            }
          }
          y(e._finally) && St();
        }
        function Rn(t) {
          _(), N1(!1, t), Ie();
        }
        function lc() {
          _(), An(), it(!1);
        }
        function uc() {
          _();
        }
        function fc() {
          it(!0);
        }
        function hc(t) {
          E ? pi(t) : D ? Aa(t) : Ie();
        }
        function St(t = !1, n = 0) {
          const s = r.tokens.length;
          r.scopeDepth++,
            I(e.braceL),
            n && (r.tokens[r.tokens.length - 1].contextId = n),
            Pn(e.braceR),
            n && (r.tokens[r.tokens.length - 1].contextId = n);
          const c = r.tokens.length;
          r.scopes.push(new L(s, c, t)), r.scopeDepth--;
        }
        function Pn(t) {
          for (; !y(t) && !r.error; ) it(!0);
        }
        function gr() {
          I(e.semi),
            o(e.semi) || Ye(),
            I(e.semi),
            o(e.parenR) || Ye(),
            I(e.parenR),
            it(!1);
        }
        function v1(t) {
          t ? _e(u._of) : _(), Ye(), I(e.parenR), it(!1);
        }
        function N1(t, n) {
          for (;;) {
            if ((pc(n), y(e.eq))) {
              const s = r.tokens.length - 1;
              Ge(t), (r.tokens[s].rhsEndIndex = r.tokens.length);
            }
            if (!y(e.comma)) break;
          }
        }
        function pc(t) {
          yn(t), E ? _i() : D && Ba();
        }
        function Mt(t, n, s = !1) {
          o(e.star) && _(), n && !s && !o(e.name) && !o(e._yield) && he();
          let c = null;
          o(e.name) && (n || ((c = r.tokens.length), r.scopeDepth++), Tt(!1));
          const f = r.tokens.length;
          r.scopeDepth++, Yt(), m1(t);
          const d = r.tokens.length;
          r.scopes.push(new L(f, d, !0)),
            r.scopeDepth--,
            c !== null && (r.scopes.push(new L(c, d, !0)), r.scopeDepth--);
        }
        function Yt(t = !1, n = 0) {
          E ? gi() : D && Ma(),
            I(e.parenL),
            n && (r.tokens[r.tokens.length - 1].contextId = n),
            qn(e.parenR, !1, !1, t, n),
            n && (r.tokens[r.tokens.length - 1].contextId = n);
        }
        function Bt(t, n = !1) {
          const s = B();
          _(),
            (r.tokens[r.tokens.length - 1].contextId = s),
            (r.tokens[r.tokens.length - 1].isExpression = !t);
          let c = null;
          t || ((c = r.tokens.length), r.scopeDepth++), gc(t, n), _c();
          const f = r.tokens.length;
          if (
            (mc(s),
            !r.error &&
              ((r.tokens[f].contextId = s),
              (r.tokens[r.tokens.length - 1].contextId = s),
              c !== null))
          ) {
            const d = r.tokens.length;
            r.scopes.push(new L(c, d, !1)), r.scopeDepth--;
          }
        }
        function C1() {
          return o(e.eq) || o(e.semi) || o(e.braceR) || o(e.bang) || o(e.colon);
        }
        function R1() {
          return o(e.parenL) || o(e.lessThan);
        }
        function mc(t) {
          for (I(e.braceL); !y(e.braceR) && !r.error; ) {
            if (y(e.semi)) continue;
            if (o(e.at)) {
              A1();
              continue;
            }
            const n = r.start;
            dc(n, t);
          }
        }
        function dc(t, n) {
          E &&
            $n([u._declare, u._public, u._protected, u._private, u._override]);
          let s = !1;
          if (o(e.name) && r.contextualKeyword === u._static) {
            if ((de(), R1())) {
              on(t, !1);
              return;
            } else if (C1()) {
              Ln();
              return;
            }
            if (
              ((r.tokens[r.tokens.length - 1].type = e._static),
              (s = !0),
              o(e.braceL))
            ) {
              (r.tokens[r.tokens.length - 1].contextId = n), St();
              return;
            }
          }
          kc(t, s, n);
        }
        function kc(t, n, s) {
          if (E && hi(n)) return;
          if (y(e.star)) {
            an(s), on(t, !1);
            return;
          }
          an(s);
          let c = !1;
          const f = r.tokens[r.tokens.length - 1];
          f.contextualKeyword === u._constructor && (c = !0),
            P1(),
            R1()
              ? on(t, c)
              : C1()
              ? Ln()
              : f.contextualKeyword === u._async && !Le()
              ? ((r.tokens[r.tokens.length - 1].type = e._async),
                o(e.star) && _(),
                an(s),
                P1(),
                on(t, !1))
              : (f.contextualKeyword === u._get ||
                  f.contextualKeyword === u._set) &&
                !(Le() && o(e.star))
              ? (f.contextualKeyword === u._get
                  ? (r.tokens[r.tokens.length - 1].type = e._get)
                  : (r.tokens[r.tokens.length - 1].type = e._set),
                an(s),
                on(t, !1))
              : f.contextualKeyword === u._accessor && !Le()
              ? (an(s), Ln())
              : Le()
              ? Ln()
              : he();
        }
        function on(t, n) {
          E ? Dt() : D && o(e.lessThan) && ft(), or(t, n);
        }
        function an(t) {
          nn(t);
        }
        function P1() {
          if (E) {
            const t = Q(0);
            y(e.question), ne(t);
          }
        }
        function Ln() {
          if ((E ? (De(e.bang), Ut()) : D && o(e.colon) && Ot(), o(e.eq))) {
            const t = r.tokens.length;
            _(), Ge(), (r.tokens[t].rhsEndIndex = r.tokens.length);
          }
          Ie();
        }
        function gc(t, n = !1) {
          (E && (!t || n) && v(u._implements)) ||
            (o(e.name) && Tt(!0), E ? Dt() : D && o(e.lessThan) && ft());
        }
        function _c() {
          let t = !1;
          y(e._extends) ? (u1(), (t = !0)) : (t = !1), E ? di(t) : D && Pa(t);
        }
        function L1() {
          const t = r.tokens.length - 1;
          (E && ai()) ||
            (Ic()
              ? bc()
              : wc()
              ? (de(),
                o(e.comma) && i() === e.star
                  ? (I(e.comma), I(e.star), Y(u._as), de())
                  : D1(),
                cn())
              : y(e._default)
              ? yc()
              : Ec()
              ? xc()
              : (yr(), cn()),
            (r.tokens[t].rhsEndIndex = r.tokens.length));
        }
        function yc() {
          if ((E && ui()) || (D && Ea())) return;
          const t = r.start;
          y(e._function)
            ? Mt(t, !0, !0)
            : v(u._async) && i() === e._function
            ? (_e(u._async), y(e._function), Mt(t, !0, !0))
            : o(e._class)
            ? Bt(!0, !0)
            : o(e.at)
            ? (kr(), Bt(!0, !0))
            : (Ge(), Ie());
        }
        function xc() {
          E ? mi() : D ? Na() : it(!0);
        }
        function wc() {
          if (E && s1()) return !1;
          if (D && va()) return !1;
          if (o(e.name)) return r.contextualKeyword !== u._async;
          if (!o(e._default)) return !1;
          const t = p(),
            n = l(),
            s = n.type === e.name && n.contextualKeyword === u._from;
          if (n.type === e.comma) return !0;
          if (s) {
            const c = x.charCodeAt(k(t + 4));
            return c === h.quotationMark || c === h.apostrophe;
          }
          return !1;
        }
        function D1() {
          y(e.comma) && yr();
        }
        function cn() {
          _e(u._from) && (xt(), M1()), Ie();
        }
        function Ic() {
          return D ? Ca() : o(e.star);
        }
        function bc() {
          D ? Ra() : _r();
        }
        function _r() {
          I(e.star), v(u._as) ? Tc() : cn();
        }
        function Tc() {
          _(), (r.tokens[r.tokens.length - 1].type = e._as), de(), D1(), cn();
        }
        function Ec() {
          return (
            (E && s1()) ||
            (D && Sa()) ||
            r.type === e._var ||
            r.type === e._const ||
            r.type === e._let ||
            r.type === e._function ||
            r.type === e._class ||
            v(u._async) ||
            o(e.at)
          );
        }
        function yr() {
          let t = !0;
          for (I(e.braceL); !y(e.braceR) && !r.error; ) {
            if (t) t = !1;
            else if ((I(e.comma), y(e.braceR))) break;
            Ac();
          }
        }
        function Ac() {
          if (E) {
            li();
            return;
          }
          de(),
            (r.tokens[r.tokens.length - 1].identifierRole = O.ExportAccess),
            _e(u._as) && de();
        }
        function Sc() {
          const t = r.snapshot();
          return (
            Y(u._module),
            _e(u._from)
              ? v(u._from)
                ? (r.restoreFromSnapshot(t), !0)
                : (r.restoreFromSnapshot(t), !1)
              : o(e.comma)
              ? (r.restoreFromSnapshot(t), !1)
              : (r.restoreFromSnapshot(t), !0)
          );
        }
        function vc() {
          v(u._module) && Sc() && _();
        }
        function F1() {
          if (E && o(e.name) && i() === e.eq) {
            zn();
            return;
          }
          if (E && v(u._type)) {
            const t = l();
            if (t.type === e.name && t.contextualKeyword !== u._from) {
              if ((Y(u._type), i() === e.eq)) {
                zn();
                return;
              }
            } else (t.type === e.star || t.type === e.braceL) && Y(u._type);
          }
          o(e.string) || (vc(), Cc(), Y(u._from)), xt(), M1(), Ie();
        }
        function Nc() {
          return o(e.name);
        }
        function O1() {
          _n();
        }
        function Cc() {
          D && Fa();
          let t = !0;
          if (!(Nc() && (O1(), !y(e.comma)))) {
            if (o(e.star)) {
              _(), Y(u._as), O1();
              return;
            }
            for (I(e.braceL); !y(e.braceR) && !r.error; ) {
              if (t) t = !1;
              else if (
                (y(e.colon) &&
                  he(
                    'ES2015 named imports do not destructure. Use another statement for destructuring after the import.',
                  ),
                I(e.comma),
                y(e.braceR))
              )
                break;
              Rc();
            }
          }
        }
        function Rc() {
          if (E) {
            ci();
            return;
          }
          if (D) {
            Oa();
            return;
          }
          _n(),
            v(u._as) &&
              ((r.tokens[r.tokens.length - 1].identifierRole = O.ImportAccess),
              _(),
              _n());
        }
        function M1() {
          (o(e._with) || (v(u._assert) && !Ee())) && (_(), sr(!1, !1));
        }
        function Pc() {
          return (
            r.pos === 0 &&
              x.charCodeAt(0) === h.numberSign &&
              x.charCodeAt(1) === h.exclamationMark &&
              be(2),
            V(),
            Ga()
          );
        }
        class Lc {
          constructor(n, s) {
            (this.tokens = n), (this.scopes = s);
          }
        }
        function Dc(t, n, s, c) {
          if (c && s)
            throw new Error('Cannot combine flow and typescript plugins.');
          le(t, n, s, c);
          const f = Pc();
          if (r.error) throw Z(r.error);
          return f;
        }
        function Fc(t) {
          let n = t.currentIndex(),
            s = 0;
          const c = t.currentToken();
          do {
            const f = t.tokens[n];
            if (
              (f.isOptionalChainStart && s++,
              f.isOptionalChainEnd && s--,
              (s += f.numNullishCoalesceStarts),
              (s -= f.numNullishCoalesceEnds),
              f.contextualKeyword === u._await &&
                f.identifierRole == null &&
                f.scopeDepth === c.scopeDepth)
            )
              return !0;
            n += 1;
          } while (s > 0 && n < t.tokens.length);
          return !1;
        }
        class ln {
          __init() {
            this.resultCode = '';
          }
          __init2() {
            this.resultMappings = new Array(this.tokens.length);
          }
          __init3() {
            this.tokenIndex = 0;
          }
          constructor(n, s, c, f, d) {
            (this.code = n),
              (this.tokens = s),
              (this.isFlowEnabled = c),
              (this.disableESTransforms = f),
              (this.helperManager = d),
              ln.prototype.__init.call(this),
              ln.prototype.__init2.call(this),
              ln.prototype.__init3.call(this);
          }
          snapshot() {
            return { resultCode: this.resultCode, tokenIndex: this.tokenIndex };
          }
          restoreToSnapshot(n) {
            (this.resultCode = n.resultCode), (this.tokenIndex = n.tokenIndex);
          }
          dangerouslyGetAndRemoveCodeSinceSnapshot(n) {
            const s = this.resultCode.slice(n.resultCode.length);
            return (this.resultCode = n.resultCode), s;
          }
          reset() {
            (this.resultCode = ''),
              (this.resultMappings = new Array(this.tokens.length)),
              (this.tokenIndex = 0);
          }
          matchesContextualAtIndex(n, s) {
            return (
              this.matches1AtIndex(n, e.name) &&
              this.tokens[n].contextualKeyword === s
            );
          }
          identifierNameAtIndex(n) {
            return this.identifierNameForToken(this.tokens[n]);
          }
          identifierNameAtRelativeIndex(n) {
            return this.identifierNameForToken(this.tokenAtRelativeIndex(n));
          }
          identifierName() {
            return this.identifierNameForToken(this.currentToken());
          }
          identifierNameForToken(n) {
            return this.code.slice(n.start, n.end);
          }
          rawCodeForToken(n) {
            return this.code.slice(n.start, n.end);
          }
          stringValueAtIndex(n) {
            return this.stringValueForToken(this.tokens[n]);
          }
          stringValue() {
            return this.stringValueForToken(this.currentToken());
          }
          stringValueForToken(n) {
            return this.code.slice(n.start + 1, n.end - 1);
          }
          matches1AtIndex(n, s) {
            return this.tokens[n].type === s;
          }
          matches2AtIndex(n, s, c) {
            return this.tokens[n].type === s && this.tokens[n + 1].type === c;
          }
          matches3AtIndex(n, s, c, f) {
            return (
              this.tokens[n].type === s &&
              this.tokens[n + 1].type === c &&
              this.tokens[n + 2].type === f
            );
          }
          matches1(n) {
            return this.tokens[this.tokenIndex].type === n;
          }
          matches2(n, s) {
            return (
              this.tokens[this.tokenIndex].type === n &&
              this.tokens[this.tokenIndex + 1].type === s
            );
          }
          matches3(n, s, c) {
            return (
              this.tokens[this.tokenIndex].type === n &&
              this.tokens[this.tokenIndex + 1].type === s &&
              this.tokens[this.tokenIndex + 2].type === c
            );
          }
          matches4(n, s, c, f) {
            return (
              this.tokens[this.tokenIndex].type === n &&
              this.tokens[this.tokenIndex + 1].type === s &&
              this.tokens[this.tokenIndex + 2].type === c &&
              this.tokens[this.tokenIndex + 3].type === f
            );
          }
          matches5(n, s, c, f, d) {
            return (
              this.tokens[this.tokenIndex].type === n &&
              this.tokens[this.tokenIndex + 1].type === s &&
              this.tokens[this.tokenIndex + 2].type === c &&
              this.tokens[this.tokenIndex + 3].type === f &&
              this.tokens[this.tokenIndex + 4].type === d
            );
          }
          matchesContextual(n) {
            return this.matchesContextualAtIndex(this.tokenIndex, n);
          }
          matchesContextIdAndLabel(n, s) {
            return this.matches1(n) && this.currentToken().contextId === s;
          }
          previousWhitespaceAndComments() {
            let n = this.code.slice(
              this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0,
              this.tokenIndex < this.tokens.length
                ? this.tokens[this.tokenIndex].start
                : this.code.length,
            );
            return this.isFlowEnabled && (n = n.replace(/@flow/g, '')), n;
          }
          replaceToken(n) {
            (this.resultCode += this.previousWhitespaceAndComments()),
              this.appendTokenPrefix(),
              (this.resultMappings[this.tokenIndex] = this.resultCode.length),
              (this.resultCode += n),
              this.appendTokenSuffix(),
              this.tokenIndex++;
          }
          replaceTokenTrimmingLeftWhitespace(n) {
            (this.resultCode += this.previousWhitespaceAndComments().replace(
              /[^\r\n]/g,
              '',
            )),
              this.appendTokenPrefix(),
              (this.resultMappings[this.tokenIndex] = this.resultCode.length),
              (this.resultCode += n),
              this.appendTokenSuffix(),
              this.tokenIndex++;
          }
          removeInitialToken() {
            this.replaceToken('');
          }
          removeToken() {
            this.replaceTokenTrimmingLeftWhitespace('');
          }
          removeBalancedCode() {
            let n = 0;
            for (; !this.isAtEnd(); ) {
              if (this.matches1(e.braceL)) n++;
              else if (this.matches1(e.braceR)) {
                if (n === 0) return;
                n--;
              }
              this.removeToken();
            }
          }
          copyExpectedToken(n) {
            if (this.tokens[this.tokenIndex].type !== n)
              throw new Error(`Expected token ${n}`);
            this.copyToken();
          }
          copyToken() {
            (this.resultCode += this.previousWhitespaceAndComments()),
              this.appendTokenPrefix(),
              (this.resultMappings[this.tokenIndex] = this.resultCode.length),
              (this.resultCode += this.code.slice(
                this.tokens[this.tokenIndex].start,
                this.tokens[this.tokenIndex].end,
              )),
              this.appendTokenSuffix(),
              this.tokenIndex++;
          }
          copyTokenWithPrefix(n) {
            (this.resultCode += this.previousWhitespaceAndComments()),
              this.appendTokenPrefix(),
              (this.resultCode += n),
              (this.resultMappings[this.tokenIndex] = this.resultCode.length),
              (this.resultCode += this.code.slice(
                this.tokens[this.tokenIndex].start,
                this.tokens[this.tokenIndex].end,
              )),
              this.appendTokenSuffix(),
              this.tokenIndex++;
          }
          appendTokenPrefix() {
            const n = this.currentToken();
            if (
              ((n.numNullishCoalesceStarts || n.isOptionalChainStart) &&
                (n.isAsyncOperation = Fc(this)),
              !this.disableESTransforms)
            ) {
              if (n.numNullishCoalesceStarts)
                for (let s = 0; s < n.numNullishCoalesceStarts; s++)
                  n.isAsyncOperation
                    ? ((this.resultCode += 'await '),
                      (this.resultCode += this.helperManager.getHelperName(
                        'asyncNullishCoalesce',
                      )))
                    : (this.resultCode +=
                        this.helperManager.getHelperName('nullishCoalesce')),
                    (this.resultCode += '(');
              n.isOptionalChainStart &&
                (n.isAsyncOperation && (this.resultCode += 'await '),
                this.tokenIndex > 0 &&
                this.tokenAtRelativeIndex(-1).type === e._delete
                  ? n.isAsyncOperation
                    ? (this.resultCode += this.helperManager.getHelperName(
                        'asyncOptionalChainDelete',
                      ))
                    : (this.resultCode += this.helperManager.getHelperName(
                        'optionalChainDelete',
                      ))
                  : n.isAsyncOperation
                  ? (this.resultCode +=
                      this.helperManager.getHelperName('asyncOptionalChain'))
                  : (this.resultCode +=
                      this.helperManager.getHelperName('optionalChain')),
                (this.resultCode += '(['));
            }
          }
          appendTokenSuffix() {
            const n = this.currentToken();
            if (
              (n.isOptionalChainEnd &&
                !this.disableESTransforms &&
                (this.resultCode += '])'),
              n.numNullishCoalesceEnds && !this.disableESTransforms)
            )
              for (let s = 0; s < n.numNullishCoalesceEnds; s++)
                this.resultCode += '))';
          }
          appendCode(n) {
            this.resultCode += n;
          }
          currentToken() {
            return this.tokens[this.tokenIndex];
          }
          currentTokenCode() {
            const n = this.currentToken();
            return this.code.slice(n.start, n.end);
          }
          tokenAtRelativeIndex(n) {
            return this.tokens[this.tokenIndex + n];
          }
          currentIndex() {
            return this.tokenIndex;
          }
          nextToken() {
            if (this.tokenIndex === this.tokens.length)
              throw new Error('Unexpectedly reached end of input.');
            this.tokenIndex++;
          }
          previousToken() {
            this.tokenIndex--;
          }
          finish() {
            if (this.tokenIndex !== this.tokens.length)
              throw new Error(
                'Tried to finish processing tokens before reaching the end.',
              );
            return (
              (this.resultCode += this.previousWhitespaceAndComments()),
              { code: this.resultCode, mappings: this.resultMappings }
            );
          }
          isAtEnd() {
            return this.tokenIndex === this.tokens.length;
          }
        }
        function Oc(t, n, s, c) {
          const f = n.snapshot(),
            d = Mc(n);
          let b = [];
          const F = [],
            J = [];
          let oe = null;
          const ye = [],
            pe = [],
            ee = n.currentToken().contextId;
          if (ee == null)
            throw new Error(
              'Expected non-null class context ID on class open-brace.',
            );
          for (n.nextToken(); !n.matchesContextIdAndLabel(e.braceR, ee); )
            if (n.matchesContextual(u._constructor) && !n.currentToken().isType)
              ({
                constructorInitializerStatements: b,
                constructorInsertPos: oe,
              } = B1(n));
            else if (n.matches1(e.semi))
              c ||
                pe.push({ start: n.currentIndex(), end: n.currentIndex() + 1 }),
                n.nextToken();
            else if (n.currentToken().isType) n.nextToken();
            else {
              const ke = n.currentIndex();
              let Pe = !1,
                Qe = !1,
                We = !1;
              for (; Dn(n.currentToken()); )
                n.matches1(e._static) && (Pe = !0),
                  n.matches1(e.hash) && (Qe = !0),
                  (n.matches1(e._declare) || n.matches1(e._abstract)) &&
                    (We = !0),
                  n.nextToken();
              if (Pe && n.matches1(e.braceL)) {
                xr(n, ee);
                continue;
              }
              if (Qe) {
                xr(n, ee);
                continue;
              }
              if (
                n.matchesContextual(u._constructor) &&
                !n.currentToken().isType
              ) {
                ({
                  constructorInitializerStatements: b,
                  constructorInsertPos: oe,
                } = B1(n));
                continue;
              }
              const et = n.currentIndex();
              if ((Bc(n), n.matches1(e.lessThan) || n.matches1(e.parenL))) {
                xr(n, ee);
                continue;
              }
              for (; n.currentToken().isType; ) n.nextToken();
              if (n.matches1(e.eq)) {
                const ze = n.currentIndex(),
                  lt = n.currentToken().rhsEndIndex;
                if (lt == null)
                  throw new Error(
                    'Expected rhsEndIndex on class field assignment.',
                  );
                for (n.nextToken(); n.currentIndex() < lt; ) t.processToken();
                let Je;
                Pe
                  ? ((Je = s.claimFreeName('__initStatic')), J.push(Je))
                  : ((Je = s.claimFreeName('__init')), F.push(Je)),
                  ye.push({
                    initializerName: Je,
                    equalsIndex: ze,
                    start: et,
                    end: n.currentIndex(),
                  });
              } else
                (!c || We) && pe.push({ start: ke, end: n.currentIndex() });
            }
          return (
            n.restoreToSnapshot(f),
            c
              ? {
                  headerInfo: d,
                  constructorInitializerStatements: b,
                  instanceInitializerNames: [],
                  staticInitializerNames: [],
                  constructorInsertPos: oe,
                  fields: [],
                  rangesToRemove: pe,
                }
              : {
                  headerInfo: d,
                  constructorInitializerStatements: b,
                  instanceInitializerNames: F,
                  staticInitializerNames: J,
                  constructorInsertPos: oe,
                  fields: ye,
                  rangesToRemove: pe,
                }
          );
        }
        function xr(t, n) {
          for (t.nextToken(); t.currentToken().contextId !== n; ) t.nextToken();
          for (; Dn(t.tokenAtRelativeIndex(-1)); ) t.previousToken();
        }
        function Mc(t) {
          const n = t.currentToken(),
            s = n.contextId;
          if (s == null) throw new Error('Expected context ID on class token.');
          const c = n.isExpression;
          if (c == null)
            throw new Error('Expected isExpression on class token.');
          let f = null,
            d = !1;
          for (
            t.nextToken(), t.matches1(e.name) && (f = t.identifierName());
            !t.matchesContextIdAndLabel(e.braceL, s);

          )
            t.matches1(e._extends) && !t.currentToken().isType && (d = !0),
              t.nextToken();
          return { isExpression: c, className: f, hasSuperclass: d };
        }
        function B1(t) {
          const n = [];
          t.nextToken();
          const s = t.currentToken().contextId;
          if (s == null)
            throw new Error(
              'Expected context ID on open-paren starting constructor params.',
            );
          for (; !t.matchesContextIdAndLabel(e.parenR, s); )
            if (t.currentToken().contextId === s) {
              if ((t.nextToken(), Dn(t.currentToken()))) {
                for (t.nextToken(); Dn(t.currentToken()); ) t.nextToken();
                const d = t.currentToken();
                if (d.type !== e.name)
                  throw new Error(
                    'Expected identifier after access modifiers in constructor arg.',
                  );
                const b = t.identifierNameForToken(d);
                n.push(`this.${b} = ${b}`);
              }
            } else t.nextToken();
          for (t.nextToken(); t.currentToken().isType; ) t.nextToken();
          let c = t.currentIndex(),
            f = !1;
          for (; !t.matchesContextIdAndLabel(e.braceR, s); ) {
            if (!f && t.matches2(e._super, e.parenL)) {
              t.nextToken();
              const d = t.currentToken().contextId;
              if (d == null)
                throw new Error('Expected a context ID on the super call');
              for (; !t.matchesContextIdAndLabel(e.parenR, d); ) t.nextToken();
              (c = t.currentIndex()), (f = !0);
            }
            t.nextToken();
          }
          return (
            t.nextToken(),
            { constructorInitializerStatements: n, constructorInsertPos: c }
          );
        }
        function Dn(t) {
          return [
            e._async,
            e._get,
            e._set,
            e.plus,
            e.minus,
            e._readonly,
            e._static,
            e._public,
            e._private,
            e._protected,
            e._override,
            e._abstract,
            e.star,
            e._declare,
            e.hash,
          ].includes(t.type);
        }
        function Bc(t) {
          if (t.matches1(e.bracketL)) {
            const s = t.currentToken().contextId;
            if (s == null)
              throw new Error(
                'Expected class context ID on computed name open bracket.',
              );
            for (; !t.matchesContextIdAndLabel(e.bracketR, s); ) t.nextToken();
            t.nextToken();
          } else t.nextToken();
        }
        function j1(t) {
          if (
            (t.removeInitialToken(),
            t.removeToken(),
            t.removeToken(),
            t.removeToken(),
            t.matches1(e.parenL))
          )
            t.removeToken(), t.removeToken(), t.removeToken();
          else for (; t.matches1(e.dot); ) t.removeToken(), t.removeToken();
        }
        const q1 = {
          typeDeclarations: new Set(),
          valueDeclarations: new Set(),
        };
        function U1(t) {
          const n = new Set(),
            s = new Set();
          for (let c = 0; c < t.tokens.length; c++) {
            const f = t.tokens[c];
            f.type === e.name &&
              S(f) &&
              (f.isType
                ? n.add(t.identifierNameForToken(f))
                : s.add(t.identifierNameForToken(f)));
          }
          return { typeDeclarations: n, valueDeclarations: s };
        }
        function $1(t) {
          let n = t.currentIndex();
          for (; !t.matches1AtIndex(n, e.braceR); ) n++;
          return (
            t.matchesContextualAtIndex(n + 1, u._from) &&
            t.matches1AtIndex(n + 2, e.string)
          );
        }
        function jt(t) {
          (t.matches2(e._with, e.braceL) ||
            (t.matches2(e.name, e.braceL) && t.matchesContextual(u._assert))) &&
            (t.removeToken(),
            t.removeToken(),
            t.removeBalancedCode(),
            t.removeToken());
        }
        function V1(t, n, s, c) {
          if (!t || n) return !1;
          const f = s.currentToken();
          if (f.rhsEndIndex == null)
            throw new Error('Expected non-null rhsEndIndex on export token.');
          const d = f.rhsEndIndex - s.currentIndex();
          if (
            d !== 3 &&
            !(d === 4 && s.matches1AtIndex(f.rhsEndIndex - 1, e.semi))
          )
            return !1;
          const b = s.tokenAtRelativeIndex(2);
          if (b.type !== e.name) return !1;
          const F = s.identifierNameForToken(b);
          return c.typeDeclarations.has(F) && !c.valueDeclarations.has(F);
        }
        class un extends ut {
          __init() {
            this.hadExport = !1;
          }
          __init2() {
            this.hadNamedExport = !1;
          }
          __init3() {
            this.hadDefaultExport = !1;
          }
          constructor(n, s, c, f, d, b, F, J, oe, ye, pe, ee) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.importProcessor = c),
              (this.nameManager = f),
              (this.helperManager = d),
              (this.reactHotLoaderTransformer = b),
              (this.enableLegacyBabel5ModuleInterop = F),
              (this.enableLegacyTypeScriptModuleInterop = J),
              (this.isTypeScriptTransformEnabled = oe),
              (this.isFlowTransformEnabled = ye),
              (this.preserveDynamicImport = pe),
              (this.keepUnusedImports = ee),
              un.prototype.__init.call(this),
              un.prototype.__init2.call(this),
              un.prototype.__init3.call(this),
              (this.declarationInfo = oe ? U1(s) : q1);
          }
          getPrefixCode() {
            let n = '';
            return (
              this.hadExport &&
                (n +=
                  'Object.defineProperty(exports, "__esModule", {value: true});'),
              n
            );
          }
          getSuffixCode() {
            return this.enableLegacyBabel5ModuleInterop &&
              this.hadDefaultExport &&
              !this.hadNamedExport
              ? `
module.exports = exports.default;
`
              : '';
          }
          process() {
            return this.tokens.matches3(e._import, e.name, e.eq)
              ? this.processImportEquals()
              : this.tokens.matches1(e._import)
              ? (this.processImport(), !0)
              : this.tokens.matches2(e._export, e.eq)
              ? (this.tokens.replaceToken('module.exports'), !0)
              : this.tokens.matches1(e._export) &&
                !this.tokens.currentToken().isType
              ? ((this.hadExport = !0), this.processExport())
              : this.tokens.matches2(e.name, e.postIncDec) &&
                this.processPostIncDec()
              ? !0
              : this.tokens.matches1(e.name) || this.tokens.matches1(e.jsxName)
              ? this.processIdentifier()
              : this.tokens.matches1(e.eq)
              ? this.processAssignment()
              : this.tokens.matches1(e.assign)
              ? this.processComplexAssignment()
              : this.tokens.matches1(e.preIncDec)
              ? this.processPreIncDec()
              : !1;
          }
          processImportEquals() {
            const n = this.tokens.identifierNameAtIndex(
              this.tokens.currentIndex() + 1,
            );
            return (
              this.importProcessor.shouldAutomaticallyElideImportedName(n)
                ? j1(this.tokens)
                : this.tokens.replaceToken('const'),
              !0
            );
          }
          processImport() {
            if (this.tokens.matches2(e._import, e.parenL)) {
              if (this.preserveDynamicImport) {
                this.tokens.copyToken();
                return;
              }
              const s = this.enableLegacyTypeScriptModuleInterop
                ? ''
                : `${this.helperManager.getHelperName(
                    'interopRequireWildcard',
                  )}(`;
              this.tokens.replaceToken(
                `Promise.resolve().then(() => ${s}require`,
              );
              const c = this.tokens.currentToken().contextId;
              if (c == null)
                throw new Error(
                  'Expected context ID on dynamic import invocation.',
                );
              for (
                this.tokens.copyToken();
                !this.tokens.matchesContextIdAndLabel(e.parenR, c);

              )
                this.rootTransformer.processToken();
              this.tokens.replaceToken(s ? ')))' : '))');
              return;
            }
            if (this.removeImportAndDetectIfShouldElide())
              this.tokens.removeToken();
            else {
              const s = this.tokens.stringValue();
              this.tokens.replaceTokenTrimmingLeftWhitespace(
                this.importProcessor.claimImportCode(s),
              ),
                this.tokens.appendCode(this.importProcessor.claimImportCode(s));
            }
            jt(this.tokens),
              this.tokens.matches1(e.semi) && this.tokens.removeToken();
          }
          removeImportAndDetectIfShouldElide() {
            if (
              (this.tokens.removeInitialToken(),
              this.tokens.matchesContextual(u._type) &&
                !this.tokens.matches1AtIndex(
                  this.tokens.currentIndex() + 1,
                  e.comma,
                ) &&
                !this.tokens.matchesContextualAtIndex(
                  this.tokens.currentIndex() + 1,
                  u._from,
                ))
            )
              return this.removeRemainingImport(), !0;
            if (this.tokens.matches1(e.name) || this.tokens.matches1(e.star))
              return this.removeRemainingImport(), !1;
            if (this.tokens.matches1(e.string)) return !1;
            let n = !1,
              s = !1;
            for (; !this.tokens.matches1(e.string); )
              ((!n && this.tokens.matches1(e.braceL)) ||
                this.tokens.matches1(e.comma)) &&
                (this.tokens.removeToken(),
                this.tokens.matches1(e.braceR) || (s = !0),
                (this.tokens.matches2(e.name, e.comma) ||
                  this.tokens.matches2(e.name, e.braceR) ||
                  this.tokens.matches4(e.name, e.name, e.name, e.comma) ||
                  this.tokens.matches4(e.name, e.name, e.name, e.braceR)) &&
                  (n = !0)),
                this.tokens.removeToken();
            return this.keepUnusedImports
              ? !1
              : this.isTypeScriptTransformEnabled
              ? !n
              : this.isFlowTransformEnabled
              ? s && !n
              : !1;
          }
          removeRemainingImport() {
            for (; !this.tokens.matches1(e.string); ) this.tokens.removeToken();
          }
          processIdentifier() {
            const n = this.tokens.currentToken();
            if (n.shadowsGlobal) return !1;
            if (n.identifierRole === O.ObjectShorthand)
              return this.processObjectShorthand();
            if (n.identifierRole !== O.Access) return !1;
            const s = this.importProcessor.getIdentifierReplacement(
              this.tokens.identifierNameForToken(n),
            );
            if (!s) return !1;
            let c = this.tokens.currentIndex() + 1;
            for (
              ;
              c < this.tokens.tokens.length &&
              this.tokens.tokens[c].type === e.parenR;

            )
              c++;
            return (
              this.tokens.tokens[c].type === e.parenL
                ? this.tokens.tokenAtRelativeIndex(1).type === e.parenL &&
                  this.tokens.tokenAtRelativeIndex(-1).type !== e._new
                  ? (this.tokens.replaceToken(`${s}.call(void 0, `),
                    this.tokens.removeToken(),
                    this.rootTransformer.processBalancedCode(),
                    this.tokens.copyExpectedToken(e.parenR))
                  : this.tokens.replaceToken(`(0, ${s})`)
                : this.tokens.replaceToken(s),
              !0
            );
          }
          processObjectShorthand() {
            const n = this.tokens.identifierName(),
              s = this.importProcessor.getIdentifierReplacement(n);
            return s ? (this.tokens.replaceToken(`${n}: ${s}`), !0) : !1;
          }
          processExport() {
            if (
              this.tokens.matches2(e._export, e._enum) ||
              this.tokens.matches3(e._export, e._const, e._enum)
            )
              return (this.hadNamedExport = !0), !1;
            if (this.tokens.matches2(e._export, e._default))
              return this.tokens.matches3(e._export, e._default, e._enum)
                ? ((this.hadDefaultExport = !0), !1)
                : (this.processExportDefault(), !0);
            if (this.tokens.matches2(e._export, e.braceL))
              return this.processExportBindings(), !0;
            if (
              this.tokens.matches2(e._export, e.name) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 1,
                u._type,
              )
            ) {
              if (
                (this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.tokens.matches1(e.braceL))
              ) {
                for (; !this.tokens.matches1(e.braceR); )
                  this.tokens.removeToken();
                this.tokens.removeToken();
              } else
                this.tokens.removeToken(),
                  this.tokens.matches1(e._as) &&
                    (this.tokens.removeToken(), this.tokens.removeToken());
              return (
                this.tokens.matchesContextual(u._from) &&
                  this.tokens.matches1AtIndex(
                    this.tokens.currentIndex() + 1,
                    e.string,
                  ) &&
                  (this.tokens.removeToken(),
                  this.tokens.removeToken(),
                  jt(this.tokens)),
                !0
              );
            }
            if (
              ((this.hadNamedExport = !0),
              this.tokens.matches2(e._export, e._var) ||
                this.tokens.matches2(e._export, e._let) ||
                this.tokens.matches2(e._export, e._const))
            )
              return this.processExportVar(), !0;
            if (
              this.tokens.matches2(e._export, e._function) ||
              this.tokens.matches3(e._export, e.name, e._function)
            )
              return this.processExportFunction(), !0;
            if (
              this.tokens.matches2(e._export, e._class) ||
              this.tokens.matches3(e._export, e._abstract, e._class) ||
              this.tokens.matches2(e._export, e.at)
            )
              return this.processExportClass(), !0;
            if (this.tokens.matches2(e._export, e.star))
              return this.processExportStar(), !0;
            throw new Error('Unrecognized export syntax.');
          }
          processAssignment() {
            const n = this.tokens.currentIndex(),
              s = this.tokens.tokens[n - 1];
            if (
              s.isType ||
              s.type !== e.name ||
              s.shadowsGlobal ||
              (n >= 2 && this.tokens.matches1AtIndex(n - 2, e.dot)) ||
              (n >= 2 &&
                [e._var, e._let, e._const].includes(
                  this.tokens.tokens[n - 2].type,
                ))
            )
              return !1;
            const c = this.importProcessor.resolveExportBinding(
              this.tokens.identifierNameForToken(s),
            );
            return c
              ? (this.tokens.copyToken(), this.tokens.appendCode(` ${c} =`), !0)
              : !1;
          }
          processComplexAssignment() {
            const n = this.tokens.currentIndex(),
              s = this.tokens.tokens[n - 1];
            if (
              s.type !== e.name ||
              s.shadowsGlobal ||
              (n >= 2 && this.tokens.matches1AtIndex(n - 2, e.dot))
            )
              return !1;
            const c = this.importProcessor.resolveExportBinding(
              this.tokens.identifierNameForToken(s),
            );
            return c
              ? (this.tokens.appendCode(` = ${c}`), this.tokens.copyToken(), !0)
              : !1;
          }
          processPreIncDec() {
            const n = this.tokens.currentIndex(),
              s = this.tokens.tokens[n + 1];
            if (
              s.type !== e.name ||
              s.shadowsGlobal ||
              (n + 2 < this.tokens.tokens.length &&
                (this.tokens.matches1AtIndex(n + 2, e.dot) ||
                  this.tokens.matches1AtIndex(n + 2, e.bracketL) ||
                  this.tokens.matches1AtIndex(n + 2, e.parenL)))
            )
              return !1;
            const c = this.tokens.identifierNameForToken(s),
              f = this.importProcessor.resolveExportBinding(c);
            return f
              ? (this.tokens.appendCode(`${f} = `), this.tokens.copyToken(), !0)
              : !1;
          }
          processPostIncDec() {
            const n = this.tokens.currentIndex(),
              s = this.tokens.tokens[n],
              c = this.tokens.tokens[n + 1];
            if (
              s.type !== e.name ||
              s.shadowsGlobal ||
              (n >= 1 && this.tokens.matches1AtIndex(n - 1, e.dot))
            )
              return !1;
            const f = this.tokens.identifierNameForToken(s),
              d = this.importProcessor.resolveExportBinding(f);
            if (!d) return !1;
            const b = this.tokens.rawCodeForToken(c),
              F = this.importProcessor.getIdentifierReplacement(f) || f;
            if (b === '++')
              this.tokens.replaceToken(`(${F} = ${d} = ${F} + 1, ${F} - 1)`);
            else if (b === '--')
              this.tokens.replaceToken(`(${F} = ${d} = ${F} - 1, ${F} + 1)`);
            else throw new Error(`Unexpected operator: ${b}`);
            return this.tokens.removeToken(), !0;
          }
          processExportDefault() {
            let n = !0;
            if (
              this.tokens.matches4(
                e._export,
                e._default,
                e._function,
                e.name,
              ) ||
              (this.tokens.matches5(
                e._export,
                e._default,
                e.name,
                e._function,
                e.name,
              ) &&
                this.tokens.matchesContextualAtIndex(
                  this.tokens.currentIndex() + 2,
                  u._async,
                ))
            ) {
              this.tokens.removeInitialToken(), this.tokens.removeToken();
              const s = this.processNamedFunction();
              this.tokens.appendCode(` exports.default = ${s};`);
            } else if (
              this.tokens.matches4(e._export, e._default, e._class, e.name) ||
              this.tokens.matches5(
                e._export,
                e._default,
                e._abstract,
                e._class,
                e.name,
              ) ||
              this.tokens.matches3(e._export, e._default, e.at)
            ) {
              this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.copyDecorators(),
                this.tokens.matches1(e._abstract) && this.tokens.removeToken();
              const s = this.rootTransformer.processNamedClass();
              this.tokens.appendCode(` exports.default = ${s};`);
            } else if (
              V1(
                this.isTypeScriptTransformEnabled,
                this.keepUnusedImports,
                this.tokens,
                this.declarationInfo,
              )
            )
              (n = !1),
                this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.tokens.removeToken();
            else if (this.reactHotLoaderTransformer) {
              const s = this.nameManager.claimFreeName('_default');
              this.tokens.replaceToken(`let ${s}; exports.`),
                this.tokens.copyToken(),
                this.tokens.appendCode(` = ${s} =`),
                this.reactHotLoaderTransformer.setExtractedDefaultExportName(s);
            } else
              this.tokens.replaceToken('exports.'),
                this.tokens.copyToken(),
                this.tokens.appendCode(' =');
            n && (this.hadDefaultExport = !0);
          }
          copyDecorators() {
            for (; this.tokens.matches1(e.at); )
              if ((this.tokens.copyToken(), this.tokens.matches1(e.parenL)))
                this.tokens.copyExpectedToken(e.parenL),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.copyExpectedToken(e.parenR);
              else {
                for (
                  this.tokens.copyExpectedToken(e.name);
                  this.tokens.matches1(e.dot);

                )
                  this.tokens.copyExpectedToken(e.dot),
                    this.tokens.copyExpectedToken(e.name);
                this.tokens.matches1(e.parenL) &&
                  (this.tokens.copyExpectedToken(e.parenL),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.copyExpectedToken(e.parenR));
              }
          }
          processExportVar() {
            this.isSimpleExportVar()
              ? this.processSimpleExportVar()
              : this.processComplexExportVar();
          }
          isSimpleExportVar() {
            let n = this.tokens.currentIndex();
            if ((n++, n++, !this.tokens.matches1AtIndex(n, e.name))) return !1;
            for (
              n++;
              n < this.tokens.tokens.length && this.tokens.tokens[n].isType;

            )
              n++;
            return !!this.tokens.matches1AtIndex(n, e.eq);
          }
          processSimpleExportVar() {
            this.tokens.removeInitialToken(), this.tokens.copyToken();
            const n = this.tokens.identifierName();
            for (; !this.tokens.matches1(e.eq); )
              this.rootTransformer.processToken();
            const s = this.tokens.currentToken().rhsEndIndex;
            if (s == null)
              throw new Error('Expected = token with an end index.');
            for (; this.tokens.currentIndex() < s; )
              this.rootTransformer.processToken();
            this.tokens.appendCode(`; exports.${n} = ${n}`);
          }
          processComplexExportVar() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const n = this.tokens.matches1(e.braceL);
            n && this.tokens.appendCode('(');
            let s = 0;
            for (;;)
              if (
                this.tokens.matches1(e.braceL) ||
                this.tokens.matches1(e.dollarBraceL) ||
                this.tokens.matches1(e.bracketL)
              )
                s++, this.tokens.copyToken();
              else if (
                this.tokens.matches1(e.braceR) ||
                this.tokens.matches1(e.bracketR)
              )
                s--, this.tokens.copyToken();
              else {
                if (
                  s === 0 &&
                  !this.tokens.matches1(e.name) &&
                  !this.tokens.currentToken().isType
                )
                  break;
                if (this.tokens.matches1(e.eq)) {
                  const c = this.tokens.currentToken().rhsEndIndex;
                  if (c == null)
                    throw new Error('Expected = token with an end index.');
                  for (; this.tokens.currentIndex() < c; )
                    this.rootTransformer.processToken();
                } else {
                  const c = this.tokens.currentToken();
                  if (Ke(c)) {
                    const f = this.tokens.identifierName();
                    let d = this.importProcessor.getIdentifierReplacement(f);
                    if (d === null)
                      throw new Error(
                        `Expected a replacement for ${f} in \`export var\` syntax.`,
                      );
                    G(c) && (d = `${f}: ${d}`), this.tokens.replaceToken(d);
                  } else this.rootTransformer.processToken();
                }
              }
            if (n) {
              const c = this.tokens.currentToken().rhsEndIndex;
              if (c == null)
                throw new Error('Expected = token with an end index.');
              for (; this.tokens.currentIndex() < c; )
                this.rootTransformer.processToken();
              this.tokens.appendCode(')');
            }
          }
          processExportFunction() {
            this.tokens.replaceToken('');
            const n = this.processNamedFunction();
            this.tokens.appendCode(` exports.${n} = ${n};`);
          }
          processNamedFunction() {
            if (this.tokens.matches1(e._function)) this.tokens.copyToken();
            else if (this.tokens.matches2(e.name, e._function)) {
              if (!this.tokens.matchesContextual(u._async))
                throw new Error('Expected async keyword in function export.');
              this.tokens.copyToken(), this.tokens.copyToken();
            }
            if (
              (this.tokens.matches1(e.star) && this.tokens.copyToken(),
              !this.tokens.matches1(e.name))
            )
              throw new Error(
                'Expected identifier for exported function name.',
              );
            const n = this.tokens.identifierName();
            if ((this.tokens.copyToken(), this.tokens.currentToken().isType))
              for (
                this.tokens.removeInitialToken();
                this.tokens.currentToken().isType;

              )
                this.tokens.removeToken();
            return (
              this.tokens.copyExpectedToken(e.parenL),
              this.rootTransformer.processBalancedCode(),
              this.tokens.copyExpectedToken(e.parenR),
              this.rootTransformer.processPossibleTypeRange(),
              this.tokens.copyExpectedToken(e.braceL),
              this.rootTransformer.processBalancedCode(),
              this.tokens.copyExpectedToken(e.braceR),
              n
            );
          }
          processExportClass() {
            this.tokens.removeInitialToken(),
              this.copyDecorators(),
              this.tokens.matches1(e._abstract) && this.tokens.removeToken();
            const n = this.rootTransformer.processNamedClass();
            this.tokens.appendCode(` exports.${n} = ${n};`);
          }
          processExportBindings() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const n = $1(this.tokens),
              s = [];
            for (;;) {
              if (this.tokens.matches1(e.braceR)) {
                this.tokens.removeToken();
                break;
              }
              const c = Jt(this.tokens);
              for (; this.tokens.currentIndex() < c.endIndex; )
                this.tokens.removeToken();
              if (
                !(
                  c.isType ||
                  (!n && this.shouldElideExportedIdentifier(c.leftName))
                )
              ) {
                const d = c.rightName;
                d === 'default'
                  ? (this.hadDefaultExport = !0)
                  : (this.hadNamedExport = !0);
                const b = c.leftName,
                  F = this.importProcessor.getIdentifierReplacement(b);
                s.push(`exports.${d} = ${F || b};`);
              }
              if (this.tokens.matches1(e.braceR)) {
                this.tokens.removeToken();
                break;
              }
              if (this.tokens.matches2(e.comma, e.braceR)) {
                this.tokens.removeToken(), this.tokens.removeToken();
                break;
              } else if (this.tokens.matches1(e.comma))
                this.tokens.removeToken();
              else
                throw new Error(
                  `Unexpected token: ${JSON.stringify(
                    this.tokens.currentToken(),
                  )}`,
                );
            }
            if (this.tokens.matchesContextual(u._from)) {
              this.tokens.removeToken();
              const c = this.tokens.stringValue();
              this.tokens.replaceTokenTrimmingLeftWhitespace(
                this.importProcessor.claimImportCode(c),
              ),
                jt(this.tokens);
            } else this.tokens.appendCode(s.join(' '));
            this.tokens.matches1(e.semi) && this.tokens.removeToken();
          }
          processExportStar() {
            for (
              this.tokens.removeInitialToken();
              !this.tokens.matches1(e.string);

            )
              this.tokens.removeToken();
            const n = this.tokens.stringValue();
            this.tokens.replaceTokenTrimmingLeftWhitespace(
              this.importProcessor.claimImportCode(n),
            ),
              jt(this.tokens),
              this.tokens.matches1(e.semi) && this.tokens.removeToken();
          }
          shouldElideExportedIdentifier(n) {
            return (
              this.isTypeScriptTransformEnabled &&
              !this.keepUnusedImports &&
              !this.declarationInfo.valueDeclarations.has(n)
            );
          }
        }
        class jc extends ut {
          constructor(n, s, c, f, d, b, F, J) {
            super(),
              (this.tokens = n),
              (this.nameManager = s),
              (this.helperManager = c),
              (this.reactHotLoaderTransformer = f),
              (this.isTypeScriptTransformEnabled = d),
              (this.isFlowTransformEnabled = b),
              (this.keepUnusedImports = F),
              (this.nonTypeIdentifiers = d && !F ? qs(n, J) : new Set()),
              (this.declarationInfo = d && !F ? U1(n) : q1),
              (this.injectCreateRequireForImportRequire =
                !!J.injectCreateRequireForImportRequire);
          }
          process() {
            if (this.tokens.matches3(e._import, e.name, e.eq))
              return this.processImportEquals();
            if (
              this.tokens.matches4(e._import, e.name, e.name, e.eq) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 1,
                u._type,
              )
            ) {
              this.tokens.removeInitialToken();
              for (let n = 0; n < 7; n++) this.tokens.removeToken();
              return !0;
            }
            if (this.tokens.matches2(e._export, e.eq))
              return this.tokens.replaceToken('module.exports'), !0;
            if (
              this.tokens.matches5(
                e._export,
                e._import,
                e.name,
                e.name,
                e.eq,
              ) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 2,
                u._type,
              )
            ) {
              this.tokens.removeInitialToken();
              for (let n = 0; n < 8; n++) this.tokens.removeToken();
              return !0;
            }
            if (this.tokens.matches1(e._import)) return this.processImport();
            if (this.tokens.matches2(e._export, e._default))
              return this.processExportDefault();
            if (this.tokens.matches2(e._export, e.braceL))
              return this.processNamedExports();
            if (
              this.tokens.matches2(e._export, e.name) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 1,
                u._type,
              )
            ) {
              if (
                (this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.tokens.matches1(e.braceL))
              ) {
                for (; !this.tokens.matches1(e.braceR); )
                  this.tokens.removeToken();
                this.tokens.removeToken();
              } else
                this.tokens.removeToken(),
                  this.tokens.matches1(e._as) &&
                    (this.tokens.removeToken(), this.tokens.removeToken());
              return (
                this.tokens.matchesContextual(u._from) &&
                  this.tokens.matches1AtIndex(
                    this.tokens.currentIndex() + 1,
                    e.string,
                  ) &&
                  (this.tokens.removeToken(),
                  this.tokens.removeToken(),
                  jt(this.tokens)),
                !0
              );
            }
            return !1;
          }
          processImportEquals() {
            const n = this.tokens.identifierNameAtIndex(
              this.tokens.currentIndex() + 1,
            );
            return (
              this.shouldAutomaticallyElideImportedName(n)
                ? j1(this.tokens)
                : this.injectCreateRequireForImportRequire
                ? (this.tokens.replaceToken('const'),
                  this.tokens.copyToken(),
                  this.tokens.copyToken(),
                  this.tokens.replaceToken(
                    this.helperManager.getHelperName('require'),
                  ))
                : this.tokens.replaceToken('const'),
              !0
            );
          }
          processImport() {
            if (this.tokens.matches2(e._import, e.parenL)) return !1;
            const n = this.tokens.snapshot();
            if (this.removeImportTypeBindings()) {
              for (
                this.tokens.restoreToSnapshot(n);
                !this.tokens.matches1(e.string);

              )
                this.tokens.removeToken();
              this.tokens.removeToken(),
                jt(this.tokens),
                this.tokens.matches1(e.semi) && this.tokens.removeToken();
            }
            return !0;
          }
          removeImportTypeBindings() {
            if (
              (this.tokens.copyExpectedToken(e._import),
              this.tokens.matchesContextual(u._type) &&
                !this.tokens.matches1AtIndex(
                  this.tokens.currentIndex() + 1,
                  e.comma,
                ) &&
                !this.tokens.matchesContextualAtIndex(
                  this.tokens.currentIndex() + 1,
                  u._from,
                ))
            )
              return !0;
            if (this.tokens.matches1(e.string))
              return this.tokens.copyToken(), !1;
            this.tokens.matchesContextual(u._module) &&
              this.tokens.matchesContextualAtIndex(
                this.tokens.currentIndex() + 2,
                u._from,
              ) &&
              this.tokens.copyToken();
            let n = !1,
              s = !1,
              c = !1;
            if (
              (this.tokens.matches1(e.name) &&
                (this.shouldAutomaticallyElideImportedName(
                  this.tokens.identifierName(),
                )
                  ? (this.tokens.removeToken(),
                    this.tokens.matches1(e.comma) && this.tokens.removeToken())
                  : ((n = !0),
                    this.tokens.copyToken(),
                    this.tokens.matches1(e.comma) &&
                      ((c = !0), this.tokens.removeToken()))),
              this.tokens.matches1(e.star))
            )
              this.shouldAutomaticallyElideImportedName(
                this.tokens.identifierNameAtRelativeIndex(2),
              )
                ? (this.tokens.removeToken(),
                  this.tokens.removeToken(),
                  this.tokens.removeToken())
                : (c && this.tokens.appendCode(','),
                  (n = !0),
                  this.tokens.copyExpectedToken(e.star),
                  this.tokens.copyExpectedToken(e.name),
                  this.tokens.copyExpectedToken(e.name));
            else if (this.tokens.matches1(e.braceL)) {
              for (
                c && this.tokens.appendCode(','), this.tokens.copyToken();
                !this.tokens.matches1(e.braceR);

              ) {
                s = !0;
                const f = Jt(this.tokens);
                if (
                  f.isType ||
                  this.shouldAutomaticallyElideImportedName(f.rightName)
                ) {
                  for (; this.tokens.currentIndex() < f.endIndex; )
                    this.tokens.removeToken();
                  this.tokens.matches1(e.comma) && this.tokens.removeToken();
                } else {
                  for (n = !0; this.tokens.currentIndex() < f.endIndex; )
                    this.tokens.copyToken();
                  this.tokens.matches1(e.comma) && this.tokens.copyToken();
                }
              }
              this.tokens.copyExpectedToken(e.braceR);
            }
            return this.keepUnusedImports
              ? !1
              : this.isTypeScriptTransformEnabled
              ? !n
              : this.isFlowTransformEnabled
              ? s && !n
              : !1;
          }
          shouldAutomaticallyElideImportedName(n) {
            return (
              this.isTypeScriptTransformEnabled &&
              !this.keepUnusedImports &&
              !this.nonTypeIdentifiers.has(n)
            );
          }
          processExportDefault() {
            if (
              V1(
                this.isTypeScriptTransformEnabled,
                this.keepUnusedImports,
                this.tokens,
                this.declarationInfo,
              )
            )
              return (
                this.tokens.removeInitialToken(),
                this.tokens.removeToken(),
                this.tokens.removeToken(),
                !0
              );
            if (
              !(
                this.tokens.matches4(
                  e._export,
                  e._default,
                  e._function,
                  e.name,
                ) ||
                (this.tokens.matches5(
                  e._export,
                  e._default,
                  e.name,
                  e._function,
                  e.name,
                ) &&
                  this.tokens.matchesContextualAtIndex(
                    this.tokens.currentIndex() + 2,
                    u._async,
                  )) ||
                this.tokens.matches4(e._export, e._default, e._class, e.name) ||
                this.tokens.matches5(
                  e._export,
                  e._default,
                  e._abstract,
                  e._class,
                  e.name,
                )
              ) &&
              this.reactHotLoaderTransformer
            ) {
              const s = this.nameManager.claimFreeName('_default');
              return (
                this.tokens.replaceToken(`let ${s}; export`),
                this.tokens.copyToken(),
                this.tokens.appendCode(` ${s} =`),
                this.reactHotLoaderTransformer.setExtractedDefaultExportName(s),
                !0
              );
            }
            return !1;
          }
          processNamedExports() {
            if (!this.isTypeScriptTransformEnabled) return !1;
            this.tokens.copyExpectedToken(e._export),
              this.tokens.copyExpectedToken(e.braceL);
            const n = $1(this.tokens);
            let s = !1;
            for (; !this.tokens.matches1(e.braceR); ) {
              const c = Jt(this.tokens);
              if (
                c.isType ||
                (!n && this.shouldElideExportedName(c.leftName))
              ) {
                for (; this.tokens.currentIndex() < c.endIndex; )
                  this.tokens.removeToken();
                this.tokens.matches1(e.comma) && this.tokens.removeToken();
              } else {
                for (s = !0; this.tokens.currentIndex() < c.endIndex; )
                  this.tokens.copyToken();
                this.tokens.matches1(e.comma) && this.tokens.copyToken();
              }
            }
            return (
              this.tokens.copyExpectedToken(e.braceR),
              !this.keepUnusedImports &&
                n &&
                !s &&
                (this.tokens.removeToken(),
                this.tokens.removeToken(),
                jt(this.tokens)),
              !0
            );
          }
          shouldElideExportedName(n) {
            return (
              this.isTypeScriptTransformEnabled &&
              !this.keepUnusedImports &&
              this.declarationInfo.typeDeclarations.has(n) &&
              !this.declarationInfo.valueDeclarations.has(n)
            );
          }
        }
        class qc extends ut {
          constructor(n, s, c) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.isImportsTransformEnabled = c);
          }
          process() {
            return this.rootTransformer.processPossibleArrowParamEnd() ||
              this.rootTransformer.processPossibleAsyncArrowWithTypeParams() ||
              this.rootTransformer.processPossibleTypeRange()
              ? !0
              : this.tokens.matches1(e._enum)
              ? (this.processEnum(), !0)
              : this.tokens.matches2(e._export, e._enum)
              ? (this.processNamedExportEnum(), !0)
              : this.tokens.matches3(e._export, e._default, e._enum)
              ? (this.processDefaultExportEnum(), !0)
              : !1;
          }
          processNamedExportEnum() {
            if (this.isImportsTransformEnabled) {
              this.tokens.removeInitialToken();
              const n = this.tokens.identifierNameAtRelativeIndex(1);
              this.processEnum(),
                this.tokens.appendCode(` exports.${n} = ${n};`);
            } else this.tokens.copyToken(), this.processEnum();
          }
          processDefaultExportEnum() {
            this.tokens.removeInitialToken(), this.tokens.removeToken();
            const n = this.tokens.identifierNameAtRelativeIndex(1);
            this.processEnum(),
              this.isImportsTransformEnabled
                ? this.tokens.appendCode(` exports.default = ${n};`)
                : this.tokens.appendCode(` export default ${n};`);
          }
          processEnum() {
            this.tokens.replaceToken('const'),
              this.tokens.copyExpectedToken(e.name);
            let n = !1;
            this.tokens.matchesContextual(u._of) &&
              (this.tokens.removeToken(),
              (n = this.tokens.matchesContextual(u._symbol)),
              this.tokens.removeToken());
            const s = this.tokens.matches3(e.braceL, e.name, e.eq);
            this.tokens.appendCode(' = require("flow-enums-runtime")');
            const c = !n && !s;
            for (
              this.tokens.replaceTokenTrimmingLeftWhitespace(
                c ? '.Mirrored([' : '({',
              );
              !this.tokens.matches1(e.braceR);

            ) {
              if (this.tokens.matches1(e.ellipsis)) {
                this.tokens.removeToken();
                break;
              }
              this.processEnumElement(n, s),
                this.tokens.matches1(e.comma) && this.tokens.copyToken();
            }
            this.tokens.replaceToken(c ? ']);' : '});');
          }
          processEnumElement(n, s) {
            if (n) {
              const c = this.tokens.identifierName();
              this.tokens.copyToken(),
                this.tokens.appendCode(`: Symbol("${c}")`);
            } else
              s
                ? (this.tokens.copyToken(),
                  this.tokens.replaceTokenTrimmingLeftWhitespace(':'),
                  this.tokens.copyToken())
                : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
          }
        }
        function Uc(t) {
          let n,
            s = t[0],
            c = 1;
          for (; c < t.length; ) {
            const f = t[c],
              d = t[c + 1];
            if (
              ((c += 2),
              (f === 'optionalAccess' || f === 'optionalCall') && s == null)
            )
              return;
            f === 'access' || f === 'optionalAccess'
              ? ((n = s), (s = d(s)))
              : (f === 'call' || f === 'optionalCall') &&
                ((s = d((...b) => s.call(n, ...b))), (n = void 0));
          }
          return s;
        }
        const Fn = 'jest',
          $c = ['mock', 'unmock', 'enableAutomock', 'disableAutomock'];
        class wr extends ut {
          __init() {
            this.hoistedFunctionNames = [];
          }
          constructor(n, s, c, f) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.nameManager = c),
              (this.importProcessor = f),
              wr.prototype.__init.call(this);
          }
          process() {
            return this.tokens.currentToken().scopeDepth === 0 &&
              this.tokens.matches4(e.name, e.dot, e.name, e.parenL) &&
              this.tokens.identifierName() === Fn
              ? Uc([
                  this,
                  'access',
                  (n) => n.importProcessor,
                  'optionalAccess',
                  (n) => n.getGlobalNames,
                  'call',
                  (n) => n(),
                  'optionalAccess',
                  (n) => n.has,
                  'call',
                  (n) => n(Fn),
                ])
                ? !1
                : this.extractHoistedCalls()
              : !1;
          }
          getHoistedCode() {
            return this.hoistedFunctionNames.length > 0
              ? this.hoistedFunctionNames.map((n) => `${n}();`).join('')
              : '';
          }
          extractHoistedCalls() {
            this.tokens.removeToken();
            let n = !1;
            for (; this.tokens.matches3(e.dot, e.name, e.parenL); ) {
              const s = this.tokens.identifierNameAtIndex(
                this.tokens.currentIndex() + 1,
              );
              if ($c.includes(s)) {
                const f = this.nameManager.claimFreeName('__jestHoist');
                this.hoistedFunctionNames.push(f),
                  this.tokens.replaceToken(`function ${f}(){${Fn}.`),
                  this.tokens.copyToken(),
                  this.tokens.copyToken(),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.copyExpectedToken(e.parenR),
                  this.tokens.appendCode(';}'),
                  (n = !1);
              } else
                n
                  ? this.tokens.copyToken()
                  : this.tokens.replaceToken(`${Fn}.`),
                  this.tokens.copyToken(),
                  this.tokens.copyToken(),
                  this.rootTransformer.processBalancedCode(),
                  this.tokens.copyExpectedToken(e.parenR),
                  (n = !0);
            }
            return !0;
          }
        }
        class Vc extends ut {
          constructor(n) {
            super(), (this.tokens = n);
          }
          process() {
            if (this.tokens.matches1(e.num)) {
              const n = this.tokens.currentTokenCode();
              if (n.includes('_'))
                return this.tokens.replaceToken(n.replace(/_/g, '')), !0;
            }
            return !1;
          }
        }
        class Wc extends ut {
          constructor(n, s) {
            super(), (this.tokens = n), (this.nameManager = s);
          }
          process() {
            return this.tokens.matches2(e._catch, e.braceL)
              ? (this.tokens.copyToken(),
                this.tokens.appendCode(
                  ` (${this.nameManager.claimFreeName('e')})`,
                ),
                !0)
              : !1;
          }
        }
        class Hc extends ut {
          constructor(n, s) {
            super(), (this.tokens = n), (this.nameManager = s);
          }
          process() {
            if (this.tokens.matches1(e.nullishCoalescing)) {
              const c = this.tokens.currentToken();
              return (
                this.tokens.tokens[c.nullishStartIndex].isAsyncOperation
                  ? this.tokens.replaceTokenTrimmingLeftWhitespace(
                      ', async () => (',
                    )
                  : this.tokens.replaceTokenTrimmingLeftWhitespace(', () => ('),
                !0
              );
            }
            if (
              this.tokens.matches1(e._delete) &&
              this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart
            )
              return this.tokens.removeInitialToken(), !0;
            const s = this.tokens.currentToken().subscriptStartIndex;
            if (
              s != null &&
              this.tokens.tokens[s].isOptionalChainStart &&
              this.tokens.tokenAtRelativeIndex(-1).type !== e._super
            ) {
              const c = this.nameManager.claimFreeName('_');
              let f;
              if (
                (s > 0 &&
                this.tokens.matches1AtIndex(s - 1, e._delete) &&
                this.isLastSubscriptInChain()
                  ? (f = `${c} => delete ${c}`)
                  : (f = `${c} => ${c}`),
                this.tokens.tokens[s].isAsyncOperation && (f = `async ${f}`),
                this.tokens.matches2(e.questionDot, e.parenL) ||
                  this.tokens.matches2(e.questionDot, e.lessThan))
              )
                this.justSkippedSuper() &&
                  this.tokens.appendCode('.bind(this)'),
                  this.tokens.replaceTokenTrimmingLeftWhitespace(
                    `, 'optionalCall', ${f}`,
                  );
              else if (this.tokens.matches2(e.questionDot, e.bracketL))
                this.tokens.replaceTokenTrimmingLeftWhitespace(
                  `, 'optionalAccess', ${f}`,
                );
              else if (this.tokens.matches1(e.questionDot))
                this.tokens.replaceTokenTrimmingLeftWhitespace(
                  `, 'optionalAccess', ${f}.`,
                );
              else if (this.tokens.matches1(e.dot))
                this.tokens.replaceTokenTrimmingLeftWhitespace(
                  `, 'access', ${f}.`,
                );
              else if (this.tokens.matches1(e.bracketL))
                this.tokens.replaceTokenTrimmingLeftWhitespace(
                  `, 'access', ${f}[`,
                );
              else if (this.tokens.matches1(e.parenL))
                this.justSkippedSuper() &&
                  this.tokens.appendCode('.bind(this)'),
                  this.tokens.replaceTokenTrimmingLeftWhitespace(
                    `, 'call', ${f}(`,
                  );
              else
                throw new Error(
                  'Unexpected subscript operator in optional chain.',
                );
              return !0;
            }
            return !1;
          }
          isLastSubscriptInChain() {
            let n = 0;
            for (let s = this.tokens.currentIndex() + 1; ; s++) {
              if (s >= this.tokens.tokens.length)
                throw new Error(
                  'Reached the end of the code while finding the end of the access chain.',
                );
              if (
                (this.tokens.tokens[s].isOptionalChainStart
                  ? n++
                  : this.tokens.tokens[s].isOptionalChainEnd && n--,
                n < 0)
              )
                return !0;
              if (n === 0 && this.tokens.tokens[s].subscriptStartIndex != null)
                return !1;
            }
          }
          justSkippedSuper() {
            let n = 0,
              s = this.tokens.currentIndex() - 1;
            for (;;) {
              if (s < 0)
                throw new Error(
                  'Reached the start of the code while finding the start of the access chain.',
                );
              if (
                (this.tokens.tokens[s].isOptionalChainStart
                  ? n--
                  : this.tokens.tokens[s].isOptionalChainEnd && n++,
                n < 0)
              )
                return !1;
              if (n === 0 && this.tokens.tokens[s].subscriptStartIndex != null)
                return this.tokens.tokens[s - 1].type === e._super;
              s--;
            }
          }
        }
        class Yc extends ut {
          constructor(n, s, c, f) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.importProcessor = c),
              (this.options = f);
          }
          process() {
            const n = this.tokens.currentIndex();
            if (this.tokens.identifierName() === 'createReactClass') {
              const s =
                this.importProcessor &&
                this.importProcessor.getIdentifierReplacement(
                  'createReactClass',
                );
              return (
                s
                  ? this.tokens.replaceToken(`(0, ${s})`)
                  : this.tokens.copyToken(),
                this.tryProcessCreateClassCall(n),
                !0
              );
            }
            if (
              this.tokens.matches3(e.name, e.dot, e.name) &&
              this.tokens.identifierName() === 'React' &&
              this.tokens.identifierNameAtIndex(
                this.tokens.currentIndex() + 2,
              ) === 'createClass'
            ) {
              const s =
                (this.importProcessor &&
                  this.importProcessor.getIdentifierReplacement('React')) ||
                'React';
              return (
                s
                  ? (this.tokens.replaceToken(s),
                    this.tokens.copyToken(),
                    this.tokens.copyToken())
                  : (this.tokens.copyToken(),
                    this.tokens.copyToken(),
                    this.tokens.copyToken()),
                this.tryProcessCreateClassCall(n),
                !0
              );
            }
            return !1;
          }
          tryProcessCreateClassCall(n) {
            const s = this.findDisplayName(n);
            s &&
              this.classNeedsDisplayName() &&
              (this.tokens.copyExpectedToken(e.parenL),
              this.tokens.copyExpectedToken(e.braceL),
              this.tokens.appendCode(`displayName: '${s}',`),
              this.rootTransformer.processBalancedCode(),
              this.tokens.copyExpectedToken(e.braceR),
              this.tokens.copyExpectedToken(e.parenR));
          }
          findDisplayName(n) {
            return n < 2
              ? null
              : this.tokens.matches2AtIndex(n - 2, e.name, e.eq)
              ? this.tokens.identifierNameAtIndex(n - 2)
              : n >= 2 &&
                this.tokens.tokens[n - 2].identifierRole === O.ObjectKey
              ? this.tokens.identifierNameAtIndex(n - 2)
              : this.tokens.matches2AtIndex(n - 2, e._export, e._default)
              ? this.getDisplayNameFromFilename()
              : null;
          }
          getDisplayNameFromFilename() {
            const s = (this.options.filePath || 'unknown').split('/'),
              c = s[s.length - 1],
              f = c.lastIndexOf('.'),
              d = f === -1 ? c : c.slice(0, f);
            return d === 'index' && s[s.length - 2] ? s[s.length - 2] : d;
          }
          classNeedsDisplayName() {
            let n = this.tokens.currentIndex();
            if (!this.tokens.matches2(e.parenL, e.braceL)) return !1;
            const s = n + 1,
              c = this.tokens.tokens[s].contextId;
            if (c == null)
              throw new Error(
                'Expected non-null context ID on object open-brace.',
              );
            for (; n < this.tokens.tokens.length; n++) {
              const f = this.tokens.tokens[n];
              if (f.type === e.braceR && f.contextId === c) {
                n++;
                break;
              }
              if (
                this.tokens.identifierNameAtIndex(n) === 'displayName' &&
                this.tokens.tokens[n].identifierRole === O.ObjectKey &&
                f.contextId === c
              )
                return !1;
            }
            if (n === this.tokens.tokens.length)
              throw new Error(
                'Unexpected end of input when processing React class.',
              );
            return (
              this.tokens.matches1AtIndex(n, e.parenR) ||
              this.tokens.matches2AtIndex(n, e.comma, e.parenR)
            );
          }
        }
        class Ir extends ut {
          __init() {
            this.extractedDefaultExportName = null;
          }
          constructor(n, s) {
            super(),
              (this.tokens = n),
              (this.filePath = s),
              Ir.prototype.__init.call(this);
          }
          setExtractedDefaultExportName(n) {
            this.extractedDefaultExportName = n;
          }
          getPrefixCode() {
            return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`
              .replace(/\s+/g, ' ')
              .trim();
          }
          getSuffixCode() {
            const n = new Set();
            for (const c of this.tokens.tokens)
              !c.isType &&
                S(c) &&
                c.identifierRole !== O.ImportDeclaration &&
                n.add(this.tokens.identifierNameForToken(c));
            const s = Array.from(n).map((c) => ({
              variableName: c,
              uniqueLocalName: c,
            }));
            return (
              this.extractedDefaultExportName &&
                s.push({
                  variableName: this.extractedDefaultExportName,
                  uniqueLocalName: 'default',
                }),
              `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${s.map(
  ({ variableName: c, uniqueLocalName: f }) =>
    `  reactHotLoader.register(${c}, "${f}", ${JSON.stringify(
      this.filePath || '',
    )});`,
).join(`
`)}
  leaveModule(module);
})();`
            );
          }
          process() {
            return !1;
          }
        }
        const Gc = new Set([
          'break',
          'case',
          'catch',
          'class',
          'const',
          'continue',
          'debugger',
          'default',
          'delete',
          'do',
          'else',
          'export',
          'extends',
          'finally',
          'for',
          'function',
          'if',
          'import',
          'in',
          'instanceof',
          'new',
          'return',
          'super',
          'switch',
          'this',
          'throw',
          'try',
          'typeof',
          'var',
          'void',
          'while',
          'with',
          'yield',
          'enum',
          'implements',
          'interface',
          'let',
          'package',
          'private',
          'protected',
          'public',
          'static',
          'await',
          'false',
          'null',
          'true',
        ]);
        function W1(t) {
          if (t.length === 0 || !ve[t.charCodeAt(0)]) return !1;
          for (let n = 1; n < t.length; n++) if (!z[t.charCodeAt(n)]) return !1;
          return !Gc.has(t);
        }
        class Xc extends ut {
          constructor(n, s, c) {
            super(),
              (this.rootTransformer = n),
              (this.tokens = s),
              (this.isImportsTransformEnabled = c);
          }
          process() {
            return this.rootTransformer.processPossibleArrowParamEnd() ||
              this.rootTransformer.processPossibleAsyncArrowWithTypeParams() ||
              this.rootTransformer.processPossibleTypeRange()
              ? !0
              : this.tokens.matches1(e._public) ||
                this.tokens.matches1(e._protected) ||
                this.tokens.matches1(e._private) ||
                this.tokens.matches1(e._abstract) ||
                this.tokens.matches1(e._readonly) ||
                this.tokens.matches1(e._override) ||
                this.tokens.matches1(e.nonNullAssertion)
              ? (this.tokens.removeInitialToken(), !0)
              : this.tokens.matches1(e._enum) ||
                this.tokens.matches2(e._const, e._enum)
              ? (this.processEnum(), !0)
              : this.tokens.matches2(e._export, e._enum) ||
                this.tokens.matches3(e._export, e._const, e._enum)
              ? (this.processEnum(!0), !0)
              : !1;
          }
          processEnum(n = !1) {
            for (
              this.tokens.removeInitialToken();
              this.tokens.matches1(e._const) || this.tokens.matches1(e._enum);

            )
              this.tokens.removeToken();
            const s = this.tokens.identifierName();
            this.tokens.removeToken(),
              n &&
                !this.isImportsTransformEnabled &&
                this.tokens.appendCode('export '),
              this.tokens.appendCode(`var ${s}; (function (${s})`),
              this.tokens.copyExpectedToken(e.braceL),
              this.processEnumBody(s),
              this.tokens.copyExpectedToken(e.braceR),
              n && this.isImportsTransformEnabled
                ? this.tokens.appendCode(
                    `)(${s} || (exports.${s} = ${s} = {}));`,
                  )
                : this.tokens.appendCode(`)(${s} || (${s} = {}));`);
          }
          processEnumBody(n) {
            let s = null;
            for (; !this.tokens.matches1(e.braceR); ) {
              const { nameStringCode: c, variableName: f } =
                this.extractEnumKeyInfo(this.tokens.currentToken());
              this.tokens.removeInitialToken(),
                this.tokens.matches3(e.eq, e.string, e.comma) ||
                this.tokens.matches3(e.eq, e.string, e.braceR)
                  ? this.processStringLiteralEnumMember(n, c, f)
                  : this.tokens.matches1(e.eq)
                  ? this.processExplicitValueEnumMember(n, c, f)
                  : this.processImplicitValueEnumMember(n, c, f, s),
                this.tokens.matches1(e.comma) && this.tokens.removeToken(),
                f != null ? (s = f) : (s = `${n}[${c}]`);
            }
          }
          extractEnumKeyInfo(n) {
            if (n.type === e.name) {
              const s = this.tokens.identifierNameForToken(n);
              return {
                nameStringCode: `"${s}"`,
                variableName: W1(s) ? s : null,
              };
            } else if (n.type === e.string) {
              const s = this.tokens.stringValueForToken(n);
              return {
                nameStringCode: this.tokens.code.slice(n.start, n.end),
                variableName: W1(s) ? s : null,
              };
            } else
              throw new Error(
                'Expected name or string at beginning of enum element.',
              );
          }
          processStringLiteralEnumMember(n, s, c) {
            c != null
              ? (this.tokens.appendCode(`const ${c}`),
                this.tokens.copyToken(),
                this.tokens.copyToken(),
                this.tokens.appendCode(`; ${n}[${s}] = ${c};`))
              : (this.tokens.appendCode(`${n}[${s}]`),
                this.tokens.copyToken(),
                this.tokens.copyToken(),
                this.tokens.appendCode(';'));
          }
          processExplicitValueEnumMember(n, s, c) {
            const f = this.tokens.currentToken().rhsEndIndex;
            if (f == null)
              throw new Error('Expected rhsEndIndex on enum assign.');
            if (c != null) {
              for (
                this.tokens.appendCode(`const ${c}`), this.tokens.copyToken();
                this.tokens.currentIndex() < f;

              )
                this.rootTransformer.processToken();
              this.tokens.appendCode(`; ${n}[${n}[${s}] = ${c}] = ${s};`);
            } else {
              for (
                this.tokens.appendCode(`${n}[${n}[${s}]`),
                  this.tokens.copyToken();
                this.tokens.currentIndex() < f;

              )
                this.rootTransformer.processToken();
              this.tokens.appendCode(`] = ${s};`);
            }
          }
          processImplicitValueEnumMember(n, s, c, f) {
            let d = f != null ? `${f} + 1` : '0';
            c != null &&
              (this.tokens.appendCode(`const ${c} = ${d}; `), (d = c)),
              this.tokens.appendCode(`${n}[${n}[${s}] = ${d}] = ${s};`);
          }
        }
        class On {
          __init() {
            this.transformers = [];
          }
          __init2() {
            this.generatedVariables = [];
          }
          constructor(n, s, c, f) {
            On.prototype.__init.call(this),
              On.prototype.__init2.call(this),
              (this.nameManager = n.nameManager),
              (this.helperManager = n.helperManager);
            const { tokenProcessor: d, importProcessor: b } = n;
            (this.tokens = d),
              (this.isImportsTransformEnabled = s.includes('imports')),
              (this.isReactHotLoaderTransformEnabled =
                s.includes('react-hot-loader')),
              (this.disableESTransforms = !!f.disableESTransforms),
              f.disableESTransforms ||
                (this.transformers.push(new Hc(d, this.nameManager)),
                this.transformers.push(new Vc(d)),
                this.transformers.push(new Wc(d, this.nameManager))),
              s.includes('jsx') &&
                (f.jsxRuntime !== 'preserve' &&
                  this.transformers.push(
                    new Pt(this, d, b, this.nameManager, f),
                  ),
                this.transformers.push(new Yc(this, d, b, f)));
            let F = null;
            if (s.includes('react-hot-loader')) {
              if (!f.filePath)
                throw new Error(
                  'filePath is required when using the react-hot-loader transform.',
                );
              (F = new Ir(d, f.filePath)), this.transformers.push(F);
            }
            if (s.includes('imports')) {
              if (b === null)
                throw new Error(
                  'Expected non-null importProcessor with imports transform enabled.',
                );
              this.transformers.push(
                new un(
                  this,
                  d,
                  b,
                  this.nameManager,
                  this.helperManager,
                  F,
                  c,
                  !!f.enableLegacyTypeScriptModuleInterop,
                  s.includes('typescript'),
                  s.includes('flow'),
                  !!f.preserveDynamicImport,
                  !!f.keepUnusedImports,
                ),
              );
            } else
              this.transformers.push(
                new jc(
                  d,
                  this.nameManager,
                  this.helperManager,
                  F,
                  s.includes('typescript'),
                  s.includes('flow'),
                  !!f.keepUnusedImports,
                  f,
                ),
              );
            s.includes('flow') &&
              this.transformers.push(new qc(this, d, s.includes('imports'))),
              s.includes('typescript') &&
                this.transformers.push(new Xc(this, d, s.includes('imports'))),
              s.includes('jest') &&
                this.transformers.push(new wr(this, d, this.nameManager, b));
          }
          transform() {
            this.tokens.reset(), this.processBalancedCode();
            let s = this.isImportsTransformEnabled ? '"use strict";' : '';
            for (const b of this.transformers) s += b.getPrefixCode();
            (s += this.helperManager.emitHelpers()),
              (s += this.generatedVariables.map((b) => ` var ${b};`).join(''));
            for (const b of this.transformers) s += b.getHoistedCode();
            let c = '';
            for (const b of this.transformers) c += b.getSuffixCode();
            const f = this.tokens.finish();
            let { code: d } = f;
            if (d.startsWith('#!')) {
              let b = d.indexOf(`
`);
              return (
                b === -1 &&
                  ((b = d.length),
                  (d += `
`)),
                {
                  code: d.slice(0, b + 1) + s + d.slice(b + 1) + c,
                  mappings: this.shiftMappings(f.mappings, s.length),
                }
              );
            } else
              return {
                code: s + d + c,
                mappings: this.shiftMappings(f.mappings, s.length),
              };
          }
          processBalancedCode() {
            let n = 0,
              s = 0;
            for (; !this.tokens.isAtEnd(); ) {
              if (
                this.tokens.matches1(e.braceL) ||
                this.tokens.matches1(e.dollarBraceL)
              )
                n++;
              else if (this.tokens.matches1(e.braceR)) {
                if (n === 0) return;
                n--;
              }
              if (this.tokens.matches1(e.parenL)) s++;
              else if (this.tokens.matches1(e.parenR)) {
                if (s === 0) return;
                s--;
              }
              this.processToken();
            }
          }
          processToken() {
            if (this.tokens.matches1(e._class)) {
              this.processClass();
              return;
            }
            for (const n of this.transformers) if (n.process()) return;
            this.tokens.copyToken();
          }
          processNamedClass() {
            if (!this.tokens.matches2(e._class, e.name))
              throw new Error('Expected identifier for exported class name.');
            const n = this.tokens.identifierNameAtIndex(
              this.tokens.currentIndex() + 1,
            );
            return this.processClass(), n;
          }
          processClass() {
            const n = Oc(
                this,
                this.tokens,
                this.nameManager,
                this.disableESTransforms,
              ),
              s =
                (n.headerInfo.isExpression || !n.headerInfo.className) &&
                n.staticInitializerNames.length +
                  n.instanceInitializerNames.length >
                  0;
            let c = n.headerInfo.className;
            s &&
              ((c = this.nameManager.claimFreeName('_class')),
              this.generatedVariables.push(c),
              this.tokens.appendCode(` (${c} =`));
            const d = this.tokens.currentToken().contextId;
            if (d == null)
              throw new Error('Expected class to have a context ID.');
            for (
              this.tokens.copyExpectedToken(e._class);
              !this.tokens.matchesContextIdAndLabel(e.braceL, d);

            )
              this.processToken();
            this.processClassBody(n, c);
            const b = n.staticInitializerNames.map((F) => `${c}.${F}()`);
            s
              ? this.tokens.appendCode(
                  `, ${b.map((F) => `${F}, `).join('')}${c})`,
                )
              : n.staticInitializerNames.length > 0 &&
                this.tokens.appendCode(` ${b.map((F) => `${F};`).join(' ')}`);
          }
          processClassBody(n, s) {
            const {
              headerInfo: c,
              constructorInsertPos: f,
              constructorInitializerStatements: d,
              fields: b,
              instanceInitializerNames: F,
              rangesToRemove: J,
            } = n;
            let oe = 0,
              ye = 0;
            const pe = this.tokens.currentToken().contextId;
            if (pe == null)
              throw new Error('Expected non-null context ID on class.');
            this.tokens.copyExpectedToken(e.braceL),
              this.isReactHotLoaderTransformEnabled &&
                this.tokens.appendCode(
                  '__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}',
                );
            const ee = d.length + F.length > 0;
            if (f === null && ee) {
              const ke = this.makeConstructorInitCode(d, F, s);
              if (c.hasSuperclass) {
                const Pe = this.nameManager.claimFreeName('args');
                this.tokens.appendCode(
                  `constructor(...${Pe}) { super(...${Pe}); ${ke}; }`,
                );
              } else this.tokens.appendCode(`constructor() { ${ke}; }`);
            }
            for (; !this.tokens.matchesContextIdAndLabel(e.braceR, pe); )
              if (oe < b.length && this.tokens.currentIndex() === b[oe].start) {
                let ke = !1;
                for (
                  this.tokens.matches1(e.bracketL)
                    ? this.tokens.copyTokenWithPrefix(
                        `${b[oe].initializerName}() {this`,
                      )
                    : this.tokens.matches1(e.string) ||
                      this.tokens.matches1(e.num)
                    ? (this.tokens.copyTokenWithPrefix(
                        `${b[oe].initializerName}() {this[`,
                      ),
                      (ke = !0))
                    : this.tokens.copyTokenWithPrefix(
                        `${b[oe].initializerName}() {this.`,
                      );
                  this.tokens.currentIndex() < b[oe].end;

                )
                  ke &&
                    this.tokens.currentIndex() === b[oe].equalsIndex &&
                    this.tokens.appendCode(']'),
                    this.processToken();
                this.tokens.appendCode('}'), oe++;
              } else if (
                ye < J.length &&
                this.tokens.currentIndex() >= J[ye].start
              ) {
                for (
                  this.tokens.currentIndex() < J[ye].end &&
                  this.tokens.removeInitialToken();
                  this.tokens.currentIndex() < J[ye].end;

                )
                  this.tokens.removeToken();
                ye++;
              } else
                this.tokens.currentIndex() === f
                  ? (this.tokens.copyToken(),
                    ee &&
                      this.tokens.appendCode(
                        `;${this.makeConstructorInitCode(d, F, s)};`,
                      ),
                    this.processToken())
                  : this.processToken();
            this.tokens.copyExpectedToken(e.braceR);
          }
          makeConstructorInitCode(n, s, c) {
            return [
              ...n,
              ...s.map((f) => `${c}.prototype.${f}.call(this)`),
            ].join(';');
          }
          processPossibleArrowParamEnd() {
            if (
              this.tokens.matches2(e.parenR, e.colon) &&
              this.tokens.tokenAtRelativeIndex(1).isType
            ) {
              let n = this.tokens.currentIndex() + 1;
              for (; this.tokens.tokens[n].isType; ) n++;
              if (this.tokens.matches1AtIndex(n, e.arrow)) {
                for (
                  this.tokens.removeInitialToken();
                  this.tokens.currentIndex() < n;

                )
                  this.tokens.removeToken();
                return (
                  this.tokens.replaceTokenTrimmingLeftWhitespace(') =>'), !0
                );
              }
            }
            return !1;
          }
          processPossibleAsyncArrowWithTypeParams() {
            if (
              !this.tokens.matchesContextual(u._async) &&
              !this.tokens.matches1(e._async)
            )
              return !1;
            const n = this.tokens.tokenAtRelativeIndex(1);
            if (n.type !== e.lessThan || !n.isType) return !1;
            let s = this.tokens.currentIndex() + 1;
            for (; this.tokens.tokens[s].isType; ) s++;
            if (this.tokens.matches1AtIndex(s, e.parenL)) {
              for (
                this.tokens.replaceToken('async ('),
                  this.tokens.removeInitialToken();
                this.tokens.currentIndex() < s;

              )
                this.tokens.removeToken();
              return (
                this.tokens.removeToken(),
                this.processBalancedCode(),
                this.processToken(),
                !0
              );
            }
            return !1;
          }
          processPossibleTypeRange() {
            if (this.tokens.currentToken().isType) {
              for (
                this.tokens.removeInitialToken();
                this.tokens.currentToken().isType;

              )
                this.tokens.removeToken();
              return !0;
            }
            return !1;
          }
          shiftMappings(n, s) {
            for (let c = 0; c < n.length; c++) {
              const f = n[c];
              f !== void 0 && (n[c] = f + s);
            }
            return n;
          }
        }
        var bl = $(17703);
        function Tl(t, n) {
          if (n.length === 0) return '';
          const s = Object.keys(n[0]).filter(
              (ee) =>
                ee !== 'type' &&
                ee !== 'value' &&
                ee !== 'start' &&
                ee !== 'end' &&
                ee !== 'loc',
            ),
            c = Object.keys(n[0].type).filter(
              (ee) => ee !== 'label' && ee !== 'keyword',
            ),
            f = ['Location', 'Label', 'Raw', ...s, ...c],
            d = new LinesAndColumns(t),
            b = [f, ...n.map(J)],
            F = f.map(() => 0);
          for (const ee of b)
            for (let ke = 0; ke < ee.length; ke++)
              F[ke] = Math.max(F[ke], ee[ke].length);
          return b.map((ee) => ee.map((ke, Pe) => ke.padEnd(F[Pe])).join(' '))
            .join(`
`);
          function J(ee) {
            const ke = t.slice(ee.start, ee.end);
            return [
              ye(ee.start, ee.end),
              formatTokenType(ee.type),
              zc(String(ke), 14),
              ...s.map((Pe) => oe(ee[Pe], Pe)),
              ...c.map((Pe) => oe(ee.type[Pe], Pe)),
            ];
          }
          function oe(ee, ke) {
            return ee === !0 ? ke : ee === !1 || ee === null ? '' : String(ee);
          }
          function ye(ee, ke) {
            return `${pe(ee)}-${pe(ke)}`;
          }
          function pe(ee) {
            const ke = d.locationForIndex(ee);
            return ke ? `${ke.line + 1}:${ke.column + 1}` : 'Unknown';
          }
        }
        function zc(t, n) {
          return t.length > n ? `${t.slice(0, n - 3)}...` : t;
        }
        function Jc(t) {
          const n = new Set();
          for (let s = 0; s < t.tokens.length; s++)
            t.matches1AtIndex(s, e._import) &&
              !t.matches3AtIndex(s, e._import, e.name, e.eq) &&
              Qc(t, s, n);
          return n;
        }
        function Qc(t, n, s) {
          n++,
            !t.matches1AtIndex(n, e.parenL) &&
              (t.matches1AtIndex(n, e.name) &&
                (s.add(t.identifierNameAtIndex(n)),
                n++,
                t.matches1AtIndex(n, e.comma) && n++),
              t.matches1AtIndex(n, e.star) &&
                ((n += 2), s.add(t.identifierNameAtIndex(n)), n++),
              t.matches1AtIndex(n, e.braceL) && (n++, Zc(t, n, s)));
        }
        function Zc(t, n, s) {
          for (;;) {
            if (t.matches1AtIndex(n, e.braceR)) return;
            const c = Jt(t, n);
            if (
              ((n = c.endIndex),
              c.isType || s.add(c.rightName),
              t.matches2AtIndex(n, e.comma, e.braceR))
            )
              return;
            if (t.matches1AtIndex(n, e.braceR)) return;
            if (t.matches1AtIndex(n, e.comma)) n++;
            else
              throw new Error(
                `Unexpected token: ${JSON.stringify(t.tokens[n])}`,
              );
          }
        }
        function El() {
          return '3.35.0';
        }
        function Kc(t, n) {
          mo(n);
          try {
            const s = H1(t, n),
              f = new On(
                s,
                n.transforms,
                !!n.enableLegacyBabel5ModuleInterop,
                n,
              ).transform();
            let d = { code: f.code };
            if (n.sourceMapOptions) {
              if (!n.filePath)
                throw new Error(
                  'filePath must be specified when generating a source map.',
                );
              d = Q1(J1({}, d), {
                sourceMap: ro(
                  f,
                  n.filePath,
                  n.sourceMapOptions,
                  t,
                  s.tokenProcessor.tokens,
                ),
              });
            }
            return d;
          } catch (s) {
            throw (
              (n.filePath &&
                (s.message = `Error transforming ${n.filePath}: ${s.message}`),
              s)
            );
          }
        }
        function Al(t, n) {
          const s = H1(t, n).tokenProcessor.tokens;
          return formatTokens(t, s);
        }
        function H1(t, n) {
          const s = n.transforms.includes('jsx'),
            c = n.transforms.includes('typescript'),
            f = n.transforms.includes('flow'),
            d = n.disableESTransforms === !0,
            b = Dc(t, s, c, f),
            F = b.tokens,
            J = b.scopes,
            oe = new Bn(t, F),
            ye = new gn(oe),
            pe = new ln(t, F, f, d, ye),
            ee = !!n.enableLegacyTypeScriptModuleInterop;
          let ke = null;
          return (
            n.transforms.includes('imports')
              ? ((ke = new Lt(
                  oe,
                  pe,
                  ee,
                  n,
                  n.transforms.includes('typescript'),
                  !!n.keepUnusedImports,
                  ye,
                )),
                ke.preprocessTokens(),
                Us(pe, J, ke.getGlobalNames()),
                n.transforms.includes('typescript') &&
                  !n.keepUnusedImports &&
                  ke.pruneTypeOnlyImports())
              : n.transforms.includes('typescript') &&
                !n.keepUnusedImports &&
                Us(pe, J, Jc(pe)),
            {
              tokenProcessor: pe,
              scopes: J,
              nameManager: oe,
              importProcessor: ke,
              helperManager: ye,
            }
          );
        }
        function br(t) {
          '@babel/helpers - typeof';
          return (
            (br =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      typeof Symbol == 'function' &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? 'symbol'
                      : typeof n;
                  }),
            br(t)
          );
        }
        function Tr() {
          'use strict';
          Tr = function () {
            return t;
          };
          var t = {},
            n = Object.prototype,
            s = n.hasOwnProperty,
            c =
              Object.defineProperty ||
              function (X, R, q) {
                X[R] = q.value;
              },
            f = typeof Symbol == 'function' ? Symbol : {},
            d = f.iterator || '@@iterator',
            b = f.asyncIterator || '@@asyncIterator',
            F = f.toStringTag || '@@toStringTag';
          function J(X, R, q) {
            return (
              Object.defineProperty(X, R, {
                value: q,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              X[R]
            );
          }
          try {
            J({}, '');
          } catch (X) {
            J = function (q, fe, xe) {
              return (q[fe] = xe);
            };
          }
          function oe(X, R, q, fe) {
            var xe = R && R.prototype instanceof ee ? R : ee,
              me = Object.create(xe.prototype),
              Oe = new dt(fe || []);
            return c(me, '_invoke', { value: vt(X, q, Oe) }), me;
          }
          function ye(X, R, q) {
            try {
              return { type: 'normal', arg: X.call(R, q) };
            } catch (fe) {
              return { type: 'throw', arg: fe };
            }
          }
          t.wrap = oe;
          var pe = {};
          function ee() {}
          function ke() {}
          function Pe() {}
          var Qe = {};
          J(Qe, d, function () {
            return this;
          });
          var We = Object.getPrototypeOf,
            et = We && We(We(kt([])));
          et && et !== n && s.call(et, d) && (Qe = et);
          var ze = (Pe.prototype = ee.prototype = Object.create(Qe));
          function lt(X) {
            ['next', 'throw', 'return'].forEach(function (R) {
              J(X, R, function (q) {
                return this._invoke(R, q);
              });
            });
          }
          function Je(X, R) {
            function q(xe, me, Oe, $e) {
              var Ve = ye(X[xe], X, me);
              if (Ve.type !== 'throw') {
                var st = Ve.arg,
                  tt = st.value;
                return tt && br(tt) == 'object' && s.call(tt, '__await')
                  ? R.resolve(tt.__await).then(
                      function (ot) {
                        q('next', ot, Oe, $e);
                      },
                      function (ot) {
                        q('throw', ot, Oe, $e);
                      },
                    )
                  : R.resolve(tt).then(
                      function (ot) {
                        (st.value = ot), Oe(st);
                      },
                      function (ot) {
                        return q('throw', ot, Oe, $e);
                      },
                    );
              }
              $e(Ve.arg);
            }
            var fe;
            c(this, '_invoke', {
              value: function (me, Oe) {
                function $e() {
                  return new R(function (Ve, st) {
                    q(me, Oe, Ve, st);
                  });
                }
                return (fe = fe ? fe.then($e, $e) : $e());
              },
            });
          }
          function vt(X, R, q) {
            var fe = 'suspendedStart';
            return function (xe, me) {
              if (fe === 'executing')
                throw new Error('Generator is already running');
              if (fe === 'completed') {
                if (xe === 'throw') throw me;
                return It();
              }
              for (q.method = xe, q.arg = me; ; ) {
                var Oe = q.delegate;
                if (Oe) {
                  var $e = wt(Oe, q);
                  if ($e) {
                    if ($e === pe) continue;
                    return $e;
                  }
                }
                if (q.method === 'next') q.sent = q._sent = q.arg;
                else if (q.method === 'throw') {
                  if (fe === 'suspendedStart')
                    throw ((fe = 'completed'), q.arg);
                  q.dispatchException(q.arg);
                } else q.method === 'return' && q.abrupt('return', q.arg);
                fe = 'executing';
                var Ve = ye(X, R, q);
                if (Ve.type === 'normal') {
                  if (
                    ((fe = q.done ? 'completed' : 'suspendedYield'),
                    Ve.arg === pe)
                  )
                    continue;
                  return { value: Ve.arg, done: q.done };
                }
                Ve.type === 'throw' &&
                  ((fe = 'completed'), (q.method = 'throw'), (q.arg = Ve.arg));
              }
            };
          }
          function wt(X, R) {
            var q = R.method,
              fe = X.iterator[q];
            if (fe === void 0)
              return (
                (R.delegate = null),
                (q === 'throw' &&
                  X.iterator.return &&
                  ((R.method = 'return'),
                  (R.arg = void 0),
                  wt(X, R),
                  R.method === 'throw')) ||
                  (q !== 'return' &&
                    ((R.method = 'throw'),
                    (R.arg = new TypeError(
                      "The iterator does not provide a '" + q + "' method",
                    )))),
                pe
              );
            var xe = ye(fe, X.iterator, R.arg);
            if (xe.type === 'throw')
              return (
                (R.method = 'throw'), (R.arg = xe.arg), (R.delegate = null), pe
              );
            var me = xe.arg;
            return me
              ? me.done
                ? ((R[X.resultName] = me.value),
                  (R.next = X.nextLoc),
                  R.method !== 'return' &&
                    ((R.method = 'next'), (R.arg = void 0)),
                  (R.delegate = null),
                  pe)
                : me
              : ((R.method = 'throw'),
                (R.arg = new TypeError('iterator result is not an object')),
                (R.delegate = null),
                pe);
          }
          function Nt(X) {
            var R = { tryLoc: X[0] };
            1 in X && (R.catchLoc = X[1]),
              2 in X && ((R.finallyLoc = X[2]), (R.afterLoc = X[3])),
              this.tryEntries.push(R);
          }
          function mt(X) {
            var R = X.completion || {};
            (R.type = 'normal'), delete R.arg, (X.completion = R);
          }
          function dt(X) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              X.forEach(Nt, this),
              this.reset(!0);
          }
          function kt(X) {
            if (X) {
              var R = X[d];
              if (R) return R.call(X);
              if (typeof X.next == 'function') return X;
              if (!isNaN(X.length)) {
                var q = -1,
                  fe = function xe() {
                    for (; ++q < X.length; )
                      if (s.call(X, q))
                        return (xe.value = X[q]), (xe.done = !1), xe;
                    return (xe.value = void 0), (xe.done = !0), xe;
                  };
                return (fe.next = fe);
              }
            }
            return { next: It };
          }
          function It() {
            return { value: void 0, done: !0 };
          }
          return (
            (ke.prototype = Pe),
            c(ze, 'constructor', { value: Pe, configurable: !0 }),
            c(Pe, 'constructor', { value: ke, configurable: !0 }),
            (ke.displayName = J(Pe, F, 'GeneratorFunction')),
            (t.isGeneratorFunction = function (X) {
              var R = typeof X == 'function' && X.constructor;
              return (
                !!R &&
                (R === ke || (R.displayName || R.name) === 'GeneratorFunction')
              );
            }),
            (t.mark = function (X) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(X, Pe)
                  : ((X.__proto__ = Pe), J(X, F, 'GeneratorFunction')),
                (X.prototype = Object.create(ze)),
                X
              );
            }),
            (t.awrap = function (X) {
              return { __await: X };
            }),
            lt(Je.prototype),
            J(Je.prototype, b, function () {
              return this;
            }),
            (t.AsyncIterator = Je),
            (t.async = function (X, R, q, fe, xe) {
              xe === void 0 && (xe = Promise);
              var me = new Je(oe(X, R, q, fe), xe);
              return t.isGeneratorFunction(R)
                ? me
                : me.next().then(function (Oe) {
                    return Oe.done ? Oe.value : me.next();
                  });
            }),
            lt(ze),
            J(ze, F, 'Generator'),
            J(ze, d, function () {
              return this;
            }),
            J(ze, 'toString', function () {
              return '[object Generator]';
            }),
            (t.keys = function (X) {
              var R = Object(X),
                q = [];
              for (var fe in R) q.push(fe);
              return (
                q.reverse(),
                function xe() {
                  for (; q.length; ) {
                    var me = q.pop();
                    if (me in R) return (xe.value = me), (xe.done = !1), xe;
                  }
                  return (xe.done = !0), xe;
                }
              );
            }),
            (t.values = kt),
            (dt.prototype = {
              constructor: dt,
              reset: function (R) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = void 0),
                  this.tryEntries.forEach(mt),
                  !R)
                )
                  for (var q in this)
                    q.charAt(0) === 't' &&
                      s.call(this, q) &&
                      !isNaN(+q.slice(1)) &&
                      (this[q] = void 0);
              },
              stop: function () {
                this.done = !0;
                var R = this.tryEntries[0].completion;
                if (R.type === 'throw') throw R.arg;
                return this.rval;
              },
              dispatchException: function (R) {
                if (this.done) throw R;
                var q = this;
                function fe(st, tt) {
                  return (
                    (Oe.type = 'throw'),
                    (Oe.arg = R),
                    (q.next = st),
                    tt && ((q.method = 'next'), (q.arg = void 0)),
                    !!tt
                  );
                }
                for (var xe = this.tryEntries.length - 1; xe >= 0; --xe) {
                  var me = this.tryEntries[xe],
                    Oe = me.completion;
                  if (me.tryLoc === 'root') return fe('end');
                  if (me.tryLoc <= this.prev) {
                    var $e = s.call(me, 'catchLoc'),
                      Ve = s.call(me, 'finallyLoc');
                    if ($e && Ve) {
                      if (this.prev < me.catchLoc) return fe(me.catchLoc, !0);
                      if (this.prev < me.finallyLoc) return fe(me.finallyLoc);
                    } else if ($e) {
                      if (this.prev < me.catchLoc) return fe(me.catchLoc, !0);
                    } else {
                      if (!Ve)
                        throw new Error(
                          'try statement without catch or finally',
                        );
                      if (this.prev < me.finallyLoc) return fe(me.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (R, q) {
                for (var fe = this.tryEntries.length - 1; fe >= 0; --fe) {
                  var xe = this.tryEntries[fe];
                  if (
                    xe.tryLoc <= this.prev &&
                    s.call(xe, 'finallyLoc') &&
                    this.prev < xe.finallyLoc
                  ) {
                    var me = xe;
                    break;
                  }
                }
                me &&
                  (R === 'break' || R === 'continue') &&
                  me.tryLoc <= q &&
                  q <= me.finallyLoc &&
                  (me = null);
                var Oe = me ? me.completion : {};
                return (
                  (Oe.type = R),
                  (Oe.arg = q),
                  me
                    ? ((this.method = 'next'), (this.next = me.finallyLoc), pe)
                    : this.complete(Oe)
                );
              },
              complete: function (R, q) {
                if (R.type === 'throw') throw R.arg;
                return (
                  R.type === 'break' || R.type === 'continue'
                    ? (this.next = R.arg)
                    : R.type === 'return'
                    ? ((this.rval = this.arg = R.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : R.type === 'normal' && q && (this.next = q),
                  pe
                );
              },
              finish: function (R) {
                for (var q = this.tryEntries.length - 1; q >= 0; --q) {
                  var fe = this.tryEntries[q];
                  if (fe.finallyLoc === R)
                    return (
                      this.complete(fe.completion, fe.afterLoc), mt(fe), pe
                    );
                }
              },
              catch: function (R) {
                for (var q = this.tryEntries.length - 1; q >= 0; --q) {
                  var fe = this.tryEntries[q];
                  if (fe.tryLoc === R) {
                    var xe = fe.completion;
                    if (xe.type === 'throw') {
                      var me = xe.arg;
                      mt(fe);
                    }
                    return me;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (R, q, fe) {
                return (
                  (this.delegate = {
                    iterator: kt(R),
                    resultName: q,
                    nextLoc: fe,
                  }),
                  this.method === 'next' && (this.arg = void 0),
                  pe
                );
              },
            }),
            t
          );
        }
        function Y1(t, n, s, c, f, d, b) {
          try {
            var F = t[d](b),
              J = F.value;
          } catch (oe) {
            s(oe);
            return;
          }
          F.done ? n(J) : Promise.resolve(J).then(c, f);
        }
        function el(t) {
          return function () {
            var n = this,
              s = arguments;
            return new Promise(function (c, f) {
              var d = t.apply(n, s);
              function b(J) {
                Y1(d, c, f, b, F, 'next', J);
              }
              function F(J) {
                Y1(d, c, f, b, F, 'throw', J);
              }
              b(void 0);
            });
          };
        }
        var tl = (function () {
            var t = el(
              Tr().mark(function n(s) {
                return Tr().wrap(function (f) {
                  for (;;)
                    switch ((f.prev = f.next)) {
                      case 0:
                        return f.abrupt(
                          'return',
                          Kc(s, {
                            transforms: ['typescript', 'jsx', 'imports'],
                          }).code,
                        );
                      case 1:
                      case 'end':
                        return f.stop();
                    }
                }, n);
              }),
            );
            return function (s) {
              return t.apply(this, arguments);
            };
          })(),
          nl = tl;
      },
      30551: function (Re, w) {
        (w.read = function ($, u, e, ge, L) {
          var W,
            A,
            h = L * 8 - ge - 1,
            m = (1 << h) - 1,
            N = m >> 1,
            E = -7,
            D = e ? L - 1 : 0,
            r = e ? -1 : 1,
            x = $[u + D];
          for (
            D += r, W = x & ((1 << -E) - 1), x >>= -E, E += h;
            E > 0;
            W = W * 256 + $[u + D], D += r, E -= 8
          );
          for (
            A = W & ((1 << -E) - 1), W >>= -E, E += ge;
            E > 0;
            A = A * 256 + $[u + D], D += r, E -= 8
          );
          if (W === 0) W = 1 - N;
          else {
            if (W === m) return A ? NaN : (x ? -1 : 1) * (1 / 0);
            (A = A + Math.pow(2, ge)), (W = W - N);
          }
          return (x ? -1 : 1) * A * Math.pow(2, W - ge);
        }),
          (w.write = function ($, u, e, ge, L, W) {
            var A,
              h,
              m,
              N = W * 8 - L - 1,
              E = (1 << N) - 1,
              D = E >> 1,
              r = L === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              x = ge ? 0 : W - 1,
              ie = ge ? 1 : -1,
              B = u < 0 || (u === 0 && 1 / u < 0) ? 1 : 0;
            for (
              u = Math.abs(u),
                isNaN(u) || u === 1 / 0
                  ? ((h = isNaN(u) ? 1 : 0), (A = E))
                  : ((A = Math.floor(Math.log(u) / Math.LN2)),
                    u * (m = Math.pow(2, -A)) < 1 && (A--, (m *= 2)),
                    A + D >= 1 ? (u += r / m) : (u += r * Math.pow(2, 1 - D)),
                    u * m >= 2 && (A++, (m /= 2)),
                    A + D >= E
                      ? ((h = 0), (A = E))
                      : A + D >= 1
                      ? ((h = (u * m - 1) * Math.pow(2, L)), (A = A + D))
                      : ((h = u * Math.pow(2, D - 1) * Math.pow(2, L)),
                        (A = 0)));
              L >= 8;
              $[e + x] = h & 255, x += ie, h /= 256, L -= 8
            );
            for (
              A = (A << L) | h, N += L;
              N > 0;
              $[e + x] = A & 255, x += ie, A /= 256, N -= 8
            );
            $[e + x - ie] |= B * 128;
          });
      },
      79673: function (Re) {
        var w = {}.toString;
        Re.exports =
          Array.isArray ||
          function ($) {
            return w.call($) == '[object Array]';
          };
      },
      17703: function (Re, w) {
        'use strict';
        var $;
        ($ = !0), ($ = void 0);
        var u = `
`,
          e = '\r',
          ge = (function () {
            function L(W) {
              this.string = W;
              for (var A = [0], h = 0; h < W.length; )
                switch (W[h]) {
                  case u:
                    (h += u.length), A.push(h);
                    break;
                  case e:
                    (h += e.length), W[h] === u && (h += u.length), A.push(h);
                    break;
                  default:
                    h++;
                    break;
                }
              this.offsets = A;
            }
            return (
              (L.prototype.locationForIndex = function (W) {
                if (W < 0 || W > this.string.length) return null;
                for (var A = 0, h = this.offsets; h[A + 1] <= W; ) A++;
                var m = W - h[A];
                return { line: A, column: m };
              }),
              (L.prototype.indexForLocation = function (W) {
                var A = W.line,
                  h = W.column;
                return A < 0 ||
                  A >= this.offsets.length ||
                  h < 0 ||
                  h > this.lengthOfLine(A)
                  ? null
                  : this.offsets[A] + h;
              }),
              (L.prototype.lengthOfLine = function (W) {
                var A = this.offsets[W],
                  h =
                    W === this.offsets.length - 1
                      ? this.string.length
                      : this.offsets[W + 1];
                return h - A;
              }),
              L
            );
          })();
        ($ = ge), ($ = ge);
      },
      59541: function (Re, w, $) {
        'use strict';
        var u =
          (this && this.__spreadArrays) ||
          function () {
            for (var m = 0, N = 0, E = arguments.length; N < E; N++)
              m += arguments[N].length;
            for (var D = Array(m), r = 0, N = 0; N < E; N++)
              for (
                var x = arguments[N], ie = 0, B = x.length;
                ie < B;
                ie++, r++
              )
                D[r] = x[ie];
            return D;
          };
        Object.defineProperty(w, '__esModule', { value: !0 }),
          (w.Checker = w.createCheckers = void 0);
        var e = $(64502),
          ge = $(44725),
          L = $(64502);
        Object.defineProperty(w, 'TArray', {
          enumerable: !0,
          get: function () {
            return L.TArray;
          },
        }),
          Object.defineProperty(w, 'TEnumType', {
            enumerable: !0,
            get: function () {
              return L.TEnumType;
            },
          }),
          Object.defineProperty(w, 'TEnumLiteral', {
            enumerable: !0,
            get: function () {
              return L.TEnumLiteral;
            },
          }),
          Object.defineProperty(w, 'TFunc', {
            enumerable: !0,
            get: function () {
              return L.TFunc;
            },
          }),
          Object.defineProperty(w, 'TIface', {
            enumerable: !0,
            get: function () {
              return L.TIface;
            },
          }),
          Object.defineProperty(w, 'TLiteral', {
            enumerable: !0,
            get: function () {
              return L.TLiteral;
            },
          }),
          Object.defineProperty(w, 'TName', {
            enumerable: !0,
            get: function () {
              return L.TName;
            },
          }),
          Object.defineProperty(w, 'TOptional', {
            enumerable: !0,
            get: function () {
              return L.TOptional;
            },
          }),
          Object.defineProperty(w, 'TParam', {
            enumerable: !0,
            get: function () {
              return L.TParam;
            },
          }),
          Object.defineProperty(w, 'TParamList', {
            enumerable: !0,
            get: function () {
              return L.TParamList;
            },
          }),
          Object.defineProperty(w, 'TProp', {
            enumerable: !0,
            get: function () {
              return L.TProp;
            },
          }),
          Object.defineProperty(w, 'TTuple', {
            enumerable: !0,
            get: function () {
              return L.TTuple;
            },
          }),
          Object.defineProperty(w, 'TType', {
            enumerable: !0,
            get: function () {
              return L.TType;
            },
          }),
          Object.defineProperty(w, 'TUnion', {
            enumerable: !0,
            get: function () {
              return L.TUnion;
            },
          }),
          Object.defineProperty(w, 'TIntersection', {
            enumerable: !0,
            get: function () {
              return L.TIntersection;
            },
          }),
          Object.defineProperty(w, 'array', {
            enumerable: !0,
            get: function () {
              return L.array;
            },
          }),
          Object.defineProperty(w, 'enumlit', {
            enumerable: !0,
            get: function () {
              return L.enumlit;
            },
          }),
          Object.defineProperty(w, 'enumtype', {
            enumerable: !0,
            get: function () {
              return L.enumtype;
            },
          }),
          Object.defineProperty(w, 'func', {
            enumerable: !0,
            get: function () {
              return L.func;
            },
          }),
          Object.defineProperty(w, 'iface', {
            enumerable: !0,
            get: function () {
              return L.iface;
            },
          }),
          Object.defineProperty(w, 'lit', {
            enumerable: !0,
            get: function () {
              return L.lit;
            },
          }),
          Object.defineProperty(w, 'name', {
            enumerable: !0,
            get: function () {
              return L.name;
            },
          }),
          Object.defineProperty(w, 'opt', {
            enumerable: !0,
            get: function () {
              return L.opt;
            },
          }),
          Object.defineProperty(w, 'param', {
            enumerable: !0,
            get: function () {
              return L.param;
            },
          }),
          Object.defineProperty(w, 'tuple', {
            enumerable: !0,
            get: function () {
              return L.tuple;
            },
          }),
          Object.defineProperty(w, 'union', {
            enumerable: !0,
            get: function () {
              return L.union;
            },
          }),
          Object.defineProperty(w, 'intersection', {
            enumerable: !0,
            get: function () {
              return L.intersection;
            },
          }),
          Object.defineProperty(w, 'BasicType', {
            enumerable: !0,
            get: function () {
              return L.BasicType;
            },
          });
        var W = $(44725);
        Object.defineProperty(w, 'VError', {
          enumerable: !0,
          get: function () {
            return W.VError;
          },
        });
        function A() {
          for (var m = [], N = 0; N < arguments.length; N++)
            m[N] = arguments[N];
          for (
            var E = Object.assign.apply(Object, u([{}, e.basicTypes], m)),
              D = {},
              r = 0,
              x = m;
            r < x.length;
            r++
          )
            for (var ie = x[r], B = 0, Z = Object.keys(ie); B < Z.length; B++) {
              var C = Z[B];
              D[C] = new h(E, ie[C]);
            }
          return D;
        }
        w.createCheckers = A;
        var h = (function () {
          function m(N, E, D) {
            if (
              (D === void 0 && (D = 'value'),
              (this.suite = N),
              (this.ttype = E),
              (this._path = D),
              (this.props = new Map()),
              E instanceof e.TIface)
            )
              for (var r = 0, x = E.props; r < x.length; r++) {
                var ie = x[r];
                this.props.set(ie.name, ie.ttype);
              }
            (this.checkerPlain = this.ttype.getChecker(N, !1)),
              (this.checkerStrict = this.ttype.getChecker(N, !0));
          }
          return (
            (m.prototype.setReportedPath = function (N) {
              this._path = N;
            }),
            (m.prototype.check = function (N) {
              return this._doCheck(this.checkerPlain, N);
            }),
            (m.prototype.test = function (N) {
              return this.checkerPlain(N, new ge.NoopContext());
            }),
            (m.prototype.validate = function (N) {
              return this._doValidate(this.checkerPlain, N);
            }),
            (m.prototype.strictCheck = function (N) {
              return this._doCheck(this.checkerStrict, N);
            }),
            (m.prototype.strictTest = function (N) {
              return this.checkerStrict(N, new ge.NoopContext());
            }),
            (m.prototype.strictValidate = function (N) {
              return this._doValidate(this.checkerStrict, N);
            }),
            (m.prototype.getProp = function (N) {
              var E = this.props.get(N);
              if (!E) throw new Error('Type has no property ' + N);
              return new m(this.suite, E, this._path + '.' + N);
            }),
            (m.prototype.methodArgs = function (N) {
              var E = this._getMethod(N);
              return new m(this.suite, E.paramList);
            }),
            (m.prototype.methodResult = function (N) {
              var E = this._getMethod(N);
              return new m(this.suite, E.result);
            }),
            (m.prototype.getArgs = function () {
              if (!(this.ttype instanceof e.TFunc))
                throw new Error('getArgs() applied to non-function');
              return new m(this.suite, this.ttype.paramList);
            }),
            (m.prototype.getResult = function () {
              if (!(this.ttype instanceof e.TFunc))
                throw new Error('getResult() applied to non-function');
              return new m(this.suite, this.ttype.result);
            }),
            (m.prototype.getType = function () {
              return this.ttype;
            }),
            (m.prototype._doCheck = function (N, E) {
              var D = new ge.NoopContext();
              if (!N(E, D)) {
                var r = new ge.DetailContext();
                throw (N(E, r), r.getError(this._path));
              }
            }),
            (m.prototype._doValidate = function (N, E) {
              var D = new ge.NoopContext();
              if (N(E, D)) return null;
              var r = new ge.DetailContext();
              return N(E, r), r.getErrorDetail(this._path);
            }),
            (m.prototype._getMethod = function (N) {
              var E = this.props.get(N);
              if (!E) throw new Error('Type has no property ' + N);
              if (!(E instanceof e.TFunc))
                throw new Error('Property ' + N + ' is not a method');
              return E;
            }),
            m
          );
        })();
        w.Checker = h;
      },
      64502: function (Re, w, $) {
        'use strict';
        var u = $(36379).lW,
          e =
            (this && this.__extends) ||
            (function () {
              var T = function (S, P) {
                return (
                  (T =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (M, G) {
                        M.__proto__ = G;
                      }) ||
                    function (M, G) {
                      for (var ae in G) G.hasOwnProperty(ae) && (M[ae] = G[ae]);
                    }),
                  T(S, P)
                );
              };
              return function (S, P) {
                T(S, P);
                function M() {
                  this.constructor = S;
                }
                S.prototype =
                  P === null
                    ? Object.create(P)
                    : ((M.prototype = P.prototype), new M());
              };
            })();
        Object.defineProperty(w, '__esModule', { value: !0 }),
          (w.basicTypes =
            w.BasicType =
            w.TParamList =
            w.TParam =
            w.param =
            w.TFunc =
            w.func =
            w.TProp =
            w.TOptional =
            w.opt =
            w.TIface =
            w.iface =
            w.TEnumLiteral =
            w.enumlit =
            w.TEnumType =
            w.enumtype =
            w.TIntersection =
            w.intersection =
            w.TUnion =
            w.union =
            w.TTuple =
            w.tuple =
            w.TArray =
            w.array =
            w.TLiteral =
            w.lit =
            w.TName =
            w.name =
            w.TType =
              void 0);
        var ge = $(44725),
          L = (function () {
            function T() {}
            return T;
          })();
        w.TType = L;
        function W(T) {
          return typeof T == 'string' ? h(T) : T;
        }
        function A(T, S) {
          var P = T[S];
          if (!P) throw new Error('Unknown type ' + S);
          return P;
        }
        function h(T) {
          return new m(T);
        }
        w.name = h;
        var m = (function (T) {
          e(S, T);
          function S(P) {
            var M = T.call(this) || this;
            return (M.name = P), (M._failMsg = 'is not a ' + P), M;
          }
          return (
            (S.prototype.getChecker = function (P, M, G) {
              var ae = this,
                _ = A(P, this.name),
                Te = _.getChecker(P, M, G);
              return _ instanceof z || _ instanceof S
                ? Te
                : function (Me, Q) {
                    return Te(Me, Q) ? !0 : Q.fail(null, ae._failMsg, 0);
                  };
            }),
            S
          );
        })(L);
        w.TName = m;
        function N(T) {
          return new E(T);
        }
        w.lit = N;
        var E = (function (T) {
          e(S, T);
          function S(P) {
            var M = T.call(this) || this;
            return (
              (M.value = P),
              (M.name = JSON.stringify(P)),
              (M._failMsg = 'is not ' + M.name),
              M
            );
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = this;
              return function (ae, _) {
                return ae === G.value ? !0 : _.fail(null, G._failMsg, -1);
              };
            }),
            S
          );
        })(L);
        w.TLiteral = E;
        function D(T) {
          return new r(W(T));
        }
        w.array = D;
        var r = (function (T) {
          e(S, T);
          function S(P) {
            var M = T.call(this) || this;
            return (M.ttype = P), M;
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = this.ttype.getChecker(P, M);
              return function (ae, _) {
                if (!Array.isArray(ae))
                  return _.fail(null, 'is not an array', 0);
                for (var Te = 0; Te < ae.length; Te++) {
                  var Me = G(ae[Te], _);
                  if (!Me) return _.fail(Te, null, 1);
                }
                return !0;
              };
            }),
            S
          );
        })(L);
        w.TArray = r;
        function x() {
          for (var T = [], S = 0; S < arguments.length; S++)
            T[S] = arguments[S];
          return new ie(
            T.map(function (P) {
              return W(P);
            }),
          );
        }
        w.tuple = x;
        var ie = (function (T) {
          e(S, T);
          function S(P) {
            var M = T.call(this) || this;
            return (M.ttypes = P), M;
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = this.ttypes.map(function (_) {
                  return _.getChecker(P, M);
                }),
                ae = function (_, Te) {
                  if (!Array.isArray(_))
                    return Te.fail(null, 'is not an array', 0);
                  for (var Me = 0; Me < G.length; Me++) {
                    var Q = G[Me](_[Me], Te);
                    if (!Q) return Te.fail(Me, null, 1);
                  }
                  return !0;
                };
              return M
                ? function (_, Te) {
                    return ae(_, Te)
                      ? _.length <= G.length
                        ? !0
                        : Te.fail(G.length, 'is extraneous', 2)
                      : !1;
                  }
                : ae;
            }),
            S
          );
        })(L);
        w.TTuple = ie;
        function B() {
          for (var T = [], S = 0; S < arguments.length; S++)
            T[S] = arguments[S];
          return new Z(
            T.map(function (P) {
              return W(P);
            }),
          );
        }
        w.union = B;
        var Z = (function (T) {
          e(S, T);
          function S(P) {
            var M = T.call(this) || this;
            M.ttypes = P;
            var G = P.map(function (_) {
                return _ instanceof m || _ instanceof E ? _.name : null;
              }).filter(function (_) {
                return _;
              }),
              ae = P.length - G.length;
            return (
              G.length
                ? (ae > 0 && G.push(ae + ' more'),
                  (M._failMsg = 'is none of ' + G.join(', ')))
                : (M._failMsg = 'is none of ' + ae + ' types'),
              M
            );
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = this,
                ae = this.ttypes.map(function (_) {
                  return _.getChecker(P, M);
                });
              return function (_, Te) {
                for (var Me = Te.unionResolver(), Q = 0; Q < ae.length; Q++) {
                  var ne = ae[Q](_, Me.createContext());
                  if (ne) return !0;
                }
                return Te.resolveUnion(Me), Te.fail(null, G._failMsg, 0);
              };
            }),
            S
          );
        })(L);
        w.TUnion = Z;
        function C() {
          for (var T = [], S = 0; S < arguments.length; S++)
            T[S] = arguments[S];
          return new j(
            T.map(function (P) {
              return W(P);
            }),
          );
        }
        w.intersection = C;
        var j = (function (T) {
          e(S, T);
          function S(P) {
            var M = T.call(this) || this;
            return (M.ttypes = P), M;
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = new Set(),
                ae = this.ttypes.map(function (_) {
                  return _.getChecker(P, M, G);
                });
              return function (_, Te) {
                var Me = ae.every(function (Q) {
                  return Q(_, Te);
                });
                return Me ? !0 : Te.fail(null, null, 0);
              };
            }),
            S
          );
        })(L);
        w.TIntersection = j;
        function le(T) {
          return new v(T);
        }
        w.enumtype = le;
        var v = (function (T) {
          e(S, T);
          function S(P) {
            var M = T.call(this) || this;
            return (
              (M.members = P),
              (M.validValues = new Set()),
              (M._failMsg = 'is not a valid enum value'),
              (M.validValues = new Set(
                Object.keys(P).map(function (G) {
                  return P[G];
                }),
              )),
              M
            );
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = this;
              return function (ae, _) {
                return G.validValues.has(ae) ? !0 : _.fail(null, G._failMsg, 0);
              };
            }),
            S
          );
        })(L);
        w.TEnumType = v;
        function K(T, S) {
          return new _e(T, S);
        }
        w.enumlit = K;
        var _e = (function (T) {
          e(S, T);
          function S(P, M) {
            var G = T.call(this) || this;
            return (
              (G.enumName = P),
              (G.prop = M),
              (G._failMsg = 'is not ' + P + '.' + M),
              G
            );
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = this,
                ae = A(P, this.enumName);
              if (!(ae instanceof v))
                throw new Error(
                  'Type ' +
                    this.enumName +
                    ' used in enumlit is not an enum type',
                );
              var _ = ae.members[this.prop];
              if (!ae.members.hasOwnProperty(this.prop))
                throw new Error(
                  'Unknown value ' +
                    this.enumName +
                    '.' +
                    this.prop +
                    ' used in enumlit',
                );
              return function (Te, Me) {
                return Te === _ ? !0 : Me.fail(null, G._failMsg, -1);
              };
            }),
            S
          );
        })(L);
        w.TEnumLiteral = _e;
        function Y(T) {
          return Object.keys(T).map(function (S) {
            return Ae(S, T[S]);
          });
        }
        function Ae(T, S) {
          return S instanceof Ie ? new I(T, S.ttype, !0) : new I(T, W(S), !1);
        }
        function Ee(T, S) {
          return new Ue(T, Y(S));
        }
        w.iface = Ee;
        var Ue = (function (T) {
          e(S, T);
          function S(P, M) {
            var G = T.call(this) || this;
            return (
              (G.bases = P),
              (G.props = M),
              (G.propSet = new Set(
                M.map(function (ae) {
                  return ae.name;
                }),
              )),
              G
            );
          }
          return (
            (S.prototype.getChecker = function (P, M, G) {
              var ae = this,
                _ = this.bases.map(function (De) {
                  return A(P, De).getChecker(P, M);
                }),
                Te = this.props.map(function (De) {
                  return De.ttype.getChecker(P, M);
                }),
                Me = new ge.NoopContext(),
                Q = this.props.map(function (De, o) {
                  return !De.isOpt && !Te[o](void 0, Me);
                }),
                ne = function (De, o) {
                  if (typeof De != 'object' || De === null)
                    return o.fail(null, 'is not an object', 0);
                  for (var i = 0; i < _.length; i++)
                    if (!_[i](De, o)) return !1;
                  for (var i = 0; i < Te.length; i++) {
                    var a = ae.props[i].name,
                      l = De[a];
                    if (l === void 0) {
                      if (Q[i]) return o.fail(a, 'is missing', 1);
                    } else {
                      var p = Te[i](l, o);
                      if (!p) return o.fail(a, null, 1);
                    }
                  }
                  return !0;
                };
              if (!M) return ne;
              var y = this.propSet;
              return (
                G &&
                  (this.propSet.forEach(function (De) {
                    return G.add(De);
                  }),
                  (y = G)),
                function (De, o) {
                  if (!ne(De, o)) return !1;
                  for (var i in De)
                    if (!y.has(i)) return o.fail(i, 'is extraneous', 2);
                  return !0;
                }
              );
            }),
            S
          );
        })(L);
        w.TIface = Ue;
        function Le(T) {
          return new Ie(W(T));
        }
        w.opt = Le;
        var Ie = (function (T) {
          e(S, T);
          function S(P) {
            var M = T.call(this) || this;
            return (M.ttype = P), M;
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = this.ttype.getChecker(P, M);
              return function (ae, _) {
                return ae === void 0 || G(ae, _);
              };
            }),
            S
          );
        })(L);
        w.TOptional = Ie;
        var I = (function () {
          function T(S, P, M) {
            (this.name = S), (this.ttype = P), (this.isOpt = M);
          }
          return T;
        })();
        w.TProp = I;
        function he(T) {
          for (var S = [], P = 1; P < arguments.length; P++)
            S[P - 1] = arguments[P];
          return new Ze(new ue(S), W(T));
        }
        w.func = he;
        var Ze = (function (T) {
          e(S, T);
          function S(P, M) {
            var G = T.call(this) || this;
            return (G.paramList = P), (G.result = M), G;
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              return function (G, ae) {
                return typeof G == 'function'
                  ? !0
                  : ae.fail(null, 'is not a function', 0);
              };
            }),
            S
          );
        })(L);
        w.TFunc = Ze;
        function se(T, S, P) {
          return new te(T, W(S), !!P);
        }
        w.param = se;
        var te = (function () {
          function T(S, P, M) {
            (this.name = S), (this.ttype = P), (this.isOpt = M);
          }
          return T;
        })();
        w.TParam = te;
        var ue = (function (T) {
          e(S, T);
          function S(P) {
            var M = T.call(this) || this;
            return (M.params = P), M;
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = this,
                ae = this.params.map(function (Q) {
                  return Q.ttype.getChecker(P, M);
                }),
                _ = new ge.NoopContext(),
                Te = this.params.map(function (Q, ne) {
                  return !Q.isOpt && !ae[ne](void 0, _);
                }),
                Me = function (Q, ne) {
                  if (!Array.isArray(Q))
                    return ne.fail(null, 'is not an array', 0);
                  for (var y = 0; y < ae.length; y++) {
                    var De = G.params[y];
                    if (Q[y] === void 0) {
                      if (Te[y]) return ne.fail(De.name, 'is missing', 1);
                    } else {
                      var o = ae[y](Q[y], ne);
                      if (!o) return ne.fail(De.name, null, 1);
                    }
                  }
                  return !0;
                };
              return M
                ? function (Q, ne) {
                    return Me(Q, ne)
                      ? Q.length <= ae.length
                        ? !0
                        : ne.fail(ae.length, 'is extraneous', 2)
                      : !1;
                  }
                : Me;
            }),
            S
          );
        })(L);
        w.TParamList = ue;
        var z = (function (T) {
          e(S, T);
          function S(P, M) {
            var G = T.call(this) || this;
            return (G.validator = P), (G.message = M), G;
          }
          return (
            (S.prototype.getChecker = function (P, M) {
              var G = this;
              return function (ae, _) {
                return G.validator(ae) ? !0 : _.fail(null, G.message, 0);
              };
            }),
            S
          );
        })(L);
        (w.BasicType = z),
          (w.basicTypes = {
            any: new z(function (T) {
              return !0;
            }, 'is invalid'),
            number: new z(function (T) {
              return typeof T == 'number';
            }, 'is not a number'),
            object: new z(function (T) {
              return typeof T == 'object' && T;
            }, 'is not an object'),
            boolean: new z(function (T) {
              return typeof T == 'boolean';
            }, 'is not a boolean'),
            string: new z(function (T) {
              return typeof T == 'string';
            }, 'is not a string'),
            symbol: new z(function (T) {
              return typeof T == 'symbol';
            }, 'is not a symbol'),
            void: new z(function (T) {
              return T == null;
            }, 'is not void'),
            undefined: new z(function (T) {
              return T === void 0;
            }, 'is not undefined'),
            null: new z(function (T) {
              return T === null;
            }, 'is not null'),
            never: new z(function (T) {
              return !1;
            }, 'is unexpected'),
            Date: new z(Ne('[object Date]'), 'is not a Date'),
            RegExp: new z(Ne('[object RegExp]'), 'is not a RegExp'),
          });
        var ve = Object.prototype.toString;
        function Ne(T) {
          return function (S) {
            return typeof S == 'object' && S && ve.call(S) === T;
          };
        }
        typeof u != 'undefined' &&
          (w.basicTypes.Buffer = new z(function (T) {
            return u.isBuffer(T);
          }, 'is not a Buffer'));
        for (
          var we = function (T) {
              w.basicTypes[T.name] = new z(function (S) {
                return S instanceof T;
              }, 'is not a ' + T.name);
            },
            O = 0,
            Se = [
              Int8Array,
              Uint8Array,
              Uint8ClampedArray,
              Int16Array,
              Uint16Array,
              Int32Array,
              Uint32Array,
              Float32Array,
              Float64Array,
              ArrayBuffer,
            ];
          O < Se.length;
          O++
        ) {
          var Ke = Se[O];
          we(Ke);
        }
      },
      44725: function (Re, w) {
        'use strict';
        var $ =
          (this && this.__extends) ||
          (function () {
            var W = function (A, h) {
              return (
                (W =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (m, N) {
                      m.__proto__ = N;
                    }) ||
                  function (m, N) {
                    for (var E in N) N.hasOwnProperty(E) && (m[E] = N[E]);
                  }),
                W(A, h)
              );
            };
            return function (A, h) {
              W(A, h);
              function m() {
                this.constructor = A;
              }
              A.prototype =
                h === null
                  ? Object.create(h)
                  : ((m.prototype = h.prototype), new m());
            };
          })();
        Object.defineProperty(w, '__esModule', { value: !0 }),
          (w.DetailContext = w.NoopContext = w.VError = void 0);
        var u = (function (W) {
          $(A, W);
          function A(h, m) {
            var N = W.call(this, m) || this;
            return (N.path = h), Object.setPrototypeOf(N, A.prototype), N;
          }
          return A;
        })(Error);
        w.VError = u;
        var e = (function () {
          function W() {}
          return (
            (W.prototype.fail = function (A, h, m) {
              return !1;
            }),
            (W.prototype.unionResolver = function () {
              return this;
            }),
            (W.prototype.createContext = function () {
              return this;
            }),
            (W.prototype.resolveUnion = function (A) {}),
            W
          );
        })();
        w.NoopContext = e;
        var ge = (function () {
          function W() {
            (this._propNames = ['']),
              (this._messages = [null]),
              (this._score = 0);
          }
          return (
            (W.prototype.fail = function (A, h, m) {
              return (
                this._propNames.push(A),
                this._messages.push(h),
                (this._score += m),
                !1
              );
            }),
            (W.prototype.unionResolver = function () {
              return new L();
            }),
            (W.prototype.resolveUnion = function (A) {
              for (
                var h, m, N = A, E = null, D = 0, r = N.contexts;
                D < r.length;
                D++
              ) {
                var x = r[D];
                (!E || x._score >= E._score) && (E = x);
              }
              E &&
                E._score > 0 &&
                ((h = this._propNames).push.apply(h, E._propNames),
                (m = this._messages).push.apply(m, E._messages));
            }),
            (W.prototype.getError = function (A) {
              for (var h = [], m = this._propNames.length - 1; m >= 0; m--) {
                var N = this._propNames[m];
                A += typeof N == 'number' ? '[' + N + ']' : N ? '.' + N : '';
                var E = this._messages[m];
                E && h.push(A + ' ' + E);
              }
              return new u(A, h.join('; '));
            }),
            (W.prototype.getErrorDetail = function (A) {
              for (var h = [], m = this._propNames.length - 1; m >= 0; m--) {
                var N = this._propNames[m];
                A += typeof N == 'number' ? '[' + N + ']' : N ? '.' + N : '';
                var E = this._messages[m];
                E && h.push({ path: A, message: E });
              }
              for (var D = null, m = h.length - 1; m >= 0; m--)
                D && (h[m].nested = [D]), (D = h[m]);
              return D;
            }),
            W
          );
        })();
        w.DetailContext = ge;
        var L = (function () {
          function W() {
            this.contexts = [];
          }
          return (
            (W.prototype.createContext = function () {
              var A = new ge();
              return this.contexts.push(A), A;
            }),
            W
          );
        })();
      },
    },
  ]);
})();

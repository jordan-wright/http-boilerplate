
function closure() {
  const pako = {
    inflateRaw: require('zlib').inflateRawSync,
  };

  function u(a) {
    this.jb = a;
    this.message = String(a);
    Error.captureStackTrace && Error.captureStackTrace(this, u)
  }

  function S(a, b) {
    for (var c = [], d = 0; d < a.length;) c.push(this.Ym(a[d++], b));
    this.ae = c
  }

  function C() {
    this.bf = 0;
    this.G = 32;
    this.h = -1;
    this.l = 1;
    this.a = new O(0, 0)
  }

  function D() {
    this.aa = this.Y = null;
    this.l = 1;
    this.h = -1;
    this.G = 32;
    this.Nc = 1 / 0;
    this.Xa = !0;
    this.ea = 0
  }

  function I() {
    this.G = 32;
    this.h = -1;
    this.l = 1;
    this.Ka = 0;
    this.Aa = new O(0, 0)
  }

  function Aa() {
    this.Hb = -1;
    this.Gb = null;
    this.K = []
  }

  function X() {
    this.Hb = -1;
    this.Gb = null;
    this.Aj = 0;
    this.h = this.G = -1;
    this.oi = 0;
    this.ea = 16777215;
    this.Ea = .99;
    this.qa = 1;
    this.l = .5;
    this.ga = 10;
    this.M = new O(0, 0);
    this.a = new O(0, 0)
  }

  function ia() {
    this.ha = 0
  }

  function Ja() {
    this.ha = 0
  }

  function Ka() {
    this.ha =
      0
  }

  function Y() {
    this.Qf = !1;
    this.ha = 0
  }

  function Zb() {}

  function Ba() {
    this.ha = 0
  }

  function La() {
    this.ha = 0
  }

  function Ma() {
    this.ha = 0
  }

  function ja() {
    this.ha = 0
  }

  function ka() {
    this.ha = 0
  }

  function Na() {
    this.ha = 0
  }

  function la() {
    this.ha = 0
  }

  function P() {
    this.ha = 0
  }

  function ma() {
    this.ha = 0
  }

  function na() {
    this.ha = 0
  }

  function Z() {
    this.ha = 0
  }

  function Ca() {
    this.ha = 0
  }

  function oa() {
    this.ha = 0
  }

  function ca() {
    this.$b = -1;
    this.al = null;
    this.W = q.ya;
    this.D = null;
    this.Kb = !1;
    this.bb = this.S = 0;
    this.o = "Player";
    this.Uf = this.Fb = 0;
    this.ed = null;
    this.fd = !1;
    this.Ya = null;
    this.sb = 0;
    this.oa = !1
  }

  function da() {
    this.Hb = -1;
    this.U = this.Gb = null;
    this.Va = this.sa = 3;
    this.mc = !1;
    this.A = null;
    this.F = [];
    this.Ib = "";
    this.U = n.Gg()[0];
    this.Wa = [null, new ha, new ha];
    this.Wa[1].Ua.push(q.$.ea);
    this.Wa[2].Ua.push(q.la.ea)
  }

  function q(a, b, c, d, e, f, g, k) {
    this.wf = null;
    this.ka = a;
    this.ea = b;
    this.zg = c;
    this.Lm = d;
    this.o = e;
    this.bm = f;
    this.G = k;
    this.xk = new ha;
    this.xk.Ua.push(b)
  }

  function ha() {
    this.Bc = 16777215;
    this.Ua = []
  }

  function n() {
    this.C = [];
    this.O = [];
    this.fa = [];
    this.bc = [];
    this.K = [];
    this.le =
      new xb;
    this.Oe = this.jj();
    this.yg = 255;
    this.pf = 0
  }

  function xb() {
    this.qa = this.l = .5;
    this.Ea = .96;
    this.Le = .1;
    this.ff = .07;
    this.gf = .96;
    this.Zd = 5
  }

  function lb() {
    this.xe = q.ya;
    this.aa = new O(0, 0);
    this.Y = new O(0, 0)
  }

  function pa() {
    this.Hb = -1;
    this.Gb = null;
    this.yb = this.tb = this.fc = this.Fa = 0;
    this.Sc = new O(0, 0);
    this.pd = q.$;
    this.Nb = this.Xb = this.ob = 0;
    this.ra = new Aa;
    this.sa = 0;
    this.Va = 5;
    this.U = null
  }

  function Da() {
    this.h = this.G = -1;
    this.ea = 16777215;
    this.Ea = .99;
    this.qa = 1;
    this.l = .5;
    this.ga = 10;
    this.M = new O(0, 0);
    this.a = new O(0, 0)
  }

  function Nb(a, b) {
    this.eg = null;
    this.bq = .025;
    this.Hd = this.dg = this.Ie = 0;
    this.Tf = b.createGain();
    this.Tf.gain.value = 0;
    var c = b.createBufferSource();
    c.buffer = a;
    c.connect(this.Tf);
    c.loop = !0;
    c.start()
  }

  function Ob(a) {
    function b(b) {
      return new Promise(function (d, f) {
        var e = a.file(b).asArrayBuffer();
        return c.c.decodeAudioData(e, d, f)
      })
    }
    var c = this;
    this.c = new AudioContext;
    this.kf = this.c.createGain();
    this.mk(p.J.qk.N() ? 1 : 0);
    this.kf.connect(this.c.destination);
    this.hm = Promise.all([b("sounds/chat.ogg").then(function (a) {
      return c.Fl =
        a
    }), b("sounds/kick.ogg").then(function (a) {
      return c.Km = a
    }), b("sounds/goal.ogg").then(function (a) {
      return c.um = a
    }), b("sounds/join.ogg").then(function (a) {
      return c.Jm = a
    }), b("sounds/leave.ogg").then(function (a) {
      return c.Mm = a
    }), b("sounds/crowd.ogg").then(function (a) {
      c.am = a;
      c.zi = new Nb(c.am, c.c);
      c.zi.connect(c.kf)
    })])
  }

  function qa() {}

  function mb() {}

  function Pb(a) {
    this.vc = window.performance.now();
    this.Oc = this.Od = 0;
    var b = this;
    this.za = a;
    this.j = new ga(a.gc);
    var c = new yb(this.j);
    c.hh(a.B);
    window.document.addEventListener("keydown",
      A(this, this.Vc));
    window.document.addEventListener("keyup", A(this, this.Wc));
    window.requestAnimationFrame(A(this, this.ee));
    this.Dg = window.setInterval(function () {
      b.j.Cd.lk(b.Oc);
      b.Oc = 0
    }, 1E3);
    this.ue(p.J.rb.N());
    this.j.g.classList.add("replayer");
    this.oe = new fa(a);
    this.oe.xn = function () {
      c.ap(a.B)
    };
    this.oe.wn = function () {
      b.j.Bd(null == a.B.A);
      c.hh(a.B)
    };
    this.j.g.appendChild(this.oe.g)
  }

  function w() {}

  function v() {}

  function zb() {
    this.df = !1
  }

  function p() {}

  function Oa(a, b, c, d) {
    this.o = a;
    this.jp = d;
    this.Qg = b;
    null !=
      b && (this.Gk = c(b.getItem(a)))
  }

  function Qb() {}

  function Rb() {
    function a(a) {
      return new Oa(a, e, function (a) {
        if (null == a) return null;
        try {
          return T.mm(a)
        } catch (k) {
          return null
        }
      }, function (a) {
        if (null == a) return null;
        try {
          return a.Yo()
        } catch (k) {
          return null
        }
      })
    }

    function b(a) {
      return new Oa(a, e, function (a) {
        return null != a ? "0" != a : !0
      }, function (a) {
        return a ? "1" : "0"
      })
    }

    function c(a) {
      return new Oa(a, e, function (a) {
        var b = 0;
        try {
          null != a && (b = N.parseInt(a))
        } catch (h) {}
        return b
      }, function (a) {
        return "" + a
      })
    }

    function d(a, b, c) {
      return new Oa(a,
        e,
        function (a) {
          return null == a ? b : ra.dd(a, c)
        },
        function (a) {
          return a
        })
    }
    var e = Qb.Rk();
    this.ud = d("player_name", "", 25);
    this.rb = c("view_mode");
    this.Cg = c("fps_limit");
    this.qg = d("avatar", null, 2);
    this.Zn = d("rctoken", null, 1024);
    this.yk = b("team_colors");
    this.qk = b("sound_main");
    this.nk = b("sound_chat");
    this.pk = b("sound_crowd");
    this.Vd = a("geo");
    this.Wd = a("geo_override")
  }

  function T() {
    this.ab = "";
    this.Tb = this.Vb = 0
  }

  function Pa() {
    this.od = this.hf = 0;
    window.document.addEventListener("focusout", A(this, this.sj))
  }

  function yb(a) {
    this.j =
      a
  }

  function ba(a) {
    this.vc = window.performance.now();
    this.$c = null;
    this.Od = 0;
    this.Gl = new nb(3, 1E3);
    this.bb = new Pa;
    this.Ef = "Waiting for link";
    this.mh = this.ik = !1;
    this.Oc = 0;
    var b = this;
    this.vg = new ob(a, function (a) {
      b.j.lb.Ub(a)
    });
    this.za = a;
    a.B.dm = function (c) {
      b.ik != c && (b.ik = c, c = oa.ja(c), a.ia(c))
    };
    this.j = new ga(a.gc);
    this.Eg = new yb(this.j);
    this.Eg.hh(a.B);
    this.j.lb.wj = A(this, this.kn);
    window.document.addEventListener("keydown", A(this, this.Vc));
    window.document.addEventListener("keyup", A(this, this.Wc));
    window.onbeforeunload =
      function () {
        return "Are you sure you want to leave the room?"
      };
    this.bb.vf = function (b) {
      a.ia(b)
    };
    this.j.Ga.Dn = function (b) {
      b = Z.ja(1, b);
      a.ia(b)
    };
    this.j.Ga.vn = function (b) {
      b = Z.ja(0, b);
      a.ia(b)
    };
    this.j.je = function (b) {
      b = la.ja(b);
      a.ia(b)
    };
    this.j.Ga.An = function () {
      a.ia(new Ka)
    };
    this.j.Ga.Bn = function () {
      a.ia(new Ja)
    };
    this.j.Ga.on = function () {
      b.Bk()
    };
    this.j.Ga.uf = function (b, d) {
      var c = P.ja(b, d);
      a.ia(c)
    };
    this.j.Ga.td = A(this, this.so);
    this.j.Ga.hn = function () {
      a.ia(new Ca)
    };
    this.j.Ga.sn = function () {
      ba.Yn(a)
    };
    this.j.Ga.Cn =
      function (b) {
        b = ka.ja(b);
        a.ia(b)
      };
    this.j.Ga.ie = function (c) {
      var d = a.B.na(c);
      if (null != d) {
        var e = new bb(d, b.mh);
        e.cb = function () {
          b.j.hb(null)
        };
        e.gn = function (b, c) {
          var d = na.ja(b, c);
          a.ia(d)
        };
        e.Xg = function () {
          b.Oo(d)
        };
        b.j.hb(e.g, function () {
          e.s(a.B, b.mh)
        })
      }
    };
    this.j.Ga.yn = function () {
      var a = new $a;
      a.cb = function () {
        b.j.hb(null)
      };
      b.j.hb(a.g, function () {
        a.Go(b.Ef)
      })
    };
    this.j.Ga.tn = function () {
      if (null == b.$c) b.Ro();
      else {
        var a = b.$c.stop();
        b.$c = null;
        ba.ek(a)
      }
      b.j.Ga.Ko(null != b.$c)
    };
    window.requestAnimationFrame(A(this, this.ee));
    this.Dg = window.setInterval(function () {
      b.j.Cd.lk(b.Oc);
      b.Oc = 0
    }, 1E3);
    this.gp = window.setInterval(function () {
      a.s()
    }, 50);
    this.ue(p.J.rb.N())
  }

  function Ea() {}

  function ob(a, b) {
    this.za = a;
    this.va = b
  }

  function sa() {}

  function $b() {}

  function pb(a, b) {
    var c = this;
    Q.call(this);
    this.cq = window.setTimeout(null == b ? function () {
      c.Qh(new Qa("Timed out"))
    } : function () {
      var a;
      try {
        a = b()
      } catch (e) {
        e instanceof u && (e = e.jb);
        c.Qh(e);
        return
      }
      c.Zk(a)
    }, a);
    this.Dp(function () {
      window.clearTimeout(c.cq)
    })
  }

  function Qa(a) {
    this.message = a
  }

  function Q() {
    this.De = [];
    this.He = [];
    this.B = 0
  }

  function ac() {}

  function Ab() {}

  function Bb() {}

  function nb(a, b) {
    this.pi = a;
    this.Eh = b;
    this.Mb = a;
    this.$d = window.performance.now()
  }

  function bc() {}

  function ub() {}

  function Ia() {}

  function y() {}

  function B() {}

  function J() {}

  function O(a, b) {
    this.x = a;
    this.y = b
  }

  function Cb(a) {
    this.Bb = a.slice()
  }

  function Db(a, b, c) {
    this.Gj = 5;
    this.ad = -1;
    this.rf = this.zb = this.Og = this.Ri = 0;
    U.call(this, b);
    a = new G(new DataView(a.buffer), !1);
    if (1212305970 != a.Sa()) throw new u("");
    b = a.Sa();
    if (c != b) throw new u(new Eb(b));
    this.Cf = a.Sa();
    c = pako.inflateRaw(a.Ac());
    this.xd = new G(new DataView(c.buffer, c.byteOffset, c.byteLength));
    this.jh();
    this.Og = 0; // EDIT
    this.gc = -1
  }

  function Eb(a) {
    this.Cc = a
  }

  function Sb() {}

  function Tb(a) {
    this.Jk = new Map;
    this.zp = new nb(100, 16);
    this.$f = !1;
    this.Ge = a
  }

  function Fb(a) {
    this.eb = null;
    this.nf = 32;
    this.Td = Object.create(null);
    this.Qb = [];
    this.lh = 4;
    this.Jl = 600;
    var b = this;
    U.call(this, a.state);
    this.Zm = a.Ph;
    this.hp = a.version;
    this.$m = 1;
    this.dj = this.gc = 0;
    this.wh = window.performance.now();
    this.yc =
      new Ra(this.Zm, a.iceServers, Sb.Mk);
    this.yc.xi = A(this, this.zm);
    this.yc.tj = function (a) {
      b.nn(a)
    };
    this.yc.uj = function (a) {
      for (var c = b.Qi; null != c;) c.Jh(a), c = c.next
    };
    this.yc.he = function (a, d) {
      null != b.he && b.he(a, d)
    }
  }

  function Fa(a, b) {
    this.gh = [];
    this.zf = new Ga;
    this.en = 1;
    this.Lc = this.Bh = 0;
    this.Ch = new Gb(200);
    this.yf = new Gb(200);
    this.ml = 1E3;
    this.Ci = "";
    var c = this;
    U.call(this, b.state);
    var d = null,
      d = function (e) {
        c.te(0);
        var f = x.ca();
        f.Dc(b.version);
        f.Ab(b.password);
        c.Ob = new qb(b.Ph, b.iceServers, a, Sb.Mk, f, b.eq);
        c.Ob.pg =
          e;
        c.Ob.Tc = function (a) {
          c.Ob = null;
          c.wa = a;
          a.tf = function (a) {
            a = new G(new DataView(a));
            c.Rn(a)
          };
          a.fe = function () {
            3 != c.Lc && y.i(c.ge, W.gg("Connection closed"));
            c.Z()
          };
          c.Co(b.hq);
          a = window.setTimeout(function () {
            y.i(c.ge, W.gg("Game state timeout"));
            c.Z()
          }, 1E4);
          c.Dd = a;
          c.te(2)
        };
        c.Ob.xj = function () {
          c.te(1)
        };
        var g = !1;
        c.Ob.qj = function () {
          return g = !0
        };
        c.Ob.zc = function (a) {
          if (!e && 1 == c.Lc && g) B.i(c.un), d(!0);
          else {
            var b = qb.rm(a);
            switch (a[1]) {
              case 1:
                a = W.jg(a[2]);
                break;
              case 2:
                a = W.Hc;
                break;
              default:
                a = W.gg(b)
            }
            y.i(c.ge, a);
            c.Z(b)
          }
        }
      };
    d(null != b.el && b.el)
  }

  function U(a) {
    this.Dh = new Ga;
    this.Gd = this.Cb = 0;
    this.zd = new Ga;
    this.gc = this.tc = 0;
    this.pc = .06;
    this.kg = 16.666666666666668;
    this.Je = 120;
    rb.call(this, a)
  }

  function ta() {}

  function sb() {}

  function Ub(a, b) {
    this.version = 1;
    this.Xh = 0;
    this.Ld = x.ca(16384);
    var c = this;
    this.version = b;
    this.Ld = x.ca(16384);
    var d = this.Xh = a.P;
    this.Xk = a;
    a.B.X(this.Ld);
    a.hc = function (b) {
      var e = a.P;
      c.Ld.Jb(e - d);
      d = e;
      c.Ld.Dc(b.pa);
      l.Th(b, c.Ld)
    }
  }

  function Vb() {}

  function Gb(a) {
    this.Jp = a;
    this.Qa = []
  }

  function Wb() {}

  function Sa() {
    this.ha =
      0
  }

  function rb(a) {
    this.P = 0;
    this.B = a
  }

  function Ga() {
    this.list = []
  }

  function l() {
    this.ha = 0
  }

  function t() {}

  function vb(a, b) {
    this.Na = a;
    this.value = b;
    a.textContent = "" + b
  }

  function cc() {}

  function dc() {}

  function xa() {}

  function Ha() {}

  function tb(a, b, c) {
    this.Jh = a;
    this.next = c
  }

  function x(a, b) {
    null == b && (b = !1);
    this.m = a;
    this.La = b;
    this.a = 0
  }

  function G(a, b) {
    null == b && (b = !1);
    this.m = a;
    this.La = b;
    this.a = 0
  }

  function Hb(a) {
    this.Nd = null;
    this.co = 3E4;
    this.Qc = !0;
    var b = this;
    a.ui();
    this.Da = a.Da;
    this.sc = a.sc;
    this.ve = a.ve;
    this.Nd = a.Nd;
    this.zk =
      window.performance.now();
    var c = null,
      c = function () {
        var a = b.co - b.To();
        0 >= a ? b.Z() : (window.clearTimeout(b.Ak), a = window.setTimeout(c, a + 1E3), b.Ak = a)
      };
    c();
    this.Da.oniceconnectionstatechange = function () {
      "closed" == b.Da.iceConnectionState && b.Z()
    };
    a = 0;
    for (var d = this.sc; a < d.length;) {
      var e = d[a];
      ++a;
      e.onmessage = function (a) {
        b.Qc && (b.zk = window.performance.now(), null != b.tf && b.tf(a.data))
      };
      e.onclose = function () {
        b.Z()
      }
    }
  }

  function ec() {}

  function Ra(a, b, c) {
    this.rg = new Set;
    this.Pe = new Set;
    this.Df = !1;
    this.jc = null;
    this.fk = this.ka =
      "";
    this.vo = 5E4;
    this.uo = 1E4;
    this.rc = Object.create(null);
    this.Po = a;
    this.af = b;
    this.El = c;
    this.uh()
  }

  function Ta(a, b, c) {
    this.Nd = this.Dd = null;
    this.ve = [];
    this.Ai = 0;
    this.yj = !1;
    this.Ze = [];
    this.sc = [];
    var d = this;
    this.Da = new RTCPeerConnection({
      iceServers: b
    }, Ta.Tl);
    this.$e = new Q;
    this.Da.onicecandidate = function (a) {
      null == a.candidate ? d.$e.resolve(d.Ze) : (a = a.candidate, null != d.sf && d.sf(a), d.Ze.push(a))
    };
    for (b = 0; b < c.length;) this.Yl(c[b++]);
    this.ka = a
  }

  function qb(a, b, c, d, e, f) {
    this.pg = this.wg = !1;
    var g = this;
    this.wa = new Ta(0,
      b, d);
    this.wa.zc = function () {
      g.Xd(K.hg)
    };
    this.wa.Tc = function () {
      null != g.Tc && g.Tc(new Hb(g.wa));
      g.wa = null;
      g.vi()
    };
    this.wa.Wg = function (b) {
      g.Do = b;
      g.T = new WebSocket(a + "client?id=" + c + (null == f ? "" : "&token=" + f));
      g.T.binaryType = "arraybuffer";
      g.T.onclose = function (a) {
        g.wg || g.Xd(K.jg(a.code))
      };
      g.T.onerror = function () {
        g.wg || g.Xd(K.Error)
      };
      g.T.onmessage = A(g, g.Lg);
      g.T.onopen = function () {
        null != g.xj && g.xj();
        g.wa.xh();
        g.qh(g.Do, g.wa.Ze, e);
        g.wa.sf = A(g, g.nh);
        g.wa.$e.then(function () {
          g.kc(0, null)
        })
      }
    };
    this.wa.Zl()
  }

  function Xb() {
    this.hash =
      0
  }

  function Ib(a) {
    this.message = a
  }

  function ra() {}

  function M() {}

  function N() {}

  function fc() {}

  function H() {}

  function Yb(a, b) {
    this.r = new RegExp(a, b.split("u").join(""))
  }

  function ua() {
    return r.jd(this, "")
  }

  function E(a, b) {
    function c() {}
    c.prototype = a;
    var d = new c,
      e;
    for (e in b) d[e] = b[e];
    b.toString !== Object.prototype.toString && (d.toString = b.toString);
    return d
  }

  function A(a, b) {
    if (null == b) return null;
    null == b.lg && (b.lg = kc++);
    var c;
    null == a.Lh ? a.Lh = {} : c = a.Lh[b.lg];
    null == c && (c = function () {
      return c.method.apply(c.scope,
        arguments)
    }, c.scope = a, c.method = b, a.Lh[b.lg] = c);
    return c
  }
  Yb.b = !0;
  Yb.prototype = {
    match: function (a) {
      this.r.global && (this.r.lastIndex = 0);
      this.r.Lb = this.r.exec(a);
      this.r.ag = a;
      return null != this.r.Lb
    },
    Yk: function (a) {
      if (null != this.r.Lb && 0 <= a && a < this.r.Lb.length) return this.r.Lb[a];
      throw new u("EReg::matched");
    },
    Hp: function () {
      if (null == this.r.Lb) throw new u("No string matched");
      return {
        Sp: this.r.Lb.index,
        Ep: this.r.Lb[0].length
      }
    },
    Gp: function (a, b, c) {
      null == c && (c = -1);
      if (this.r.global) {
        this.r.lastIndex = b;
        this.r.Lb =
          this.r.exec(0 > c ? a : H.substr(a, 0, b + c));
        if (b = null != this.r.Lb) this.r.ag = a;
        return b
      }
      if (c = this.match(0 > c ? H.substr(a, b, null) : H.substr(a, b, c))) this.r.ag = a, this.r.Lb.index += b;
      return c
    },
    f: Yb
  };
  H.b = !0;
  H.Be = function (a, b) {
    var c = a.charCodeAt(b);
    if (c == c) return c
  };
  H.substr = function (a, b, c) {
    if (null == c) c = a.length;
    else if (0 > c)
      if (0 == b) c = a.length + c;
      else return "";
    return a.substr(b, c)
  };
  H.remove = function (a, b) {
    var c = a.indexOf(b);
    if (-1 == c) return !1;
    a.splice(c, 1);
    return !0
  };
  Math.b = !0;
  fc.b = !0;
  fc.up = function (a) {
    var b = [];
    if (null !=
      a) {
      var c = Object.prototype.hasOwnProperty,
        d;
      for (d in a) "__id__" != d && "hx__closures__" != d && c.call(a, d) && b.push(d)
    }
    return b
  };
  N.b = !0;
  N.cg = function (a) {
    return r.jd(a, "")
  };
  N.parseInt = function (a) {
    var b = parseInt(a, 10);
    0 != b || 120 != H.Be(a, 1) && 88 != H.Be(a, 1) || (b = parseInt(a));
    return isNaN(b) ? null : b
  };
  M.b = !0;
  M.Cp = function (a, b) {
    var c = H.Be(a, b);
    return 8 < c && 14 > c ? !0 : 32 == c
  };
  M.Yp = function (a) {
    for (var b = a.length, c = 0; c < b && M.Cp(a, b - c - 1);) ++c;
    return 0 < c ? H.substr(a, 0, b - c) : a
  };
  M.Ee = function (a) {
    for (; 2 > a.length;) a = "0" + a;
    return a
  };
  M.Kh = function (a, b) {
    for (var c = ""; c = "0123456789ABCDEF".charAt(a & 15) + c, a >>>= 4, 0 < a;);
    if (null != b)
      for (; c.length < b;) c = "0" + c;
    return c
  };
  ra.b = !0;
  ra.dd = function (a, b) {
    return a.length <= b ? a : H.substr(a, 0, b)
  };
  Ib.b = !0;
  Ib.prototype = {
    toString: function () {
      return "Error: " + this.message
    },
    f: Ib
  };
  Xb.b = !0;
  Xb.prototype = {
    lp: function (a) {
      for (var b = 0, c = a.length; b < c;) this.hash += a[b++], this.hash += this.hash << 10, this.hash ^= this.hash >>> 6
    },
    f: Xb
  };
  var K = {
    Ke: !0,
    bi: ["PeerFailed", "Rejected", "Cancelled", "Error"],
    hg: ["PeerFailed", 0]
  };
  K.hg.toString =
    ua;
  K.hg.qb = K;
  K.jg = function (a) {
    a = ["Rejected", 1, a];
    a.qb = K;
    a.toString = ua;
    return a
  };
  K.Hc = ["Cancelled", 2];
  K.Hc.toString = ua;
  K.Hc.qb = K;
  K.Error = ["Error", 3];
  K.Error.toString = ua;
  K.Error.qb = K;
  qb.b = !0;
  qb.rm = function (a) {
    switch (a[1]) {
      case 0:
        return "Failed";
      case 1:
        return hc.description(a[2]);
      case 2:
        return "";
      case 3:
        return "Master connection error"
    }
  };
  qb.prototype = {
    Dl: function () {
      this.Xd(K.Hc)
    },
    vi: function () {
      null != this.T && (this.T.onclose = null, this.T.onmessage = null, this.T.onerror = null, this.T.onopen = null, this.T.close(),
        this.T = null);
      null != this.wa && (this.wa.Z(), this.wa = null)
    },
    Xd: function (a) {
      null != this.zc && this.zc(a);
      this.vi()
    },
    Lg: function (a) {
      a = new G(new DataView(a.data));
      var b = a.I();
      0 < a.m.byteLength - a.a && (a = new G(new DataView(pako.inflateRaw(a.Ac()).buffer), !1));
      switch (b) {
        case 1:
          for (var b = a.Zc(), c = a.Bf(), d = [], e = 0; e < c.length;) d.push(new RTCIceCandidate(c[e++]));
          this.Kg(b, d, a);
          break;
        case 4:
          this.Jg(new RTCIceCandidate(a.Bf()))
      }
    },
    Kg: function (a, b) {
      var c = this;
      this.wa.xh(this.pg ? 1E4 : 4E3);
      this.wg = !0;
      null != this.qj && this.qj();
      this.wa.Da.setRemoteDescription(new RTCSessionDescription({
        sdp: a,
        type: "answer"
      }), function () {
        for (var a = 0; a < b.length;) c.wa.Da.addIceCandidate(b[a++])
      }, function () {
        c.Xd(K.Error)
      })
    },
    Jg: function (a) {
      this.wa.Da.addIceCandidate(a)
    },
    kc: function (a, b) {
      if (null != this.T) {
        var c = x.ca(32, !1);
        c.w(a);
        null != b && c.Ec(pako.deflateRaw(b.oc()));
        this.T.send(c.Ed())
      }
    },
    qh: function (a, b, c) {
      var d = x.ca(32, !1);
      d.w(this.pg ? 1 : 0);
      d.cd(a.sdp);
      d.Nf(b);
      null != c && d.Ec(c.oc());
      this.kc(1, d)
    },
    nh: function (a) {
      var b = x.ca(32, !1);
      b.Nf(a);
      this.kc(4,
        b)
    },
    f: qb
  };
  Ta.b = !0;
  Ta.prototype = {
    xh: function (a) {
      null == a && (a = 1E4);
      window.clearTimeout(this.Dd);
      this.Dd = window.setTimeout(A(this, this.Dm), a)
    },
    Xl: function (a, b) {
      var c = this;
      this.Bi(sa.aq(this.Da, a).Uh(function () {
        return sa.qp(c.Da)
      }), b, 500)
    },
    Zl: function () {
      this.Bi(sa.rp(this.Da), [], 1E3)
    },
    Bi: function (a, b, c) {
      var d = this;
      a.Uh(function (a) {
        return sa.$p(d.Da, a)
      }).Uh(function (a) {
        for (var e = 0; e < b.length;) d.di(b[e++]);
        return $b.timeout(d.$e, c, function () {
          return null
        }).map(function () {
          return a
        })
      }).then(function (a) {
        d.Wg(a)
      }).Fe(function () {
        d.Ye()
      })
    },
    Yl: function (a) {
      var b = this,
        c = {
          id: this.sc.length,
          lq: !0,
          Yf: a.Yf
        };
      a.reliable || (c.kq = 0);
      a = this.Da.createDataChannel(a.name, c);
      a.binaryType = "arraybuffer";
      a.onopen = function () {
        for (var a = 0, c = b.sc; a < c.length;)
          if ("open" != c[a++].readyState) return;
        null != b.Tc && b.Tc()
      };
      a.onclose = function () {
        b.Ye()
      };
      a.onmessage = function () {
        b.Ye()
      };
      this.sc.push(a)
    },
    di: function (a) {
      var b = this;
      window.setTimeout(function () {
        return b.Da.addIceCandidate(a)
      }, this.Ai)
    },
    Dm: function () {
      this.Ye()
    },
    Ye: function () {
      null != this.zc && this.zc();
      this.Z()
    },
    Z: function () {
      this.ui();
      this.Da.close()
    },
    ui: function () {
      window.clearTimeout(this.Dd);
      this.Wg = this.Tc = this.sf = this.zc = null;
      this.Da.onicecandidate = null;
      this.Da.ondatachannel = null;
      this.Da.onsignalingstatechange = null;
      this.Da.oniceconnectionstatechange = null;
      for (var a = 0, b = this.sc; a < b.length;) {
        var c = b[a];
        ++a;
        c.onopen = null;
        c.onclose = null;
        c.onmessage = null
      }
    },
    f: Ta
  };
  var va = {
    Ke: !0,
    bi: ["Accept", "Reject"],
    fg: ["Accept", 0]
  };
  va.fg.toString = ua;
  va.fg.qb = va;
  va.ig = function (a) {
    a = ["Reject", 1, a];
    a.qb = va;
    a.toString = ua;
    return a
  };
  Ra.b = !0;
  Ra.Wi = function (a) {
    try {
      var b = ec.Xc(a.candidate);
      if ("srflx" == b.Zo) return b.Gm
    } catch (c) {}
    return null
  };
  Ra.prototype = {
    Z: function () {
      window.clearTimeout(this.ck);
      window.clearTimeout(this.yd);
      this.yd = null;
      window.clearInterval(this.Fj);
      this.T.onmessage = null;
      this.T.onerror = null;
      this.T.onclose = null;
      this.T.onopen = null;
      this.T.close();
      this.T = null;
      this.Ni()
    },
    pm: function () {
      var a = 0,
        b = this.rc,
        c;
      for (c in b) ++a;
      return a
    },
    rh: function (a) {
      var b = this;
      if (null != this.jc || null != a) {
        if (null != this.jc && null != a && this.jc.byteLength ==
          a.byteLength) {
          for (var c = new Uint8Array(this.jc), d = new Uint8Array(a), e = !1, f = 0, g = this.jc.byteLength; f < g;) {
            var k = f++;
            if (c[k] != d[k]) {
              e = !0;
              break
            }
          }
          if (!e) return
        }
        this.jc = a.slice(0);
        this.Df = !0;
        null != this.T && 1 == this.T.readyState && null == this.yd && (this.ph(), this.yd = window.setTimeout(function () {
          b.yd = null;
          1 == b.T.readyState && b.Df && b.ph()
        }, 1E4))
      }
    },
    uh: function (a) {
      function b(a) {
        a = a.sitekey;
        if (null == a) throw new u(null);
        null != d.he && d.he(a, function (a) {
          d.uh(a)
        })
      }

      function c(a) {
        var b = a.url;
        if (null == b) throw new u(null);
        a =
          a.token;
        if (null == a) throw new u(null);
        d.T = new WebSocket(b + "?token=" + a);
        d.T.binaryType = "arraybuffer";
        d.T.onopen = function () {
          d.Cm()
        };
        d.T.onclose = function (a) {
          d.Ig(4001 != a.code)
        };
        d.T.onerror = function () {
          d.Ig(!0)
        };
        d.T.onmessage = A(d, d.Lg)
      }
      null == a && (a = "");
      var d = this;
      J.Kn(this.Po, "token=" + this.fk + "&rcr=" + a, J.jl).then(function (a) {
        switch (a.action) {
          case "connect":
            c(a);
            break;
          case "recaptcha":
            b(a)
        }
      })["catch"](function () {
        d.Ig(!0)
      })
    },
    Cm: function () {
      var a = this;
      null != this.jc && this.ph();
      this.Fj = window.setInterval(function () {
          a.oh()
        },
        4E4)
    },
    Lg: function (a) {
      a = new G(new DataView(a.data), !1);
      switch (a.I()) {
        case 1:
          this.Kg(a);
          break;
        case 4:
          this.Jg(a);
          break;
        case 5:
          this.ym(a);
          break;
        case 6:
          this.Am(a)
      }
    },
    Kg: function (a) {
      var b = a.Sa(),
        c = this.Al(a.Ac(a.I())),
        d, e, f;
      try {
        a = new G(new DataView(pako.inflateRaw(a.Ac()).buffer), !1);
        d = 0 != a.I();
        e = a.Zc();
        for (var g = a.Bf(), k = [], h = 0; h < g.length;) k.push(new RTCIceCandidate(g[h++]));
        f = k
      } catch (m) {
        this.se(b, 0);
        return
      }
      this.Bm(b, c, e, f, a, d)
    },
    Bm: function (a, b, c, d, e, f) {
      var g = this;
      if (16 <= this.pm()) this.se(a, 4104);
      else if (this.rg.has(b)) this.se(a,
        4102);
      else {
        for (var k = [], h = 0; h < d.length;) {
          var m = Ra.Wi(d[h++]);
          if (null != m) {
            if (this.Pe.has(m)) {
              this.se(a, 4102);
              return
            }
            k.push(m)
          }
        }
        if (null != this.xi && (h = new G(e.m), h.a = e.a, b = this.xi(b, h), 1 == b[1])) {
          this.se(a, b[2]);
          return
        }
        var z = new Ta(a, this.af, this.El);
        f && (z.Ai = 2500);
        z.ve = k;
        this.rc[a] = z;
        z.zc = function () {
          g.kc(0, z, null);
          delete g.rc[z.ka]
        };
        z.Tc = function () {
          delete g.rc[z.ka];
          g.kc(0, z, null);
          null != g.tj && g.tj(new Hb(z))
        };
        z.Wg = function (a) {
          g.qh(z, a, z.Ze, null);
          z.$e.then(function () {
            g.kc(0, z, null)
          });
          z.sf = function (a) {
            g.nh(z,
              a)
          }
        };
        z.xh();
        z.Xl(new RTCSessionDescription({
          sdp: c,
          type: "offer"
        }), d)
      }
    },
    Jg: function (a) {
      var b = a.Sa(),
        c;
      try {
        a = new G(new DataView(pako.inflateRaw(a.Ac()).buffer), !1), c = new RTCIceCandidate(a.Bf())
      } catch (d) {
        return
      }
      this.xm(b, c)
    },
    xm: function (a, b) {
      var c = this.rc[a];
      if (null != c) {
        var d = Ra.Wi(b);
        if (null != d && (c.ve.push(d), this.Pe.has(d))) return;
        c.di(b)
      }
    },
    ym: function (a) {
      this.ka = a.Yc(a.I());
      null != this.uj && this.uj(this.ka)
    },
    Am: function (a) {
      this.fk = a.Yc(a.m.byteLength - a.a)
    },
    kc: function (a, b, c) {
      if (!b.yj) {
        0 == a && (b.yj = !0);
        b = b.ka;
        var d = x.ca(32, !1);
        d.w(a);
        d.ib(b);
        null != c && d.Ec(pako.deflateRaw(c.oc()));
        this.T.send(d.Ed())
      }
    },
    se: function (a, b) {
      var c = x.ca(16, !1);
      c.w(0);
      c.ib(a);
      c.Dc(b);
      this.T.send(c.Ed())
    },
    oh: function () {
      var a = x.ca(1, !1);
      a.w(8);
      this.T.send(a.Ed())
    },
    ph: function () {
      this.Df = !1;
      var a = x.ca(256, !1);
      a.w(7);
      null != this.jc && a.Gh(this.jc);
      this.T.send(a.Ed())
    },
    qh: function (a, b, c, d) {
      var e = x.ca(32, !1);
      e.cd(b.sdp);
      e.Nf(c);
      null != d && e.Ec(d.oc());
      this.kc(1, a, e)
    },
    nh: function (a, b) {
      var c = x.ca(32, !1);
      c.Nf(b);
      this.kc(4, a, c)
    },
    Ni: function () {
      var a =
        this.rc,
        b;
      for (b in a) this.rc[b].Z();
      this.rc = Object.create(null)
    },
    Ig: function (a) {
      var b = this;
      this.Ni();
      window.clearTimeout(this.yd);
      this.yd = null;
      this.Df = !1;
      window.clearInterval(this.Fj);
      window.clearTimeout(this.ck);
      a && (this.ck = window.setTimeout(function () {
        b.uh()
      }, this.uo + Math.random() * this.vo | 0))
    },
    Al: function (a) {
      for (var b = "", c = 0, d = a.byteLength; c < d;) b += M.Kh(a[c++]);
      return b
    },
    wl: function (a) {
      for (var b = 0, c = a.ve; b < c.length;) this.Pe.add(c[b++]);
      null != a.Nd && this.rg.add(a.Nd)
    },
    md: function () {
      this.Pe.clear();
      this.rg.clear()
    },
    f: Ra
  };
  ec.b = !0;
  ec.Xc = function (a) {
    a = a.split(" ");
    if ("typ" != a[6]) throw new u(null);
    return {
      Zo: a[7],
      Gm: a[4]
    }
  };
  Hb.b = !0;
  Hb.prototype = {
    To: function () {
      return window.performance.now() - this.zk
    },
    Ad: function (a, b) {
      if (this.Qc) {
        var c = this.sc[a];
        if ("open" == c.readyState) {
          var d = b.Mf();
          try {
            c.send(d)
          } catch (e) {
            e instanceof u && (e = e.jb), window.console.log(e)
          }
        }
      }
    },
    Z: function () {
      window.clearTimeout(this.Ak);
      this.Qc && (this.Qc = !1, this.Da.close(), null != this.fe && this.fe())
    },
    f: Hb
  };
  var hc = {
    b: !0,
    description: function (a) {
      switch (a) {
        case 4100:
          return "The room is full.";
        case 4101:
          return "Wrong password.";
        case 4102:
          return "You are banned from this room.";
        case 4103:
          return "Incompatible game version.";
        default:
          return "Connection closed (" + a + ")"
      }
    }
  };
  G.b = !0;
  G.cm = function (a, b) {
    var c = a.getUint8(b),
      d, e, f, g, k, h = b;
    if (0 == (c & 128)) ++b;
    else if (192 == (c & 224)) d = a.getUint8(b + 1), c = (c & 31) << 6 | d & 63, b += 2;
    else if (224 == (c & 240)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), c = (c & 15) << 12 | (d & 63) << 6 | e & 63, b += 3;
    else if (240 == (c & 248)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), c = (c & 7) << 18 | (d & 63) << 12 | (e &
      63) << 6 | f & 63, b += 4;
    else if (248 == (c & 252)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), g = a.getUint8(b + 4), c = (c & 3) << 24 | (d & 63) << 18 | (e & 63) << 12 | (f & 63) << 6 | g & 63, b += 5;
    else if (252 == (c & 254)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), g = a.getUint8(b + 4), k = a.getUint8(b + 5), c = (c & 1) << 30 | (d & 63) << 24 | (e & 63) << 18 | (f & 63) << 12 | (g & 63) << 6 | k & 63, b += 6;
    else throw new u("Cannot decode UTF8 character at offset " + b + ": charCode (" + c + ") is invalid");
    return {
      "char": c,
      length: b - h
    }
  };
  G.prototype = {
    Ac: function (a) {
      null == a && (a =
        this.m.byteLength - this.a);
      if (this.a + a > this.m.byteLength) throw new u("Read too much");
      var b = new Uint8Array(this.m.buffer, this.m.byteOffset + this.a, a);
      this.a += a;
      return b
    },
    dh: function (a) {
      var b = this.Ac(a);
      a = new ArrayBuffer(a);
      (new Uint8Array(a)).set(b);
      return a
    },
    ne: function () {
      return this.m.getInt8(this.a++)
    },
    I: function () {
      return this.m.getUint8(this.a++)
    },
    $n: function () {
      var a = this.m.getInt16(this.a, this.La);
      this.a += 2;
      return a
    },
    wb: function () {
      var a = this.m.getUint16(this.a, this.La);
      this.a += 2;
      return a
    },
    R: function () {
      var a =
        this.m.getInt32(this.a, this.La);
      this.a += 4;
      return a
    },
    Sa: function () {
      var a = this.m.getUint32(this.a, this.La);
      this.a += 4;
      return a
    },
    Af: function () {
      var a = this.m.getFloat32(this.a, this.La);
      this.a += 4;
      return a
    },
    u: function () {
      var a = this.m.getFloat64(this.a, this.La);
      this.a += 8;
      return a
    },
    Wb: function () {
      for (var a = this.a, b = 0, c, d = 0; c = this.m.getUint8(a + b), 5 > b && (d |= (c & 127) << 7 * b >>> 0), ++b, 0 != (c & 128););
      this.a += b;
      return d | 0
    },
    Yc: function (a) {
      var b = this.a,
        c, d = "";
      for (a = b + a; b < a;) c = G.cm(this.m, b), b += c.length, d += String.fromCharCode(c["char"]);
      if (b != a) throw new u("Actual string length differs from the specified: " + (b - a) + " bytes");
      this.a = b;
      return d
    },
    xb: function () {
      var a = this.Wb();
      return 0 >= a ? null : this.Yc(a - 1)
    },
    Zc: function () {
      return this.Yc(this.Wb())
    },
    Rj: function () {
      return this.Yc(this.I())
    },
    Bf: function () {
      var a = this.Zc();
      return JSON.parse(a)
    },
    f: G
  };
  x.b = !0;
  x.ca = function (a, b) {
    null == b && (b = !1);
    null == a && (a = 16);
    return new x(new DataView(new ArrayBuffer(a)), b)
  };
  x.km = function (a, b, c) {
    var d = c;
    if (0 > a) throw new u("Cannot encode UTF8 character: charCode (" +
      a + ") is negative");
    if (128 > a) b.setUint8(c, a & 127), ++c;
    else if (2048 > a) b.setUint8(c, a >> 6 & 31 | 192), b.setUint8(c + 1, a & 63 | 128), c += 2;
    else if (65536 > a) b.setUint8(c, a >> 12 & 15 | 224), b.setUint8(c + 1, a >> 6 & 63 | 128), b.setUint8(c + 2, a & 63 | 128), c += 3;
    else if (2097152 > a) b.setUint8(c, a >> 18 & 7 | 240), b.setUint8(c + 1, a >> 12 & 63 | 128), b.setUint8(c + 2, a >> 6 & 63 | 128), b.setUint8(c + 3, a & 63 | 128), c += 4;
    else if (67108864 > a) b.setUint8(c, a >> 24 & 3 | 248), b.setUint8(c + 1, a >> 18 & 63 | 128), b.setUint8(c + 2, a >> 12 & 63 | 128), b.setUint8(c + 3, a >> 6 & 63 | 128), b.setUint8(c + 4,
      a & 63 | 128), c += 5;
    else if (-2147483648 > a) b.setUint8(c, a >> 30 & 1 | 252), b.setUint8(c + 1, a >> 24 & 63 | 128), b.setUint8(c + 2, a >> 18 & 63 | 128), b.setUint8(c + 3, a >> 12 & 63 | 128), b.setUint8(c + 4, a >> 6 & 63 | 128), b.setUint8(c + 5, a & 63 | 128), c += 6;
    else throw new u("Cannot encode UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
    return c - d
  };
  x.Bl = function (a) {
    if (0 > a) throw new u("Cannot calculate length of UTF8 character: charCode (" + a + ") is negative");
    if (128 > a) return 1;
    if (2048 > a) return 2;
    if (65536 > a) return 3;
    if (2097152 > a) return 4;
    if (67108864 > a) return 5;
    if (-2147483648 > a) return 6;
    throw new u("Cannot calculate length of UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
  };
  x.Se = function (a) {
    for (var b = 0, c = a.length, d = 0; d < c;) b += x.Bl(H.Be(a, d++));
    return b
  };
  x.Cl = function (a) {
    a >>>= 0;
    return 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5
  };
  x.prototype = {
    Mf: function () {
      var a = new ArrayBuffer(this.a),
        b = new Uint8Array(this.m.buffer, this.m.byteOffset, this.a);
      (new Uint8Array(a)).set(b);
      return a
    },
    oc: function () {
      return new Uint8Array(this.m.buffer,
        this.m.byteOffset, this.a)
    },
    Ed: function () {
      return new DataView(this.m.buffer, this.m.byteOffset, this.a)
    },
    Xo: function () {
      return new G(this.Ed(), this.La)
    },
    Rb: function (a) {
      this.m.byteLength < a && this.to(2 * this.m.byteLength >= a ? 2 * this.m.byteLength : a)
    },
    to: function (a) {
      if (1 > a) throw new u("Can't resize buffer to a capacity lower than 1");
      if (this.m.byteLength < a) {
        var b = new Uint8Array(this.m.buffer);
        a = new ArrayBuffer(a);
        (new Uint8Array(a)).set(b);
        this.m = new DataView(a)
      }
    },
    w: function (a) {
      var b = this.a++;
      this.Rb(this.a);
      this.m.setUint8(b, a)
    },
    ip: function (a) {
      var b = this.a;
      this.a += 2;
      this.Rb(this.a);
      this.m.setInt16(b, a, this.La)
    },
    Dc: function (a) {
      var b = this.a;
      this.a += 2;
      this.Rb(this.a);
      this.m.setUint16(b, a, this.La)
    },
    V: function (a) {
      var b = this.a;
      this.a += 4;
      this.Rb(this.a);
      this.m.setInt32(b, a, this.La)
    },
    ib: function (a) {
      var b = this.a;
      this.a += 4;
      this.Rb(this.a);
      this.m.setUint32(b, a, this.La)
    },
    Hk: function (a) {
      var b = this.a;
      this.a += 4;
      this.Rb(this.a);
      this.m.setFloat32(b, a, this.La)
    },
    v: function (a) {
      var b = this.a;
      this.a += 8;
      this.Rb(this.a);
      this.m.setFloat64(b,
        a, this.La)
    },
    Ec: function (a) {
      var b = this.a;
      this.a += a.byteLength;
      this.Rb(this.a);
      (new Uint8Array(this.m.buffer)).set(a, b)
    },
    Gh: function (a) {
      this.Ec(new Uint8Array(a))
    },
    cd: function (a) {
      this.Jb(x.Se(a));
      this.Of(a)
    },
    Ab: function (a) {
      null == a ? this.Jb(0) : (this.Jb(x.Se(a) + 1), this.Of(a))
    },
    Ik: function (a) {
      var b = x.Se(a);
      if (255 < b) throw new u(null);
      this.w(b);
      this.Of(a)
    },
    Nf: function (a) {
      this.cd(JSON.stringify(a))
    },
    Of: function (a) {
      var b = this.a;
      this.Rb(b + x.Se(a));
      for (var c = a.length, d = 0; d < c;) b += x.km(H.Be(a, d++), this.m, b);
      this.a =
        b
    },
    Jb: function (a) {
      var b = this.a;
      a >>>= 0;
      this.Rb(b + x.Cl(a));
      this.m.setUint8(b, a | 128);
      128 <= a ? (this.m.setUint8(b + 1, a >> 7 | 128), 16384 <= a ? (this.m.setUint8(b + 2, a >> 14 | 128), 2097152 <= a ? (this.m.setUint8(b + 3, a >> 21 | 128), 268435456 <= a ? (this.m.setUint8(b + 4, a >> 28 & 127), a = 5) : (this.m.setUint8(b + 3, this.m.getUint8(b + 3) & 127), a = 4)) : (this.m.setUint8(b + 2, this.m.getUint8(b + 2) & 127), a = 3)) : (this.m.setUint8(b + 1, this.m.getUint8(b + 1) & 127), a = 2)) : (this.m.setUint8(b, this.m.getUint8(b) & 127), a = 1);
      this.a += a
    },
    f: x
  };
  tb.b = !0;
  tb.prototype = {
    f: tb
  };
  Ha.b = !0;
  Ha.Om = function () {
    if (null != Ha.bh) return Ha.bh;
    Ha.bh = new Promise(function (a, b) {
      var c = window.grecaptcha;
      null != c ? a(c) : (c = window.document.createElement("script"), c.src = "https://www.google.com/recaptcha/api.js?onload=___recaptchaload&render=explicit", window.document.head.appendChild(c), window.___recaptchaload = function () {
        a(window.grecaptcha)
      }, c.onerror = function () {
        b(null)
      })
    });
    return Ha.bh
  };
  xa.b = !0;
  xa.lf = function (a) {
    return new PerfectScrollbar(a, {
      handlers: xa.Em
    })
  };
  cc.b = !0;
  cc.wo = function (a, b) {
    var c = window.document.createElement("a");
    c.style.display = "display: none";
    window.document.body.appendChild(c);
    var d = URL.createObjectURL(new Blob([a], {
      type: "octet/stream"
    }));
    c.href = d;
    c.download =
      b;
    c.click();
    URL.revokeObjectURL(d);
    c.remove()
  };
  vb.b = !0;
  vb.prototype = {
    set: function (a) {
      this.value != a && (this.value = a, this.Na.textContent = "" + this.value)
    },
    f: vb
  };
  t.b = !0;
  t.ta = function (a) {
    var b = Object.create(null),
      c = 0;
    for (a = a.querySelectorAll("[data-hook]"); c < a.length;) {
      var d = a[c];
      ++c;
      b[d.getAttribute("data-hook")] = d
    }
    return b
  };
  t.ua = function (a, b) {
    null == b && (b = "div");
    var c = window.document.createElement(b);
    c.innerHTML = a;
    return c.firstElementChild
  };
  t.Kd = function (a, b) {
    a.parentElement.replaceChild(b, a)
  };
  t.Wh = function (a) {
    for (var b =
        a.firstChild; null != b;) a.removeChild(b), b = a.firstChild
  };
  l.b = !0;
  l.Oa = function (a) {
    null == a.Ia && (a.Ia = !0);
    null == a.Ja && (a.Ja = !0);
    return a
  };
  l.Pa = function (a) {
    a.nl = l.ze;
    if (null == a.Ha) throw new u("Class doesn't have a config");
    a.prototype.Ce = a.Ha;
    l.Sk[l.ze] = a;
    l.ze++
  };
  l.Th = function (a, b) {
    var c = (null == a ? null : r.Pk(a)).nl;
    if (null == c) throw new u("Tried to pack unregistered action");
    b.w(c);
    a.Ba(b)
  };
  l.ai = function (a) {
    var b = a.I(),
      b = Object.create(l.Sk[b].prototype);
    b.ha = 0;
    b.Za = 0;
    b.Ca(a);
    return b
  };
  l.prototype = {
    apply: function () {
      throw new u("missing implementation");
    },
    Ca: function () {
      throw new u("missing implementation");
    },
    Ba: function () {
      throw new u("missing implementation");
    },
    f: l
  };
  Ga.b = !0;
  Ga.Kp = function (a, b, c) {
    if (0 == a.length)
      for (a = 0; a < b.length;) c.push(b[a++]);
    else if (0 == b.length)
      for (b = 0; b < a.length;) c.push(a[b++]);
    else
      for (var d = 0, e = a.length, f = 0, g = b.length;;) {
        var k = a[d],
          h = b[f];
        if (k.Za < h.Za) {
          if (c.push(k), ++d, d >= e) {
            for (; f < g;) c.push(b[f++]);
            break
          }
        } else if (c.push(h), ++f, f >= g) {
          for (; d < e;) c.push(a[d++]);
          break
        }
      }
  };
  Ga.prototype = {
    Tk: function (a) {
      for (var b = 0, c = a.Za, d = a.ha, e =
          0, f = this.list; e < f.length;) {
        var g = f[e];
        ++e;
        var k = g.Za;
        if (k > c) break;
        if (k == c) {
          g = g.ha;
          if (g > d) break;
          g == d && ++d
        }++b
      }
      a.ha = d;
      this.list.splice(b, 0, a)
    },
    Up: function (a) {
      for (var b = 0, c = 0, d = this.list; c < d.length && !(d[c++].Za >= a);) ++b;
      this.list.splice(0, b)
    },
    np: function (a, b) {
      for (var c = this.list; 0 < c.length;) c.pop();
      Ga.Kp(a.list, b.list, this.list)
    },
    Vp: function (a) {
      for (var b = 0, c = this.list, d = 0, e = c.length; d < e;) {
        var f = c[d++];
        f.Ae != a && (c[b] = f, ++b)
      }
      for (; c.length > b;) c.pop()
    },
    op: function (a) {
      for (var b = 0, c = 0, d = this.list; c < d.length &&
        !(d[c++].Za >= a);) ++b;
      return b
    },
    f: Ga
  };
  rb.b = !0;
  rb.prototype = {
    f: rb
  };
  Sa.b = !0;
  Sa.ma = l;
  Sa.prototype = E(l.prototype, {
    apply: function (a) {
      a.Nl(this.Rf)
    },
    Ba: function (a) {
      a.Jb(this.Rf.byteLength);
      a.Gh(this.Rf)
    },
    Ca: function (a) {
      this.Rf = a.dh(a.Wb())
    },
    f: Sa
  });
  Wb.b = !0;
  Wb.prototype = {
    f: Wb
  };
  Gb.b = !0;
  Gb.prototype = {
    add: function (a) {
      for (var b = this.Qa.length, c = 0, d = this.hd = 0; d < b;) {
        var e = d++,
          f = this.Qa[e];
        f.index++;
        f.weight *= .97;
        this.Qa[c].index < f.index && (c = e);
        this.hd += f.weight
      }
      b >= this.Jp ? (b = this.Qa[c], this.hd -= b.weight, this.Qa.splice(c,
        1)) : b = new Vb;
      b.value = a;
      b.weight = 1;
      b.index = 0;
      this.hd += b.weight;
      for (a = 0; a < this.Qa.length && this.Qa[a].value <= b.value;) ++a;
      this.Qa.splice(a, 0, b)
    },
    Zf: function (a) {
      if (0 == this.Qa.length) return 0;
      if (1 == this.Qa.length) return this.Qa[0].value;
      a *= this.hd;
      for (var b = this.Qa[0].weight, c = 0; c < this.Qa.length - 1 && !(b >= a);) ++c, b += this.Qa[c].weight;
      return this.Qa[c].value
    },
    max: function () {
      return 0 == this.Qa.length ? 0 : this.Qa[this.Qa.length - 1].value
    },
    f: Gb
  };
  Vb.b = !0;
  Vb.prototype = {
    f: Vb
  };
  Ub.b = !0;
  Ub.prototype = {
    stop: function () {
      this.Xk.hc =
        null;
      var a = pako.deflateRaw(this.Ld.oc()),
        b = x.ca(a.byteLength + 32);
      b.Of("HBR2");
      b.ib(this.version);
      b.ib(this.Xk.P - this.Xh);
      b.Ec(a);
      return b.oc()
    },
    f: Ub
  };
  sb.b = !0;
  ta.b = !0;
  U.b = !0;
  U.ma = rb;
  U.prototype = E(rb.prototype, {
    ia: function () {
      throw new u("missing implementation");
    },
    Xe: function () {
      throw new u("missing implementation");
    },
    s: function () {
      throw new u("missing implementation");
    },
    ei: function (a) {
      for (var b = this.zd.list, c = 0, d = b.length, e = 0; e < a;) {
        for (++e; c < d;) {
          var f = b[c];
          if (f.Za != this.P) break;
          f.apply(this.B);
          null !=
            this.hc && this.hc(f);
          this.Cb++;
          ++c
        }
        this.B.s(1);
        this.Gd += this.Cb;
        this.Cb = 0;
        this.P++
      }
      for (; c < d;) {
        a = b[c];
        if (a.Za != this.P || a.ha != this.Cb) break;
        a.apply(this.B);
        null != this.hc && this.hc(a);
        this.Cb++;
        ++c
      }
      b.splice(0, c)
    },
    Ff: function (a) {
      a.Za == this.P && a.ha <= this.Cb ? (a.ha = this.Cb++, a.apply(this.B), null != this.hc && this.hc(a)) : this.zd.Tk(a)
    },
    Xi: function (a, b) {
      if (0 >= a) return this.B;
      a > this.Je && (a = this.Je);
      ta.$b++;
      var c = this.B.Sb(),
        d;
      null != b ? (this.Dh.np(this.zd, b), d = this.Dh) : d = this.zd;
      d = d.list;
      for (var e = 0, f = d.length, g =
          this.P, k = a | 0, h = g + k; g <= h;) {
        for (; e < f;) {
          var m = d[e];
          if (m.Za > g) break;
          m.Ce.Ja && m.apply(c);
          ++e
        }
        c.s(g != h ? 1 : a - k);
        ++g
      }
      for (d = this.Dh.list; 0 < d.length;) d.pop();
      return c
    },
    Eo: function (a) {
      300 < a && (a = 300);
      0 > a && (a = 0);
      this.tc = this.pc * a | 0
    },
    f: U
  });
  var W = {
    Ke: !0,
    bi: ["Cancelled", "Rejected", "Other"],
    Hc: ["Cancelled", 0]
  };
  W.Hc.toString = ua;
  W.Hc.qb = W;
  W.jg = function (a) {
    a = ["Rejected", 1, a];
    a.qb = W;
    a.toString = ua;
    return a
  };
  W.gg = function (a) {
    a = ["Other", 2, a];
    a.qb = W;
    a.toString = ua;
    return a
  };
  Fa.b = !0;
  Fa.wi = function (a) {
    switch (a[1]) {
      case 0:
        return "Cancelled";
      case 1:
        return hc.description(a[2]);
      case 2:
        return a[2]
    }
  };
  Fa.ma = U;
  Fa.prototype = E(U.prototype, {
    Z: function (a) {
      null != this.Ob && (this.Ob.zc = null, this.Ob.Dl(), this.Ob = null);
      window.clearTimeout(this.Dd);
      null != this.wa && (this.wa.fe = null, this.wa.Z(), this.wa = null);
      this.Ci = null == a ? "Connection closed" : a;
      this.te(4)
    },
    te: function (a) {
      this.Lc != a && (this.Lc = a, null != this.Uc && this.Uc(a))
    },
    Qc: function () {
      return 3 == this.Lc
    },
    s: function () {
      this.Qc() && window.performance.now() - this.Bh > this.ml && this.oh();
      this.uc = window.performance.now() *
        this.pc + this.Ch.Zf(.5) - this.P;
      this.ri()
    },
    Xe: function () {
      return this.Qc() ? (0 > this.tc && (this.tc = 0), this.Xi(window.performance.now() * this.pc + this.Ch.Zf(.5) - this.P + this.tc, this.zf)) : this.B
    },
    ri: function () {
      0 > this.uc && (this.uc = 0);
      this.uc > this.Je && (this.uc = this.Je)
    },
    Rn: function (a) {
      switch (a.I()) {
        case 0:
          this.On(a);
          break;
        case 1:
          this.Ln(a);
          break;
        case 2:
          this.Sn(a);
          break;
        case 3:
          this.Qn(a);
          break;
        case 5:
          this.Nn(a)
      }
    },
    On: function (a) {
      a = pako.inflateRaw(a.Ac());
      a = new G(new DataView(a.buffer, a.byteOffset, a.byteLength));
      this.gc = a.wb();
      this.P = a.Sa();
      this.Gd = a.Sa();
      this.Cb = a.Wb();
      this.uc = 10;
      for (this.B.ba(a); 0 < a.m.byteLength - a.a;) this.Ff(this.Fk(a));
      window.clearTimeout(this.Dd);
      this.te(3)
    },
    Co: function (a) {
      var b = x.ca();
      b.w(0);
      b.Gh(a);
      this.Ad(b)
    },
    Ad: function (a, b) {
      null == b && (b = 0);
      this.wa.Ad(b, a)
    },
    Fk: function (a) {
      var b = a.Sa(),
        c = a.Wb(),
        d = a.wb(),
        e = a.Sa();
      a = l.ai(a);
      a.pa = d;
      a.Ae = e;
      a.Za = b;
      a.ha = c;
      return a
    },
    Ln: function (a) {
      a = this.Fk(a);
      this.Ff(a);
      a.pa == this.gc && this.zf.Vp(a.Ae);
      this.Pj()
    },
    Sn: function (a) {
      var b = a.Sa();
      a = a.Sa();
      this.gh.push({
        frame: b,
        ze: a
      });
      this.Pj()
    },
    Pj: function () {
      if (3 == this.Lc) {
        for (var a = 0, b = this.gh; a < b.length;) {
          var c = b[a];
          ++a;
          c.frame <= this.P || c.ze == this.Gd + this.Cb + this.zd.op(c.frame) && this.tl(c.frame - this.P)
        }
        for (var a = 0, b = this.gh, c = 0, d = b.length; c < d;) {
          var e = b[c++];
          e.frame > this.P && (b[a] = e, ++a)
        }
        for (; b.length > a;) b.pop();
        this.zf.Up(this.P)
      }
    },
    Nn: function (a) {
      var b = 0 != a.I();
      a = a.Zc();
      b = b ? "You were banned" : "You were kicked";
      "" != a && (b += " (" + a + ")");
      this.Z(b)
    },
    Qn: function (a) {
      var b = a.u();
      a = a.u();
      var c = window.performance.now() - a;
      this.Ch.add(b -
        a * this.pc);
      this.yf.add(c);
      y.i(this.pn, c)
    },
    oh: function () {
      this.Bh = window.performance.now();
      var a = this.yf.Zf(.5),
        b = x.ca();
      b.w(2);
      b.v(this.Bh);
      b.Jb(a | 0);
      this.Ad(b, 2)
    },
    tl: function (a) {
      this.ei(a);
      this.uc -= a;
      this.ri()
    },
    ia: function (a) {
      if (3 == this.Lc) {
        var b = this.en++,
          c = 0;
        a.Ce.Ia && (c = this.P + (this.uc | 0));
        var d = x.ca();
        d.w(1);
        d.ib(c);
        d.ib(b);
        l.Th(a, d);
        this.Ad(d);
        a.Ce.Ja && (a.Ae = b, a.pa = this.gc, a.Za = c, this.zf.Tk(a))
      }
    },
    f: Fa
  });
  Fb.b = !0;
  Fb.ma = U;
  Fb.prototype = E(U.prototype, {
    Z: function () {
      this.yc.Z();
      for (var a = 0, b = this.Qb; a <
        b.length;) {
        var c = b[a++].Ge;
        c.fe = null;
        c.tf = null;
        c.Z()
      }
    },
    jm: function (a, b, c) {
      a = this.Td[a];
      if (null != a) {
        c && this.yc.wl(a.Ge);
        var d = x.ca();
        d.w(5);
        d.w(c ? 1 : 0);
        d.cd(b);
        a.send(d);
        a.Ge.Z()
      }
    },
    md: function () {
      this.yc.md()
    },
    rh: function (a) {
      this.yc.rh(a)
    },
    ia: function (a) {
      a.pa = 0;
      var b = this.P + this.lh + this.tc;
      a.Ce.Ia || (b = this.P);
      a.Za = b;
      this.Ff(a);
      this.Gf();
      0 < this.Qb.length && this.Hf(this.Rg(a), 1)
    },
    s: function () {
      var a = ((window.performance.now() - this.wh) * this.pc | 0) - this.P;
      0 < a && this.ei(a);
      8 <= this.P - this.ej && this.Gf();
      this.P -
        this.dj >= this.Jl && (this.Gf(), this.Ao())
    },
    Xe: function () {
      0 > this.tc && (this.tc = 0);
      return this.Xi((window.performance.now() - this.wh) * this.pc - this.P + this.lh + this.tc)
    },
    zm: function (a, b) {
      if (this.Qb.length >= this.nf) return va.ig(4100);
      try {
        if (b.wb() != this.hp) throw new u(null);
      } catch (d) {
        return va.ig(4103)
      }
      try {
        var c = b.xb();
        if (null != this.eb && c != this.eb) throw new u(null);
      } catch (d) {
        return va.ig(4101)
      }
      return va.fg
    },
    nn: function (a) {
      var b = this;
      if (this.Qb.length >= this.nf) a.Z();
      else {
        var c = new Tb(a);
        this.Qb.push(c);
        a.tf =
          function (a) {
            a = new G(new DataView(a));
            b.Mn(a, c)
          };
        a.fe = function () {
          H.remove(b.Qb, c);
          delete b.Td[c.id];
          for (var a = b.Pi; null != a;) a.Jh(c.id), a = a.next
        }
      }
    },
    Rg: function (a) {
      var b = x.ca();
      b.w(1);
      this.zj(a, b);
      return b
    },
    zj: function (a, b) {
      b.ib(a.Za);
      b.Jb(a.ha);
      b.Dc(a.pa);
      b.ib(a.Ae);
      l.Th(a, b)
    },
    Gf: function () {
      if (!(0 >= this.P - this.ej) && 0 != this.Qb.length) {
        var a = x.ca();
        a.w(2);
        a.ib(this.P);
        a.ib(this.Gd);
        this.Hf(a, 2);
        this.ej = this.P
      }
    },
    Hf: function (a, b) {
      null == b && (b = 0);
      for (var c = 0, d = this.Qb; c < d.length;) {
        var e = d[c];
        ++c;
        e.$f && e.send(a,
          b)
      }
    },
    Bo: function (a) {
      var b = x.ca();
      b.w(0);
      var c = x.ca();
      c.Dc(a.id);
      c.ib(this.P);
      c.ib(this.Gd);
      c.Jb(this.Cb);
      this.B.X(c);
      for (var d = this.zd.list, e = 0, f = d.length; e < f;) this.zj(d[e++], c);
      b.Ec(pako.deflateRaw(c.oc()));
      a.send(b)
    },
    Ao: function () {
      this.dj = this.P;
      if (0 != this.Qb.length) {
        var a = new Sa;
        a.Za = this.P;
        a.ha = this.Cb++;
        a.pa = 0;
        a.Rf = this.B.om();
        this.Hf(this.Rg(a))
      }
    },
    Un: function (a, b) {
      for (var c = this.$m++, d = this.Oi; null != d;) d.Jh(c, a), d = d.next;
      b.id = c;
      b.$f = !0;
      this.Td[c] = b;
      this.Bo(b)
    },
    Mn: function (a, b) {
      this.s();
      try {
        if (!b.zp.Ck()) throw new u(1);
        var c = a.I();
        if (b.$f) switch (c) {
            case 1:
              this.Vn(a, b);
              break;
            case 2:
              this.Pn(a, b);
              break;
            default:
              throw new u(0);
          } else if (0 == c) this.Un(a, b);
          else throw new u(0);
        if (0 < a.m.byteLength - a.a) throw new u(2);
      } catch (d) {
        d instanceof u && (d = d.jb), window.console.log(d), delete this.Td[b.id], H.remove(this.Qb, b), b.$f && null != this.rj && this.rj(b.id), b.Ge.Z()
      }
    },
    Pn: function (a, b) {
      var c = a.u();
      b.ping = a.Wb();
      var d = x.ca();
      d.w(3);
      d.v((window.performance.now() - this.wh) * this.pc + this.lh);
      d.v(c);
      b.send(d)
    },
    Vn: function (a, b) {
      var c = a.Sa(),
        d = a.Sa(),
        e = l.ai(a),
        f = e.Ce.cl;
      if (null != f) {
        var g = b.Jk.get(f);
        null == g && (g = new nb(f.Lk, f.gl), b.Jk.set(f, g));
        if (!g.Ck()) throw new u(3);
      }
      c < this.P && (c = this.P);
      e.Ae = d;
      e.pa = b.id;
      e.Za = c;
      this.Ff(e);
      this.Gf();
      this.Hf(this.Rg(e))
    },
    f: Fb
  });
  Tb.b = !0;
  Tb.prototype = {
    send: function (a, b) {
      null == b && (b = 0);
      this.Ge.Ad(b, a)
    },
    f: Tb
  };
  Sb.b = !0;
  Eb.b = !0;
  Eb.prototype = {
    f: Eb
  };
  Db.b = !0;
  Db.ma = U;
  Db.prototype = E(U.prototype, {
    Qj: function () {
      var a = this.xd;
      0 < a.m.byteLength - a.a ? (a = this.xd.Wb(), this.rf += a, a = this.xd.wb(), this.qf = l.ai(this.xd), this.qf.pa =
        a) : this.qf = null
    },
    tm: function () {
      return this.P / this.Cf
    },
    ia: function () {},
    Xe: function () {
      this.s();
      ta.$b++;
      var a = this.B.Sb();
      a.s(this.Ri);
      return a
    },
    s: function () {
      var a = 0, // EDIT
        b = a - this.Og;
      this.Og = a;
      0 < this.ad ? (this.zb += 1E4, this.zb > this.ad && (this.zb = this.ad, this.ad = -1)) : this.zb += b * this.Gj;
      a = this.Cf * this.kg;
      this.zb > a && (this.zb = a);
      b = this.zb * this.pc;
      a = b | 0;
      for (this.Ri = b - a; this.P < a;) {
        for (; null != this.qf && this.rf == this.P;) b = this.qf, b.apply(this.B), null != this.hc && this.hc(b), this.Qj();
        this.P++;
        this.B.s(1)
        this.onTick && this.onTick();
      }
    },
    zo: function (a) {
      this.ad = a;
      a < this.zb && this.jh()
    },
    jh: function () {
      this.rf = 0;
      this.zb = this.P = this.xd.a = 0;
      this.B.ba(this.xd);
      this.Qj()
    },
    f: Db
  });
  Cb.b = !0;
  Cb.prototype = {
    eval: function (a) {
      var b = this.Bb.length - 1;
      if (a <= this.Bb[0]) return this.Bb[1];
      if (a >= this.Bb[b]) return this.Bb[b - 2];
      for (var c = 0, b = b / 5 | 0;;) {
        var d = b + c >>> 1;
        a > this.Bb[5 * d] ? c = d + 1 : b = d - 1;
        if (!(c <= b)) break
      }
      c = 5 * b;
      b = this.Bb[c];
      a = (a - b) / (this.Bb[c + 5] - b);
      b = a * a;
      d = b * a;
      return (2 * d - 3 * b + 1) * this.Bb[c + 1] + (d - 2 * b + a) * this.Bb[c + 2] + (-2 * d + 3 * b) * this.Bb[c + 3] + (d - b) * this.Bb[c + 4]
    },
    f: Cb
  };
  O.b = !0;
  O.prototype = {
    f: O
  };
  J.b = !0;
  J.$j = function (a, b, c, d, e) {
    return new Promise(function (f, g) {
      var k = new XMLHttpRequest;
      k.open(b, a);
      k.responseType = c;
      k.onload = function () {
        200 <= k.status && 300 > k.status ? null != k.response ? f(k.response) : g(null) : g("status: " + k.status)
      };
      k.onerror = function (a) {
        g(a)
      };
      null != e && k.setRequestHeader("Content-type", e);
      k.send(d)
    })
  };
  J.N = function (a, b) {
    return J.$j(a, "GET", b, null)
  };
  J.Ui = function (a) {
    return J.N(a, "json").then(function (a) {
      var b = a.error;
      if (null != b) throw new u(b);
      return a.data
    })
  };
  J.Jn = function (a, b, c) {
    return J.$j(a, "POST", "json", b, c)
  };
  J.Kn = function (a, b, c) {
    return J.Jn(a, b, c).then(function (a) {
      var b = a.error;
      if (null != b) throw new u(b);
      return a.data
    })
  };
  B.b = !0;
  B.i = function (a) {
    null != a && a()
  };
  y.b = !0;
  y.i = function (a, b) {
    null != a && a(b)
  };
  Ia.b = !0;
  Ia.i = function (a, b, c) {
    null != a && a(b, c)
  };
  ub.b = !0;
  ub.i = function (a, b, c, d) {
    null != a && a(b, c, d)
  };
  bc.b = !0;
  bc.i = function (a, b, c, d, e) {
    null != a && a(b, c, d, e)
  };
  nb.b = !0;
  nb.prototype = {
    Ck: function (a) {
      null == a && (a = 1);
      this.s();
      return a <= this.Mb ? (this.Mb -= a, !0) : !1
    },
    Uo: function (a) {
      this.s();
      a -= this.Mb;
      return 0 >= a ? 0 : this.$d + a * this.Eh - window.performance.now()
    },
    Ul: function (a, b) {
      var c = this.Uo(a);
      this.Mb -= a;
      window.setTimeout(b, c | 0)
    },
    s: function () {
      var a = window.performance.now(),
        b = Math.floor((a - this.$d) / this.Eh);
      this.$d += b * this.Eh;
      this.Mb += b;
      this.Mb >= this.pi && (this.Mb = this.pi, this.$d = a)
    },
    f: nb
  };
  Bb.b = !0;
  Bb.Xc = function (a) {
    var b = new Yb("([^&=]+)=?([^&]*)", "g");
    a = a.substring(1);
    for (var c = 0, d = new Map; b.Gp(a, c);) {
      var c = b.Yk(1),
        c = decodeURIComponent(c.split("+").join(" ")),
        e = b.Yk(2);
      d.set(c, decodeURIComponent(e.split("+").join(" ")));
      c = b.Hp();
      c = c.Sp + c.Ep
    }
    return d
  };
  Bb.N = function () {
    return Bb.Xc(window.top.location.search)
  };
  Ab.b = !0;
  Ab.prototype = {
    f: Ab
  };
  ac.b = !0;
  ac.qc = [Ab];
  Q.b = !0;
  Q.qc = [Ab];
  Q.prototype = {
    then: function (a) {
      0 == this.B ? this.He.push(a) : 1 == this.B && a(this.Wp);
      return this
    },
    Fe: function (a) {
      0 == this.B ? this.De.push(a) : 2 == this.B && a(this.tp);
      return this
    },
    Dp: function (a) {
      if (0 == this.B) {
        var b = function () {
          a()
        };
        this.He.push(b);
        this.De.push(b)
      } else a();
      return this
    },
    resolve: function (a) {
      if (0 != this.B) throw new u(new Qa("Cant resolve promise; it is already resolved."));
      this.Ok(a)
    },
    error: function (a) {
      if (0 != this.B) throw new u(new Qa("Cant resolve promise; it is already resolved."));
      this.Nk(a)
    },
    Zk: function (a) {
      0 == this.B && this.Ok(a)
    },
    Qh: function (a) {
      0 == this.B && this.Nk(a)
    },
    Ok: function (a) {
      this.B = 1;
      this.Wp = a;
      for (var b = 0, c = this.He; b < c.length;) c[b++](a);
      this.De = this.He = null
    },
    Nk: function (a) {
      this.B = 2;
      this.tp = a;
      for (var b = 0, c = this.De; b < c.length;) c[b++](a);
      this.De = this.He = null
    },
    map: function (a) {
      var b = new Q;
      this.then(function (c) {
        var d;
        try {
          d = a(c)
        } catch (e) {
          e instanceof u && (e = e.jb);
          b.error(e);
          return
        }
        b.resolve(d)
      });
      this.Fe(function (a) {
        b.error(a)
      });
      return b
    },
    Uh: function (a) {
      var b = new Q;
      this.then(function (c) {
        var d;
        try {
          d = a(c)
        } catch (e) {
          e instanceof u && (e = e.jb);
          b.error(e);
          return
        }
        d.then(A(b, b.resolve));
        d.Fe(A(b, b.error))
      });
      this.Fe(function (a) {
        b.error(a)
      });
      return b
    },
    f: Q
  };
  Qa.b = !0;
  Qa.ma = Ib;
  Qa.prototype = E(Ib.prototype, {
    f: Qa
  });
  pb.b = !0;
  pb.qc = [ac];
  pb.ma = Q;
  pb.prototype = E(Q.prototype, {
    f: pb
  });
  $b.b = !0;
  $b.timeout = function (a, b, c) {
    var d = new pb(b, c);
    a.then(function (a) {
      d.Zk(a)
    });
    a.Fe(function (a) {
      d.Qh(a)
    });
    return d
  };
  sa.b = !0;
  sa.qp = function (a) {
    var b = new Q;
    a.createAnswer(A(b, b.resolve), A(b, b.error));
    return b
  };
  sa.rp = function (a) {
    var b = new Q;
    a.createOffer(A(b, b.resolve), A(b, b.error));
    return b
  };
  sa.$p = function (a, b) {
    var c = new Q;
    a.setLocalDescription(b, function () {
      c.resolve(b)
    }, A(c, c.error));
    return c
  };
  sa.aq = function (a, b) {
    var c = new Q;
    a.setRemoteDescription(b, function () {
      c.resolve(b)
    }, A(c, c.error));
    return c
  };
  ob.b = !0;
  ob.Fn = function (a) {
    if (3 > a.length) throw new u("Not enough arguments");
    if (7 < a.length) throw new u("Too many arguments");
    var b = new Na,
      c = new ha;
    b.Sf = c;
    switch (a[1]) {
      case "blue":
        c.Ua = [q.la.ea];
        b.W = q.la;
        break;
      case "red":
        c.Ua = [q.$.ea];
        b.W = q.$;
        break;
      default:
        throw new u('First argument must be either "red" or "blue"');
    }
    if ("clear" == a[2]) return b;
    c.Ic = 256 * N.parseInt(a[2]) / 360 | 0;
    c.Bc = N.parseInt("0x" + a[3]);
    if (4 < a.length) {
      c.Ua = [];
      for (var d = 4, e = a.length; d < e;) c.Ua.push(N.parseInt("0x" + a[d++]))
    }
    return b
  };
  ob.prototype = {
    Xc: function (a) {
      if ("/" != a.charAt(0)) return !1;
      if (1 == a.length) return !0;
      a = M.Yp(H.substr(a, 1, null)).split(" ");
      var b = a[0];
      switch (b) {
        case "avatar":
          2 == a.length && (this.kk(a[1]), this.va("Avatar set"));
          break;
        case "checksum":
          a = this.za.B.U;
          var c = a.o;
          a.cf() ? this.va('Current stadium is original: "' + c + '"') : (a = M.Kh(a.ti(), 8), this.va('Stadium: "' + c + '" (checksum: ' + a + ")"));
          break;
        case "clear_avatar":
          this.kk(null);
          this.va("Avatar cleared");
          break;
        case "clear_bans":
          null == this.md ? this.va("Only the host can clear bans") : (this.md(), this.va("All bans have been cleared"));
          break;
        case "clear_password":
          null == this.If ? this.va("Only the host can change the password") :
            (this.If(null), this.va("Password set"));
          break;
        case "colors":
          try {
            c = ob.Fn(a), this.za.ia(c)
          } catch (d) {
            d instanceof u && (d = d.jb), r.mg(d, String) && this.va(d)
          }
          break;
        case "handicap":
          2 == a.length ? (c = N.parseInt(a[1]), null != c && 0 <= c && 300 >= c ? (this.za.Eo(c), this.va("Ping handicap set to " + c + " msec")) : this.va("Ping handicap must be a value between 0 and 300 milliseconds")) : this.va("Ping handicap requires a value in milliseconds.");
          break;
        case "set_password":
          2 == a.length && (null == this.If ? this.va("Only the host can change the password") :
            (this.If(a[1]), this.va("Password set")));
          break;
        default:
          this.va('Unrecognized command: "' + b + '"')
      }
      return !0
    },
    kk: function (a) {
      null != a && (a = ra.dd(a, 2));
      p.J.qg.gb(a);
      this.za.ia(ma.ja(a))
    },
    f: ob
  };
  Ea.b = !0;
  ba.b = !0;
  ba.ek = function (a) {
    var b = new Date;
    cc.wo(a, "HBReplay-" + b.getFullYear() + "-" + M.Ee("" + (b.getMonth() + 1)) + "-" + M.Ee("" + b.getDate()) + "-" + M.Ee("" + b.getHours()) + "h" + M.Ee("" + b.getMinutes()) + "m.hbr2")
  };
  ba.Yn = function (a) {
    for (var b = a.B.F, c = [], d = 0, e = 0, f = 0; f < b.length;) {
      var g = b[f];
      ++f;
      g.W == q.ya && c.push(g.S);
      g.W == q.$ ?
        ++d : g.W == q.la && ++e
    }
    f = c.length;
    0 != f && (b = function () {
      return c.splice(Math.random() * c.length | 0, 1)[0]
    }, e == d ? 2 > f || (a.ia(P.ja(b(), q.$)), a.ia(P.ja(b(), q.la))) : (d = e > d ? q.$ : q.la, a.ia(P.ja(b(), d))))
  };
  ba.prototype = {
    Ro: function () {
      this.$c = new Ub(this.za, 1)
    },
    Oo: function (a) {
      var b = this;
      a = new eb(a);
      a.cb = function () {
        b.j.hb(null)
      };
      a.Xg = function (a, d, e) {
        b.za.ia(Y.ja(a, d, e));
        b.j.hb(null)
      };
      this.j.hb(a.g)
    },
    Z: function () {
      window.document.removeEventListener("keydown", A(this, this.Vc));
      window.document.removeEventListener("keyup",
        A(this, this.Wc));
      window.onbeforeunload = null;
      window.cancelAnimationFrame(this.Od);
      this.bb.Z();
      window.clearInterval(this.Dg);
      window.clearInterval(this.gp)
    },
    so: function (a) {
      for (var b = [], c = 0, d = this.za.B.F; c < d.length;) {
        var e = d[c];
        ++c;
        e.W == a && b.push(P.ja(e.S, q.ya))
      }
      for (a = 0; a < b.length;) this.za.ia(b[a++])
    },
    ee: function () {
      this.Od = window.requestAnimationFrame(A(this, this.ee));
      this.bb.s();
      this.za.s();
      this.ic()
    },
    ic: function () {
      var a = window.performance.now();
      1 == p.J.Cg.N() && 28.333333333333336 > a - this.vc || (this.vc =
        a, this.Oc++, this.ue(p.J.rb.N()), a = this.za.B.na(this.za.gc), null != a && (this.mh = a.oa), this.j.s(this.za))
    },
    kn: function (a) {
      var b = this;
      this.vg.Xc(a) || this.Gl.Ul(1, function () {
        var c = new La;
        c.Vf = a;
        b.za.ia(c)
      })
    },
    Bk: function () {
      if (null != this.za.B.A) {
        var a = new Ma;
        a.Sh = 120 != this.za.B.A.Fa;
        this.za.ia(a)
      }
    },
    Vc: function (a) {
      var b = a.keyCode;
      switch (b) {
        case 9:
        case 13:
          this.j.lb.dc.focus();
          a.preventDefault();
          break;
        case 27:
          this.j.Im() ? this.j.hb(null) : (b = this.j, b.Bd(!b.bd));
          a.preventDefault();
          break;
        case 49:
          p.J.rb.gb(1);
          break;
        case 50:
          p.J.rb.gb(2);
          break;
        case 51:
          p.J.rb.gb(3);
          break;
        case 52:
          p.J.rb.gb(0);
          break;
        case 80:
          this.Bk();
          break;
        default:
          this.bb.Vc(b)
      }
    },
    ue: function (a) {
      var b = this.j.Db;
      0 >= a ? (b.Jf(!0), b.kb.wd = 1, b.kb.Fd = 0) : (b.Jf(!1), b.kb.Fd = 35, b.kb.wd = 1 + .25 * (a - 1))
    },
    Wc: function (a) {
      this.bb.Wc(a.keyCode)
    },
    f: ba
  };
  yb.b = !0;
  yb.prototype = {
    hh: function (a) {
      var b = this;
      a.Kj = function (a) {
        b.j.lb.Ub("" + a.o + " has joined");
        p.$a.ke(p.$a.Jm)
      };
      a.Lj = function (a, d, e, f) {
        y.i(b.rn, a.S);
        null == d ? a = "" + a.o + " has left" : (ub.i(b.qn, a.S, d, e), a = "" + a.o + " was " +
          (e ? "banned" : "kicked") + " by " + f.o + " " + ("" != d ? " (" + d + ")" : ""));
        b.j.lb.Ub(a);
        p.$a.ke(p.$a.Mm)
      };
      a.Ij = function (a, d) {
        b.j.lb.va("" + a.o + ": " + d);
        p.J.nk.N() && p.$a.ke(p.$a.Fl)
      };
      a.$g = function () {
        p.$a.ke(p.$a.Km)
      };
      a.yh = function (a) {
        p.$a.ke(p.$a.um);
        var c = b.j.Db.kb.Pc;
        c.og(a == q.$ ? c.eo : c.yl)
      };
      a.zh = function (a) {
        var c = b.j.Db.kb.Pc;
        c.og(a == q.$ ? c.fo : c.zl);
        b.j.lb.Ub("" + a.o + " team won the match")
      };
      a.Dj = function (a) {
        b.j.lb.Ub("Game paused by " + a.o)
      };
      a.Ah = function () {
        var a = b.j.Db.kb.Pc;
        a.og(a.So)
      };
      a.vh = function (a) {
        b.j.Bd(!1);
        b.j.Db.kb.Pc.Kl();
        b.j.lb.Ub("Game started by " + a.o)
      };
      a.we = function (a) {
        null != a && b.j.lb.Ub("Game stopped by " + a.o)
      };
      a.th = function (a, d) {
        if (!d.cf()) {
          var c = M.Kh(d.ti(), 8);
          b.j.lb.Ub("" + a.o + ' loaded "' + d.o + '" (' + c + ")")
        }
      };
      a.Jj = function (a) {
        b.j.lb.Ub("" + a.o + " " + (a.fd ? "has desynchronized" : "is back in sync"))
      };
      a.Nj = function (c, d, e) {
        null != a.A && b.j.lb.Ub("" + d.o + " was moved to " + e.o + " by " + c.o)
      }
    },
    ap: function (a) {
      a.Kj = null;
      a.Lj = null;
      a.Ij = null;
      a.$g = null;
      a.yh = null;
      a.zh = null;
      a.Dj = null;
      a.Ah = null;
      a.vh = null;
      a.we = null;
      a.th =
        null;
      a.Jj = null;
      a.Nj = null
    },
    f: yb
  };
  Pa.b = !0;
  Pa.bj = function (a) {
    switch (a) {
      case 37:
      case 65:
        return 4;
      case 38:
      case 87:
        return 1;
      case 39:
      case 68:
        return 8;
      case 40:
      case 83:
        return 2;
      case 16:
      case 17:
      case 32:
      case 45:
      case 88:
      case 96:
        return 16;
      default:
        return 0
    }
  };
  Pa.prototype = {
    Z: function () {
      window.document.removeEventListener("focusout", A(this, this.sj))
    },
    s: function () {
      var a = this.od;
      if (null != this.vf && a != this.hf) {
        this.hf = a;
        var b = new Ba;
        b.input = a;
        this.vf(b)
      }
    },
    Vc: function (a) {
      this.od |= Pa.bj(a)
    },
    Wc: function (a) {
      this.od &= ~Pa.bj(a)
    },
    sj: function () {
      if (null != this.vf && 0 != this.hf) {
        this.hf = this.od = 0;
        var a = new Ba;
        a.input = 0;
        this.vf(a)
      }
    },
    f: Pa
  };
  T.b = !0;
  T.mm = function (a) {
    return T.Si(JSON.parse(a))
  };
  T.Si = function (a) {
    var b = new T;
    b.Tb = a.lat;
    b.Vb = a.lon;
    b.ab = a.code.toLowerCase();
    return b
  };
  T.sm = function () {
    return J.Ui(p.Ne + "api/geo").then(function (a) {
      return T.Si(a)
    })
  };
  T.prototype = {
    Yo: function () {
      return JSON.stringify({
        lat: this.Tb,
        lon: this.Vb,
        code: this.ab
      })
    },
    f: T
  };
  Rb.b = !0;
  Rb.prototype = {
    Hg: function () {
      return null != this.Wd.N() ? this.Wd.N() : null != this.Vd.N() ?
        this.Vd.N() : new T
    },
    f: Rb
  };
  Qb.b = !0;
  Qb.Rk = function () {
    try {
      var a = window.localStorage;
      a.getItem("");
      if (0 == a.length) {
        var b = "_hx_" + Math.random();
        a.setItem(b, b);
        a.removeItem(b)
      }
      return a
    } catch (c) {
      return null
    }
  };
  Oa.b = !0;
  Oa.prototype = {
    N: function () {
      return this.Gk
    },
    gb: function (a) {
      this.Gk = a;
      if (null != this.Qg) try {
        var b = this.jp(a);
        null == b ? this.Qg.removeItem(this.o) : this.Qg.setItem(this.o, b)
      } catch (c) {}
    },
    f: Oa
  };
  p.b = !0;
  zb.b = !0;
  zb.prototype = {
    f: zb
  };
  v.b = !0;
  v.Vm = function () {
    dc.Lp();
    w.Mh(function () {
      v.Hi(v.Tn)
    })
  };
  v.qm = function () {
    var a =
      Qb.Rk();
    return null != a ? null != a.getItem("crappy_router") : !1
  };
  v.Hi = function (a) {
    var b = new jb(p.J.ud.N());
    b.vj = function (b) {
      p.J.ud.gb(b);
      p.$a.bk();
      a()
    };
    w.xa(b.g);
    b.pb.focus()
  };
  v.Ji = function (a, b) {
    var c = new R(a);
    c.Ma = b;
    w.xa(c.g)
  };
  v.Tn = function () {
    var a = Bb.N(),
      b = a.get("c"),
      c = a.get("p");
    a.get("v");
    null != b ? null != c ? v.Ii(b) : v.Ve(b) : v.ub()
  };
  v.ub = function () {
    var a = new ea(p.J.Hg());
    w.xa(a.Na);
    a.$k = function (b) {
      if (b.df) {
        var c = new V("Open Flash version?", "This room is a flash version room, open anyway?", ["Cancel", "Ok"]);
        w.xa(c.g);
        c.Ma = function (d) {
          w.xa(a.Na);
          0 != d && window.top.open("http://www.haxball.com/?roomid=" + b.ka + (b.cc.eb ? "&pass=1" : ""), "_self");
          return c.Ma = null
        }
      } else if (7 != b.cc.Cc) {
        var d, e;
        7 > b.cc.Cc ? (d = "Old version room", e = "The room is running an older version, an update must have happened recently.") : (d = "New version", e = "The room is running a new version of haxball, refresh the site to update.");
        var f = new V(d, e, ["Ok"]);
        w.xa(f.g);
        f.Ma = function () {
          w.xa(a.Na);
          return f.Ma = null
        }
      } else b.cc.eb ? v.Ii(b.ka) : v.Ve(b.ka)
    };
    a.Op = function () {
      v.fm()
    };
    a.Np = function () {
      v.Hi(v.ub)
    };
    a.Qp = function () {
      v.Ki()
    };
    a.Pp = function (a) {
      v.gm(a)
    }
  };
  v.Ki = function () {
    var a = new aa(!0),
      b = window.document.createElement("div");
    b.className = "view-wrapper";
    b.appendChild(a.g);
    w.xa(b);
    a.cb = function () {
      v.ub()
    };
    a.jn = function () {
      var a = new kb,
        b = window.document.createElement("div");
      b.className = "view-wrapper";
      b.appendChild(a.g);
      w.xa(b);
      return a.cb = function () {
        v.Ki()
      }
    }
  };
  v.Sg = function (a, b) {
    return "" + window.location.origin + "/?c=" + a + (b ? "&p=1" : "")
  };
  v.fm = function () {
    var a =
      p.J.ud.N(),
      b = new hb("" + a + "'s room");
    w.xa(b.g);
    b.Vg = function () {
      v.ub()
    };
    b.ln = function (b) {
      function c() {
        if (!b.fq) {
          var a = new mb;
          a.Cc = 7;
          a.o = g.Ib;
          a.F = g.F.length;
          a.rd = h.nf + 1;
          a.ab = f.ab;
          a.eb = null != h.eb;
          a.Tb = f.Tb;
          a.Vb = f.Vb;
          var c = x.ca(16);
          a.X(c);
          a = c.Mf();
          h.rh(a)
        }
      }
      w.xa((new V("Creating room", "Connecting...", [])).g);
      var e = null,
        f = p.J.Hg(),
        g = new da;
      g.Ib = b.name;
      var k = new ca;
      k.o = a;
      k.oa = !0;
      k.ed = f.ab;
      k.Ya = p.J.qg.N();
      g.F.push(k);
      var h = new Fb({
        iceServers: p.af,
        Ph: p.Ne + "api/host",
        state: g,
        version: 7
      });
      h.nf = b.Ip - 1;
      h.eb = b.password;
      c();
      var m = new ba(h),
        z = !1;
      h.he = function (a, b) {
        v.Ji(a, function (a) {
          b(a);
          w.xa(m.j.g);
          return z = !0
        })
      };
      var l = window.setInterval(function () {
        var a = ia.ja(h);
        h.ia(a)
      }, 3E3);
      h.rj = function (a) {
        null != g.na(a) && (a = Y.ja(a, "Bad actor", !1), h.ia(a))
      };
      k = new tb(function (a, b) {
        var d = b.Zc();
        if (25 < d.length) throw new u("name too long");
        var e = b.Zc();
        if (3 < e.length) throw new u("country too long");
        var f = b.xb();
        if (null != f && 2 < f.length) throw new u("avatar too long");
        d = ja.ja(a, d, e, f);
        h.ia(d);
        c()
      }, 0, null);
      k.next = h.Oi;
      h.Oi = k;
      k = new tb(function (a) {
        null !=
          g.na(a) && (a = Y.ja(a, null, !1), h.ia(a))
      }, 0, null);
      k.next = h.Pi;
      h.Pi = k;
      k = new tb(function (a) {
        e = a;
        m.Ef = v.Sg(a, null != h.eb);
        z || (z = !0, w.xa(m.j.g))
      }, 0, null);
      k.next = h.Qi;
      h.Qi = k;
      m.Eg.qn = function (a, b, c) {
        h.jm(a, b, c)
      };
      m.Eg.rn = function () {
        c()
      };
      m.j.sd = function () {
        h.Z();
        m.Z();
        v.ub();
        window.clearInterval(l)
      };
      m.vg.If = function (a) {
        h.eb = a;
        c();
        null != e && (m.Ef = v.Sg(e, null != h.eb))
      };
      m.vg.md = A(h, h.md)
    }
  };
  v.Ii = function (a) {
    var b = new Xa;
    w.xa(b.g);
    b.Ma = function (b) {
      null == b ? v.ub() : v.Ve(a, b)
    }
  };
  v.gm = function (a) {
    try {
      var b = new Pb(new Db(new Uint8Array(a),
        new da, 1));
      b.oe.sd = function () {
        b.Z();
        v.ub()
      };
      w.xa(b.j.g)
    } catch (e) {
      if (e instanceof u && (e = e.jb), r.mg(e, Eb)) {
        var c = e;
        a = new V("Incompatible replay version", "The replay file is of a different version", ["Open player", "Cancel"]);
        w.xa(a.g);
        a.Ma = function (a) {
          0 == a ? (a = window.top.location, window.top.open(a.protocol + "//" + a.hostname + (null != a.port ? ":" + a.port : "") + "/replay?v=" + c.Cc, "_self")) : v.ub()
        }
      } else {
        var d = new V("Replay error", "Couldn't load the file.", ["Ok"]);
        w.xa(d.g);
        d.Ma = function () {
          d.Ma = null;
          v.ub()
        }
      }
    }
  };
  v.Ve =
    function (a, b) {
      try {
        var c = v.qm(),
          d = new da,
          e = x.ca();
        e.cd(p.J.ud.N());
        e.cd(p.J.Hg().ab);
        e.Ab(p.J.qg.N());
        var f = p.af,
          g = p.kp,
          k = e.Mf(),
          h = new Fa(a, {
            iceServers: f,
            Ph: g,
            state: d,
            version: 7,
            hq: k,
            password: b,
            el: c,
            eq: p.J.Zn.N()
          }),
          m = new ib;
        m.va("Connecting to master...");
        m.tg.onclick = function () {
          h.Uc = null;
          h.ge = null;
          h.Z();
          v.ub()
        };
        w.xa(m.g);
        var z = function (a, b) {
            var c = new gb(a, b);
            c.Ma = function () {
              v.ub()
            };
            w.xa(c.g)
          },
          l = function () {
            var b = new ba(h);
            h.pn = function (a) {
              b.j.Cd.Jo((10 * h.yf.Zf(.5) | 0) / 10);
              b.j.Cd.Ho((10 * h.yf.max() | 0) /
                10);
              b.j.Cd.Ej.rl(a)
            };
            b.Ef = v.Sg(a, !1);
            w.xa(b.j.g);
            b.j.sd = function () {
              h.Uc = null;
              h.Z();
              b.Z();
              v.ub()
            };
            h.Uc = function () {
              h.Uc = null;
              b.Z();
              var a = null == b.$c ? null : b.$c.stop();
              z(h.Ci, a)
            }
          };
        h.ge = function (c) {
          h.ge = null;
          h.Uc = null;
          1 == c[1] ? 4002 == c[2] ? v.Ji(p.bo, function () {
            v.Ve(a, b)
          }) : z(Fa.wi(c), null) : z(Fa.wi(c), null)
        };
        h.Uc = function (a) {
          switch (a) {
            case 1:
              m.va("Connecting to peer...");
              break;
            case 2:
              m.va("Awaiting state...");
              break;
            case 3:
              l()
          }
        };
        h.un = function () {
          m.va("Trying reverse connection...")
        }
      } catch (Kb) {
        Kb instanceof u &&
          (Kb = Kb.jb), window.console.log(Kb), c = new V("Unexpected Error", "", []), c.Ue.innerHTML = "An error ocurred while attempting to join the room.<br><br>This might be caused by a browser extension, try disabling all extensions and refreshing the site.<br><br>The error has been printed to the inspector console.", w.xa(c.g)
      }
    };
  w.b = !0;
  w.Bp = function () {
    try {
      return window.self != window.top
    } catch (a) {
      return !0
    }
  };
  w.Oh = function (a) {
    return new Promise(function (b, c) {
      var d = window.document.createElement("img");
      d.onload = function () {
        URL.revokeObjectURL(d.src);
        d.onload = null;
        b(d)
      };
      d.onerror = function () {
        URL.revokeObjectURL(d.src);
        c(null)
      };
      return d.src = URL.createObjectURL(new Blob([a], {
        type: "image/png"
      }))
    })
  };
  w.Mh = function (a) {
    w.Bp() && w.sp(function () {
      Zb.Mh();
      var b;
      null == p.J.Vd.N() ? T.sm().then(function (a) {
        p.J.Vd.gb(a)
      }, function () {
        return {}
      }) : b = Promise.resolve(null);
      return Promise.all([J.N("res.dat", "arraybuffer").then(function (a) {
        a = new JSZip(a);
        p.$a = new Ob(a);
        return Promise.all([p.$a.hm, w.Oh(a.file("images/grass.png").asArrayBuffer()).then(function (a) {
          return p.vm =
            a
        }), w.Oh(a.file("images/concrete.png").asArrayBuffer()).then(function (a) {
          return p.Ql = a
        }), w.Oh(a.file("images/concrete2.png").asArrayBuffer()).then(function (a) {
          return p.Ol = a
        })])
      }), b]).then(function () {
        w.Mp(a)
      })
    })
  };
  w.sp = function (a) {
    for (var b = Modernizr, c = "canvas datachannel dataview es6collections peerconnection promises websockets".split(" "), d = [], e = 0; e < c.length;) {
      var f = c[e];
      ++e;
      b[f] || d.push(f)
    }
    0 != d.length ? (window.document.body.innerHTML = "", w.Pf = window.document.createElement("div"), window.document.body.appendChild(w.Pf),
      a = new Ua(d), w.xa(a.g)) : a()
  };
  w.Mp = function (a) {
    window.document.body.innerHTML = "";
    w.Pf = window.document.createElement("div");
    window.document.body.appendChild(w.Pf);
    var b = null,
      b = function () {
        p.$a.bk();
        window.document.removeEventListener("click", b, !0)
      };
    window.document.addEventListener("click", b, !0);
    a()
  };
  w.xa = function (a) {
    null != w.Wk && w.Wk.remove();
    null != a && (w.Pf.appendChild(a), w.Wk = a)
  };
  Pb.b = !0;
  Pb.prototype = {
    Z: function () {
      window.document.removeEventListener("keydown", A(this, this.Vc));
      window.document.removeEventListener("keyup",
        A(this, this.Wc));
      window.onbeforeunload = null;
      window.cancelAnimationFrame(this.Od);
      window.clearInterval(this.Dg)
    },
    ee: function () {
      this.Od = window.requestAnimationFrame(A(this, this.ee));
      this.za.s();
      this.ic()
    },
    ic: function () {
      this.oe.s();
      var a = window.performance.now();
      1 == p.J.Cg.N() && 28.333333333333336 > a - this.vc || (this.vc = a, this.Oc++, this.ue(p.J.rb.N()), 0 < this.za.ad || this.j.s(this.za))
    },
    Vc: function (a) {
      switch (a.keyCode) {
        case 27:
          var b = this.j;
          b.Bd(!b.bd);
          a.preventDefault();
          break;
        case 49:
          p.J.rb.gb(1);
          break;
        case 50:
          p.J.rb.gb(2);
          break;
        case 51:
          p.J.rb.gb(3);
          break;
        case 52:
          p.J.rb.gb(0)
      }
    },
    ue: function (a) {
      var b = this.j.Db;
      0 >= a ? (b.Jf(!0), b.kb.wd = 1, b.kb.Fd = 0) : (b.Jf(!1), b.kb.Fd = 35, b.kb.wd = 1 + .25 * (a - 1))
    },
    Wc: function () {},
    f: Pb
  };
  mb.b = !0;
  mb.prototype = {
    si: function () {
      this.o = ra.dd(this.o, 40);
      this.ab = ra.dd(this.ab, 3)
    },
    X: function (a) {
      this.si();
      a.La = !0;
      a.Dc(this.Cc);
      a.Ik(this.o);
      a.Ik(this.ab);
      a.Hk(this.Tb);
      a.Hk(this.Vb);
      a.w(this.eb ? 1 : 0);
      a.w(this.rd);
      a.w(this.F);
      a.La = !1
    },
    ba: function (a) {
      a.La = !0;
      this.Cc = a.wb();
      this.o = a.Rj();
      this.ab = a.Rj();
      this.Tb =
        a.Af();
      this.Vb = a.Af();
      this.eb = 0 != a.I();
      this.rd = a.I();
      this.F = a.I();
      a.La = !1;
      if (20 < this.F || 20 < this.rd) throw new u(null);
      this.si()
    },
    f: mb
  };
  qa.b = !0;
  qa.parse = function (a) {
    a.I();
    for (var b = []; 0 != a.m.byteLength - a.a;) {
      var c = a.Yc(a.wb()),
        d = a.dh(a.wb());
      try {
        var e = new mb;
        e.ba(new G(new DataView(d), !1));
        var f = new zb;
        f.cc = e;
        f.ka = c;
        b.push(f)
      } catch (g) {}
    }
    return b
  };
  qa.Ap = function (a, b, c, d) {
    return Math.acos(Math.sin(a) * Math.sin(c) + Math.cos(a) * Math.cos(c) * Math.cos(b - d))
  };
  qa.Zp = function (a, b) {
    for (var c = a.Tb, d = a.Vb, e = 0; e < b.length;) {
      var f =
        b[e];
      ++e;
      var g = f.cc;
      f.Ag = 6378 * qa.Ap(.017453292519943295 * g.Tb, .017453292519943295 * g.Vb, .017453292519943295 * c, .017453292519943295 * d)
    }
  };
  qa.get = function () {
    return J.N(p.Ne + "api/list", "arraybuffer").then(function (a) {
      return qa.parse(new G(new DataView(a), !1))
    })
  };
  Ob.b = !0;
  Ob.prototype = {
    bk: function () {
      this.c.resume()
    },
    ke: function (a) {
      var b = this.c.createBufferSource();
      b.buffer = a;
      b.connect(this.kf);
      b.start()
    },
    mk: function (a) {
      this.kf.gain.value = a
    },
    f: Ob
  };
  Nb.b = !0;
  Nb.prototype = {
    update: function () {
      var a = window.performance.now(),
        b = a - this.Vk;
      this.Vk = a;
      this.Hd += (this.dg - this.Hd) * this.bq;
      this.Ie -= b;
      0 >= this.Ie && (this.Ie = this.dg = 0);
      0 >= this.dg && .05 > this.Hd && (window.clearInterval(this.eg), this.eg = null, this.Hd = 0);
      this.Tf.gain.value = p.J.pk.N() ? this.Hd : 0
    },
    Yh: function (a) {
      var b = this;
      this.dg = a;
      this.Ie = 166.66666666666666;
      null == this.eg && (this.eg = window.setInterval(function () {
        b.update()
      }, 17), this.Vk = window.performance.now())
    },
    connect: function (a) {
      this.Tf.connect(a)
    },
    gq: function (a) {
      var b = a.A;
      if (null != b)
        if (2 == b.ob) 0 >= b.Fa && this.Yh(1);
        else if (1 ==
        b.ob) {
        var c = b.ra.K[b.Nb],
          d = null,
          e = null,
          f = null,
          g = 0,
          k = null,
          h = null,
          m = null,
          z = 0,
          l = q.$.zg,
          p = 0;
        for (a = a.F; p < a.length;) {
          var n = a[p];
          ++p;
          if (null != n.D) {
            var r = n.D.a,
              u = c.a,
              t = r.x - u.x,
              r = r.y - u.y,
              t = t * t + r * r;
            if (n.W == q.$) {
              if (null == d || d.a.x * l < n.D.a.x * l) d = n.D;
              if (null == e || e.a.x * l > n.D.a.x * l) e = n.D;
              if (null == f || t < g) f = n.D, g = t
            } else if (n.W == q.la) {
              if (null == k || k.a.x * l < n.D.a.x * l) k = n.D;
              if (null == h || h.a.x * l > n.D.a.x * l) h = n.D;
              if (null == m || t < z) m = n.D, z = t
            }
          }
        }
        null != h && null != e && 0 >= b.Fa && (f.a.x > h.a.x && c.a.x > h.a.x && 20 < c.a.x && this.Yh(.3), m.a.x < e.a.x &&
          c.a.x < e.a.x && -20 > c.a.x && this.Yh(.3))
      }
    },
    f: Nb
  };
  Da.b = !0;
  Da.prototype = {
    X: function (a) {
      var b = this.a;
      a.v(b.x);
      a.v(b.y);
      b = this.M;
      a.v(b.x);
      a.v(b.y);
      a.v(this.ga);
      a.v(this.l);
      a.v(this.qa);
      a.v(this.Ea);
      a.ib(this.ea);
      a.V(this.h);
      a.V(this.G)
    },
    ba: function (a) {
      var b = this.a;
      b.x = a.u();
      b.y = a.u();
      b = this.M;
      b.x = a.u();
      b.y = a.u();
      this.ga = a.u();
      this.l = a.u();
      this.qa = a.u();
      this.Ea = a.u();
      this.ea = a.Sa();
      this.h = a.R();
      this.G = a.R()
    },
    Xm: function () {
      var a = new X;
      this.Zi(a);
      return a
    },
    Zi: function (a) {
      var b = a.a,
        c = this.a;
      b.x = c.x;
      b.y = c.y;
      b =
        a.M;
      c = this.M;
      b.x = c.x;
      b.y = c.y;
      a.ga = this.ga;
      a.l = this.l;
      a.qa = this.qa;
      a.Ea = this.Ea;
      a.ea = this.ea;
      a.h = this.h;
      a.G = this.G
    },
    f: Da
  };
  pa.b = !0;
  pa.qc = [sb];
  pa.Mc = function (a, b) {
    a.nb = b.nb.Sb();
    a.Va = b.Va;
    a.sa = b.sa;
    a.ra = b.ra.Sb();
    a.Nb = b.Nb;
    a.Xb = b.Xb;
    a.ob = b.ob;
    a.yb = b.yb;
    a.tb = b.tb;
    a.fc = b.fc;
    a.Fa = b.Fa;
    a.U = b.U;
    a.pd = b.pd;
    var c = a.Sc,
      d = b.Sc;
    c.x = d.x;
    c.y = d.y
  };
  pa.prototype = {
    Fm: function (a) {
      this.nb = a;
      this.Wm();
      this.Va = a.Va;
      this.sa = a.sa;
      this.U = a.U;
      this.ra.C = this.U.C;
      this.ra.fa = this.U.fa;
      this.ra.O = this.U.O;
      a = 0;
      for (var b = this.U.K; a <
        b.length;) this.ra.K.push(b[a++].Xm());
      this.cj()
    },
    Wm: function () {
      var a = new X;
      this.Nb = this.ra.K.length;
      this.ra.K.push(a)
    },
    $i: function (a) {
      if (a.W == q.ya) a.D = null;
      else {
        a.bb = 0;
        var b = a.D;
        null == b && (b = new X, a.D = b, this.ra.K.push(b));
        var c = this.U.le;
        b.ea = 0;
        b.ga = 15;
        b.qa = c.qa;
        b.Ea = c.Ea;
        b.l = c.l;
        b.h = 39;
        b.G = a.W.G;
        b.a.x = a.W.zg * this.U.Pb;
        b.a.y = 0;
        a = b.M;
        a.x = 0;
        a.y = 0
      }
    },
    s: function (a) {
      if (0 < this.Fa) 120 > this.Fa && this.Fa--;
      else {
        for (var b = this.nb.F, c = this.ra.K[this.Nb], d = 0; d < b.length;) {
          var e = b[d];
          ++d;
          if (null != e.D) {
            var f = c.a,
              g =
              e.D.a,
              k = f.x - g.x,
              g = f.y - g.y,
              h = Math.sqrt(k * k + g * g) - c.ga - e.D.ga;
            0 == (e.bb & 16) && (e.Kb = !1);
            f = this.U.le;
            if (e.Kb && 4 > h) {
              if (0 != f.Zd) {
                var h = Math.sqrt(k * k + g * g),
                  m = f.Zd,
                  l = c.M,
                  n = c.M,
                  p = c.qa;
                l.x = n.x + k / h * m * p;
                l.y = n.y + g / h * m * p;
                null != this.nb.$g && this.nb.$g()
              }
              e.Kb = !1
            }
            h = e.bb;
            g = k = 0;
            0 != (h & 1) && --g;
            0 != (h & 2) && ++g;
            0 != (h & 4) && --k;
            0 != (h & 8) && ++k;
            0 != k && 0 != g && (h = Math.sqrt(k * k + g * g), k /= h, g /= h);
            h = e.D.M;
            m = e.Kb ? f.ff : f.Le;
            h.x += k * m;
            h.y += g * m;
            e.D.Ea = e.Kb ? f.gf : f.Ea
          }
        }
        this.ra.s(a);
        if (0 == this.ob) {
          for (a = 0; a < b.length;) d = b[a], ++a, null != d.D && (d.D.h = 39 |
            this.pd.Lm);
          b = c.M;
          0 < b.x * b.x + b.y * b.y && (this.ob = 1, b = this.Sc, c = c.a, b.x = c.x, b.y = c.y)
        } else if (1 == this.ob) {
          this.fc += .016666666666666666;
          for (a = 0; a < b.length;) d = b[a], ++a, null != d.D && (d.D.h = 39);
          b = this.U.Hl(c.a, this.Sc);
          b != q.ya ? (this.ob = 2, this.Xb = 150, this.pd = b, b == q.$ ? this.tb++ : this.yb++, null != this.nb.yh && this.nb.yh(b.wf)) : 0 < this.sa && this.fc >= 60 * this.sa && this.yb != this.tb && (null != this.nb.Ah && this.nb.Ah(), this.vk());
          b = this.Sc;
          c = c.a;
          b.x = c.x;
          b.y = c.y
        } else if (2 == this.ob) this.Xb--, 0 >= this.Xb && (0 < this.Va && (this.yb >= this.Va ||
          this.tb >= this.Va) || 0 < this.sa && this.fc >= 60 * this.sa && this.yb != this.tb ? this.vk() : this.cj());
        else if (3 == this.ob && (this.Xb--, 0 >= this.Xb && (c = this.nb, null != c.A))) {
          c.A = null;
          b = 0;
          for (a = c.F; b < a.length;) d = a[b], ++b, d.D = null, d.sb = 0;
          null != c.we && c.we(null)
        }
      }
    },
    vk: function () {
      this.Xb = 300;
      this.ob = 3;
      null != this.nb.zh && this.nb.zh(this.yb > this.tb ? q.$ : q.la)
    },
    cj: function () {
      var a = this.nb.F;
      this.ob = 0;
      this.U.Oe.Zi(this.ra.K[this.Nb]);
      for (var b = [0, 0, 0], c = 0; c < a.length;) {
        var d = a[c];
        ++c;
        this.$i(d);
        var e = d.W;
        if (e != q.ya) {
          var f = d.D.a,
            g = b[e.ka],
            k = g + 1 >> 1;
          0 == (g & 1) && (k = -k);
          f.x = this.U.Yb * e.zg;
          f.y = 55 * k;
          b[e.ka]++;
          d.sb = b[e.ka]
        }
      }
    },
    X: function (a) {
      this.ra.X(a);
      a.V(this.Nb);
      a.V(this.Xb);
      a.V(this.ob);
      var b = this.Sc;
      a.v(b.x);
      a.v(b.y);
      a.V(this.yb);
      a.V(this.tb);
      a.v(this.fc);
      a.V(this.Fa);
      a.w(this.pd.ka)
    },
    ba: function (a, b) {
      this.ra.ba(a);
      this.Nb = a.R();
      this.Xb = a.R();
      this.ob = a.R();
      var c = this.Sc;
      c.x = a.u();
      c.y = a.u();
      this.yb = a.R();
      this.tb = a.R();
      this.fc = a.u();
      this.Fa = a.R();
      c = a.ne();
      this.pd = 1 == c ? q.$ : 2 == c ? q.la : q.ya;
      this.nb = b;
      this.Va = b.Va;
      this.sa = b.sa;
      this.U =
        b.U;
      this.ra.C = this.U.C;
      this.ra.O = this.U.O;
      this.ra.fa = this.U.fa
    },
    Sb: function () {
      var a = ta.$b,
        b = this.Gb;
      this.Hb != a && (null == b && (this.Gb = b = new pa), this.Hb = a, pa.Mc(b, this));
      return b
    },
    f: pa
  };
  lb.b = !0;
  lb.prototype = {
    X: function (a) {
      var b = this.Y;
      a.v(b.x);
      a.v(b.y);
      b = this.aa;
      a.v(b.x);
      a.v(b.y);
      a.w(this.xe.ka)
    },
    ba: function (a) {
      var b = this.Y;
      b.x = a.u();
      b.y = a.u();
      b = this.aa;
      b.x = a.u();
      b.y = a.u();
      a = a.ne();
      this.xe = 1 == a ? q.$ : 2 == a ? q.la : q.ya
    },
    f: lb
  };
  xb.b = !0;
  xb.prototype = {
    X: function (a) {
      a.v(this.l);
      a.v(this.qa);
      a.v(this.Ea);
      a.v(this.Le);
      a.v(this.ff);
      a.v(this.gf);
      a.v(this.Zd)
    },
    ba: function (a) {
      this.l = a.u();
      this.qa = a.u();
      this.Ea = a.u();
      this.Le = a.u();
      this.ff = a.u();
      this.gf = a.u();
      this.Zd = a.u()
    },
    f: xb
  };
  n.b = !0;
  n.ba = function (a) {
    var b = a.I();
    return 255 == b ? (b = new n, b.$o(a), b) : n.Gg()[b]
  };
  n.Gg = function () {
    if (null == n.mb) {
      n.mb = [];
      var a = new n;
      a.xc("Classic", 420, 200, 370, 170, 64, 75);
      n.mb.push(a);
      a = new n;
      a.xc("Easy", 420, 200, 370, 170, 90, 75);
      n.mb.push(a);
      a = new n;
      a.xc("Small", 420, 200, 320, 130, 55, 70);
      n.mb.push(a);
      a = new n;
      a.xc("Big", 600, 270, 550, 240, 80, 80);
      n.mb.push(a);
      a = new n;
      a.xc("Rounded", 420, 200, 370, 170, 64, 75, 75);
      n.mb.push(a);
      a = new n;
      a.kj("Hockey", 420, 204, 398, 182, 68, 120, 75, 100);
      n.mb.push(a);
      a = new n;
      a.kj("Big Hockey", 600, 270, 550, 240, 90, 160, 75, 150);
      n.mb.push(a);
      a = new n;
      a.xc("Big Easy", 600, 270, 550, 240, 95, 80);
      n.mb.push(a);
      a = new n;
      a.xc("Big Rounded", 600, 270, 550, 240, 80, 75, 100);
      n.mb.push(a);
      a = new n;
      a.xc("Huge", 750, 350, 700, 320, 100, 80);
      n.mb.push(a);
      for (var a = 0, b = n.mb.length; a < b;) {
        var c = a++;
        n.mb[c].yg = c
      }
    }
    return n.mb
  };
  n.Pd = function (a, b) {
    if (null != a.trait) {
      var c = b[r.L(a.trait,
        String)];
      if (null != c)
        for (var d = 0, e = fc.up(c); d < e.length;) {
          var f = e[d];
          ++d;
          null == a[f] && (a[f] = c[f])
        }
    }
  };
  n.wc = function (a) {
    a = r.L(a, Array);
    for (var b = 0, c = 0; c < a.length;) switch (a[c++]) {
      case "all":
        b = -1;
        break;
      case "ball":
        b |= 1;
        break;
      case "blue":
        b |= 4;
        break;
      case "blueKO":
        b |= 16;
        break;
      case "red":
        b |= 2;
        break;
      case "redKO":
        b |= 8;
        break;
      case "wall":
        b |= 32
    }
    return b
  };
  n.fj = function (a) {
    if ("string" == typeof a) return N.parseInt("0x" + N.cg(a));
    if (a instanceof Array && null == a.qb) return ((a[0] | 0) << 16) + ((a[1] | 0) << 8) + (a[2] | 0);
    throw new u("Bad color");
  };
  n.Um = function (a) {
    var b = new C;
    b.a.x = r.L(a.x, F);
    b.a.y = r.L(a.y, F);
    var c = a.bCoef;
    null != c && (b.l = r.L(c, F));
    c = a.cMask;
    null != c && (b.h = n.wc(c));
    a = a.cGroup;
    null != a && (b.G = n.wc(a));
    return b
  };
  n.Tm = function (a, b) {
    var c = new D,
      d = r.L(a.v1, gc);
    c.Y = b[r.L(a.v0, gc)];
    c.aa = b[d];
    var d = a.bCoef,
      e = a.curve,
      f = a.vis,
      g = a.cMask,
      k = a.cGroup,
      h = a.color;
    null != d && (c.l = r.L(d, F));
    null != e && c.lc(r.L(e, F));
    null != f && (c.Xa = r.L(f, ic));
    null != g && (c.h = n.wc(g));
    null != k && (c.G = n.wc(k));
    null != h && (c.ea = n.fj(h));
    return c
  };
  n.Rm = function (a) {
    var b = new I,
      c = r.L(a.normal, Array),
      d = r.L(c[0], F),
      c = r.L(c[1], F),
      e = b.Aa,
      f = Math.sqrt(d * d + c * c);
    e.x = d / f;
    e.y = c / f;
    b.Ka = r.L(a.dist, F);
    d = a.bCoef;
    c = a.cMask;
    a = a.cGroup;
    null != d && (b.l = r.L(d, F));
    null != c && (b.h = n.wc(c));
    null != a && (b.G = n.wc(a));
    return b
  };
  n.Qm = function (a) {
    var b = new lb,
      c = r.L(a.p0, Array),
      d = r.L(a.p1, Array),
      e = b.Y;
    e.x = c[0];
    e.y = c[1];
    c = b.aa;
    c.x = d[0];
    c.y = d[1];
    switch (a.team) {
      case "blue":
        a = q.la;
        break;
      case "red":
        a = q.$;
        break;
      default:
        throw new u("Bad team value");
    }
    b.xe = a;
    return b
  };
  n.Sm = function (a) {
    var b = new xb,
      c = a.bCoef,
      d = a.invMass,
      e = a.damping,
      f = a.acceleration,
      g = a.kickingAcceleration,
      k = a.kickingDamping;
    a = a.kickStrength;
    null != c && (b.l = r.L(c, F));
    null != d && (b.qa = r.L(d, F));
    null != e && (b.Ea = r.L(e, F));
    null != f && (b.Le = r.L(f, F));
    null != g && (b.ff = r.L(g, F));
    null != k && (b.gf = r.L(k, F));
    null != a && (b.Zd = r.L(a, F));
    return b
  };
  n.gj = function (a, b) {
    var c = a.pos,
      d = a.speed,
      e = a.radius,
      f = a.bCoef,
      g = a.invMass,
      k = a.damping,
      h = a.color,
      m = a.cMask,
      l = a.cGroup;
    if (null != c) {
      var q = b.a;
      q.x = c[0];
      q.y = c[1]
    }
    null != d && (c = b.M, c.x = d[0], c.y = d[1]);
    null != e && (b.ga = r.L(e, F));
    null != f && (b.l =
      r.L(f, F));
    null != g && (b.qa = r.L(g, F));
    null != k && (b.Ea = r.L(k, F));
    null != h && (b.ea = n.fj(h));
    null != m && (b.h = n.wc(m));
    null != l && (b.G = n.wc(l));
    return b
  };
  n.prototype = {
    jj: function () {
      var a = new Da;
      a.ea = 16777215;
      a.h = -1;
      a.G = 1;
      a.ga = 10;
      a.Ea = .99;
      a.qa = 1;
      a.l = .5;
      return a
    },
    X: function (a) {
      a.w(this.yg);
      if (!this.cf()) {
        a.Ab(this.o);
        a.V(this.ld);
        a.v(this.Sd);
        a.v(this.Rd);
        a.v(this.kd);
        a.v(this.Jc);
        a.v(this.Qe);
        a.V(this.Qd);
        a.v(this.Pb);
        a.v(this.ac);
        a.v(this.Yb);
        this.le.X(a);
        this.Oe.X(a);
        a.Dc(this.pf);
        a.w(this.C.length);
        for (var b =
            0, c = this.C.length; b < c;) {
          var d = b++,
            e = this.C[d];
          e.bf = d;
          e.X(a)
        }
        a.w(this.O.length);
        b = 0;
        for (c = this.O; b < c.length;) c[b++].X(a);
        a.w(this.fa.length);
        b = 0;
        for (c = this.fa; b < c.length;) c[b++].X(a);
        a.w(this.bc.length);
        b = 0;
        for (c = this.bc; b < c.length;) c[b++].X(a);
        a.w(this.K.length);
        b = 0;
        for (c = this.K; b < c.length;) c[b++].X(a)
      }
    },
    $o: function (a) {
      this.o = a.xb();
      this.ld = a.R();
      this.Sd = a.u();
      this.Rd = a.u();
      this.kd = a.u();
      this.Jc = a.u();
      this.Qe = a.u();
      this.Qd = a.R();
      this.Pb = a.u();
      this.ac = a.u();
      this.Yb = a.u();
      this.le.ba(a);
      this.Oe.ba(a);
      this.pf = a.wb();
      this.C = [];
      for (var b = a.I(), c = 0; c < b;) {
        var d = new C;
        d.ba(a);
        d.bf = c++;
        this.C.push(d)
      }
      this.O = [];
      b = a.I();
      for (c = 0; c < b;) ++c, d = new D, d.ba(a, this.C), this.O.push(d);
      this.fa = [];
      b = a.I();
      for (c = 0; c < b;) ++c, d = new I, d.ba(a), this.fa.push(d);
      this.bc = [];
      b = a.I();
      for (c = 0; c < b;) ++c, d = new lb, d.ba(a), this.bc.push(d);
      this.K = [];
      b = a.I();
      for (c = 0; c < b;) ++c, d = new Da, d.ba(a), this.K.push(d)
    },
    cf: function () {
      return 255 != this.yg
    },
    qd: function (a, b, c) {
      a = a[b];
      return null != a ? r.L(a, F) : c
    },
    Pm: function (a) {
      a = JSON5.parse(a);
      this.C = [];
      this.O = [];
      this.fa = [];
      this.bc = [];
      this.K = [];
      this.o = r.L(a.name, String);
      this.Pb = r.L(a.width, F);
      this.ac = r.L(a.height, F);
      this.pf = this.qd(a, "maxViewWidth", 0) | 0;
      this.Yb = 200;
      var b = a.spawnDistance;
      null != b && (this.Yb = r.L(b, F));
      var b = a.bg,
        c;
      switch (b.type) {
        case "grass":
          c = 1;
          break;
        case "hockey":
          c = 2;
          break;
        default:
          c = 0
      }
      this.ld = c;
      this.Sd = this.qd(b, "width", 0);
      this.Rd = this.qd(b, "height", 0);
      this.kd = this.qd(b, "kickOffRadius", 0);
      this.Jc = this.qd(b, "cornerRadius", 0);
      this.Qd = 7441498;
      this.Qe = this.qd(b, "goalLine", 0);
      b = a.traits;
      c = r.L(a.vertexes, Array);
      if (null != c)
        for (var d = 0; d < c.length;) {
          var e = c[d];
          ++d;
          n.Pd(e, b);
          this.C.push(n.Um(e))
        }
      c = r.L(a.segments, Array);
      if (null != c)
        for (d = 0; d < c.length;) e = c[d], ++d, n.Pd(e, b), this.O.push(n.Tm(e, this.C));
      c = r.L(a.goals, Array);
      if (null != c)
        for (d = 0; d < c.length;) e = c[d], ++d, n.Pd(e, b), this.bc.push(n.Qm(e));
      c = r.L(a.discs, Array);
      if (null != c)
        for (d = 0; d < c.length;) e = c[d], ++d, n.Pd(e, b), this.K.push(n.gj(e, new Da));
      c = r.L(a.planes, Array);
      if (null != c)
        for (d = 0; d < c.length;) e = c[d], ++d, n.Pd(e, b), this.fa.push(n.Rm(e));
      b = a.playerPhysics;
      null != b && (this.le = n.Sm(b));
      a = a.ballPhysics;
      null != a && (this.Oe = n.gj(a, this.jj()));
      if (255 < this.C.length || 255 < this.O.length || 255 < this.fa.length || 255 < this.bc.length || 255 < this.K.length) throw new u("Error");
    },
    ti: function () {
      var a = n.Wo;
      a.a = 0;
      this.X(a);
      var b = new Xb;
      b.lp(a.oc());
      b.hash = (b.hash += b.hash << 3) ^ b.hash >>> 11;
      b.hash += b.hash << 15;
      return b.hash | 0
    },
    Hl: function (a, b) {
      for (var c = 0, d = this.bc; c < d.length;) {
        var e = d[c];
        ++c;
        var f = e.Y,
          g = e.aa,
          k = b.x - a.x,
          h = b.y - a.y;
        0 < -(f.y - a.y) * k + (f.x - a.x) * h == 0 < -(g.y -
          a.y) * k + (g.x - a.x) * h ? f = !1 : (k = g.x - f.x, g = g.y - f.y, f = 0 < -(a.y - f.y) * k + (a.x - f.x) * g == 0 < -(b.y - f.y) * k + (b.x - f.x) * g ? !1 : !0);
        if (f) return e.xe
      }
      return q.ya
    },
    xc: function (a, b, c, d, e, f, g, k) {
      null == k && (k = 0);
      this.o = a;
      this.Pb = b;
      this.ac = c;
      this.ld = 1;
      this.Qd = 7441498;
      this.Sd = d;
      this.Rd = e;
      this.kd = g;
      this.Jc = k;
      this.Yb = .75 * d;
      400 < this.Yb && (this.Yb = 400);
      a = new I;
      var h = a.Aa;
      h.x = 0;
      h.y = 1;
      a.Ka = -c;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      h = a.Aa;
      h.x = 0;
      h.y = -1;
      a.Ka = -c;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      h = a.Aa;
      h.x = 1;
      h.y = 0;
      a.Ka = -b;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      h = a.Aa;
      h.x = -1;
      h.y = 0;
      a.Ka = -b;
      a.l = 0;
      this.fa.push(a);
      this.mf(d, 1, f, 13421823, q.la);
      this.mf(-d, -1, f, 16764108, q.$);
      this.lj(g, c);
      b = new I;
      c = b.Aa;
      c.x = 0;
      c.y = 1;
      b.Ka = -e;
      b.h = 1;
      this.fa.push(b);
      b = new I;
      c = b.Aa;
      c.x = 0;
      c.y = -1;
      b.Ka = -e;
      b.h = 1;
      this.fa.push(b);
      b = new C;
      c = b.a;
      c.x = -d;
      c.y = -e;
      b.h = 0;
      c = new C;
      g = c.a;
      g.x = d;
      g.y = -e;
      c.h = 0;
      g = new C;
      a = g.a;
      a.x = d;
      a.y = -f;
      g.h = 0;
      a = new C;
      h = a.a;
      h.x = d;
      h.y = f;
      a.h = 0;
      var h = new C,
        m = h.a;
      m.x = d;
      m.y = e;
      h.h = 0;
      var m = new C,
        l = m.a;
      l.x = -d;
      l.y = e;
      m.h = 0;
      var l = new C,
        n = l.a;
      n.x = -d;
      n.y = f;
      l.h = 0;
      var n = new C,
        p = n.a;
      p.x = -d;
      p.y = -f;
      n.h = 0;
      f = new D;
      f.Y = c;
      f.aa = g;
      f.h = 1;
      f.Xa = !1;
      p = new D;
      p.Y = a;
      p.aa = h;
      p.h = 1;
      p.Xa = !1;
      var r = new D;
      r.Y = m;
      r.aa = l;
      r.h = 1;
      r.Xa = !1;
      var t = new D;
      t.Y = n;
      t.aa = b;
      t.h = 1;
      t.Xa = !1;
      this.C.push(b);
      this.C.push(c);
      this.C.push(g);
      this.C.push(a);
      this.C.push(h);
      this.C.push(m);
      this.C.push(l);
      this.C.push(n);
      this.O.push(f);
      this.O.push(p);
      this.O.push(r);
      this.O.push(t);
      this.ij(d, e, k)
    },
    kj: function (a, b, c, d, e, f, g, k, h) {
      this.o = a;
      this.Pb = b;
      this.ac = c;
      this.ld = 2;
      this.Sd = d;
      this.Rd = e;
      this.kd = k;
      this.Jc = h;
      this.Qe = g;
      this.Yb = .75 * (d - g);
      400 <
        this.Yb && (this.Yb = 400);
      a = new I;
      var m = a.Aa;
      m.x = 0;
      m.y = 1;
      a.Ka = -c;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      m = a.Aa;
      m.x = 0;
      m.y = -1;
      a.Ka = -c;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      m = a.Aa;
      m.x = 1;
      m.y = 0;
      a.Ka = -b;
      a.l = 0;
      this.fa.push(a);
      a = new I;
      m = a.Aa;
      m.x = -1;
      m.y = 0;
      a.Ka = -b;
      a.l = 0;
      this.fa.push(a);
      this.mf(d - g, 1, f, 13421823, q.la, -1);
      this.mf(-d + g, -1, f, 16764108, q.$, -1);
      this.lj(k, c);
      b = new I;
      c = b.Aa;
      c.x = 0;
      c.y = 1;
      b.Ka = -e;
      b.h = 1;
      this.fa.push(b);
      b = new I;
      c = b.Aa;
      c.x = 0;
      c.y = -1;
      b.Ka = -e;
      b.h = 1;
      this.fa.push(b);
      b = new I;
      c = b.Aa;
      c.x = 1;
      c.y = 0;
      b.Ka = -d;
      b.h = 1;
      this.fa.push(b);
      b = new I;
      c = b.Aa;
      c.x = -1;
      c.y = 0;
      b.Ka = -d;
      b.h = 1;
      this.fa.push(b);
      this.ij(d, e, h)
    },
    mf: function (a, b, c, d, e, f, g) {
      null == g && (g = 32);
      null == f && (f = 1);
      var k = new C,
        h = k.a;
      h.x = a + 8 * b;
      h.y = -c;
      var h = new C,
        m = h.a;
      m.x = a + 8 * b;
      m.y = c;
      var l = new C,
        m = l.a;
      m.x = k.a.x + 22 * b;
      m.y = k.a.y + 22;
      var n = new C,
        m = n.a;
      m.x = h.a.x + 22 * b;
      m.y = h.a.y - 22;
      m = new D;
      m.Y = k;
      m.aa = l;
      m.lc(90 * b);
      var p = new D;
      p.Y = n;
      p.aa = l;
      var q = new D;
      q.Y = n;
      q.aa = h;
      q.lc(90 * b);
      b = this.C.length;
      this.C.push(k);
      this.C.push(h);
      this.C.push(l);
      this.C.push(n);
      k = b;
      for (b = this.C.length; k < b;) h = k++, this.C[h].h =
        f, this.C[h].G = g, this.C[h].l = .1;
      b = this.O.length;
      this.O.push(m);
      this.O.push(p);
      this.O.push(q);
      k = b;
      for (b = this.O.length; k < b;) h = k++, this.O[h].h = f, this.O[h].G = g, this.O[h].l = .1;
      f = new Da;
      g = f.a;
      g.x = a;
      g.y = -c;
      f.qa = 0;
      f.ga = 8;
      f.ea = d;
      this.K.push(f);
      f = new Da;
      g = f.a;
      g.x = a;
      g.y = c;
      f.qa = 0;
      f.ga = 8;
      f.ea = d;
      this.K.push(f);
      d = new lb;
      f = d.Y;
      f.x = a;
      f.y = -c;
      f = d.aa;
      f.x = a;
      f.y = c;
      d.xe = e;
      this.bc.push(d)
    },
    lj: function (a, b) {
      var c = new C,
        d = c.a;
      d.x = 0;
      d.y = -b;
      c.l = .1;
      c.G = 24;
      c.h = 6;
      var d = new C,
        e = d.a;
      e.x = 0;
      e.y = -a;
      d.l = .1;
      d.G = 24;
      d.h = 6;
      var e = new C,
        f =
        e.a;
      f.x = 0;
      f.y = a;
      e.l = .1;
      e.G = 24;
      e.h = 6;
      var f = new C,
        g = f.a;
      g.x = 0;
      g.y = b;
      f.l = .1;
      f.G = 24;
      f.h = 6;
      g = new D;
      g.Y = c;
      g.aa = d;
      g.G = 24;
      g.h = 6;
      g.Xa = !1;
      g.l = .1;
      var k = new D;
      k.Y = e;
      k.aa = f;
      k.G = 24;
      k.h = 6;
      k.Xa = !1;
      k.l = .1;
      var h = new D;
      h.Y = d;
      h.aa = e;
      h.G = 8;
      h.h = 6;
      h.Xa = !1;
      h.lc(180);
      h.l = .1;
      var m = new D;
      m.Y = e;
      m.aa = d;
      m.G = 16;
      m.h = 6;
      m.Xa = !1;
      m.lc(180);
      m.l = .1;
      this.C.push(c);
      this.C.push(d);
      this.C.push(e);
      this.C.push(f);
      this.O.push(g);
      this.O.push(k);
      this.O.push(h);
      this.O.push(m)
    },
    ij: function (a, b, c) {
      if (!(0 >= c)) {
        var d = new C,
          e = d.a;
        e.x = -a + c;
        e.y = -b;
        d.h =
          0;
        var e = new C,
          f = e.a;
        f.x = -a;
        f.y = -b + c;
        e.h = 0;
        var f = new C,
          g = f.a;
        g.x = -a + c;
        g.y = b;
        f.h = 0;
        var g = new C,
          k = g.a;
        k.x = -a;
        k.y = b - c;
        g.h = 0;
        var k = new C,
          h = k.a;
        h.x = a - c;
        h.y = b;
        k.h = 0;
        var h = new C,
          m = h.a;
        m.x = a;
        m.y = b - c;
        h.h = 0;
        var m = new C,
          l = m.a;
        l.x = a - c;
        l.y = -b;
        m.h = 0;
        var l = new C,
          n = l.a;
        n.x = a;
        n.y = -b + c;
        l.h = 0;
        a = new D;
        a.Y = d;
        a.aa = e;
        a.h = 1;
        a.Xa = !1;
        a.l = 1;
        a.lc(-90);
        b = new D;
        b.Y = f;
        b.aa = g;
        b.h = 1;
        b.Xa = !1;
        b.l = 1;
        b.lc(90);
        c = new D;
        c.Y = k;
        c.aa = h;
        c.h = 1;
        c.Xa = !1;
        c.l = 1;
        c.lc(-90);
        n = new D;
        n.Y = m;
        n.aa = l;
        n.h = 1;
        n.Xa = !1;
        n.l = 1;
        n.lc(90);
        this.C.push(d);
        this.C.push(e);
        this.C.push(f);
        this.C.push(g);
        this.C.push(k);
        this.C.push(h);
        this.C.push(m);
        this.C.push(l);
        this.O.push(a);
        this.O.push(b);
        this.O.push(c);
        this.O.push(n)
      }
    },
    f: n
  };
  ha.b = !0;
  ha.prototype = {
    X: function (a) {
      a.w(this.Ic);
      a.V(this.Bc);
      a.w(this.Ua.length);
      for (var b = 0, c = this.Ua; b < c.length;) a.V(c[b++])
    },
    ba: function (a) {
      this.Ic = a.I();
      this.Bc = a.R();
      var b = a.I();
      this.Ua = [];
      for (var c = 0; c < b;) ++c, this.Ua.push(a.R())
    },
    f: ha
  };
  q.b = !0;
  q.prototype = {
    f: q
  };
  da.b = !0;
  da.qc = [sb, Wb];
  da.Mc = function (a, b) {
    a.Ib = b.Ib;
    if (null == b.F) a.F = null;
    else {
      null ==
        a.F && (a.F = []);
      for (var c = a.F, d = b.F, e = d.length; c.length > e;) c.pop();
      for (var e = 0, f = d.length; e < f;) {
        var g = e++;
        c[g] = d[g].yp()
      }
    }
    a.A = null == b.A ? null : b.A.Sb();
    a.mc = b.mc;
    a.Va = b.Va;
    a.sa = b.sa;
    a.U = b.U;
    a.Wa = b.Wa
  };
  da.prototype = {
    Qo: function (a) {
      if (null == this.A) {
        this.A = new pa;
        for (var b = 0, c = this.F; b < c.length;) {
          var d = c[b];
          ++b;
          d.D = null;
          d.sb = 0
        }
        this.A.Fm(this);
        null != this.vh && this.vh(a)
      }
    },
    Te: function (a, b, c) {
      if (b.W != c) {
        b.W = c;
        H.remove(this.F, b);
        this.F.push(b);
        if (null != this.A) {
          null != b.D && (H.remove(this.A.ra.K, b.D), b.D = null);
          this.A.$i(b);
          for (var d = 0, e = !1; !e;) {
            ++d;
            for (var e = !0, f = 0, g = this.F; f < g.length;) {
              var k = g[f];
              ++f;
              if (k != b && k.W == b.W && k.sb == d) {
                e = !1;
                break
              }
            }
          }
          b.sb = d
        }
        ub.i(this.Nj, a, b, c)
      }
    },
    na: function (a) {
      for (var b = 0, c = this.F; b < c.length;) {
        var d = c[b];
        ++b;
        if (d.S == a) return d
      }
      return null
    },
    s: function (a) {
      null != this.A && this.A.s(a)
    },
    X: function (a) {
      a.Ab(this.Ib);
      a.w(this.mc ? 1 : 0);
      a.V(this.Va);
      a.V(this.sa);
      this.U.X(a);
      a.w(null != this.A ? 1 : 0);
      null != this.A && this.A.X(a);
      a.w(this.F.length);
      for (var b = 0, c = this.F; b < c.length;) c[b++].Ba(a);
      this.Wa[1].X(a);
      this.Wa[2].X(a)
    },
    ba: function (a) {
      this.Ib = a.xb();
      this.mc = 0 != a.I();
      this.Va = a.R();
      this.sa = a.R();
      this.U = n.ba(a);
      var b = 0 != a.I();
      this.A = null;
      b && (this.A = new pa, this.A.ba(a, this));
      for (var b = null == this.A ? null : this.A.ra.K, c = a.I(), d = this.F; d.length > c;) d.pop();
      for (d = 0; d < c;) {
        var e = new ca;
        e.Ca(a, b);
        this.F[d++] = e
      }
      this.Wa[1].ba(a);
      this.Wa[2].ba(a)
    },
    Vi: function () {
      var a = 0,
        b = x.ca();
      this.X(b);
      for (b = b.Xo(); 4 <= b.m.byteLength - b.a;) a ^= b.R();
      return a
    },
    om: function () {
      var a = x.ca(4);
      a.V(this.Vi());
      return a.Mf()
    },
    Nl: function (a) {
      a =
        (new G(new DataView(a))).R();
      y.i(this.dm, this.Vi() != a)
    },
    Sb: function () {
      var a = ta.$b,
        b = this.Gb;
      this.Hb != a && (null == b && (this.Gb = b = new da), this.Hb = a, da.Mc(b, this));
      return b
    },
    f: da
  };
  ca.b = !0;
  ca.qc = [sb];
  ca.mp = function (a, b) {
    a.oa = b.oa;
    a.sb = b.sb;
    a.Ya = b.Ya;
    a.fd = b.fd;
    a.ed = b.ed;
    a.Uf = b.Uf;
    a.Fb = b.Fb;
    a.o = b.o;
    a.bb = b.bb;
    a.S = b.S;
    a.Kb = b.Kb;
    a.D = null == b.D ? null : b.D.Sb();
    a.W = b.W
  };
  ca.prototype = {
    Ba: function (a) {
      a.w(this.oa ? 1 : 0);
      a.V(this.sb);
      a.Ab(this.Ya);
      a.w(this.fd ? 1 : 0);
      a.Ab(this.ed);
      a.V(this.Uf);
      a.Ab(this.o);
      a.V(this.bb);
      a.Jb(this.S);
      a.w(this.Kb ? 1 : 0);
      a.w(this.W.ka);
      a.ip(null == this.D ? -1 : this.D.Aj)
    },
    Ca: function (a, b) {
      this.oa = 0 != a.I();
      this.sb = a.R();
      this.Ya = a.xb();
      this.fd = 0 != a.I();
      this.ed = a.xb();
      this.Uf = a.R();
      this.o = a.xb();
      this.bb = a.R();
      this.S = a.Wb();
      this.Kb = 0 != a.I();
      var c = a.ne();
      this.W = 1 == c ? q.$ : 2 == c ? q.la : q.ya;
      c = a.$n();
      this.D = 0 > c ? null : b[c]
    },
    yp: function () {
      var a = ta.$b,
        b = this.al;
      this.$b != a && (null == b && (this.al = b = new ca), this.$b = a, ca.mp(b, this));
      return b
    },
    f: ca
  };
  oa.b = !0;
  oa.ja = function (a) {
    var b = new oa;
    b.Wf = a;
    return b
  };
  oa.ma = l;
  oa.prototype =
    E(l.prototype, {
      apply: function (a) {
        var b = a.na(this.pa);
        null != b && this.Wf != b.fd && (b.fd = this.Wf, y.i(a.Jj, b))
      },
      Ba: function (a) {
        a.w(this.Wf ? 1 : 0)
      },
      Ca: function (a) {
        this.Wf = 0 != a.I()
      },
      f: oa
    });
  Ca.b = !0;
  Ca.ja = function (a, b) {
    var c = new P;
    c.Gc = a;
    c.Xf = b;
    return c
  };
  Ca.ma = l;
  Ca.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      if (null != b && b.oa) {
        for (var c = a.F, d = [], e = 0, f = 0, g = 0; g < c.length;) {
          var k = c[g];
          ++g;
          k.W == q.ya && d.push(k);
          k.W == q.$ ? ++e : k.W == q.la && ++f
        }
        c = d.length;
        0 != c && (f == e ? 2 > c || (a.Te(b, d[0], q.$), a.Te(b, d[1], q.la)) :
          a.Te(b, d[0], f > e ? q.$ : q.la))
      }
    },
    Ba: function () {},
    Ca: function () {},
    f: Ca
  });
  Z.b = !0;
  Z.ja = function (a, b) {
    var c = new Z;
    c.Zh = a;
    c.newValue = b;
    return c
  };
  Z.jq = function (a, b, c) {
    return a < b ? b : a > c ? c : a
  };
  Z.ma = l;
  Z.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      if (null != b && b.oa && null == a.A) switch (this.Zh) {
        case 0:
          b = this.newValue;
          a.Va = 0 > b ? 0 : 99 < b ? 99 : b;
          break;
        case 1:
          b = this.newValue, a.sa = 0 > b ? 0 : 99 < b ? 99 : b
      }
    },
    Ba: function (a) {
      a.V(this.Zh);
      a.V(this.newValue)
    },
    Ca: function (a) {
      this.Zh = a.R();
      this.newValue = a.R()
    },
    f: Z
  });
  na.b = !0;
  na.ja = function (a, b) {
    var c = new na;
    c.Gc = a;
    c.Rh = b;
    return c
  };
  na.ma = l;
  na.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      null != b && b.oa && (a = a.na(this.Gc), null != a && 0 != a.S && (a.oa = this.Rh))
    },
    Ba: function (a) {
      a.V(this.Gc);
      a.w(this.Rh ? 1 : 0)
    },
    Ca: function (a) {
      this.Gc = a.R();
      this.Rh = 0 != a.I()
    },
    f: na
  });
  ma.b = !0;
  ma.ja = function (a) {
    var b = new ma;
    b.Id = a;
    return b
  };
  ma.ma = l;
  ma.prototype = E(l.prototype, {
    apply: function (a) {
      a = a.na(this.pa);
      null != a && (a.Ya = this.Id)
    },
    Ba: function (a) {
      a.Ab(this.Id)
    },
    Ca: function (a) {
      this.Id =
        a.xb();
      null != this.Id && (this.Id = ra.dd(this.Id, 2))
    },
    f: ma
  });
  P.b = !0;
  P.ja = function (a, b) {
    var c = new P;
    c.Gc = a;
    c.Xf = b;
    return c
  };
  P.ma = l;
  P.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa),
        c = a.na(this.Gc);
      if (null != b && null != c) {
        var d = b.oa;
        (d = d || c == b && !a.mc && null == a.A) && a.Te(b, c, this.Xf)
      }
    },
    Ba: function (a) {
      a.V(this.Gc);
      a.w(this.Xf.ka)
    },
    Ca: function (a) {
      this.Gc = a.R();
      a = a.ne();
      this.Xf = 1 == a ? q.$ : 2 == a ? q.la : q.ya
    },
    f: P
  });
  la.b = !0;
  la.ja = function (a) {
    var b = new la;
    b.Md = a;
    return b
  };
  la.ma = l;
  la.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      null != b && b.oa && null == a.A && (a.U = this.Md, null != a.th && a.th(b, this.Md))
    },
    Ba: function (a) {
      var b = x.ca();
      this.Md.X(b);
      b = pako.deflateRaw(b.oc());
      a.Dc(b.byteLength);
      a.Ec(b)
    },
    Ca: function (a) {
      a = pako.inflateRaw(a.Ac(a.wb()));
      this.Md = n.ba(new G(new DataView(a.buffer, a.byteOffset, a.byteLength)))
    },
    f: la
  });
  Na.b = !0;
  Na.ma = l;
  Na.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      null != b && b.oa && this.W != q.ya && (a.Wa[this.W.ka] = this.Sf)
    },
    Ba: function (a) {
      a.w(this.W.ka);
      this.Sf.X(a)
    },
    Ca: function (a) {
      var b = a.ne();
      this.W = 1 == b ? q.$ : 2 == b ? q.la : q.ya;
      this.Sf = new ha;
      this.Sf.ba(a)
    },
    f: Na
  });
  ka.b = !0;
  ka.ja = function (a) {
    var b = new ka;
    b.newValue = a;
    return b
  };
  ka.ma = l;
  ka.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      null != b && b.oa && (a.mc = this.newValue)
    },
    Ba: function (a) {
      a.w(this.newValue ? 1 : 0)
    },
    Ca: function (a) {
      this.newValue = 0 != a.I()
    },
    f: ka
  });
  ja.b = !0;
  ja.ja = function (a, b, c, d) {
    var e = new ja;
    e.S = a;
    e.name = b;
    e.Hh = c;
    e.Ya = d;
    return e
  };
  ja.ma = l;
  ja.prototype = E(l.prototype, {
    apply: function (a) {
      if (0 == this.pa) {
        var b =
          new ca;
        b.S = this.S;
        b.o = this.name;
        b.ed = this.Hh;
        b.Ya = this.Ya;
        a.F.push(b);
        a = a.Kj;
        null != a && a(b)
      }
    },
    Ba: function (a) {
      a.V(this.S);
      a.Ab(this.name);
      a.Ab(this.Hh);
      a.Ab(this.Ya)
    },
    Ca: function (a) {
      this.S = a.R();
      this.name = a.xb();
      this.Hh = a.xb();
      this.Ya = a.xb()
    },
    f: ja
  });
  Ma.b = !0;
  Ma.ma = l;
  Ma.prototype = E(l.prototype, {
    apply: function (a) {
      if (null != a.A) {
        var b = a.na(this.pa);
        if (null != b && b.oa) {
          var c = 0 < a.A.Fa,
            d = a.A;
          this.Sh ? d.Fa = 120 : 120 == d.Fa && (d.Fa = 119);
          c || y.i(a.Dj, b)
        }
      }
    },
    Ba: function (a) {
      a.w(this.Sh ? 1 : 0)
    },
    Ca: function (a) {
      this.Sh = 0 != a.I()
    },
    f: Ma
  });
  La.b = !0;
  La.ma = l;
  La.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      null != b && Ia.i(a.Ij, b, this.Vf)
    },
    Ba: function (a) {
      a.cd(ra.dd(this.Vf, 140))
    },
    Ca: function (a) {
      this.Vf = a.Zc();
      if (140 < this.Vf.length) throw new u("message too long");
    },
    f: La
  });
  Ba.b = !0;
  Ba.ma = l;
  Ba.prototype = E(l.prototype, {
    apply: function (a) {
      a = a.na(this.pa);
      if (null != a) {
        var b = this.input;
        0 == (a.bb & 16) && 0 != (b & 16) && (a.Kb = !0);
        a.bb = b
      }
    },
    Ba: function (a) {
      a.ib(this.input)
    },
    Ca: function (a) {
      this.input = a.Sa()
    },
    f: Ba
  });
  Zb.b = !0;
  Zb.Mh = function () {
    l.Pa(Sa);
    l.Pa(Ba);
    l.Pa(La);
    l.Pa(ja);
    l.Pa(Y);
    l.Pa(Ka);
    l.Pa(Ja);
    l.Pa(Ma);
    l.Pa(Z);
    l.Pa(la);
    l.Pa(P);
    l.Pa(ka);
    l.Pa(na);
    l.Pa(Ca);
    l.Pa(oa);
    l.Pa(ia);
    l.Pa(ma);
    l.Pa(Na)
  };
  Y.b = !0;
  Y.ja = function (a, b, c) {
    var d = new Y;
    d.S = a;
    d.Fc = b;
    d.Qf = c;
    return d
  };
  Y.ma = l;
  Y.prototype = E(l.prototype, {
    apply: function (a) {
      if (0 != this.S) {
        var b = a.na(this.pa);
        if (null != b && b.oa) {
          var c = a.na(this.S);
          null != c && (H.remove(a.F, c), null != a.A && H.remove(a.A.ra.K, c.D), bc.i(a.Lj, c, this.Fc, this.Qf, b))
        }
      }
    },
    Ba: function (a) {
      null != this.Fc && (this.Fc = ra.dd(this.Fc, 100));
      a.V(this.S);
      a.Ab(this.Fc);
      a.w(this.Qf ? 1 : 0)
    },
    Ca: function (a) {
      this.S = a.R();
      this.Fc = a.xb();
      this.Qf = 0 != a.I();
      if (null != this.Fc && 100 < this.Fc.length) throw new u("string too long");
    },
    f: Y
  });
  Ka.b = !0;
  Ka.ma = l;
  Ka.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      null != b && b.oa && a.Qo(b, 0)
    },
    Ba: function () {},
    Ca: function () {},
    f: Ka
  });
  Ja.b = !0;
  Ja.ma = l;
  Ja.prototype = E(l.prototype, {
    apply: function (a) {
      var b = a.na(this.pa);
      if (null != b && b.oa && null != a.A) {
        a.A = null;
        for (var c = 0, d = a.F; c < d.length;) {
          var e = d[c];
          ++c;
          e.D = null;
          e.sb = 0
        }
        null !=
          a.we && a.we(b)
      }
    },
    Ba: function () {},
    Ca: function () {},
    f: Ja
  });
  ia.b = !0;
  ia.ja = function (a) {
    for (var b = new ia, c = a.B.F, d = [], e = 0; e < c.length;) {
      var f = a.Td[c[e++].S];
      d.push(null == f ? 0 : f.ping)
    }
    b.Jd = d;
    return b
  };
  ia.ma = l;
  ia.prototype = E(l.prototype, {
    apply: function (a) {
      if (0 == this.pa) {
        a = a.F;
        for (var b = 0, c = a.length; b < c;) {
          var d = b++;
          if (d >= this.Jd.length) break;
          a[d].Fb = this.Jd[d]
        }
      }
    },
    Ba: function (a) {
      a.Jb(this.Jd.length);
      for (var b = 0, c = this.Jd; b < c.length;) a.Jb(c[b++])
    },
    Ca: function (a) {
      this.Jd = [];
      for (var b = a.Wb(), c = 0; c < b;) ++c, this.Jd.push(a.Wb())
    },
    f: ia
  });
  X.b = !0;
  X.qc = [sb];
  X.Mc = function (a, b) {
    a.ga = b.ga;
    a.l = b.l;
    a.qa = b.qa;
    a.Ea = b.Ea;
    a.ea = b.ea;
    a.oi = b.oi;
    a.h = b.h;
    a.G = b.G;
    var c = a.a,
      d = b.a;
    c.x = d.x;
    c.y = d.y;
    c = a.M;
    d = b.M;
    c.x = d.x;
    c.y = d.y
  };
  X.prototype = {
    X: function (a) {
      var b = this.a;
      a.v(b.x);
      a.v(b.y);
      b = this.M;
      a.v(b.x);
      a.v(b.y);
      a.v(this.ga);
      a.v(this.l);
      a.v(this.qa);
      a.v(this.Ea);
      a.ib(this.ea);
      a.V(this.h);
      a.V(this.G)
    },
    ba: function (a) {
      var b = this.a;
      b.x = a.u();
      b.y = a.u();
      b = this.M;
      b.x = a.u();
      b.y = a.u();
      this.ga = a.u();
      this.l = a.u();
      this.qa = a.u();
      this.Ea = a.u();
      this.ea = a.Sa();
      this.h = a.R();
      this.G = a.R()
    },
    Ml: function (a) {
      var b = this.a,
        c = a.a,
        d = b.x - c.x,
        b = b.y - c.y,
        e = a.ga + this.ga,
        f = d * d + b * b;
      if (0 < f && f <= e * e) {
        var f = Math.sqrt(f),
          d = d / f,
          b = b / f,
          c = this.qa / (this.qa + a.qa),
          e = e - f,
          f = e * c,
          g = this.a,
          k = this.a;
        g.x = k.x + d * f;
        g.y = k.y + b * f;
        k = g = a.a;
        e -= f;
        g.x = k.x - d * e;
        g.y = k.y - b * e;
        e = this.M;
        f = a.M;
        e = d * (e.x - f.x) + b * (e.y - f.y);
        0 > e && (e *= this.l * a.l + 1, c *= e, g = f = this.M, f.x = g.x - d * c, f.y = g.y - b * c, a = f = a.M, c = e - c, f.x = a.x + d * c, f.y = a.y + b * c)
      }
    },
    Sb: function () {
      var a = ta.$b,
        b = this.Gb;
      this.Hb !=
        a && (null == b && (this.Gb = b = new X), this.Hb = a, X.Mc(b, this));
      return b
    },
    f: X
  };
  Aa.b = !0;
  Aa.qc = [sb];
  Aa.Mc = function (a, b) {
    if (null == b.K) a.K = null;
    else {
      null == a.K && (a.K = []);
      for (var c = a.K, d = b.K, e = d.length; c.length > e;) c.pop();
      for (var e = 0, f = d.length; e < f;) {
        var g = e++;
        c[g] = d[g].Sb()
      }
    }
    a.C = b.C;
    a.O = b.O;
    a.fa = b.fa
  };
  Aa.prototype = {
    X: function (a) {
      a.w(this.K.length);
      for (var b = 0, c = this.K.length; b < c;) {
        var d = b++,
          e = this.K[d];
        e.Aj = d;
        e.X(a)
      }
    },
    ba: function (a) {
      this.K = [];
      for (var b = a.I(), c = 0; c < b;) {
        ++c;
        var d = new X;
        d.ba(a);
        this.K.push(d)
      }
    },
    s: function (a) {
      for (var b =
          0, c = this.K; b < c.length;) {
        var d = c[b];
        ++b;
        var e = d.a,
          f = d.a,
          g = d.M;
        e.x = f.x + g.x * a;
        e.y = f.y + g.y * a;
        f = e = d.M;
        d = d.Ea;
        e.x = f.x * d;
        e.y = f.y * d
      }
      a = 0;
      for (b = this.K.length; a < b;) {
        d = a++;
        c = this.K[d];
        d += 1;
        for (e = this.K.length; d < e;) f = this.K[d++], 0 != (f.h & c.G) && 0 != (f.G & c.h) && c.Ml(f);
        if (0 != c.qa) {
          d = 0;
          for (e = this.fa; d < e.length;)
            if (f = e[d], ++d, 0 != (f.h & c.G) && 0 != (f.G & c.h)) {
              var g = f.Aa,
                k = c.a,
                g = f.Ka - (g.x * k.x + g.y * k.y) + c.ga;
              if (0 < g) {
                var h = k = c.a,
                  m = f.Aa;
                k.x = h.x + m.x * g;
                k.y = h.y + m.y * g;
                g = c.M;
                k = f.Aa;
                g = g.x * k.x + g.y * k.y;
                0 > g && (g *= c.l * f.l + 1, h = k = c.M, f = f.Aa,
                  k.x = h.x - f.x * g, k.y = h.y - f.y * g)
              }
            } d = 0;
          for (e = this.O; d < e.length;)
            if (f = e[d], ++d, 0 != (f.h & c.G) && 0 != (f.G & c.h))
              if (0 != 0 * f.Nc) {
                var l = f.Y.a,
                  m = f.aa.a,
                  k = m.x - l.x,
                  g = m.y - l.y,
                  n = c.a,
                  h = n.x - m.x,
                  m = n.y - m.y,
                  n = c.a;
                0 < (n.x - l.x) * k + (n.y - l.y) * g && 0 > h * k + m * g && (l = Math.sqrt(k * k + g * g), g = -(g / l), k /= l, h = g * h + k * m, 0 > h && (h = -h, g = -g, k = -k), h < c.ga && (h = c.ga - h, l = m = c.a, m.x = l.x + g * h, m.y = l.y + k * h, h = c.M, h = g * h.x + k * h.y, 0 > h && (h *= c.l * f.l + 1, m = f = c.M, f.x = m.x - g * h, f.y = m.y - k * h)))
              } else {
                f.Ti(D.Lf);
                var g = D.Lf,
                  l = g.x,
                  n = g.y,
                  p = f.Y.a,
                  q = f.aa.a,
                  g = c.a,
                  k = g.x - l,
                  m = g.y - n,
                  h = k,
                  g =
                  m,
                  p = 0 < -(p.y - n) * k + (p.x - l) * m,
                  l = q.x - l,
                  n = q.y - n,
                  q = 0 < -n * k + l * m;
                if (0 < f.Nc ? p && !q : p || !q) l = Math.sqrt(k * k + m * m) - Math.sqrt(l * l + n * n), 0 > l && (l = -l, h = -k, g = -m), l < c.ga && (m = Math.sqrt(h * h + g * g), k = h / m, g /= m, m = h = c.a, l = c.ga - l, h.x = m.x + k * l, h.y = m.y + g * l, h = c.M, h = k * h.x + g * h.y, 0 > h && (h *= c.l * f.l + 1, m = f = c.M, f.x = m.x - k * h, f.y = m.y - g * h))
              } d = 0;
          for (e = this.C; d < e.length;) f = e[d], ++d, 0 != (f.h & c.G) && 0 != (f.G & c.h) && (k = c.a, h = f.a, g = k.x - h.x, k = k.y - h.y, h = g * g + k * k, 0 < h && h <= c.ga * c.ga && (h = Math.sqrt(h), g /= h, k /= h, h = c.ga - h, l = m = c.a, m.x = l.x + g * h, m.y = l.y + k * h, h = c.M, h = g *
            h.x + k * h.y, 0 > h && (h *= c.l * f.l + 1, m = f = c.M, f.x = m.x - g * h, f.y = m.y - k * h)))
        }
      }
    },
    Sb: function () {
      var a = ta.$b,
        b = this.Gb;
      this.Hb != a && (null == b && (this.Gb = b = new Aa), this.Hb = a, Aa.Mc(b, this));
      return b
    },
    f: Aa
  };
  D.b = !0;
  D.prototype = {
    X: function (a) {
      a.w(this.Y.bf);
      a.w(this.aa.bf);
      a.v(this.l);
      a.V(this.h);
      a.V(this.G);
      a.v(this.Nc);
      a.w(this.Xa ? 1 : 0);
      a.V(this.ea)
    },
    ba: function (a, b) {
      this.Y = b[a.I()];
      this.aa = b[a.I()];
      this.l = a.u();
      this.h = a.R();
      this.G = a.R();
      this.Nc = a.u();
      this.Xa = 0 != a.I();
      this.ea = a.R()
    },
    lc: function (a) {
      a *= .017453292519943295;
      if (0 > a) {
        a = -a;
        var b = this.Y;
        this.Y = this.aa;
        this.aa = b
      }
      a > D.ll && a < D.kl && (this.Nc = 1 / Math.tan(a / 2))
    },
    Ti: function (a) {
      var b = this.aa.a,
        c = this.Y.a,
        d = .5 * (b.x - c.x),
        b = .5 * (b.y - c.y),
        c = this.Y.a,
        e = this.Nc;
      a.x = c.x + d + -b * e;
      a.y = c.y + b + d * e
    },
    f: D
  };
  u.b = !0;
  u.nq = function (a) {
    return a instanceof Error ? a : new u(a)
  };
  u.ma = Error;
  u.prototype = E(Error.prototype, {
    f: u
  });
  q.ya = new q(0, 16777215, 0, -1, "Spectators", "t-spec", 0, 0);
  q.$ = new q(1, 15035990, -1, 8, "Red", "t-red", 0, 2);
  q.la = new q(2, 5671397, 1, 16, "Blue", "t-blue", 0, 4);
  q.ya.wf = q.ya;
  q.$.wf = q.la;
  q.la.wf = q.$;
  l.Sk = Object.create(null);
  l.ze = 0;
  Sa.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  oa.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Ca.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Z.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  na.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  ma.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  P.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  la.Ha = l.Oa({
    Ja: !1,
    Ia: !1,
    cl: {
      Lk: 10,
      gl: 2E3
    }
  });
  Na.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  ka.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  ja.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Ma.Ha = l.Oa({});
  La.Ha = l.Oa({
    Ja: !1,
    Ia: !1,
    cl: {
      Lk: 10,
      gl: 900
    }
  });
  Ba.Ha = l.Oa({});
  Y.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Ka.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  Ja.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  ia.Ha = l.Oa({
    Ja: !1,
    Ia: !1
  });
  D.ll = .17435839227423353;
  D.kl = 5.934119456780721;
  D.Lf = new O(0, 0);
  S.hl = new Cb([0, 0, 2, 1, 0, .35, 1, 0, 1, 0, .7, 1, 0, 0, 0, 1]);
  S.il = new Cb([0, -1, 3, 0, 0, .35, 0, 0, 0, 0, .65, 0, 0, 1, 3, 1]);

  Zb.Mh();

  return (function() {
    const $_ReplayController = Db;
    const $_GameState = da;
    const $_Player = ca;
    const $_Team = q;
    const $_DiscF = X;
    const $_TestSimFloat = Aa;
    const ta = pa;

    function forward(class_, key, to) {
      Object.defineProperty(class_.prototype, key, {
        get() {if (typeof this[to] === 'undefined') throw new Error(`${key}:${to}`); return this[to]},
        set(x) {return this[to] = x},
      })
    }

    forward($_ReplayController, '_td', 'ad');
    forward($_ReplayController, '_Mg', 'kg');
    forward($_ReplayController, '_Te', 'Cf');
    forward($_ReplayController, '_v', 's');

    forward($_ReplayController, '_L', 'B');
    forward($_ReplayController, '_vc', 'pc');
    forward($_ReplayController, '_S', 'P');

    forward($_GameState, '_H', 'A');
    forward($_GameState, '_D', 'F');

    forward(ta, '_zb', 'ob');
    forward(ta, '_Ac', 'fc');
    forward(ta, '_Kb', 'yb');
    forward(ta, '_Cb', 'tb');
    forward(ta, '_xa', 'sa');
    forward(ta, '_wa', 'ra');

    forward($_TestSimFloat, '_K', 'K');

    forward($_Player, '_T', 'S');
    forward($_Player, '_mb', 'bb');
    forward($_Player, '_bc', 'Kb');
    forward($_Player, '_$', 'W');
    forward($_Player, '_F', 'D');
    forward($_Player, '_o', 'o');

    forward($_Team, '_P', 'ka');

    forward($_DiscF, '_a', 'a');
    forward($_DiscF, '_M', 'M');

    return {
      $_GameState,
      $_ReplayController,
      v: 1,
    };
  })();
}

module.exports.closure = closure;

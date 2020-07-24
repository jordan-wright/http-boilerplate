
function closure() {
  const pako = {
    inflateRaw: require('zlib').inflateRawSync,
  };

  function $__inherit__(_class, base) {
    _class.prototype = E(base.prototype, _class.prototype);
  }

  /** @constructor */
  /** @param {string} a */
  function q(a) {
    this.Ha = a;
    Error.captureStackTrace && Error.captureStackTrace(this, q)
  }

  /** @constructor */
  function $_Vertex() {
    this.gd = 0;
    this.B = 32;
    this.h = -1;
    this.l = 1;
    this.a = new $_Point(0, 0)
  }

  /** @constructor */
  function $_Segment() {
    this.jg = this.kg = this.sa = null;
    this.rj = 0;
    this.V = this.R = this.Hd = null;
    this.xc = 0;
    this.l = 1;
    this.h = -1;
    this.B = 32;
    this.tb = 1 / 0;
    this.Wa = true;
    this.X = 0
  }

  /** @constructor */
  function $_Plane() {
    this.B = 32;
    this.h = -1;
    this.l = 1;
    this.Oa = 0;
    this.sa = new $_Point(0, 0)
  }

  /** @constructor */
  function $_TestSimFloat() {
    this.Zb = -1;
    this.Yb = null;
    this.K = []
  }

  /** @constructor */
  function $_DiscF() {
    this.Zb = -1;
    this.Yb = null;
    this.zk = 0;
    this.h = this.B = -1;
    this.gj = 0;
    this.X = 16777215;
    this.Ba = .99;
    this.pa = 1;
    this.l = .5;
    this.la = 10;
    this.M = new $_Point(0, 0);
    this.a = new $_Point(0, 0)
  }

  /** @constructor */
  function $_PingBroadcastAction() {
    this.ia = 0
  }

  /** @constructor */
  function $_StopMatchAction() {
    this.ia = 0
  }

  /** @constructor */
  function $_StartMatchAction() {
    this.ia = 0
  }

  /** @constructor */
  function $_RemovePlayerAction() {
    this.sg = false;
    this.ia = 0
  }

  /** @namespace */
  function ec() {}

  /** @constructor */
  function ma() {
    this.ia = 0
  }

  /** @constructor */
  function $_DiscMoveAction() {
    this.ia = 0
  }

  /** @constructor */
  function $_PlayerChatAction() {
    this.ia = 0
  }

  /** @constructor */
  function $_PauseGameAction() {
    this.ia = 0
  }

  /** @constructor */
  function $_NewPlayerAction() {
    this.ia = 0
  }

  /** @constructor */
  function $_ChangeTeamsLockAction() {
    this.ia = 0
  }

  /** @constructor */
  function Oa() {
    this.ia = 0
  }

  /** @constructor */
  function $_ChangeStadiumAction() {
    this.ia = 0
  }

  /** @constructor */
  function $_ChangeTeamAction() {
    this.ia = 0
  }

  /** @constructor */
  function qa() {
    this.ia = 0
  }

  /** @constructor */
  function ra() {
    this.ia = 0
  }

  /** @constructor */
  function da() {
    this.ia = 0
  }

  /** @constructor */
  function Pa() {
    this.ia = 0
  }

  /** @constructor */
  function sa() {
    this.ia = 0
  }

  /** @constructor */
  function $_Player() {
    this.uc = -1;
    this.im = null;
    this.$ = p.Fa;
    this.F = null;
    this.bc = false;
    this.mb = this.T = 0;
    this.o = "Player";
    this.wg = this.wb = 0;
    this.wd = null;
    this.xd = false;
    this.jb = null;
    this.Bb = 0;
    this.ra = false
  }

  /** @constructor */
  function $_GameState() {
    this.Zb = -1;
    this.U = this.Yb = null;
    this.fb = this.xa = 3;
    this.Gc = false;
    this.H = null;
    /** @type {$_Player} */
    this.D = [];
    this.$b = "";
    this.U = $_Stadium.lh()[0];
    this.hb = [null, new ka, new ka];
    this.hb[1].cb.push(p.ba.X);
    this.hb[2].cb.push(p.ta.X)
  }

  /** @constructor */
  function p(a, b, c, d, e, f, g, n) {
    this.Tf = null;
    this.P = a;
    this.X = b;
    this.dh = c;
    this.mo = d;
    this.o = e;
    this.sn = f;
    this.B = n;
    this.El = new ka;
    this.El.cb.push(b)
  }

  /** @constructor */
  function ka() {
    this.Tc = 16777215;
    this.cb = []
  }

  /** @constructor */
  function $_Stadium() {
    this.C = [];
    this.O = [];
    this.ha = [];
    this.kc = [];
    this.K = [];
    this.Rd = new $_PlayerPhysics;
    this.oe = this.Dh();
    this.bh = 255;
    this.qe = this.Fe = 0;
    this.rf = true
  }

  /** @constructor */
  function $_PlayerPhysics() {
    this.pa = this.l = .5;
    this.Ba = .96;
    this.me = .1;
    this.Be = .07;
    this.Ce = .96;
    this.Kd = 5
  }

  /** @constructor */
  function mb() {
    this.Yd = p.Fa;
    this.V = new $_Point(0, 0);
    this.R = new $_Point(0, 0)
  }

  /** @constructor */
  function ta() {
    this.Zb = -1;
    this.Yb = null;
    this.Kb = this.Cb = this.Ac = this.Ga = 0;
    this.kd = new $_Point(0, 0);
    this.Jd = p.ba;
    this.ec = this.pc = this.zb = 0;
    this.wa = new $_TestSimFloat;
    this.xa = 0;
    this.fb = 5;
    this.U = null
  }

  /** @constructor */
  function ua() {
    this.h = this.B = -1;
    this.X = 16777215;
    this.Ba = .99;
    this.pa = 1;
    this.l = .5;
    this.la = 10;
    this.M = new $_Point(0, 0);
    this.a = new $_Point(0, 0)
  }

  /** @constructor */
  function nb() {}

  /** @namespace */
  function Tb() {}

  /** @namespace */
  function wb() {}

  /** @namespace */
  function ia() {}

  /** @namespace */
  function x() {}

  /** @namespace */
  function y() {}

  /** @constructor */
  /** @param {number} a */
  /** @param {number} b */
  function $_Point(a, b) {
    this.x = a;
    this.y = b
  }

  /** @constructor */
  /** @param {Uint8Array} a */
  /** @param {$_GameState} b */
  /** @param {number} c */
  function $_ReplayController(a, b, c) {
    /** @type {$_Action} */
    this.Kf = null;

    this.kk = [];
    this.Fk = 5;
    this.td = -1;
    this.Lf = this.Lb = this.yh = this.Lj = 0;
    $_BaseNetGameController.call(this, b);
    const a2 = new $_Reader(new DataView(a.buffer), false);
    if (1212305970 != a2.$a()) throw new q("");
    const b2 = a2.$a();
    if (c != b2) throw new q(new Fb(b2));
    this.Te = a2.$a();
    const c2 = pako.inflateRaw(a2.qb());
    /** @type {$_Reader} */
    this.Cc = new $_Reader(new DataView(c2.buffer, c2.byteOffset, c2.byteLength));
    this.Np(this.Cc);
    const c3 = this.Cc.qb();
    this.Cc = new $_Reader(new DataView(c3.buffer, c3.byteOffset, c3.byteLength), false);
    this.Yh();
    this.yh = 0; // EDIT
    this.nc = -1
  }

  /** @constructor */
  function $_BaseNetGameController(a) {
    this.ti = new Ia;
    this.ce = this.Vb = 0;
    this.Ud = new Ia;
    this.nc = this.Ub = this.dd = 0;
    this.vc = .06;
    this.Mg = 16.666666666666668;
    this.jf = 120;
    $_BaseGameController.call(this, a)
  }

  /** @namespace */
  function xa() {}

  /** @namespace */
  function sb() {}

  /** @namespace */
  function Yb() {}

  /** @constructor */
  function $_CheckStateHashAction() {
    this.ia = 0
  }

  /** @constructor */
  /** @param {$_GameState} a */
  function $_BaseGameController(a) {
    this.S = 0;
    this.L = a
  }

  /** @constructor */
  function Ia() {
    this.list = []
  }

  /** @constructor */
  function $_Action() {
    this.ia = 0
  }

  /** @constructor */
  /** @param {DataView} a */
  /** @param {boolean} b */
  function $_Writer(a, b) {
    null == b && (b = false);
    this.m = a;
    this.Ka = b;
    this.a = 0
  }

  /** @constructor */
  /** @param {DataView} a */
  /** @param {boolean} b */
  function $_Reader(a, b) {
    null == b && (b = false);
    this.m = a;
    this.Ka = b;
    this.a = 0
  }

  /** @namespace */
  function aa() {}

  /** @namespace */
  function C() {}

  /** @namespace */
  /** @param {Function} a */
  /** @param {Object} b */
  function E(a, b) {
    var c = Object.create(a),
      d;
    for (d in b) c[d] = b[d];
    b.toString !== Object.prototype.toString &&
      (c.toString = b.toString);
    return c
  }
  C.b = true;
  /** @param {string} a */
  /** @param {number} b */
  C.Ai = function (a, b) {
    var c = a.charCodeAt(b);
    if (c == c) return c
  };
  /** @param {T[]} a */
  /** @param {T} b */
  /** @template T */
  C.remove = function (a, b) {
    var c = a.indexOf(b);
    if (-1 == c) return false;
    a.splice(c, 1);
    return true
  };
  Math.b = true;
  aa.b = true;
  /** @param {string} a */
  /** @param {number} b */
  aa.vd = function (a, b) {
    return a.length <= b ? a : C.substr(a, 0, b)
  };
  aa.jr = function (a) {
    for (var b = "", c = 0, d = a.byteLength; c < d;) b += H.xg(a[c++], 2);
    return b
  };
  $_Reader.b = true;
  /** @param {DataView} a */
  /** @param {number} b */
  $_Reader.tn = function (a, b) {
    var c = a.getUint8(b),
      d, e, f, g, n, k = b;
    if (0 == (c & 128)) ++b;
    else if (192 == (c & 224)) d = a.getUint8(b + 1), c = (c & 31) << 6 | d & 63, b += 2;
    else if (224 == (c & 240)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), c = (c & 15) << 12 | (d & 63) << 6 | e & 63, b += 3;
    else if (240 == (c & 248)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63, b += 4;
    else if (248 == (c & 252)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b +
      3), g = a.getUint8(b + 4), c = (c & 3) << 24 | (d & 63) << 18 | (e & 63) << 12 | (f & 63) << 6 | g & 63, b += 5;
    else if (252 == (c & 254)) d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), g = a.getUint8(b + 4), n = a.getUint8(b + 5), c = (c & 1) << 30 | (d & 63) << 24 | (e & 63) << 18 | (f & 63) << 12 | (g & 63) << 6 | n & 63, b += 6;
    else throw new q("Cannot decode UTF8 character at offset " + b + ": charCode (" + c + ") is invalid");
    return {
      "char": c,
      length: b - k
    }
  };
  $_Reader.prototype = {
    qb: function (a) {
      null == a && (a = this.m.byteLength - this.a);
      if (this.a + a > this.m.byteLength) throw new q("Read too much");
      var b = new Uint8Array(this.m.buffer, this.m.byteOffset + this.a, a);
      this.a += a;
      return b
    },
    /** @returns {ArrayBuffer} */
    Rh: function (a) {
      var b = this.qb(a);
      a = new ArrayBuffer(a);
      (new Uint8Array(a)).set(b);
      return a
    },
    Re: function () {
      return this.m.getInt8(this.a++)
    },
    G: function () {
      return this.m.getUint8(this.a++)
    },
    Mp: function () {
      var a = this.m.getInt16(this.a, this.Ka);
      this.a += 2;
      return a
    },
    xb: function () {
      var a = this.m.getUint16(this.a, this.Ka);
      this.a += 2;
      return a
    },
    W: function () {
      var a = this.m.getInt32(this.a, this.Ka);
      this.a += 4;
      return a
    },
    $a: function () {
      var a = this.m.getUint32(this.a,
        this.Ka);
      this.a += 4;
      return a
    },
    Zf: function () {
      var a = this.m.getFloat32(this.a, this.Ka);
      this.a += 4;
      return a
    },
    A: function () {
      var a = this.m.getFloat64(this.a, this.Ka);
      this.a += 8;
      return a
    },
    yb: function () {
      for (var a = this.a, b = 0, c, d = 0; c = this.m.getUint8(a + b), 5 > b && (d |= (c & 127) << 7 * b >>> 0), ++b, 0 != (c & 128););
      this.a += b;
      return d | 0
    },
    rd: function (a) {
      var b = this.a,
        c, d = "";
      for (a = b + a; b < a;) c = $_Reader.tn(this.m, b), b += c.length, d += String.fromCodePoint(c["char"]);
      if (b != a) throw new q("Actual string length differs from the specified: " + (b - a) + " bytes");
      this.a = b;
      return d
    },
    Jb: function () {
      var a = this.yb();
      return 0 >= a ? null : this.rd(a - 1)
    },
    oc: function () {
      return this.rd(this.yb())
    },
    Sk: function () {
      return this.rd(this.G())
    },
    $f: function () {
      var a = this.oc();
      return JSON.parse(a)
    },
    g: $_Reader
  };
  $_Writer.b = true;
  /** @param {number} a */
  /** @param {boolean} b */
  $_Writer.ca = function (a, b) {
    null == b && (b = false);
    null == a && (a = 16);
    return new $_Writer(new DataView(new ArrayBuffer(a)), b)
  };
  /** @param {number} a */
  /** @param {DataView} b */
  /** @param {number} c */
  $_Writer.Cn = function (a, b, c) {
    var d = c;
    if (0 > a) throw new q("Cannot encode UTF8 character: charCode (" + a + ") is negative");
    if (128 > a) b.setUint8(c, a & 127), ++c;
    else if (2048 > a) b.setUint8(c, a >> 6 &
      31 | 192), b.setUint8(c + 1, a & 63 | 128), c += 2;
    else if (65536 > a) b.setUint8(c, a >> 12 & 15 | 224), b.setUint8(c + 1, a >> 6 & 63 | 128), b.setUint8(c + 2, a & 63 | 128), c += 3;
    else if (2097152 > a) b.setUint8(c, a >> 18 & 7 | 240), b.setUint8(c + 1, a >> 12 & 63 | 128), b.setUint8(c + 2, a >> 6 & 63 | 128), b.setUint8(c + 3, a & 63 | 128), c += 4;
    else if (67108864 > a) b.setUint8(c, a >> 24 & 3 | 248), b.setUint8(c + 1, a >> 18 & 63 | 128), b.setUint8(c + 2, a >> 12 & 63 | 128), b.setUint8(c + 3, a >> 6 & 63 | 128), b.setUint8(c + 4, a & 63 | 128), c += 5;
    else if (-2147483648 > a) b.setUint8(c, a >> 30 & 1 | 252), b.setUint8(c + 1, a >> 24 & 63 |
      128), b.setUint8(c + 2, a >> 18 & 63 | 128), b.setUint8(c + 3, a >> 12 & 63 | 128), b.setUint8(c + 4, a >> 6 & 63 | 128), b.setUint8(c + 5, a & 63 | 128), c += 6;
    else throw new q("Cannot encode UTF8 character: charCode (" + a + ") is too large (>= 0x80000000)");
    return c - d
  };
  /** @param {number} a */
  $_Writer.Om = function (a) {
    if (0 > a) throw new q("Cannot calculate length of UTF8 character: charCode (" + a + ") is negative");
    if (128 > a) return 1;
    if (2048 > a) return 2;
    if (65536 > a) return 3;
    if (2097152 > a) return 4;
    if (67108864 > a) return 5;
    if (-2147483648 > a) return 6;
    throw new q("Cannot calculate length of UTF8 character: charCode (" +
      a + ") is too large (>= 0x80000000)");
  };
  /** @param {string} a */
  $_Writer.qf = function (a) {
    for (var b = 0, c = a.length, d = 0; d < c;) b += $_Writer.Om(C.Ai(a, d++));
    return b
  };
  /** @param {number} a */
  $_Writer.Pm = function (a) {
    a >>>= 0;
    return 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5
  };
  $_Writer.prototype = {
    mg: function () {
      var a = new ArrayBuffer(this.a),
        b = new Uint8Array(this.m.buffer, this.m.byteOffset, this.a);
      (new Uint8Array(a)).set(b);
      return a
    },
    Nb: function () {
      return new Uint8Array(this.m.buffer, this.m.byteOffset, this.a)
    },
    $d: function () {
      return new DataView(this.m.buffer, this.m.byteOffset, this.a)
    },
    Qq: function () {
      return new $_Reader(this.$d(),
        this.Ka)
    },
    ic: function (a) {
      this.m.byteLength < a && this.iq(2 * this.m.byteLength >= a ? 2 * this.m.byteLength : a)
    },
    iq: function (a) {
      if (1 > a) throw new q("Can't resize buffer to a capacity lower than 1");
      if (this.m.byteLength < a) {
        var b = new Uint8Array(this.m.buffer);
        a = new ArrayBuffer(a);
        (new Uint8Array(a)).set(b);
        this.m = new DataView(a)
      }
    },
    u: function (a) {
      var b = this.a++;
      this.ic(this.a);
      this.m.setUint8(b, a)
    },
    dr: function (a) {
      var b = this.a;
      this.a += 2;
      this.ic(this.a);
      this.m.setInt16(b, a, this.Ka)
    },
    sc: function (a) {
      var b = this.a;
      this.a += 2;
      this.ic(this.a);
      this.m.setUint16(b, a, this.Ka)
    },
    Z: function (a) {
      var b = this.a;
      this.a += 4;
      this.ic(this.a);
      this.m.setInt32(b, a, this.Ka)
    },
    rb: function (a) {
      var b = this.a;
      this.a += 4;
      this.ic(this.a);
      this.m.setUint32(b, a, this.Ka)
    },
    Ql: function (a) {
      var b = this.a;
      this.a += 4;
      this.ic(this.a);
      this.m.setFloat32(b, a, this.Ka)
    },
    w: function (a) {
      var b = this.a;
      this.a += 8;
      this.ic(this.a);
      this.m.setFloat64(b, a, this.Ka)
    },
    Pb: function (a) {
      var b = this.a;
      this.a += a.byteLength;
      this.ic(this.a);
      (new Uint8Array(this.m.buffer, this.m.byteOffset,
        this.m.byteLength)).set(a, b)
    },
    og: function (a) {
      this.Pb(new Uint8Array(a))
    },
    tc: function (a) {
      this.ib($_Writer.qf(a));
      this.qg(a)
    },
    Qb: function (a) {
      null == a ? this.ib(0) : (this.ib($_Writer.qf(a) + 1), this.qg(a))
    },
    Rl: function (a) {
      var b = $_Writer.qf(a);
      if (255 < b) throw new q(null);
      this.u(b);
      this.qg(a)
    },
    pg: function (a) {
      this.tc(JSON.stringify(a))
    },
    qg: function (a) {
      var b = this.a;
      this.ic(b + $_Writer.qf(a));
      for (var c = a.length, d = 0; d < c;) b += $_Writer.Cn(C.Ai(a, d++), this.m, b);
      this.a = b
    },
    ib: function (a) {
      var b = this.a;
      a >>>= 0;
      this.ic(b + $_Writer.Pm(a));
      this.m.setUint8(b, a | 128);
      128 <= a ? (this.m.setUint8(b + 1, a >> 7 | 128), 16384 <= a ? (this.m.setUint8(b + 2, a >> 14 | 128), 2097152 <= a ? (this.m.setUint8(b + 3, a >> 21 | 128), 268435456 <= a ? (this.m.setUint8(b + 4, a >> 28 & 127), a = 5) : (this.m.setUint8(b + 3, this.m.getUint8(b + 3) & 127), a = 4)) : (this.m.setUint8(b + 2, this.m.getUint8(b + 2) & 127), a = 3)) : (this.m.setUint8(b + 1, this.m.getUint8(b + 1) & 127), a = 2)) : (this.m.setUint8(b, this.m.getUint8(b) & 127), a = 1);
      this.a += a
    },
    g: $_Writer
  };
  $_Action.b = true;
  $_Action.Ta = function (a) {
    null == a.Ma && (a.Ma = true);
    null == a.Na && (a.Na = true);
    return a
  };
  $_Action.Ua = function (a) {
    a.ym = $_Action.af;
    if (null == a.La) throw new q("Class doesn't have a config");
    a.prototype.bf = a.La;
    $_Action.$l.set($_Action.af, a);
    $_Action.af++
  };
  $_Action.Ki = function (a, b) {
    var c = (null == a ? null : t.Xl(a)).ym;
    if (null == c) throw new q("Tried to pack unregistered action");
    b.u(c);
    a.Ca(b)
  };
  /** @param {$_Reader} a */
  $_Action.Gg = function (a) {
    var b = a.G(),
      b = Object.create($_Action.$l.get(b).prototype);
    b.ia = 0;
    b.kb = 0;
    b.Ea(a);
    return b
  };
  $_Action.prototype = {
    hm: function () {
      return true
    },
    /** @param {$_GameState} a */
    apply: function (a) {
      throw new q("missing implementation");
    },
    Ea: function () {
      throw new q("missing implementation");
    },
    Ca: function () {
      throw new q("missing implementation");
    },
    g: $_Action
  };
  /** @type {$_Action} */
  $_Action.$__interface__ = null;
  Ia.b = true;
  /** @param {Array} a */
  /** @param {Array} b */
  /** @param {Array} c */
  Ia.Dr = function (a, b, c) {
    if (0 == a.length)
      for (a = 0; a < b.length;) c.push(b[a++]);
    else if (0 == b.length)
      for (b = 0; b < a.length;) c.push(a[b++]);
    else
      for (var d = 0, e = a.length, f = 0, g = b.length;;) {
        var n = a[d],
          k = b[f];
        if (n.kb <= k.kb) {
          if (c.push(n), ++d, d >= e) {
            for (; f < g;) c.push(b[f++]);
            break
          }
        } else if (c.push(k), ++f, f >= g) {
          for (; d < e;) c.push(a[d++]);
          break
        }
      }
  };
  Ia.prototype = {
    am: function (a) {
      for (var b = 0, c = a.kb, d = a.ia,
          e = 0, f = this.list; e < f.length;) {
        var g = f[e];
        ++e;
        var n = g.kb;
        if (n > c) break;
        if (n == c) {
          g = g.ia;
          if (g > d) break;
          g == d && ++d
        }++b
      }
      a.ia = d;
      this.list.splice(b, 0, a)
    },
    Mr: function (a) {
      for (var b = 0, c = 0, d = this.list; c < d.length && !(d[c++].kb >= a);) ++b;
      this.list.splice(0, b)
    },
    lr: function (a, b) {
      for (var c = this.list; 0 < c.length;) c.pop();
      Ia.Dr(a.list, b.list, this.list)
    },
    Nr: function (a) {
      for (var b = 0, c = this.list, d = 0, e = c.length; d < e;) {
        var f = c[d++];
        f.de != a && (c[b] = f, ++b)
      }
      for (; c.length > b;) c.pop()
    },
    mr: function (a) {
      for (var b = 0, c = 0, d = this.list; c < d.length &&
        !(d[c++].kb >= a);) ++b;
      return b
    },
    g: Ia
  };
  $_BaseGameController.b = true;
  $_BaseGameController.prototype = {
    g: $_BaseGameController
  };
  /** @type {$_BaseGameController} */
  $_BaseGameController.$__interface__ = null;
  $_CheckStateHashAction.b = true;
  $_CheckStateHashAction.ua = $_Action;
  $_CheckStateHashAction.prototype = {
    ...$_Action.$__interface__,
    /** @param {$_GameState} a */
    apply: function (a) {
      a.cn(this.tg)
    },
    Ca: function (a) {
      a.ib(this.tg.byteLength);
      a.og(this.tg)
    },
    /** @param {$_Reader} a */
    Ea: function (a) {
      this.tg = a.Rh(a.yb())
    },
    g: $_CheckStateHashAction
  };
  $__inherit__($_CheckStateHashAction, $_Action);
  Yb.b = true;
  Yb.prototype = {
    g: Yb
  };
  sb.b = true;
  xa.b = true;
  $_BaseNetGameController.b = true;
  $_BaseNetGameController.ua = $_BaseGameController;
  $_BaseNetGameController.prototype = {
    ...$_BaseGameController.$__interface__,
    g: $_BaseNetGameController
  };
  $__inherit__($_BaseNetGameController, $_BaseGameController);
  /** @type {$_BaseNetGameController} */
  $_BaseNetGameController.$__interface__ = null;
  $_ReplayController.b = true;
  $_ReplayController.ua = $_BaseNetGameController;
  $_ReplayController.prototype = {
    ...$_BaseNetGameController.$__interface__,
    /** @param {$_Reader} a */
    Np: function (a) {
      for (var b = a.xb(), c = 0, d = 0; d < b;) {
        ++d;
        var c = c + a.yb(),
          e = a.G();
        this.kk.push({
          Li: c / this.Te,
          kind: e
        })
      }
    },
    /** @desc this.Kf = next action */
    Rk: function () {
      var a = this.Cc;
      0 < a.m.byteLength - a.a ? (a = this.Cc.yb(), this.Lf += a, a = this.Cc.xb(), this.Kf = $_Action.Gg(this.Cc), this.Kf.oa = a) : this.Kf = null
    },
    v: function (dt=0) { // EDIT
      var a = 0, // EDIT
        b = dt; // EDIT
      this.yh = a;
      0 < this.td ? (this.Lb += 1E4, this.Lb > this.td && (this.Lb = this.td, this.td = -1)) : this.Lb += b * this.Fk;
      a = this.Te * this.Mg;
      this.Lb > a && (this.Lb = a);
      b = this.Lb * this.vc;
      a = b | 0;
      for (this.Lj = b - a; this.S < a;) {
        for (; null != this.Kf && this.Lf == this.S;) {
          b = this.Kf;
          b.apply(this.L);
          null != this.Xb && this.Xb(b)
          this.Rk();
        }
        this.S++;
        this.L.v(1)
        this.onTick && this.onTick();
      }
    },
    /** @param {number} a */
    pq: function (a) {
      this.td = a;
      a < this.Lb && this.Yh()
    },
    Yh: function () {
      this.Lf = 0;
      this.Lb = this.S = this.Cc.a = 0;
      this.L.ea(this.Cc);
      this.Rk()
    },
    g: $_ReplayController
  };
  $__inherit__($_ReplayController, $_BaseNetGameController);
  $_Point.b = true;
  $_Point.prototype = {
    g: $_Point
  };
  y.b = true;
  /** @param {() => void} a */
  y.i = function (a) {
    null != a && a()
  };
  x.b = true;
  /** @param {(x1: T1) => void} a */
  /** @param {T1} b */
  /** @template T1 */
  x.i = function (a, b) {
    null != a && a(b)
  };
  ia.b = true;
  /** @param {(x1: T1, x2: T2) => void} a */
  /** @param {T1} b */
  /** @param {T2} c */
  /** @template T1, T2 */
  ia.i = function (a, b, c) {
    null != a && a(b, c)
  };
  wb.b = true;
  /** @param {(x1: T1, x2: T2, x3: T3) => void} a */
  /** @param {T1} b */
  /** @param {T2} c */
  /** @param {T3} d */
  /** @template T1, T2, T3 */
  wb.i = function (a, b, c, d) {
    null != a && a(b, c, d)
  };
  Tb.b = true;
  /** @param {(x1: T1, x2: T2, x3: T3, x4: T4) => void} a */
  /** @param {T1} b */
  /** @param {T2} c */
  /** @param {T3} d */
  /** @param {T4} e */
  /** @template T1, T2, T3, T4 */
  Tb.i = function (a, b, c, d, e) {
    null != a && a(b, c, d, e)
  };
  nb.b = true;
  nb.prototype = {
    jj: function () {
      this.o = aa.vd(this.o, 40);
      this.lb = aa.vd(this.lb, 3)
    },
    aa: function (a) {
      this.jj();
      a.Ka = true;
      a.sc(this.Uc);
      a.Rl(this.o);
      a.Rl(this.lb);
      a.Ql(this.lc);
      a.Ql(this.mc);
      a.u(this.ob ? 1 : 0);
      a.u(this.Md);
      a.u(this.D);
      a.Ka = false
    },
    ea: function (a) {
      a.Ka = true;
      this.Uc = a.xb();
      this.o = a.Sk();
      this.lb = a.Sk();
      this.lc = a.Zf();
      this.mc = a.Zf();
      this.ob = 0 != a.G();
      this.Md = a.G();
      this.D = a.G();
      a.Ka = false;
      if (30 < this.D || 30 < this.Md) throw new q(null);
      this.jj()
    },
    g: nb
  };
  ua.b = true;
  ua.prototype = {
    aa: function (a) {
      var b = this.a;
      a.w(b.x);
      a.w(b.y);
      b = this.M;
      a.w(b.x);
      a.w(b.y);
      a.w(this.la);
      a.w(this.l);
      a.w(this.pa);
      a.w(this.Ba);
      a.rb(this.X);
      a.Z(this.h);
      a.Z(this.B)
    },
    ea: function (a) {
      var b = this.a;
      b.x = a.A();
      b.y = a.A();
      b = this.M;
      b.x = a.A();
      b.y = a.A();
      this.la = a.A();
      this.l = a.A();
      this.pa = a.A();
      this.Ba = a.A();
      this.X = a.$a();
      this.h = a.W();
      this.B = a.W()
    },
    zo: function () {
      var a = new $_DiscF;
      this.Tj(a);
      return a
    },
    Tj: function (a) {
      var b = a.a,
        c = this.a;
      b.x = c.x;
      b.y = c.y;
      b = a.M;
      c = this.M;
      b.x = c.x;
      b.y = c.y;
      a.la = this.la;
      a.l = this.l;
      a.pa = this.pa;
      a.Ba = this.Ba;
      a.X = this.X;
      a.h = this.h;
      a.B = this.B
    },
    g: ua
  };
  ta.b = true;
  ta.je = [sb];
  ta.cd = function (a, b) {
    a.Pa = b.Pa.jc();
    a.fb = b.fb;
    a.xa = b.xa;
    a.wa = b.wa.jc();
    a.ec = b.ec;
    a.pc = b.pc;
    a.zb = b.zb;
    a.Kb = b.Kb;
    a.Cb = b.Cb;
    a.Ac = b.Ac;
    a.Ga = b.Ga;
    a.U = b.U;
    a.Jd = b.Jd;
    var c = a.kd,
      d = b.kd;
    c.x = d.x;
    c.y = d.y
  };
  ta.prototype = {
    fo: function (a) {
      this.Pa = a;
      this.yo();
      this.fb = a.fb;
      this.xa = a.xa;
      this.U = a.U;
      this.wa.C = this.U.C;
      this.wa.ha = this.U.ha;
      this.wa.O = this.U.O;
      a = 0;
      for (var b = this.U.K; a < b.length;) this.wa.K.push(b[a++].zo());
      this.Yj()
    },
    yo: function () {
      var a = new $_DiscF;
      this.ec = this.wa.K.length;
      this.wa.K.push(a)
    },
    Uj: function (a) {
      if (a.$ == p.Fa) a.F = null;
      else {
        a.mb = 0;
        var b = a.F;
        null == b && (b = new $_DiscF, a.F = b, this.wa.K.push(b));
        var c = this.U.Rd;
        b.X = 0;
        b.la = 15;
        b.pa = c.pa;
        b.Ba = c.Ba;
        b.l = c.l;
        b.h = 39;
        b.B = a.$.B;
        b.a.x = a.$.dh * this.U.Sb;
        b.a.y = 0;
        a = b.M;
        a.x = 0;
        a.y = 0
      }
    },
    v: function (a) {
      if (0 < this.Ga) 120 >
        this.Ga && this.Ga--;
      else {
        var b = this.Pa.Yr;
        null != b && b();
        for (var c = this.Pa.D, b = this.wa.K[this.ec], d = 0; d < c.length;) {
          var e = c[d];
          ++d;
          if (null != e.F) {
            var f = b.a,
              g = e.F.a,
              n = f.x - g.x,
              g = f.y - g.y,
              k = Math.sqrt(n * n + g * g) - b.la - e.F.la;
            0 == (e.mb & 16) && (e.bc = false);
            f = this.U.Rd;
            if (e.bc && 4 > k) {
              if (0 != f.Kd) {
                var k = Math.sqrt(n * n + g * g),
                  h = f.Kd,
                  l = b.M,
                  m = b.M,
                  q = b.pa;
                l.x = m.x + n / k * h * q;
                l.y = m.y + g / k * h * q;
                null != this.Pa.Oh && this.Pa.Oh(e)
              }
              e.bc = false
            }
            k = e.mb;
            g = n = 0;
            0 != (k & 1) && --g;
            0 != (k & 2) && ++g;
            0 != (k & 4) && --n;
            0 != (k & 8) && ++n;
            0 != n && 0 != g && (k = Math.sqrt(n * n + g * g), n /= k, g /= k);
            k = e.F.M;
            h = e.bc ? f.Be : f.me;
            k.x += n * h;
            k.y += g * h;
            e.F.Ba = e.bc ? f.Ce : f.Ba
          }
        }
        this.wa.v(a);
        if (0 == this.zb) {
          for (a = 0; a < c.length;) d = c[a], ++a, null != d.F && (d.F.h = 39 | this.Jd.mo);
          c = b.M;
          0 < c.x * c.x + c.y * c.y && (this.zb = 1, c = this.kd, b = b.a, c.x = b.x, c.y = b.y)
        } else if (1 == this.zb) {
          this.Ac += .016666666666666666;
          for (a = 0; a < c.length;) d = c[a], ++a, null != d.F && (d.F.h = 39);
          c = this.U.Vm(b.a, this.kd);
          c != p.Fa ? (this.zb = 2, this.pc = 150, this.Jd = c, c == p.ba ? this.Cb++ : this.Kb++, null != this.Pa.oi && this.Pa.oi(c.Tf), null != this.Pa.bl && this.Pa.bl(c.P)) :
            0 < this.xa && this.Ac >= 60 * this.xa && this.Kb != this.Cb && (null != this.Pa.ri && this.Pa.ri(), this.Cl());
          c = this.kd;
          b = b.a;
          c.x = b.x;
          c.y = b.y
        } else if (2 == this.zb) this.pc--, 0 >= this.pc && (0 < this.fb && (this.Kb >= this.fb || this.Cb >= this.fb) || 0 < this.xa && this.Ac >= 60 * this.xa && this.Kb != this.Cb ? this.Cl() : (this.Yj(), null != this.Pa.tp && this.Pa.tp()));
        else if (3 == this.zb && (this.pc--, 0 >= this.pc && (b = this.Pa, null != b.H))) {
          b.H = null;
          c = 0;
          for (a = b.D; c < a.length;) d = a[c], ++c, d.F = null, d.Bb = 0;
          null != b.Ze && b.Ze(null)
        }
      }
    },
    Cl: function () {
      this.pc = 300;
      this.zb = 3;
      null != this.Pa.pi && this.Pa.pi(this.Kb > this.Cb ? p.ba : p.ta)
    },
    Yj: function () {
      var a = this.Pa.D;
      this.zb = 0;
      this.U.oe.Tj(this.wa.K[this.ec]);
      for (var b = [0, 0, 0], c = 0; c < a.length;) {
        var d = a[c];
        ++c;
        this.Uj(d);
        var e = d.$;
        if (e != p.Fa) {
          var f = d.F.a,
            g = b[e.P],
            n = g + 1 >> 1;
          0 == (g & 1) && (n = -n);
          f.x = this.U.ac * e.dh;
          f.y = 55 * n;
          b[e.P]++;
          d.Bb = b[e.P]
        }
      }
    },
    aa: function (a) {
      this.wa.aa(a);
      a.Z(this.ec);
      a.Z(this.pc);
      a.Z(this.zb);
      var b = this.kd;
      a.w(b.x);
      a.w(b.y);
      a.Z(this.Kb);
      a.Z(this.Cb);
      a.w(this.Ac);
      a.Z(this.Ga);
      a.u(this.Jd.P)
    },
    /** @param {$_Reader} a */
    ea: function (a, b) {
      this.wa.ea(a);
      this.ec = a.W();
      this.pc = a.W();
      this.zb = a.W();
      var c = this.kd;
      c.x = a.A();
      c.y = a.A();
      this.Kb = a.W();
      this.Cb = a.W();
      this.Ac = a.A();
      this.Ga = a.W();
      c = a.Re();
      this.Jd = 1 == c ? p.ba : 2 == c ? p.ta : p.Fa;
      this.Pa = b;
      this.fb = b.fb;
      this.xa = b.xa;
      this.U = b.U;
      this.wa.C = this.U.C;
      this.wa.O = this.U.O;
      this.wa.ha = this.U.ha
    },
    g: ta
  };
  mb.b = true;
  mb.prototype = {
    aa: function (a) {
      var b = this.R;
      a.w(b.x);
      a.w(b.y);
      b = this.V;
      a.w(b.x);
      a.w(b.y);
      a.u(this.Yd.P)
    },
    ea: function (a) {
      var b = this.R;
      b.x = a.A();
      b.y = a.A();
      b = this.V;
      b.x = a.A();
      b.y = a.A();
      a = a.Re();
      this.Yd = 1 == a ? p.ba : 2 == a ? p.ta : p.Fa
    },
    g: mb
  };
  $_PlayerPhysics.b = true;
  $_PlayerPhysics.prototype = {
    aa: function (a) {
      a.w(this.l);
      a.w(this.pa);
      a.w(this.Ba);
      a.w(this.me);
      a.w(this.Be);
      a.w(this.Ce);
      a.w(this.Kd)
    },
    ea: function (a) {
      this.l = a.A();
      this.pa = a.A();
      this.Ba = a.A();
      this.me = a.A();
      this.Be = a.A();
      this.Ce = a.A();
      this.Kd = a.A()
    },
    g: $_PlayerPhysics
  };
  $_Stadium.b = true;
  /** @param {$_Reader} a */
  $_Stadium.ea = function (a) {
    var b = a.G();
    return 255 == b ? (b = new $_Stadium, b.Uq(a), b) : $_Stadium.lh()[b]
  };
  $_Stadium.lh = function () {
    if (null == $_Stadium.ub) {
      $_Stadium.ub = [];
      var a = new $_Stadium;
      a.Pc("Classic", 420, 200, 370, 170, 64, 75);
      $_Stadium.ub.push(a);
      a = new $_Stadium;
      a.Pc("Easy", 420, 200, 370, 170, 90, 75);
      $_Stadium.ub.push(a);
      a = new $_Stadium;
      a.Pc("Small", 420, 200, 320, 130, 55, 70);
      $_Stadium.ub.push(a);
      a = new $_Stadium;
      a.Pc("Big", 600, 270, 550, 240, 80, 80);
      $_Stadium.ub.push(a);
      a = new $_Stadium;
      a.Pc("Rounded", 420, 200, 370, 170, 64, 75, 75);
      $_Stadium.ub.push(a);
      a = new $_Stadium;
      a.fk("Hockey", 420, 204, 398, 182, 68, 120, 75, 100);
      $_Stadium.ub.push(a);
      a = new $_Stadium;
      a.fk("Big Hockey", 600, 270, 550, 240, 90, 160, 75, 150);
      $_Stadium.ub.push(a);
      a = new $_Stadium;
      a.Pc("Big Easy", 600, 270, 550, 240, 95, 80);
      $_Stadium.ub.push(a);
      a = new $_Stadium;
      a.Pc("Big Rounded", 600, 270, 550, 240, 80, 75, 100);
      $_Stadium.ub.push(a);
      a = new $_Stadium;
      a.Pc("Huge", 750, 350, 700, 320, 100, 80);
      $_Stadium.ub.push(a);
      for (var a = 0, b = $_Stadium.ub.length; a < b;) {
        var c = a++;
        $_Stadium.ub[c].bh = c
      }
    }
    return $_Stadium.ub
  };
  $_Stadium.Gm = function (a, b) {
    if (null != a.trait) {
      var c = b[t.N(a.trait, String)];
      if (null != c)
        for (var d = 0, e = $b.Wl(c); d < e.length;) {
          var f = e[d];
          ++d;
          null == a[f] && (a[f] = c[f])
        }
    }
  };
  $_Stadium.Nm = function (a) {
    if (-1 == a) return ["all"];
    var b = [];
    0 != (a & 2) && b.push("red");
    0 != (a & 4) && b.push("blue");
    0 != (a & 1) && b.push("ball");
    0 != (a & 8) && b.push("redKO");
    0 != (a &
      16) && b.push("blueKO");
    0 != (a & 32) && b.push("wall");
    return b
  };
  $_Stadium.Oc = function (a) {
    a = t.N(a, Array);
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
  $_Stadium.Sc = function (a, b, c, d) {
    c != d && (a[b] = $_Stadium.Nm(c))
  };
  $_Stadium.wk = function (a, b, c) {
    b != c && (a.color = $_Stadium.bn(b))
  };
  $_Stadium.bn = function (a) {
    return H.xg(a)
  };
  $_Stadium.zh = function (a) {
    if ("string" == typeof a) return L.parseInt("0x" + L.ie(a));
    if (a instanceof Array && null == a.sb) return ((a[0] | 0) << 16) + ((a[1] | 0) << 8) + (a[2] | 0);
    throw new q("Bad color");
  };
  $_Stadium.cr = function (a) {
    var b = {
      x: a.a.x,
      y: a.a.y
    };
    $_Stadium.qa(b, "bCoef", a.l, 1);
    $_Stadium.Sc(b, "cMask", a.h, -1);
    $_Stadium.Sc(b, "cGroup", a.B, 32);
    return b
  };
  $_Stadium.vo = function (a) {
    var b = new $_Vertex;
    b.a.x = t.N(a.x, B);
    b.a.y = t.N(a.y, B);
    var c = a.bCoef;
    null != c && (b.l = t.N(c, B));
    c = a.cMask;
    null != c && (b.h = $_Stadium.Oc(c));
    a = a.cGroup;
    null != a && (b.B = $_Stadium.Oc(a));
    return b
  };
  $_Stadium.qq = function (a, b) {
    var c = {
      v0: a.R.gd,
      v1: a.V.gd
    };
    $_Stadium.qa(c, "bias", a.xc, b.xc);
    $_Stadium.qa(c, "bCoef", a.l, b.l);
    var d = a.Kn();
    $_Stadium.qa(c,
      "curve", d, 0);
    0 != d && (c.curveF = a.tb);
    $_Stadium.qa(c, "vis", a.Wa, b.Wa);
    $_Stadium.Sc(c, "cMask", a.h, b.h);
    $_Stadium.Sc(c, "cGroup", a.B, b.B);
    $_Stadium.wk(c, a.X, b.X);
    return c
  };
  $_Stadium.uo = function (a, b) {
    var c = new $_Segment,
      d = t.N(a.v1, ic);
    c.R = b[t.N(a.v0, ic)];
    c.V = b[d];
    var d = a.bias,
      e = a.bCoef,
      f = a.curve,
      g = a.curveF,
      n = a.vis,
      k = a.cMask,
      l = a.cGroup,
      m = a.color;
    null != d && (c.xc = t.N(d, B));
    null != e && (c.l = t.N(e, B));
    null != g ? c.tb = t.N(g, B) : null != f && c.Fc(t.N(f, B));
    null != n && (c.Wa = t.N(n, jc));
    null != k && (c.h = $_Stadium.Oc(k));
    null != l && (c.B = $_Stadium.Oc(l));
    null != m && (c.X = $_Stadium.zh(m));
    return c
  };
  $_Stadium.op = function (a) {
    var b = {
      normal: [a.sa.x, a.sa.y],
      dist: a.Oa
    };
    $_Stadium.qa(b, "bCoef", a.l, 1);
    $_Stadium.Sc(b, "cMask", a.h, -1);
    $_Stadium.Sc(b, "cGroup", a.B, 32);
    return b
  };
  $_Stadium.so = function (a) {
    var b = new $_Plane,
      c = t.N(a.normal, Array),
      d = t.N(c[0], B),
      c = t.N(c[1], B),
      e = b.sa,
      f = Math.sqrt(d * d + c * c);
    e.x = d / f;
    e.y = c / f;
    b.Oa = t.N(a.dist, B);
    d = a.bCoef;
    c = a.cMask;
    a = a.cGroup;
    null != d && (b.l = t.N(d, B));
    null != c && (b.h = $_Stadium.Oc(c));
    null != a && (b.B = $_Stadium.Oc(a));
    return b
  };
  $_Stadium.Rn = function (a) {
    return {
      p0: [a.R.x, a.R.y],
      p1: [a.V.x, a.V.y],
      team: a.Yd == p.ba ? "red" : "blue"
    }
  };
  $_Stadium.ro = function (a) {
    var b = new mb,
      c = t.N(a.p0, Array),
      d = t.N(a.p1, Array),
      e = b.R;
    e.x = c[0];
    e.y = c[1];
    c = b.V;
    c.x = d[0];
    c.y = d[1];
    switch (a.team) {
      case "blue":
        a = p.ta;
        break;
      case "red":
        a = p.ba;
        break;
      default:
        throw new q("Bad team value");
    }
    b.Yd = a;
    return b
  };
  $_Stadium.rp = function (a) {
    var b = {};
    $_Stadium.qa(b, "bCoef", a.l, .5);
    $_Stadium.qa(b, "invMass", a.pa, .5);
    $_Stadium.qa(b, "damping", a.Ba, .96);
    $_Stadium.qa(b, "acceleration", a.me, .1);
    $_Stadium.qa(b, "kickingAcceleration", a.Be, .07);
    $_Stadium.qa(b, "kickingDamping", a.Ce, .96);
    $_Stadium.qa(b, "kickStrength", a.Kd, 5);
    return b
  };
  $_Stadium.to = function (a) {
    var b = new $_PlayerPhysics,
      c = a.bCoef,
      d = a.invMass,
      e = a.damping,
      f = a.acceleration,
      g = a.kickingAcceleration,
      n = a.kickingDamping;
    a = a.kickStrength;
    null != c && (b.l = t.N(c, B));
    null != d && (b.pa = t.N(d, B));
    null != e && (b.Ba = t.N(e, B));
    null != f && (b.me = t.N(f, B));
    null != g && (b.Be = t.N(g, B));
    null != n && (b.Ce = t.N(n, B));
    null != a && (b.Kd = t.N(a, B));
    return b
  };
  $_Stadium.xj = function (a, b) {
    var c = {};
    if (a.a.x != b.a.x || a.a.y != b.a.y) c.pos = [a.a.x, a.a.y];
    if (a.M.x != b.M.x || a.M.y != b.M.y) c.speed = [a.M.x, a.M.y];
    $_Stadium.qa(c, "radius", a.la, b.la);
    $_Stadium.qa(c, "bCoef", a.l, b.l);
    $_Stadium.qa(c, "invMass", a.pa, b.pa);
    $_Stadium.qa(c, "damping", a.Ba, b.Ba);
    $_Stadium.wk(c, a.X, b.X);
    $_Stadium.Sc(c,
      "cMask", a.h, b.h);
    $_Stadium.Sc(c, "cGroup", a.B, b.B);
    return c
  };
  $_Stadium.ck = function (a, b) {
    var c = a.pos,
      d = a.speed,
      e = a.radius,
      f = a.bCoef,
      g = a.invMass,
      n = a.damping,
      k = a.color,
      l = a.cMask,
      m = a.cGroup;
    if (null != c) {
      var p = b.a;
      p.x = c[0];
      p.y = c[1]
    }
    null != d && (c = b.M, c.x = d[0], c.y = d[1]);
    null != e && (b.la = t.N(e, B));
    null != f && (b.l = t.N(f, B));
    null != g && (b.pa = t.N(g, B));
    null != n && (b.Ba = t.N(n, B));
    null != k && (b.X = $_Stadium.zh(k));
    null != l && (b.h = $_Stadium.Oc(l));
    null != m && (b.B = $_Stadium.Oc(m));
    return b
  };
  $_Stadium.qa = function (a, b, c, d) {
    c != d && (a[b] = c)
  };
  $_Stadium.prototype = {
    Dh: function () {
      var a = new ua;
      a.X = 16777215;
      a.h = -1;
      a.B = 1;
      a.la = 10;
      a.Ba = .99;
      a.pa = 1;
      a.l = .5;
      return a
    },
    /** @param {$_Writer} a */
    aa: function (a) {
      a.u(this.bh);
      if (!this.ze()) {
        a.Qb(this.o);
        a.Z(this.Zc);
        a.w(this.Ed);
        a.w(this.Dd);
        a.w(this.Yc);
        a.w(this.Ic);
        a.w(this.pe);
        a.Z(this.fc);
        a.w(this.Sb);
        a.w(this.hc);
        a.w(this.ac);
        this.Rd.aa(a);
        this.oe.aa(a);
        a.sc(this.Fe);
        a.u(this.qe);
        a.u(this.C.length);
        for (var b = 0, c = this.C.length; b < c;) {
          var d = b++,
            e = this.C[d];
          e.gd = d;
          e.aa(a)
        }
        a.u(this.O.length);
        b = 0;
        for (c = this.O; b < c.length;) c[b++].aa(a);
        a.u(this.ha.length);
        b = 0;
        for (c = this.ha; b < c.length;) c[b++].aa(a);
        a.u(this.kc.length);
        b = 0;
        for (c = this.kc; b < c.length;) c[b++].aa(a);
        a.u(this.K.length);
        b = 0;
        for (c = this.K; b < c.length;) c[b++].aa(a)
      }
    },
    Uq: function (a) {
      this.o = a.Jb();
      this.Zc = a.W();
      this.Ed = a.A();
      this.Dd = a.A();
      this.Yc = a.A();
      this.Ic = a.A();
      this.pe = a.A();
      this.fc = a.W();
      this.Sb = a.A();
      this.hc = a.A();
      this.ac = a.A();
      this.Rd.ea(a);
      this.oe.ea(a);
      this.Fe = a.xb();
      this.qe = a.G();
      this.rf = 704643072 != (this.fc & -16777216);
      this.C = [];
      for (var b = a.G(), c = 0; c < b;) {
        var d = new $_Vertex;
        d.ea(a);
        d.gd = c++;
        this.C.push(d)
      }
      this.O = [];
      b = a.G();
      for (c = 0; c < b;) ++c,
        d = new $_Segment, d.ea(a, this.C), this.O.push(d);
      this.ha = [];
      b = a.G();
      for (c = 0; c < b;) ++c, d = new $_Plane, d.ea(a), this.ha.push(d);
      this.kc = [];
      b = a.G();
      for (c = 0; c < b;) ++c, d = new mb, d.ea(a), this.kc.push(d);
      this.K = [];
      b = a.G();
      for (c = 0; c < b;) ++c, d = new ua, d.ea(a), this.K.push(d);
      this.Sd()
    },
    Sd: function () {
      for (var a = 0, b = this.O; a < b.length;) b[a++].Sd()
    },
    ze: function () {
      return 255 != this.bh
    },
    Ld: function (a, b, c) {
      a = a[b];
      return null != a ? t.N(a, B) : c
    },
    wo: function (a, b, c) {
      a = a[b];
      return null != a ? t.N(a, jc) : c
    },
    ae: function () {
      return JSON.stringify(this.Rq())
    },
    Rq: function () {
      if (!this.rf) throw new q(0);
      for (var a = {}, b = 0, c = [], d = 0, e = this.C; d < e.length;) {
        var f = e[d];
        ++d;
        f.gd = b++;
        c.push($_Stadium.cr(f))
      }
      d = new $_Segment;
      b = [];
      e = 0;
      for (f = this.O; e < f.length;) b.push($_Stadium.qq(f[e++], d));
      d = [];
      e = 0;
      for (f = this.ha; e < f.length;) d.push($_Stadium.op(f[e++]));
      for (var e = [], f = 0, g = this.kc; f < g.length;) e.push($_Stadium.Rn(g[f++]));
      for (var f = $_Stadium.rp(this.Rd), n = new ua, g = [], k = 0, l = this.K; k < l.length;) g.push($_Stadium.xj(l[k++], n));
      n = $_Stadium.xj(this.oe, this.Dh());
      c = {
        name: this.o,
        width: this.Sb,
        height: this.hc,
        bg: a,
        vertexes: c,
        segments: b,
        planes: d,
        goals: e,
        discs: g,
        playerPhysics: f,
        ballPhysics: n
      };
      $_Stadium.qa(c, "maxViewWidth", this.Fe, 0);
      $_Stadium.qa(c, "cameraFollow", 1 == this.qe ? "player" : "", "");
      $_Stadium.qa(c, "spawnDistance", this.ac, 200);
      switch (this.Zc) {
        case 1:
          b = "grass";
          break;
        case 2:
          b = "hockey";
          break;
        default:
          b = "none"
      }
      $_Stadium.qa(a, "type", b, "none");
      $_Stadium.qa(a, "width", this.Ed, 0);
      $_Stadium.qa(a, "height", this.Dd, 0);
      $_Stadium.qa(a, "kickOffRadius", this.Yc, 0);
      $_Stadium.qa(a, "cornerRadius", this.Ic, 0);
      $_Stadium.qa(a, "color", this.fc, 7441498);
      $_Stadium.qa(a, "goalLine", this.pe, 0);
      return c
    },
    bk: function (a) {
      function b(a, b, c) {
        var e = t.N(d[b],
          Array);
        if (null != e)
          for (var g = 0; g < e.length;) {
            var k = e[g];
            ++g;
            try {
              $_Stadium.Gm(k, f), a.push(c(k))
            } catch (U) {
              throw new q(new vb('Error in "' + b + '" index: ' + a.length));
            }
          }
      }
      var c = this,
        d = JSON5.parse(a);
      this.C = [];
      this.O = [];
      this.ha = [];
      this.kc = [];
      this.K = [];
      this.o = t.N(d.name, String);
      this.Sb = t.N(d.width, B);
      this.hc = t.N(d.height, B);
      this.Fe = this.Ld(d, "maxViewWidth", 0) | 0;
      "player" == d.cameraFollow && (this.qe = 1);
      this.ac = 200;
      a = d.spawnDistance;
      null != a && (this.ac = t.N(a, B));
      a = d.bg;
      var e;
      switch (a.type) {
        case "grass":
          e = 1;
          break;
        case "hockey":
          e = 2;
          break;
        default:
          e = 0
      }
      this.Zc = e;
      this.Ed = this.Ld(a, "width", 0);
      this.Dd = this.Ld(a, "height", 0);
      this.Yc = this.Ld(a, "kickOffRadius", 0);
      this.Ic = this.Ld(a, "cornerRadius", 0);
      this.fc = 7441498;
      null != a.color && (this.fc = $_Stadium.zh(a.color));
      this.pe = this.Ld(a, "goalLine", 0);
      this.rf = this.wo(d, "canBeStored", true);
      this.fc = this.fc & 16777215 | (this.rf ? 0 : 42) << 24;
      var f = d.traits;
      b(this.C, "vertexes", $_Stadium.vo);
      b(this.O, "segments", function (a) {
        return $_Stadium.uo(a, c.C)
      });
      b(this.kc, "goals", $_Stadium.ro);
      b(this.K, "discs", function (a) {
        return $_Stadium.ck(a, new ua)
      });
      b(this.ha,
        "planes", $_Stadium.so);
      a = d.playerPhysics;
      null != a && (this.Rd = $_Stadium.to(a));
      a = d.ballPhysics;
      null != a && (this.oe = $_Stadium.ck(a, this.Dh()));
      if (255 < this.C.length || 255 < this.O.length || 255 < this.ha.length || 255 < this.kc.length || 255 < this.K.length) throw new q("Error");
      this.Sd()
    },
    lj: function () {
      var a = $_Stadium.Pq;
      a.a = 0;
      this.aa(a);
      var b = new Zb;
      b.ir(a.Nb());
      b.hash = (b.hash += b.hash << 3) ^ b.hash >>> 11;
      b.hash += b.hash << 15;
      return b.hash | 0
    },
    Vm: function (a, b) {
      for (var c = 0, d = this.kc; c < d.length;) {
        var e = d[c];
        ++c;
        var f = e.R,
          g = e.V,
          n = b.x - a.x,
          k = b.y - a.y;
        0 < -(f.y - a.y) *
          n + (f.x - a.x) * k == 0 < -(g.y - a.y) * n + (g.x - a.x) * k ? f = false : (n = g.x - f.x, g = g.y - f.y, f = 0 < -(a.y - f.y) * n + (a.x - f.x) * g == 0 < -(b.y - f.y) * n + (b.x - f.x) * g ? false : true);
        if (f) return e.Yd
      }
      return p.Fa
    },
    Pc: function (a, b, c, d, e, f, g, n) {
      null == n && (n = 0);
      this.o = a;
      this.Sb = b;
      this.hc = c;
      this.Zc = 1;
      this.fc = 7441498;
      this.Ed = d;
      this.Dd = e;
      this.Yc = g;
      this.Ic = n;
      this.ac = .75 * d;
      400 < this.ac && (this.ac = 400);
      a = new $_Plane;
      var k = a.sa;
      k.x = 0;
      k.y = 1;
      a.Oa = -c;
      a.l = 0;
      this.ha.push(a);
      a = new $_Plane;
      k = a.sa;
      k.x = 0;
      k.y = -1;
      a.Oa = -c;
      a.l = 0;
      this.ha.push(a);
      a = new $_Plane;
      k = a.sa;
      k.x = 1;
      k.y = 0;
      a.Oa = -b;
      a.l = 0;
      this.ha.push(a);
      a = new $_Plane;
      k = a.sa;
      k.x = -1;
      k.y = 0;
      a.Oa = -b;
      a.l = 0;
      this.ha.push(a);
      this.If(d, 1, f, 13421823, p.ta);
      this.If(-d, -1, f, 16764108, p.ba);
      this.gk(g, c);
      b = new $_Plane;
      c = b.sa;
      c.x = 0;
      c.y = 1;
      b.Oa = -e;
      b.h = 1;
      this.ha.push(b);
      b = new $_Plane;
      c = b.sa;
      c.x = 0;
      c.y = -1;
      b.Oa = -e;
      b.h = 1;
      this.ha.push(b);
      b = new $_Vertex;
      c = b.a;
      c.x = -d;
      c.y = -e;
      b.h = 0;
      c = new $_Vertex;
      g = c.a;
      g.x = d;
      g.y = -e;
      c.h = 0;
      g = new $_Vertex;
      a = g.a;
      a.x = d;
      a.y = -f;
      g.h = 0;
      a = new $_Vertex;
      k = a.a;
      k.x = d;
      k.y = f;
      a.h = 0;
      var k = new $_Vertex,
        h = k.a;
      h.x = d;
      h.y = e;
      k.h = 0;
      var h = new $_Vertex,
        l = h.a;
      l.x = -d;
      l.y = e;
      h.h = 0;
      var l = new $_Vertex,
        m = l.a;
      m.x = -d;
      m.y = f;
      l.h = 0;
      var m = new $_Vertex,
        q = m.a;
      q.x = -d;
      q.y = -f;
      m.h = 0;
      f = new $_Segment;
      f.R = c;
      f.V = g;
      f.h = 1;
      f.Wa = false;
      q = new $_Segment;
      q.R = a;
      q.V = k;
      q.h = 1;
      q.Wa = false;
      var r = new $_Segment;
      r.R = h;
      r.V = l;
      r.h = 1;
      r.Wa = false;
      var t = new $_Segment;
      t.R = m;
      t.V = b;
      t.h = 1;
      t.Wa = false;
      this.C.push(b);
      this.C.push(c);
      this.C.push(g);
      this.C.push(a);
      this.C.push(k);
      this.C.push(h);
      this.C.push(l);
      this.C.push(m);
      this.O.push(f);
      this.O.push(q);
      this.O.push(r);
      this.O.push(t);
      this.ek(d, e, n);
      this.Sd()
    },
    fk: function (a, b, c, d, e, f, g, n, k) {
      this.o = a;
      this.Sb = b;
      this.hc = c;
      this.Zc = 2;
      this.Ed = d;
      this.Dd = e;
      this.Yc = n;
      this.Ic = k;
      this.pe = g;
      this.ac = .75 * (d - g);
      400 < this.ac && (this.ac = 400);
      a = new $_Plane;
      var h = a.sa;
      h.x = 0;
      h.y = 1;
      a.Oa = -c;
      a.l = 0;
      this.ha.push(a);
      a = new $_Plane;
      h = a.sa;
      h.x = 0;
      h.y = -1;
      a.Oa = -c;
      a.l = 0;
      this.ha.push(a);
      a = new $_Plane;
      h = a.sa;
      h.x = 1;
      h.y = 0;
      a.Oa = -b;
      a.l = 0;
      this.ha.push(a);
      a = new $_Plane;
      h = a.sa;
      h.x = -1;
      h.y = 0;
      a.Oa = -b;
      a.l = 0;
      this.ha.push(a);
      this.If(d - g, 1, f, 13421823, p.ta, -1);
      this.If(-d + g, -1, f, 16764108, p.ba, -1);
      this.gk(n, c);
      b = new $_Plane;
      c = b.sa;
      c.x = 0;
      c.y = 1;
      b.Oa = -e;
      b.h = 1;
      this.ha.push(b);
      b = new $_Plane;
      c = b.sa;
      c.x = 0;
      c.y = -1;
      b.Oa = -e;
      b.h = 1;
      this.ha.push(b);
      b = new $_Plane;
      c = b.sa;
      c.x = 1;
      c.y = 0;
      b.Oa = -d;
      b.h = 1;
      this.ha.push(b);
      b = new $_Plane;
      c = b.sa;
      c.x = -1;
      c.y = 0;
      b.Oa = -d;
      b.h = 1;
      this.ha.push(b);
      this.ek(d, e, k);
      this.Sd()
    },
    If: function (a, b, c, d, e, f, g) {
      null == g && (g = 32);
      null == f && (f = 1);
      var n = new $_Vertex,
        k = n.a;
      k.x = a + 8 * b;
      k.y = -c;
      var k = new $_Vertex,
        h = k.a;
      h.x = a + 8 * b;
      h.y = c;
      var l = new $_Vertex,
        h = l.a;
      h.x = n.a.x + 22 * b;
      h.y = n.a.y + 22;
      var m = new $_Vertex,
        h = m.a;
      h.x = k.a.x + 22 * b;
      h.y = k.a.y - 22;
      h = new $_Segment;
      h.R = n;
      h.V = l;
      h.Fc(90 * b);
      var p = new $_Segment;
      p.R = m;
      p.V = l;
      var q = new $_Segment;
      q.R = m;
      q.V = k;
      q.Fc(90 * b);
      b = this.C.length;
      this.C.push(n);
      this.C.push(k);
      this.C.push(l);
      this.C.push(m);
      n = b;
      for (b = this.C.length; n < b;) k = n++, this.C[k].h = f, this.C[k].B = g, this.C[k].l = .1;
      b = this.O.length;
      this.O.push(h);
      this.O.push(p);
      this.O.push(q);
      n = b;
      for (b = this.O.length; n < b;) k = n++, this.O[k].h = f, this.O[k].B = g, this.O[k].l = .1;
      f = new ua;
      g = f.a;
      g.x = a;
      g.y = -c;
      f.pa = 0;
      f.la = 8;
      f.X = d;
      this.K.push(f);
      f = new ua;
      g = f.a;
      g.x = a;
      g.y = c;
      f.pa = 0;
      f.la = 8;
      f.X = d;
      this.K.push(f);
      d = new mb;
      f = d.R;
      f.x = a;
      f.y = -c;
      f = d.V;
      f.x = a;
      f.y = c;
      d.Yd = e;
      this.kc.push(d)
    },
    gk: function (a, b) {
      var c = new $_Vertex,
        d = c.a;
      d.x = 0;
      d.y = -b;
      c.l = .1;
      c.B = 24;
      c.h = 6;
      var d = new $_Vertex,
        e = d.a;
      e.x = 0;
      e.y = -a;
      d.l = .1;
      d.B = 24;
      d.h = 6;
      var e = new $_Vertex,
        f = e.a;
      f.x = 0;
      f.y = a;
      e.l = .1;
      e.B = 24;
      e.h = 6;
      var f = new $_Vertex,
        g = f.a;
      g.x = 0;
      g.y = b;
      f.l = .1;
      f.B = 24;
      f.h = 6;
      g = new $_Segment;
      g.R = c;
      g.V = d;
      g.B = 24;
      g.h = 6;
      g.Wa = false;
      g.l = .1;
      var n = new $_Segment;
      n.R = e;
      n.V = f;
      n.B = 24;
      n.h = 6;
      n.Wa = false;
      n.l = .1;
      var k = new $_Segment;
      k.R = d;
      k.V = e;
      k.B = 8;
      k.h = 6;
      k.Wa = false;
      k.Fc(180);
      k.l = .1;
      var h = new $_Segment;
      h.R = e;
      h.V = d;
      h.B = 16;
      h.h = 6;
      h.Wa = false;
      h.Fc(180);
      h.l = .1;
      this.C.push(c);
      this.C.push(d);
      this.C.push(e);
      this.C.push(f);
      this.O.push(g);
      this.O.push(n);
      this.O.push(k);
      this.O.push(h)
    },
    ek: function (a, b, c) {
      if (!(0 >= c)) {
        var d = new $_Vertex,
          e = d.a;
        e.x = -a + c;
        e.y = -b;
        d.h = 0;
        var e = new $_Vertex,
          f = e.a;
        f.x = -a;
        f.y = -b + c;
        e.h = 0;
        var f = new $_Vertex,
          g = f.a;
        g.x = -a + c;
        g.y = b;
        f.h = 0;
        var g = new $_Vertex,
          h = g.a;
        h.x = -a;
        h.y = b - c;
        g.h = 0;
        var h = new $_Vertex,
          k = h.a;
        k.x = a - c;
        k.y = b;
        h.h = 0;
        var k = new $_Vertex,
          l = k.a;
        l.x = a;
        l.y = b - c;
        k.h = 0;
        var l = new $_Vertex,
          m = l.a;
        m.x = a - c;
        m.y = -b;
        l.h = 0;
        var m = new $_Vertex,
          p = m.a;
        p.x = a;
        p.y = -b + c;
        m.h = 0;
        a = new $_Segment;
        a.R = d;
        a.V = e;
        a.h = 1;
        a.Wa = false;
        a.l = 1;
        a.Fc(-90);
        b = new $_Segment;
        b.R = f;
        b.V = g;
        b.h = 1;
        b.Wa = false;
        b.l = 1;
        b.Fc(90);
        c = new $_Segment;
        c.R = h;
        c.V = k;
        c.h = 1;
        c.Wa = false;
        c.l = 1;
        c.Fc(-90);
        p = new $_Segment;
        p.R = l;
        p.V = m;
        p.h = 1;
        p.Wa = false;
        p.l = 1;
        p.Fc(90);
        this.C.push(d);
        this.C.push(e);
        this.C.push(f);
        this.C.push(g);
        this.C.push(h);
        this.C.push(k);
        this.C.push(l);
        this.C.push(m);
        this.O.push(a);
        this.O.push(b);
        this.O.push(c);
        this.O.push(p)
      }
    },
    g: $_Stadium
  };
  ka.b = true;
  ka.prototype = {
    aa: function (a) {
      a.u(this.Xc);
      a.Z(this.Tc);
      a.u(this.cb.length);
      for (var b = 0, c = this.cb; b < c.length;) a.Z(c[b++])
    },
    /** @param {$_Reader} a */
    ea: function (a) {
      this.Xc = a.G();
      this.Tc = a.W();
      var b = a.G();
      if (3 < b) throw new q("too many");
      this.cb = [];
      for (var c = 0; c < b;) ++c, this.cb.push(a.W())
    },
    g: ka
  };
  p.b = true;
  p.prototype = {
    g: p
  };
  $_GameState.b = true;
  $_GameState.je = [sb, Yb];
  $_GameState.cd = function (a, b) {
    a.$b = b.$b;
    if (null == b.D) a.D = null;
    else {
      null == a.D && (a.D = []);
      for (var c = a.D, d = b.D, e = d.length; c.length > e;) c.pop();
      for (var e = 0, f = d.length; e < f;) {
        var g = e++;
        c[g] = d[g].tr()
      }
    }
    a.H = null == b.H ? null : b.H.jc();
    a.Gc = b.Gc;
    a.fb = b.fb;
    a.xa = b.xa;
    a.U = b.U;
    a.hb = b.hb
  };
  $_GameState.prototype = {
    Iq: function (a) {
      if (null == this.H) {
        this.H = new ta;
        for (var b = 0, c = this.D; b < c.length;) {
          var d = c[b];
          ++b;
          d.F = null;
          d.Bb = 0
        }
        this.H.fo(this);
        null != this.li && this.li(a)
      }
    },
    sf: function (a, b, c) {
      if (b.$ != c) {
        b.$ = c;
        C.remove(this.D, b);
        this.D.push(b);
        if (null != this.H) {
          null != b.F && (C.remove(this.H.wa.K, b.F), b.F = null);
          this.H.Uj(b);
          for (var d = 0, e = false; !e;) {
            ++d;
            for (var e = true, f = 0, g = this.D; f < g.length;) {
              var h = g[f];
              ++f;
              if (h != b && h.$ == b.$ && h.Bb == d) {
                e = false;
                break
              }
            }
          }
          b.Bb = d
        }
        wb.i(this.Nk, a, b, c)
      }
    },
    /** @param {number} a */
    /** @returns {$_Player} */
    ka: function (a) {
      for (var b = 0, c = this.D; b < c.length;) {
        var d = c[b];
        ++b;
        if (d.T == a) return d
      }
      return null
    },
    v: function (a) {
      null != this.H && this.H.v(a)
    },
    /** @param {$_Writer} a */
    aa: function (a) {
      a.Qb(this.$b);
      a.u(this.Gc ? 1 : 0);
      a.Z(this.fb);
      a.Z(this.xa);
      this.U.aa(a);
      a.u(null != this.H ? 1 : 0);
      null != this.H && this.H.aa(a);
      a.u(this.D.length);
      for (var b = 0, c = this.D; b < c.length;) c[b++].Ca(a);
      this.hb[1].aa(a);
      this.hb[2].aa(a)
    },
    /** @param {$_Reader} a */
    ea: function (a) {
      this.$b = a.Jb();
      this.Gc = 0 != a.G();
      this.fb = a.W();
      this.xa = a.W();
      this.U = $_Stadium.ea(a);
      var b = 0 != a.G();
      this.H = null;
      b && (this.H = new ta, this.H.ea(a, this));
      for (var b = null == this.H ? null : this.H.wa.K, c = a.G(), d = this.D; d.length > c;) d.pop();
      for (d = 0; d < c;) {
        var e = new $_Player;
        e.Ea(a, b);
        this.D[d++] = e
      }
      this.hb[1].ea(a);
      this.hb[2].ea(a)
    },
    Nj: function () {
      var a = 0,
        b = $_Writer.ca();
      this.aa(b);
      for (b = b.Qq(); 4 <= b.m.byteLength - b.a;) a ^= b.W();
      return a
    },
    In: function () {
      var a = $_Writer.ca(4);
      a.Z(this.Nj());
      return a.mg()
    },
    /** @param {ArrayBuffer} a */
    cn: function (a) {
      a = (new $_Reader(new DataView(a))).W();
      x.i(this.un, this.Nj() != a)
    },
    sl: function (a) {
      this.bl = a
    },
    g: $_GameState
  };
  $_Player.b = true;
  $_Player.je = [sb];
  /** @param {$_Player} a */
  /** @param {$_Player} b */
  $_Player.kr = function (a, b) {
    a.ra = b.ra;
    a.Bb = b.Bb;
    a.jb = b.jb;
    a.xd = b.xd;
    a.wd = b.wd;
    a.wg = b.wg;
    a.wb = b.wb;
    a.o = b.o;
    a.mb = b.mb;
    a.T = b.T;
    a.bc = b.bc;
    a.F = null == b.F ? null : b.F.jc();
    a.$ = b.$
  };
  $_Player.prototype = {
    Ca: function (a) {
      a.u(this.ra ? 1 : 0);
      a.Z(this.Bb);
      a.Qb(this.jb);
      a.u(this.xd ? 1 : 0);
      a.Qb(this.wd);
      a.Z(this.wg);
      a.Qb(this.o);
      a.Z(this.mb);
      a.ib(this.T);
      a.u(this.bc ? 1 : 0);
      a.u(this.$.P);
      a.dr(null == this.F ? -1 : this.F.zk)
    },
    /** @param {$_Reader} a */
    /** @param {$_DiskF[]} b */
    Ea: function (a, b) {
      this.ra = 0 != a.G();
      this.Bb = a.W();
      this.jb = a.Jb();
      this.xd = 0 != a.G();
      this.wd = a.Jb();
      this.wg = a.W();
      this.o = a.Jb();
      this.mb = a.W();
      this.T = a.yb();
      this.bc = 0 != a.G();
      var c = a.Re();
      this.$ = 1 == c ? p.ba : 2 == c ? p.ta : p.Fa;
      c = a.Mp();
      this.F = 0 > c ? null : b[c]
    },
    g: $_Player
  };
  sa.b = true;
  sa.na = function (a) {
    var b = new sa;
    b.Ag = a;
    return b
  };
  sa.ua = $_Action;
  sa.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      var b = a.ka(this.oa);
      null != b && this.Ag != b.xd && (b.xd = this.Ag, x.i(a.Ik, b))
    },
    Ca: function (a) {
      a.u(this.Ag ? 1 : 0)
    },
    Ea: function (a) {
      this.Ag = 0 != a.G()
    },
    g: sa
  };
  $__inherit__(sa, $_Action);
  Pa.b = true;
  Pa.ua = $_Action;
  Pa.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      var b = a.ka(this.oa);
      if (null != b && b.ra) {
        for (var c = a.D, d = [], e = 0, f = 0, g = 0; g < c.length;) {
          var h = c[g];
          ++g;
          h.$ == p.Fa && d.push(h);
          h.$ == p.ba ? ++e : h.$ == p.ta && ++f
        }
        c = d.length;
        0 != c && (f == e ? 2 > c || (a.sf(b,
          d[0], p.ba), a.sf(b, d[1], p.ta)) : a.sf(b, d[0], f > e ? p.ba : p.ta))
      }
    },
    Ca: function () {},
    Ea: function () {},
    g: Pa
  };
  $__inherit__(Pa, $_Action);
  da.b = true;
  da.na = function (a, b) {
    var c = new da;
    c.Oi = a;
    c.newValue = b;
    return c
  };
  da.ua = $_Action;
  da.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      var b = a.ka(this.oa);
      if (null != b && b.ra && null == a.H) switch (this.Oi) {
        case 0:
          b = this.newValue;
          a.fb = 0 > b ? 0 : 99 < b ? 99 : b;
          break;
        case 1:
          b = this.newValue, a.xa = 0 > b ? 0 : 99 < b ? 99 : b
      }
    },
    Ca: function (a) {
      a.Z(this.Oi);
      a.Z(this.newValue)
    },
    Ea: function (a) {
      this.Oi = a.W();
      this.newValue = a.W()
    },
    g: da
  };
  $__inherit__(da, $_Action);
  ra.b = true;
  ra.na = function (a, b) {
    var c = new ra;
    c.yd = a;
    c.zg = b;
    return c
  };
  ra.ua = $_Action;
  ra.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      var b = a.ka(this.oa);
      if (null != b && b.ra) {
        var c = a.ka(this.yd);
        null != c && 0 != c.T && c.ra != this.zg && (c.ra = this.zg, null != a.Nh && a.Nh(b, c))
      }
    },
    Ca: function (a) {
      a.Z(this.yd);
      a.u(this.zg ? 1 : 0)
    },
    Ea: function (a) {
      this.yd = a.W();
      this.zg = 0 != a.G()
    },
    g: ra
  };
  $__inherit__(ra, $_Action);
  qa.b = true;
  qa.na = function (a) {
    var b = new qa;
    b.fe = a;
    return b
  };
  qa.ua = $_Action;
  qa.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      a = a.ka(this.oa);
      null != a && (a.jb = this.fe)
    },
    Ca: function (a) {
      a.Qb(this.fe)
    },
    Ea: function (a) {
      this.fe = a.Jb();
      null != this.fe && (this.fe = aa.vd(this.fe, 2))
    },
    g: qa
  };
  $__inherit__(qa, $_Action);
  $_ChangeTeamAction.b = true;
  $_ChangeTeamAction.na = function (a, b) {
    var c = new $_ChangeTeamAction;
    c.yd = a;
    c.Ii = b;
    return c
  };
  $_ChangeTeamAction.ua = $_Action;
  $_ChangeTeamAction.prototype = {
    ...$_Action.$__interface__,
    /** @param {$_GameState} a */
    apply: function (a) {
      var b = a.ka(this.oa),
        c = a.ka(this.yd);
      if (null != b && null != c) {
        var d = b.ra;
        (d = d || c == b && !a.Gc && null == a.H) && a.sf(b, c, this.Ii)
      }
    },
    Ca: function (a) {
      a.Z(this.yd);
      a.u(this.Ii.P)
    },
    /** @param {$_Reader} a */
    Ea: function (a) {
      this.yd = a.W();
      a = a.Re();
      this.Ii = 1 == a ? p.ba : 2 == a ? p.ta : p.Fa
    },
    g: $_ChangeTeamAction
  };
  $__inherit__($_ChangeTeamAction, $_Action);
  $_ChangeStadiumAction.b = true;
  $_ChangeStadiumAction.na = function (a) {
    var b = new $_ChangeStadiumAction;
    b.Bd = a;
    return b
  };
  $_ChangeStadiumAction.ua = $_Action;
  $_ChangeStadiumAction.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      var b = a.ka(this.oa);
      null != b && b.ra && null == a.H && (a.U = this.Bd, null != a.ji && a.ji(b, this.Bd))
    },
    Ca: function (a) {
      var b = $_Writer.ca();
      this.Bd.aa(b);
      b = pako.deflateRaw(b.Nb());
      a.sc(b.byteLength);
      a.Pb(b)
    },
    Ea: function (a) {
      a = pako.inflateRaw(a.qb(a.xb()));
      this.Bd = $_Stadium.ea(new $_Reader(new DataView(a.buffer, a.byteOffset, a.byteLength)))
    },
    g: $_ChangeStadiumAction
  };
  $__inherit__($_ChangeStadiumAction, $_Action);
  Oa.b = true;
  Oa.ua = $_Action;
  Oa.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      var b = a.ka(this.oa);
      null != b && b.ra && this.$ != p.Fa && (a.hb[this.$.P] = this.ug)
    },
    Ca: function (a) {
      a.u(this.$.P);
      this.ug.aa(a)
    },
    Ea: function (a) {
      var b = a.Re();
      this.$ = 1 == b ? p.ba : 2 == b ? p.ta : p.Fa;
      this.ug = new ka;
      this.ug.ea(a)
    },
    g: Oa
  };
  $__inherit__(Oa, $_Action);
  $_ChangeTeamsLockAction.b = true;
  $_ChangeTeamsLockAction.na = function (a) {
    var b = new $_ChangeTeamsLockAction;
    b.newValue = a;
    return b
  };
  $_ChangeTeamsLockAction.ua = $_Action;
  $_ChangeTeamsLockAction.prototype = {
    ...$_Action.$__interface__,
    /** @param {$_GameState} a */
    apply: function (a) {
      var b = a.ka(this.oa);
      null != b && b.ra && (a.Gc = this.newValue)
    },
    Ca: function (a) {
      a.u(this.newValue ? 1 : 0)
    },
    Ea: function (a) {
      this.newValue = 0 != a.G()
    },
    g: $_ChangeTeamsLockAction
  };
  $__inherit__($_ChangeTeamsLockAction, $_Action);
  $_NewPlayerAction.b = true;
  $_NewPlayerAction.na = function (a, b, c, d) {
    var e = new $_NewPlayerAction;
    e.T = a;
    e.name = b;
    e.Bi = c;
    e.jb = d;
    return e
  };
  $_NewPlayerAction.ua = $_Action;
  $_NewPlayerAction.prototype = {
    ...$_Action.$__interface__,
    /** @param {$_GameState} a */
    apply: function (a) {
      if (0 == this.oa) {
        var b = new $_Player;
        b.T = this.T;
        b.o = this.name;
        b.wd = this.Bi;
        b.jb = this.jb;
        a.D.push(b);
        a = a.Jk;
        null != a && a(b)
      }
    },
    Ca: function (a) {
      a.Z(this.T);
      a.Qb(this.name);
      a.Qb(this.Bi);
      a.Qb(this.jb)
    },
    Ea: function (a) {
      this.T = a.W();
      this.name = a.Jb();
      this.Bi = a.Jb();
      this.jb = a.Jb()
    },
    g: $_NewPlayerAction
  };
  $__inherit__($_NewPlayerAction, $_Action);
  $_PauseGameAction.b = true;
  $_PauseGameAction.ua = $_Action;
  $_PauseGameAction.prototype = {
    ...$_Action.$__interface__,
    /** @param {$_GameState} a */
    apply: function (a) {
      var b = a.H;
      if (null != b) {
        var c = a.ka(this.oa);
        if (null != c && c.ra) {
          var d = 120 == b.Ga,
            e = 0 < b.Ga;
          this.ef ? b.Ga = 120 : 120 == b.Ga && (b.Ga = 119);
          d != this.ef && wb.i(a.Ck, c, this.ef, e)
        }
      }
    },
    Ca: function (a) {
      a.u(this.ef ?
        1 : 0)
    },
    Ea: function (a) {
      this.ef = 0 != a.G()
    },
    g: $_PauseGameAction
  };
  $__inherit__($_PauseGameAction, $_Action);
  $_PlayerChatAction.b = true;
  $_PlayerChatAction.ua = $_Action;
  $_PlayerChatAction.prototype = {
    ...$_Action.$__interface__,
    hm: function (a) {
      if (null != a.pp) {
        var b = a.ka(this.oa);
        return null == b ? false : a.pp(b, this.df)
      }
      return true
    },
    /** @param {$_GameState} a */
    apply: function (a) {
      var b = a.ka(this.oa);
      null != b && ia.i(a.Hk, b, this.df)
    },
    Ca: function (a) {
      a.tc(aa.vd(this.df, 140))
    },
    Ea: function (a) {
      this.df = a.oc();
      if (140 < this.df.length) throw new q("message too long");
    },
    g: $_PlayerChatAction
  };
  $__inherit__($_PlayerChatAction, $_Action);
  $_DiscMoveAction.b = true;
  $_DiscMoveAction.ua = $_Action;
  $_DiscMoveAction.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      var b = a.ka(this.oa);
      if (null != b) {
        var c = this.input;
        0 == (b.mb & 16) && 0 != (c & 16) && (b.bc = true);
        b.mb = c;
        null != a.qp && a.qp(b)
      }
    },
    Ca: function (a) {
      a.rb(this.input)
    },
    Ea: function (a) {
      this.input = a.$a()
    },
    g: $_DiscMoveAction
  };
  $__inherit__($_DiscMoveAction, $_Action);
  ma.b = true;
  ma.na = function (a) {
    var b = new ma;
    b.Pi = a;
    return b
  };
  ma.ua = $_Action;
  ma.prototype = {
    ...$_Action.$__interface__,
    /** @param {$_GameState} a */
    apply: function (a) {
      var b = a.ka(this.oa);
      null != b && ia.i(a.Mk, b, this.Pi)
    },
    /** @param {$_Writer} a */
    Ca: function (a) {
      a.u(this.Pi)
    },
    /** @param {$_Reader} a */
    Ea: function (a) {
      this.Pi = a.G()
    },
    g: ma
  };
  $__inherit__(ma, $_Action);
  ec.b = true;
  ec.Ei = function () {
    $_Action.Ua(ma);
    $_Action.Ua($_CheckStateHashAction);
    $_Action.Ua($_DiscMoveAction);
    $_Action.Ua($_PlayerChatAction);
    $_Action.Ua($_NewPlayerAction);
    $_Action.Ua($_RemovePlayerAction);
    $_Action.Ua($_StartMatchAction);
    $_Action.Ua($_StopMatchAction);
    $_Action.Ua($_PauseGameAction);
    $_Action.Ua(da);
    $_Action.Ua($_ChangeStadiumAction);
    $_Action.Ua($_ChangeTeamAction);
    $_Action.Ua($_ChangeTeamsLockAction);
    $_Action.Ua(ra);
    $_Action.Ua(Pa);
    $_Action.Ua(sa);
    $_Action.Ua($_PingBroadcastAction);
    $_Action.Ua(qa);
    $_Action.Ua(Oa)
  };
  $_RemovePlayerAction.b = true;
  $_RemovePlayerAction.na = function (a, b, c) {
    var d = new $_RemovePlayerAction;
    d.T = a;
    d.Vc = b;
    d.sg = c;
    return d
  };
  $_RemovePlayerAction.ua = $_Action;
  $_RemovePlayerAction.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      if (0 != this.T) {
        var b = a.ka(this.oa);
        if (null != b && b.ra) {
          var c = a.ka(this.T);
          null != c && (C.remove(a.D, c), null != a.H && C.remove(a.H.wa.K, c.F), Tb.i(a.Kk, c, this.Vc, this.sg, b))
        }
      }
    },
    Ca: function (a) {
      null != this.Vc && (this.Vc = aa.vd(this.Vc, 100));
      a.Z(this.T);
      a.Qb(this.Vc);
      a.u(this.sg ? 1 : 0)
    },
    /** @param {$_Reader} a */
    Ea: function (a) {
      this.T = a.W();
      this.Vc = a.Jb();
      this.sg = 0 != a.G();
      if (null != this.Vc && 100 < this.Vc.length) throw new q("string too long");
    },
    g: $_RemovePlayerAction
  };
  $__inherit__($_RemovePlayerAction, $_Action);
  $_StartMatchAction.b = true;
  $_StartMatchAction.ua = $_Action;
  $_StartMatchAction.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      var b = a.ka(this.oa);
      null != b && b.ra && a.Iq(b, 0)
    },
    Ca: function () {},
    Ea: function () {},
    g: $_StartMatchAction
  };
  $__inherit__($_StartMatchAction, $_Action);
  $_StopMatchAction.b = true;
  $_StopMatchAction.ua = $_Action;
  $_StopMatchAction.prototype = {
    ...$_Action.$__interface__,
    /** @param {$_GameState} a */
    apply: function (a) {
      var b = a.ka(this.oa);
      if (null != b && b.ra && null != a.H) {
        a.H = null;
        for (var c = 0, d = a.D; c < d.length;) {
          var e = d[c];
          ++c;
          e.F = null;
          e.Bb = 0
        }
        null != a.Ze && a.Ze(b)
      }
    },
    Ca: function () {},
    Ea: function () {},
    g: $_StopMatchAction
  };
  $__inherit__($_StopMatchAction, $_Action);
  $_PingBroadcastAction.b = true;
  $_PingBroadcastAction.na = function (a) {
    for (var b = new $_PingBroadcastAction, c = a.L.D, d = [], e = 0; e < c.length;) {
      var f = a.se.get(c[e++].T);
      d.push(null == f ? 0 : f.wb)
    }
    b.ge = d;
    return b
  };
  $_PingBroadcastAction.ua = $_Action;
  $_PingBroadcastAction.prototype = {
    ...$_Action.$__interface__,
    apply: function (a) {
      if (0 == this.oa) {
        a = a.D;
        for (var b = 0, c = a.length; b < c;) {
          var d = b++;
          if (d >= this.ge.length) break;
          a[d].wb = this.ge[d]
        }
      }
    },
    Ca: function (a) {
      a.ib(this.ge.length);
      for (var b = 0, c = this.ge; b < c.length;) a.ib(c[b++])
    },
    Ea: function (a) {
      this.ge = [];
      for (var b = a.yb(), c = 0; c < b;) ++c, this.ge.push(a.yb())
    },
    g: $_PingBroadcastAction
  };
  $__inherit__($_PingBroadcastAction, $_Action);
  $_DiscF.b = true;
  $_DiscF.je = [sb];
  /** @param {$_DiscF} a */
  /** @param {$_DiscF} b */
  $_DiscF.cd = function (a, b) {
    a.la = b.la;
    a.l = b.l;
    a.pa = b.pa;
    a.Ba = b.Ba;
    a.X = b.X;
    a.gj = b.gj;
    a.h = b.h;
    a.B = b.B;
    var c = a.a,
      d = b.a;
    c.x = d.x;
    c.y = d.y;
    c = a.M;
    d = b.M;
    c.x = d.x;
    c.y = d.y
  };
  $_DiscF.prototype = {
    aa: function (a) {
      var b = this.a;
      a.w(b.x);
      a.w(b.y);
      b = this.M;
      a.w(b.x);
      a.w(b.y);
      a.w(this.la);
      a.w(this.l);
      a.w(this.pa);
      a.w(this.Ba);
      a.rb(this.X);
      a.Z(this.h);
      a.Z(this.B)
    },
    /** @param {$_Reader} a */
    ea: function (a) {
      var b = this.a;
      b.x = a.A();
      b.y = a.A();
      b = this.M;
      b.x = a.A();
      b.y = a.A();
      this.la = a.A();
      this.l = a.A();
      this.pa = a.A();
      this.Ba = a.A();
      this.X = a.$a();
      this.h = a.W();
      this.B = a.W()
    },
    $m: function (a) {
      var b = this.a,
        c = a.a,
        d = b.x - c.x,
        b = b.y - c.y,
        e = a.la + this.la,
        f = d * d + b * b;
      if (0 < f && f <= e * e) {
        var f = Math.sqrt(f),
          d = d / f,
          b = b / f,
          c = this.pa / (this.pa + a.pa),
          e = e - f,
          f = e * c,
          g = this.a,
          h = this.a;
        g.x = h.x + d * f;
        g.y = h.y + b * f;
        h = g = a.a;
        e -= f;
        g.x = h.x - d * e;
        g.y = h.y - b * e;
        e = this.M;
        f = a.M;
        e = d * (e.x - f.x) + b * (e.y - f.y);
        0 > e && (e *= this.l * a.l + 1, c *= e, g = f = this.M, f.x = g.x - d * c, f.y = g.y - b * c, a = f = a.M, c = e - c, f.x = a.x + d * c, f.y = a.y + b * c)
      }
    },
    an: function (a) {
      var b, c, d;
      if (0 != 0 * a.tb) {
        b = a.R.a;
        var e = a.V.a;
        c = e.x - b.x;
        var f = e.y - b.y,
          g = this.a;
        d = g.x - e.x;
        e = g.y - e.y;
        g = this.a;
        if (0 >= (g.x - b.x) * c + (g.y - b.y) * f || 0 <= d * c + e * f) return;
        c = a.sa;
        b = c.x;
        c = c.y;
        d = b * d + c * e
      } else {
        c = a.Hd;
        d = this.a;
        b = d.x - c.x;
        c = d.y - c.y;
        d = a.jg;
        e = a.kg;
        if ((0 < d.x * b + d.y * c && 0 < e.x * b + e.y * c) == 0 >= a.tb) return;
        e = Math.sqrt(b * b + c * c);
        if (0 == e) return;
        d = e - a.rj;
        b /= e;
        c /= e
      }
      e = a.xc;
      if (0 == e) 0 > d && (d = -d, b = -b, c = -c);
      else if (0 > e && (e = -e, d = -d, b = -b, c = -c), d < -e) return;
      d >= this.la || (d = this.la - d, f = e = this.a, e.x = f.x + b * d, e.y = f.y + c * d, d = this.M, d = b * d.x + c * d.y, 0 > d && (d *= this.l * a.l + 1, e = a = this.M, a.x = e.x - b * d, a.y = e.y - c * d))
    },
    g: $_DiscF
  };
  $_TestSimFloat.b = true;
  $_TestSimFloat.je = [sb];
  /** @param {$_TestSimFloat} a */
  /** @param {$_TestSimFloat} b */
  $_TestSimFloat.cd = function (a, b) {
    if (null == b.K) a.K = null;
    else {
      null == a.K && (a.K = []);
      for (var c = a.K, d = b.K, e = d.length; c.length > e;) c.pop();
      for (var e = 0, f = d.length; e < f;) {
        var g = e++;
        c[g] = d[g].jc()
      }
    }
    a.C = b.C;
    a.O = b.O;
    a.ha = b.ha
  };
  $_TestSimFloat.prototype = {
    aa: function (a) {
      a.u(this.K.length);
      for (var b = 0, c = this.K.length; b < c;) {
        var d = b++,
          e = this.K[d];
        e.zk = d;
        e.aa(a)
      }
    },
    /** @param {$_Reader} a */
    ea: function (a) {
      this.K = [];
      for (var b = a.G(), c = 0; c < b;) {
        ++c;
        var d = new $_DiscF;
        d.ea(a);
        this.K.push(d)
      }
    },
    v: function (a) {
      for (var b = 0, c = this.K; b < c.length;) {
        var d = c[b];
        ++b;
        var e = d.a,
          f = d.a,
          g = d.M;
        e.x = f.x + g.x * a;
        e.y = f.y + g.y * a;
        f = e = d.M;
        d = d.Ba;
        e.x = f.x * d;
        e.y = f.y * d
      }
      a = 0;
      for (b = this.K.length; a < b;) {
        d = a++;
        c = this.K[d];
        d += 1;
        for (e = this.K.length; d < e;) f = this.K[d++], 0 != (f.h & c.B) && 0 != (f.B & c.h) && c.$m(f);
        if (0 != c.pa) {
          d = 0;
          for (e = this.ha; d < e.length;)
            if (f = e[d], ++d, 0 != (f.h & c.B) && 0 != (f.B & c.h)) {
              var g = f.sa,
                h = c.a,
                g = f.Oa - (g.x * h.x + g.y * h.y) + c.la;
              if (0 < g) {
                var k = h = c.a,
                  l = f.sa;
                h.x = k.x + l.x * g;
                h.y = k.y + l.y * g;
                g = c.M;
                h = f.sa;
                g = g.x * h.x + g.y * h.y;
                0 > g && (g *= c.l * f.l + 1, k = h = c.M, f = f.sa, h.x = k.x - f.x * g, h.y = k.y - f.y * g)
              }
            } d = 0;
          for (e = this.O; d < e.length;) f = e[d], ++d, 0 != (f.h & c.B) && 0 != (f.B & c.h) && c.an(f);
          d = 0;
          for (e = this.C; d < e.length;)
            if (f = e[d], ++d, 0 != (f.h & c.B) && 0 != (f.B & c.h) && (h = c.a, k = f.a, g = h.x - k.x, h = h.y - k.y, k = g * g + h * h, 0 < k && k <= c.la * c.la)) {
              var k = Math.sqrt(k),
                g = g / k,
                h = h / k,
                k = c.la - k,
                m = l = c.a;
              l.x = m.x + g * k;
              l.y = m.y + h * k;
              k = c.M;
              k = g * k.x + h * k.y;
              0 > k && (k *= c.l * f.l + 1, l = f = c.M, f.x = l.x - g * k, f.y = l.y - h * k)
            }
        }
      }
    },
    g: $_TestSimFloat
  };
  $_Plane.b = true;
  $_Plane.prototype = {
    aa: function (a) {
      var b = this.sa;
      a.w(b.x);
      a.w(b.y);
      a.w(this.Oa);
      a.w(this.l);
      a.Z(this.h);
      a.Z(this.B)
    },
    ea: function (a) {
      var b = this.sa;
      b.x = a.A();
      b.y = a.A();
      this.Oa = a.A();
      this.l = a.A();
      this.h = a.W();
      this.B = a.W()
    },
    g: $_Plane
  };
  $_Segment.b = true;
  $_Segment.prototype = {
    aa: function (a) {
      var b = 0,
        c = a.a;
      a.u(0);
      a.u(this.R.gd);
      a.u(this.V.gd);
      0 != this.xc && (b = 1, a.w(this.xc));
      this.tb != 1 / 0 && (b |= 2, a.w(this.tb));
      0 != this.X && (b |= 4, a.Z(this.X));
      this.Wa && (b |= 8);
      a.m.setUint8(c, b);
      a.w(this.l);
      a.Z(this.h);
      a.Z(this.B)
    },
    ea: function (a,
      b) {
      var c = a.G();
      this.R = b[a.G()];
      this.V = b[a.G()];
      this.xc = 0 != (c & 1) ? a.A() : 0;
      this.tb = 0 != (c & 2) ? a.A() : 1 / 0;
      this.X = 0 != (c & 4) ? a.W() : 0;
      this.Wa = 0 != (c & 8);
      this.l = a.A();
      this.h = a.W();
      this.B = a.W()
    },
    Fc: function (a) {
      a *= .017453292519943295;
      if (0 > a) {
        a = -a;
        var b = this.R;
        this.R = this.V;
        this.V = b;
        this.xc = -this.xc
      }
      a > $_Segment.wm && a < $_Segment.vm && (this.tb = 1 / Math.tan(a / 2))
    },
    Kn: function () {
      return 0 != 0 * this.tb ? 0 : 114.59155902616465 * Math.atan(1 / this.tb)
    },
    Sd: function () {
      if (0 == 0 * this.tb) {
        var a = this.V.a,
          b = this.R.a,
          c = .5 * (a.x - b.x),
          a = .5 * (a.y - b.y),
          b = this.R.a,
          d = this.tb;
        this.Hd = new $_Point(b.x + c + -a * d, b.y + a + c * d);
        a = this.R.a;
        b = this.Hd;
        c = a.x - b.x;
        a = a.y - b.y;
        this.rj = Math.sqrt(c * c + a * a);
        c = this.R.a;
        a = this.Hd;
        this.jg = new $_Point(-(c.y - a.y), c.x - a.x);
        c = this.Hd;
        a = this.V.a;
        this.kg = new $_Point(-(c.y - a.y), c.x - a.x);
        0 >= this.tb && (a = c = this.jg, c.x = -a.x, c.y = -a.y, a = c = this.kg, c.x = -a.x, c.y = -a.y)
      } else a = this.R.a, b = this.V.a, c = a.x - b.x, a = -(a.y - b.y), b = Math.sqrt(a * a + c * c), this.sa = new $_Point(a / b, c / b)
    },
    g: $_Segment
  };
  $_Vertex.b = true;
  $_Vertex.prototype = {
    aa: function (a) {
      var b = this.a;
      a.w(b.x);
      a.w(b.y);
      a.w(this.l);
      a.Z(this.h);
      a.Z(this.B)
    },
    ea: function (a) {
      var b = this.a;
      b.x = a.A();
      b.y = a.A();
      this.l = a.A();
      this.h = a.W();
      this.B = a.W()
    },
    g: $_Vertex
  };
  q.b = true;
  q.ua = Error;
  /** @type {Error} */
  const Error_$__interface__ = null;
  q.prototype = {
    ...Error_$__interface__,
    g: q
  };
  $__inherit__(q, Error);
  String.prototype.g = String;
  String.b = true;
  Array.b = true;
  Date.prototype.g = Date;
  Date.b = "Date";
  p.Fa = new p(0, 16777215, 0, -1, "Spectators", "t-spec", 0, 0);
  p.ba = new p(1, 15035990, -1, 8, "Red", "t-red", 0, 2);
  p.ta = new p(2, 5671397, 1, 16, "Blue", "t-blue", 0, 4);
  p.Fa.Tf = p.Fa;
  p.ba.Tf = p.ta;
  p.ta.Tf = p.ba;
  Object.defineProperty(q.prototype, "message", {
    get: function () {
      return String(this.Ha)
    }
  });
  $_Action.$l = new Map;
  $_Action.af = 0;
  $_CheckStateHashAction.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_Stadium.Pq = $_Writer.ca(1024);
  sa.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  Pa.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  da.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  ra.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  qa.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_ChangeTeamAction.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_ChangeStadiumAction.La = $_Action.Ta({
    Na: false,
    Ma: false,
    km: {
      Tl: 10,
      pm: 2E3
    }
  });
  Oa.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_ChangeTeamsLockAction.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_NewPlayerAction.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_PauseGameAction.La = $_Action.Ta({});
  $_PlayerChatAction.La = $_Action.Ta({
    Na: false,
    Ma: false,
    km: {
      Tl: 10,
      pm: 900
    }
  });
  $_DiscMoveAction.La = $_Action.Ta({});
  ma.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_RemovePlayerAction.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_StartMatchAction.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_StopMatchAction.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_PingBroadcastAction.La = $_Action.Ta({
    Na: false,
    Ma: false
  });
  $_Segment.wm = .17435839227423353;
  $_Segment.vm = 5.934119456780721;

  ec.Ei();

  return (function() {
    const $_Team = p;

    function forward(class_, key) {
      Object.defineProperty(class_.prototype, '_' + key, {
        get() {if (typeof this[key] === 'undefined') throw new Error(`_${key}:${key}`); return this[key]},
        set(x) {return this[key] = x},
      })
    }

    forward($_ReplayController, 'td');
    forward($_ReplayController, 'Mg');
    forward($_ReplayController, 'Te');
    forward($_ReplayController, 'v');

    forward($_ReplayController, 'L');
    forward($_ReplayController, 'vc');
    forward($_ReplayController, 'S');

    forward($_GameState, 'H');
    forward($_GameState, 'D');

    forward(ta, 'zb');
    forward(ta, 'Ac');
    forward(ta, 'Kb');
    forward(ta, 'Cb');
    forward(ta, 'xa');
    forward(ta, 'wa');

    forward($_TestSimFloat, 'K');

    forward($_Player, 'T');
    forward($_Player, 'mb');
    forward($_Player, 'bc');
    forward($_Player, '$');
    forward($_Player, 'F');
    forward($_Player, 'o');

    forward($_Team, 'P');

    forward($_DiscF, 'a');
    forward($_DiscF, 'M');

    return {
      $_GameState,
      $_ReplayController,
      v: 2,
    };
  })();
}

module.exports.closure = closure;

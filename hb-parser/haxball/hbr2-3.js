// version: QnHwsaqi

function closure() {
    const pako = {
        inflateRaw: require('zlib').inflateRawSync,
    };

    function ic() {
    }
    function r() {
    }
    function p(a) {
        this.Ta = a;
        Error.captureStackTrace && Error.captureStackTrace(this, p);
    }
    function Wa(a) {
        this.g = u.Ga(Wa.N);
        u.Ea(this.g).get('features').textContent = a.join(', ');
    }
    function Xa() {
        this.jl = new Rb();
        this.g = u.Ga(Xa.N);
        var a = u.Ea(this.g);
        this.pg = a.get('ping');
        this.op = a.get('max-ping');
        this.oo = a.get('fps');
        u.we(a.get('graph'), this.jl.g);
    }
    function W(a, b, c) {
        var d = this;
        this.g = u.Ga(W.N);
        var e = u.Ea(this.g);
        e.get('ok');
        e.get('cancel');
        this.He = e.get('content');
        for (var f = e.get('title'), e = e.get('buttons'), g = 0, l = 0; l < c.length;) {
            var k = c[l++], t = window.document.createElement('button');
            t.textContent = k;
            t.onclick = function (a) {
                return function () {
                    y.i(d.$a, a[0]);
                };
            }([g++]);
            e.appendChild(t);
        }
        this.He.textContent = b;
        f.textContent = a;
    }
    function ba(a) {
        function b(a) {
            var b = window.document.createElement('div');
            b.className = 'inputrow';
            var c = window.document.createElement('div');
            c.textContent = a;
            b.appendChild(c);
            for (var c = Q.wo(a), d = 0; d < c.length;) {
                var e = [c[d]];
                ++d;
                var f = [window.document.createElement('div')], g = e[0];
                J.startsWith(e[0], 'Key') && (g = D.substr(e[0], 3, null));
                f[0].textContent = g;
                b.appendChild(f[0]);
                g = window.document.createElement('i');
                g.className = 'icon-cancel';
                g.onclick = function (a, b) {
                    return function () {
                        Q.Eq(b[0]);
                        n.A.rg.Wa(Q);
                        a[0].remove();
                    };
                }(f, e);
                f[0].appendChild(g);
            }
            c = window.document.createElement('i');
            c.className = 'icon-plus';
            b.appendChild(c);
            c.onclick = function () {
                q.classList.toggle('show', !0);
                q.focus();
                q.onkeydown = function (b) {
                    q.classList.toggle('show', !1);
                    b.stopPropagation();
                    b = b.code;
                    null == Q.L(b) && (Q.Oa(b, a), n.A.rg.Wa(Q), r());
                };
            };
            return b;
        }
        function c(a, b, c) {
            a = k.get(a);
            if (null == c)
                a.hidden = !0;
            else {
                a.innerHTML = b + ': <div class=\'flagico\'></div> <span></span>';
                b = a.querySelector('.flagico');
                a = a.querySelector('span');
                try {
                    b.classList.add('f-' + c.tb);
                } catch (vc) {
                }
                a.textContent = c.tb.toUpperCase();
            }
        }
        function d(a, b, c, d) {
            var e = k.get(a);
            e.selectedIndex = d(b.L());
            e.onchange = function () {
                var a = c(e.selectedIndex);
                b.Wa(a);
            };
        }
        function e(a, b, c) {
            function d(a) {
                e.classList.toggle('icon-ok', a);
                e.classList.toggle('icon-cancel', !a);
            }
            a = k.get(a);
            a.classList.add('toggle');
            var e = window.document.createElement('i');
            e.classList.add('icon-ok');
            a.insertBefore(e, a.firstChild);
            a.onclick = function () {
                var a = !b.L();
                b.Wa(a);
                d(a);
                null != c && c(a);
            };
            d(b.L());
        }
        function f(a) {
            var b = {
                Am: k.get(a + 'btn'),
                $g: k.get(a + 'sec')
            };
            t.push(b);
            b.Am.onclick = function () {
                g(b);
            };
        }
        function g(a) {
            for (var b = 0, c = 0; c < t.length;) {
                var d = t[c];
                ++c;
                var e = d == a;
                e && (ba.Ul = b);
                d.$g.classList.toggle('selected', e);
                d.Am.classList.toggle('selected', e);
                ++b;
            }
        }
        null == a && (a = !1);
        var l = this;
        this.g = u.Ga(ba.N);
        var k = u.Ea(this.g);
        this.nd = k.get('close');
        var t = [];
        f('sound');
        f('video');
        f('misc');
        f('input');
        g(t[ba.Ul]);
        e('tsound-main', n.A.gm, function (a) {
            n.Ma.am(a ? 1 : 0);
        });
        e('tsound-chat', n.A.Ei);
        e('tsound-highlight', n.A.fm);
        e('tsound-crowd', n.A.em);
        d('viewmode', n.A.Tb, function (a) {
            return a - 1;
        }, function (a) {
            return a + 1;
        });
        d('fps', n.A.Dh, function (a) {
            return a;
        }, function (a) {
            return a;
        });
        var h = [
            1,
            0.75,
            0.5,
            0.25
        ];
        d('resscale', n.A.Ml, function (a) {
            return h[a];
        }, function (a) {
            for (var b = 0, c = h.length - 1; b < c && !(h[b] <= a);)
                ++b;
            return b;
        });
        e('tvideo-teamcol', n.A.om);
        e('tvideo-showindicators', n.A.wk);
        e('tvideo-showavatars', n.A.cm);
        var m = null, m = function () {
                var b = n.A.Me.L();
                c('loc', 'Detected location', n.A.Le.L());
                c('loc-ovr', 'Location override', b);
                var d = k.get('loc-ovr-btn');
                d.disabled = !a;
                null == b ? (d.textContent = 'Override location', d.onclick = function () {
                    A.i(l.wp);
                }) : (d.textContent = 'Remove override', d.onclick = function () {
                    n.A.Me.Wa(null);
                    m();
                });
            };
        m();
        var Q = n.A.rg.L(), q = k.get('presskey'), r, p = k.get('inputsec');
        r = function () {
            u.Af(p);
            var a = b('Up');
            p.appendChild(a);
            a = b('Down');
            p.appendChild(a);
            a = b('Left');
            p.appendChild(a);
            a = b('Right');
            p.appendChild(a);
            a = b('Kick');
            p.appendChild(a);
        };
        r();
        this.nd.onclick = function () {
            A.i(l.pb);
        };
    }
    function Ya(a) {
        this.bk = !1;
        this.hm = new Aa(q.Ia);
        this.Hj = new Aa(q.xa);
        this.Cl = new Aa(q.da);
        var b = this;
        this.g = u.Ga(Ya.N);
        var c = u.Ea(this.g);
        this.jc = c.get('room-name');
        this.km = c.get('start-btn');
        this.mm = c.get('stop-btn');
        this.ei = c.get('pause-btn');
        this.qn = c.get('auto-btn');
        this.Jk = c.get('lock-btn');
        this.Ll = c.get('reset-all-btn');
        this.Al = c.get('rec-btn');
        var d = c.get('link-btn'), e = c.get('leave-btn'), f = c.get('rand-btn');
        this.uf = c.get('time-limit-sel');
        this.nf = c.get('score-limit-sel');
        this.im = c.get('stadium-name');
        this.jm = c.get('stadium-pick');
        this.jm.onclick = function () {
            A.i(b.Pp);
        };
        this.Rh(c.get('red-list'), this.Cl, q.da, a);
        this.Rh(c.get('blue-list'), this.Hj, q.xa, a);
        this.Rh(c.get('spec-list'), this.hm, q.Ia, a);
        this.Qk(this.uf, this.Pk(15));
        this.Qk(this.nf, this.Pk(15));
        this.uf.onchange = function () {
            y.i(b.Tp, b.uf.selectedIndex);
        };
        this.nf.onchange = function () {
            y.i(b.Lp, b.nf.selectedIndex);
        };
        this.km.onclick = function () {
            A.i(b.Qp);
        };
        this.mm.onclick = function () {
            A.i(b.Rp);
        };
        this.ei.onclick = function () {
            A.i(b.Ep);
        };
        this.qn.onclick = function () {
            A.i(b.vp);
        };
        this.Jk.onclick = function () {
            y.i(b.Sp, !b.Vh);
        };
        this.Ll.onclick = function () {
            null != b.ce && (b.ce(q.xa), b.ce(q.da));
        };
        this.Al.onclick = function () {
            A.i(b.Ip);
        };
        d.onclick = function () {
            A.i(b.Op);
        };
        e.onclick = function () {
            A.i(b.be);
        };
        f.onclick = function () {
            A.i(b.Hp);
        };
        this.xj(!1);
        this.yj(!1);
    }
    function Za() {
        var a = this;
        this.g = u.Ga(Za.N);
        var b = u.Ea(this.g);
        this.Bb = b.get('input');
        this.$e = b.get('ok');
        b.get('cancel').onclick = function () {
            null != a.$a && a.$a(null);
        };
        this.Bb.maxLength = 30;
        this.Bb.oninput = function () {
            a.C();
        };
        this.Bb.onkeydown = function (b) {
            13 == b.keyCode && a.Dc() && null != a.$a && a.$a(a.Bb.value);
        };
        this.$e.onclick = function () {
            a.Dc() && null != a.$a && a.$a(a.Bb.value);
        };
        this.C();
    }
    function $a(a) {
        this.Tk = a.get('notice');
        this.Tn = a.get('notice-contents');
        this.nd = a.get('notice-close');
        this.Dl();
    }
    function Ba(a) {
        function b(a) {
            function b() {
                e.className = f.Ta ? 'icon-ok' : 'icon-cancel';
            }
            a = d.get(a);
            var e = a.querySelector('i'), f = { Ta: !0 };
            b();
            a.onclick = function () {
                f.Ta = !f.Ta;
                b();
                c.Tm(c.aj);
            };
            return f;
        }
        this.aj = [];
        var c = this;
        this.bs = a;
        this.Ja = u.Ga(Ba.qj);
        var d = u.Ea(this.Ja), e = new $a(d);
        this.mj = d.get('refresh');
        this.Km = d.get('join');
        a = d.get('create');
        this.Yr = d.get('count');
        a.onclick = function () {
            A.i(c.rs);
        };
        d.get('changenick').onclick = function () {
            A.i(c.qs);
        };
        d.get('settings').onclick = function () {
            A.i(c.ts);
        };
        var f = d.get('replayfile');
        f.onchange = function () {
            var a = f.files;
            if (!(1 > a.length)) {
                var a = a.item(0), b = new FileReader();
                b.onload = function () {
                    y.i(c.ss, b.result);
                };
                b.readAsArrayBuffer(a);
            }
        };
        this.as = b('fil-full');
        this.us = b('fil-pass');
        this.hs = d.get('listscroll');
        this.ws = Ca.$f(this.hs);
        this.dj = d.get('list');
        this.mj.onclick = function () {
            e.Dl();
            c.Fm();
        };
        this.Km.onclick = function () {
            null != c.Nd && y.i(c.Pm, c.Nd.As);
        };
        this.Fm();
    }
    function ab(a) {
        this.Ja = u.Ga(ab.qj, 'tbody');
        var b = u.Ea(this.Ja), c = b.get('name'), d = b.get('players'), e = b.get('distance'), f = b.get('pass'), b = b.get('flag');
        this.As = a;
        var g = a.vd;
        c.textContent = g.w;
        d.textContent = '' + g.I + '/' + g.We;
        f.textContent = g.Hb ? 'Yes' : 'No';
        e.textContent = '' + (a.Ke | 0) + 'km';
        try {
            b.classList.add('f-' + g.tb.toLowerCase());
        } catch (l) {
        }
        9 > a.vd.Hd && this.Ja.classList.add('old');
    }
    function bb() {
        this.ck = null;
        var a = this;
        this.g = u.Ga(bb.N);
        var b = u.Ea(this.g);
        this.Xf = b.get('link');
        var c = b.get('copy'), b = b.get('close');
        this.Xf.onfocus = function () {
            a.Xf.select();
        };
        c.onclick = function () {
            a.Xf.select();
            return window.document.execCommand('Copy');
        };
        b.onclick = function () {
            A.i(a.pb);
        };
    }
    function ha(a) {
        function b() {
            var b = g[f];
            a.ll = e ? b : 0;
            d.get('spd').textContent = b + 'x';
        }
        this.Uf = !1;
        var c = this;
        this.g = u.Ga(ha.N);
        var d = u.Ea(this.g);
        this.ri = a;
        d.get('reset').onclick = function () {
            a.si();
            c.al();
        };
        var e = !0, f = 2, g = [
                0.5,
                0.75,
                1,
                2,
                3
            ];
        b();
        var l = d.get('playicon');
        l.classList.add('icon-pause');
        d.get('play').onclick = function () {
            e = !e;
            var a = l.classList;
            a.toggle('icon-play', !e);
            a.toggle('icon-pause', e);
            b();
        };
        d.get('spdup').onclick = function () {
            f += 1;
            var a = g.length - 1;
            f > a && (f = a);
            b();
        };
        d.get('spddn').onclick = function () {
            --f;
            0 > f && (f = 0);
            b();
        };
        this.zr = d.get('time');
        var k = d.get('timebar');
        this.tq = d.get('progbar');
        for (var t = d.get('timetooltip'), h = 0, m = a.Rk; h < m.length;) {
            var Q = m[h];
            ++h;
            var n = window.document.createElement('div');
            n.className = 'marker';
            n.classList.add('k' + Q.kind);
            n.style.left = 100 * Q.jj + '%';
            k.appendChild(n);
        }
        k.onclick = function (b) {
            a.$q((b.pageX - k.offsetLeft) / k.clientWidth * a.jh * a.lf);
            c.Uf || (c.Uf = !0, c.Np(), c.al());
        };
        k.onmousemove = function (b) {
            b = (b.pageX - k.offsetLeft) / k.clientWidth;
            t.textContent = ha.Sk(a.lf * a.jh * b);
            return t.style.left = 'calc(' + 100 * b + '% - 30px)';
        };
        this.Xo = d.get('leave');
        this.Xo.onclick = function () {
            A.i(c.be);
        };
    }
    function P(a) {
        var b = this, c = new W('Only humans', '', []);
        this.g = c.g;
        c.He.style.minHeight = '78px';
        Ka.Yo().then(function (d) {
            null == P.vg && (P.vg = window.document.createElement('div'), c.He.appendChild(P.vg), P.xq = d.render(P.vg, {
                sitekey: a,
                callback: function (a) {
                    y.i(P.Bl, a);
                },
                theme: 'dark'
            }));
            d.reset(P.xq);
            P.Bl = function (a) {
                window.setTimeout(function () {
                    y.i(b.$a, a);
                }, 1000);
                P.Bl = null;
            };
            c.He.appendChild(P.vg);
        });
    }
    function Aa(a) {
        this.xd = new Map();
        var b = this;
        this.g = u.Ga(Aa.N);
        this.g.className += ' ' + a.$n;
        var c = u.Ea(this.g);
        this.Za = c.get('list');
        this.Th = c.get('join-btn');
        this.ti = c.get('reset-btn');
        a == q.Ia && this.ti.remove();
        this.Th.textContent = '' + a.w;
        this.g.ondragover = this.g.Ls = function (a) {
            -1 != a.dataTransfer.types.indexOf('player') && a.preventDefault();
        };
        this.g.ondrop = function (c) {
            c.preventDefault();
            c = c.dataTransfer.getData('player');
            null != c && (c = K.parseInt(c), null != c && ia.i(b.kg, c, a));
        };
        this.Th.onclick = function () {
            y.i(b.Cp, a);
        };
        this.ti.onclick = function () {
            y.i(b.ce, a);
        };
    }
    function cb(a) {
        var b = this;
        this.w = a.w;
        this.xb = a.xb;
        this.Z = a.V;
        this.g = u.Ga(cb.N);
        var c = u.Ea(this.g);
        this.Ye = c.get('name');
        this.pg = c.get('ping');
        try {
            c.get('flag').classList.add('f-' + a.Jd);
        } catch (d) {
        }
        this.Ye.textContent = this.w;
        this.pg.textContent = '' + this.xb;
        this.g.ondragstart = function (a) {
            a.dataTransfer.setData('player', K.xe(b.Z));
        };
        this.g.oncontextmenu = function (a) {
            a.preventDefault();
            y.i(b.ef, b.Z);
        };
        this.Xl(a.bb);
    }
    function db(a, b) {
        var c = this;
        this.g = u.Ga(db.N);
        var d = u.Ea(this.g);
        this.Ye = d.get('name');
        this.Ff = d.get('admin');
        this.Pe = d.get('kick');
        this.nd = d.get('close');
        this.Ff.onclick = function () {
            ia.i(c.up, c.Nb, !c.ml);
        };
        this.Pe.onclick = function () {
            y.i(c.ci, c.Nb);
        };
        this.nd.onclick = function () {
            A.i(c.pb);
        };
        this.Nb = a.V;
        this.Aj(a.w);
        this.zj(a.bb);
        this.Ff.disabled = !b || 0 == this.Nb;
        this.Pe.disabled = !b || 0 == this.Nb;
    }
    function Rb() {
        this.yh = 0;
        this.np = 400;
        this.uk = 64;
        this.Si = 32;
        this.sa = window.document.createElement('canvas');
        this.Of = window.document.createElement('canvas');
        this.g = window.document.createElement('div');
        this.Of.width = this.sa.width = this.Si;
        this.Of.height = this.sa.height = this.uk;
        this.Ch = this.Of.getContext('2d', null);
        this.c = this.sa.getContext('2d', null);
        this.c.fillStyle = 'green';
        for (var a = [], b = 0, c = this.Si; b < c;)
            ++b, a.push(0);
        this.Xp = a;
        this.g.appendChild(this.Of);
        this.g.className = 'graph';
    }
    function eb() {
        this.ib = null;
        var a = this;
        this.g = u.Ga(eb.N);
        var b = u.Ea(this.g);
        b.get('cancel').onclick = function () {
            A.i(a.ai);
        };
        this.fi = b.get('pick');
        this.Yj = b.get('delete');
        this.mk = b.get('export');
        var c = b.get('list'), d = b.get('file');
        this.Jg();
        this.fi.onclick = function () {
            null != a.ib && a.ib.Od().then(function (b) {
                y.i(a.mg, b);
            });
        };
        this.Yj.onclick = function () {
            if (null != a.ib) {
                var b = a.ib.Cm;
                null != b && (a.ib.Ja.remove(), a.ib = null, b(), a.Jg());
            }
        };
        this.mk.onclick = function () {
            null != a.ib && a.ib.Od().then(function (a) {
                Da.Xq(a.re(), a.w + '.hbs');
            });
        };
        this.ii(c);
        this.tg = Ca.$f(c);
        window.setTimeout(function () {
            a.tg.update();
        }, 0);
        d.onchange = function () {
            var b = d.files;
            if (!(1 > b.length)) {
                var b = b.item(0), c = new FileReader();
                c.onload = function () {
                    try {
                        var b = new h();
                        b.Hk(c.result);
                        y.i(a.mg, b);
                    } catch (l) {
                        b = l instanceof p ? l.Ta : l, b instanceof SyntaxError ? y.i(a.di, 'SyntaxError in line: ' + K.xe(b.lineNumber)) : b instanceof Bb ? y.i(a.di, b.pp) : y.i(a.di, 'Error loading stadium file.');
                    }
                };
                c.readAsText(b);
            }
        };
    }
    function fb() {
        var a = this;
        this.g = u.Ga(fb.N);
        var b = u.Ea(this.g);
        b.get('cancel').onclick = function () {
            y.i(a.pb, !1);
        };
        b.get('leave').onclick = function () {
            y.i(a.pb, !0);
        };
    }
    function gb(a) {
        var b = this;
        this.g = u.Ga(gb.N);
        var c = u.Ea(this.g);
        this.Ye = c.get('title');
        this.mi = c.get('reason');
        this.rn = c.get('ban-btn');
        this.tn = c.get('ban-text');
        this.Pe = c.get('kick');
        this.nd = c.get('close');
        this.rn.onclick = function () {
            b.wj(!b.Fj);
        };
        this.nd.onclick = function () {
            A.i(b.pb);
        };
        this.Pe.onclick = function () {
            Cb.i(b.ci, b.Nb, b.mi.value, b.Fj);
        };
        this.mi.onkeydown = function (a) {
            return a.stopPropagation();
        };
        this.mi.maxLength = 100;
        this.Nb = a.V;
        this.Ye.textContent = 'Kick ' + a.w;
        this.wj(!1);
    }
    function ja(a) {
        this.Eb = new hb();
        this.Gd = !1;
        this.ne = new Xa();
        this.Pa = new Ea();
        var b = this;
        this.Va = new Ya(a);
        this.Eb.Nb = a;
        this.g = u.Ga(ja.N);
        a = u.Ea(this.g);
        this.Hh = a.get('gameplay-section');
        this.gf = a.get('popups');
        this.gf.style.display = 'none';
        u.we(a.get('chatbox'), this.Pa.g);
        u.we(a.get('stats'), this.ne.g);
        this.$h = a.get('menu');
        this.$h.onclick = function () {
            b.ke(!b.Gd);
            b.$h.blur();
        };
        a.get('settings').onclick = function () {
            var a = new ba();
            a.pb = function () {
                b.ab(null);
            };
            b.ab(a.g);
        };
        this.Hh.appendChild(this.Eb.g);
        this.Va.be = function () {
            var a = new fb();
            a.pb = function (a) {
                b.ab(null);
                a && A.i(b.be);
            };
            b.ab(a.g);
        };
        this.Va.Pp = function () {
            var a = new eb();
            a.ai = function () {
                b.ab(null);
            };
            a.mg = function (a) {
                y.i(b.mg, a);
                b.ab(null);
            };
            a.di = function (a) {
                a = new W('Error loading stadium', a, ['Ok']);
                a.$a = function () {
                    b.ab(null);
                };
                b.ab(a.g);
            };
            b.ab(a.g);
        };
    }
    function Sb() {
        this.Da = 0;
        this.dk = this.ek = !1;
        this.Je = 0;
        this.g = window.document.createElement('div');
        this.g.className = 'game-timer-view';
        this.g.appendChild(this.Up = this.Ud('OVERTIME!', 'overtime'));
        this.g.appendChild(this.rp = this.Ud('0', 'digit'));
        this.g.appendChild(this.qp = this.Ud('0', 'digit'));
        this.g.appendChild(this.Ud(':', null));
        this.g.appendChild(this.Zq = this.Ud('0', 'digit'));
        this.g.appendChild(this.Yq = this.Ud('0', 'digit'));
    }
    function hb() {
        this.Nb = -1;
        this.Db = new M();
        this.xc = new Sb();
        this.g = u.Ga(hb.N);
        var a = u.Ea(this.g);
        this.Pb = new Db(a.get('red-score'), 0);
        this.Jb = new Db(a.get('blue-score'), 0);
        u.we(a.get('timer'), this.xc.g);
        u.we(a.get('canvas'), this.Db.sa);
    }
    function ib(a, b) {
        var c = this;
        this.g = u.Ga(ib.N);
        var d = u.Ea(this.g);
        this.tp = d.get('ok');
        this.tp.onclick = function () {
            A.i(c.$a);
        };
        this.Il = d.get('replay');
        var e = null != b;
        this.Il.hidden = !e;
        e && (this.Il.onclick = function () {
            ca.Sl(b);
        });
        d.get('reason').textContent = a;
    }
    function jb(a) {
        var b = this;
        this.g = u.Ga(jb.N);
        var c = u.Ea(this.g);
        this.sh = c.get('cancel');
        this.Sj = c.get('create');
        this.Ze = c.get('name');
        this.gl = c.get('pass');
        this.Zh = c.get('max-pl');
        this.vm = c.get('unlisted');
        this.Ze.maxLength = 40;
        this.Ze.value = a;
        this.Ze.oninput = function () {
            b.C();
        };
        this.gl.maxLength = 30;
        this.vm.onclick = function () {
            b.Bj(!b.wm);
        };
        this.sh.onclick = function () {
            A.i(b.ai);
        };
        this.Sj.onclick = function () {
            if (b.Dc()) {
                var a = b.gl.value;
                '' == a && (a = null);
                y.i(b.Bp, {
                    name: b.Ze.value,
                    password: a,
                    ls: b.Zh.selectedIndex + 2,
                    Fs: b.wm
                });
            }
        };
        for (a = 2; 21 > a;)
            c = window.document.createElement('option'), c.textContent = '' + a++, this.Zh.appendChild(c);
        this.Zh.selectedIndex = 10;
        this.Bj(!1);
        this.C();
    }
    function kb() {
        this.g = u.Ga(kb.N);
        var a = u.Ea(this.g);
        this.dc = a.get('log');
        this.sh = a.get('cancel');
    }
    function lb(a) {
        function b() {
            c.Dc() && null != c.Zk && c.Zk(c.Bb.value);
        }
        var c = this;
        this.g = u.Ga(lb.N);
        var d = u.Ea(this.g);
        this.Bb = d.get('input');
        this.$e = d.get('ok');
        this.Bb.maxLength = 25;
        this.Bb.value = a;
        this.Bb.oninput = function () {
            c.C();
        };
        this.Bb.onkeydown = function (a) {
            13 == a.keyCode && b();
        };
        this.$e.onclick = b;
        this.C();
    }
    function mb(a, b) {
        this.Dj = [];
        this.Dq = /[#@][^\s@#]*$/;
        this.Lb = a;
        this.Jp = b;
        a.hidden = !0;
    }
    function Ea() {
        function a() {
            null != b.bl && '' != b.fb.value && b.bl(b.fb.value);
            b.fb.value = '';
            b.fb.blur();
        }
        var b = this;
        this.g = u.Ga(Ea.N);
        var c = u.Ea(this.g);
        this.dc = c.get('log');
        this.tg = Ca.$f(this.dc);
        this.fb = c.get('input');
        this.fb.maxLength = 140;
        c.get('send').onclick = a;
        this.Bc = new mb(c.get('autocompletebox'), function (a, c) {
            b.fb.value = a;
            b.fb.setSelectionRange(c, c);
        });
        this.fb.onkeydown = function (c) {
            switch (c.keyCode) {
            case 9:
                b.Bc.Lb.hidden || (b.Bc.io(), c.preventDefault());
                break;
            case 13:
                a();
                break;
            case 27:
                b.Bc.Lb.hidden ? (b.fb.value = '', b.fb.blur()) : b.Bc.Oh();
                break;
            case 38:
                b.Bc.Mj(-1);
                break;
            case 40:
                b.Bc.Mj(1);
            }
            c.stopPropagation();
        };
        this.fb.onfocus = function () {
            null != b.gg && b.gg(!0);
        };
        this.fb.onblur = function () {
            null != b.gg && b.gg(!1);
            b.Bc.Oh();
        };
        this.fb.oninput = function () {
            b.Bc.An(b.fb.value, b.fb.selectionStart);
        };
    }
    function nb() {
        this.pf = null;
        var a = this;
        this.g = u.Ga(nb.N);
        var b = u.Ea(this.g);
        b.get('cancel').onclick = function () {
            A.i(a.pb);
        };
        this.th = b.get('change');
        this.th.disabled = !0;
        this.th.onclick = function () {
            null != a.pf && a.Tl(a.pf.index);
        };
        b = b.get('list');
        this.ii(b);
        var c = Ca.$f(b);
        window.setTimeout(function () {
            c.update();
        }, 0);
    }
    function Fa() {
        this.Vf = !1;
        this.w = '';
        this.rh = 0;
        this.If = '';
        this.jb = new ka();
        var a = window.document.createElement('canvas');
        a.width = 64;
        a.height = 64;
        this.qb = a.getContext('2d', null);
        this.Ej = this.qb.createPattern(this.qb.canvas, 'no-repeat');
        this.Yn();
    }
    function Tb() {
        this.xc = 0;
        this.Za = [];
        this.vr = new R([
            'Time is',
            'Up!'
        ], 16777215);
        this.Bq = new R([
            'Red is',
            'Victorious!'
        ], 15035990);
        this.Aq = new R([
            'Red',
            'Scores!'
        ], 15035990);
        this.vn = new R([
            'Blue is',
            'Victorious!'
        ], 625603);
        this.un = new R([
            'Blue',
            'Scores!'
        ], 625603);
        this.Wp = new R([
            'Game',
            'Paused'
        ], 16777215);
    }
    function R(a, b) {
        for (var c = [], d = 0; d < a.length;)
            c.push(this.kp(a[d++], b));
        this.Ve = c;
    }
    function M() {
        this.Yc = window.performance.now();
        this.Hg = new Map();
        this.cd = new Map();
        this.xg = 1;
        this.vf = 35;
        this.hf = 0;
        this.jf = 1.5;
        this.cb = new H(0, 0);
        this.zk = !1;
        this.td = new Tb();
        this.sa = window.document.createElement('canvas');
        this.sa.mozOpaque = !0;
        this.c = this.sa.getContext('2d', { alpha: !1 });
        this.Do = this.c.createPattern(n.Co, null);
        this.Pn = this.c.createPattern(n.On, null);
        this.Nn = this.c.createPattern(n.Mn, null);
    }
    function B() {
        this.ud = 0;
        this.v = 32;
        this.h = 63;
        this.m = 1;
        this.a = new H(0, 0);
    }
    function E() {
        this.Fg = this.Gg = this.wa = null;
        this.Uj = 0;
        this.aa = this.W = this.Vd = null;
        this.Cc = 0;
        this.m = 1;
        this.h = 63;
        this.v = 32;
        this.ub = 1 / 0;
        this.Xa = !0;
        this.R = 0;
    }
    function L() {
        this.v = 32;
        this.h = 63;
        this.m = 1;
        this.Ua = 0;
        this.wa = new H(0, 0);
    }
    function Ga() {
        this.hc = -1;
        this.gc = null;
        this.F = [];
    }
    function ob() {
        this.R = 0;
        this.le = 1 / 0;
        this.Gb = this.ec = 100;
        this.Wd = this.Xd = 0;
    }
    function da() {
        this.hc = -1;
        this.gc = null;
        this.fl = 0;
        this.h = this.v = 63;
        this.Ij = 0;
        this.R = 16777215;
        this.Ca = 0.99;
        this.$ = 1;
        this.m = 0.5;
        this.Y = 10;
        this.oa = new H(0, 0);
        this.D = new H(0, 0);
        this.a = new H(0, 0);
    }
    function la() {
        this.ba = 0;
    }
    function La() {
        this.ba = 0;
    }
    function Ma() {
        this.ba = 0;
    }
    function ma() {
        this.ba = 0;
    }
    function pb() {
        this.ba = 0;
    }
    function qb() {
        this.ba = 0;
    }
    function Z() {
        this.Og = !1;
        this.ba = 0;
    }
    function kc() {
    }
    function na() {
        this.ba = 0;
    }
    function Ha() {
        this.ba = 0;
    }
    function Na() {
        this.ba = 0;
    }
    function Oa() {
        this.ba = 0;
    }
    function rb() {
        this.ba = 0;
    }
    function oa() {
        this.ba = 0;
    }
    function pa() {
        this.ba = 0;
    }
    function Pa() {
        this.ba = 0;
    }
    function qa() {
        this.ba = 0;
    }
    function S() {
        this.ba = 0;
    }
    function ra() {
        this.ba = 0;
    }
    function sa() {
        this.ba = 0;
    }
    function ea() {
        this.ba = 0;
    }
    function Qa() {
        this.ba = 0;
    }
    function sb() {
        this.ba = 0;
    }
    function ta() {
        this.ba = 0;
    }
    function fa() {
        this.zc = -1;
        this.Sm = null;
        this.ca = q.Ia;
        this.H = null;
        this.yc = this.Qc = 0;
        this.Wb = !1;
        this.nb = this.V = 0;
        this.w = 'Player';
        this.Sg = this.xb = 0;
        this.Jd = null;
        this.Kd = !1;
        this.Xb = this.Id = null;
        this.Ib = 0;
        this.bb = !1;
    }
    function ga() {
        this.hc = -1;
        this.S = this.gc = null;
        this.yd = 2;
        this.Xc = 0;
        this.ae = 1;
        this.hb = this.Da = 3;
        this.Oc = !1;
        this.K = null;
        this.I = [];
        this.jc = '';
        this.S = h.Ih()[0];
        this.jb = [
            null,
            new ka(),
            new ka()
        ];
        this.jb[1].eb.push(q.da.R);
        this.jb[2].eb.push(q.xa.R);
    }
    function q(a, b, c, d, e, f, g, l) {
        this.ng = null;
        this.Z = a;
        this.R = b;
        this.Ah = c;
        this.Vo = d;
        this.w = e;
        this.$n = f;
        this.v = l;
        this.nm = new ka();
        this.nm.eb.push(b);
    }
    function ka() {
        this.dd = 16777215;
        this.eb = [];
    }
    function h() {
        this.J = [];
        this.U = [];
        this.qa = [];
        this.tc = [];
        this.F = [];
        this.ob = [];
        this.Dd = [];
        this.md = [];
        this.ee = new Eb();
        this.zh = 255;
        this.Ee = this.Xe = 0;
        this.Kf = !0;
        this.mf = !1;
    }
    function Bb(a) {
        this.pp = a;
    }
    function Eb() {
        this.Re = 0;
        this.Y = 15;
        this.v = 0;
        this.oa = new H(0, 0);
        this.$ = this.m = 0.5;
        this.Ca = 0.96;
        this.Be = 0.1;
        this.Se = 0.07;
        this.Te = 0.96;
        this.Qe = 5;
    }
    function tb() {
        this.oe = q.Ia;
        this.aa = new H(0, 0);
        this.W = new H(0, 0);
    }
    function O() {
        this.hc = -1;
        this.gc = null;
        this.Pb = this.Jb = this.Hc = this.Na = 0;
        this.Zd = q.da;
        this.vc = this.Ab = 0;
        this.ta = new Ga();
        this.Da = 0;
        this.hb = 5;
        this.S = null;
    }
    function ua() {
        this.h = this.v = 63;
        this.R = 16777215;
        this.Ca = 0.99;
        this.$ = 1;
        this.m = 0.5;
        this.Y = 10;
        this.oa = new H(0, 0);
        this.D = new H(0, 0);
        this.a = new H(0, 0);
    }
    function Ub(a, b) {
        this.eh = null;
        this.Es = 0.025;
        this.ue = this.ah = this.Cf = 0;
        this.Rg = b.createGain();
        this.Rg.gain.value = 0;
        var c = b.createBufferSource();
        c.buffer = a;
        c.connect(this.Rg);
        c.loop = !0;
        c.start();
    }
    function Vb(a) {
        function b(b) {
            return new Promise(function (d, f) {
                var e = a.file(b).asArrayBuffer();
                return c.c.decodeAudioData(e, d, f);
            });
        }
        var c = this;
        this.c = new AudioContext();
        this.Zf = this.c.createGain();
        this.am(n.A.gm.L() ? 1 : 0);
        this.Zf.connect(this.c.destination);
        this.jo = Promise.all([
            b('sounds/chat.ogg').then(function (a) {
                return c.Nj = a;
            }),
            b('sounds/highlight.wav').then(function (a) {
                return c.vk = a;
            }),
            b('sounds/kick.ogg').then(function (a) {
                return c.Uo = a;
            }),
            b('sounds/goal.ogg').then(function (a) {
                return c.Ao = a;
            }),
            b('sounds/join.ogg').then(function (a) {
                return c.So = a;
            }),
            b('sounds/leave.ogg').then(function (a) {
                return c.Wo = a;
            }),
            b('sounds/crowd.ogg').then(function (a) {
                c.Zn = a;
                c.Tj = new Ub(c.Zn, c.c);
                c.Tj.connect(c.Zf);
            })
        ]);
    }
    function aa() {
    }
    function va() {
    }
    function Fb() {
    }
    function Wb(a) {
        this.Yc = window.performance.now();
        this.sd = this.Ce = 0;
        var b = this;
        this.ya = a;
        this.j = new ja(a.uc);
        var c = new Gb(this.j);
        c.oi(a.T);
        window.document.addEventListener('keydown', G(this, this.Bd));
        window.document.addEventListener('keyup', G(this, this.Cd));
        window.requestAnimationFrame(G(this, this.af));
        this.Eh = window.setInterval(function () {
            b.j.ne.$l(b.sd);
            b.sd = 0;
        }, 1000);
        this.sf(n.A.Tb.L());
        this.j.g.classList.add('replayer');
        this.he = new ha(a);
        this.he.Np = function () {
            c.Gr(a.T);
        };
        this.he.Mp = function () {
            b.j.ke(null == a.T.K);
            c.oi(a.T);
        };
        this.he.al = function () {
            b.j.Eb.Db.Sq();
        };
        this.j.g.appendChild(this.he.g);
    }
    function x() {
    }
    function v() {
    }
    function Xb() {
    }
    function n() {
    }
    function X() {
        this.Wc = new Map();
    }
    function wa(a, b, c, d) {
        this.w = a;
        this.Pr = d;
        this.Wh = b;
        d = null;
        null != b && (d = b.getItem(a));
        this.ym = c(d);
    }
    function Yb() {
    }
    function Zb() {
        function a(a) {
            return new wa(a, e, function (a) {
                if (null == a)
                    return null;
                try {
                    return T.Fh(a);
                } catch (l) {
                    return null;
                }
            }, function (a) {
                if (null == a)
                    return null;
                try {
                    return a.re();
                } catch (l) {
                    return null;
                }
            });
        }
        function b(a) {
            return new wa(a, e, function (a) {
                return null != a ? '0' != a : !0;
            }, function (a) {
                return a ? '1' : '0';
            });
        }
        function c(a, b) {
            return new wa(a, e, function (a) {
                var c = b;
                try {
                    null != a && (c = K.parseInt(a));
                } catch (t) {
                }
                return c;
            }, function (a) {
                return '' + a;
            });
        }
        function d(a, b, c) {
            return new wa(a, e, function (a) {
                return null == a ? b : U.Pc(a, c);
            }, function (a) {
                return a;
            });
        }
        var e = Yb.Gm();
        this.de = d('player_name', '', 25);
        this.Tb = c('view_mode', -1);
        this.Dh = c('fps_limit', 0);
        this.ph = d('avatar', null, 2);
        this.vq = d('rctoken', null, 1024);
        this.om = b('team_colors');
        this.wk = b('show_indicators');
        this.gm = b('sound_main');
        this.Ei = b('sound_chat');
        this.fm = b('sound_highlight');
        this.em = b('sound_crowd');
        this.Cj = d('player_auth_key', null, 1024);
        this.rd = c('extrapolation', 0);
        this.Ml = function (a, b) {
            return new wa(a, e, function (a) {
                var c = b;
                try {
                    null != a && (c = parseFloat(a));
                } catch (t) {
                }
                return c;
            }, function (a) {
                return '' + a;
            });
        }('resolution_scale', 1);
        this.cm = b('show_avatars');
        this.Le = a('geo');
        this.Me = a('geo_override');
        this.rg = function () {
            return new wa('player_keys', e, function (a) {
                if (null == a)
                    return X.Wj();
                try {
                    return X.Fh(a);
                } catch (g) {
                    return X.Wj();
                }
            }, function (a) {
                try {
                    return a.re();
                } catch (g) {
                    return null;
                }
            });
        }();
    }
    function T() {
        this.tb = '';
        this.Ec = this.Gc = 0;
    }
    function Ra() {
        this.Yd = this.Wf = 0;
        window.document.addEventListener('focusout', G(this, this.Xk));
    }
    function Gb(a, b) {
        this.Ph = null;
        this.j = a;
        null != b && (this.Ph = '@' + J.replace(b, ' ', '_'));
    }
    function ca(a) {
        this.Mf = null;
        this.Ek = this.xh = !1;
        this.Yc = window.performance.now();
        this.Ed = null;
        this.Ce = 0;
        this.Cn = new ub(3, 1000);
        this.nb = new Ra();
        this.zg = 'Waiting for link';
        this.vi = this.Vl = !1;
        this.sd = 0;
        var b = this;
        this.uh = new vb(a, function (a) {
            b.j.Pa.Fb(a);
        });
        this.ya = a;
        a.T.bo = function (c) {
            b.Vl != c && (b.Vl = c, c = ta.la(c), a.ra(c));
        };
        this.j = new ja(a.uc);
        this.Gh = new Gb(this.j, a.T.na(a.uc).w);
        this.Gh.oi(a.T);
        this.j.Pa.bl = G(this, this.yp);
        this.j.Pa.gg = G(this, this.xp);
        window.document.addEventListener('keydown', G(this, this.Bd));
        window.document.addEventListener('keyup', G(this, this.Cd));
        window.onbeforeunload = function () {
            return 'Are you sure you want to leave the room?';
        };
        this.nb.lg = function (b) {
            a.ra(b);
        };
        this.j.Va.Tp = function (b) {
            b = ea.la(1, b);
            a.ra(b);
        };
        this.j.Va.Lp = function (b) {
            b = ea.la(0, b);
            a.ra(b);
        };
        this.j.mg = function (b) {
            b = qa.la(b);
            a.ra(b);
        };
        this.j.Va.Qp = function () {
            a.ra(new Ma());
        };
        this.j.Va.Rp = function () {
            a.ra(new La());
        };
        this.j.Va.Ep = function () {
            b.sm();
        };
        this.j.Va.kg = function (b, c) {
            var d = S.la(b, c);
            a.ra(d);
        };
        this.j.Va.ce = G(this, this.Rq);
        this.j.Va.vp = function () {
            a.ra(new Qa());
        };
        this.j.Va.Hp = function () {
            ca.uq(a);
        };
        this.j.Va.Sp = function (b) {
            b = pa.la(b);
            a.ra(b);
        };
        this.j.Va.ef = function (c) {
            var d = a.T.na(c);
            if (null != d) {
                var e = new db(d, b.vi);
                e.pb = function () {
                    b.j.ab(null);
                };
                e.up = function (b, c) {
                    var d = sa.la(b, c);
                    a.ra(d);
                };
                e.ci = function () {
                    b.qr(d);
                };
                b.j.ab(e.g, function () {
                    e.C(a.T, b.vi);
                });
            }
        };
        this.j.Va.Op = function () {
            var a = new bb();
            a.pb = function () {
                b.j.ab(null);
            };
            b.j.ab(a.g, function () {
                a.ir(b.zg);
            });
        };
        this.j.Va.Ip = function () {
            if (null == b.Ed)
                b.ur();
            else {
                var a = b.Ed.stop();
                b.Ed = null;
                ca.Sl(a);
            }
            b.j.Va.mr(null != b.Ed);
        };
        window.requestAnimationFrame(G(this, this.af));
        this.Eh = window.setInterval(function () {
            b.j.ne.$l(b.sd);
            b.sd = 0;
        }, 1000);
        this.Lr = window.setInterval(function () {
            a.C();
        }, 50);
        this.sf();
        var c = n.A.rd.L(), c = -200 > c ? -200 : 200 < c ? 200 : c;
        if (0 != c) {
            var d = n.A.rd.L();
            a.Zl(d);
            this.j.Pa.Fb('Extrapolation set to ' + c + ' msec');
        }
    }
    function Ia() {
    }
    function vb(a, b) {
        this.ya = a;
        this.ha = b;
    }
    function Hb() {
    }
    function ub(a, b) {
        this.Jj = a;
        this.Pi = b;
        this.oc = a;
        this.Ue = window.performance.now();
    }
    function wb() {
    }
    function Cb() {
    }
    function ia() {
    }
    function y() {
    }
    function A() {
    }
    function N() {
    }
    function H(a, b) {
        this.x = a;
        this.y = b;
    }
    function Ib(a) {
        this.Yb = a.slice();
    }
    function Jb(a, b, c) {
        this.Rk = [];
        this.ll = 5;
        this.Fd = -1;
        this.fg = this.Qb = this.Uh = this.nk = 0;
        V.call(this, b);
        a = new F(new DataView(a.buffer), !1);
        if (1212305970 != a.gb())
            throw new p('');
        b = a.gb();
        if (c != b)
            throw new p(new Kb(b));
        this.lf = a.gb();
        c = pako.inflateRaw(a.rb());
        this.Kc = new F(new DataView(c.buffer, c.byteOffset, c.byteLength));
        this.wq(this.Kc);
        c = this.Kc.rb();
        this.Kc = new F(new DataView(c.buffer, c.byteOffset, c.byteLength), !1);
        this.si();
        this.Uh = 0;
        this.uc = -1;
    }
    function Kb(a) {
        this.Hd = a;
    }
    function $b() {
    }
    function ac(a) {
        this.tj = new Map();
        this.zo = new ub(100, 16);
        this.wg = !1;
        this.xb = 0;
        this.pa = a;
        a = w.ga(8);
        a.s(Math.random());
        this.Fe = a.Sb();
    }
    function Lb(a) {
        this.Gj = new Map();
        this.Hb = null;
        this.dg = 32;
        this.Ge = new Map();
        this.ac = [];
        this.ui = 4;
        this.Fn = 600;
        var b = this;
        V.call(this, a.state);
        this.lp = a.fj;
        this.Nr = a.version;
        this.mp = 1;
        this.Fk = this.uc = 0;
        this.Ii = window.performance.now();
        this.$c = new Sa(this.lp, a.iceServers, $b.Bm, a.Ym);
        this.$c.Rj = G(this, this.Go);
        this.$c.Yk = function (a) {
            b.Dp(a);
        };
        this.$c.ig = function (a) {
            y.i(b.ig, a);
        };
        this.$c.df = function (a, d) {
            null != b.df && b.df(a, d);
        };
    }
    function xa(a, b) {
        this.Bi = [];
        this.ni = [];
        this.sg = new Ja();
        this.sp = 1;
        this.pd = this.qm = 0;
        this.Ni = new Mb(50);
        this.qg = new Mb(50);
        this.fn = 1000;
        this.ak = '';
        var c = this;
        V.call(this, b.state);
        this.Sh = b.Hs;
        this.Ie = b.Zr;
        var d = null, d = function (e) {
                c.rf(0);
                var f = w.ga();
                f.Ub(b.version);
                f.Cb(b.password);
                c.pc = new xb(b.fj, b.iceServers, a, $b.Bm, f, b.Ym);
                c.pc.oh = e;
                c.pc.zd = function (a) {
                    c.pc = null;
                    c.pa = a;
                    a.jg = function (a) {
                        a = new F(new DataView(a));
                        c.nq(a);
                    };
                    a.bf = function () {
                        3 != c.pd && y.i(c.cf, Nb.gh('Connection closed'));
                        c.ia();
                    };
                    a = window.setTimeout(function () {
                        y.i(c.cf, Nb.gh('Game state timeout'));
                        c.ia();
                    }, 10000);
                    c.pe = a;
                    c.rf(2);
                };
                c.pc.cl = function () {
                    c.rf(1);
                };
                var g = !1;
                c.pc.Vk = function () {
                    return g = !0;
                };
                c.pc.ad = function (a) {
                    if (!e && 1 == c.pd && g)
                        A.i(c.Kp), d(!0);
                    else {
                        var b = xb.vo(a);
                        switch (a.wb) {
                        case 1:
                            a = Nb.ih(a.code);
                            break;
                        case 2:
                            a = Nb.fh;
                            break;
                        default:
                            a = Nb.gh(b);
                        }
                        y.i(c.cf, a);
                        c.ia(b);
                    }
                };
            };
        d(null != b.Um && b.Um);
    }
    function V(a) {
        this.Oi = new Ja();
        this.se = this.cc = 0;
        this.je = new Ja();
        this.uc = this.bc = this.rd = 0;
        this.Ac = 0.06;
        this.jh = 16.666666666666668;
        this.Df = 120;
        yb.call(this, a);
    }
    function ya() {
    }
    function Ta() {
    }
    function bc(a, b) {
        this.Om = 0;
        this.version = 1;
        this.Zg = 0;
        this.Md = w.ga(1000);
        this.Bf = w.ga(16384);
        var c = this;
        this.version = b;
        var d = this.Zg = a.X;
        this.ej = a;
        a.T.ea(this.Bf);
        a.fc = function (b) {
            var e = a.X;
            c.Bf.kb(e - d);
            d = e;
            c.Bf.Ub(b.P);
            m.ij(b, c.Bf);
        };
        this.Md.Ub(0);
        var e = this.Zg;
        a.T.bm(function (b) {
            var d = a.X;
            c.Md.kb(d - e);
            c.Md.l(b);
            c.Om++;
            e = d;
        });
    }
    function cc() {
    }
    function Mb(a) {
        this.ms = a;
        this.Ya = [];
    }
    function dc() {
    }
    function Ua() {
        this.ba = 0;
    }
    function yb(a) {
        this.X = 0;
        this.T = a;
    }
    function Ja() {
        this.list = [];
    }
    function m() {
        this.ba = 0;
    }
    function lc() {
    }
    function zb() {
    }
    function u() {
    }
    function Db(a, b) {
        this.Ja = a;
        this.value = b;
        a.textContent = '' + b;
    }
    function Da() {
    }
    function mc() {
    }
    function Ca() {
    }
    function Ka() {
    }
    function I() {
    }
    function w(a, b) {
        null == b && (b = !1);
        this.o = a;
        this.Ra = b;
        this.a = 0;
    }
    function F(a, b) {
        null == b && (b = !1);
        this.o = a;
        this.Ra = b;
        this.a = 0;
    }
    function Ob(a) {
        this.gd = null;
        this.zq = 10000;
        this.wd = !0;
        var b = this;
        a.Pj();
        this.Qa = a.Qa;
        this.Tc = a.Tc;
        this.me = a.me;
        this.gd = a.gd;
        this.pm = window.performance.now();
        var c = null, c = function () {
                var a = b.zq - b.wr();
                0 >= a ? b.ia() : (window.clearTimeout(b.rm), a = window.setTimeout(c, a + 1000), b.rm = a);
            };
        c();
        this.Qa.oniceconnectionstatechange = function () {
            var a = b.Qa.iceConnectionState;
            'closed' != a && 'failed' != a || b.ia();
        };
        a = 0;
        for (var d = this.Tc; a < d.length;) {
            var e = d[a];
            ++a;
            e.onmessage = function (a) {
                b.wd && (b.pm = window.performance.now(), null != b.jg && b.jg(a.data));
            };
            e.onclose = function () {
                b.ia();
            };
        }
    }
    function nc() {
    }
    function Sa(a, b, c, d) {
        this.qh = new Set();
        this.Hf = new Set();
        this.yg = !1;
        this.Lc = null;
        this.Z = '';
        this.Vq = 50000;
        this.Uq = 10000;
        this.od = new Map();
        this.sr = a;
        this.Tf = b;
        this.Bn = c;
        this.Bg = d;
        null == this.Bg && (this.Bg = '');
        this.Gi();
    }
    function Va(a, b, c) {
        this.gd = this.pe = null;
        this.me = [];
        this.Xj = 0;
        this.dl = !1;
        this.Sf = [];
        this.Tc = [];
        var d = this;
        this.Qa = new RTCPeerConnection({ iceServers: b }, Va.Rn);
        this.Qh = new Promise(function (a) {
            d.No = a;
        });
        this.Qa.onicecandidate = function (a) {
            null == a.candidate ? d.No(d.Sf) : (a = a.candidate, null != a.candidate && '' != a.candidate && (null != d.hg && d.hg(a), d.Sf.push(a)));
        };
        for (b = 0; b < c.length;)
            this.Wn(c[b++]);
        this.Z = a;
    }
    function xb(a, b, c, d, e, f) {
        this.oh = this.wh = !1;
        var g = this;
        this.pa = new Va(0, b, d);
        this.pa.ad = function () {
            g.Ne(Pb.$m);
        };
        this.pa.zd = function () {
            null != g.zd && g.zd(new Ob(g.pa));
            g.pa = null;
            g.Qj();
        };
        this.pa.bi = function (b) {
            g.er = b;
            g.fa = new WebSocket(a + 'client?id=' + c + (null == f ? '' : '&token=' + f));
            g.fa.binaryType = 'arraybuffer';
            g.fa.onclose = function (a) {
                g.wh || g.Ne(Pb.ih(a.code));
            };
            g.fa.onerror = function () {
                g.wh || g.Ne(Pb.Error);
            };
            g.fa.onmessage = G(g, g.Nh);
            g.fa.onopen = function () {
                null != g.cl && g.cl();
                g.pa.Ji();
                g.zi(g.er, g.pa.Sf, e);
                g.pa.hg = G(g, g.wi);
                g.pa.Qh.then(function () {
                    g.Mc(0, null);
                });
            };
        };
        this.pa.Xn();
    }
    function ec() {
        this.hash = 0;
    }
    function U() {
    }
    function J() {
    }
    function K() {
    }
    function fc() {
    }
    function D() {
    }
    function gc(a, b) {
        this.r = new RegExp(a, b.split('u').join(''));
    }
    function za() {
        return r.Ae(this, '');
    }
    function C(a, b) {
        var c = Object.create(a), d;
        for (d in b)
            c[d] = b[d];
        b.toString !== Object.prototype.toString && (c.toString = b.toString);
        return c;
    }
    function G(a, b) {
        if (null == b)
            return null;
        null == b.lh && (b.lh = rc++);
        var c;
        null == a.bj ? a.bj = {} : c = a.bj[b.lh];
        null == c && (c = b.bind(a), a.bj[b.lh] = c);
        return c;
    }
    var Ab = Ab || {}, Y;
    gc.b = !0;
    gc.prototype = {
        match: function (a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.nc = this.r.exec(a);
            this.r.$g = a;
            return null != this.r.nc;
        },
        Nm: function (a) {
            if (null != this.r.nc && 0 <= a && a < this.r.nc.length)
                return this.r.nc[a];
            throw new p('EReg::matched');
        },
        ks: function () {
            if (null == this.r.nc)
                throw new p('No string matched');
            return {
                jj: this.r.nc.index,
                gs: this.r.nc[0].length
            };
        },
        js: function (a, b, c) {
            null == c && (c = -1);
            if (this.r.global) {
                this.r.lastIndex = b;
                this.r.nc = this.r.exec(0 > c ? a : D.substr(a, 0, b + c));
                if (b = null != this.r.nc)
                    this.r.$g = a;
                return b;
            }
            if (c = this.match(0 > c ? D.substr(a, b, null) : D.substr(a, b, c)))
                this.r.$g = a, this.r.nc.index += b;
            return c;
        },
        f: gc
    };
    D.b = !0;
    D.Zi = function (a, b) {
        var c = a.charCodeAt(b);
        if (c == c)
            return c;
    };
    D.substr = function (a, b, c) {
        if (null == c)
            c = a.length;
        else if (0 > c)
            if (0 == b)
                c = a.length + c;
            else
                return '';
        return a.substr(b, c);
    };
    D.remove = function (a, b) {
        var c = a.indexOf(b);
        if (-1 == c)
            return !1;
        a.splice(c, 1);
        return !0;
    };
    Math.b = !0;
    fc.b = !0;
    fc.Dm = function (a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty, d;
            for (d in a)
                '__id__' != d && 'hx__closures__' != d && c.call(a, d) && b.push(d);
        }
        return b;
    };
    K.b = !0;
    K.xe = function (a) {
        return r.Ae(a, '');
    };
    K.parseInt = function (a) {
        a = parseInt(a, !a || '0' != a[0] || 'x' != a[1] && 'X' != a[1] ? 10 : 16);
        return isNaN(a) ? null : a;
    };
    J.b = !0;
    J.startsWith = function (a, b) {
        return a.length >= b.length ? D.substr(a, 0, b.length) == b : !1;
    };
    J.fs = function (a, b) {
        var c = D.Zi(a, b);
        return 8 < c && 14 > c ? !0 : 32 == c;
    };
    J.Bs = function (a) {
        for (var b = a.length, c = 0; c < b && J.fs(a, b - c - 1);)
            ++c;
        return 0 < c ? D.substr(a, 0, b - c) : a;
    };
    J.yf = function (a) {
        var b, c = '';
        for (b = 2 - a.length; c.length < b;)
            c += '0';
        return c + (null == a ? 'null' : '' + a);
    };
    J.replace = function (a, b, c) {
        return a.split(b).join(c);
    };
    J.Tg = function (a, b) {
        for (var c = ''; c = '0123456789ABCDEF'.charAt(a & 15) + c, a >>>= 4, 0 < a;);
        if (null != b)
            for (; c.length < b;)
                c = '0' + c;
        return c;
    };
    U.b = !0;
    U.Pc = function (a, b) {
        return a.length <= b ? a : D.substr(a, 0, b);
    };
    U.Ur = function (a) {
        for (var b = '', c = 0, d = a.byteLength; c < d;)
            b += J.Tg(a[c++], 2);
        return b;
    };
    ec.b = !0;
    ec.prototype = {
        Tr: function (a) {
            for (var b = 0, c = a.length; b < c;)
                this.hash += a[b++], this.hash += this.hash << 10, this.hash ^= this.hash >>> 6;
        },
        f: ec
    };
    var Pb = Ab['bas.basnet.FailReason'] = {
        Ef: !0,
        kh: [
            'PeerFailed',
            'Rejected',
            'Cancelled',
            'Error'
        ],
        $m: {
            wb: 0,
            mb: 'bas.basnet.FailReason',
            toString: za
        },
        ih: (Y = function (a) {
            return {
                wb: 1,
                code: a,
                mb: 'bas.basnet.FailReason',
                toString: za
            };
        }, Y.ze = ['code'], Y),
        fh: {
            wb: 2,
            mb: 'bas.basnet.FailReason',
            toString: za
        },
        Error: {
            wb: 3,
            mb: 'bas.basnet.FailReason',
            toString: za
        }
    };
    xb.b = !0;
    xb.vo = function (a) {
        switch (a.wb) {
        case 0:
            return 'Failed';
        case 1:
            return pc.description(a.code);
        case 2:
            return '';
        case 3:
            return 'Master connection error';
        }
    };
    xb.prototype = {
        zn: function () {
            this.Ne(Pb.fh);
        },
        Qj: function () {
            null != this.fa && (this.fa.onclose = null, this.fa.onmessage = null, this.fa.onerror = null, this.fa.onopen = null, this.fa.close(), this.fa = null);
            null != this.pa && (this.pa.ia(), this.pa = null);
        },
        Ne: function (a) {
            null != this.ad && this.ad(a);
            this.Qj();
        },
        Nh: function (a) {
            a = new F(new DataView(a.data));
            var b = a.B();
            0 < a.o.byteLength - a.a && (a = new F(new DataView(pako.inflateRaw(a.rb()).buffer), !1));
            switch (b) {
            case 1:
                for (var b = a.ic(), c = a.ug(), d = [], e = 0; e < c.length;)
                    d.push(new RTCIceCandidate(c[e++]));
                this.Mh(b, d, a);
                break;
            case 4:
                this.Lh(new RTCIceCandidate(a.ug()));
            }
        },
        Mh: function (a, b) {
            var c = this;
            this.pa.Ji(this.oh ? 10000 : 4000);
            this.wh = !0;
            null != this.Vk && this.Vk();
            this.pa.Qa.setRemoteDescription(new RTCSessionDescription({
                sdp: a,
                type: 'answer'
            }), function () {
                for (var a = 0; a < b.length;)
                    c.pa.Qa.addIceCandidate(b[a++]);
            }, function () {
                c.Ne(Pb.Error);
            });
        },
        Lh: function (a) {
            this.pa.Qa.addIceCandidate(a);
        },
        Mc: function (a, b) {
            if (null != this.fa) {
                var c = w.ga(32, !1);
                c.l(a);
                null != b && c.Vb(pako.deflateRaw(b.Sb()));
                this.fa.send(c.qe());
            }
        },
        zi: function (a, b, c) {
            var d = w.ga(32, !1);
            d.l(this.oh ? 1 : 0);
            d.mc(a.sdp);
            d.Lg(b);
            null != c && d.Vb(c.Sb());
            this.Mc(1, d);
        },
        wi: function (a) {
            var b = w.ga(32, !1);
            b.Lg(a);
            this.Mc(4, b);
        },
        f: xb
    };
    Va.b = !0;
    Va.prototype = {
        Ji: function (a) {
            null == a && (a = 10000);
            window.clearTimeout(this.pe);
            this.pe = window.setTimeout(G(this, this.Lo), a);
        },
        Vn: function (a, b) {
            var c = this;
            this.Zj(this.Qa.setRemoteDescription(a).then(function () {
                return c.Qa.createAnswer();
            }), b, 500);
        },
        Xn: function () {
            this.Zj(this.Qa.createOffer(), [], 1000);
        },
        Zj: function (a, b, c) {
            var d = this;
            a.then(function (a) {
                return d.Qa.setLocalDescription(a).then(function () {
                    return a;
                });
            }).then(function (a) {
                function e() {
                    return a;
                }
                for (var g = 0; g < b.length;)
                    d.uj(b[g++]);
                return lc.yr(d.Qh, c).then(e, e);
            }).then(function (a) {
                d.bi(a);
            })['catch'](function () {
                d.Rf();
            });
        },
        Wn: function (a) {
            var b = this, c = {
                    id: this.Tc.length,
                    negotiated: !0,
                    ordered: a.hj
                };
            a.reliable || (c.maxRetransmits = 0);
            a = this.Qa.createDataChannel(a.name, c);
            a.binaryType = 'arraybuffer';
            a.onopen = function () {
                for (var a = 0, c = b.Tc; a < c.length;)
                    if ('open' != c[a++].readyState)
                        return;
                null != b.zd && b.zd();
            };
            a.onclose = function () {
                b.Rf();
            };
            a.onmessage = function () {
                b.Rf();
            };
            this.Tc.push(a);
        },
        uj: function (a) {
            var b = this;
            window.setTimeout(function () {
                return b.Qa.addIceCandidate(a);
            }, this.Xj);
        },
        Lo: function () {
            this.Rf();
        },
        Rf: function () {
            null != this.ad && this.ad();
            this.ia();
        },
        ia: function () {
            this.Pj();
            this.Qa.close();
        },
        Pj: function () {
            window.clearTimeout(this.pe);
            this.bi = this.zd = this.hg = this.ad = null;
            this.Qa.onicecandidate = null;
            this.Qa.ondatachannel = null;
            this.Qa.onsignalingstatechange = null;
            this.Qa.oniceconnectionstatechange = null;
            for (var a = 0, b = this.Tc; a < b.length;) {
                var c = b[a];
                ++a;
                c.onopen = null;
                c.onclose = null;
                c.onmessage = null;
            }
        },
        f: Va
    };
    var hc = Ab['bas.basnet.ConnectionRequestResponse'] = {
        Ef: !0,
        kh: [
            'Accept',
            'Reject'
        ],
        Zm: {
            wb: 0,
            mb: 'bas.basnet.ConnectionRequestResponse',
            toString: za
        },
        hh: (Y = function (a) {
            return {
                wb: 1,
                reason: a,
                mb: 'bas.basnet.ConnectionRequestResponse',
                toString: za
            };
        }, Y.ze = ['reason'], Y)
    };
    Sa.b = !0;
    Sa.rk = function (a) {
        try {
            var b = nc.ff(a.candidate);
            if ('srflx' == b.Er)
                return b.Po;
        } catch (c) {
        }
        return null;
    };
    Sa.prototype = {
        ia: function () {
            window.clearTimeout(this.Ol);
            window.clearTimeout(this.ie);
            this.ie = null;
            window.clearInterval(this.kl);
            this.fa.onmessage = null;
            this.fa.onerror = null;
            this.fa.onclose = null;
            this.fa.onopen = null;
            this.fa.close();
            this.fa = null;
            this.lk();
        },
        Ci: function (a) {
            var b = this;
            if (null != this.Lc || null != a) {
                if (null != this.Lc && null != a && this.Lc.byteLength == a.byteLength) {
                    for (var c = new Uint8Array(this.Lc), d = new Uint8Array(a), e = !1, f = 0, g = this.Lc.byteLength; f < g;) {
                        var l = f++;
                        if (c[l] != d[l]) {
                            e = !0;
                            break;
                        }
                    }
                    if (!e)
                        return;
                }
                this.Lc = a.slice(0);
                this.yg = !0;
                null != this.fa && 1 == this.fa.readyState && null == this.ie && (this.yi(), this.ie = window.setTimeout(function () {
                    b.ie = null;
                    1 == b.fa.readyState && b.yg && b.yi();
                }, 10000));
            }
        },
        Gi: function (a) {
            function b(a) {
                a = a.sitekey;
                if (null == a)
                    throw new p(null);
                null != d.df && d.df(a, function (a) {
                    d.Gi(a);
                });
            }
            function c(a) {
                var b = a.url;
                if (null == b)
                    throw new p(null);
                a = a.token;
                if (null == a)
                    throw new p(null);
                d.fa = new WebSocket(b + '?token=' + a);
                d.fa.binaryType = 'arraybuffer';
                d.fa.onopen = function () {
                    d.Ko();
                };
                d.fa.onclose = function (a) {
                    d.Kh(4001 != a.code);
                };
                d.fa.onerror = function () {
                    d.Kh(!0);
                };
                d.fa.onmessage = G(d, d.Nh);
            }
            null == a && (a = '');
            var d = this;
            N.fq(this.sr, 'token=' + this.Bg + '&rcr=' + a, N.cn).then(function (a) {
                switch (a.action) {
                case 'connect':
                    c(a);
                    break;
                case 'recaptcha':
                    b(a);
                }
            })['catch'](function () {
                d.Kh(!0);
            });
        },
        Ko: function () {
            var a = this;
            null != this.Lc && this.yi();
            this.kl = window.setInterval(function () {
                a.xi();
            }, 40000);
        },
        Nh: function (a) {
            a = new F(new DataView(a.data), !1);
            switch (a.B()) {
            case 1:
                this.Mh(a);
                break;
            case 4:
                this.Lh(a);
                break;
            case 5:
                this.Fo(a);
                break;
            case 6:
                this.Io(a);
            }
        },
        Mh: function (a) {
            var b = a.gb(), c = U.Ur(a.rb(a.B())), d, e, f;
            try {
                a = new F(new DataView(pako.inflateRaw(a.rb()).buffer), !1);
                d = 0 != a.B();
                e = a.ic();
                for (var g = a.ug(), l = [], k = 0; k < g.length;)
                    l.push(new RTCIceCandidate(g[k++]));
                f = l;
            } catch (t) {
                this.qf(b, 0);
                return;
            }
            this.Jo(b, c, e, f, a, d);
        },
        Jo: function (a, b, c, d, e, f) {
            var g = this;
            if (16 <= this.od.size)
                this.qf(a, 4104);
            else if (this.qh.has(b))
                this.qf(a, 4102);
            else {
                for (var l = [], k = 0; k < d.length;) {
                    var t = Sa.rk(d[k++]);
                    if (null != t) {
                        if (this.Hf.has(t)) {
                            this.qf(a, 4102);
                            return;
                        }
                        l.push(t);
                    }
                }
                if (null != this.Rj && (k = new F(e.o), k.a = e.a, e = this.Rj(b, k), 1 == e.wb)) {
                    this.qf(a, e.reason);
                    return;
                }
                var h = new Va(a, this.Tf, this.Bn);
                f && (h.Xj = 2500);
                h.me = l;
                h.gd = b;
                this.od.set(a, h);
                h.ad = function () {
                    g.Mc(0, h, null);
                    g.od['delete'](h.Z);
                };
                h.zd = function () {
                    g.od['delete'](h.Z);
                    g.Mc(0, h, null);
                    null != g.Yk && g.Yk(new Ob(h));
                };
                h.bi = function (a) {
                    g.zi(h, a, h.Sf, null);
                    h.Qh.then(function () {
                        g.Mc(0, h, null);
                    });
                    h.hg = function (a) {
                        g.wi(h, a);
                    };
                };
                h.Ji();
                h.Vn(new RTCSessionDescription({
                    sdp: c,
                    type: 'offer'
                }), d);
            }
        },
        Lh: function (a) {
            var b = a.gb(), c;
            try {
                a = new F(new DataView(pako.inflateRaw(a.rb()).buffer), !1), c = new RTCIceCandidate(a.ug());
            } catch (d) {
                return;
            }
            this.Eo(b, c);
        },
        Eo: function (a, b) {
            var c = this.od.get(a);
            if (null != c) {
                var d = Sa.rk(b);
                if (null != d && (c.me.push(d), this.Hf.has(d)))
                    return;
                c.uj(b);
            }
        },
        Fo: function (a) {
            this.Z = a.ge(a.B());
            null != this.ig && this.ig(this.Z);
        },
        Io: function (a) {
            this.Bg = a.ge(a.o.byteLength - a.a);
        },
        Mc: function (a, b, c) {
            if (!b.dl) {
                0 == a && (b.dl = !0);
                b = b.Z;
                var d = w.ga(32, !1);
                d.l(a);
                d.sb(b);
                null != c && d.Vb(pako.deflateRaw(c.Sb()));
                this.fa.send(d.qe());
            }
        },
        qf: function (a, b) {
            var c = w.ga(16, !1);
            c.l(0);
            c.sb(a);
            c.Ub(b);
            this.fa.send(c.qe());
        },
        xi: function () {
            var a = w.ga(1, !1);
            a.l(8);
            this.fa.send(a.qe());
        },
        yi: function () {
            this.yg = !1;
            var a = w.ga(256, !1);
            a.l(7);
            null != this.Lc && a.Kg(this.Lc);
            this.fa.send(a.qe());
        },
        zi: function (a, b, c, d) {
            var e = w.ga(32, !1);
            e.mc(b.sdp);
            e.Lg(c);
            null != d && e.Vb(d.Sb());
            this.Mc(1, a, e);
        },
        wi: function (a, b) {
            var c = w.ga(32, !1);
            c.Lg(b);
            this.Mc(4, a, c);
        },
        lk: function () {
            for (var a = this.od.values(), b = a.next(); !b.done;) {
                var c = b.value, b = a.next();
                c.ia();
            }
            this.od.clear();
        },
        Kh: function (a) {
            var b = this;
            this.lk();
            window.clearTimeout(this.ie);
            this.ie = null;
            this.yg = !1;
            window.clearInterval(this.kl);
            window.clearTimeout(this.Ol);
            a && (this.Ol = window.setTimeout(function () {
                b.Gi();
            }, this.Uq + Math.random() * this.Vq | 0));
        },
        sn: function (a) {
            for (var b = 0, c = a.me; b < c.length;)
                this.Hf.add(c[b++]);
            null != a.gd && this.qh.add(a.gd);
            return {
                Ms: a.me,
                Ks: a.gd
            };
        },
        Td: function () {
            this.Hf.clear();
            this.qh.clear();
        },
        f: Sa
    };
    nc.b = !0;
    nc.ff = function (a) {
        a = a.split(' ');
        if ('typ' != a[6])
            throw new p(null);
        return {
            Er: a[7],
            Po: a[4]
        };
    };
    Ob.b = !0;
    Ob.prototype = {
        wr: function () {
            return window.performance.now() - this.pm;
        },
        Rb: function (a, b) {
            if (this.wd) {
                var c = this.Tc[a];
                if ('open' == c.readyState) {
                    var d = b.Ig();
                    try {
                        c.send(d);
                    } catch (e) {
                        window.console.log(e instanceof p ? e.Ta : e);
                    }
                }
            }
        },
        ia: function () {
            window.clearTimeout(this.rm);
            this.wd && (this.wd = !1, this.Qa.close(), null != this.bf && this.bf());
        },
        f: Ob
    };
    var pc = {
        b: !0,
        description: function (a) {
            switch (a) {
            case 4100:
                return 'The room is full.';
            case 4101:
                return 'Wrong password.';
            case 4102:
                return 'You are banned from this room.';
            case 4103:
                return 'Incompatible game version.';
            default:
                return 'Connection closed (' + a + ')';
            }
        }
    };
    F.b = !0;
    F.ao = function (a, b) {
        var c = a.getUint8(b), d, e, f, g, l, k = b;
        if (0 == (c & 128))
            ++b;
        else if (192 == (c & 224))
            d = a.getUint8(b + 1), c = (c & 31) << 6 | d & 63, b += 2;
        else if (224 == (c & 240))
            d = a.getUint8(b + 1), e = a.getUint8(b + 2), c = (c & 15) << 12 | (d & 63) << 6 | e & 63, b += 3;
        else if (240 == (c & 248))
            d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), c = (c & 7) << 18 | (d & 63) << 12 | (e & 63) << 6 | f & 63, b += 4;
        else if (248 == (c & 252))
            d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), g = a.getUint8(b + 4), c = (c & 3) << 24 | (d & 63) << 18 | (e & 63) << 12 | (f & 63) << 6 | g & 63, b += 5;
        else if (252 == (c & 254))
            d = a.getUint8(b + 1), e = a.getUint8(b + 2), f = a.getUint8(b + 3), g = a.getUint8(b + 4), l = a.getUint8(b + 5), c = (c & 1) << 30 | (d & 63) << 24 | (e & 63) << 18 | (f & 63) << 12 | (g & 63) << 6 | l & 63, b += 6;
        else
            throw new p('Cannot decode UTF8 character at offset ' + b + ': charCode (' + c + ') is invalid');
        return {
            'char': c,
            length: b - k
        };
    };
    F.prototype = {
        rb: function (a) {
            null == a && (a = this.o.byteLength - this.a);
            if (this.a + a > this.o.byteLength)
                throw new p('Read too much');
            var b = new Uint8Array(this.o.buffer, this.o.byteOffset + this.a, a);
            this.a += a;
            return b;
        },
        xl: function (a) {
            var b = this.rb(a);
            a = new ArrayBuffer(a);
            new Uint8Array(a).set(b);
            return a;
        },
        kf: function () {
            return this.o.getInt8(this.a++);
        },
        B: function () {
            return this.o.getUint8(this.a++);
        },
        li: function () {
            var a = this.o.getInt16(this.a, this.Ra);
            this.a += 2;
            return a;
        },
        Ob: function () {
            var a = this.o.getUint16(this.a, this.Ra);
            this.a += 2;
            return a;
        },
        M: function () {
            var a = this.o.getInt32(this.a, this.Ra);
            this.a += 4;
            return a;
        },
        gb: function () {
            var a = this.o.getUint32(this.a, this.Ra);
            this.a += 4;
            return a;
        },
        ki: function () {
            var a = this.o.getFloat32(this.a, this.Ra);
            this.a += 4;
            return a;
        },
        u: function () {
            var a = this.o.getFloat64(this.a, this.Ra);
            this.a += 8;
            return a;
        },
        zb: function () {
            for (var a = this.a, b = 0, c, d = 0; c = this.o.getUint8(a + b), 5 > b && (d |= (c & 127) << 7 * b >>> 0), ++b, 0 != (c & 128););
            this.a += b;
            return d | 0;
        },
        ge: function (a) {
            var b = this.a, c, d = '';
            for (a = b + a; b < a;)
                c = F.ao(this.o, b), b += c.length, d += String.fromCodePoint(c['char']);
            if (b != a)
                throw new p('Actual string length differs from the specified: ' + (b - a) + ' bytes');
            this.a = b;
            return d;
        },
        yb: function () {
            var a = this.zb();
            return 0 >= a ? null : this.ge(a - 1);
        },
        ic: function () {
            return this.ge(this.zb());
        },
        zl: function () {
            return this.ge(this.B());
        },
        ug: function () {
            var a = this.ic();
            return JSON.parse(a);
        },
        f: F
    };
    w.b = !0;
    w.ga = function (a, b) {
        null == b && (b = !1);
        null == a && (a = 16);
        return new w(new DataView(new ArrayBuffer(a)), b);
    };
    w.mo = function (a, b, c) {
        var d = c;
        if (0 > a)
            throw new p('Cannot encode UTF8 character: charCode (' + a + ') is negative');
        if (128 > a)
            b.setUint8(c, a & 127), ++c;
        else if (2048 > a)
            b.setUint8(c, a >> 6 & 31 | 192), b.setUint8(c + 1, a & 63 | 128), c += 2;
        else if (65536 > a)
            b.setUint8(c, a >> 12 & 15 | 224), b.setUint8(c + 1, a >> 6 & 63 | 128), b.setUint8(c + 2, a & 63 | 128), c += 3;
        else if (2097152 > a)
            b.setUint8(c, a >> 18 & 7 | 240), b.setUint8(c + 1, a >> 12 & 63 | 128), b.setUint8(c + 2, a >> 6 & 63 | 128), b.setUint8(c + 3, a & 63 | 128), c += 4;
        else if (67108864 > a)
            b.setUint8(c, a >> 24 & 3 | 248), b.setUint8(c + 1, a >> 18 & 63 | 128), b.setUint8(c + 2, a >> 12 & 63 | 128), b.setUint8(c + 3, a >> 6 & 63 | 128), b.setUint8(c + 4, a & 63 | 128), c += 5;
        else if (-2147483648 > a)
            b.setUint8(c, a >> 30 & 1 | 252), b.setUint8(c + 1, a >> 24 & 63 | 128), b.setUint8(c + 2, a >> 18 & 63 | 128), b.setUint8(c + 3, a >> 12 & 63 | 128), b.setUint8(c + 4, a >> 6 & 63 | 128), b.setUint8(c + 5, a & 63 | 128), c += 6;
        else
            throw new p('Cannot encode UTF8 character: charCode (' + a + ') is too large (>= 0x80000000)');
        return c - d;
    };
    w.xn = function (a) {
        if (0 > a)
            throw new p('Cannot calculate length of UTF8 character: charCode (' + a + ') is negative');
        if (128 > a)
            return 1;
        if (2048 > a)
            return 2;
        if (65536 > a)
            return 3;
        if (2097152 > a)
            return 4;
        if (67108864 > a)
            return 5;
        if (-2147483648 > a)
            return 6;
        throw new p('Cannot calculate length of UTF8 character: charCode (' + a + ') is too large (>= 0x80000000)');
    };
    w.Jf = function (a) {
        for (var b = 0, c = a.length, d = 0; d < c;)
            b += w.xn(D.Zi(a, d++));
        return b;
    };
    w.yn = function (a) {
        a >>>= 0;
        return 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5;
    };
    w.prototype = {
        Ig: function () {
            var a = new ArrayBuffer(this.a), b = new Uint8Array(this.o.buffer, this.o.byteOffset, this.a);
            new Uint8Array(a).set(b);
            return a;
        },
        Sb: function () {
            return new Uint8Array(this.o.buffer, this.o.byteOffset, this.a);
        },
        qe: function () {
            return new DataView(this.o.buffer, this.o.byteOffset, this.a);
        },
        Br: function () {
            return new F(this.qe(), this.Ra);
        },
        rc: function (a) {
            this.o.byteLength < a && this.Tq(2 * this.o.byteLength >= a ? 2 * this.o.byteLength : a);
        },
        Tq: function (a) {
            if (1 > a)
                throw new p('Can\'t resize buffer to a capacity lower than 1');
            if (this.o.byteLength < a) {
                var b = new Uint8Array(this.o.buffer);
                a = new ArrayBuffer(a);
                new Uint8Array(a).set(b);
                this.o = new DataView(a);
            }
        },
        l: function (a) {
            var b = this.a++;
            this.rc(this.a);
            this.o.setUint8(b, a);
        },
        Ui: function (a) {
            var b = this.a;
            this.a += 2;
            this.rc(this.a);
            this.o.setInt16(b, a, this.Ra);
        },
        Ub: function (a) {
            var b = this.a;
            this.a += 2;
            this.rc(this.a);
            this.o.setUint16(b, a, this.Ra);
        },
        O: function (a) {
            var b = this.a;
            this.a += 4;
            this.rc(this.a);
            this.o.setInt32(b, a, this.Ra);
        },
        sb: function (a) {
            var b = this.a;
            this.a += 4;
            this.rc(this.a);
            this.o.setUint32(b, a, this.Ra);
        },
        Ti: function (a) {
            var b = this.a;
            this.a += 4;
            this.rc(this.a);
            this.o.setFloat32(b, a, this.Ra);
        },
        s: function (a) {
            var b = this.a;
            this.a += 8;
            this.rc(this.a);
            this.o.setFloat64(b, a, this.Ra);
        },
        Vb: function (a) {
            var b = this.a;
            this.a += a.byteLength;
            this.rc(this.a);
            new Uint8Array(this.o.buffer, this.o.byteOffset, this.o.byteLength).set(a, b);
        },
        Kg: function (a) {
            this.Vb(new Uint8Array(a));
        },
        mc: function (a) {
            this.kb(w.Jf(a));
            this.Mg(a);
        },
        Cb: function (a) {
            null == a ? this.kb(0) : (this.kb(w.Jf(a) + 1), this.Mg(a));
        },
        zm: function (a) {
            var b = w.Jf(a);
            if (255 < b)
                throw new p(null);
            this.l(b);
            this.Mg(a);
        },
        Lg: function (a) {
            this.mc(JSON.stringify(a));
        },
        Mg: function (a) {
            var b = this.a;
            this.rc(b + w.Jf(a));
            for (var c = a.length, d = 0; d < c;)
                b += w.mo(D.Zi(a, d++), this.o, b);
            this.a = b;
        },
        kb: function (a) {
            var b = this.a;
            a >>>= 0;
            this.rc(b + w.yn(a));
            this.o.setUint8(b, a | 128);
            128 <= a ? (this.o.setUint8(b + 1, a >> 7 | 128), 16384 <= a ? (this.o.setUint8(b + 2, a >> 14 | 128), 2097152 <= a ? (this.o.setUint8(b + 3, a >> 21 | 128), 268435456 <= a ? (this.o.setUint8(b + 4, a >> 28 & 127), a = 5) : (this.o.setUint8(b + 3, this.o.getUint8(b + 3) & 127), a = 4)) : (this.o.setUint8(b + 2, this.o.getUint8(b + 2) & 127), a = 3)) : (this.o.setUint8(b + 1, this.o.getUint8(b + 1) & 127), a = 2)) : (this.o.setUint8(b, this.o.getUint8(b) & 127), a = 1);
            this.a += a;
        },
        f: w
    };
    I.b = !0;
    I.qo = function () {
        try {
            return window.crypto.subtle.generateKey(I.nh, !0, [
                'sign',
                'verify'
            ]).then(function (a) {
                var b = a.privateKey;
                return window.crypto.subtle.exportKey('jwk', b).then(function (a) {
                    var c = a.y, e = a.d, f = new I();
                    f.Vi = a.x;
                    f.Wi = c;
                    f.Vj = e;
                    f.vl = b;
                    return f;
                });
            });
        } catch (a) {
            return Promise.reject(a instanceof p ? a.Ta : a);
        }
    };
    I.po = function (a) {
        a = a.split('.');
        if (4 != a.length || 'idkey' != a[0])
            return Promise.reject('Invalid id format');
        var b = a[1], c = a[2], d = a[3];
        return I.Sr(b, c, d).then(function (a) {
            var e = new I();
            e.Vi = b;
            e.Wi = c;
            e.Vj = d;
            e.vl = a;
            return e;
        });
    };
    I.Mr = function (a, b) {
        try {
            var c = new F(new DataView(a.buffer, a.byteOffset, a.byteLength), !1);
            c.B();
            var d = c.rb(c.Ob()), e = c.rb(), f = new F(new DataView(d.buffer, d.byteOffset, d.byteLength), !1), g = f.ic(), l = f.ic(), k = f.rb();
            if (k.byteLength != b.byteLength)
                return Promise.reject(null);
            for (var c = 0, t = k.byteLength; c < t;) {
                var h = c++;
                if (k[h] != b[h])
                    return Promise.reject(null);
            }
            return I.Rr(g, l).then(function (a) {
                return window.crypto.subtle.verify(I.dm, a, e, d);
            }).then(function (a) {
                if (!a)
                    throw new p(null);
                return g;
            });
        } catch (jc) {
            return Promise.reject(jc instanceof p ? jc.Ta : jc);
        }
    };
    I.Sr = function (a, b, c) {
        try {
            return window.crypto.subtle.importKey('jwk', {
                crv: 'P-256',
                ext: !0,
                key_ops: ['sign'],
                kty: 'EC',
                d: c,
                x: a,
                y: b
            }, I.nh, !0, ['sign']);
        } catch (d) {
            return Promise.reject(d instanceof p ? d.Ta : d);
        }
    };
    I.Rr = function (a, b) {
        try {
            return window.crypto.subtle.importKey('jwk', {
                crv: 'P-256',
                ext: !0,
                key_ops: ['verify'],
                kty: 'EC',
                x: a,
                y: b
            }, I.nh, !0, ['verify']);
        } catch (c) {
            return Promise.reject(c instanceof p ? c.Ta : c);
        }
    };
    I.prototype = {
        Dr: function () {
            return 'idkey.' + this.Vi + '.' + this.Wi + '.' + this.Vj;
        },
        rr: function (a) {
            try {
                var b = w.ga(1024);
                b.l(1);
                var c = b.a;
                b.Ub(0);
                var d = b.a;
                b.mc(this.Vi);
                b.mc(this.Wi);
                b.Vb(a);
                var e = b.a - d;
                b.o.setUint16(c, e, b.Ra);
                var f = new Uint8Array(b.o.buffer, b.o.byteOffset + d, e);
                return window.crypto.subtle.sign(I.dm, this.vl, f).then(function (a) {
                    b.Kg(a);
                    return b.Sb();
                });
            } catch (g) {
                return Promise.reject(g instanceof p ? g.Ta : g);
            }
        },
        f: I
    };
    Ka.b = !0;
    Ka.Yo = function () {
        if (null != Ka.ji)
            return Ka.ji;
        Ka.ji = new Promise(function (a, b) {
            var c = window.grecaptcha;
            null != c ? a(c) : (c = window.document.createElement('script'), c.src = 'https://www.google.com/recaptcha/api.js?onload=___recaptchaload&render=explicit', window.document.head.appendChild(c), window.___recaptchaload = function () {
                a(window.grecaptcha);
            }, c.onerror = function () {
                b(null);
            });
        });
        return Ka.ji;
    };
    Ca.b = !0;
    Ca.$f = function (a) {
        return new PerfectScrollbar(a, { handlers: Ca.Mo });
    };
    mc.b = !0;
    mc.os = function () {
        var a = window;
        a.RTCPeerConnection = a.webkitRTCPeerConnection || a.mozRTCPeerConnection || a.RTCPeerConnection;
        a.RTCIceCandidate = a.webkitRTCIceCandidate || a.mozRTCIceCandidate || a.RTCIceCandidate;
        a.RTCSessionDescription = a.webkitRTCSessionDescription || a.mozRTCSessionDescription || a.RTCSessionDescription;
        var b = new RTCPeerConnection({ iceServers: [] });
        try {
            b.createAnswer()['catch'](function () {
            });
        } catch (e) {
            var a = a.RTCPeerConnection.prototype, c = a.createOffer, d = a.createAnswer;
            a.createOffer = function (a) {
                var b = this;
                return new Promise(function (d, e) {
                    c.call(b, d, e, a);
                });
            };
            a.createAnswer = function (a) {
                var b = this;
                return new Promise(function (c, e) {
                    d.call(b, c, e, a);
                });
            };
        }
    };
    Da.b = !0;
    Da.Wq = function (a, b) {
        Da.Rl(new Blob([a], { type: 'octet/stream' }), b);
    };
    Da.Xq = function (a, b) {
        Da.Rl(new Blob([a], { type: 'text/plain' }), b);
    };
    Da.Rl = function (a, b) {
        var c = window.document.createElement('a');
        c.style.display = 'display: none';
        window.document.body.appendChild(c);
        var d = URL.createObjectURL(a);
        c.href = d;
        c.download = b;
        c.click();
        URL.revokeObjectURL(d);
        c.remove();
    };
    Db.b = !0;
    Db.prototype = {
        set: function (a) {
            this.value != a && (this.value = a, this.Ja.textContent = '' + this.value);
        },
        f: Db
    };
    u.b = !0;
    u.Ea = function (a) {
        var b = new Map(), c = 0;
        for (a = a.querySelectorAll('[data-hook]'); c < a.length;) {
            var d = a[c++];
            b.set(d.getAttribute('data-hook'), d);
        }
        return b;
    };
    u.Ga = function (a, b) {
        null == b && (b = 'div');
        var c = window.document.createElement(b);
        c.innerHTML = a;
        return c.firstElementChild;
    };
    u.we = function (a, b) {
        a.parentElement.replaceChild(b, a);
    };
    u.Af = function (a) {
        for (var b = a.firstChild; null != b;)
            a.removeChild(b), b = a.firstChild;
    };
    zb.b = !0;
    zb.bh = function (a) {
        return new Promise(function (b, c) {
            a.onsuccess = function () {
                b(a.result);
            };
            a.onerror = c;
        });
    };
    lc.b = !0;
    lc.yr = function (a, b) {
        return new Promise(function (c, d) {
            var e = window.setTimeout(function () {
                d('Timed out');
            }, b);
            a.then(function (a) {
                window.clearTimeout(e);
                c(a);
            }, function (a) {
                window.clearTimeout(e);
                d(a);
            });
        });
    };
    m.b = !0;
    m.Fa = function (a) {
        null == a.Aa && (a.Aa = !0);
        null == a.Ba && (a.Ba = !0);
        return a;
    };
    m.Ha = function (a) {
        a.gn = m.wf;
        if (null == a.za)
            throw new p('Class doesn\'t have a config');
        a.prototype.xf = a.za;
        m.Hm.set(m.wf, a);
        m.wf++;
    };
    m.ij = function (a, b) {
        var c = (null == a ? null : r.Em(a)).gn;
        if (null == c)
            throw new p('Tried to pack unregistered action');
        b.l(c);
        a.ua(b);
    };
    m.dh = function (a) {
        var b = a.B(), b = Object.create(m.Hm.get(b).prototype);
        b.ba = 0;
        b.lb = 0;
        b.va(a);
        return b;
    };
    m.prototype = {
        Rm: function () {
            return !0;
        },
        apply: function () {
            throw new p('missing implementation');
        },
        va: function () {
            throw new p('missing implementation');
        },
        ua: function () {
            throw new p('missing implementation');
        },
        f: m
    };
    Ja.b = !0;
    Ja.ns = function (a, b, c) {
        if (0 == a.length)
            for (a = 0; a < b.length;)
                c.push(b[a++]);
        else if (0 == b.length)
            for (b = 0; b < a.length;)
                c.push(a[b++]);
        else
            for (var d = 0, e = a.length, f = 0, g = b.length;;) {
                var l = a[d], k = b[f];
                if (l.lb <= k.lb) {
                    if (c.push(l), ++d, d >= e) {
                        for (; f < g;)
                            c.push(b[f++]);
                        break;
                    }
                } else if (c.push(k), ++f, f >= g) {
                    for (; d < e;)
                        c.push(a[d++]);
                    break;
                }
            }
    };
    Ja.prototype = {
        Im: function (a) {
            for (var b = 0, c = a.lb, d = a.ba, e = 0, f = this.list; e < f.length;) {
                var g = f[e];
                ++e;
                var l = g.lb;
                if (l > c)
                    break;
                if (l == c) {
                    g = g.ba;
                    if (g > d)
                        break;
                    g == d && ++d;
                }
                ++b;
            }
            a.ba = d;
            this.list.splice(b, 0, a);
        },
        xs: function (a) {
            for (var b = 0, c = 0, d = this.list; c < d.length && !(d[c++].lb >= a);)
                ++b;
            this.list.splice(0, b);
        },
        Wr: function (a, b) {
            for (var c = this.list; 0 < c.length;)
                c.pop();
            Ja.ns(a.list, b.list, this.list);
        },
        ys: function (a) {
            for (var b = 0, c = this.list, d = 0, e = c.length; d < e;) {
                var f = c[d++];
                f.te != a && (c[b] = f, ++b);
            }
            for (; c.length > b;)
                c.pop();
        },
        Xr: function (a) {
            for (var b = 0, c = 0, d = this.list; c < d.length && !(d[c++].lb >= a);)
                ++b;
            return b;
        },
        f: Ja
    };
    yb.b = !0;
    yb.prototype = { f: yb };
    Ua.b = !0;
    Ua.ma = m;
    Ua.prototype = C(m.prototype, {
        apply: function (a) {
            a.Ln(this.Pg);
        },
        ua: function (a) {
            a.kb(this.Pg.byteLength);
            a.Kg(this.Pg);
        },
        va: function (a) {
            this.Pg = a.xl(a.zb());
        },
        f: Ua
    });
    dc.b = !0;
    dc.prototype = { f: dc };
    Mb.b = !0;
    Mb.prototype = {
        add: function (a) {
            for (var b = this.Ya.length, c = 0, d = this.Pd = 0; d < b;) {
                var e = d++, f = this.Ya[e];
                f.index++;
                f.weight *= 0.97;
                this.Ya[c].index < f.index && (c = e);
                this.Pd += f.weight;
            }
            b >= this.ms ? (b = this.Ya[c], this.Pd -= b.weight, this.Ya.splice(c, 1)) : b = new cc();
            b.value = a;
            b.weight = 1;
            b.index = 0;
            this.Pd += b.weight;
            for (a = 0; a < this.Ya.length && this.Ya[a].value <= b.value;)
                ++a;
            this.Ya.splice(a, 0, b);
        },
        Yg: function (a) {
            if (0 == this.Ya.length)
                return 0;
            if (1 == this.Ya.length)
                return this.Ya[0].value;
            a *= this.Pd;
            for (var b = this.Ya[0].weight, c = 0; c < this.Ya.length - 1 && !(b >= a);)
                ++c, b += this.Ya[c].weight;
            return this.Ya[c].value;
        },
        max: function () {
            return 0 == this.Ya.length ? 0 : this.Ya[this.Ya.length - 1].value;
        },
        f: Mb
    };
    cc.b = !0;
    cc.prototype = { f: cc };
    bc.b = !0;
    bc.prototype = {
        stop: function () {
            this.ej.fc = null;
            this.ej.T.bm(null);
            this.Md.o.setUint16(0, this.Om, this.Md.Ra);
            this.Md.Vb(this.Bf.Sb());
            var a = pako.deflateRaw(this.Md.Sb()), b = w.ga(a.byteLength + 32);
            b.Mg('HBR2');
            b.sb(this.version);
            b.sb(this.ej.X - this.Zg);
            b.Vb(a);
            return b.Sb();
        },
        f: bc
    };
    Ta.b = !0;
    ya.b = !0;
    V.b = !0;
    V.ma = yb;
    V.prototype = C(yb.prototype, {
        ra: function () {
            throw new p('missing implementation');
        },
        Qf: function () {
            throw new p('missing implementation');
        },
        C: function () {
            throw new p('missing implementation');
        },
        vj: function (a) {
            for (var b = this.je.list, c = 0, d = b.length, e = 0; e < a;) {
                for (++e; c < d;) {
                    var f = b[c];
                    if (f.lb != this.X)
                        break;
                    f.apply(this.T);
                    null != this.fc && this.fc(f);
                    this.cc++;
                    ++c;
                }
                this.T.C(1);
                this.se += this.cc;
                this.cc = 0;
                this.X++;
            }
            for (; c < d;) {
                a = b[c];
                if (a.lb != this.X || a.ba != this.cc)
                    break;
                a.apply(this.T);
                null != this.fc && this.fc(a);
                this.cc++;
                ++c;
            }
            b.splice(0, c);
        },
        Ag: function (a) {
            a.lb == this.X && a.ba <= this.cc ? (a.ba = this.cc++, a.apply(this.T), null != this.fc && this.fc(a)) : this.je.Im(a);
        },
        sk: function (a, b) {
            if (0 >= a)
                return this.T;
            a > this.Df && (a = this.Df);
            ya.zc++;
            var c = this.T.sc(), d;
            null != b ? (this.Oi.Wr(this.je, b), d = this.Oi) : d = this.je;
            d = d.list;
            for (var e = 0, f = d.length, g = this.X, l = a | 0, k = g + l; g <= k;) {
                for (; e < f;) {
                    var t = d[e];
                    if (t.lb > g)
                        break;
                    t.xf.Ba && t.apply(c);
                    ++e;
                }
                c.C(g != k ? 1 : a - l);
                ++g;
            }
            for (d = this.Oi.list; 0 < d.length;)
                d.pop();
            return c;
        },
        fr: function (a) {
            300 < a && (a = 300);
            0 > a && (a = 0);
            this.bc = this.Ac * a | 0;
        },
        Zl: function (a) {
            this.rd = this.Ac * (-200 > a ? -200 : 200 < a ? 200 : a);
        },
        f: V
    });
    var Nb = Ab['bas.marf.net.ConnFailReason'] = {
        Ef: !0,
        kh: [
            'Cancelled',
            'Rejected',
            'Other'
        ],
        fh: {
            wb: 0,
            mb: 'bas.marf.net.ConnFailReason',
            toString: za
        },
        ih: (Y = function (a) {
            return {
                wb: 1,
                reason: a,
                mb: 'bas.marf.net.ConnFailReason',
                toString: za
            };
        }, Y.ze = ['reason'], Y),
        gh: (Y = function (a) {
            return {
                wb: 2,
                description: a,
                mb: 'bas.marf.net.ConnFailReason',
                toString: za
            };
        }, Y.ze = ['description'], Y)
    };
    xa.b = !0;
    xa.vh = function (a) {
        switch (a.wb) {
        case 0:
            return 'Cancelled';
        case 1:
            return pc.description(a.reason);
        case 2:
            return a.description;
        }
    };
    xa.ma = V;
    xa.prototype = C(V.prototype, {
        ia: function (a) {
            null != this.pc && (this.pc.ad = null, this.pc.zn(), this.pc = null);
            window.clearTimeout(this.pe);
            null != this.pa && (this.pa.bf = null, this.pa.ia(), this.pa = null);
            this.ak = null == a ? 'Connection closed' : a;
            this.rf(4);
        },
        rf: function (a) {
            this.pd != a && (this.pd = a, null != this.Ad && this.Ad(a));
        },
        wd: function () {
            return 3 == this.pd;
        },
        C: function () {
            this.wd() && window.performance.now() - this.qm > this.fn && this.xi();
            this.Vc = window.performance.now() * this.Ac + this.Ni.Yg(0.5) - this.X;
            this.Kj();
        },
        Qf: function () {
            return this.wd() ? (0 > this.bc && (this.bc = 0), this.sk(window.performance.now() * this.Ac + this.Ni.Yg(0.5) - this.X + this.bc + this.rd, this.sg)) : this.T;
        },
        Kj: function () {
            0 > this.Vc && (this.Vc = 0);
            this.Vc > this.Df && (this.Vc = this.Df);
        },
        nq: function (a) {
            switch (a.B()) {
            case 0:
                this.kq(a);
                break;
            case 1:
                this.jq(a);
                break;
            case 2:
                this.gq(a);
                break;
            case 3:
                this.pq(a);
                break;
            case 4:
                this.mq(a);
                break;
            case 5:
                this.iq(a);
                break;
            case 6:
                this.oq(a);
            }
        },
        kq: function (a) {
            var b = this;
            a = a.rb(a.zb());
            var c = Promise.resolve(null);
            null != this.Ie && (c = this.Ie.rr(a));
            c['catch'](function () {
                return null;
            }).then(function (a) {
                b.dr(a);
            });
        },
        jq: function (a) {
            a = pako.inflateRaw(a.rb());
            a = new F(new DataView(a.buffer, a.byteOffset, a.byteLength));
            this.uc = a.Ob();
            this.X = a.gb();
            this.se = a.gb();
            this.cc = a.zb();
            this.Vc = 10;
            for (this.T.ja(a); 0 < a.o.byteLength - a.a;)
                this.Ag(this.xm(a));
            window.clearTimeout(this.pe);
            this.rf(3);
        },
        dr: function (a) {
            var b = w.ga();
            b.l(0);
            null != a ? (b.kb(a.byteLength), b.Vb(a)) : b.kb(0);
            b.kb(this.Sh.byteLength);
            b.Kg(this.Sh);
            this.Rb(b);
            this.Sh = null;
        },
        Rb: function (a, b) {
            null == b && (b = 0);
            this.pa.Rb(b, a);
        },
        xm: function (a) {
            var b = a.gb(), c = a.zb(), d = a.Ob(), e = a.gb();
            a = m.dh(a);
            a.P = d;
            a.te = e;
            a.lb = b;
            a.ba = c;
            return a;
        },
        gq: function (a) {
            a = this.xm(a);
            this.Ag(a);
            a.P == this.uc && this.sg.ys(a.te);
            this.wl();
        },
        oq: function (a) {
            a = m.dh(a);
            a.P = 0;
            a.te = 0;
            a.apply(this.T);
            null != this.fc && this.fc(a);
        },
        pq: function (a) {
            var b = a.gb();
            a = a.gb();
            this.ni.push({
                frame: b,
                wf: a
            });
            this.wl();
        },
        wl: function () {
            if (3 == this.pd) {
                for (var a = 0, b = this.ni; a < b.length;) {
                    var c = b[a];
                    ++a;
                    c.frame <= this.X || c.wf == this.se + this.cc + this.je.Xr(c.frame) && this.on(c.frame - this.X);
                }
                for (var a = 0, b = this.ni, c = 0, d = b.length; c < d;) {
                    var e = b[c++];
                    e.frame > this.X && (b[a] = e, ++a);
                }
                for (; b.length > a;)
                    b.pop();
                this.sg.xs(this.X);
            }
        },
        iq: function (a) {
            var b = 0 != a.B(), c = a.ic(), d = '';
            0 < a.o.byteLength - a.a && (d = a.ic());
            a = b ? 'You were banned' : 'You were kicked';
            '' != d && (a += ' by ' + d);
            '' != c && (a += ' (' + c + ')');
            this.ia(a);
        },
        mq: function (a) {
            var b = a.u();
            a = a.u();
            var c = window.performance.now() - a;
            this.Ni.add(b - a * this.Ac);
            this.qg.add(c);
            for (var d = b = 0, e = this.Bi; d < e.length;) {
                var f = e[d];
                ++d;
                if (f > a)
                    break;
                f < a ? y.i(this.$k, -1) : y.i(this.$k, c);
                ++b;
            }
            this.Bi.splice(0, b);
        },
        xi: function () {
            var a = window.performance.now();
            this.qm = a;
            this.Bi.push(a);
            var b = this.qg.Yg(0.5) | 0, c = w.ga();
            c.l(2);
            c.s(a);
            c.kb(b);
            this.Rb(c, 2);
        },
        on: function (a) {
            this.vj(a);
            this.Vc -= a;
            this.Kj();
        },
        ra: function (a) {
            if (3 == this.pd) {
                var b = this.sp++, c = 0;
                0 > this.bc && (this.bc = 0);
                a.xf.Aa && (c = this.X + (this.Vc | 0) + this.bc);
                var d = w.ga();
                d.l(1);
                d.sb(c);
                d.sb(b);
                m.ij(a, d);
                this.Rb(d);
                a.xf.Ba && (a.te = b, a.P = this.uc, a.lb = c, this.sg.Im(a));
            }
        },
        f: xa
    });
    Lb.b = !0;
    Lb.ma = V;
    Lb.prototype = C(V.prototype, {
        ia: function () {
            this.$c.ia();
            for (var a = 0, b = this.ac; a < b.length;) {
                var c = b[a++].pa;
                c.bf = null;
                c.jg = null;
                c.ia();
            }
        },
        lo: function (a, b, c, d) {
            var e = this.Ge.get(a);
            if (null != e) {
                if (d) {
                    var f = this.$c.sn(e.pa);
                    this.Gj.set(a, f);
                }
                a = w.ga();
                a.l(5);
                a.l(d ? 1 : 0);
                a.mc(b);
                null == c && (c = '');
                a.mc(c);
                e.Rb(a);
                e.pa.ia();
            }
        },
        Td: function () {
            this.$c.Td();
            this.Gj.clear();
        },
        Ci: function (a) {
            this.$c.Ci(a);
        },
        ra: function (a) {
            a.P = 0;
            var b = this.X + this.ui + this.bc;
            a.xf.Aa || (b = this.X);
            a.lb = b;
            this.Ag(a);
            this.Ai();
            0 < this.ac.length && this.Cg(this.Xh(a), 1);
        },
        C: function () {
            var a = ((window.performance.now() - this.Ii) * this.Ac | 0) - this.X;
            0 < a && this.vj(a);
            7 <= this.X - this.Gk && this.Ai();
            this.X - this.Fk >= this.Fn && (this.Ai(), this.br());
        },
        Qf: function () {
            0 > this.bc && (this.bc = 0);
            return this.sk((window.performance.now() - this.Ii) * this.Ac - this.X + this.ui + this.bc + this.rd);
        },
        Go: function (a, b) {
            if (this.ac.length >= this.dg)
                return hc.hh(4100);
            try {
                if (b.Ob() != this.Nr)
                    throw new p(null);
            } catch (d) {
                return hc.hh(4103);
            }
            try {
                var c = b.yb();
                if (null != this.Hb && c != this.Hb)
                    throw new p(null);
            } catch (d) {
                return hc.hh(4101);
            }
            return hc.Zm;
        },
        Dp: function (a) {
            var b = this;
            if (this.ac.length >= this.dg)
                a.ia();
            else {
                var c = new ac(a);
                this.ac.push(c);
                a.jg = function (a) {
                    a = new F(new DataView(a));
                    b.hq(a, c);
                };
                a.bf = function () {
                    D.remove(b.ac, c);
                    b.Ge['delete'](c.Z);
                    y.i(b.Ap, c.Z);
                };
                a = w.ga(1 + c.Fe.byteLength);
                a.l(0);
                a.kb(c.Fe.byteLength);
                a.Vb(c.Fe);
                c.Rb(a);
            }
        },
        Xh: function (a) {
            var b = w.ga();
            b.l(2);
            this.el(a, b);
            return b;
        },
        el: function (a, b) {
            b.sb(a.lb);
            b.kb(a.ba);
            b.Ub(a.P);
            b.sb(a.te);
            m.ij(a, b);
        },
        Ai: function () {
            if (!(0 >= this.X - this.Gk) && 0 != this.ac.length) {
                var a = w.ga();
                a.l(3);
                a.sb(this.X);
                a.sb(this.se);
                this.Cg(a, 2);
                this.Gk = this.X;
            }
        },
        Cg: function (a, b) {
            null == b && (b = 0);
            for (var c = 0, d = this.ac; c < d.length;) {
                var e = d[c];
                ++c;
                e.wg && e.Rb(a, b);
            }
        },
        cr: function (a) {
            var b = w.ga();
            b.l(1);
            var c = w.ga();
            c.Ub(a.Z);
            c.sb(this.X);
            c.sb(this.se);
            c.kb(this.cc);
            this.T.ea(c);
            for (var d = this.je.list, e = 0, f = d.length; e < f;)
                this.el(d[e++], c);
            b.Vb(pako.deflateRaw(c.Sb()));
            a.Rb(b);
        },
        br: function () {
            this.Fk = this.X;
            if (0 != this.ac.length) {
                var a = new Ua();
                a.lb = this.X;
                a.ba = this.cc++;
                a.P = 0;
                a.Pg = this.T.so();
                this.Cg(this.Xh(a));
            }
        },
        rq: function (a, b) {
            var c = this, d = a.rb(a.zb()), e = a.rb(a.zb()), f = b.Fe;
            b.Fe = null;
            I.Mr(d, f)['catch'](function () {
                return null;
            }).then(function (a) {
                try {
                    if (-1 != c.ac.indexOf(b)) {
                        b.Is = a;
                        var d = c.mp++;
                        b.Z = d;
                        c.Ge.set(d, b);
                        ia.i(c.zp, d, new F(new DataView(e.buffer, e.byteOffset, e.byteLength), !1));
                        b.wg = !0;
                        c.cr(b);
                    }
                } catch (k) {
                    c.tk(b, k instanceof p ? k.Ta : k);
                }
            });
        },
        hq: function (a, b) {
            this.C();
            try {
                if (!b.zo.tm())
                    throw new p(1);
                var c = a.B();
                if (b.wg)
                    switch (c) {
                    case 1:
                        this.sq(a, b);
                        break;
                    case 2:
                        this.lq(a, b);
                        break;
                    default:
                        throw new p(0);
                    }
                else if (0 == c)
                    this.rq(a, b);
                else
                    throw new p(0);
                if (0 < a.o.byteLength - a.a)
                    throw new p(2);
            } catch (d) {
                this.tk(b, d instanceof p ? d.Ta : d);
            }
        },
        tk: function (a, b) {
            window.console.log(b);
            this.Ge['delete'](a.Z);
            D.remove(this.ac, a);
            a.wg && null != this.Wk && this.Wk(a.Z);
            a.pa.ia();
        },
        lq: function (a, b) {
            var c = a.u();
            b.xb = a.zb();
            var d = w.ga();
            d.l(4);
            d.s((window.performance.now() - this.Ii) * this.Ac + this.ui);
            d.s(c);
            b.Rb(d, 2);
        },
        sq: function (a, b) {
            var c = a.gb(), d = a.gb(), e = m.dh(a), f = e.xf.lj;
            if (null != f) {
                var g = b.tj.get(f);
                null == g && (g = new ub(f.Xi, f.rj), b.tj.set(f, g));
                if (!g.tm())
                    throw new p(3);
            }
            f = this.X;
            g = this.X + 120;
            e.te = d;
            e.P = b.Z;
            e.lb = c < f ? f : c > g ? g : c;
            e.Rm(this.T) && (this.Ag(e), this.Cg(this.Xh(e), 1));
        },
        f: Lb
    });
    ac.b = !0;
    ac.prototype = {
        Rb: function (a, b) {
            null == b && (b = 0);
            this.pa.Rb(b, a);
        },
        f: ac
    };
    $b.b = !0;
    Kb.b = !0;
    Kb.prototype = { f: Kb };
    Jb.b = !0;
    Jb.ma = V;
    Jb.prototype = C(V.prototype, {
        wq: function (a) {
            for (var b = a.Ob(), c = 0, d = 0; d < b;) {
                ++d;
                var c = c + a.zb(), e = a.B();
                this.Rk.push({
                    jj: c / this.lf,
                    kind: e
                });
            }
        },
        yl: function () {
            var a = this.Kc;
            0 < a.o.byteLength - a.a ? (a = this.Kc.zb(), this.fg += a, a = this.Kc.Ob(), this.eg = m.dh(this.Kc), this.eg.P = a) : this.eg = null;
        },
        yo: function () {
            return this.X / this.lf;
        },
        ra: function () {
        },
        Qf: function () {
            this.C();
            ya.zc++;
            var a = this.T.sc();
            a.C(this.nk);
            return a;
        },
        C: function (dt=0) {
            var a = 0, b = dt;
            this.Uh = a;
            0 < this.Fd ? (this.Qb += 10000, this.Qb > this.Fd && (this.Qb = this.Fd, this.Fd = -1)) : this.Qb += b * this.ll;
            a = this.lf * this.jh;
            this.Qb > a && (this.Qb = a);
            b = this.Qb * this.Ac;
            a = b | 0;
            for (this.nk = b - a; this.X < a;) {
                for (; null != this.eg && this.fg == this.X;)
                    b = this.eg, b.apply(this.T), null != this.fc && this.fc(b), this.yl();
                this.X++;
                this.T.C(1);
                this.onTick && this.onTick();
            }
        },
        $q: function (a) {
            this.Fd = a;
            a < this.Qb && this.si();
        },
        si: function () {
            this.fg = 0;
            this.Qb = this.X = this.Kc.a = 0;
            this.T.ja(this.Kc);
            this.yl();
        },
        f: Jb
    });
    Ib.b = !0;
    Ib.prototype = {
        eval: function (a) {
            var b = this.Yb.length - 1;
            if (a <= this.Yb[0])
                return this.Yb[1];
            if (a >= this.Yb[b])
                return this.Yb[b - 2];
            for (var c = 0, b = b / 5 | 0;;) {
                var d = b + c >>> 1;
                a > this.Yb[5 * d] ? c = d + 1 : b = d - 1;
                if (!(c <= b))
                    break;
            }
            c = 5 * b;
            b = this.Yb[c];
            a = (a - b) / (this.Yb[c + 5] - b);
            b = a * a;
            d = b * a;
            return (2 * d - 3 * b + 1) * this.Yb[c + 1] + (d - 2 * b + a) * this.Yb[c + 2] + (-2 * d + 3 * b) * this.Yb[c + 3] + (d - b) * this.Yb[c + 4];
        },
        f: Ib
    };
    H.b = !0;
    H.prototype = { f: H };
    N.b = !0;
    N.Kl = function (a, b, c, d, e) {
        return new Promise(function (f, g) {
            var l = new XMLHttpRequest();
            l.open(b, a);
            l.responseType = c;
            l.onload = function () {
                200 <= l.status && 300 > l.status ? null != l.response ? f(l.response) : g(null) : g('status: ' + l.status);
            };
            l.onerror = function (a) {
                g(a);
            };
            null != e && l.setRequestHeader('Content-type', e);
            l.send(d);
        });
    };
    N.L = function (a, b) {
        return N.Kl(a, 'GET', b, null);
    };
    N.pk = function (a) {
        return N.L(a, 'json').then(function (a) {
            var b = a.error;
            if (null != b)
                throw new p(b);
            return a.data;
        });
    };
    N.eq = function (a, b, c) {
        return N.Kl(a, 'POST', 'json', b, c);
    };
    N.fq = function (a, b, c) {
        return N.eq(a, b, c).then(function (a) {
            var b = a.error;
            if (null != b)
                throw new p(b);
            return a.data;
        });
    };
    A.b = !0;
    A.i = function (a) {
        null != a && a();
    };
    y.b = !0;
    y.i = function (a, b) {
        null != a && a(b);
    };
    ia.b = !0;
    ia.i = function (a, b, c) {
        null != a && a(b, c);
    };
    Cb.b = !0;
    Cb.i = function (a, b, c, d) {
        null != a && a(b, c, d);
    };
    wb.b = !0;
    wb.i = function (a, b, c, d, e) {
        null != a && a(b, c, d, e);
    };
    ub.b = !0;
    ub.prototype = {
        tm: function (a) {
            null == a && (a = 1);
            this.C();
            return a <= this.oc ? (this.oc -= a, !0) : !1;
        },
        xr: function (a) {
            this.C();
            a -= this.oc;
            return 0 >= a ? 0 : this.Ue + a * this.Pi - window.performance.now();
        },
        Sn: function (a, b) {
            var c = this.xr(a);
            this.oc -= a;
            window.setTimeout(b, c | 0);
        },
        C: function () {
            var a = window.performance.now(), b = Math.floor((a - this.Ue) / this.Pi);
            this.Ue += b * this.Pi;
            this.oc += b;
            this.oc >= this.Jj && (this.oc = this.Jj, this.Ue = a);
        },
        f: ub
    };
    Hb.b = !0;
    Hb.ff = function (a) {
        var b = new gc('([^&=]+)=?([^&]*)', 'g');
        a = a.substring(1);
        for (var c = 0, d = new Map(); b.js(a, c);) {
            var c = b.Nm(1), c = decodeURIComponent(c.split('+').join(' ')), e = b.Nm(2);
            d.set(c, decodeURIComponent(e.split('+').join(' ')));
            c = b.ks();
            c = c.jj + c.gs;
        }
        return d;
    };
    Hb.L = function () {
        return Hb.ff(window.top.location.search);
    };
    vb.b = !0;
    vb.Vp = function (a) {
        if (3 > a.length)
            throw new p('Not enough arguments');
        if (7 < a.length)
            throw new p('Too many arguments');
        var b = new Pa(), c = new ka();
        b.Qg = c;
        switch (a[1]) {
        case 'blue':
            c.eb = [q.xa.R];
            b.ca = q.xa;
            break;
        case 'red':
            c.eb = [q.da.R];
            b.ca = q.da;
            break;
        default:
            throw new p('First argument must be either "red" or "blue"');
        }
        if ('clear' == a[2])
            return b;
        c.hd = 256 * K.parseInt(a[2]) / 360 | 0;
        c.dd = K.parseInt('0x' + a[3]);
        if (4 < a.length) {
            c.eb = [];
            for (var d = 4, e = a.length; d < e;)
                c.eb.push(K.parseInt('0x' + a[d++]));
        }
        return b;
    };
    vb.prototype = {
        ff: function (a) {
            var b = this;
            if ('/' != a.charAt(0))
                return !1;
            if (1 == a.length)
                return !0;
            a = J.Bs(D.substr(a, 1, null)).split(' ');
            var c = a[0];
            switch (c) {
            case 'avatar':
                2 == a.length && (this.Yl(a[1]), this.ha('Avatar set'));
                break;
            case 'checksum':
                var d = this.ya.T.S;
                a = d.w;
                d.Oe() ? this.ha('Current stadium is original: "' + a + '"') : (d = J.Tg(d.Oj(), 8), this.ha('Stadium: "' + a + '" (checksum: ' + d + ')'));
                break;
            case 'clear_avatar':
                this.Yl(null);
                this.ha('Avatar cleared');
                break;
            case 'clear_bans':
                null == this.Td ? this.ha('Only the host can clear bans') : (this.Td(), this.ha('All bans have been cleared'));
                break;
            case 'clear_password':
                null == this.Dg ? this.ha('Only the host can change the password') : (this.Dg(null), this.ha('Password cleared'));
                break;
            case 'colors':
                try {
                    d = vb.Vp(a), this.ya.ra(d);
                } catch (f) {
                    a = f instanceof p ? f.Ta : f, 'string' == typeof a && this.ha(a);
                }
                break;
            case 'extrapolation':
                2 == a.length ? (a = K.parseInt(a[1]), null != a && -200 <= a && 200 >= a ? (n.A.rd.Wa(a), this.ya.Zl(a), this.ha('Extrapolation set to ' + a + ' msec')) : this.ha('Extrapolation must be a value between -200 and 50 milliseconds')) : this.ha('Extrapolation requires a value in milliseconds.');
                break;
            case 'handicap':
                2 == a.length ? (a = K.parseInt(a[1]), null != a && 0 <= a && 300 >= a ? (this.ya.fr(a), this.ha('Ping handicap set to ' + a + ' msec')) : this.ha('Ping handicap must be a value between 0 and 300 milliseconds')) : this.ha('Ping handicap requires a value in milliseconds.');
                break;
            case 'kick_ratelimit':
                4 > a.length ? this.ha('Usage: /kick_ratelimit <min> <rate> <burst>') : (d = K.parseInt(a[1]), c = K.parseInt(a[2]), a = K.parseInt(a[3]), null == d || null == c || null == a ? this.ha('Invalid arguments') : this.ya.ra(ma.la(d, c, a)));
                break;
            case 'set_password':
                2 == a.length && (null == this.Dg ? this.ha('Only the host can change the password') : (this.Dg(a[1]), this.ha('Password set')));
                break;
            case 'store':
                var e = this.ya.T.S;
                e.Oe() ? this.ha('Can\'t store default stadium.') : aa.zs().then(function () {
                    return aa.add(e);
                }).then(function () {
                    b.ha('Stadium stored');
                }, function () {
                    b.ha('Couldn\'t store stadium');
                });
                break;
            default:
                this.ha('Unrecognized command: "' + c + '"');
            }
            return !0;
        },
        Yl: function (a) {
            null != a && (a = U.Pc(a, 2));
            n.A.ph.Wa(a);
            this.ya.ra(ra.la(a));
        },
        f: vb
    };
    Ia.b = !0;
    ca.b = !0;
    ca.Sl = function (a) {
        var b = new Date();
        Da.Wq(a, 'HBReplay-' + b.getFullYear() + '-' + J.yf('' + (b.getMonth() + 1)) + '-' + J.yf('' + b.getDate()) + '-' + J.yf('' + b.getHours()) + 'h' + J.yf('' + b.getMinutes()) + 'm.hbr2');
    };
    ca.uq = function (a) {
        for (var b = a.T.I, c = [], d = 0, e = 0, f = 0; f < b.length;) {
            var g = b[f];
            ++f;
            g.ca == q.Ia && c.push(g.V);
            g.ca == q.da ? ++d : g.ca == q.xa && ++e;
        }
        f = c.length;
        0 != f && (b = function () {
            return c.splice(Math.random() * c.length | 0, 1)[0];
        }, e == d ? 2 > f || (a.ra(S.la(b(), q.da)), a.ra(S.la(b(), q.xa))) : (d = e > d ? q.da : q.xa, a.ra(S.la(b(), d))));
    };
    ca.prototype = {
        ur: function () {
            this.Ed = new bc(this.ya, 3);
        },
        qr: function (a) {
            var b = this;
            a = new gb(a);
            a.pb = function () {
                b.j.ab(null);
            };
            a.ci = function (a, d, e) {
                b.ya.ra(Z.la(a, d, e));
                b.j.ab(null);
            };
            this.j.ab(a.g);
        },
        ia: function () {
            window.document.removeEventListener('keydown', G(this, this.Bd));
            window.document.removeEventListener('keyup', G(this, this.Cd));
            window.onbeforeunload = null;
            window.cancelAnimationFrame(this.Ce);
            this.nb.ia();
            window.clearInterval(this.Eh);
            window.clearInterval(this.Lr);
            window.clearTimeout(this.Mf);
        },
        Rq: function (a) {
            for (var b = [], c = 0, d = this.ya.T.I; c < d.length;) {
                var e = d[c];
                ++c;
                e.ca == a && b.push(S.la(e.V, q.Ia));
            }
            for (a = 0; a < b.length;)
                this.ya.ra(b[a++]);
        },
        af: function () {
            this.Ce = window.requestAnimationFrame(G(this, this.af));
            this.nb.C();
            this.ya.C();
            this.Jc();
        },
        Jc: function () {
            var a = window.performance.now();
            1 == n.A.Dh.L() && 28.333333333333336 > a - this.Yc || (this.Yc = a, this.sd++, this.sf(), a = this.ya.T.na(this.ya.uc), null != a && (this.vi = a.bb), this.j.C(this.ya));
        },
        yp: function (a) {
            var b = this;
            this.uh.ff(a) || this.Cn.Sn(1, function () {
                var c = new Na();
                c.Rc = a;
                b.ya.ra(c);
            });
        },
        xp: function (a) {
            var b = this;
            this.xh = a;
            null == this.Mf && (this.Mf = window.setTimeout(function () {
                b.Mf = null;
                b.Wl(b.xh);
            }, 1000), this.Wl(this.xh));
        },
        Wl: function (a) {
            a != this.Ek && (this.ya.ra(na.la(a ? 0 : 1)), this.Ek = a);
        },
        sm: function () {
            if (null != this.ya.T.K) {
                var a = new Oa();
                a.zf = 120 != this.ya.T.K.Na;
                this.ya.ra(a);
            }
        },
        Bd: function (a) {
            switch (a.keyCode) {
            case 9:
            case 13:
                this.j.Pa.fb.focus();
                a.preventDefault();
                break;
            case 27:
                if (this.j.Ro())
                    this.j.ab(null);
                else {
                    var b = this.j;
                    b.ke(!b.Gd);
                }
                a.preventDefault();
                break;
            case 49:
                n.A.Tb.Wa(1);
                break;
            case 50:
                n.A.Tb.Wa(2);
                break;
            case 51:
                n.A.Tb.Wa(3);
                break;
            case 52:
                n.A.Tb.Wa(0);
                break;
            case 80:
                this.sm();
                break;
            default:
                this.nb.Bd(a.code);
            }
        },
        sf: function () {
            var a = n.A.Tb.L(), b = this.j.Eb, c = b.Db;
            c.xg = n.A.Ml.L();
            0 == a ? (b.Eg(!0), c.jf = 1, c.hf = 0, c.vf = 0) : (b.Eg(!1), c.vf = 35, -1 == a ? c.hf = 450 : (c.hf = 0, c.jf = 1 + 0.25 * (a - 1)));
        },
        Cd: function (a) {
            this.nb.Cd(a.code);
        },
        f: ca
    };
    Gb.b = !0;
    Gb.prototype = {
        Qi: function (a) {
            var b = this.j.Pa.Bc, c = [], d = 0;
            for (a = a.I; d < a.length;) {
                var e = a[d];
                ++d;
                c.push({
                    w: e.w,
                    Z: e.V
                });
            }
            b.Dj = c;
        },
        oi: function (a) {
            function b(a) {
                return null == a ? '' : ' by ' + a.w;
            }
            var c = this;
            this.Qi(a);
            a.pl = function (b) {
                c.j.Pa.Fb('' + b.w + ' has joined');
                n.Ma.bd(n.Ma.So);
                c.Qi(a);
            };
            a.ql = function (d, e, f, g) {
                y.i(c.Gp, d.V);
                null == e ? d = '' + d.w + ' has left' : (wb.i(c.Fp, d.V, e, null != g ? g.w : null, f), d = '' + d.w + ' was ' + (f ? 'banned' : 'kicked') + b(g) + ('' != e ? ' (' + e + ')' : ''));
                c.j.Pa.Fb(d);
                n.Ma.bd(n.Ma.Wo);
                c.Qi(a);
            };
            a.nl = function (a, b) {
                var d = null != c.Ph && -1 != b.indexOf(c.Ph);
                c.j.Pa.ha('' + a.w + ': ' + b, d ? 'highlight' : null);
                n.A.fm.L() && d ? n.Ma.bd(n.Ma.vk) : n.A.Ei.L() && n.Ma.bd(n.Ma.Nj);
            };
            a.Pl = function (a, b, f, g) {
                c.j.Pa.hp(a, b, f);
                if (n.A.Ei.L())
                    switch (g) {
                    case 1:
                        n.Ma.bd(n.Ma.Nj);
                        break;
                    case 2:
                        n.Ma.bd(n.Ma.vk);
                    }
            };
            a.hi = function () {
                n.Ma.bd(n.Ma.Uo);
            };
            a.Ki = function (a) {
                n.Ma.bd(n.Ma.Ao);
                var b = c.j.Eb.Db.td;
                b.Oa(a == q.da ? b.Aq : b.un);
            };
            a.Li = function (a) {
                var b = c.j.Eb.Db.td;
                b.Oa(a == q.da ? b.Bq : b.vn);
                c.j.Pa.Fb('' + a.w + ' team won the match');
            };
            a.il = function (a, e, f) {
                e && !f && c.j.Pa.Fb('Game paused' + b(a));
            };
            a.Mi = function () {
                var a = c.j.Eb.Db.td;
                a.Oa(a.vr);
            };
            a.Hi = function (a) {
                c.j.ke(!1);
                c.j.Eb.Db.td.Gn();
                c.j.Pa.Fb('Game started' + b(a));
            };
            a.tf = function (a) {
                null != a && c.j.Pa.Fb('Game stopped' + b(a));
            };
            a.Fi = function (a, e) {
                if (!e.Oe()) {
                    var d = J.Tg(e.Oj(), 8);
                    c.j.Pa.Fb('Stadium "' + e.w + '" (' + d + ') loaded' + b(a));
                }
            };
            a.ol = function (a) {
                c.j.Pa.Fb('' + a.w + ' ' + (a.Kd ? 'has desynchronized' : 'is back in sync'));
            };
            a.tl = function (d, e, f) {
                null != a.K && c.j.Pa.Fb('' + e.w + ' was moved to ' + f.w + b(d));
            };
            a.gi = function (a, e) {
                var d = e.w;
                c.j.Pa.Fb((e.bb ? '' + d + ' was given admin rights' : '' + d + '\'s admin rights were taken away') + b(a));
            };
            a.sl = function (a, b) {
                c.j.Eb.Db.Ho(a, b);
            };
            a.Dk = function (a, e, f, g) {
                c.j.Pa.Fb('Kick Rate Limit set to (min: ' + e + ', rate: ' + f + ', burst: ' + g + ')' + b(a));
            };
        },
        Gr: function (a) {
            a.pl = null;
            a.ql = null;
            a.nl = null;
            a.Pl = null;
            a.hi = null;
            a.Ki = null;
            a.Li = null;
            a.il = null;
            a.Mi = null;
            a.Hi = null;
            a.tf = null;
            a.Fi = null;
            a.ol = null;
            a.tl = null;
            a.gi = null;
            a.sl = null;
            a.Dk = null;
        },
        f: Gb
    };
    Ra.b = !0;
    Ra.Bk = function (a) {
        switch (n.A.rg.L().L(a)) {
        case 'Down':
            return 2;
        case 'Kick':
            return 16;
        case 'Left':
            return 4;
        case 'Right':
            return 8;
        case 'Up':
            return 1;
        default:
            return 0;
        }
    };
    Ra.prototype = {
        ia: function () {
            window.document.removeEventListener('focusout', G(this, this.Xk));
        },
        C: function () {
            var a = this.Yd;
            if (null != this.lg && a != this.Wf) {
                this.Wf = a;
                var b = new Ha();
                b.input = a;
                this.lg(b);
            }
        },
        Bd: function (a) {
            this.Yd |= Ra.Bk(a);
        },
        Cd: function (a) {
            this.Yd &= ~Ra.Bk(a);
        },
        Xk: function () {
            if (null != this.lg && 0 != this.Wf) {
                this.Wf = this.Yd = 0;
                var a = new Ha();
                a.input = 0;
                this.lg(a);
            }
        },
        f: Ra
    };
    T.b = !0;
    T.Fh = function (a) {
        return T.Pf(JSON.parse(a));
    };
    T.Pf = function (a) {
        var b = new T();
        b.Ec = a.lat;
        b.Gc = a.lon;
        b.tb = a.code.toLowerCase();
        return b;
    };
    T.xo = function () {
        // https://www.haxball.com/rs/api/geo
        return Promise.resolve(T.Pf({code: "RU", lat: 55.7522, lon: 37.6156}));
    };
    T.prototype = {
        re: function () {
            return JSON.stringify({
                lat: this.Ec,
                lon: this.Gc,
                code: this.tb
            });
        },
        f: T
    };
    Zb.b = !0;
    Zb.prototype = {
        Jh: function () {
            return null != this.Me.L() ? this.Me.L() : null != this.Le.L() ? this.Le.L() : new T();
        },
        f: Zb
    };
    Yb.b = !0;
    Yb.Gm = function () {
        try {
            var a = window.localStorage;
            a.getItem('');
            if (0 == a.length) {
                var b = '_hx_' + Math.random();
                a.setItem(b, b);
                a.removeItem(b);
            }
            return a;
        } catch (c) {
            return null;
        }
    };
    wa.b = !0;
    wa.prototype = {
        L: function () {
            return this.ym;
        },
        Wa: function (a) {
            this.ym = a;
            if (null != this.Wh)
                try {
                    var b = this.Pr(a);
                    null == b ? this.Wh.removeItem(this.w) : this.Wh.setItem(this.w, b);
                } catch (c) {
                }
        },
        f: wa
    };
    X.b = !0;
    X.Pf = function (a) {
        for (var b = new X(), c = fc.Dm(a), d = 0; d < c.length;) {
            var e = c[d];
            ++d;
            b.Wc.set(e, a[e]);
        }
        return b;
    };
    X.Fh = function (a) {
        return X.Pf(JSON.parse(a));
    };
    X.Wj = function () {
        var a = new X();
        a.Oa('ArrowUp', 'Up');
        a.Oa('KeyW', 'Up');
        a.Oa('ArrowDown', 'Down');
        a.Oa('KeyS', 'Down');
        a.Oa('ArrowLeft', 'Left');
        a.Oa('KeyA', 'Left');
        a.Oa('ArrowRight', 'Right');
        a.Oa('KeyD', 'Right');
        a.Oa('KeyX', 'Kick');
        a.Oa('Space', 'Kick');
        a.Oa('ControlLeft', 'Kick');
        a.Oa('ControlRight', 'Kick');
        a.Oa('ShiftLeft', 'Kick');
        a.Oa('ShiftRight', 'Kick');
        a.Oa('Numpad0', 'Kick');
        return a;
    };
    X.prototype = {
        Oa: function (a, b) {
            this.Wc.set(a, b);
        },
        L: function (a) {
            return this.Wc.get(a);
        },
        Eq: function (a) {
            this.Wc['delete'](a);
        },
        wo: function (a) {
            for (var b = [], c = this.Wc.keys(), d = c.next(); !d.done;) {
                var e = d.value, d = c.next();
                this.Wc.get(e) == a && b.push(e);
            }
            return b;
        },
        re: function () {
            for (var a = {}, b = this.Wc.keys(), c = b.next(); !c.done;) {
                var d = c.value, c = b.next();
                a[d] = this.Wc.get(d);
            }
            return JSON.stringify(a);
        },
        f: X
    };
    n.b = !0;
    Xb.b = !0;
    Xb.prototype = { f: Xb };
    v.b = !0;
    v.ip = function () {
        mc.os();
        x.cj(function () {
            v.fk(v.qq);
        });
        v.Zo();
    };
    v.Zo = function () {
        var a = n.A.Cj.L();
        if (null == a)
            I.qo().then(function (a) {
                v.Ie = a;
                n.A.Cj.Wa(a.Dr());
            })['catch'](function () {
                return {};
            });
        else
            I.po(a).then(function (a) {
                return v.Ie = a;
            })['catch'](function () {
                return {};
            });
    };
    v.to = function () {
        var a = Yb.Gm();
        return null != a ? null != a.getItem('crappy_router') : !1;
    };
    v.fk = function (a) {
        var b = new lb(n.A.de.L());
        b.Zk = function (b) {
            n.A.de.Wa(b);
            n.Ma.Nl();
            a();
        };
        x.Sa(b.g);
        b.Bb.focus();
    };
    v.gk = function (a, b) {
        var c = new P(a);
        c.$a = b;
        x.Sa(c.g);
    };
    v.qq = function () {
        var a = Hb.L(), b = a.get('c'), c = a.get('p');
        a.get('v');
        null != b ? null != c ? v.Bh(b) : v.Nf(b) : v.Mb();
    };
    v.Mb = function () {
        var a = new Ba(n.A.Jh());
        x.Sa(a.Ja);
        a.Pm = function (b) {
            if (9 != b.vd.Hd) {
                var c;
                9 > b.vd.Hd ? (b = 'Old version room', c = 'The room is running an older version, an update must have happened recently.') : (b = 'New version', c = 'The room is running a new version of haxball, refresh the site to update.');
                var d = new W(b, c, ['Ok']);
                x.Sa(d.g);
                d.$a = function () {
                    x.Sa(a.Ja);
                    return d.$a = null;
                };
            } else
                b.vd.Hb ? v.Bh(b.Z) : v.Nf(b.Z);
        };
        a.rs = function () {
            v.fo();
        };
        a.qs = function () {
            v.fk(v.Mb);
        };
        a.ts = function () {
            v.ik();
        };
        a.ss = function (a) {
            v.ho(a);
        };
    };
    v.ik = function () {
        var a = new ba(!0), b = window.document.createElement('div');
        b.className = 'view-wrapper';
        b.appendChild(a.g);
        x.Sa(b);
        a.pb = function () {
            v.Mb();
        };
        a.wp = function () {
            var a = new nb(), b = window.document.createElement('div');
            b.className = 'view-wrapper';
            b.appendChild(a.g);
            x.Sa(b);
            return a.pb = function () {
                v.ik();
            };
        };
    };
    v.Yh = function (a, b) {
        return '' + window.location.origin + '/play?c=' + a + (b ? '&p=1' : '');
    };
    v.fo = function () {
        var a = n.A.de.L(), b = new jb('' + a + '\'s room');
        x.Sa(b.g);
        b.ai = function () {
            v.Mb();
        };
        b.Bp = function (b) {
            function c() {
                if (!b.Fs) {
                    var a = new Fb();
                    a.Hd = 9;
                    a.w = g.jc;
                    a.I = g.I.length;
                    a.We = k.dg + 1;
                    a.tb = f.tb;
                    a.Hb = null != k.Hb;
                    a.Ec = f.Ec;
                    a.Gc = f.Gc;
                    var c = w.ga(16);
                    a.ea(c);
                    a = c.Ig();
                    k.Ci(a);
                }
            }
            x.Sa(new W('Creating room', 'Connecting...', []).g);
            var e = null, f = n.A.Jh(), g = new ga();
            g.jc = b.name;
            var l = new fa();
            l.w = a;
            l.bb = !0;
            l.Jd = f.tb;
            l.Xb = n.A.ph.L();
            g.I.push(l);
            var k = new Lb({
                iceServers: n.Tf,
                fj: n.Gf + 'api/host',
                state: g,
                version: 9
            });
            k.dg = b.ls - 1;
            k.Hb = b.password;
            c();
            var t = new ca(k), h = !1;
            k.df = function (a, b) {
                v.gk(a, function (a) {
                    b(a);
                    x.Sa(t.j.g);
                    return h = !0;
                });
            };
            var m = window.setInterval(function () {
                var a = la.la(k);
                k.ra(a);
            }, 3000);
            k.Wk = function (a) {
                null != g.na(a) && (a = Z.la(a, 'Bad actor', !1), k.ra(a));
            };
            k.zp = function (a, b) {
                var d = b.ic();
                if (25 < d.length)
                    throw new p('name too long');
                var e = b.ic();
                if (3 < e.length)
                    throw new p('country too long');
                var f = b.yb();
                if (null != f && 2 < f.length)
                    throw new p('avatar too long');
                d = oa.la(a, d, e, f);
                k.ra(d);
                c();
            };
            k.Ap = function (a) {
                null != g.na(a) && (a = Z.la(a, null, !1), k.ra(a));
            };
            k.ig = function (a) {
                e = a;
                t.zg = v.Yh(a, null != k.Hb);
                h || (h = !0, x.Sa(t.j.g));
            };
            t.Gh.Fp = function (a, b, c, d) {
                k.lo(a, b, c, d);
            };
            t.Gh.Gp = function () {
                c();
            };
            t.j.be = function () {
                k.ia();
                t.ia();
                v.Mb();
                window.clearInterval(m);
            };
            t.uh.Dg = function (a) {
                k.Hb = a;
                c();
                null != e && (t.zg = v.Yh(e, null != k.Hb));
            };
            t.uh.Td = G(k, k.Td);
        };
    };
    v.Bh = function (a) {
        var b = new Za();
        x.Sa(b.g);
        b.$a = function (b) {
            null == b ? v.Mb() : v.Nf(a, b);
        };
    };
    v.ho = function (a) {
        try {
            var b = new Wb(new Jb(new Uint8Array(a), new ga(), 3));
            b.he.be = function () {
                b.ia();
                v.Mb();
            };
            x.Sa(b.j.g);
        } catch (e) {
            var c = e instanceof p ? e.Ta : e;
            if (c instanceof Kb)
                a = new W('Incompatible replay version', 'The replay file is of a different version', [
                    'Open player',
                    'Cancel'
                ]), x.Sa(a.g), a.$a = function (a) {
                    0 == a ? (a = window.top.location, window.top.open(a.protocol + '//' + a.hostname + (null != a.port ? ':' + a.port : '') + '/replay?v=' + c.Hd, '_self')) : v.Mb();
                };
            else {
                var d = new W('Replay error', 'Couldn\'t load the file.', ['Ok']);
                x.Sa(d.g);
                d.$a = function () {
                    d.$a = null;
                    v.Mb();
                };
            }
        }
    };
    v.Nf = function (a, b) {
        try {
            var c = v.to(), d = new ga(), e = w.ga();
            e.mc(n.A.de.L());
            e.mc(n.A.Jh().tb);
            e.Cb(n.A.ph.L());
            var f = n.Tf, g = n.Qr, l = e.Ig(), k = new xa(a, {
                    iceServers: f,
                    fj: g,
                    state: d,
                    version: 9,
                    Hs: l,
                    password: b,
                    Um: c,
                    Ym: n.A.vq.L(),
                    Zr: v.Ie
                }), t = new kb();
            t.ha('Connecting to master...');
            t.sh.onclick = function () {
                k.Ad = null;
                k.cf = null;
                k.ia();
                v.Mb();
            };
            x.Sa(t.g);
            var h = function (a, b) {
                    var c = new ib(a, b);
                    c.$a = function () {
                        v.Mb();
                    };
                    x.Sa(c.g);
                }, m = function () {
                    var b = new ca(k);
                    k.$k = function (a) {
                        b.j.ne.lr((10 * k.qg.Yg(0.5) | 0) / 10);
                        b.j.ne.jr((10 * k.qg.max() | 0) / 10);
                        b.j.ne.jl.mn(a);
                    };
                    b.zg = v.Yh(a, !1);
                    x.Sa(b.j.g);
                    b.j.be = function () {
                        k.Ad = null;
                        k.ia();
                        b.ia();
                        v.Mb();
                    };
                    k.Ad = function () {
                        k.Ad = null;
                        b.ia();
                        var a = null == b.Ed ? null : b.Ed.stop();
                        h(k.ak, a);
                    };
                };
            k.cf = function (c) {
                k.cf = null;
                k.Ad = null;
                if (1 == c.wb)
                    switch (c.reason) {
                    case 4002:
                        v.gk(n.yq, function () {
                            v.Nf(a, b);
                        });
                        break;
                    case 4101:
                        null == b ? v.Bh(a) : h(xa.vh(c), null);
                        break;
                    default:
                        h(xa.vh(c), null);
                    }
                else
                    h(xa.vh(c), null);
            };
            k.Ad = function (a) {
                switch (a) {
                case 1:
                    t.ha('Connecting to peer...');
                    break;
                case 2:
                    t.ha('Awaiting state...');
                    break;
                case 3:
                    m();
                }
            };
            k.Kp = function () {
                t.ha('Trying reverse connection...');
            };
        } catch (Q) {
            window.console.log(Q instanceof p ? Q.Ta : Q), c = new W('Unexpected Error', '', []), c.He.innerHTML = 'An error ocurred while attempting to join the room.<br><br>This might be caused by a browser extension, try disabling all extensions and refreshing the site.<br><br>The error has been printed to the inspector console.', x.Sa(c.g);
        }
    };
    x.b = !0;
    x.Ug = function (a) {
        return new Promise(function (b, c) {
            var d = window.document.createElement('img');
            d.onload = function () {
                URL.revokeObjectURL(d.src);
                d.onload = null;
                b(d);
            };
            d.onerror = function () {
                URL.revokeObjectURL(d.src);
                c(null);
            };
            return d.src = URL.createObjectURL(new Blob([a], { type: 'image/png' }));
        });
    };
    x.cj = function (a) {
        x.$r(function () {
            kc.cj();
            var b;
            null == n.A.Le.L() ? T.xo().then(function (a) {
                n.A.Le.Wa(a);
            }, function () {
                return {};
            }) : b = Promise.resolve(null);
            return Promise.all([
                N.L('res.dat', 'arraybuffer').then(function (a) {
                    a = new JSZip(a);
                    n.Ma = new Vb(a);
                    return Promise.all([
                        n.Ma.jo,
                        x.Ug(a.file('images/grass.png').asArrayBuffer()).then(function (a) {
                            return n.Co = a;
                        }),
                        x.Ug(a.file('images/concrete.png').asArrayBuffer()).then(function (a) {
                            return n.On = a;
                        }),
                        x.Ug(a.file('images/concrete2.png').asArrayBuffer()).then(function (a) {
                            return n.Mn = a;
                        }),
                        x.Ug(a.file('images/typing.png').asArrayBuffer()).then(function (a) {
                            return n.um = a;
                        })
                    ]);
                }),
                b
            ]).then(function () {
                x.ps(a);
            });
        });
    };
    x.$r = function (a) {
        for (var b = Modernizr, c = 'canvas datachannel dataview es6collections peerconnection promises websockets'.split(' '), d = [], e = 0; e < c.length;) {
            var f = c[e];
            ++e;
            b[f] || d.push(f);
        }
        0 != d.length ? (window.document.body.innerHTML = '', x.Ng = window.document.createElement('div'), window.document.body.appendChild(x.Ng), a = new Wa(d), x.Sa(a.g)) : a();
    };
    x.ps = function (a) {
        window.document.body.innerHTML = '';
        x.Ng = window.document.createElement('div');
        window.document.body.appendChild(x.Ng);
        var b = null, b = function () {
                n.Ma.Nl();
                window.document.removeEventListener('click', b, !0);
            };
        window.document.addEventListener('click', b, !0);
        a();
    };
    x.Sa = function (a) {
        null != x.Mm && x.Mm.remove();
        null != a && (x.Ng.appendChild(a), x.Mm = a);
    };
    Wb.b = !0;
    Wb.prototype = {
        ia: function () {
            window.document.removeEventListener('keydown', G(this, this.Bd));
            window.document.removeEventListener('keyup', G(this, this.Cd));
            window.onbeforeunload = null;
            window.cancelAnimationFrame(this.Ce);
            window.clearInterval(this.Eh);
        },
        af: function () {
            this.Ce = window.requestAnimationFrame(G(this, this.af));
            this.ya.C();
            this.Jc();
        },
        Jc: function () {
            this.he.C();
            var a = window.performance.now();
            1 == n.A.Dh.L() && 28.333333333333336 > a - this.Yc || (this.Yc = a, this.sd++, this.sf(n.A.Tb.L()), 0 < this.ya.Fd || this.j.C(this.ya));
        },
        Bd: function (a) {
            switch (a.keyCode) {
            case 27:
                var b = this.j;
                b.ke(!b.Gd);
                a.preventDefault();
                break;
            case 49:
                n.A.Tb.Wa(1);
                break;
            case 50:
                n.A.Tb.Wa(2);
                break;
            case 51:
                n.A.Tb.Wa(3);
                break;
            case 52:
                n.A.Tb.Wa(0);
            }
        },
        sf: function (a) {
            var b = this.j.Eb;
            0 >= a ? (b.Eg(!0), b.Db.jf = 1, b.Db.vf = 0) : (b.Eg(!1), b.Db.vf = 35, b.Db.jf = 1 + 0.25 * (a - 1));
        },
        Cd: function () {
        },
        f: Wb
    };
    Fb.b = !0;
    Fb.prototype = {
        Lj: function () {
            this.w = U.Pc(this.w, 40);
            this.tb = U.Pc(this.tb, 3);
        },
        ea: function (a) {
            this.Lj();
            a.Ra = !0;
            a.Ub(this.Hd);
            a.zm(this.w);
            a.zm(this.tb);
            a.Ti(this.Ec);
            a.Ti(this.Gc);
            a.l(this.Hb ? 1 : 0);
            a.l(this.We);
            a.l(this.I);
            a.Ra = !1;
        },
        ja: function (a) {
            a.Ra = !0;
            this.Hd = a.Ob();
            this.w = a.zl();
            this.tb = a.zl();
            this.Ec = a.ki();
            this.Gc = a.ki();
            this.Hb = 0 != a.B();
            this.We = a.B();
            this.I = a.B();
            a.Ra = !1;
            if (30 < this.I || 30 < this.We)
                throw new p(null);
            this.Lj();
        },
        f: Fb
    };
    va.b = !0;
    va.parse = function (a) {
        a.B();
        for (var b = []; 0 != a.o.byteLength - a.a;) {
            var c = a.ge(a.Ob()), d = a.xl(a.Ob());
            try {
                var e = new Fb();
                e.ja(new F(new DataView(d), !1));
                var f = new Xb();
                f.vd = e;
                f.Z = c;
                b.push(f);
            } catch (g) {
            }
        }
        return b;
    };
    va.ds = function (a, b, c, d) {
        return Math.acos(Math.sin(a) * Math.sin(c) + Math.cos(a) * Math.cos(c) * Math.cos(b - d));
    };
    va.Cs = function (a, b) {
        for (var c = a.Ec, d = a.Gc, e = 0; e < b.length;) {
            var f = b[e];
            ++e;
            var g = f.vd;
            f.Ke = 6378 * va.ds(0.017453292519943295 * g.Ec, 0.017453292519943295 * g.Gc, 0.017453292519943295 * c, 0.017453292519943295 * d);
            isFinite(f.Ke) || (f.Ke = 22000);
        }
    };
    va.get = function () {
        return N.L(n.Gf + 'api/list', 'arraybuffer').then(function (a) {
            return va.parse(new F(new DataView(a), !1));
        });
    };
    aa.b = !0;
    aa['delete'] = function (a) {
        return null == window.indexedDB ? Promise.reject('IndexedDB not supported by browser.') : new Promise(function (b, c) {
            var d = window.indexedDB.open('stadiums', 1);
            d.onblocked = d.onerror = c;
            d.onupgradeneeded = function (a) {
                var b = d.result;
                b.onerror = c;
                1 > a.oldVersion && (b.createObjectStore('files', { autoIncrement: !0 }), b.createObjectStore('meta', { keyPath: 'id' }));
            };
            d.onsuccess = function () {
                var e = d.result;
                e.onerror = c;
                var f = e.transaction([
                    'meta',
                    'files'
                ], 'readwrite');
                f.onerror = f.onabort = function (a) {
                    c(a);
                    e.close();
                };
                f.oncomplete = function () {
                    b(0);
                    e.close();
                };
                f.objectStore('files')['delete'](a);
                f.objectStore('meta')['delete'](a);
            };
        });
    };
    aa.get = function (a) {
        return null == window.indexedDB ? Promise.reject('IndexedDB not supported by browser.') : new Promise(function (b, c) {
            var d = window.indexedDB.open('stadiums', 1);
            d.onblocked = d.onerror = c;
            d.onupgradeneeded = function (a) {
                var b = d.result;
                b.onerror = c;
                1 > a.oldVersion && (b.createObjectStore('files', { autoIncrement: !0 }), b.createObjectStore('meta', { keyPath: 'id' }));
            };
            d.onsuccess = function () {
                var e = d.result;
                e.onerror = c;
                var f = e.transaction(['files']);
                f.onerror = f.onabort = function (a) {
                    c(a);
                    e.close();
                };
                f.oncomplete = function () {
                    e.close();
                };
                zb.bh(f.objectStore('files').get(a)).then(function (a) {
                    try {
                        var d = new h();
                        d.Hk(a);
                        b(d);
                    } catch (k) {
                        c(k instanceof p ? k.Ta : k);
                    }
                }, c);
            };
        });
    };
    aa.getAll = function () {
        return null == window.indexedDB ? Promise.reject('IndexedDB not supported by browser.') : new Promise(function (a, b) {
            var c = window.indexedDB.open('stadiums', 1);
            c.onblocked = c.onerror = b;
            c.onupgradeneeded = function (a) {
                var d = c.result;
                d.onerror = b;
                1 > a.oldVersion && (d.createObjectStore('files', { autoIncrement: !0 }), d.createObjectStore('meta', { keyPath: 'id' }));
            };
            c.onsuccess = function () {
                var d = c.result;
                d.onerror = b;
                var e = d.transaction(['meta']);
                e.onerror = e.onabort = function (a) {
                    b(a);
                    d.close();
                };
                e.oncomplete = function () {
                    d.close();
                };
                zb.bh(e.objectStore('meta').getAll()).then(a, b);
            };
        });
    };
    aa.zs = function () {
        var a = window.navigator.storage;
        if (null == a || null == a.persist)
            return Promise.resolve(!1);
        try {
            return a.persisted().then(function (b) {
                return b ? !0 : a.persist();
            })['catch'](function () {
                return !1;
            });
        } catch (b) {
            return Promise.resolve(!1);
        }
    };
    aa.add = function (a) {
        return null == window.indexedDB ? Promise.reject('IndexedDB not supported by browser.') : new Promise(function (b, c) {
            var d = window.indexedDB.open('stadiums', 1);
            d.onblocked = d.onerror = c;
            d.onupgradeneeded = function (a) {
                var b = d.result;
                b.onerror = c;
                1 > a.oldVersion && (b.createObjectStore('files', { autoIncrement: !0 }), b.createObjectStore('meta', { keyPath: 'id' }));
            };
            d.onsuccess = function () {
                var e = d.result;
                e.onerror = c;
                var f = e.transaction([
                    'files',
                    'meta'
                ], 'readwrite');
                f.onerror = f.onabort = function (a) {
                    c(a);
                    e.close();
                };
                f.oncomplete = function () {
                    b(0);
                    e.close();
                };
                try {
                    zb.bh(f.objectStore('files').add(a.re())).then(function (b) {
                        b = {
                            name: a.w,
                            id: b
                        };
                        return zb.bh(f.objectStore('meta').add(b));
                    })['catch'](c);
                } catch (g) {
                    c(0);
                }
            };
        });
    };
    Vb.b = !0;
    Vb.prototype = {
        Nl: function () {
            this.c.resume();
        },
        bd: function (a) {
            var b = this.c.createBufferSource();
            b.buffer = a;
            b.connect(this.Zf);
            b.start();
        },
        am: function (a) {
            this.Zf.gain.value = a;
        },
        f: Vb
    };
    Ub.b = !0;
    Ub.prototype = {
        update: function () {
            var a = window.performance.now(), b = a - this.Lm;
            this.Lm = a;
            this.ue += (this.ah - this.ue) * this.Es;
            this.Cf -= b;
            0 >= this.Cf && (this.Cf = this.ah = 0);
            0 >= this.ah && 0.05 > this.ue && (window.clearInterval(this.eh), this.eh = null, this.ue = 0);
            this.Rg.gain.value = n.A.em.L() ? this.ue : 0;
        },
        nj: function (a) {
            var b = this;
            this.ah = a;
            this.Cf = 166.66666666666666;
            null == this.eh && (this.eh = window.setInterval(function () {
                b.update();
            }, 17), this.Lm = window.performance.now());
        },
        connect: function (a) {
            this.Rg.connect(a);
        },
        Gs: function (a) {
            var b = a.K;
            if (null != b)
                if (2 == b.Ab)
                    0 >= b.Na && this.nj(1);
                else if (1 == b.Ab) {
                    var c = b.ta.F[0], d = null, e = null, f = null, g = 0, l = null, k = null, t = null, h = 0, m = q.da.Ah, n = 0;
                    for (a = a.I; n < a.length;) {
                        var p = a[n];
                        ++n;
                        if (null != p.H) {
                            var r = p.H.a, u = c.a, v = r.x - u.x, r = r.y - u.y, v = v * v + r * r;
                            if (p.ca == q.da) {
                                if (null == d || d.a.x * m < p.H.a.x * m)
                                    d = p.H;
                                if (null == e || e.a.x * m > p.H.a.x * m)
                                    e = p.H;
                                if (null == f || v < g)
                                    f = p.H, g = v;
                            } else if (p.ca == q.xa) {
                                if (null == l || l.a.x * m < p.H.a.x * m)
                                    l = p.H;
                                if (null == k || k.a.x * m > p.H.a.x * m)
                                    k = p.H;
                                if (null == t || v < h)
                                    t = p.H, h = v;
                            }
                        }
                    }
                    null != k && null != e && 0 >= b.Na && (f.a.x > k.a.x && c.a.x > k.a.x && 20 < c.a.x && this.nj(0.3), t.a.x < e.a.x && c.a.x < e.a.x && -20 > c.a.x && this.nj(0.3));
                }
        },
        f: Ub
    };
    ua.b = !0;
    ua.prototype = {
        ea: function (a) {
            var b = this.a;
            a.s(b.x);
            a.s(b.y);
            b = this.D;
            a.s(b.x);
            a.s(b.y);
            b = this.oa;
            a.s(b.x);
            a.s(b.y);
            a.s(this.Y);
            a.s(this.m);
            a.s(this.$);
            a.s(this.Ca);
            a.sb(this.R);
            a.O(this.h);
            a.O(this.v);
        },
        ja: function (a) {
            var b = this.a;
            b.x = a.u();
            b.y = a.u();
            b = this.D;
            b.x = a.u();
            b.y = a.u();
            b = this.oa;
            b.x = a.u();
            b.y = a.u();
            this.Y = a.u();
            this.m = a.u();
            this.$ = a.u();
            this.Ca = a.u();
            this.R = a.gb();
            this.h = a.M();
            this.v = a.M();
        },
        jp: function () {
            var a = new da();
            this.xk(a);
            return a;
        },
        xk: function (a) {
            var b = a.a, c = this.a;
            b.x = c.x;
            b.y = c.y;
            b = a.D;
            c = this.D;
            b.x = c.x;
            b.y = c.y;
            b = a.oa;
            c = this.oa;
            b.x = c.x;
            b.y = c.y;
            a.Y = this.Y;
            a.m = this.m;
            a.$ = this.$;
            a.Ca = this.Ca;
            a.R = this.R;
            a.h = this.h;
            a.v = this.v;
        },
        f: ua
    };
    O.b = !0;
    O.Qd = [Ta];
    O.qd = function (a, b) {
        a.Ka = b.Ka.sc();
        a.hb = b.hb;
        a.Da = b.Da;
        a.ta = b.ta.sc();
        a.vc = b.vc;
        a.Ab = b.Ab;
        a.Pb = b.Pb;
        a.Jb = b.Jb;
        a.Hc = b.Hc;
        a.Na = b.Na;
        a.S = b.S;
        a.Zd = b.Zd;
    };
    O.prototype = {
        Oo: function (a) {
            this.Ka = a;
            this.hb = a.hb;
            this.Da = a.Da;
            this.S = a.S;
            this.ta.J = this.S.J;
            this.ta.qa = this.S.qa;
            this.ta.U = this.S.U;
            this.ta.ob = this.S.ob;
            a = 0;
            for (var b = this.S.F; a < b.length;)
                this.ta.F.push(b[a++].jp());
            this.Ck();
        },
        yk: function (a) {
            if (a.ca == q.Ia)
                a.H = null;
            else {
                a.nb = 0;
                var b = a.H;
                null == b && (b = new da(), a.H = b, this.ta.F.push(b));
                var c = this.S.ee;
                b.R = 0;
                b.Y = c.Y;
                b.$ = c.$;
                b.Ca = c.Ca;
                b.m = c.m;
                b.h = 39;
                b.v = a.ca.v | c.v;
                var d = a.ca == q.da ? this.S.Dd : this.S.md;
                0 == d.length ? (b.a.x = a.ca.Ah * this.S.$b, b.a.y = 0) : (a = b.a, d = d[d.length - 1], a.x = d.x, a.y = d.y);
                d = b.D;
                d.x = 0;
                d.y = 0;
                b = b.oa;
                c = c.oa;
                b.x = c.x;
                b.y = c.y;
            }
        },
        C: function (a) {
            if (0 < this.Na)
                120 > this.Na && this.Na--;
            else {
                var b = this.Ka.Js;
                null != b && b();
                for (var b = this.Ka.I, c = 0; c < b.length;) {
                    var d = b[c];
                    ++c;
                    if (null != d.H) {
                        0 == (d.nb & 16) && (d.Wb = !1);
                        var e = this.S.ee;
                        0 < d.Qc && d.Qc--;
                        d.yc < this.Ka.ae && d.yc++;
                        if (d.Wb && 0 >= d.Qc && 0 <= d.yc) {
                            for (var f = !1, g = 0, l = this.ta.F; g < l.length;) {
                                var k = l[g];
                                ++g;
                                if (0 != (k.v & 64) && k != d.H) {
                                    var t = k.a, h = d.H.a, m = t.x - h.x, t = t.y - h.y, h = Math.sqrt(m * m + t * t);
                                    if (4 > h - k.Y - d.H.Y) {
                                        var f = m / h, m = t / h, t = e.Qe, n = h = k.D, k = k.$;
                                        h.x = n.x + f * t * k;
                                        h.y = n.y + m * t * k;
                                        n = d.H;
                                        k = -e.Re;
                                        h = t = n.D;
                                        n = n.$;
                                        t.x = h.x + f * k * n;
                                        t.y = h.y + m * k * n;
                                        f = !0;
                                    }
                                }
                            }
                            f && (null != this.Ka.hi && this.Ka.hi(d), d.Wb = !1, d.Qc = this.Ka.yd, d.yc -= this.Ka.Xc);
                        }
                        f = d.nb;
                        l = g = 0;
                        0 != (f & 1) && --l;
                        0 != (f & 2) && ++l;
                        0 != (f & 4) && --g;
                        0 != (f & 8) && ++g;
                        0 != g && 0 != l && (f = Math.sqrt(g * g + l * l), g /= f, l /= f);
                        f = d.H.D;
                        k = d.Wb ? e.Se : e.Be;
                        f.x += g * k;
                        f.y += l * k;
                        d.H.Ca = d.Wb ? e.Te : e.Ca;
                    }
                }
                c = 0;
                d = this.ta.F;
                e = 0;
                for (g = d.length; e < g;)
                    f = e++, l = d[f], 0 != (l.v & 128) && (O.$j[c] = f, f = O.Uk[c], l = l.a, f.x = l.x, f.y = l.y, ++c);
                this.ta.C(a);
                if (0 == this.Ab) {
                    for (a = 0; a < b.length;)
                        c = b[a], ++a, null != c.H && (c.H.h = 39 | this.Zd.Vo);
                    b = this.ta.F[0].D;
                    0 < b.x * b.x + b.y * b.y && (this.Ab = 1);
                } else if (1 == this.Ab) {
                    this.Hc += 0.016666666666666666;
                    for (a = 0; a < b.length;)
                        d = b[a], ++a, null != d.H && (d.H.h = 39);
                    d = q.Ia;
                    b = this.ta.F;
                    for (a = 0; a < c && (d = a++, d = this.S.Dn(b[O.$j[d]].a, O.Uk[d]), d == q.Ia););
                    d != q.Ia ? (this.Ab = 2, this.vc = 150, this.Zd = d, d == q.da ? this.Jb++ : this.Pb++, null != this.Ka.Ki && this.Ka.Ki(d.ng), null != this.Ka.Jl && this.Ka.Jl(d.Z)) : 0 < this.Da && this.Hc >= 60 * this.Da && this.Pb != this.Jb && (null != this.Ka.Mi && this.Ka.Mi(), this.lm());
                } else if (2 == this.Ab)
                    this.vc--, 0 >= this.vc && (0 < this.hb && (this.Pb >= this.hb || this.Jb >= this.hb) || 0 < this.Da && this.Hc >= 60 * this.Da && this.Pb != this.Jb ? this.lm() : (this.Ck(), null != this.Ka.cq && this.Ka.cq()));
                else if (3 == this.Ab && (this.vc--, 0 >= this.vc && (b = this.Ka, null != b.K))) {
                    b.K = null;
                    a = 0;
                    for (c = b.I; a < c.length;)
                        d = c[a], ++a, d.H = null, d.Ib = 0;
                    null != b.tf && b.tf(null);
                }
            }
        },
        lm: function () {
            this.vc = 300;
            this.Ab = 3;
            null != this.Ka.Li && this.Ka.Li(this.Pb > this.Jb ? q.da : q.xa);
        },
        Ck: function () {
            var a = this.Ka.I;
            this.Ab = 0;
            for (var b = this.S.F, c = this.ta.F, d = 0, e = this.S.mf ? b.length : 1; d < e;) {
                var f = d++;
                b[f].xk(c[f]);
            }
            b = [
                0,
                0,
                0
            ];
            for (c = 0; c < a.length;)
                if (d = a[c], ++c, this.yk(d), e = d.ca, e != q.Ia) {
                    var f = d.H.a, g = this.S, l = b[e.Z], k = e == q.da ? g.Dd : g.md;
                    0 == k.length ? (k = l + 1 >> 1, 0 == (l & 1) && (k = -k), g = g.kc * e.Ah, l = 55 * k) : (l >= k.length && (l = k.length - 1), l = k[l], g = l.x, l = l.y);
                    f.x = g;
                    f.y = l;
                    b[e.Z]++;
                    d.Ib = b[e.Z];
                }
        },
        ea: function (a) {
            this.ta.ea(a);
            a.O(this.vc);
            a.O(this.Ab);
            a.O(this.Pb);
            a.O(this.Jb);
            a.s(this.Hc);
            a.O(this.Na);
            a.l(this.Zd.Z);
        },
        ja: function (a, b) {
            this.ta.ja(a);
            this.vc = a.M();
            this.Ab = a.M();
            this.Pb = a.M();
            this.Jb = a.M();
            this.Hc = a.u();
            this.Na = a.M();
            var c = a.kf();
            this.Zd = 1 == c ? q.da : 2 == c ? q.xa : q.Ia;
            this.Ka = b;
            this.hb = b.hb;
            this.Da = b.Da;
            this.S = b.S;
            this.ta.J = this.S.J;
            this.ta.U = this.S.U;
            this.ta.qa = this.S.qa;
            this.ta.ob = this.S.ob;
        },
        sc: function () {
            var a = ya.zc, b = this.gc;
            this.hc != a && (null == b && (this.gc = b = new O()), this.hc = a, O.qd(b, this));
            return b;
        },
        f: O
    };
    tb.b = !0;
    tb.prototype = {
        ea: function (a) {
            var b = this.W;
            a.s(b.x);
            a.s(b.y);
            b = this.aa;
            a.s(b.x);
            a.s(b.y);
            a.l(this.oe.Z);
        },
        ja: function (a) {
            var b = this.W;
            b.x = a.u();
            b.y = a.u();
            b = this.aa;
            b.x = a.u();
            b.y = a.u();
            a = a.kf();
            this.oe = 1 == a ? q.da : 2 == a ? q.xa : q.Ia;
        },
        f: tb
    };
    Eb.b = !0;
    Eb.prototype = {
        ea: function (a) {
            a.s(this.m);
            a.s(this.$);
            a.s(this.Ca);
            a.s(this.Be);
            a.s(this.Se);
            a.s(this.Te);
            a.s(this.Qe);
            var b = this.oa;
            a.s(b.x);
            a.s(b.y);
            a.O(this.v);
            a.s(this.Y);
            a.s(this.Re);
        },
        ja: function (a) {
            this.m = a.u();
            this.$ = a.u();
            this.Ca = a.u();
            this.Be = a.u();
            this.Se = a.u();
            this.Te = a.u();
            this.Qe = a.u();
            var b = this.oa;
            b.x = a.u();
            b.y = a.u();
            this.v = a.M();
            this.Y = a.u();
            this.Re = a.u();
        },
        f: Eb
    };
    Bb.b = !0;
    Bb.prototype = { f: Bb };
    h.b = !0;
    h.ja = function (a) {
        var b = a.B();
        return 255 == b ? (b = new h(), b.Fr(a), b) : h.Ih()[b];
    };
    h.Ih = function () {
        if (null == h.vb) {
            h.vb = [];
            var a = new h();
            a.Zc('Classic', 420, 200, 370, 170, 64, 75);
            h.vb.push(a);
            a = new h();
            a.Zc('Easy', 420, 200, 370, 170, 90, 75);
            h.vb.push(a);
            a = new h();
            a.Zc('Small', 420, 200, 320, 130, 55, 70);
            h.vb.push(a);
            a = new h();
            a.Zc('Big', 600, 270, 550, 240, 80, 80);
            h.vb.push(a);
            a = new h();
            a.Zc('Rounded', 420, 200, 370, 170, 64, 75, 75);
            h.vb.push(a);
            a = new h();
            a.Mk('Hockey', 420, 204, 398, 182, 68, 120, 75, 100);
            h.vb.push(a);
            a = new h();
            a.Mk('Big Hockey', 600, 270, 550, 240, 90, 160, 75, 150);
            h.vb.push(a);
            a = new h();
            a.Zc('Big Easy', 600, 270, 550, 240, 95, 80);
            h.vb.push(a);
            a = new h();
            a.Zc('Big Rounded', 600, 270, 550, 240, 80, 75, 100);
            h.vb.push(a);
            a = new h();
            a.Zc('Huge', 750, 350, 700, 320, 100, 80);
            h.vb.push(a);
            for (var a = 0, b = h.vb.length; a < b;) {
                var c = a++;
                h.vb[c].zh = c;
            }
        }
        return h.vb;
    };
    h.pn = function (a, b) {
        if (null != a.trait) {
            var c = b[r.G(a.trait, String)];
            if (null != c)
                for (var d = 0, e = fc.Dm(c); d < e.length;) {
                    var f = e[d];
                    ++d;
                    null == a[f] && (a[f] = c[f]);
                }
        }
    };
    h.wn = function (a) {
        if (63 == a)
            return ['all'];
        var b = [];
        0 != (a & 2) && b.push('red');
        0 != (a & 4) && b.push('blue');
        0 != (a & 1) && b.push('ball');
        0 != (a & 8) && b.push('redKO');
        0 != (a & 16) && b.push('blueKO');
        0 != (a & 32) && b.push('wall');
        0 != (a & 64) && b.push('kick');
        0 != (a & 128) && b.push('score');
        0 != (a & 268435456) && b.push('c0');
        0 != (a & 536870912) && b.push('c1');
        0 != (a & 1073741824) && b.push('c2');
        0 != (a & -2147483648) && b.push('c3');
        return b;
    };
    h.Fc = function (a) {
        a = r.G(a, Array);
        for (var b = 0, c = 0; c < a.length;)
            switch (a[c++]) {
            case 'all':
                b |= 63;
                break;
            case 'ball':
                b |= 1;
                break;
            case 'blue':
                b |= 4;
                break;
            case 'blueKO':
                b |= 16;
                break;
            case 'c0':
                b |= 268435456;
                break;
            case 'c1':
                b |= 536870912;
                break;
            case 'c2':
                b |= 1073741824;
                break;
            case 'c3':
                b |= -2147483648;
                break;
            case 'kick':
                b |= 64;
                break;
            case 'red':
                b |= 2;
                break;
            case 'redKO':
                b |= 8;
                break;
            case 'score':
                b |= 128;
                break;
            case 'wall':
                b |= 32;
            }
        return b;
    };
    h.Ic = function (a, b, c, d) {
        c != d && (a[b] = h.wn(c));
    };
    h.og = function (a, b, c) {
        b != c && (a.color = h.Kn(b));
    };
    h.Kn = function (a) {
        a |= 0;
        return 0 > a ? 'transparent' : J.Tg(a);
    };
    h.Yf = function (a) {
        if ('transparent' == a)
            return -1;
        if ('string' == typeof a)
            return K.parseInt('0x' + K.xe(a));
        if (a instanceof Array && null == a.mb)
            return ((a[0] | 0) << 16) + ((a[1] | 0) << 8) + (a[2] | 0);
        throw new p('Bad color');
    };
    h.Or = function (a) {
        var b = {
            x: a.a.x,
            y: a.a.y
        };
        h.ka(b, 'bCoef', a.m, 1);
        h.Ic(b, 'cMask', a.h, 63);
        h.Ic(b, 'cGroup', a.v, 32);
        return b;
    };
    h.fp = function (a) {
        var b = new B();
        b.a.x = r.G(a.x, z);
        b.a.y = r.G(a.y, z);
        var c = a.bCoef;
        null != c && (b.m = r.G(c, z));
        c = a.cMask;
        null != c && (b.h = h.Fc(c));
        a = a.cGroup;
        null != a && (b.v = h.Fc(a));
        return b;
    };
    h.ar = function (a, b) {
        var c = {
            v0: a.W.ud,
            v1: a.aa.ud
        };
        h.ka(c, 'bias', a.Cc, b.Cc);
        h.ka(c, 'bCoef', a.m, b.m);
        var d = a.uo();
        h.ka(c, 'curve', d, 0);
        0 != d && (c.curveF = a.ub);
        h.ka(c, 'vis', a.Xa, b.Xa);
        h.Ic(c, 'cMask', a.h, b.h);
        h.Ic(c, 'cGroup', a.v, b.v);
        h.og(c, a.R, b.R);
        return c;
    };
    h.ep = function (a, b) {
        var c = new E(), d = r.G(a.v1, Qb);
        c.W = b[r.G(a.v0, Qb)];
        c.aa = b[d];
        var d = a.bias, e = a.bCoef, f = a.curve, g = a.curveF, l = a.vis, k = a.cMask, t = a.cGroup, m = a.color;
        null != d && (c.Cc = r.G(d, z));
        null != e && (c.m = r.G(e, z));
        null != g ? c.ub = r.G(g, z) : null != f && c.Nc(r.G(f, z));
        null != l && (c.Xa = r.G(l, oc));
        null != k && (c.h = h.Fc(k));
        null != t && (c.v = h.Fc(t));
        null != m && (c.R = h.Yf(m));
        return c;
    };
    h.To = function (a) {
        var b = {
            d0: a.Wd,
            d1: a.Xd,
            length: a.Gb >= a.ec ? a.Gb : [
                a.Gb,
                a.ec
            ]
        };
        h.og(b, a.R, 0);
        h.ka(b, 'strength', a.le, 1 / 0);
        return b;
    };
    h.ap = function (a, b) {
        var c = new ob(), d = r.G(a.d0, Qb), e = r.G(a.d1, Qb), f = a.color, g = a.strength, l = a.length;
        if (d >= b.length || 0 > d)
            throw new p(null);
        if (e >= b.length || 0 > e)
            throw new p(null);
        c.Wd = d;
        c.Xd = e;
        null == l ? (d = b[d], l = b[e], null == d || null == l ? c.ec = c.Gb = 100 : (e = d.a, l = l.a, d = e.x - l.x, e = e.y - l.y, c.ec = c.Gb = Math.sqrt(d * d + e * e))) : l instanceof Array && null == l.mb ? (c.Gb = r.G(l[0], z), c.ec = r.G(l[1], z)) : c.ec = c.Gb = r.G(l, z);
        c.le = null == g || 'rigid' == g ? 1 / 0 : r.G(g, z);
        null != f && (c.R = h.Yf(f));
        return c;
    };
    h.Yp = function (a) {
        var b = {
            normal: [
                a.wa.x,
                a.wa.y
            ],
            dist: a.Ua
        };
        h.ka(b, 'bCoef', a.m, 1);
        h.Ic(b, 'cMask', a.h, 63);
        h.Ic(b, 'cGroup', a.v, 32);
        return b;
    };
    h.bp = function (a) {
        var b = new L(), c = r.G(a.normal, Array), d = r.G(c[0], z), c = r.G(c[1], z), e = b.wa, f = Math.sqrt(d * d + c * c);
        e.x = d / f;
        e.y = c / f;
        b.Ua = r.G(a.dist, z);
        d = a.bCoef;
        c = a.cMask;
        a = a.cGroup;
        null != d && (b.m = r.G(d, z));
        null != c && (b.h = h.Fc(c));
        null != a && (b.v = h.Fc(a));
        return b;
    };
    h.Bo = function (a) {
        return {
            p0: [
                a.W.x,
                a.W.y
            ],
            p1: [
                a.aa.x,
                a.aa.y
            ],
            team: a.oe == q.da ? 'red' : 'blue'
        };
    };
    h.$o = function (a) {
        var b = new tb(), c = r.G(a.p0, Array), d = r.G(a.p1, Array), e = b.W;
        e.x = c[0];
        e.y = c[1];
        c = b.aa;
        c.x = d[0];
        c.y = d[1];
        switch (a.team) {
        case 'blue':
            a = q.xa;
            break;
        case 'red':
            a = q.da;
            break;
        default:
            throw new p('Bad team value');
        }
        b.oe = a;
        return b;
    };
    h.aq = function (a) {
        var b = {};
        h.ka(b, 'bCoef', a.m, 0.5);
        h.ka(b, 'invMass', a.$, 0.5);
        h.ka(b, 'damping', a.Ca, 0.96);
        h.ka(b, 'acceleration', a.Be, 0.1);
        h.ka(b, 'kickingAcceleration', a.Se, 0.07);
        h.ka(b, 'kickingDamping', a.Te, 0.96);
        h.ka(b, 'kickStrength', a.Qe, 5);
        h.Ic(b, 'cGroup', a.v, 0);
        if (0 != a.oa.x || 0 != a.oa.y)
            b.gravity = [
                a.oa.x,
                a.oa.y
            ];
        h.ka(b, 'radius', a.Y, 15);
        h.ka(b, 'kickback', a.Re, 0);
        return b;
    };
    h.cp = function (a) {
        var b = new Eb(), c = a.bCoef, d = a.invMass, e = a.damping, f = a.acceleration, g = a.kickingAcceleration, l = a.kickingDamping, k = a.kickStrength, t = a.gravity, m = a.cGroup, n = a.radius;
        a = a.kickback;
        null != c && (b.m = r.G(c, z));
        null != d && (b.$ = r.G(d, z));
        null != e && (b.Ca = r.G(e, z));
        null != f && (b.Be = r.G(f, z));
        null != g && (b.Se = r.G(g, z));
        null != l && (b.Te = r.G(l, z));
        null != k && (b.Qe = r.G(k, z));
        null != t && (c = b.oa, d = r.G(t[1], z), c.x = r.G(t[0], z), c.y = d);
        null != m && (b.v = h.Fc(m));
        null != n && (b.Y = r.G(n, z));
        null != a && (b.Re = r.G(a, z));
        return b;
    };
    h.eo = function (a, b) {
        var c = {};
        if (a.a.x != b.a.x || a.a.y != b.a.y)
            c.pos = [
                a.a.x,
                a.a.y
            ];
        if (a.D.x != b.D.x || a.D.y != b.D.y)
            c.speed = [
                a.D.x,
                a.D.y
            ];
        if (a.oa.x != b.oa.x || a.oa.y != b.oa.y)
            c.gravity = [
                a.oa.x,
                a.oa.y
            ];
        h.ka(c, 'radius', a.Y, b.Y);
        h.ka(c, 'bCoef', a.m, b.m);
        h.ka(c, 'invMass', a.$, b.$);
        h.ka(c, 'damping', a.Ca, b.Ca);
        h.og(c, a.R, b.R);
        h.Ic(c, 'cMask', a.h, b.h);
        h.Ic(c, 'cGroup', a.v, b.v);
        return c;
    };
    h.Ik = function (a, b) {
        var c = a.pos, d = a.speed, e = a.gravity, f = a.radius, g = a.bCoef, l = a.invMass, k = a.damping, t = a.color, m = a.cMask, n = a.cGroup;
        if (null != c) {
            var p = b.a;
            p.x = c[0];
            p.y = c[1];
        }
        null != d && (c = b.D, c.x = d[0], c.y = d[1]);
        null != e && (d = b.oa, d.x = e[0], d.y = e[1]);
        null != f && (b.Y = r.G(f, z));
        null != g && (b.m = r.G(g, z));
        null != l && (b.$ = r.G(l, z));
        null != k && (b.Ca = r.G(k, z));
        null != t && (b.R = h.Yf(t));
        null != m && (b.h = h.Fc(m));
        null != n && (b.v = h.Fc(n));
        return b;
    };
    h.ka = function (a, b, c, d) {
        c != d && (a[b] = c);
    };
    h.prototype = {
        ag: function () {
            var a = new ua();
            a.R = 16777215;
            a.h = 63;
            a.v = 193;
            a.Y = 10;
            a.Ca = 0.99;
            a.$ = 1;
            a.m = 0.5;
            return a;
        },
        ea: function (a) {
            a.l(this.zh);
            if (!this.Oe()) {
                a.Cb(this.w);
                a.O(this.ld);
                a.s(this.Sd);
                a.s(this.Rd);
                a.s(this.kd);
                a.s(this.Sc);
                a.s(this.De);
                a.O(this.jd);
                a.s(this.$b);
                a.s(this.qc);
                a.s(this.kc);
                this.ee.ea(a);
                a.Ub(this.Xe);
                a.l(this.Ee);
                a.l(this.Kf ? 1 : 0);
                a.l(this.mf ? 1 : 0);
                a.l(this.J.length);
                for (var b = 0, c = this.J.length; b < c;) {
                    var d = b++, e = this.J[d];
                    e.ud = d;
                    e.ea(a);
                }
                a.l(this.U.length);
                b = 0;
                for (c = this.U; b < c.length;)
                    c[b++].ea(a);
                a.l(this.qa.length);
                b = 0;
                for (c = this.qa; b < c.length;)
                    c[b++].ea(a);
                a.l(this.tc.length);
                b = 0;
                for (c = this.tc; b < c.length;)
                    c[b++].ea(a);
                a.l(this.F.length);
                b = 0;
                for (c = this.F; b < c.length;)
                    c[b++].ea(a);
                a.l(this.ob.length);
                b = 0;
                for (c = this.ob; b < c.length;)
                    c[b++].ea(a);
                a.l(this.Dd.length);
                b = 0;
                for (c = this.Dd; b < c.length;)
                    d = c[b], ++b, a.s(d.x), a.s(d.y);
                a.l(this.md.length);
                b = 0;
                for (c = this.md; b < c.length;)
                    d = c[b], ++b, a.s(d.x), a.s(d.y);
            }
        },
        Fr: function (a) {
            function b() {
                for (var b = [], c = a.B(), d = 0; d < c;) {
                    ++d;
                    var e = new H(0, 0);
                    e.x = a.u();
                    e.y = a.u();
                    b.push(e);
                }
                return b;
            }
            this.w = a.yb();
            this.ld = a.M();
            this.Sd = a.u();
            this.Rd = a.u();
            this.kd = a.u();
            this.Sc = a.u();
            this.De = a.u();
            this.jd = a.M();
            this.$b = a.u();
            this.qc = a.u();
            this.kc = a.u();
            this.ee.ja(a);
            this.Xe = a.Ob();
            this.Ee = a.B();
            this.Kf = 0 != a.B();
            this.mf = 0 != a.B();
            this.J = [];
            for (var c = a.B(), d = 0; d < c;) {
                var e = new B();
                e.ja(a);
                e.ud = d++;
                this.J.push(e);
            }
            this.U = [];
            c = a.B();
            for (d = 0; d < c;)
                ++d, e = new E(), e.ja(a, this.J), this.U.push(e);
            this.qa = [];
            c = a.B();
            for (d = 0; d < c;)
                ++d, e = new L(), e.ja(a), this.qa.push(e);
            this.tc = [];
            c = a.B();
            for (d = 0; d < c;)
                ++d, e = new tb(), e.ja(a), this.tc.push(e);
            this.F = [];
            c = a.B();
            for (d = 0; d < c;)
                ++d, e = new ua(), e.ja(a), this.F.push(e);
            this.ob = [];
            c = a.B();
            for (d = 0; d < c;)
                ++d, e = new ob(), e.ja(a), this.ob.push(e);
            this.Dd = b();
            this.md = b();
            this.fe();
        },
        fe: function () {
            for (var a = 0, b = this.U; a < b.length;)
                b[a++].fe();
        },
        Oe: function () {
            return 255 != this.zh;
        },
        $d: function (a, b, c) {
            a = a[b];
            return null != a ? r.G(a, z) : c;
        },
        gp: function (a, b, c) {
            a = a[b];
            return null != a ? r.G(a, oc) : c;
        },
        re: function () {
            return JSON.stringify(this.Cr());
        },
        Cr: function () {
            if (!this.Kf)
                throw new p(0);
            for (var a = {}, b = 0, c = [], d = 0, e = this.J; d < e.length;) {
                var f = e[d];
                ++d;
                f.ud = b++;
                c.push(h.Or(f));
            }
            d = new E();
            b = [];
            e = 0;
            for (f = this.U; e < f.length;)
                b.push(h.ar(f[e++], d));
            d = [];
            e = 0;
            for (f = this.qa; e < f.length;)
                d.push(h.Yp(f[e++]));
            for (var e = [], f = 0, g = this.tc; f < g.length;)
                e.push(h.Bo(g[f++]));
            for (var f = h.aq(this.ee), l = new ua(), g = [], k = 0, t = this.F; k < t.length;)
                g.push(h.eo(t[k++], l));
            l = [];
            k = 0;
            for (t = this.ob; k < t.length;)
                l.push(h.To(t[k++]));
            for (var k = [], t = 0, m = this.Dd; t < m.length;) {
                var n = m[t];
                ++t;
                k.push([
                    n.x,
                    n.y
                ]);
            }
            t = [];
            m = 0;
            for (n = this.md; m < n.length;) {
                var q = n[m];
                ++m;
                t.push([
                    q.x,
                    q.y
                ]);
            }
            c = {
                name: this.w,
                width: this.$b,
                height: this.qc,
                bg: a,
                vertexes: c,
                segments: b,
                planes: d,
                goals: e,
                discs: g,
                playerPhysics: f,
                ballPhysics: 'disc0'
            };
            h.ka(c, 'maxViewWidth', this.Xe, 0);
            h.ka(c, 'cameraFollow', 1 == this.Ee ? 'player' : '', '');
            h.ka(c, 'spawnDistance', this.kc, 200);
            0 != l.length && (c.joints = l);
            0 != k.length && (c.redSpawnPoints = k);
            0 != t.length && (c.blueSpawnPoints = t);
            h.ka(c, 'kickOffReset', this.mf ? 'full' : 'partial', 'partial');
            switch (this.ld) {
            case 1:
                b = 'grass';
                break;
            case 2:
                b = 'hockey';
                break;
            default:
                b = 'none';
            }
            h.ka(a, 'type', b, 'none');
            h.ka(a, 'width', this.Sd, 0);
            h.ka(a, 'height', this.Rd, 0);
            h.ka(a, 'kickOffRadius', this.kd, 0);
            h.ka(a, 'cornerRadius', this.Sc, 0);
            h.og(a, this.jd, 7441498);
            h.ka(a, 'goalLine', this.De, 0);
            return c;
        },
        Hk: function (a) {
            function b(a) {
                var b = r.G(a[0], z);
                a = r.G(a[1], z);
                return new H(b, a);
            }
            function c(a, b, c, d) {
                null == d && (d = !1);
                var f = e[b];
                if (!d || null != f)
                    if (d = r.G(f, Array), null != d)
                        for (f = 0; f < d.length;) {
                            var l = d[f];
                            ++f;
                            try {
                                h.pn(l, g), a.push(c(l));
                            } catch (wc) {
                                throw new p(new Bb('Error in "' + b + '" index: ' + a.length));
                            }
                        }
            }
            var d = this, e = JSON5.parse(a);
            this.J = [];
            this.U = [];
            this.qa = [];
            this.tc = [];
            this.F = [];
            this.ob = [];
            this.w = r.G(e.name, String);
            this.$b = r.G(e.width, z);
            this.qc = r.G(e.height, z);
            this.Xe = this.$d(e, 'maxViewWidth', 0) | 0;
            'player' == e.cameraFollow && (this.Ee = 1);
            this.kc = 200;
            a = e.spawnDistance;
            null != a && (this.kc = r.G(a, z));
            a = e.bg;
            var f;
            switch (a.type) {
            case 'grass':
                f = 1;
                break;
            case 'hockey':
                f = 2;
                break;
            default:
                f = 0;
            }
            this.ld = f;
            this.Sd = this.$d(a, 'width', 0);
            this.Rd = this.$d(a, 'height', 0);
            this.kd = this.$d(a, 'kickOffRadius', 0);
            this.Sc = this.$d(a, 'cornerRadius', 0);
            this.jd = 7441498;
            null != a.color && (this.jd = h.Yf(a.color));
            this.De = this.$d(a, 'goalLine', 0);
            this.Kf = this.gp(e, 'canBeStored', !0);
            this.mf = 'full' == e.kickOffReset;
            var g = e.traits;
            a = e.ballPhysics;
            'disc0' != a && (null != a ? (a = h.Ik(a, this.ag()), a.v |= 192, this.F.push(a)) : this.F.push(this.ag()));
            c(this.J, 'vertexes', h.fp);
            c(this.U, 'segments', function (a) {
                return h.ep(a, d.J);
            });
            c(this.tc, 'goals', h.$o);
            c(this.F, 'discs', function (a) {
                return h.Ik(a, new ua());
            });
            c(this.qa, 'planes', h.bp);
            c(this.ob, 'joints', function (a) {
                return h.ap(a, d.F);
            }, !0);
            c(this.Dd, 'redSpawnPoints', b, !0);
            c(this.md, 'blueSpawnPoints', b, !0);
            a = e.playerPhysics;
            null != a && (this.ee = h.cp(a));
            if (255 < this.J.length || 255 < this.U.length || 255 < this.qa.length || 255 < this.tc.length || 255 < this.F.length)
                throw new p('Error');
            this.fe();
        },
        Oj: function () {
            var a = h.Ar;
            a.a = 0;
            this.ea(a);
            var b = new ec();
            b.Tr(a.Sb());
            b.hash = (b.hash += b.hash << 3) ^ b.hash >>> 11;
            b.hash += b.hash << 15;
            return b.hash | 0;
        },
        Dn: function (a, b) {
            for (var c = 0, d = this.tc; c < d.length;) {
                var e = d[c];
                ++c;
                var f = e.W, g = e.aa, l = b.x - a.x, k = b.y - a.y;
                0 < -(f.y - a.y) * l + (f.x - a.x) * k == 0 < -(g.y - a.y) * l + (g.x - a.x) * k ? f = !1 : (l = g.x - f.x, g = g.y - f.y, f = 0 < -(a.y - f.y) * l + (a.x - f.x) * g == 0 < -(b.y - f.y) * l + (b.x - f.x) * g ? !1 : !0);
                if (f)
                    return e.oe;
            }
            return q.Ia;
        },
        Zc: function (a, b, c, d, e, f, g, l) {
            null == l && (l = 0);
            this.w = a;
            this.F.push(this.ag());
            this.$b = b;
            this.qc = c;
            this.ld = 1;
            this.jd = 7441498;
            this.Sd = d;
            this.Rd = e;
            this.kd = g;
            this.Sc = l;
            this.kc = 0.75 * d;
            400 < this.kc && (this.kc = 400);
            a = new L();
            var k = a.wa;
            k.x = 0;
            k.y = 1;
            a.Ua = -c;
            a.m = 0;
            this.qa.push(a);
            a = new L();
            k = a.wa;
            k.x = 0;
            k.y = -1;
            a.Ua = -c;
            a.m = 0;
            this.qa.push(a);
            a = new L();
            k = a.wa;
            k.x = 1;
            k.y = 0;
            a.Ua = -b;
            a.m = 0;
            this.qa.push(a);
            a = new L();
            k = a.wa;
            k.x = -1;
            k.y = 0;
            a.Ua = -b;
            a.m = 0;
            this.qa.push(a);
            this.cg(d, 1, f, 13421823, q.xa);
            this.cg(-d, -1, f, 16764108, q.da);
            this.Nk(g, c);
            b = new L();
            c = b.wa;
            c.x = 0;
            c.y = 1;
            b.Ua = -e;
            b.h = 1;
            this.qa.push(b);
            b = new L();
            c = b.wa;
            c.x = 0;
            c.y = -1;
            b.Ua = -e;
            b.h = 1;
            this.qa.push(b);
            b = new B();
            c = b.a;
            c.x = -d;
            c.y = -e;
            b.h = 0;
            c = new B();
            g = c.a;
            g.x = d;
            g.y = -e;
            c.h = 0;
            g = new B();
            a = g.a;
            a.x = d;
            a.y = -f;
            g.h = 0;
            a = new B();
            k = a.a;
            k.x = d;
            k.y = f;
            a.h = 0;
            var k = new B(), h = k.a;
            h.x = d;
            h.y = e;
            k.h = 0;
            var h = new B(), m = h.a;
            m.x = -d;
            m.y = e;
            h.h = 0;
            var m = new B(), n = m.a;
            n.x = -d;
            n.y = f;
            m.h = 0;
            var n = new B(), p = n.a;
            p.x = -d;
            p.y = -f;
            n.h = 0;
            f = new E();
            f.W = c;
            f.aa = g;
            f.h = 1;
            f.Xa = !1;
            p = new E();
            p.W = a;
            p.aa = k;
            p.h = 1;
            p.Xa = !1;
            var r = new E();
            r.W = h;
            r.aa = m;
            r.h = 1;
            r.Xa = !1;
            var u = new E();
            u.W = n;
            u.aa = b;
            u.h = 1;
            u.Xa = !1;
            this.J.push(b);
            this.J.push(c);
            this.J.push(g);
            this.J.push(a);
            this.J.push(k);
            this.J.push(h);
            this.J.push(m);
            this.J.push(n);
            this.U.push(f);
            this.U.push(p);
            this.U.push(r);
            this.U.push(u);
            this.Lk(d, e, l);
            this.fe();
        },
        Mk: function (a, b, c, d, e, f, g, l, k) {
            this.w = a;
            this.F.push(this.ag());
            this.$b = b;
            this.qc = c;
            this.ld = 2;
            this.Sd = d;
            this.Rd = e;
            this.kd = l;
            this.Sc = k;
            this.De = g;
            this.kc = 0.75 * (d - g);
            400 < this.kc && (this.kc = 400);
            a = new L();
            var h = a.wa;
            h.x = 0;
            h.y = 1;
            a.Ua = -c;
            a.m = 0;
            this.qa.push(a);
            a = new L();
            h = a.wa;
            h.x = 0;
            h.y = -1;
            a.Ua = -c;
            a.m = 0;
            this.qa.push(a);
            a = new L();
            h = a.wa;
            h.x = 1;
            h.y = 0;
            a.Ua = -b;
            a.m = 0;
            this.qa.push(a);
            a = new L();
            h = a.wa;
            h.x = -1;
            h.y = 0;
            a.Ua = -b;
            a.m = 0;
            this.qa.push(a);
            this.cg(d - g, 1, f, 13421823, q.xa, 63);
            this.cg(-d + g, -1, f, 16764108, q.da, 63);
            this.Nk(l, c);
            b = new L();
            c = b.wa;
            c.x = 0;
            c.y = 1;
            b.Ua = -e;
            b.h = 1;
            this.qa.push(b);
            b = new L();
            c = b.wa;
            c.x = 0;
            c.y = -1;
            b.Ua = -e;
            b.h = 1;
            this.qa.push(b);
            b = new L();
            c = b.wa;
            c.x = 1;
            c.y = 0;
            b.Ua = -d;
            b.h = 1;
            this.qa.push(b);
            b = new L();
            c = b.wa;
            c.x = -1;
            c.y = 0;
            b.Ua = -d;
            b.h = 1;
            this.qa.push(b);
            this.Lk(d, e, k);
            this.fe();
        },
        cg: function (a, b, c, d, e, f, g) {
            null == g && (g = 32);
            null == f && (f = 1);
            var l = new B(), k = l.a;
            k.x = a + 8 * b;
            k.y = -c;
            var k = new B(), h = k.a;
            h.x = a + 8 * b;
            h.y = c;
            var m = new B(), h = m.a;
            h.x = l.a.x + 22 * b;
            h.y = l.a.y + 22;
            var n = new B(), h = n.a;
            h.x = k.a.x + 22 * b;
            h.y = k.a.y - 22;
            h = new E();
            h.W = l;
            h.aa = m;
            h.Nc(90 * b);
            var p = new E();
            p.W = n;
            p.aa = m;
            var q = new E();
            q.W = n;
            q.aa = k;
            q.Nc(90 * b);
            b = this.J.length;
            this.J.push(l);
            this.J.push(k);
            this.J.push(m);
            this.J.push(n);
            l = b;
            for (b = this.J.length; l < b;)
                k = l++, this.J[k].h = f, this.J[k].v = g, this.J[k].m = 0.1;
            b = this.U.length;
            this.U.push(h);
            this.U.push(p);
            this.U.push(q);
            l = b;
            for (b = this.U.length; l < b;)
                k = l++, this.U[k].h = f, this.U[k].v = g, this.U[k].m = 0.1;
            f = new ua();
            g = f.a;
            g.x = a;
            g.y = -c;
            f.$ = 0;
            f.Y = 8;
            f.R = d;
            this.F.push(f);
            f = new ua();
            g = f.a;
            g.x = a;
            g.y = c;
            f.$ = 0;
            f.Y = 8;
            f.R = d;
            this.F.push(f);
            d = new tb();
            f = d.W;
            f.x = a;
            f.y = -c;
            f = d.aa;
            f.x = a;
            f.y = c;
            d.oe = e;
            this.tc.push(d);
        },
        Nk: function (a, b) {
            var c = new B(), d = c.a;
            d.x = 0;
            d.y = -b;
            c.m = 0.1;
            c.v = 24;
            c.h = 6;
            var d = new B(), e = d.a;
            e.x = 0;
            e.y = -a;
            d.m = 0.1;
            d.v = 24;
            d.h = 6;
            var e = new B(), f = e.a;
            f.x = 0;
            f.y = a;
            e.m = 0.1;
            e.v = 24;
            e.h = 6;
            var f = new B(), g = f.a;
            g.x = 0;
            g.y = b;
            f.m = 0.1;
            f.v = 24;
            f.h = 6;
            g = new E();
            g.W = c;
            g.aa = d;
            g.v = 24;
            g.h = 6;
            g.Xa = !1;
            g.m = 0.1;
            var l = new E();
            l.W = e;
            l.aa = f;
            l.v = 24;
            l.h = 6;
            l.Xa = !1;
            l.m = 0.1;
            var k = new E();
            k.W = d;
            k.aa = e;
            k.v = 8;
            k.h = 6;
            k.Xa = !1;
            k.Nc(180);
            k.m = 0.1;
            var h = new E();
            h.W = e;
            h.aa = d;
            h.v = 16;
            h.h = 6;
            h.Xa = !1;
            h.Nc(180);
            h.m = 0.1;
            this.J.push(c);
            this.J.push(d);
            this.J.push(e);
            this.J.push(f);
            this.U.push(g);
            this.U.push(l);
            this.U.push(k);
            this.U.push(h);
        },
        Lk: function (a, b, c) {
            if (!(0 >= c)) {
                var d = new B(), e = d.a;
                e.x = -a + c;
                e.y = -b;
                d.h = 0;
                var e = new B(), f = e.a;
                f.x = -a;
                f.y = -b + c;
                e.h = 0;
                var f = new B(), g = f.a;
                g.x = -a + c;
                g.y = b;
                f.h = 0;
                var g = new B(), l = g.a;
                l.x = -a;
                l.y = b - c;
                g.h = 0;
                var l = new B(), k = l.a;
                k.x = a - c;
                k.y = b;
                l.h = 0;
                var k = new B(), h = k.a;
                h.x = a;
                h.y = b - c;
                k.h = 0;
                var h = new B(), m = h.a;
                m.x = a - c;
                m.y = -b;
                h.h = 0;
                var m = new B(), n = m.a;
                n.x = a;
                n.y = -b + c;
                m.h = 0;
                a = new E();
                a.W = d;
                a.aa = e;
                a.h = 1;
                a.Xa = !1;
                a.m = 1;
                a.Nc(-90);
                b = new E();
                b.W = f;
                b.aa = g;
                b.h = 1;
                b.Xa = !1;
                b.m = 1;
                b.Nc(90);
                c = new E();
                c.W = l;
                c.aa = k;
                c.h = 1;
                c.Xa = !1;
                c.m = 1;
                c.Nc(-90);
                n = new E();
                n.W = h;
                n.aa = m;
                n.h = 1;
                n.Xa = !1;
                n.m = 1;
                n.Nc(90);
                this.J.push(d);
                this.J.push(e);
                this.J.push(f);
                this.J.push(g);
                this.J.push(l);
                this.J.push(k);
                this.J.push(h);
                this.J.push(m);
                this.U.push(a);
                this.U.push(b);
                this.U.push(c);
                this.U.push(n);
            }
        },
        f: h
    };
    ka.b = !0;
    ka.prototype = {
        ea: function (a) {
            a.l(this.hd);
            a.O(this.dd);
            a.l(this.eb.length);
            for (var b = 0, c = this.eb; b < c.length;)
                a.O(c[b++]);
        },
        ja: function (a) {
            this.hd = a.B();
            this.dd = a.M();
            var b = a.B();
            if (3 < b)
                throw new p('too many');
            this.eb = [];
            for (var c = 0; c < b;)
                ++c, this.eb.push(a.M());
        },
        f: ka
    };
    q.b = !0;
    q.prototype = { f: q };
    ga.b = !0;
    ga.Qd = [
        Ta,
        dc
    ];
    ga.qd = function (a, b) {
        a.jc = b.jc;
        if (null == b.I)
            a.I = null;
        else {
            null == a.I && (a.I = []);
            for (var c = a.I, d = b.I, e = d.length; c.length > e;)
                c.pop();
            for (var e = 0, f = d.length; e < f;) {
                var g = e++;
                c[g] = d[g].cs();
            }
        }
        a.K = null == b.K ? null : b.K.sc();
        a.Oc = b.Oc;
        a.hb = b.hb;
        a.Da = b.Da;
        a.ae = b.ae;
        a.Xc = b.Xc;
        a.yd = b.yd;
        a.S = b.S;
        a.jb = b.jb;
    };
    ga.prototype = {
        tr: function (a) {
            if (null == this.K) {
                this.K = new O();
                for (var b = 0, c = this.I; b < c.length;) {
                    var d = c[b];
                    ++b;
                    d.H = null;
                    d.Ib = 0;
                }
                this.K.Oo(this);
                null != this.Hi && this.Hi(a);
            }
        },
        Lf: function (a, b, c) {
            if (b.ca != c) {
                b.ca = c;
                D.remove(this.I, b);
                this.I.push(b);
                if (null != this.K) {
                    null != b.H && (D.remove(this.K.ta.F, b.H), b.H = null);
                    this.K.yk(b);
                    for (var d = 0, e = !1; !e;) {
                        ++d;
                        for (var e = !0, f = 0, g = this.I; f < g.length;) {
                            var l = g[f];
                            ++f;
                            if (l != b && l.ca == b.ca && l.Ib == d) {
                                e = !1;
                                break;
                            }
                        }
                    }
                    b.Ib = d;
                }
                Cb.i(this.tl, a, b, c);
            }
        },
        na: function (a) {
            for (var b = 0, c = this.I; b < c.length;) {
                var d = c[b];
                ++b;
                if (d.V == a)
                    return d;
            }
            return null;
        },
        C: function (a) {
            null != this.K && this.K.C(a);
        },
        ea: function (a) {
            a.Cb(this.jc);
            a.l(this.Oc ? 1 : 0);
            a.O(this.hb);
            a.O(this.Da);
            a.Ui(this.ae);
            a.l(this.Xc);
            a.l(this.yd);
            this.S.ea(a);
            a.l(null != this.K ? 1 : 0);
            null != this.K && this.K.ea(a);
            a.l(this.I.length);
            for (var b = 0, c = this.I; b < c.length;)
                c[b++].ua(a);
            this.jb[1].ea(a);
            this.jb[2].ea(a);
        },
        ja: function (a) {
            this.jc = a.yb();
            this.Oc = 0 != a.B();
            this.hb = a.M();
            this.Da = a.M();
            this.ae = a.li();
            this.Xc = a.B();
            this.yd = a.B();
            this.S = h.ja(a);
            var b = 0 != a.B();
            this.K = null;
            b && (this.K = new O(), this.K.ja(a, this));
            for (var b = null == this.K ? null : this.K.ta.F, c = a.B(), d = this.I; d.length > c;)
                d.pop();
            for (d = 0; d < c;) {
                var e = new fa();
                e.va(a, b);
                this.I[d++] = e;
            }
            this.jb[1].ja(a);
            this.jb[2].ja(a);
        },
        qk: function () {
            var a = 0, b = w.ga();
            this.ea(b);
            for (b = b.Br(); 4 <= b.o.byteLength - b.a;)
                a ^= b.M();
            return a;
        },
        so: function () {
            var a = w.ga(4);
            a.O(this.qk());
            return a.Ig();
        },
        Ln: function (a) {
            a = new F(new DataView(a)).M();
            y.i(this.bo, this.qk() != a);
        },
        bm: function (a) {
            this.Jl = a;
        },
        Kb: function (a) {
            if (0 == a)
                return !0;
            a = this.na(a);
            return null != a && a.bb ? !0 : !1;
        },
        hr: function (a, b, c, d) {
            this.yd = 0 > b ? 0 : 255 < b ? 255 : b;
            this.Xc = 0 > c ? 0 : 255 < c ? 255 : c;
            d = 0 > d ? 0 : 100 < d ? 100 : d;
            this.ae = this.Xc * d;
            wb.i(this.Dk, a, this.yd, this.Xc, d);
        },
        sc: function () {
            var a = ya.zc, b = this.gc;
            this.hc != a && (null == b && (this.gc = b = new ga()), this.hc = a, ga.qd(b, this));
            return b;
        },
        f: ga
    };
    fa.b = !0;
    fa.Qd = [Ta];
    fa.Vr = function (a, b) {
        a.bb = b.bb;
        a.Ib = b.Ib;
        a.Xb = b.Xb;
        a.Id = b.Id;
        a.Kd = b.Kd;
        a.Jd = b.Jd;
        a.Sg = b.Sg;
        a.xb = b.xb;
        a.w = b.w;
        a.nb = b.nb;
        a.V = b.V;
        a.Wb = b.Wb;
        a.yc = b.yc;
        a.Qc = b.Qc;
        a.H = null == b.H ? null : b.H.sc();
        a.ca = b.ca;
    };
    fa.prototype = {
        ua: function (a) {
            a.l(this.bb ? 1 : 0);
            a.O(this.Ib);
            a.Cb(this.Xb);
            a.Cb(this.Id);
            a.l(this.Kd ? 1 : 0);
            a.Cb(this.Jd);
            a.O(this.Sg);
            a.Cb(this.w);
            a.O(this.nb);
            a.kb(this.V);
            a.l(this.Wb ? 1 : 0);
            a.Ui(this.yc);
            a.l(this.Qc);
            a.l(this.ca.Z);
            a.Ui(null == this.H ? -1 : this.H.fl);
        },
        va: function (a, b) {
            this.bb = 0 != a.B();
            this.Ib = a.M();
            this.Xb = a.yb();
            this.Id = a.yb();
            this.Kd = 0 != a.B();
            this.Jd = a.yb();
            this.Sg = a.M();
            this.w = a.yb();
            this.nb = a.M();
            this.V = a.zb();
            this.Wb = 0 != a.B();
            this.yc = a.li();
            this.Qc = a.B();
            var c = a.kf();
            this.ca = 1 == c ? q.da : 2 == c ? q.xa : q.Ia;
            c = a.li();
            this.H = 0 > c ? null : b[c];
        },
        cs: function () {
            var a = ya.zc, b = this.Sm;
            this.zc != a && (null == b && (this.Sm = b = new fa()), this.zc = a, fa.Vr(b, this));
            return b;
        },
        f: fa
    };
    ta.b = !0;
    ta.la = function (a) {
        var b = new ta();
        b.Wg = a;
        return b;
    };
    ta.ma = m;
    ta.prototype = C(m.prototype, {
        apply: function (a) {
            var b = a.na(this.P);
            null != b && this.Wg != b.Kd && (b.Kd = this.Wg, y.i(a.ol, b));
        },
        ua: function (a) {
            a.l(this.Wg ? 1 : 0);
        },
        va: function (a) {
            this.Wg = 0 != a.B();
        },
        f: ta
    });
    sb.b = !0;
    sb.ma = m;
    sb.prototype = C(m.prototype, {
        apply: function (a) {
            0 == this.P && wb.i(a.Pl, this.Rc, this.color, this.style, this.Xm);
        },
        ua: function (a) {
            a.mc(U.Pc(this.Rc, 1000));
            a.O(this.color);
            a.l(this.style);
            a.l(this.Xm);
        },
        va: function (a) {
            this.Rc = a.ic();
            if (1000 < this.Rc.length)
                throw new p('message too long');
            this.color = a.M();
            this.style = a.B();
            this.Xm = a.B();
        },
        f: sb
    });
    Qa.b = !0;
    Qa.ma = m;
    Qa.prototype = C(m.prototype, {
        apply: function (a) {
            if (a.Kb(this.P, 1)) {
                for (var b = a.na(this.P), c = a.I, d = [], e = 0, f = 0, g = 0; g < c.length;) {
                    var l = c[g];
                    ++g;
                    l.ca == q.Ia && d.push(l);
                    l.ca == q.da ? ++e : l.ca == q.xa && ++f;
                }
                c = d.length;
                0 != c && (f == e ? 2 > c || (a.Lf(b, d[0], q.da), a.Lf(b, d[1], q.xa)) : a.Lf(b, d[0], f > e ? q.da : q.xa));
            }
        },
        ua: function () {
        },
        va: function () {
        },
        f: Qa
    });
    ea.b = !0;
    ea.la = function (a, b) {
        var c = new ea();
        c.oj = a;
        c.newValue = b;
        return c;
    };
    ea.ma = m;
    ea.prototype = C(m.prototype, {
        apply: function (a) {
            if (a.Kb(this.P, 2) && null == a.K)
                switch (this.oj) {
                case 0:
                    var b = this.newValue;
                    a.hb = 0 > b ? 0 : 99 < b ? 99 : b;
                    break;
                case 1:
                    b = this.newValue, a.Da = 0 > b ? 0 : 99 < b ? 99 : b;
                }
        },
        ua: function (a) {
            a.O(this.oj);
            a.O(this.newValue);
        },
        va: function (a) {
            this.oj = a.M();
            this.newValue = a.M();
        },
        f: ea
    });
    sa.b = !0;
    sa.la = function (a, b) {
        var c = new sa();
        c.Ld = a;
        c.Vg = b;
        return c;
    };
    sa.ma = m;
    sa.prototype = C(m.prototype, {
        apply: function (a) {
            if (a.Kb(this.P, 4)) {
                var b = a.na(this.P), c = a.na(this.Ld);
                null != c && 0 != c.V && c.bb != this.Vg && (c.bb = this.Vg, null != a.gi && a.gi(b, c));
            }
        },
        ua: function (a) {
            a.O(this.Ld);
            a.l(this.Vg ? 1 : 0);
        },
        va: function (a) {
            this.Ld = a.M();
            this.Vg = 0 != a.B();
        },
        f: sa
    });
    ra.b = !0;
    ra.la = function (a) {
        var b = new ra();
        b.Zb = a;
        return b;
    };
    ra.ma = m;
    ra.prototype = C(m.prototype, {
        apply: function (a) {
            a = a.na(this.P);
            null != a && (a.Xb = this.Zb);
        },
        ua: function (a) {
            a.Cb(this.Zb);
        },
        va: function (a) {
            this.Zb = a.yb();
            null != this.Zb && (this.Zb = U.Pc(this.Zb, 2));
        },
        f: ra
    });
    S.b = !0;
    S.la = function (a, b) {
        var c = new S();
        c.Ld = a;
        c.gj = b;
        return c;
    };
    S.ma = m;
    S.prototype = C(m.prototype, {
        apply: function (a) {
            var b = a.na(this.Ld);
            if (null != b) {
                var c = a.na(this.P), d = a.Kb(this.P, 1);
                (d = d || b == c && !a.Oc && null == a.K) && a.Lf(c, b, this.gj);
            }
        },
        ua: function (a) {
            a.O(this.Ld);
            a.l(this.gj.Z);
        },
        va: function (a) {
            this.Ld = a.M();
            a = a.kf();
            this.gj = 1 == a ? q.da : 2 == a ? q.xa : q.Ia;
        },
        f: S
    });
    qa.b = !0;
    qa.la = function (a) {
        var b = new qa();
        b.Od = a;
        return b;
    };
    qa.ma = m;
    qa.prototype = C(m.prototype, {
        apply: function (a) {
            if (a.Kb(this.P, 8)) {
                var b = a.na(this.P);
                null == a.K && (a.S = this.Od, null != a.Fi && a.Fi(b, this.Od));
            }
        },
        ua: function (a) {
            var b = w.ga();
            this.Od.ea(b);
            b = pako.deflateRaw(b.Sb());
            a.Ub(b.byteLength);
            a.Vb(b);
        },
        va: function (a) {
            a = pako.inflateRaw(a.rb(a.Ob()));
            this.Od = h.ja(new F(new DataView(a.buffer, a.byteOffset, a.byteLength)));
        },
        f: qa
    });
    Pa.b = !0;
    Pa.ma = m;
    Pa.prototype = C(m.prototype, {
        apply: function (a) {
            a.Kb(this.P, 2) && this.ca != q.Ia && (a.jb[this.ca.Z] = this.Qg);
        },
        ua: function (a) {
            a.l(this.ca.Z);
            this.Qg.ea(a);
        },
        va: function (a) {
            var b = a.kf();
            this.ca = 1 == b ? q.da : 2 == b ? q.xa : q.Ia;
            this.Qg = new ka();
            this.Qg.ja(a);
        },
        f: Pa
    });
    pa.b = !0;
    pa.la = function (a) {
        var b = new pa();
        b.newValue = a;
        return b;
    };
    pa.ma = m;
    pa.prototype = C(m.prototype, {
        apply: function (a) {
            a.Kb(this.P, 2) && (a.Oc = this.newValue);
        },
        ua: function (a) {
            a.l(this.newValue ? 1 : 0);
        },
        va: function (a) {
            this.newValue = 0 != a.B();
        },
        f: pa
    });
    oa.b = !0;
    oa.la = function (a, b, c, d) {
        var e = new oa();
        e.V = a;
        e.name = b;
        e.$i = c;
        e.Xb = d;
        return e;
    };
    oa.ma = m;
    oa.prototype = C(m.prototype, {
        apply: function (a) {
            if (0 == this.P) {
                var b = new fa();
                b.V = this.V;
                b.w = this.name;
                b.Jd = this.$i;
                b.Xb = this.Xb;
                a.I.push(b);
                a = a.pl;
                null != a && a(b);
            }
        },
        ua: function (a) {
            a.O(this.V);
            a.Cb(this.name);
            a.Cb(this.$i);
            a.Cb(this.Xb);
        },
        va: function (a) {
            this.V = a.M();
            this.name = a.yb();
            this.$i = a.yb();
            this.Xb = a.yb();
        },
        f: oa
    });
    rb.b = !0;
    rb.ma = m;
    rb.prototype = C(m.prototype, {
        apply: function (a) {
            a = a.na(this.ye);
            null != a && 0 == this.P && (a.Id = this.Zb);
        },
        ua: function (a) {
            a.Cb(this.Zb);
            a.O(this.ye);
        },
        va: function (a) {
            this.Zb = a.yb();
            this.ye = a.M();
            null != this.Zb && (this.Zb = U.Pc(this.Zb, 2));
        },
        f: rb
    });
    Oa.b = !0;
    Oa.ma = m;
    Oa.prototype = C(m.prototype, {
        apply: function (a) {
            var b = a.K;
            if (null != b && a.Kb(this.P, 16)) {
                var c = a.na(this.P), d = 120 == b.Na, e = 0 < b.Na;
                this.zf ? b.Na = 120 : 120 == b.Na && (b.Na = 119);
                d != this.zf && Cb.i(a.il, c, this.zf, e);
            }
        },
        ua: function (a) {
            a.l(this.zf ? 1 : 0);
        },
        va: function (a) {
            this.zf = 0 != a.B();
        },
        f: Oa
    });
    Na.b = !0;
    Na.ma = m;
    Na.prototype = C(m.prototype, {
        Rm: function (a) {
            if (null != a.Zp) {
                var b = a.na(this.P);
                return null == b ? !1 : a.Zp(b, this.Rc);
            }
            return !0;
        },
        apply: function (a) {
            var b = a.na(this.P);
            null != b && ia.i(a.nl, b, this.Rc);
        },
        ua: function (a) {
            a.mc(U.Pc(this.Rc, 140));
        },
        va: function (a) {
            this.Rc = a.ic();
            if (140 < this.Rc.length)
                throw new p('message too long');
        },
        f: Na
    });
    Ha.b = !0;
    Ha.ma = m;
    Ha.prototype = C(m.prototype, {
        apply: function (a) {
            var b = a.na(this.P);
            if (null != b) {
                var c = this.input;
                0 == (b.nb & 16) && 0 != (c & 16) && (b.Wb = !0);
                b.nb = c;
                null != a.$p && a.$p(b);
            }
        },
        ua: function (a) {
            a.sb(this.input);
        },
        va: function (a) {
            this.input = a.gb();
        },
        f: Ha
    });
    na.b = !0;
    na.la = function (a) {
        var b = new na();
        b.pj = a;
        return b;
    };
    na.ma = m;
    na.prototype = C(m.prototype, {
        apply: function (a) {
            var b = a.na(this.P);
            null != b && ia.i(a.sl, b, this.pj);
        },
        ua: function (a) {
            a.l(this.pj);
        },
        va: function (a) {
            this.pj = a.B();
        },
        f: na
    });
    kc.b = !0;
    kc.cj = function () {
        m.Ha(sb);
        m.Ha(na);
        m.Ha(Ua);
        m.Ha(Ha);
        m.Ha(Na);
        m.Ha(oa);
        m.Ha(Z);
        m.Ha(Ma);
        m.Ha(La);
        m.Ha(Oa);
        m.Ha(ea);
        m.Ha(qa);
        m.Ha(S);
        m.Ha(pa);
        m.Ha(sa);
        m.Ha(Qa);
        m.Ha(ta);
        m.Ha(la);
        m.Ha(ra);
        m.Ha(Pa);
        m.Ha(qb);
        m.Ha(ma);
        m.Ha(rb);
        m.Ha(pb);
    };
    Z.b = !0;
    Z.la = function (a, b, c) {
        var d = new Z();
        d.V = a;
        d.fd = b;
        d.Og = c;
        return d;
    };
    Z.ma = m;
    Z.prototype = C(m.prototype, {
        apply: function (a) {
            if (0 != this.V && a.Kb(this.P, 128)) {
                var b = a.na(this.V);
                if (null != b) {
                    var c = a.na(this.P);
                    D.remove(a.I, b);
                    null != a.K && D.remove(a.K.ta.F, b.H);
                    wb.i(a.ql, b, this.fd, this.Og, c);
                }
            }
        },
        ua: function (a) {
            null != this.fd && (this.fd = U.Pc(this.fd, 100));
            a.O(this.V);
            a.Cb(this.fd);
            a.l(this.Og ? 1 : 0);
        },
        va: function (a) {
            this.V = a.M();
            this.fd = a.yb();
            this.Og = 0 != a.B();
            if (null != this.fd && 100 < this.fd.length)
                throw new p('string too long');
        },
        f: Z
    });
    qb.b = !0;
    qb.ma = m;
    qb.prototype = C(m.prototype, {
        apply: function (a) {
            if (0 == this.P) {
                for (var b = new Map(), c = 0, d = a.I; c < d.length;) {
                    var e = d[c];
                    ++c;
                    b.set(e.V, e);
                }
                c = [];
                d = 0;
                for (e = this.Xg; d < e.length;) {
                    var f = e[d];
                    ++d;
                    var g = b.get(f);
                    null != g && (b['delete'](f), c.push(g));
                }
                d = [];
                b = b.values();
                for (e = b.next(); !e.done;)
                    f = e.value, e = b.next(), d.push(f);
                a.I = this.Qm ? c.concat(d) : d.concat(c);
            }
        },
        ua: function (a) {
            a.l(this.Qm ? 1 : 0);
            a.l(this.Xg.length);
            for (var b = 0, c = this.Xg; b < c.length;)
                a.O(c[b++]);
        },
        va: function (a) {
            this.Qm = 0 != a.B();
            var b = a.B();
            this.Xg = [];
            for (var c = 0; c < b;)
                ++c, this.Xg.push(a.M());
        },
        f: qb
    });
    pb.b = !0;
    pb.ma = m;
    pb.prototype = C(m.prototype, {
        apply: function (a) {
            if (0 == this.P) {
                var b = a.K;
                if (null != b) {
                    if (this.Jm) {
                        a = a.na(this.ye);
                        if (null == a)
                            return;
                        a = a.H;
                    } else
                        a = b.ta.F[this.ye];
                    null != a && (null != this.La[0] && (a.a.x = this.La[0]), null != this.La[1] && (a.a.y = this.La[1]), null != this.La[2] && (a.D.x = this.La[2]), null != this.La[3] && (a.D.y = this.La[3]), null != this.La[4] && (a.oa.x = this.La[4]), null != this.La[5] && (a.oa.y = this.La[5]), null != this.La[6] && (a.Y = this.La[6]), null != this.La[7] && (a.m = this.La[7]), null != this.La[8] && (a.$ = this.La[8]), null != this.La[9] && (a.Ca = this.La[9]), null != this.ed[0] && (a.R = this.ed[0]), null != this.ed[1] && (a.h = this.ed[1]), null != this.ed[2] && (a.v = this.ed[2]));
                }
            }
        },
        ua: function (a) {
            a.O(this.ye);
            a.l(this.Jm ? 1 : 0);
            var b = a.a;
            a.Ub(0);
            for (var c = 0, d = 1, e = 0, f = this.La; e < f.length;) {
                var g = f[e];
                ++e;
                null != g && (c |= d, a.Ti(g));
                d <<= 1;
            }
            e = 0;
            for (f = this.ed; e < f.length;)
                g = f[e], ++e, null != g && (c |= d, a.O(g)), d <<= 1;
            d = a.a;
            a.a = b;
            a.Ub(c);
            a.a = d;
        },
        va: function (a) {
            this.ye = a.M();
            this.Jm = 0 != a.B();
            var b = a.Ob();
            this.La = [];
            for (var c = 0; 10 > c;) {
                var d = c++;
                0 != (b & 1) && (this.La[d] = a.ki());
                b >>>= 1;
            }
            this.ed = [];
            for (c = 0; 3 > c;)
                d = c++, 0 != (b & 1) && (this.ed[d] = a.M()), b >>>= 1;
        },
        f: pb
    });
    ma.b = !0;
    ma.la = function (a, b, c) {
        var d = new ma();
        d.min = a;
        d.kj = b;
        d.Yi = c;
        return d;
    };
    ma.ma = m;
    ma.prototype = C(m.prototype, {
        apply: function (a) {
            a.Kb(this.P, 2) && a.hr(a.na(this.P), this.min, this.kj, this.Yi);
        },
        ua: function (a) {
            a.O(this.min);
            a.O(this.kj);
            a.O(this.Yi);
        },
        va: function (a) {
            this.min = a.M();
            this.kj = a.M();
            this.Yi = a.M();
        },
        f: ma
    });
    Ma.b = !0;
    Ma.ma = m;
    Ma.prototype = C(m.prototype, {
        apply: function (a) {
            a.Kb(this.P, 32) && a.tr(a.na(this.P), 0);
        },
        ua: function () {
        },
        va: function () {
        },
        f: Ma
    });
    La.b = !0;
    La.ma = m;
    La.prototype = C(m.prototype, {
        apply: function (a) {
            if (a.Kb(this.P, 32)) {
                var b = a.na(this.P);
                if (null != a.K) {
                    a.K = null;
                    for (var c = 0, d = a.I; c < d.length;) {
                        var e = d[c];
                        ++c;
                        e.H = null;
                        e.Ib = 0;
                    }
                    null != a.tf && a.tf(b);
                }
            }
        },
        ua: function () {
        },
        va: function () {
        },
        f: La
    });
    la.b = !0;
    la.la = function (a) {
        for (var b = new la(), c = a.T.I, d = [], e = 0; e < c.length;) {
            var f = a.Ge.get(c[e++].V);
            d.push(null == f ? 0 : f.xb);
        }
        b.ve = d;
        return b;
    };
    la.ma = m;
    la.prototype = C(m.prototype, {
        apply: function (a) {
            if (0 == this.P) {
                a = a.I;
                for (var b = 0, c = a.length; b < c;) {
                    var d = b++;
                    if (d >= this.ve.length)
                        break;
                    a[d].xb = this.ve[d];
                }
            }
        },
        ua: function (a) {
            a.kb(this.ve.length);
            for (var b = 0, c = this.ve; b < c.length;)
                a.kb(c[b++]);
        },
        va: function (a) {
            this.ve = [];
            for (var b = a.zb(), c = 0; c < b;)
                ++c, this.ve.push(a.zb());
        },
        f: la
    });
    da.b = !0;
    da.Qd = [Ta];
    da.qd = function (a, b) {
        a.Y = b.Y;
        a.m = b.m;
        a.$ = b.$;
        a.Ca = b.Ca;
        a.R = b.R;
        a.Ij = b.Ij;
        a.h = b.h;
        a.v = b.v;
        var c = a.a, d = b.a;
        c.x = d.x;
        c.y = d.y;
        c = a.D;
        d = b.D;
        c.x = d.x;
        c.y = d.y;
        c = a.oa;
        d = b.oa;
        c.x = d.x;
        c.y = d.y;
    };
    da.prototype = {
        ea: function (a) {
            var b = this.a;
            a.s(b.x);
            a.s(b.y);
            b = this.D;
            a.s(b.x);
            a.s(b.y);
            b = this.oa;
            a.s(b.x);
            a.s(b.y);
            a.s(this.Y);
            a.s(this.m);
            a.s(this.$);
            a.s(this.Ca);
            a.sb(this.R);
            a.O(this.h);
            a.O(this.v);
        },
        ja: function (a) {
            var b = this.a;
            b.x = a.u();
            b.y = a.u();
            b = this.D;
            b.x = a.u();
            b.y = a.u();
            b = this.oa;
            b.x = a.u();
            b.y = a.u();
            this.Y = a.u();
            this.m = a.u();
            this.$ = a.u();
            this.Ca = a.u();
            this.R = a.gb();
            this.h = a.M();
            this.v = a.M();
        },
        In: function (a) {
            var b = this.a, c = a.a, d = b.x - c.x, b = b.y - c.y, e = a.Y + this.Y, f = d * d + b * b;
            if (0 < f && f <= e * e) {
                var f = Math.sqrt(f), d = d / f, b = b / f, c = this.$ / (this.$ + a.$), e = e - f, f = e * c, g = this.a, l = this.a;
                g.x = l.x + d * f;
                g.y = l.y + b * f;
                l = g = a.a;
                e -= f;
                g.x = l.x - d * e;
                g.y = l.y - b * e;
                e = this.D;
                f = a.D;
                e = d * (e.x - f.x) + b * (e.y - f.y);
                0 > e && (e *= this.m * a.m + 1, c *= e, g = f = this.D, f.x = g.x - d * c, f.y = g.y - b * c, a = f = a.D, c = e - c, f.x = a.x + d * c, f.y = a.y + b * c);
            }
        },
        Jn: function (a) {
            var b, c, d;
            if (0 != 0 * a.ub) {
                b = a.W.a;
                var e = a.aa.a;
                c = e.x - b.x;
                var f = e.y - b.y, g = this.a;
                d = g.x - e.x;
                e = g.y - e.y;
                g = this.a;
                if (0 >= (g.x - b.x) * c + (g.y - b.y) * f || 0 <= d * c + e * f)
                    return;
                c = a.wa;
                b = c.x;
                c = c.y;
                d = b * d + c * e;
            } else {
                c = a.Vd;
                d = this.a;
                b = d.x - c.x;
                c = d.y - c.y;
                d = a.Fg;
                e = a.Gg;
                if ((0 < d.x * b + d.y * c && 0 < e.x * b + e.y * c) == 0 >= a.ub)
                    return;
                e = Math.sqrt(b * b + c * c);
                if (0 == e)
                    return;
                d = e - a.Uj;
                b /= e;
                c /= e;
            }
            e = a.Cc;
            if (0 == e)
                0 > d && (d = -d, b = -b, c = -c);
            else if (0 > e && (e = -e, d = -d, b = -b, c = -c), d < -e)
                return;
            d >= this.Y || (d = this.Y - d, f = e = this.a, e.x = f.x + b * d, e.y = f.y + c * d, d = this.D, d = b * d.x + c * d.y, 0 > d && (d *= this.m * a.m + 1, e = a = this.D, a.x = e.x - b * d, a.y = e.y - c * d));
        },
        sc: function () {
            var a = ya.zc, b = this.gc;
            this.hc != a && (null == b && (this.gc = b = new da()), this.hc = a, da.qd(b, this));
            return b;
        },
        f: da
    };
    ob.b = !0;
    ob.Qd = [Ta];
    ob.prototype = {
        ea: function (a) {
            a.l(this.Wd);
            a.l(this.Xd);
            a.s(this.Gb);
            a.s(this.ec);
            a.s(this.le);
            a.O(this.R);
        },
        ja: function (a) {
            this.Wd = a.B();
            this.Xd = a.B();
            this.Gb = a.u();
            this.ec = a.u();
            this.le = a.u();
            this.R = a.M();
        },
        C: function (a) {
            var b = a[this.Wd];
            a = a[this.Xd];
            if (null != b && null != a) {
                var c = b.a, d = a.a, e = c.x - d.x, c = c.y - d.y, f = Math.sqrt(e * e + c * c);
                if (!(0 >= f)) {
                    e /= f;
                    c /= f;
                    d = b.$ / (b.$ + a.$);
                    d != d && (d = 0.5);
                    var g, l;
                    if (this.Gb >= this.ec)
                        g = this.Gb, l = 0;
                    else if (f <= this.Gb)
                        g = this.Gb, l = 1;
                    else if (f >= this.ec)
                        g = this.ec, l = -1;
                    else
                        return;
                    f = g - f;
                    if (0 == 0 * this.le)
                        d = this.le * f * 0.5, e *= d, c *= d, l = d = b.D, b = b.$, d.x = l.x + e * b, d.y = l.y + c * b, d = b = a.D, a = a.$, b.x = d.x + -e * a, b.y = d.y + -c * a;
                    else {
                        g = f * d;
                        var k = b.a, h = b.a;
                        k.x = h.x + e * g * 0.5;
                        k.y = h.y + c * g * 0.5;
                        h = k = a.a;
                        f -= g;
                        k.x = h.x - e * f * 0.5;
                        k.y = h.y - c * f * 0.5;
                        f = b.D;
                        g = a.D;
                        f = e * (f.x - g.x) + c * (f.y - g.y);
                        0 >= f * l && (d *= f, b = l = b.D, l.x = b.x - e * d, l.y = b.y - c * d, a = b = a.D, d = f - d, b.x = a.x + e * d, b.y = a.y + c * d);
                    }
                }
            }
        },
        f: ob
    };
    Ga.b = !0;
    Ga.Qd = [Ta];
    Ga.qd = function (a, b) {
        if (null == b.F)
            a.F = null;
        else {
            null == a.F && (a.F = []);
            for (var c = a.F, d = b.F, e = d.length; c.length > e;)
                c.pop();
            for (var e = 0, f = d.length; e < f;) {
                var g = e++;
                c[g] = d[g].sc();
            }
        }
        a.J = b.J;
        a.U = b.U;
        a.qa = b.qa;
        a.ob = b.ob;
    };
    Ga.prototype = {
        ea: function (a) {
            a.l(this.F.length);
            for (var b = 0, c = this.F.length; b < c;) {
                var d = b++, e = this.F[d];
                e.fl = d;
                e.ea(a);
            }
        },
        ja: function (a) {
            this.F = [];
            for (var b = a.B(), c = 0; c < b;) {
                ++c;
                var d = new da();
                d.ja(a);
                this.F.push(d);
            }
        },
        C: function (a) {
            for (var b = 0, c = this.F; b < c.length;) {
                var d = c[b];
                ++b;
                var e = d.a, f = d.a, g = d.D;
                e.x = f.x + g.x * a;
                e.y = f.y + g.y * a;
                f = e = d.D;
                g = d.oa;
                d = d.Ca;
                e.x = (f.x + g.x) * d;
                e.y = (f.y + g.y) * d;
            }
            a = 0;
            for (b = this.F.length; a < b;) {
                d = a++;
                c = this.F[d];
                d += 1;
                for (e = this.F.length; d < e;)
                    f = this.F[d++], 0 != (f.h & c.v) && 0 != (f.v & c.h) && c.In(f);
                if (0 != c.$) {
                    d = 0;
                    for (e = this.qa; d < e.length;)
                        if (f = e[d], ++d, 0 != (f.h & c.v) && 0 != (f.v & c.h)) {
                            var g = f.wa, l = c.a, g = f.Ua - (g.x * l.x + g.y * l.y) + c.Y;
                            if (0 < g) {
                                var k = l = c.a, h = f.wa;
                                l.x = k.x + h.x * g;
                                l.y = k.y + h.y * g;
                                g = c.D;
                                l = f.wa;
                                g = g.x * l.x + g.y * l.y;
                                0 > g && (g *= c.m * f.m + 1, k = l = c.D, f = f.wa, l.x = k.x - f.x * g, l.y = k.y - f.y * g);
                            }
                        }
                    d = 0;
                    for (e = this.U; d < e.length;)
                        f = e[d], ++d, 0 != (f.h & c.v) && 0 != (f.v & c.h) && c.Jn(f);
                    d = 0;
                    for (e = this.J; d < e.length;)
                        if (f = e[d], ++d, 0 != (f.h & c.v) && 0 != (f.v & c.h) && (l = c.a, k = f.a, g = l.x - k.x, l = l.y - k.y, k = g * g + l * l, 0 < k && k <= c.Y * c.Y)) {
                            var k = Math.sqrt(k), g = g / k, l = l / k, k = c.Y - k, m = h = c.a;
                            h.x = m.x + g * k;
                            h.y = m.y + l * k;
                            k = c.D;
                            k = g * k.x + l * k.y;
                            0 > k && (k *= c.m * f.m + 1, h = f = c.D, f.x = h.x - g * k, f.y = h.y - l * k);
                        }
                }
            }
            for (a = 0; 2 > a;)
                for (++a, b = 0, c = this.ob; b < c.length;)
                    c[b++].C(this.F);
        },
        sc: function () {
            var a = ya.zc, b = this.gc;
            this.hc != a && (null == b && (this.gc = b = new Ga()), this.hc = a, Ga.qd(b, this));
            return b;
        },
        f: Ga
    };
    L.b = !0;
    L.prototype = {
        ea: function (a) {
            var b = this.wa;
            a.s(b.x);
            a.s(b.y);
            a.s(this.Ua);
            a.s(this.m);
            a.O(this.h);
            a.O(this.v);
        },
        ja: function (a) {
            var b = this.wa;
            b.x = a.u();
            b.y = a.u();
            this.Ua = a.u();
            this.m = a.u();
            this.h = a.M();
            this.v = a.M();
        },
        f: L
    };
    E.b = !0;
    E.prototype = {
        ea: function (a) {
            var b = 0, c = a.a;
            a.l(0);
            a.l(this.W.ud);
            a.l(this.aa.ud);
            0 != this.Cc && (b = 1, a.s(this.Cc));
            this.ub != 1 / 0 && (b |= 2, a.s(this.ub));
            0 != this.R && (b |= 4, a.O(this.R));
            this.Xa && (b |= 8);
            a.o.setUint8(c, b);
            a.s(this.m);
            a.O(this.h);
            a.O(this.v);
        },
        ja: function (a, b) {
            var c = a.B();
            this.W = b[a.B()];
            this.aa = b[a.B()];
            this.Cc = 0 != (c & 1) ? a.u() : 0;
            this.ub = 0 != (c & 2) ? a.u() : 1 / 0;
            this.R = 0 != (c & 4) ? a.M() : 0;
            this.Xa = 0 != (c & 8);
            this.m = a.u();
            this.h = a.M();
            this.v = a.M();
        },
        Nc: function (a) {
            a *= 0.017453292519943295;
            if (0 > a) {
                a = -a;
                var b = this.W;
                this.W = this.aa;
                this.aa = b;
                this.Cc = -this.Cc;
            }
            a > E.en && a < E.dn && (this.ub = 1 / Math.tan(a / 2));
        },
        uo: function () {
            return 0 != 0 * this.ub ? 0 : 114.59155902616465 * Math.atan(1 / this.ub);
        },
        fe: function () {
            if (0 == 0 * this.ub) {
                var a = this.aa.a, b = this.W.a, c = 0.5 * (a.x - b.x), a = 0.5 * (a.y - b.y), b = this.W.a, d = this.ub;
                this.Vd = new H(b.x + c + -a * d, b.y + a + c * d);
                a = this.W.a;
                b = this.Vd;
                c = a.x - b.x;
                a = a.y - b.y;
                this.Uj = Math.sqrt(c * c + a * a);
                c = this.W.a;
                a = this.Vd;
                this.Fg = new H(-(c.y - a.y), c.x - a.x);
                c = this.Vd;
                a = this.aa.a;
                this.Gg = new H(-(c.y - a.y), c.x - a.x);
                0 >= this.ub && (a = c = this.Fg, c.x = -a.x, c.y = -a.y, a = c = this.Gg, c.x = -a.x, c.y = -a.y);
            } else
                a = this.W.a, b = this.aa.a, c = a.x - b.x, a = -(a.y - b.y), b = Math.sqrt(a * a + c * c), this.wa = new H(a / b, c / b);
        },
        f: E
    };
    B.b = !0;
    B.prototype = {
        ea: function (a) {
            var b = this.a;
            a.s(b.x);
            a.s(b.y);
            a.s(this.m);
            a.O(this.h);
            a.O(this.v);
        },
        ja: function (a) {
            var b = this.a;
            b.x = a.u();
            b.y = a.u();
            this.m = a.u();
            this.h = a.M();
            this.v = a.M();
        },
        f: B
    };
    M.b = !0;
    M.lc = function (a) {
        return 'rgba(' + [
            (a & 16711680) >>> 16,
            (a & 65280) >>> 8,
            a & 255
        ].join() + ',255)';
    };
    M.Di = function (a, b) {
        a.imageSmoothingEnabled = b;
        a.mozImageSmoothingEnabled = b;
    };
    M.prototype = {
        Ho: function (a, b) {
            var c = this.cd.get(a.V);
            if (null != c)
                switch (b) {
                case 0:
                    c.Vf = !0;
                    break;
                case 1:
                    c.Vf = !1;
                }
        },
        Kr: function () {
            if (null != this.sa.parentElement) {
                var a = window.devicePixelRatio * this.xg, b = this.sa.getBoundingClientRect(), c = Math.round(b.width * a), a = Math.round(b.height * a);
                if (this.sa.width != c || this.sa.height != a)
                    this.sa.width = c, this.sa.height = a;
            }
        },
        Jc: function (a, b) {
            var c = window.performance.now(), d = (c - this.Yc) / 1000;
            this.Yc = c;
            this.Hg.clear();
            this.Kr();
            M.Di(this.c, !0);
            this.c.resetTransform();
            if (null != a.K) {
                var c = a.K, e = c.ta, f = a.na(b), g = null != f ? f.H : null, l = 0 != this.hf ? this.sa.height / this.hf : this.jf * window.devicePixelRatio * this.xg, k = this.vf * this.xg, h = c.S.Xe, m = this.sa.width / l;
                0 < h && m > h && (m = h, l = this.sa.width / h);
                h = (this.sa.height - k) / l;
                this.Hr(c, g, m, h, d);
                for (var n = 0, p = a.I; n < p.length;) {
                    var q = p[n];
                    ++n;
                    if (null != q.H) {
                        var r = this.cd.get(q.V);
                        null == r && (r = new Fa(), this.cd.set(q.V, r));
                        r.C(q, a);
                        this.Hg.set(q.H, r);
                    }
                }
                this.c.translate(this.sa.width / 2, (this.sa.height + k) / 2);
                this.c.scale(l, l);
                this.c.translate(-this.cb.x, -this.cb.y);
                this.c.lineWidth = 3;
                this.Nq(c.S);
                this.Mq(c.S);
                l = e.F;
                k = 0;
                for (n = e.ob; k < n.length;)
                    this.Hq(n[k++], l);
                this.Gq(a, m, h);
                this.Iq(a, f);
                null != g && this.Kq(g.a);
                this.c.lineWidth = 2;
                f = 0;
                for (g = a.I; f < g.length;)
                    m = g[f], ++f, h = m.H, null != h && this.Gl(h, this.cd.get(m.V));
                f = 0;
                for (e = e.F; f < e.length;)
                    g = e[f], ++f, null == this.Hg.get(g) && this.Gl(g, null);
                this.c.lineWidth = 3;
                this.c.resetTransform();
                this.c.translate(this.sa.width / 2, this.sa.height / 2);
                this.Jq(c);
                0 >= c.Na && (this.td.C(d), this.td.Jc(this.c));
                this.Hg.clear();
                this.Fq(a);
            }
        },
        Fq: function (a) {
            var b = new Set(), c = 0;
            for (a = a.I; c < a.length;)
                b.add(a[c++].V);
            c = this.cd.keys();
            for (a = c.next(); !a.done;) {
                var d = a.value;
                a = c.next();
                if (!b.has(d))
                    this.cd['delete'](d);
            }
        },
        Hr: function (a, b, c, d, e) {
            var f, g;
            if (null != b && 1 == a.S.Ee)
                g = b.a, f = g.x, g = g.y;
            else if (g = a.ta.F[0].a, f = g.x, g = g.y, null != b) {
                var h = b.a;
                f = 0.5 * (f + h.x);
                g = 0.5 * (g + h.y);
                var k = 0.5 * c, m = 0.5 * d;
                b = h.x - k + 50;
                var n = h.y - m + 50, k = h.x + k - 50, h = h.y + m - 50;
                f = f > k ? k : f < b ? b : f;
                g = g > h ? h : g < n ? n : g;
            }
            n = 60 * e;
            1 < n && (n = 1);
            b = e = this.cb;
            n *= 0.04;
            k = b.x;
            b = b.y;
            e.x = k + (f - k) * n;
            e.y = b + (g - b) * n;
            this.Qn(c, d, a.S);
        },
        Qn: function (a, b, c) {
            a > 2 * c.$b ? this.cb.x = 0 : this.cb.x + 0.5 * a > c.$b ? this.cb.x = c.$b - 0.5 * a : this.cb.x - 0.5 * a < -c.$b && (this.cb.x = -c.$b + 0.5 * a);
            b > 2 * c.qc ? this.cb.y = 0 : this.cb.y + 0.5 * b > c.qc ? this.cb.y = c.qc - 0.5 * b : this.cb.y - 0.5 * b < -c.qc && (this.cb.y = -c.qc + 0.5 * b);
        },
        Kq: function (a) {
            this.c.beginPath();
            this.c.strokeStyle = 'white';
            this.c.globalAlpha = 0.3;
            this.c.arc(a.x, a.y, 25, 0, 2 * Math.PI, !1);
            this.c.stroke();
            this.c.globalAlpha = 1;
        },
        Jq: function (a) {
            var b = 0 < a.Na;
            this.gr(b);
            b && (120 != a.Na && (a = a.Na / 120 * 200, this.c.fillStyle = 'white', this.c.fillRect(0.5 * -a, 100, a, 20)), this.td.Wp.Oq(this.c));
        },
        gr: function (a) {
            this.zk != a && (this.sa.style.filter = a ? 'grayscale(70%)' : '', this.zk = a);
        },
        Ql: function (a, b, c, d, e, f) {
            d = b + d;
            e = c + e;
            a.beginPath();
            a.moveTo(d - f, c);
            a.arcTo(d, c, d, c + f, f);
            a.lineTo(d, e - f);
            a.arcTo(d, e, d - f, e, f);
            a.lineTo(b + f, e);
            a.arcTo(b, e, b, e - f, f);
            a.lineTo(b, c + f);
            a.arcTo(b, c, b + f, c, f);
            a.closePath();
        },
        Nq: function (a) {
            var b = this;
            M.Di(this.c, !1);
            var c = a.Sd, d = a.Rd;
            if (1 == a.ld)
                this.c.save(), this.c.resetTransform(), this.c.fillStyle = M.lc(a.jd), this.c.fillRect(0, 0, this.sa.width, this.sa.height), this.c.restore(), this.c.strokeStyle = '#C7E6BD', this.c.fillStyle = this.Do, this.Ql(this.c, -c, -d, 2 * c, 2 * d, a.Sc), this.c.save(), this.c.scale(2, 2), this.c.fill(), this.c.restore(), this.c.moveTo(0, -d), this.c.lineTo(0, d), this.c.stroke(), this.c.beginPath(), this.c.arc(0, 0, a.kd, 0, 2 * Math.PI), this.c.stroke();
            else if (2 == a.ld) {
                this.c.strokeStyle = '#E9CC6E';
                this.c.save();
                this.c.beginPath();
                this.c.rect(-10000, -10000, 20000, 20000);
                this.c.scale(2, 2);
                this.c.fillStyle = this.Nn;
                this.c.fill();
                this.c.restore();
                this.c.save();
                this.Ql(this.c, -c, -d, 2 * c, 2 * d, a.Sc);
                this.c.scale(2, 2);
                this.c.fillStyle = this.Pn;
                this.c.fill();
                this.c.restore();
                this.c.stroke();
                this.c.beginPath();
                this.c.moveTo(0, -d);
                this.c.setLineDash([
                    15,
                    15
                ]);
                this.c.lineTo(0, d);
                this.c.stroke();
                this.c.setLineDash([]);
                var e = a.De, c = c - e;
                e < a.Sc && (c = 0);
                e = function (c, e, h) {
                    b.c.beginPath();
                    b.c.strokeStyle = c;
                    b.c.arc(0, 0, a.kd, -1.5707963267948966, 1.5707963267948966, h);
                    0 != e && (b.c.moveTo(e, -d), b.c.lineTo(e, d));
                    b.c.stroke();
                };
                e('#85ACF3', c, !1);
                e('#E18977', -c, !0);
            } else
                this.c.save(), this.c.resetTransform(), this.c.fillStyle = M.lc(a.jd), this.c.fillRect(0, 0, this.sa.width, this.sa.height), this.c.restore();
            M.Di(this.c, !0);
        },
        Iq: function (a, b) {
            for (var c = n.A.wk.L(), d = 0, e = a.I; d < e.length;) {
                var f = e[d];
                ++d;
                var g = f.H;
                if (null != g) {
                    var g = g.a, h = this.cd.get(f.V);
                    c && h.Vf && this.c.drawImage(n.um, g.x - 0.5 * n.um.width, g.y - 35);
                    f != b && h.ko(this.c, g.x, g.y + 50);
                }
            }
        },
        Gl: function (a, b) {
            this.c.beginPath();
            null == b ? (this.c.fillStyle = M.lc(a.R), this.c.strokeStyle = 'black') : (this.c.fillStyle = b.Ej, this.c.strokeStyle = b.co);
            this.c.beginPath();
            this.c.arc(a.a.x, a.a.y, a.Y, 0, 2 * Math.PI, !1);
            if (null != b) {
                this.c.save();
                var c = a.Y / 32;
                this.c.translate(a.a.x, a.a.y);
                this.c.scale(c, c);
                this.c.translate(-32, -32);
                this.c.fill();
                this.c.restore();
            } else
                -1 != (a.R | 0) && this.c.fill();
            this.c.stroke();
        },
        Mq: function (a) {
            if (null != a) {
                var b = 0;
                for (a = a.U; b < a.length;)
                    this.Lq(a[b++]);
            }
        },
        Hq: function (a, b) {
            if (!(0 > a.R)) {
                this.c.beginPath();
                this.c.strokeStyle = M.lc(a.R);
                var c = b[a.Wd], d = b[a.Xd];
                null != c && null != d && (c = c.a, d = d.a, this.c.moveTo(c.x, c.y), this.c.lineTo(d.x, d.y), this.c.stroke());
            }
        },
        Lq: function (a) {
            if (a.Xa) {
                this.c.beginPath();
                this.c.strokeStyle = M.lc(a.R);
                var b = a.W.a, c = a.aa.a;
                if (0 != 0 * a.ub)
                    this.c.moveTo(b.x, b.y), this.c.lineTo(c.x, c.y);
                else {
                    a = a.Vd;
                    var d = b.x - a.x, b = b.y - a.y;
                    this.c.arc(a.x, a.y, Math.sqrt(d * d + b * b), Math.atan2(b, d), Math.atan2(c.y - a.y, c.x - a.x));
                }
                this.c.stroke();
            }
        },
        Gq: function (a, b, c) {
            var d = a.K;
            if (null != d)
                for (d = d.ta.F[0], this.jk(d.a, d.R, b, c), d = 0, a = a.I; d < a.length;) {
                    var e = a[d];
                    ++d;
                    null != e.H && this.jk(e.H.a, e.ca.R, b, c);
                }
        },
        jk: function (a, b, c, d) {
            c = 0.5 * c - 25;
            d = 0.5 * d - 25;
            var e = this.cb, f = a.x - e.x, e = a.y - e.y, g = -c, h = -d, k = this.cb;
            c = k.x + (f > c ? c : f < g ? g : f);
            d = k.y + (e > d ? d : e < h ? h : e);
            f = a.x - c;
            a = a.y - d;
            900 < f * f + a * a && (this.c.fillStyle = 'rgba(0,0,0,0.5)', this.kk(c + 2, d + 2, Math.atan2(a, f)), this.c.fillStyle = M.lc(b), this.kk(c - 2, d - 2, Math.atan2(a, f)));
        },
        kk: function (a, b, c) {
            this.c.save();
            this.c.translate(a, b);
            this.c.rotate(c);
            this.c.beginPath();
            this.c.moveTo(15, 0);
            this.c.lineTo(0, 7);
            this.c.lineTo(0, -7);
            this.c.closePath();
            this.c.fill();
            this.c.restore();
        },
        Sq: function () {
            for (var a = this.cd.values(), b = a.next(); !b.done;) {
                var c = b.value, b = a.next();
                c.Vf = !1;
            }
        },
        f: M
    };
    R.b = !0;
    R.prototype = {
        ro: function () {
            return 2.31 + 0.1155 * (this.Ve.length - 1);
        },
        Jc: function (a, b) {
            var c = b / 2.31, d = 0;
            a.imageSmoothingEnabled = !0;
            for (var e = 0, f = this.Ve; e < f.length;) {
                var g = f[e];
                ++e;
                var h = c - 0.05 * d, k = 180 * R.bn.eval(h) * (0 != (d & 1) ? -1 : 1);
                a.globalAlpha = R.an.eval(h);
                a.drawImage(g, k - 0.5 * g.width, 35 * -(this.Ve.length - 1) + 70 * d - 0.5 * g.height);
                a.globalAlpha = 1;
                ++d;
            }
            a.imageSmoothingEnabled = !1;
        },
        Oq: function (a) {
            var b = 0;
            a.imageSmoothingEnabled = !0;
            for (var c = 0, d = this.Ve; c < d.length;) {
                var e = d[c];
                ++c;
                a.drawImage(e, 0.5 * -e.width, 35 * -(this.Ve.length - 1) + 70 * b - 0.5 * e.height);
                ++b;
            }
            a.imageSmoothingEnabled = !1;
        },
        lc: function (a) {
            return 'rgba(' + [
                (a & 16711680) >>> 16,
                (a & 65280) >>> 8,
                a & 255
            ].join() + ',255)';
        },
        kp: function (a, b) {
            var c = window.document.createElement('canvas'), d = c.getContext('2d', null);
            d.font = '900 70px Arial Black,Arial Bold,Gadget,sans-serif';
            c.width = Math.ceil(d.measureText(a).width) + 7;
            c.height = 90;
            d.font = '900 70px Arial Black,Arial Bold,Gadget,sans-serif';
            d.textAlign = 'left';
            d.textBaseline = 'middle';
            d.fillStyle = 'black';
            d.fillText(a, 7, 52);
            d.fillStyle = this.lc(b);
            d.fillText(a, 0, 45);
            return c;
        },
        f: R
    };
    Tb.b = !0;
    Tb.prototype = {
        Oa: function (a) {
            this.Za.push(a);
        },
        Gn: function () {
            this.Za = [];
            this.xc = 0;
        },
        C: function (a) {
            0 < this.Za.length && (this.xc += a, this.xc > this.Za[0].ro() && (this.xc = 0, this.Za.shift()));
        },
        Jc: function (a) {
            0 < this.Za.length && this.Za[0].Jc(a, this.xc);
        },
        f: Tb
    };
    Fa.b = !0;
    Fa.En = function (a, b) {
        if (a.hd != b.hd || a.dd != b.dd)
            return !1;
        var c = a.eb, d = b.eb;
        if (c.length != d.length)
            return !1;
        for (var e = 0, f = c.length; e < f;) {
            var g = e++;
            if (c[g] != d[g])
                return !1;
        }
        return !0;
    };
    Fa.Un = function (a, b) {
        a.hd = b.hd;
        a.dd = b.dd;
        a.eb = b.eb.slice(0);
    };
    Fa.prototype = {
        Yn: function () {
            var a = window.document.createElement('canvas');
            a.width = 160;
            a.height = 34;
            this.rl = a.getContext('2d', null);
        },
        Jr: function () {
            var a = this.rl;
            a.resetTransform();
            a.clearRect(0, 0, 160, 34);
            a.font = '26px sans-serif';
            a.fillStyle = 'white';
            160 < a.measureText(this.w).width ? (a.textAlign = 'left', a.translate(2, 29)) : (a.textAlign = 'center', a.translate(80, 29));
            a.fillText(this.w, 0, 0);
        },
        ko: function (a, b, c) {
            a.drawImage(this.rl.canvas, 0, 0, 160, 34, b - 40, c - 34, 80, 17);
        },
        C: function (a, b) {
            if (null != a.H) {
                var c = n.A.om.L() ? b.jb[a.ca.Z] : a.ca.nm, d = null != a.Id ? a.Id : a.Xb, e = n.A.cm.L() && null != d;
                if (!Fa.En(this.jb, c) || !e && a.Ib != this.rh || e && this.If != d)
                    Fa.Un(this.jb, c), e ? (this.If = d, this.rh = -1) : (this.If = '' + a.Ib, this.rh = a.Ib), this.Cq(this.If);
            }
            this.co = 0 < b.K.Na || !a.Wb ? 'black' : a.Wb && 0 >= a.Qc && 0 <= a.yc ? 'white' : 'black';
            a.w != this.w && (this.w = a.w, this.Jr());
        },
        Cq: function (a) {
            var b = this.jb.eb;
            if (!(1 > b.length)) {
                this.qb.save();
                this.qb.translate(32, 32);
                this.qb.rotate(3.141592653589793 * this.jb.hd / 128);
                for (var c = -32, d = 64 / b.length, e = 0; e < b.length;)
                    this.qb.fillStyle = M.lc(b[e++]), this.qb.fillRect(c, -32, d + 4, 64), c += d;
                this.qb.restore();
                this.qb.fillStyle = M.lc(this.jb.dd);
                this.qb.textAlign = 'center';
                this.qb.textBaseline = 'alphabetic';
                this.qb.font = '900 34px \'Arial Black\',\'Arial Bold\',Gadget,sans-serif';
                this.qb.fillText(a, 32, 44);
                this.Ej = this.qb.createPattern(this.qb.canvas, 'no-repeat');
            }
        },
        f: Fa
    };
    nb.b = !0;
    nb.prototype = {
        ii: function (a) {
            for (var b = this, c = 0, d = Ia.Za.length >> 2; c < d;) {
                var e = c++, f = [e], g = Ia.Za[e << 2], e = Ia.Za[(e << 2) + 1].toLowerCase(), h = [window.document.createElement('div')];
                h[0].className = 'elem';
                h[0].innerHTML = '<div class="flagico f-' + e + '"></div> ' + g;
                a.appendChild(h[0]);
                h[0].onclick = function (a, c) {
                    return function () {
                        null != b.pf && b.pf.Ja.classList.remove('selected');
                        b.th.disabled = !1;
                        b.pf = {
                            Ja: a[0],
                            index: c[0]
                        };
                        a[0].classList.add('selected');
                    };
                }(h, f);
                h[0].ondblclick = function (a) {
                    return function () {
                        b.Tl(a[0]);
                    };
                }(f);
            }
        },
        Tl: function (a) {
            var b = new T();
            b.tb = Ia.Za[(a << 2) + 1].toLowerCase();
            b.Ec = Ia.Za[(a << 2) + 2];
            b.Gc = Ia.Za[(a << 2) + 3];
            n.A.Me.Wa(b);
            A.i(this.pb);
        },
        f: nb
    };
    Ea.b = !0;
    Ea.Qo = function (a) {
        return a.parentElement.querySelector(':hover') == a;
    };
    Ea.prototype = {
        hp: function (a, b, c) {
            var d = window.document.createElement('p');
            d.className = 'announcement';
            d.textContent = a;
            0 <= b && (d.style.color = M.lc(b));
            switch (c) {
            case 1:
            case 4:
                d.style.fontWeight = 'bold';
                break;
            case 2:
            case 5:
                d.style.fontStyle = 'italic';
            }
            switch (c) {
            case 3:
            case 4:
            case 5:
                d.style.fontSize = '12px';
            }
            this.Kk(d);
        },
        Kk: function (a) {
            var b = this.dc.clientHeight, b = this.dc.scrollTop + b - this.dc.scrollHeight >= 0.5 * -b || !Ea.Qo(this.dc);
            this.dc.appendChild(a);
            b && (this.dc.scrollTop = a.offsetTop);
            for (a = b ? 50 : 100; this.dc.childElementCount > a;)
                this.dc.firstElementChild.remove();
            this.tg.update();
        },
        ha: function (a, b) {
            var c = window.document.createElement('p');
            null != b && (c.className = b);
            c.textContent = a;
            this.Kk(c);
        },
        Fb: function (a) {
            this.ha(a, 'notice');
        },
        f: Ea
    };
    mb.b = !0;
    mb.no = function (a) {
        return -1 != '.$^{[(|)*+?\\'.indexOf(a) ? '\\' + a : a;
    };
    mb.prototype = {
        Oh: function () {
            this.Ri(null);
        },
        An: function (a, b) {
            var c = this.Dq.exec(D.substr(a, 0, b));
            if (null != c) {
                var d = c[0], e = new RegExp(D.substr(d, 1, null).split('').map(mb.no).join('.*?'), 'i');
                this.Ak = '#' == d.charAt(0);
                this.pi = c.index;
                this.Qq = d.length;
                this.Hl = a;
                for (var c = function (a) {
                            a = e.exec(a.w);
                            return null == a ? -1 : a.index + a[0].length;
                        }, d = [], f = 0, g = this.Dj; f < g.length;) {
                    var h = g[f];
                    ++f;
                    var k = c(h);
                    0 <= k && d.push({
                        Vm: k,
                        item: h
                    });
                }
                d.sort(function (a, b) {
                    return a.Vm - b.Vm;
                });
                this.Ri(d);
            } else
                this.Ri(null);
        },
        hk: function (a) {
            a = this.Ak ? '#' + a.Z : '@' + J.replace(a.w, ' ', '_');
            this.Jp(D.substr(this.Hl, 0, this.pi) + a + ' ' + D.substr(this.Hl, this.pi + this.Qq, null), this.pi + a.length + 1);
        },
        Ri: function (a) {
            var b = this, c = null != a && 0 != a.length;
            this.Lb.hidden || u.Af(this.Lb);
            this.Uc = null;
            this.Lb.hidden = !c;
            if (c) {
                for (var c = [], d = 0; d < a.length;) {
                    var e = a[d++], f = window.document.createElement('div'), e = [e.item], g = e[0].w;
                    this.Ak && (g = '(' + e[0].Z + ') ' + g);
                    f.textContent = g;
                    this.Lb.appendChild(f);
                    f.onclick = function (a) {
                        return function () {
                            b.hk(a[0]);
                        };
                    }(e);
                    c.push({
                        item: e[0],
                        Ja: f
                    });
                }
                this.Uc = c;
                this.Uc[0].Ja.classList.toggle('selected', !0);
                this.wc = 0;
            }
        },
        Mj: function (a) {
            if (null != this.Uc) {
                var b = this.wc;
                this.wc += a;
                a = this.Uc.length - 1;
                0 > this.wc ? this.wc = a : this.wc > a && (this.wc = 0);
                a = this.Uc[this.wc];
                b != this.wc && (a.Ja.classList.toggle('selected', !0), this.Uc[b].Ja.classList.toggle('selected', !1));
                a = a.Ja;
                b = a.offsetTop;
                a = b + a.offsetHeight;
                var c = this.Lb.scrollTop + this.Lb.clientHeight;
                b < this.Lb.scrollTop ? this.Lb.scrollTop = b : a > c && (this.Lb.scrollTop = a - this.Lb.clientHeight);
            }
        },
        io: function () {
            null != this.Uc && (this.hk(this.Uc[this.wc].item), this.Oh());
        },
        f: mb
    };
    lb.b = !0;
    lb.prototype = {
        Dc: function () {
            var a = this.Bb.value;
            return 25 >= a.length ? 0 < a.length : !1;
        },
        C: function () {
            this.$e.disabled = !this.Dc();
        },
        f: lb
    };
    kb.b = !0;
    kb.prototype = {
        ha: function (a) {
            var b = window.document.createElement('p');
            b.textContent = a;
            this.dc.appendChild(b);
        },
        f: kb
    };
    jb.b = !0;
    jb.prototype = {
        Bj: function (a) {
            this.wm = a;
            this.vm.textContent = 'Show in room list: ' + (a ? 'No' : 'Yes');
        },
        Dc: function () {
            var a = this.Ze.value;
            return 40 >= a.length ? 0 < a.length : !1;
        },
        C: function () {
            this.Sj.disabled = !this.Dc();
        },
        f: jb
    };
    ib.b = !0;
    ib.prototype = { f: ib };
    hb.b = !0;
    hb.prototype = {
        Eg: function (a) {
            this.g.classList.toggle('restricted', a);
        },
        C: function (a) {
            var b = a.K;
            null != b && (this.xc.or(60 * a.Da), this.xc.nr(b.Hc | 0), this.Jb.set(b.Jb), this.Pb.set(b.Pb), this.Db.Jc(a, this.Nb));
        },
        f: hb
    };
    Sb.b = !0;
    Sb.prototype = {
        Ud: function (a, b) {
            var c = window.document.createElement('span');
            c.textContent = a;
            c.className = b;
            return c;
        },
        nr: function (a) {
            if (a != this.Je) {
                var b = a % 60, c = a / 60 | 0;
                this.Yq.textContent = '' + b % 10;
                this.Zq.textContent = '' + (b / 10 | 0) % 10;
                this.qp.textContent = '' + c % 10;
                this.rp.textContent = '' + (c / 10 | 0) % 10;
                this.Je = a;
            }
            this.El();
            this.Fl();
        },
        or: function (a) {
            this.Da = a;
            this.El();
            this.Fl();
        },
        El: function () {
            this.kr(0 != this.Da && this.Je > this.Da);
        },
        Fl: function () {
            this.pr(this.Je < this.Da && this.Je > this.Da - 30);
        },
        kr: function (a) {
            a != this.dk && (this.Up.className = a ? 'overtime on' : 'overtime', this.dk = a);
        },
        pr: function (a) {
            a != this.ek && (this.g.className = a ? 'game-timer-view time-warn' : 'game-timer-view', this.ek = a);
        },
        f: Sb
    };
    ja.b = !0;
    ja.prototype = {
        C: function (a) {
            null == a.T.K && this.ke(!0);
            A.i(this.ul);
            this.$h.disabled = null == a.T.K;
            this.Gd ? this.Va.C(a.T, a.T.na(a.uc)) : (a = a.Qf(), this.Eb.C(a), n.Ma.Tj.Gs(a));
        },
        ke: function (a) {
            this.Gd != a && ((this.Gd = a) ? (this.Hh.appendChild(this.Va.g), this.Eb.g.remove()) : (this.Hh.appendChild(this.Eb.g), this.Va.g.remove()));
        },
        Ro: function () {
            return null != ja.bq;
        },
        ab: function (a, b) {
            u.Af(this.gf);
            ja.bq = a;
            null != a ? (this.gf.style.display = 'flex', this.gf.appendChild(a), this.ul = b) : (this.gf.style.display = 'none', this.ul = null);
        },
        f: ja
    };
    gb.b = !0;
    gb.prototype = {
        wj: function (a) {
            this.Fj = a;
            this.tn.textContent = a ? 'Yes' : 'No';
        },
        f: gb
    };
    fb.b = !0;
    fb.prototype = { f: fb };
    eb.b = !0;
    eb.prototype = {
        Jg: function () {
            this.fi.disabled = null == this.ib;
            this.Yj.disabled = null == this.ib || null == this.ib.Cm;
            this.mk.disabled = null == this.ib;
        },
        Ok: function (a, b, c) {
            var d = this, e = window.document.createElement('div');
            e.textContent = a;
            e.className = 'elem';
            null != c && e.classList.add('custom');
            var f = {
                Ja: e,
                Od: b,
                Cm: c
            };
            e.onclick = function () {
                null != d.ib && d.ib.Ja.classList.remove('selected');
                d.ib = f;
                e.classList.add('selected');
                d.Jg();
            };
            e.ondblclick = function () {
                d.ib = f;
                d.Jg();
                return d.fi.onclick();
            };
            return e;
        },
        ii: function (a) {
            for (var b = this, c = h.Ih(), d = 0; d < c.length;) {
                var e = [c[d]];
                ++d;
                e = this.Ok(e[0].w, function (a) {
                    return function () {
                        return Promise.resolve(a[0]);
                    };
                }(e), null);
                a.appendChild(e);
            }
            aa.getAll().then(function (c) {
                for (var d = 0; d < c.length;) {
                    var e = c[d];
                    ++d;
                    var f = [e.id], e = b.Ok(e.name, function (a) {
                            return function () {
                                return aa.get(a[0]);
                            };
                        }(f), function (a) {
                            return function () {
                                return aa['delete'](a[0]);
                            };
                        }(f));
                    a.appendChild(e);
                }
                b.tg.update();
            });
        },
        f: eb
    };
    Rb.b = !0;
    Rb.prototype = {
        mn: function (a) {
            0 > a ? (a = 150, this.c.fillStyle = '#c13535') : this.c.fillStyle = 'green';
            var b = this.Si, c = this.uk, d = this.yh++;
            this.yh >= b && (this.yh = 0);
            this.Xp[d] = a;
            this.c.clearRect(d, 0, 1, c);
            a = a * c / this.np;
            this.c.fillRect(d, c - a, 1, a);
            this.Ch.clearRect(0, 0, b, c);
            this.Ch.drawImage(this.sa, b - d - 1, 0);
            this.Ch.drawImage(this.sa, -d - 1, 0);
        },
        f: Rb
    };
    db.b = !0;
    db.prototype = {
        C: function (a, b) {
            var c = a.na(this.Nb);
            null == c ? A.i(this.pb) : (this.Ir(c), this.Ff.disabled = !b || 0 == this.Nb, this.Pe.disabled = !b || 0 == this.Nb);
        },
        Ir: function (a) {
            this.de != a.w && this.Aj(a.w);
            this.ml != a.bb && this.zj(a.bb);
        },
        Aj: function (a) {
            this.de = a;
            this.Ye.textContent = a;
        },
        zj: function (a) {
            this.ml = a;
            this.Ff.textContent = a ? 'Remove Admin' : 'Give Admin';
        },
        f: db
    };
    cb.b = !0;
    cb.prototype = {
        C: function (a, b) {
            this.g.draggable = b;
            this.xb != a.xb && (this.xb = a.xb, this.pg.textContent = '' + this.xb);
            this.nn != a.bb && this.Xl(a.bb);
        },
        Xl: function (a) {
            this.nn = a;
            this.g.className = 'player-list-item' + (a ? ' admin' : '');
        },
        f: cb
    };
    Aa.b = !0;
    Aa.prototype = {
        C: function (a, b, c, d) {
            var e = this;
            this.Th.disabled = b || c;
            this.ti.disabled = c;
            b = new Set();
            c = this.xd.keys();
            for (var f = c.next(); !f.done;) {
                var g = f.value, f = c.next();
                b.add(g);
            }
            for (c = 0; c < a.length;)
                f = a[c], ++c, g = this.xd.get(f.V), null == g && (g = new cb(f), g.ef = function (a) {
                    y.i(e.ef, a);
                }, this.xd.set(f.V, g), this.Za.appendChild(g.g)), g.C(f, d), b['delete'](f.V);
            d = b.values();
            for (b = d.next(); !b.done;)
                c = b.value, b = d.next(), this.xd.get(c).g.remove(), this.xd['delete'](c);
            d = 0;
            for (b = a.length - 1; d < b;)
                f = d++, c = this.xd.get(a[f].V).g, f = this.xd.get(a[f + 1].V).g, c.nextSibling != f && this.Za.insertBefore(c, f);
        },
        f: Aa
    };
    P.b = !0;
    P.prototype = { f: P };
    ha.b = !0;
    ha.Sk = function (a) {
        a = a / 1000 | 0;
        return (a / 60 | 0) + ':' + J.yf(K.xe(a % 60));
    };
    ha.prototype = {
        C: function () {
            this.zr.textContent = ha.Sk(this.ri.Qb);
            this.tq.style.width = 100 * this.ri.yo() + '%';
            !this.Uf || 0 < this.ri.Fd || (this.Uf = !1, this.Mp());
        },
        f: ha
    };
    bb.b = !0;
    bb.prototype = {
        ir: function (a) {
            this.ck != a && (this.ck = a, this.Xf.value = a);
        },
        f: bb
    };
    ab.b = !0;
    ab.prototype = { f: ab };
    Ba.b = !0;
    Ba.vs = function (a) {
        return Promise.race([
            new Promise(function (a, c) {
                return window.setTimeout(function () {
                    c(null);
                }, 5000);
            }),
            a
        ]);
    };
    Ba.prototype = {
        Fm: function () {
            function a() {
                b.mj.disabled = !1;
                b.Tm(c);
            }
            var b = this;
            this.Wm(null);
            this.mj.disabled = !0;
            u.Af(this.dj);
            var c = [];
            this.aj = [];
            Ba.vs(va.get().then(function (a) {
                return c = a;
            }, function () {
                return {};
            })).then(a, a);
        },
        Tm: function (a) {
            var b = this;
            this.aj = a;
            va.Cs(this.bs, a);
            a.sort(function (a, b) {
                return a.Ke - b.Ke;
            });
            u.Af(this.dj);
            for (var c = 0, d = 0, e = !this.as.Ta, f = !this.us.Ta, g = 0; g < a.length;) {
                var h = [a[g]];
                ++g;
                var k = h[0].vd;
                if (!(e && k.I >= k.We || f && k.Hb)) {
                    var m = [new ab(h[0])];
                    m[0].Ja.ondblclick = function (a) {
                        return function () {
                            y.i(b.Pm, a[0]);
                        };
                    }(h);
                    m[0].Ja.onclick = function (a) {
                        return function () {
                            b.Wm(a[0]);
                        };
                    }(m);
                    this.dj.appendChild(m[0].Ja);
                    c += k.I;
                    ++d;
                }
            }
            this.Yr.textContent = '' + c + ' players in ' + d + ' rooms';
            this.ws.update();
        },
        Wm: function (a) {
            null != this.Nd && this.Nd.Ja.classList.remove('selected');
            this.Nd = a;
            null != this.Nd && this.Nd.Ja.classList.add('selected');
            this.Km.disabled = null == this.Nd;
        },
        f: Ba
    };
    $a.b = !0;
    $a.prototype = {
        Dl: function () {
            // https://www.haxball.com/rs/api/notice
        },
        f: $a
    };
    Za.b = !0;
    Za.prototype = {
        Dc: function () {
            var a = this.Bb.value;
            return 30 >= a.length ? 0 < a.length : !1;
        },
        C: function () {
            this.$e.disabled = !this.Dc();
        },
        f: Za
    };
    Ya.b = !0;
    Ya.prototype = {
        Rh: function (a, b, c, d) {
            var e = this;
            u.we(a, b.g);
            b.kg = function (a, b) {
                ia.i(e.kg, a, b);
            };
            b.ce = function (a) {
                y.i(e.ce, a);
            };
            b.Cp = function (a) {
                ia.i(e.kg, d, a);
            };
            b.ef = function (a) {
                y.i(e.ef, a);
            };
        },
        Pk: function (a) {
            for (var b = [], c = 0; c < a;) {
                var d = c++;
                b.push(null == d ? 'null' : '' + d);
            }
            return b;
        },
        Qk: function (a, b) {
            for (var c = 0; c < b.length;) {
                var d = b[c++], e = window.document.createElement('option');
                e.textContent = d;
                a.appendChild(e);
            }
        },
        mr: function (a) {
            this.Al.classList.toggle('active', a);
        },
        C: function (a, b) {
            this.Pq != a.jc && (this.Pq = a.jc, this.jc.textContent = a.jc);
            var c = null == b ? !1 : b.bb;
            this.bk != c && (this.g.className = 'room-view' + (c ? ' admin' : ''), this.bk = c);
            var d = !c || null != a.K;
            this.uf.disabled = d;
            this.nf.disabled = d;
            this.jm.disabled = d;
            d = null != a.K;
            this.km.hidden = d;
            this.mm.hidden = !d;
            this.ei.hidden = !d;
            this.uf.selectedIndex = a.Da;
            this.nf.selectedIndex = a.hb;
            this.im.textContent = a.S.w;
            this.im.classList.toggle('custom', !a.S.Oe());
            var e = a.Oc;
            this.Cl.C(a.I.filter(function (a) {
                return a.ca == q.da;
            }), e, d, c);
            this.Hj.C(a.I.filter(function (a) {
                return a.ca == q.xa;
            }), e, d, c);
            this.hm.C(a.I.filter(function (a) {
                return a.ca == q.Ia;
            }), e, d, c);
            this.Ll.disabled = d;
            this.Vh != a.Oc && this.xj(a.Oc);
            d && (c = 120 == a.K.Na, this.hl != c && this.yj(c));
        },
        xj: function (a) {
            this.Vh = a;
            this.Jk.innerHTML = this.Vh ? '<i class=\'icon-lock\'></i>Unlock' : '<i class=\'icon-lock-open\'></i>Lock';
        },
        yj: function (a) {
            this.hl = a;
            this.ei.innerHTML = '<i class=\'icon-pause\'></i>' + (this.hl ? 'Resume (P)' : 'Pause (P)');
        },
        f: Ya
    };
    ba.b = !0;
    ba.prototype = { f: ba };
    W.b = !0;
    W.prototype = { f: W };
    Xa.b = !0;
    Xa.prototype = {
        lr: function (a) {
            this.pg.textContent = null == a ? 'null' : '' + a;
        },
        jr: function (a) {
            this.op.textContent = '' + a;
        },
        $l: function (a) {
            this.oo.textContent = null == a ? 'null' : '' + a;
        },
        f: Xa
    };
    Wa.b = !0;
    Wa.prototype = { f: Wa };
    p.b = !0;
    p.ma = Error;
    p.prototype = C(Error.prototype, { f: p });
    r.b = !0;
    r.Em = function (a) {
        if (a instanceof Array && null == a.mb)
            return Array;
        var b = a.f;
        if (null != b)
            return b;
        a = r.sj(a);
        return null != a ? r.kn(a) : null;
    };
    r.Ae = function (a, b) {
        if (null == a)
            return 'null';
        if (5 <= b.length)
            return '<...>';
        var c = typeof a;
        'function' == c && (a.b || a.Ef) && (c = 'object');
        switch (c) {
        case 'function':
            return '<function>';
        case 'object':
            if (a.mb) {
                var d = Ab[a.mb], c = d.kh[a.wb], e = d[c];
                if (e.ze) {
                    b += '\t';
                    for (var c = c + '(', d = [], f = 0, e = e.ze; f < e.length;) {
                        var g = e[f];
                        ++f;
                        d.push(r.Ae(a[g], b));
                    }
                    return c + d.join(',') + ')';
                }
                return c;
            }
            if (a instanceof Array) {
                c = a.length;
                d = '[';
                b += '\t';
                for (f = 0; f < c;)
                    e = f++, d += (0 < e ? ',' : '') + r.Ae(a[e], b);
                return d + ']';
            }
            try {
                d = a.toString;
            } catch (l) {
                return '???';
            }
            if (null != d && d != Object.toString && 'function' == typeof d && (c = a.toString(), '[object Object]' != c))
                return c;
            c = null;
            d = '{\n';
            b += '\t';
            f = null != a.hasOwnProperty;
            for (c in a)
                f && !a.hasOwnProperty(c) || 'prototype' == c || '__class__' == c || '__super__' == c || '__interfaces__' == c || '__properties__' == c || (2 != d.length && (d += ', \n'), d += b + c + ' : ' + r.Ae(a[c], b));
            b = b.substring(1);
            return d + ('\n' + b + '}');
        case 'string':
            return a;
        default:
            return String(a);
        }
    };
    r.mh = function (a, b) {
        if (null == a)
            return !1;
        if (a == b)
            return !0;
        var c = a.Qd;
        if (null != c)
            for (var d = 0, e = c.length; d < e;) {
                var f = c[d++];
                if (f == b || r.mh(f, b))
                    return !0;
            }
        return r.mh(a.ma, b);
    };
    r.hn = function (a, b) {
        if (null == b)
            return !1;
        switch (b) {
        case Array:
            return a instanceof Array ? null == a.mb : !1;
        case oc:
            return 'boolean' == typeof a;
        case sc:
            return !0;
        case z:
            return 'number' == typeof a;
        case Qb:
            return 'number' == typeof a ? (a | 0) === a : !1;
        case String:
            return 'string' == typeof a;
        default:
            if (null != a)
                if ('function' == typeof b) {
                    if (a instanceof b || r.mh(r.Em(a), b))
                        return !0;
                } else {
                    if ('object' == typeof b && r.jn(b) && a instanceof b)
                        return !0;
                }
            else
                return !1;
            return b == tc && null != a.b || b == uc && null != a.Ef ? !0 : Ab[a.mb] == b;
        }
    };
    r.G = function (a, b) {
        if (r.hn(a, b))
            return a;
        throw new p('Cannot cast ' + K.xe(a) + ' to ' + K.xe(b));
    };
    r.sj = function (a) {
        a = r.ln.call(a).slice(8, -1);
        return 'Object' == a || 'Function' == a || 'Math' == a || 'JSON' == a ? null : a;
    };
    r.jn = function (a) {
        return null != r.sj(a);
    };
    r.kn = function (a) {
        return qc[a];
    };
    ic.b = !0;
    ic.Ds = function (a, b) {
        var c = new Uint8Array(this, a, null == b ? null : b - a), d = new Uint8Array(c.byteLength);
        d.set(c);
        return d.buffer;
    };
    var rc = 0;
    null == String.fromCodePoint && (String.fromCodePoint = function (a) {
        return 65536 > a ? String.fromCharCode(a) : String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320);
    });
    String.prototype.f = String;
    String.b = !0;
    Array.b = !0;
    Date.prototype.f = Date;
    Date.b = 'Date';
    var Qb = {}, sc = {}, z = Number, oc = Boolean, tc = {}, uc = {};
    q.Ia = new q(0, 16777215, 0, -1, 'Spectators', 't-spec', 0, 0);
    q.da = new q(1, 15035990, -1, 8, 'Red', 't-red', 0, 2);
    q.xa = new q(2, 5671397, 1, 16, 'Blue', 't-blue', 0, 4);
    q.Ia.ng = q.Ia;
    q.da.ng = q.xa;
    q.xa.ng = q.da;
    Object.defineProperty(p.prototype, 'message', {
        get: function () {
            return String(this.Ta);
        }
    });
    null == ArrayBuffer.prototype.slice && (ArrayBuffer.prototype.slice = ic.Ds);
    Va.Rn = {
        mandatory: {
            OfferToReceiveAudio: !1,
            OfferToReceiveVideo: !1
        }
    };
    I.nh = {
        name: 'ECDSA',
        namedCurve: 'P-256'
    };
    I.dm = {
        name: 'ECDSA',
        hash: { name: 'SHA-256' }
    };
    Ca.Mo = [
        'click-rail',
        'drag-thumb',
        'wheel',
        'touch'
    ];
    m.Hm = new Map();
    m.wf = 0;
    Ua.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    ya.zc = 0;
    $b.Bm = [
        {
            name: 'ro',
            reliable: !0,
            hj: !0
        },
        {
            name: 'ru',
            reliable: !0,
            hj: !1
        },
        {
            name: 'uu',
            reliable: !1,
            hj: !1
        }
    ];
    N.cn = 'application/x-www-form-urlencoded';
    Ia.Za = [
        'Afghanistan',
        'AF',
        33.3,
        65.1,
        'Albania',
        'AL',
        41.1,
        20.1,
        'Algeria',
        'DZ',
        28,
        1.6,
        'American Samoa',
        'AS',
        -14.2,
        -170.1,
        'Andorra',
        'AD',
        42.5,
        1.6,
        'Angola',
        'AO',
        -11.2,
        17.8,
        'Anguilla',
        'AI',
        18.2,
        -63,
        'Antigua and Barbuda',
        'AG',
        17,
        -61.7,
        'Argentina',
        'AR',
        -34.5,
        -58.4,
        'Armenia',
        'AM',
        40,
        45,
        'Aruba',
        'AW',
        12.5,
        -69.9,
        'Australia',
        'AU',
        -25.2,
        133.7,
        'Austria',
        'AT',
        47.5,
        14.5,
        'Azerbaijan',
        'AZ',
        40.1,
        47.5,
        'Bahamas',
        'BS',
        25,
        -77.3,
        'Bahrain',
        'BH',
        25.9,
        50.6,
        'Bangladesh',
        'BD',
        23.6,
        90.3,
        'Barbados',
        'BB',
        13.1,
        -59.5,
        'Belarus',
        'BY',
        53.7,
        27.9,
        'Belgium',
        'BE',
        50.5,
        4.4,
        'Belize',
        'BZ',
        17.1,
        -88.4,
        'Benin',
        'BJ',
        9.3,
        2.3,
        'Bermuda',
        'BM',
        32.3,
        -64.7,
        'Bhutan',
        'BT',
        27.5,
        90.4,
        'Bolivia',
        'BO',
        -16.2,
        -63.5,
        'Bosnia and Herzegovina',
        'BA',
        43.9,
        17.6,
        'Botswana',
        'BW',
        -22.3,
        24.6,
        'Bouvet Island',
        'BV',
        -54.4,
        3.4,
        'Brazil',
        'BR',
        -14.2,
        -51.9,
        'British Indian Ocean Territory',
        'IO',
        -6.3,
        71.8,
        'British Virgin Islands',
        'VG',
        18.4,
        -64.6,
        'Brunei',
        'BN',
        4.5,
        114.7,
        'Bulgaria',
        'BG',
        42.7,
        25.4,
        'Burkina Faso',
        'BF',
        12.2,
        -1.5,
        'Burundi',
        'BI',
        -3.3,
        29.9,
        'Cambodia',
        'KH',
        12.5,
        104.9,
        'Cameroon',
        'CM',
        7.3,
        12.3,
        'Canada',
        'CA',
        56.1,
        -106.3,
        'Cape Verde',
        'CV',
        16,
        -24,
        'Cayman Islands',
        'KY',
        19.5,
        -80.5,
        'Central African Republic',
        'CF',
        6.6,
        20.9,
        'Chad',
        'TD',
        15.4,
        18.7,
        'Chile',
        'CL',
        -35.6,
        -71.5,
        'China',
        'CN',
        35.8,
        104.1,
        'Christmas Island',
        'CX',
        -10.4,
        105.6,
        'Colombia',
        'CO',
        4.5,
        -74.2,
        'Comoros',
        'KM',
        -11.8,
        43.8,
        'Congo [DRC]',
        'CD',
        -4,
        21.7,
        'Congo [Republic]',
        'CG',
        -0.2,
        15.8,
        'Cook Islands',
        'CK',
        -21.2,
        -159.7,
        'Costa Rica',
        'CR',
        9.7,
        -83.7,
        'Croatia',
        'HR',
        45.1,
        15.2,
        'Cuba',
        'CU',
        21.5,
        -77.7,
        'Cyprus',
        'CY',
        35.1,
        33.4,
        'Czech Republic',
        'CZ',
        49.8,
        15.4,
        'Côte d\'Ivoire',
        'CI',
        7.5,
        -5.5,
        'Denmark',
        'DK',
        56.2,
        9.5,
        'Djibouti',
        'DJ',
        11.8,
        42.5,
        'Dominica',
        'DM',
        15.4,
        -61.3,
        'Dominican Republic',
        'DO',
        18.7,
        -70.1,
        'Ecuador',
        'EC',
        -1.8,
        -78.1,
        'Egypt',
        'EG',
        26.8,
        30.8,
        'El Salvador',
        'SV',
        13.7,
        -88.8,
        'Equatorial Guinea',
        'GQ',
        1.6,
        10.2,
        'Eritrea',
        'ER',
        15.1,
        39.7,
        'Estonia',
        'EE',
        58.5,
        25,
        'Ethiopia',
        'ET',
        9.1,
        40.4,
        'Faroe Islands',
        'FO',
        61.8,
        -6.9,
        'Fiji',
        'FJ',
        -16.5,
        179.4,
        'Finland',
        'FI',
        61.9,
        25.7,
        'France',
        'FR',
        46.2,
        2.2,
        'French Guiana',
        'GF',
        3.9,
        -53.1,
        'French Polynesia',
        'PF',
        -17.6,
        -149.4,
        'Gabon',
        'GA',
        -0.8,
        11.6,
        'Gambia',
        'GM',
        13.4,
        -15.3,
        'Georgia',
        'GE',
        42.3,
        43.3,
        'Germany',
        'DE',
        51.1,
        10.4,
        'Ghana',
        'GH',
        7.9,
        -1,
        'Gibraltar',
        'GI',
        36.1,
        -5.3,
        'Greece',
        'GR',
        39,
        21.8,
        'Greenland',
        'GL',
        71.7,
        -42.6,
        'Grenada',
        'GD',
        12.2,
        -61.6,
        'Guadeloupe',
        'GP',
        16.9,
        -62,
        'Guam',
        'GU',
        13.4,
        144.7,
        'Guatemala',
        'GT',
        15.7,
        -90.2,
        'Guinea',
        'GN',
        9.9,
        -9.6,
        'Guinea-Bissau',
        'GW',
        11.8,
        -15.1,
        'Guyana',
        'GY',
        4.8,
        -58.9,
        'Haiti',
        'HT',
        18.9,
        -72.2,
        'Honduras',
        'HN',
        15.1,
        -86.2,
        'Hong Kong',
        'HK',
        22.3,
        114.1,
        'Hungary',
        'HU',
        47.1,
        19.5,
        'Iceland',
        'IS',
        64.9,
        -19,
        'India',
        'IN',
        20.5,
        78.9,
        'Indonesia',
        'ID',
        -0.7,
        113.9,
        'Iran',
        'IR',
        32.4,
        53.6,
        'Iraq',
        'IQ',
        33.2,
        43.6,
        'Ireland',
        'IE',
        53.4,
        -8.2,
        'Israel',
        'IL',
        31,
        34.8,
        'Italy',
        'IT',
        41.8,
        12.5,
        'Jamaica',
        'JM',
        18.1,
        -77.2,
        'Japan',
        'JP',
        36.2,
        138.2,
        'Jordan',
        'JO',
        30.5,
        36.2,
        'Kazakhstan',
        'KZ',
        48,
        66.9,
        'Kenya',
        'KE',
        -0,
        37.9,
        'Kiribati',
        'KI',
        -3.3,
        -168.7,
        'Kosovo',
        'XK',
        42.6,
        20.9,
        'Kuwait',
        'KW',
        29.3,
        47.4,
        'Kyrgyzstan',
        'KG',
        41.2,
        74.7,
        'Laos',
        'LA',
        19.8,
        102.4,
        'Latvia',
        'LV',
        56.8,
        24.6,
        'Lebanon',
        'LB',
        33.8,
        35.8,
        'Lesotho',
        'LS',
        -29.6,
        28.2,
        'Liberia',
        'LR',
        6.4,
        -9.4,
        'Libya',
        'LY',
        26.3,
        17.2,
        'Liechtenstein',
        'LI',
        47.1,
        9.5,
        'Lithuania',
        'LT',
        55.1,
        23.8,
        'Luxembourg',
        'LU',
        49.8,
        6.1,
        'Macau',
        'MO',
        22.1,
        113.5,
        'Macedonia [FYROM]',
        'MK',
        41.6,
        21.7,
        'Madagascar',
        'MG',
        -18.7,
        46.8,
        'Malawi',
        'MW',
        -13.2,
        34.3,
        'Malaysia',
        'MY',
        4.2,
        101.9,
        'Maldives',
        'MV',
        3.2,
        73.2,
        'Mali',
        'ML',
        17.5,
        -3.9,
        'Malta',
        'MT',
        35.9,
        14.3,
        'Marshall Islands',
        'MH',
        7.1,
        171.1,
        'Martinique',
        'MQ',
        14.6,
        -61,
        'Mauritania',
        'MR',
        21,
        -10.9,
        'Mauritius',
        'MU',
        -20.3,
        57.5,
        'Mayotte',
        'YT',
        -12.8,
        45.1,
        'Mexico',
        'MX',
        23.6,
        -102.5,
        'Micronesia',
        'FM',
        7.4,
        150.5,
        'Moldova',
        'MD',
        47.4,
        28.3,
        'Monaco',
        'MC',
        43.7,
        7.4,
        'Mongolia',
        'MN',
        46.8,
        103.8,
        'Montenegro',
        'ME',
        42.7,
        19.3,
        'Montserrat',
        'MS',
        16.7,
        -62.1,
        'Morocco',
        'MA',
        31.7,
        -7,
        'Mozambique',
        'MZ',
        -18.6,
        35.5,
        'Myanmar [Burma]',
        'MM',
        21.9,
        95.9,
        'Namibia',
        'NA',
        -22.9,
        18.4,
        'Nauru',
        'NR',
        -0.5,
        166.9,
        'Nepal',
        'NP',
        28.3,
        84.1,
        'Netherlands',
        'NL',
        52.1,
        5.2,
        'Netherlands Antilles',
        'AN',
        12.2,
        -69,
        'New Caledonia',
        'NC',
        -20.9,
        165.6,
        'New Zealand',
        'NZ',
        -40.9,
        174.8,
        'Nicaragua',
        'NI',
        12.8,
        -85.2,
        'Niger',
        'NE',
        17.6,
        8,
        'Nigeria',
        'NG',
        9,
        8.6,
        'Niue',
        'NU',
        -19,
        -169.8,
        'Norfolk Island',
        'NF',
        -29,
        167.9,
        'North Korea',
        'KP',
        40.3,
        127.5,
        'Northern Mariana Islands',
        'MP',
        17.3,
        145.3,
        'Norway',
        'NO',
        60.4,
        8.4,
        'Oman',
        'OM',
        21.5,
        55.9,
        'Pakistan',
        'PK',
        30.3,
        69.3,
        'Palau',
        'PW',
        7.5,
        134.5,
        'Palestinian Territories',
        'PS',
        31.9,
        35.2,
        'Panama',
        'PA',
        8.5,
        -80.7,
        'Papua New Guinea',
        'PG',
        -6.3,
        143.9,
        'Paraguay',
        'PY',
        -23.4,
        -58.4,
        'Peru',
        'PE',
        -9.1,
        -75,
        'Philippines',
        'PH',
        12.8,
        121.7,
        'Pitcairn Islands',
        'PN',
        -24.7,
        -127.4,
        'Poland',
        'PL',
        51.9,
        19.1,
        'Portugal',
        'PT',
        39.3,
        -8.2,
        'Puerto Rico',
        'PR',
        18.2,
        -66.5,
        'Qatar',
        'QA',
        25.3,
        51.1,
        'Romania',
        'RO',
        45.9,
        24.9,
        'Russia',
        'RU',
        61.5,
        105.3,
        'Rwanda',
        'RW',
        -1.9,
        29.8,
        'Réunion',
        'RE',
        -21.1,
        55.5,
        'Saint Helena',
        'SH',
        -24.1,
        -10,
        'Saint Kitts',
        'KN',
        17.3,
        -62.7,
        'Saint Lucia',
        'LC',
        13.9,
        -60.9,
        'Saint Pierre',
        'PM',
        46.9,
        -56.2,
        'Saint Vincent',
        'VC',
        12.9,
        -61.2,
        'Samoa',
        'WS',
        -13.7,
        -172.1,
        'San Marino',
        'SM',
        43.9,
        12.4,
        'Saudi Arabia',
        'SA',
        23.8,
        45,
        'Scotland',
        'SCT',
        56.5,
        4.2,
        'Senegal',
        'SN',
        14.4,
        -14.4,
        'Serbia',
        'RS',
        44,
        21,
        'Seychelles',
        'SC',
        -4.6,
        55.4,
        'Sierra Leone',
        'SL',
        8.4,
        -11.7,
        'Singapore',
        'SG',
        1.3,
        103.8,
        'Slovakia',
        'SK',
        48.6,
        19.6,
        'Slovenia',
        'SI',
        46.1,
        14.9,
        'Solomon Islands',
        'SB',
        -9.6,
        160.1,
        'Somalia',
        'SO',
        5.1,
        46.1,
        'South Africa',
        'ZA',
        -30.5,
        22.9,
        'South Georgia',
        'GS',
        -54.4,
        -36.5,
        'South Korea',
        'KR',
        35.9,
        127.7,
        'Spain',
        'ES',
        40.4,
        -3.7,
        'Sri Lanka',
        'LK',
        7.8,
        80.7,
        'Sudan',
        'SD',
        12.8,
        30.2,
        'Suriname',
        'SR',
        3.9,
        -56,
        'Svalbard and Jan Mayen',
        'SJ',
        77.5,
        23.6,
        'Swaziland',
        'SZ',
        -26.5,
        31.4,
        'Sweden',
        'SE',
        60.1,
        18.6,
        'Switzerland',
        'CH',
        46.8,
        8.2,
        'Syria',
        'SY',
        34.8,
        38.9,
        'São Tomé and Príncipe',
        'ST',
        0.1,
        6.6,
        'Taiwan',
        'TW',
        23.6,
        120.9,
        'Tajikistan',
        'TJ',
        38.8,
        71.2,
        'Tanzania',
        'TZ',
        -6.3,
        34.8,
        'Thailand',
        'TH',
        15.8,
        100.9,
        'Timor-Leste',
        'TL',
        -8.8,
        125.7,
        'Togo',
        'TG',
        8.6,
        0.8,
        'Tokelau',
        'TK',
        -8.9,
        -171.8,
        'Tonga',
        'TO',
        -21.1,
        -175.1,
        'Trinidad and Tobago',
        'TT',
        10.6,
        -61.2,
        'Tunisia',
        'TN',
        33.8,
        9.5,
        'Turkey',
        'TR',
        38.9,
        35.2,
        'Turkmenistan',
        'TM',
        38.9,
        59.5,
        'Turks and Caicos Islands',
        'TC',
        21.6,
        -71.7,
        'Tuvalu',
        'TV',
        -7.1,
        177.6,
        'U.S. Minor Outlying Islands',
        'UM',
        0,
        0,
        'U.S. Virgin Islands',
        'VI',
        18.3,
        -64.8,
        'Uganda',
        'UG',
        1.3,
        32.2,
        'Ukraine',
        'UA',
        48.3,
        31.1,
        'United Arab Emirates',
        'AE',
        23.4,
        53.8,
        'United Kingdom',
        'GB',
        55.3,
        -3.4,
        'United States',
        'US',
        37,
        -95.7,
        'Uruguay',
        'UY',
        -32.5,
        -55.7,
        'Uzbekistan',
        'UZ',
        41.3,
        64.5,
        'Vanuatu',
        'VU',
        -15.3,
        166.9,
        'Vatican City',
        'VA',
        41.9,
        12.4,
        'Venezuela',
        'VE',
        6.4,
        -66.5,
        'Vietnam',
        'VN',
        14,
        108.2,
        'Wallis and Futuna',
        'WF',
        -13.7,
        -177.1,
        'Western Sahara',
        'EH',
        24.2,
        -12.8,
        'Yemen',
        'YE',
        15.5,
        48.5,
        'Zambia',
        'ZM',
        -13.1,
        27.8,
        'Zimbabwe',
        'ZW',
        -19,
        29.1
    ];
    n.Qr = 'wss://p2p.haxball.com/';
    n.Gf = 'https://www.haxball.com/rs/';
    n.Tf = [{ urls: 'stun:stun.l.google.com:19302' }];
    n.yq = '6LfMLFIUAAAAAC54jquwTXtcGDc_dPbJm9WtRMSz';
    n.A = new Zb();
    O.Uk = function () {
        for (var a = [], b = 0; 256 > b;)
            ++b, a.push(new H(0, 0));
        return a;
    }(this);
    O.$j = function () {
        for (var a = [], b = 0; 256 > b;)
            ++b, a.push(0);
        return a;
    }(this);
    h.Ar = w.ga(1024);
    ta.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    sb.za = m.Fa({
        Ba: !1,
        Aa: !1,
        lj: {
            Xi: 10,
            rj: 900
        }
    });
    Qa.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    ea.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    sa.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    ra.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    S.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    qa.za = m.Fa({
        Ba: !1,
        Aa: !1,
        lj: {
            Xi: 10,
            rj: 2000
        }
    });
    Pa.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    pa.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    oa.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    rb.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    Oa.za = m.Fa({});
    Na.za = m.Fa({
        Ba: !1,
        Aa: !1,
        lj: {
            Xi: 10,
            rj: 900
        }
    });
    Ha.za = m.Fa({});
    na.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    Z.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    qb.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    pb.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    ma.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    Ma.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    La.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    la.za = m.Fa({
        Ba: !1,
        Aa: !1
    });
    E.en = 0.17435839227423353;
    E.dn = 5.934119456780721;
    R.an = new Ib([
        0,
        0,
        2,
        1,
        0,
        0.35,
        1,
        0,
        1,
        0,
        0.7,
        1,
        0,
        0,
        0,
        1
    ]);
    R.bn = new Ib([
        0,
        -1,
        3,
        0,
        0,
        0.35,
        0,
        0,
        0,
        0,
        0.65,
        0,
        0,
        1,
        3,
        1
    ]);
    nb.N = '<div class=\'dialog change-location-view\'><h1>Change Location</h1><div class=\'splitter\'><div class=\'list\' data-hook=\'list\'></div><div class=\'buttons\'><button data-hook=\'change\'>Change</button><button data-hook=\'cancel\'>Cancel</button></div></div></div>';
    Ea.N = '<div class=\'chatbox-view\'><div data-hook=\'log\' class=\'log\'><p>Controls:<br/>Move: WASD or Arrows<br/>Kick: X, Space, Ctrl, Shift, Numpad 0<br/>View: Numbers 1 to 4</p></div><div class=\'autocompletebox\' data-hook=\'autocompletebox\'></div><div class=\'input\'><input data-hook=\'input\' type=\'text\' /><button data-hook=\'send\'>Send</button></div></div>';
    lb.N = '<div class=\'choose-nickname-view\'><img src="images/haxball.png" /><div class=\'dialog\'><h1>Choose nickname</h1><div class=\'label-input\'><label>Nick:</label><input data-hook=\'input\' type=\'text\' /></div><button data-hook=\'ok\'>Ok</button></div></div>';
    kb.N = '<div class=\'connecting-view\'><div class=\'dialog\'><h1>Connecting</h1><div class=\'connecting-view-log\' data-hook=\'log\'></div><button data-hook=\'cancel\'>Cancel</button></div></div>';
    jb.N = '<div class=\'create-room-view\'><div class=\'dialog\'><h1>Create room</h1><div class=\'label-input\'><label>Room name:</label><input data-hook=\'name\' required /></div><div class=\'label-input\'><label>Password:</label><input data-hook=\'pass\' /></div><div class=\'label-input\'><label>Max players:</label><select data-hook=\'max-pl\'></select></div><button data-hook=\'unlisted\'></button><div class=\'row\'><button data-hook=\'cancel\'>Cancel</button><button data-hook=\'create\'>Create</button></div></div></div>';
    ib.N = '<div class=\'disconnected-view\'><div class=\'dialog basic-dialog\'><h1>Disconnected</h1><p data-hook=\'reason\'></p><div class=\'buttons\'><button data-hook=\'ok\'>Ok</button><button data-hook=\'replay\'>Save replay</button></div></div></div>';
    hb.N = '<div class=\'game-state-view\'><div class=\'bar-container\'><div class=\'bar\'><div class=\'scoreboard\'><div class=\'teamicon red\'></div><div class=\'score\' data-hook=\'red-score\'>0</div><div>-</div><div class=\'score\' data-hook=\'blue-score\'>0</div><div class=\'teamicon blue\'></div></div><div data-hook=\'timer\'></div></div></div><div class=\'canvas\' data-hook=\'canvas\'></div></div>';
    ja.N = '<div class=\'game-view\' tabindex=\'-1\'><div class=\'top-section\' data-hook=\'gameplay-section\'></div><div class=\'bottom-section\'><div data-hook=\'stats\'></div><div data-hook=\'chatbox\'></div><div class=\'buttons\'><button data-hook=\'menu\'><i class=\'icon-menu\'></i>Menu<span class=\'tooltip\'>Toggle room menu [Escape]</span></button><button data-hook=\'settings\'><i class=\'icon-cog\'></i>Settings</button></div></div><div data-hook=\'popups\'></div></div>';
    gb.N = '<div class=\'dialog kick-player-view\'><h1 data-hook=\'title\'></h1><div class=label-input><label>Reason: </label><input type=\'text\' data-hook=\'reason\' /></div><button data-hook=\'ban-btn\'><i class=\'icon-block\'></i>Ban from rejoining: <span data-hook=\'ban-text\'></span></button><div class="row"><button data-hook=\'close\'>Cancel</button><button data-hook=\'kick\'>Kick</button></div></div>';
    fb.N = '<div class=\'dialog basic-dialog leave-room-view\'><h1>Leave room?</h1><p>Are you sure you want to leave the room?</p><div class=\'buttons\'><button data-hook=\'cancel\'>Cancel</button><button data-hook=\'leave\'><i class=\'icon-logout\'></i>Leave</button></div></div>';
    eb.N = '<div class=\'dialog pick-stadium-view\'><h1>Pick a stadium</h1><div class=\'splitter\'><div class=\'list\' data-hook=\'list\'></div><div class=\'buttons\'><button data-hook=\'pick\'>Pick</button><button data-hook=\'delete\'>Delete</button><div class=\'file-btn\'><label for=\'stadfile\'>Load</label><input id=\'stadfile\' type=\'file\' accept=\'.hbs\' data-hook=\'file\'/></div><button data-hook=\'export\'>Export</button><div class=\'spacer\'></div><button data-hook=\'cancel\'>Cancel</button></div></div></div>';
    db.N = '<div class=\'dialog\' style=\'min-width:200px\'><h1 data-hook=\'name\'></h1><button data-hook=\'admin\'></button><button data-hook=\'kick\'>Kick</button><button data-hook=\'close\'>Close</button></div>';
    cb.N = '<div class=\'player-list-item\'><div data-hook=\'flag\' class=\'flagico\'></div><div data-hook=\'name\'></div><div data-hook=\'ping\'></div></div>';
    Aa.N = '<div class=\'player-list-view\'><div class=\'buttons\'><button data-hook=\'join-btn\'>Join</button><button data-hook=\'reset-btn\' class=\'admin-only\'></button></div><div class=\'list\' data-hook=\'list\'></div></div>';
    ha.N = '<div class=\'replay-controls-view\'><button data-hook=\'reset\'><i class=\'icon-to-start\'></i></button><button data-hook=\'play\'><i data-hook=\'playicon\'></i></button><div data-hook=\'spd\'>1x</div><button data-hook=\'spddn\'>-</button><button data-hook=\'spdup\'>+</button><div data-hook=\'time\'>00:00</div><div class=\'timebar\' data-hook=\'timebar\'><div class=\'barbg\'><div class=\'bar\' data-hook=\'progbar\'></div></div><div class=\'timetooltip\' data-hook=\'timetooltip\'></div></div><button data-hook=\'leave\'>Leave</button></div>';
    bb.N = '<div class=\'dialog basic-dialog room-link-view\'><h1>Room link</h1><p>Use this url to link others directly into this room.</p><input data-hook=\'link\' readonly></input><div class=\'buttons\'><button data-hook=\'close\'>Close</button><button data-hook=\'copy\'>Copy to clipboard</button></div></div>';
    ab.qj = '<tr><td><span data-hook=\'tag\'></span><span data-hook=\'name\'></span></td><td data-hook=\'players\'></td><td data-hook=\'pass\'></td><td><div data-hook=\'flag\' class=\'flagico\'></div><span data-hook=\'distance\'></span></td></tr>';
    Ba.qj = '<div class=\'roomlist-view\'><div class=\'notice\' data-hook=\'notice\' hidden><div data-hook=\'notice-contents\'>Testing the notice.</div><div data-hook=\'notice-close\'><i class=\'icon-cancel\'></i></div></div><div class=\'dialog\'><h1>Room list</h1><p>Tip: Join rooms near you to reduce lag.</p><div class=\'splitter\'><div class=\'list\'><table class=\'header\'><colgroup><col><col><col><col></colgroup><thead><tr><td>Name</td><td>Players</td><td>Pass</td><td>Distance</td></tr></thead></table><div class=\'separator\'></div><div class=\'content\' data-hook=\'listscroll\'><table><colgroup><col><col><col><col></colgroup><tbody data-hook=\'list\'></tbody></table></div><div class=\'filters\'><span class=\'bool\' data-hook=\'fil-pass\'>Show locked <i></i></span><span class=\'bool\' data-hook=\'fil-full\'>Show full <i></i></span></div></div><div class=\'buttons\'><button data-hook=\'refresh\'><i class=\'icon-cw\'></i><div>Refresh</div></button><button data-hook=\'join\'><i class=\'icon-login\'></i><div>Join Room</div></button><button data-hook=\'create\'><i class=\'icon-plus\'></i><div>Create Room</div></button><div class=\'spacer\'></div><div class=\'file-btn\'><label for=\'replayfile\'><i class=\'icon-play\'></i><div>Replays</div></label><input id=\'replayfile\' type=\'file\' accept=\'.hbr2\' data-hook=\'replayfile\'/></div><button data-hook=\'settings\'><i class=\'icon-cog\'></i><div>Settings</div></button><button data-hook=\'changenick\'><i class=\'icon-cw\'></i><div>Change Nick</div></button></div></div><p data-hook=\'count\'></p></div></div>';
    Za.N = '<div class=\'room-password-view\'><div class=\'dialog\'><h1>Password required</h1><div class=\'label-input\'><label>Password:</label><input data-hook=\'input\' /></div><div class=\'buttons\'><button data-hook=\'cancel\'>Cancel</button><button data-hook=\'ok\'>Ok</button></div></div></div>';
    Ya.N = '<div class=\'room-view\'><div class=\'container\'><h1 data-hook=\'room-name\'></h1><div class=\'header-btns\'><button data-hook=\'rec-btn\'><i class=\'icon-circle\'></i>Rec</button><button data-hook=\'link-btn\'><i class=\'icon-link\'></i>Link</button><button data-hook=\'leave-btn\'><i class=\'icon-logout\'></i>Leave</button></div><div class=\'teams\'><div class=\'tools admin-only\'><button data-hook=\'auto-btn\'>Auto</button><button data-hook=\'rand-btn\'>Rand</button><button data-hook=\'lock-btn\'>Lock</button><button data-hook=\'reset-all-btn\'>Reset</button></div><div data-hook=\'red-list\'></div><div data-hook=\'spec-list\'></div><div data-hook=\'blue-list\'></div><div class=\'spacer admin-only\'></div></div><div class=\'settings\'><div><label class=\'lbl\'>Time limit</label><select data-hook=\'time-limit-sel\'></select></div><div><label class=\'lbl\'>Score limit</label><select data-hook=\'score-limit-sel\'></select></div><div><label class=\'lbl\'>Stadium</label><label class=\'val\' data-hook=\'stadium-name\'>testing the stadium name</label><button class=\'admin-only\' data-hook=\'stadium-pick\'>Pick</button></div></div><div class=\'controls admin-only\'><button data-hook=\'start-btn\'><i class=\'icon-play\'></i>Start game</button><button data-hook=\'stop-btn\'><i class=\'icon-stop\'></i>Stop game</button><button data-hook=\'pause-btn\'><i class=\'icon-pause\'></i>Pause</button></div></div></div>';
    ba.N = '<div class=\'dialog settings-view\'><h1>Settings</h1><button data-hook=\'close\'>Close</button><div class=\'tabs\'><button data-hook=\'soundbtn\'>Sound</button><button data-hook=\'videobtn\'>Video</button><button data-hook=\'inputbtn\'>Input</button><button data-hook=\'miscbtn\'>Misc</button></div><div data-hook=\'presskey\' tabindex=\'-1\'><div>Press a key</div></div><div class=\'tabcontents\'><div class=\'section\' data-hook=\'miscsec\'><div class=\'loc\' data-hook=\'loc\'></div><div class=\'loc\' data-hook=\'loc-ovr\'></div><button data-hook=\'loc-ovr-btn\'></button></div><div class=\'section\' data-hook=\'soundsec\'><div data-hook="tsound-main">Sounds enabled</div><div data-hook="tsound-chat">Chat sound enabled</div><div data-hook="tsound-highlight">Nick highlight sound enabled</div><div data-hook="tsound-crowd">Crowd sound enabled</div></div><div class=\'section\' data-hook=\'inputsec\'></div><div class=\'section\' data-hook=\'videosec\'><div>Viewport Mode:<select data-hook=\'viewmode\'><option>Dynamic</option><option>Restricted 840x410</option><option>Full 1x Zoom</option><option>Full 1.25x Zoom</option><option>Full 1.5x Zoom</option><option>Full 1.75x Zoom</option><option>Full 2x Zoom</option><option>Full 2.25x Zoom</option><option>Full 2.5x Zoom</option></select></div><div>FPS Limit:<select data-hook=\'fps\'><option>None (Recommended)</option><option>30</option></select></div><div>Resolution Scaling:<select data-hook=\'resscale\'><option>100%</option><option>75%</option><option>50%</option><option>25%</option></select></div><div data-hook="tvideo-teamcol">Custom team colors enabled</div><div data-hook="tvideo-showindicators">Show chat indicators</div><div data-hook="tvideo-showavatars">Show player avatars</div></div></div></div>';
    ba.Ul = 0;
    W.N = '<div class=\'simple-dialog-view\'><div class=\'dialog basic-dialog\'><h1 data-hook=\'title\'></h1><p data-hook=\'content\'></p><div class=\'buttons\' data-hook=\'buttons\'></div></div></div>';
    Xa.N = '<div class=\'stats-view\'><p>Ping: <span data-hook=\'ping\'></span></p><p>Max Ping: <span data-hook=\'max-ping\'></span></p><p>Fps: <span data-hook=\'fps\'></span></p><div data-hook=\'graph\'></div></div>';
    Wa.N = '<div class=\'unsupported-browser-view\'><div class=\'dialog\'><h1>Unsupported Browser</h1><p>Sorry! Your browser doesn\'t yet implement some features which are required for HaxBall to work.</p><p>The missing features are: <span data-hook=\'features\'></span></p><h2>Recommended browsers:</h2><div><a href="https://www.mozilla.org/firefox/new/"><img src="images/firefox-icon.png"/>Firefox</a></div><div><a href="https://www.google.com/chrome/"><img src="images/chrome-icon.png"/>Chrome</a></div><div><a href="http://www.opera.com/"><img src="images/opera-icon.png"/>Opera</a></div></div></div>';
    r.ln = {}.toString;

    kc.cj();

    return (function() {
        const $_GameState = ga;
        const $_ReplayController = Jb;
        const $_TestSimFloat = Ga;
        const $_Player = fa;
        const $_Team = q;
        const $_DiscF = da;
        const _ta = O;

        function forward(class_, key, to) {
            Object.defineProperty(class_.prototype, '_' + key, {
                get() {if (typeof this[to] === 'undefined') throw new Error(`_${key}:${to}`); return this[to]},
                set(x) {return this[to] = x},
            })
        }

        forward($_ReplayController, 'td', 'Fd');
        forward($_ReplayController, 'Mg', 'jh');
        forward($_ReplayController, 'Te', 'lf');
        forward($_ReplayController, 'v', 'C');

        forward($_ReplayController, 'L', 'T');
        forward($_ReplayController, 'vc', 'Ac');
        forward($_ReplayController, 'S', 'X');

        forward($_GameState, 'H', 'K');
        forward($_GameState, 'D', 'I');

        forward(_ta, 'zb', 'Ab');
        forward(_ta, 'Ac', 'Hc');
        forward(_ta, 'Kb', 'Pb');
        forward(_ta, 'Cb', 'Jb');
        forward(_ta, 'xa', 'Da');
        forward(_ta, 'wa', 'ta');

        forward($_TestSimFloat, 'K', 'F');

        forward($_Player, 'T', 'V');
        forward($_Player, 'mb', 'nb');
        forward($_Player, 'bc', 'Wb');
        forward($_Player, '$', 'ca');
        forward($_Player, 'F', 'H');
        forward($_Player, 'o', 'w');

        forward($_Team, 'P', 'Z');

        forward($_DiscF, 'a', 'a');
        forward($_DiscF, 'M', 'D');

        return {
            $_GameState,
            $_ReplayController,
            v: 3,
        };
    })();
}

module.exports.closure = closure;

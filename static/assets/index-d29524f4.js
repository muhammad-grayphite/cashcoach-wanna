var Yr = Object.defineProperty;
var Kr = (o, e, n) =>
    e in o ?
    Yr(o, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) :
    (o[e] = n);
var _n = (o, e, n) => (Kr(o, typeof e != "symbol" ? e + "" : e, n), n);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) t(r);
    new MutationObserver((r) => {
        for (const i of r)
            if (i.type === "childList")
                for (const s of i.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && t(s);
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const i = {};
        return (
            r.integrity && (i.integrity = r.integrity),
            r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials" ?
            (i.credentials = "include") :
            r.crossOrigin === "anonymous" ?
            (i.credentials = "omit") :
            (i.credentials = "same-origin"),
            i
        );
    }

    function t(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = n(r);
        fetch(r.href, i);
    }
})();

function K() {}

function Xr(o, e) {
    for (const n in e) o[n] = e[n];
    return o;
}

function Ar(o) {
    return o();
}

function Gn() {
    return Object.create(null);
}

function gt(o) {
    o.forEach(Ar);
}

function Dt(o) {
    return typeof o == "function";
}

function ye(o, e) {
    return o != o ?
        e == e :
        o !== e || (o && typeof o == "object") || typeof o == "function";
}
let en;

function Zn(o, e) {
    return o === e ?
        !0 :
        (en || (en = document.createElement("a")), (en.href = e), o === en.href);
}

function eo(o) {
    return Object.keys(o).length === 0;
}

function Mr(o, ...e) {
    if (o == null) {
        for (const t of e) t(void 0);
        return K;
    }
    const n = o.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n;
}

function pt(o) {
    let e;
    return Mr(o, (n) => (e = n))(), e;
}

function et(o, e, n) {
    o.$$.on_destroy.push(Mr(e, n));
}

function on(o, e, n, t) {
    if (o) {
        const r = Dr(o, e, n, t);
        return o[0](r);
    }
}

function Dr(o, e, n, t) {
    return o[1] && t ? Xr(n.ctx.slice(), o[1](t(e))) : n.ctx;
}

function sn(o, e, n, t) {
    if (o[2] && t) {
        const r = o[2](t(n));
        if (e.dirty === void 0) return r;
        if (typeof r == "object") {
            const i = [],
                s = Math.max(e.dirty.length, r.length);
            for (let l = 0; l < s; l += 1) i[l] = e.dirty[l] | r[l];
            return i;
        }
        return e.dirty | r;
    }
    return e.dirty;
}

function ln(o, e, n, t, r, i) {
    if (r) {
        const s = Dr(e, n, t, i);
        o.p(s, r);
    }
}

function an(o) {
    if (o.ctx.length > 32) {
        const e = [],
            n = o.ctx.length / 32;
        for (let t = 0; t < n; t++) e[t] = -1;
        return e;
    }
    return -1;
}

function v(o, e) {
    o.appendChild(e);
}

function I(o, e, n) {
    o.insertBefore(e, n || null);
}

function B(o) {
    o.parentNode && o.parentNode.removeChild(o);
}

function nt(o, e) {
    for (let n = 0; n < o.length; n += 1) o[n] && o[n].d(e);
}

function L(o) {
    return document.createElement(o);
}

function Xe(o) {
    return document.createElementNS("http://www.w3.org/2000/svg", o);
}

function pe(o) {
    return document.createTextNode(o);
}

function F() {
    return pe(" ");
}

function Ve() {
    return pe("");
}

function Te(o, e, n, t) {
    return o.addEventListener(e, n, t), () => o.removeEventListener(e, n, t);
}

function p(o, e, n) {
    n == null ?
        o.removeAttribute(e) :
        o.getAttribute(e) !== n && o.setAttribute(e, n);
}

function to(o) {
    let e;
    return {
        p(...n) {
            (e = n), e.forEach((t) => o.push(t));
        },
        r() {
            e.forEach((n) => o.splice(o.indexOf(n), 1));
        },
    };
}

function no(o) {
    return Array.from(o.childNodes);
}

function De(o, e) {
    (e = "" + e), o.data !== e && (o.data = e);
}

function mt(o, e) {
    o.value = e ?? "";
}

function tn(o, e, n, t) {
    n == null ?
        o.style.removeProperty(e) :
        o.style.setProperty(e, n, t ? "important" : "");
}
let Qt;

function Zt(o) {
    Qt = o;
}

function ro() {
    if (!Qt) throw new Error("Function called outside component initialization");
    return Qt;
}

function Rr(o) {
    ro().$$.on_mount.push(o);
}
const Mt = [],
    $n = [];
let Rt = [];
const kn = [],
    oo = Promise.resolve();
let xn = !1;

function io() {
    xn || ((xn = !0), oo.then(Hr));
}

function Sn(o) {
    Rt.push(o);
}

function so(o) {
    kn.push(o);
}
const wn = new Set();
let qt = 0;

function Hr() {
    if (qt !== 0) return;
    const o = Qt;
    do {
        try {
            for (; qt < Mt.length;) {
                const e = Mt[qt];
                qt++, Zt(e), lo(e.$$);
            }
        } catch (e) {
            throw ((Mt.length = 0), (qt = 0), e);
        }
        for (Zt(null), Mt.length = 0, qt = 0; $n.length;) $n.pop()();
        for (let e = 0; e < Rt.length; e += 1) {
            const n = Rt[e];
            wn.has(n) || (wn.add(n), n());
        }
        Rt.length = 0;
    } while (Mt.length);
    for (; kn.length;) kn.pop()();
    (xn = !1), wn.clear(), Zt(o);
}

function lo(o) {
    if (o.fragment !== null) {
        o.update(), gt(o.before_update);
        const e = o.dirty;
        (o.dirty = [-1]),
        o.fragment && o.fragment.p(o.ctx, e),
            o.after_update.forEach(Sn);
    }
}

function ao(o) {
    const e = [],
        n = [];
    Rt.forEach((t) => (o.indexOf(t) === -1 ? e.push(t) : n.push(t))),
        n.forEach((t) => t()),
        (Rt = e);
}
const nn = new Set();
let St;

function Oe() {
    St = {
        r: 0,
        c: [],
        p: St
    };
}

function Ce() {
    St.r || gt(St.c), (St = St.p);
}

function E(o, e) {
    o && o.i && (nn.delete(o), o.i(e));
}

function q(o, e, n, t) {
    if (o && o.o) {
        if (nn.has(o)) return;
        nn.add(o),
            St.c.push(() => {
                nn.delete(o), t && (n && o.d(1), t());
            }),
            o.o(e);
    } else t && t();
}

function Le(o) {
    return (o == null ? void 0 : o.length) !== void 0 ? o : Array.from(o);
}

function co(o, e, n) {
    const t = o.$$.props[e];
    t !== void 0 && ((o.$$.bound[t] = n), n(o.$$.ctx[t]));
}

function Q(o) {
    o && o.c();
}

function G(o, e, n) {
    const {
        fragment: t,
        after_update: r
    } = o.$$;
    t && t.m(e, n),
        Sn(() => {
            const i = o.$$.on_mount.map(Ar).filter(Dt);
            o.$$.on_destroy ? o.$$.on_destroy.push(...i) : gt(i),
                (o.$$.on_mount = []);
        }),
        r.forEach(Sn);
}

function Z(o, e) {
    const n = o.$$;
    n.fragment !== null &&
        (ao(n.after_update),
            gt(n.on_destroy),
            n.fragment && n.fragment.d(e),
            (n.on_destroy = n.fragment = null),
            (n.ctx = []));
}

function uo(o, e) {
    o.$$.dirty[0] === -1 && (Mt.push(o), io(), o.$$.dirty.fill(0)),
        (o.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}

function _e(o, e, n, t, r, i, s, l = [-1]) {
    const c = Qt;
    Zt(o);
    const a = (o.$$ = {
        fragment: null,
        ctx: [],
        props: i,
        update: K,
        not_equal: r,
        bound: Gn(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (c ? c.$$.context : [])),
        callbacks: Gn(),
        dirty: l,
        skip_bound: !1,
        root: e.target || c.$$.root,
    });
    s && s(a.root);
    let m = !1;
    if (
        ((a.ctx = n ?
                n(o, e.props || {}, (h, $, ...k) => {
                    const A = k.length ? k[0] : $;
                    return (
                        a.ctx &&
                        r(a.ctx[h], (a.ctx[h] = A)) &&
                        (!a.skip_bound && a.bound[h] && a.bound[h](A), m && uo(o, h)),
                        $
                    );
                }) :
                []),
            a.update(),
            (m = !0),
            gt(a.before_update),
            (a.fragment = t ? t(a.ctx) : !1),
            e.target)
    ) {
        if (e.hydrate) {
            const h = no(e.target);
            a.fragment && a.fragment.l(h), h.forEach(B);
        } else a.fragment && a.fragment.c();
        e.intro && E(o.$$.fragment), G(o, e.target, e.anchor), Hr();
    }
    Zt(c);
}
class we {
    constructor() {
        _n(this, "$$");
        _n(this, "$$set");
    }
    $destroy() {
        Z(this, 1), (this.$destroy = K);
    }
    $on(e, n) {
        if (!Dt(n)) return K;
        const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return (
            t.push(n),
            () => {
                const r = t.indexOf(n);
                r !== -1 && t.splice(r, 1);
            }
        );
    }
    $set(e) {
        this.$$set &&
            !eo(e) &&
            ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
}
const fo = "4";
typeof window < "u" &&
    (window.__svelte || (window.__svelte = {
        v: new Set()
    })).v.add(fo);
const At = [];

function rt(o, e = K) {
    let n;
    const t = new Set();

    function r(l) {
        if (ye(o, l) && ((o = l), n)) {
            const c = !At.length;
            for (const a of t) a[1](), At.push(a, o);
            if (c) {
                for (let a = 0; a < At.length; a += 2) At[a][0](At[a + 1]);
                At.length = 0;
            }
        }
    }

    function i(l) {
        r(l(o));
    }

    function s(l, c = K) {
        const a = [l, c];
        return (
            t.add(a),
            t.size === 1 && (n = e(r, i) || K),
            l(o),
            () => {
                t.delete(a), t.size === 0 && n && (n(), (n = null));
            }
        );
    }
    return {
        set: r,
        update: i,
        subscribe: s
    };
}
let Ht = rt(""),
    Bt = rt([]),
    On = rt(null),
    cn = rt(null),
    un = rt(!1),
    Ut = rt(!1),
    wt = rt("chat"),
    Cn = rt([]),
    Wt = rt(""),
    Br = rt(!1),
    Ot = rt({
        logo: "",
        title: "Welcome to CashCoach",
        subtitle: "Loading...",
        show_training_data: !0,
        suggested_questions: !0,
        sql: !0,
        table: !0,
        csv_download: !0,
        chart: !0,
        redraw_chart: !0,
        auto_fix_sql: !0,
        ask_results_correct: !0,
        followup_questions: !0,
        summarization: !0,
    }),
    fn = rt(null);

function dn() {
    Bt.set([]), un.set(!1), Ut.set(!1);
}
async function Ln(o, pp) {
    dn();
    let e = pt(Ot);
    ue({
        type: "user_question",
        question: o,
        userId: pp
    }), un.set(!0);
    const n = await xe("generate_sql", "GET", {
        question: o,
        userId: pp
    });
    if ((ue(n), n.type !== "sql")) return;
    (window.location.hash = n.id), Ht.set(n.id), Wt.set(n.text);
    const t = await xe("run_sql", "GET", {
        id: n.id,
        userId: pp
    });
    if ((ue(t), t.type !== "df")) return;
    const r = await xe("generate_plotly_figure", "GET", {
        id: t.id
    });
    if ((ue(r), r.type === "plotly_figure")) {
        if (
            (Cn.update((i) => [...i, {
                question: o,
                id: r.id
            }]), e.summarization)
        ) {
            const i = await xe("generate_summary", "GET", {
                id: r.id
            });
            ue(i);
        }
        ue({
            type: "feedback_question"
        }), ue({
            type: "feedback_buttons"
        });
    }
}
async function po(o) {
    let e = pt(Ot);
    if ((ue(o), o.type !== "sql")) return;
    (window.location.hash = o.id), Ht.set(o.id), Wt.set(o.text);
    const n = await xe("run_sql", "GET", {
        id: o.id
    });
    if ((ue(n), n.type !== "df")) return;
    const t = await xe("generate_plotly_figure", "GET", {
        id: n.id
    });
    if ((ue(t), t.type === "plotly_figure")) {
        if (e.summarization) {
            const r = await xe("generate_summary", "GET", {
                id: t.id
            });
            ue(r);
        }
        ue({
            type: "feedback_question"
        }), ue({
            type: "feedback_buttons"
        });
    }
}

function mo(o) {
    ue({
            type: "user_question",
            question: "Re-run the SQL"
        }),
        xe("run_sql", "GET", {
            id: o
        })
        .then(ue)
        .then((e) => {
            e.type === "df" &&
                xe("generate_plotly_figure", "GET", {
                    id: e.id
                })
                .then(ue)
                .then((n) => {
                    n.type === "plotly_figure" &&
                        xe("generate_followup_questions", "GET", {
                            id: n.id
                        }).then(ue);
                });
        });
}

function go() {
    xe("get_question_history", "GET", []).then(wo);
}

function ho() {
    xe("get_config", "GET", []).then(_o);
}

function Ir() {
    (window.location.hash = "training-data"),
    wt.set("training-data"),
        xe("get_training_data", "GET", []).then(rn);
}

function Nr() {
    (window.location.hash = ""),
    wt.set("chat"),
        dn(),
        pt(On) === null && xe("generate_questions", "GET", []).then(vo);
}

function yo(o) {
    (window.location.hash = o),
    wt.set("chat"),
        dn(),
        un.set(!0),
        xe("load_question", "GET", {
            id: o
        }).then(ue);
}

function bo(o) {
    cn.set(null),
        xe("remove_training_data", "POST", {
            id: o
        }).then((e) => {
            xe("get_training_data", "GET", []).then(rn);
        });
}

function ue(o) {
    return o.type === "not_logged_in" ?
        (fn.set(o.html), wt.set("login"), o) :
        (Bt.update((e) => [...e, o]), ko(), o);
}

function rn(o) {
    return (
        cn.set(o),
        o.type === "df" ?
        JSON.parse(o.df).length === 0 && wt.set("no-training-data") :
        o.type === "not_logged_in" && (fn.set(o.html), wt.set("login")),
        o
    );
}

function vo(o) {
    return On.set(o), o;
}

function _o(o) {
    return (
        o.type === "config" ?
        Ot.set(o.config) :
        o.type === "not_logged_in" && (fn.set(o.html), wt.set("login")),
        o
    );
}

function wo(o) {
    return o.type === "question_history" && Cn.set(o.questions), o;
}

function $o(o, e) {
    cn.set(null);
    let n = {};
    (n[e] = o),
    xe("train", "POST", n)
        .then(rn)
        .then((t) => {
            t.type !== "error" && xe("get_training_data", "GET", []).then(rn);
        });
}
async function xe(o, e, n) {
    try {
        Ut.set(!0);
        let t = "",
            r;
        if (e === "GET")
            (t = Object.entries(n)
                .filter(([s, l]) => s !== "endpoint" && s !== "addMessage")
                .map(([s, l]) => `${encodeURIComponent(s)}=${encodeURIComponent(l)}`)
                .join("&")),
            (r = await fetch(`/api/v0/${o}?${t}`));
        else {
            let s = JSON.stringify(n);
            r = await fetch(`/api/v0/${o}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: s,
            });
        }
        if (!r.ok)
            throw new Error(
                "The server returned an error. See the server logs for more details."
            );
        const i = await r.json();
        return Ut.set(!1), i;
    } catch (t) {
        return Ut.set(!1), {
            type: "error",
            error: String(t)
        };
    }
}

function ko() {
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    }, 100);
}

function xo() {
    let o = pt(Bt),
        e = o.find((n) => n.type === "user_question");
    if (e && e.type === "user_question") {
        let n = o.findLast((t) => t.type === "sql");
        if (n && n.type === "sql") return {
            question: e.question,
            sql: n.text
        };
    }
    return null;
}

function pn(o) {
    Bt.update((e) => e.filter((n) => n.type !== o));
}

function So(o) {
    xe("fix_sql", "POST", {
        id: pt(Ht),
        error: o
    }).then(po);
}

function Oo(o) {
    let n = pt(Bt).find((t) => t.type === "user_question");
    n &&
        n.type === "user_question" &&
        (xe("update_sql", "POST", {
                id: pt(Ht),
                sql: o
            })
            .then(ue)
            .then((t) => {
                t.type === "sql" &&
                    (Wt.set(t.text),
                        xe("run_sql", "GET", {
                            id: t.id
                        })
                        .then(ue)
                        .then((r) => {
                            r.type === "df" ?
                                JSON.parse(r.df).length > 1 ?
                                xe("generate_plotly_figure", "GET", {
                                    id: r.id
                                })
                                .then(ue)
                                .then((s) => {
                                    ue({
                                            type: "feedback_question"
                                        }),
                                        ue({
                                            type: "feedback_buttons"
                                        });
                                }) :
                                (ue({
                                        type: "feedback_question"
                                    }),
                                    ue({
                                        type: "feedback_buttons"
                                    })) :
                                (ue({
                                        type: "feedback_question"
                                    }),
                                    ue({
                                        type: "feedback_buttons"
                                    }));
                        }));
            }),
            pn("user_sql"));
}

function Co() {
    ue({
        type: "chart_modification"
    });
}

function Lo() {
    pn("feedback_buttons"), ue({
        type: "feedback_correct"
    });
    let o = xo();
    o &&
        (xe("train", "POST", o),
            xe("generate_followup_questions", "GET", {
                id: pt(Ht)
            }).then(ue));
}

function Un() {
    pn("feedback_buttons"),
        ue({
            type: "feedback_incorrect"
        }),
        ue({
            type: "user_sql"
        });
}

function Eo(o) {
    pn("chart_modification"),
        ue({
            type: "user_question",
            question: "Update the chart with these instructions: " + o,
        }),
        xe("generate_plotly_figure", "GET", {
            id: pt(Ht),
            chart_instructions: o,
        }).then(ue);
}

function Qn(o, e, n) {
    const t = o.slice();
    return (t[3] = e[n]), t;
}

function Wn(o) {
    let e, n, t, r;
    return {
        c() {
            (e = L("li")),
            (n = L("button")),
            (n.innerHTML = `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path></svg>
              Training Data`),
            p(
                n,
                "class",
                "flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 border-t border-b border-gray-200 dark:border-gray-700 w-full"
            );
        },
        m(i, s) {
            I(i, e, s), v(e, n), t || ((r = Te(n, "click", Ir)), (t = !0));
        },
        d(i) {
            i && B(e), (t = !1), r();
        },
    };
}

function Fn(o) {
    let e,
        n,
        t,
        r,
        i,
        s = o[3].question + "",
        l,
        c,
        a,
        m;

    function h() {
        return o[2](o[3]);
    }
    return {
        c() {
            (e = L("li")),
            (n = L("button")),
            (t = Xe("svg")),
            (r = Xe("path")),
            (i = F()),
            (l = pe(s)),
            (c = F()),
            p(r, "stroke-linecap", "round"),
                p(r, "stroke-linejoin", "round"),
                p(
                    r,
                    "d",
                    "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                ),
                p(t, "class", "w-3.5 h-3.5"),
                p(t, "fill", "none"),
                p(t, "stroke", "currentColor"),
                p(t, "stroke-width", "1.5"),
                p(t, "viewBox", "0 0 24 24"),
                p(t, "xmlns", "http://www.w3.org/2000/svg"),
                p(t, "aria-hidden", "true"),
                p(
                    n,
                    "class",
                    "flex items-center text-left gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                );
        },
        m($, k) {
            I($, e, k),
                v(e, n),
                v(n, t),
                v(t, r),
                v(n, i),
                v(n, l),
                v(e, c),
                a || ((m = Te(n, "click", h)), (a = !0));
        },
        p($, k) {
            (o = $), k & 2 && s !== (s = o[3].question + "") && De(l, s);
        },
        d($) {
            $ && B(e), (a = !1), m();
        },
    };
}

function To(o) {
    let e,
        n,
        t,
        r,
        i,
        s,
        l,
        c,
        a,
        m,
        h,
        $,
        k,
        A,
        j,
        b,
        d,
        g,
        w = o[0].show_training_data && Wn(),
        D = Le(o[1]),
        M = [];
    for (let O = 0; O < D.length; O += 1) M[O] = Fn(Qn(o, D, O));
    return {
        c() {
            (e = L("div")),
            (n = L("nav")),
            (t = L("div")),
            (r = L("img")),
            (s = F()),
            (l = L("div")),
            (l.innerHTML =
                '<button type="button" class="w-8 h-8 inline-flex justify-center items-center gap-2 rounded-md text-gray-700 align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all dark:text-gray-400 dark:focus:ring-offset-gray-800" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation"><svg class="w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path></svg> <span class="sr-only">Sidebar</span></button>'),
            (c = F()),
            (a = L("div")),
            (m = L("ul")),
            w && w.c(),
                (h = F()),
                ($ = L("li")),
                (k = L("button")),
                (k.innerHTML = `<svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C8.47339 2 8.85714 2.38376 8.85714 2.85714V7.14286L13.1429 7.14286C13.6162 7.14286 14 7.52661 14 8C14 8.47339 13.6162 8.85714 13.1429 8.85714L8.85714 8.85715V13.1429C8.85714 13.6162 8.47339 14 8 14C7.52661 14 7.14286 13.6162 7.14286 13.1429V8.85715L2.85714 8.85715C2.38376 8.85715 2 8.4734 2 8.00001C2 7.52662 2.38376 7.14287 2.85714 7.14287L7.14286 7.14286V2.85714C7.14286 2.38376 7.52661 2 8 2Z" fill="currentColor"></path></svg>
              New question`),
                (A = F());
            for (let O = 0; O < M.length; O += 1) M[O].c();
            (j = F()),
            (b = L("div")),
            (b.innerHTML = `<div class="py-2.5 px-7"><p class="inline-flex items-center gap-x-2 text-xs text-green-600"><span class="block w-1.5 h-1.5 rounded-full bg-green-600"></span>
            Connected</p></div> <div class="p-4 border-t border-gray-200 dark:border-gray-700"><a class="flex justify-between items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300" href="/auth/logout">Sign out
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"></path><path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"></path></svg></a></div>`),
            p(r, "class", "h-auto"),
                Zn(r.src, (i = o[0].logo)) || p(r, "src", i),
                p(r, "alt", "cashcoach Logo"),
                p(l, "class", "lg:hidden"),
                p(t, "class", "flex items-center justify-between py-4 pr-4 pl-7"),
                p(
                    k,
                    "class",
                    "flex items-center gap-x-3 py-2 px-3 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                ),
                p(m, "class", "space-y-1.5 p-4"),
                p(a, "class", "h-full"),
                p(b, "class", "mt-auto"),
                p(n, "class", "hs-accordion-group w-full h-full flex flex-col"),
                p(n, "data-hs-accordion-always-open", ""),
                p(e, "id", "application-sidebar"),
                p(
                    e,
                    "class",
                    "hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-slate-900 dark:border-gray-700"
                );
        },
        m(O, u) {
            I(O, e, u),
                v(e, n),
                v(n, t),
                v(t, r),
                v(t, s),
                v(t, l),
                v(n, c),
                v(n, a),
                v(a, m),
                w && w.m(m, null),
                v(m, h),
                v(m, $),
                v($, k),
                v(m, A);
            for (let f = 0; f < M.length; f += 1) M[f] && M[f].m(m, null);
            v(n, j), v(n, b), d || ((g = Te(k, "click", Nr)), (d = !0));
        },
        p(O, [u]) {
            if (
                (u & 1 && !Zn(r.src, (i = O[0].logo)) && p(r, "src", i),
                    O[0].show_training_data ?
                    w || ((w = Wn()), w.c(), w.m(m, h)) :
                    w && (w.d(1), (w = null)),
                    u & 2)
            ) {
                D = Le(O[1]);
                let f;
                for (f = 0; f < D.length; f += 1) {
                    const S = Qn(O, D, f);
                    M[f] ? M[f].p(S, u) : ((M[f] = Fn(S)), M[f].c(), M[f].m(m, null));
                }
                for (; f < M.length; f += 1) M[f].d(1);
                M.length = D.length;
            }
        },
        i: K,
        o: K,
        d(O) {
            O && B(e), w && w.d(), nt(M, O), (d = !1), g();
        },
    };
}

function jo(o, e, n) {
    let t, r;
    return (
        et(o, Ot, (s) => n(0, (t = s))),
        et(o, Cn, (s) => n(1, (r = s))),
        [
            t,
            r,
            (s) => {
                yo(s.id);
            },
        ]
    );
}
class Po extends we {
    constructor(e) {
        super(), _e(this, e, jo, To, ye, {});
    }
}
var qo = {
    exports: {}
};
/*! For license information please see preline.js.LICENSE.txt */
(function(
    o,
    e
) {
    (function(n, t) {
        o.exports = t();
    })(self, function() {
        return (() => {
            var n = {
                    661: (s, l, c) => {
                        function a(j) {
                            return (
                                (a =
                                    typeof Symbol == "function" &&
                                    typeof Symbol.iterator == "symbol" ?
                                    function(b) {
                                        return typeof b;
                                    } :
                                    function(b) {
                                        return b &&
                                            typeof Symbol == "function" &&
                                            b.constructor === Symbol &&
                                            b !== Symbol.prototype ?
                                            "symbol" :
                                            typeof b;
                                    }),
                                a(j)
                            );
                        }

                        function m(j, b) {
                            for (var d = 0; d < b.length; d++) {
                                var g = b[d];
                                (g.enumerable = g.enumerable || !1),
                                (g.configurable = !0),
                                "value" in g && (g.writable = !0),
                                    Object.defineProperty(j, g.key, g);
                            }
                        }

                        function h(j, b) {
                            return (
                                (h =
                                    Object.setPrototypeOf ||
                                    function(d, g) {
                                        return (d.__proto__ = g), d;
                                    }),
                                h(j, b)
                            );
                        }

                        function $(j, b) {
                            if (b && (a(b) === "object" || typeof b == "function")) return b;
                            if (b !== void 0)
                                throw new TypeError(
                                    "Derived constructors may only return object or undefined"
                                );
                            return (function(d) {
                                if (d === void 0)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return d;
                            })(j);
                        }

                        function k(j) {
                            return (
                                (k = Object.setPrototypeOf ?
                                    Object.getPrototypeOf :
                                    function(b) {
                                        return b.__proto__ || Object.getPrototypeOf(b);
                                    }),
                                k(j)
                            );
                        }
                        var A = (function(j) {
                            (function(O, u) {
                                if (typeof u != "function" && u !== null)
                                    throw new TypeError(
                                        "Super expression must either be null or a function"
                                    );
                                (O.prototype = Object.create(u && u.prototype, {
                                    constructor: {
                                        value: O,
                                        writable: !0,
                                        configurable: !0
                                    },
                                })),
                                Object.defineProperty(O, "prototype", {
                                        writable: !1
                                    }),
                                    u && h(O, u);
                            })(M, j);
                            var b,
                                d,
                                g,
                                w,
                                D =
                                ((g = M),
                                    (w = (function() {
                                        if (
                                            typeof Reflect > "u" ||
                                            !Reflect.construct ||
                                            Reflect.construct.sham
                                        )
                                            return !1;
                                        if (typeof Proxy == "function") return !0;
                                        try {
                                            return (
                                                Boolean.prototype.valueOf.call(
                                                    Reflect.construct(Boolean, [], function() {})
                                                ),
                                                !0
                                            );
                                        } catch {
                                            return !1;
                                        }
                                    })()),
                                    function() {
                                        var O,
                                            u = k(g);
                                        if (w) {
                                            var f = k(this).constructor;
                                            O = Reflect.construct(u, arguments, f);
                                        } else O = u.apply(this, arguments);
                                        return $(this, O);
                                    });

                            function M() {
                                return (
                                    (function(O, u) {
                                        if (!(O instanceof u))
                                            throw new TypeError("Cannot call a class as a function");
                                    })(this, M),
                                    D.call(this, ".hs-accordion")
                                );
                            }
                            return (
                                (b = M),
                                (d = [{
                                        key: "init",
                                        value: function() {
                                            var O = this;
                                            document.addEventListener("click", function(u) {
                                                var f = u.target,
                                                    S = f.closest(O.selector),
                                                    T = f.closest(".hs-accordion-toggle"),
                                                    C = f.closest(".hs-accordion-group");
                                                S && C && T && (O._hideAll(S), O.show(S));
                                            });
                                        },
                                    },
                                    {
                                        key: "show",
                                        value: function(O) {
                                            var u = this;
                                            if (O.classList.contains("active")) return this.hide(O);
                                            O.classList.add("active");
                                            var f = O.querySelector(".hs-accordion-content");
                                            (f.style.display = "block"),
                                            (f.style.height = 0),
                                            setTimeout(function() {
                                                    f.style.height = "".concat(f.scrollHeight, "px");
                                                }),
                                                this.afterTransition(f, function() {
                                                    O.classList.contains("active") &&
                                                        ((f.style.height = ""),
                                                            u._fireEvent("open", O),
                                                            u._dispatch("open.hs.accordion", O, O));
                                                });
                                        },
                                    },
                                    {
                                        key: "hide",
                                        value: function(O) {
                                            var u = this,
                                                f = O.querySelector(".hs-accordion-content");
                                            (f.style.height = "".concat(f.scrollHeight, "px")),
                                            setTimeout(function() {
                                                    f.style.height = 0;
                                                }),
                                                this.afterTransition(f, function() {
                                                    O.classList.contains("active") ||
                                                        ((f.style.display = ""),
                                                            u._fireEvent("hide", O),
                                                            u._dispatch("hide.hs.accordion", O, O));
                                                }),
                                                O.classList.remove("active");
                                        },
                                    },
                                    {
                                        key: "_hideAll",
                                        value: function(O) {
                                            var u = this,
                                                f = O.closest(".hs-accordion-group");
                                            f.hasAttribute("data-hs-accordion-always-open") ||
                                                f.querySelectorAll(this.selector).forEach(function(S) {
                                                    O !== S && u.hide(S);
                                                });
                                        },
                                    },
                                ]) && m(b.prototype, d),
                                Object.defineProperty(b, "prototype", {
                                    writable: !1
                                }),
                                M
                            );
                        })(c(765).Z);
                        (window.HSAccordion = new A()),
                        document.addEventListener("load", window.HSAccordion.init());
                    },
                    795: (s, l, c) => {
                        function a(b) {
                            return (
                                (a =
                                    typeof Symbol == "function" &&
                                    typeof Symbol.iterator == "symbol" ?
                                    function(d) {
                                        return typeof d;
                                    } :
                                    function(d) {
                                        return d &&
                                            typeof Symbol == "function" &&
                                            d.constructor === Symbol &&
                                            d !== Symbol.prototype ?
                                            "symbol" :
                                            typeof d;
                                    }),
                                a(b)
                            );
                        }

                        function m(b, d) {
                            (d == null || d > b.length) && (d = b.length);
                            for (var g = 0, w = new Array(d); g < d; g++) w[g] = b[g];
                            return w;
                        }

                        function h(b, d) {
                            for (var g = 0; g < d.length; g++) {
                                var w = d[g];
                                (w.enumerable = w.enumerable || !1),
                                (w.configurable = !0),
                                "value" in w && (w.writable = !0),
                                    Object.defineProperty(b, w.key, w);
                            }
                        }

                        function $(b, d) {
                            return (
                                ($ =
                                    Object.setPrototypeOf ||
                                    function(g, w) {
                                        return (g.__proto__ = w), g;
                                    }),
                                $(b, d)
                            );
                        }

                        function k(b, d) {
                            if (d && (a(d) === "object" || typeof d == "function")) return d;
                            if (d !== void 0)
                                throw new TypeError(
                                    "Derived constructors may only return object or undefined"
                                );
                            return (function(g) {
                                if (g === void 0)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return g;
                            })(b);
                        }

                        function A(b) {
                            return (
                                (A = Object.setPrototypeOf ?
                                    Object.getPrototypeOf :
                                    function(d) {
                                        return d.__proto__ || Object.getPrototypeOf(d);
                                    }),
                                A(b)
                            );
                        }
                        var j = (function(b) {
                            (function(u, f) {
                                if (typeof f != "function" && f !== null)
                                    throw new TypeError(
                                        "Super expression must either be null or a function"
                                    );
                                (u.prototype = Object.create(f && f.prototype, {
                                    constructor: {
                                        value: u,
                                        writable: !0,
                                        configurable: !0
                                    },
                                })),
                                Object.defineProperty(u, "prototype", {
                                        writable: !1
                                    }),
                                    f && $(u, f);
                            })(O, b);
                            var d,
                                g,
                                w,
                                D,
                                M =
                                ((w = O),
                                    (D = (function() {
                                        if (
                                            typeof Reflect > "u" ||
                                            !Reflect.construct ||
                                            Reflect.construct.sham
                                        )
                                            return !1;
                                        if (typeof Proxy == "function") return !0;
                                        try {
                                            return (
                                                Boolean.prototype.valueOf.call(
                                                    Reflect.construct(Boolean, [], function() {})
                                                ),
                                                !0
                                            );
                                        } catch {
                                            return !1;
                                        }
                                    })()),
                                    function() {
                                        var u,
                                            f = A(w);
                                        if (D) {
                                            var S = A(this).constructor;
                                            u = Reflect.construct(f, arguments, S);
                                        } else u = f.apply(this, arguments);
                                        return k(this, u);
                                    });

                            function O() {
                                return (
                                    (function(u, f) {
                                        if (!(u instanceof f))
                                            throw new TypeError("Cannot call a class as a function");
                                    })(this, O),
                                    M.call(this, "[data-hs-collapse]")
                                );
                            }
                            return (
                                (d = O),
                                (g = [{
                                        key: "init",
                                        value: function() {
                                            var u = this;
                                            document.addEventListener("click", function(f) {
                                                var S = f.target.closest(u.selector);
                                                if (S) {
                                                    var T = document.querySelectorAll(
                                                        S.getAttribute("data-hs-collapse")
                                                    );
                                                    u.toggle(T);
                                                }
                                            });
                                        },
                                    },
                                    {
                                        key: "toggle",
                                        value: function(u) {
                                            var f,
                                                S = this;
                                            u.length &&
                                                ((f = u),
                                                    (function(T) {
                                                        if (Array.isArray(T)) return m(T);
                                                    })(f) ||
                                                    (function(T) {
                                                        if (
                                                            (typeof Symbol < "u" &&
                                                                T[Symbol.iterator] != null) ||
                                                            T["@@iterator"] != null
                                                        )
                                                            return Array.from(T);
                                                    })(f) ||
                                                    (function(T, C) {
                                                        if (T) {
                                                            if (typeof T == "string") return m(T, C);
                                                            var P = Object.prototype.toString
                                                                .call(T)
                                                                .slice(8, -1);
                                                            return (
                                                                P === "Object" &&
                                                                T.constructor &&
                                                                (P = T.constructor.name),
                                                                P === "Map" || P === "Set" ?
                                                                Array.from(T) :
                                                                P === "Arguments" ||
                                                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                    P
                                                                ) ?
                                                                m(T, C) :
                                                                void 0
                                                            );
                                                        }
                                                    })(f) ||
                                                    (function() {
                                                        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                                    })()).forEach(function(T) {
                                                    T.classList.contains("hidden") ?
                                                        S.show(T) :
                                                        S.hide(T);
                                                });
                                        },
                                    },
                                    {
                                        key: "show",
                                        value: function(u) {
                                            var f = this;
                                            u.classList.add("open"),
                                                u.classList.remove("hidden"),
                                                (u.style.height = 0),
                                                document
                                                .querySelectorAll(this.selector)
                                                .forEach(function(S) {
                                                    u.closest(S.getAttribute("data-hs-collapse")) &&
                                                        S.classList.add("open");
                                                }),
                                                (u.style.height = "".concat(u.scrollHeight, "px")),
                                                this.afterTransition(u, function() {
                                                    u.classList.contains("open") &&
                                                        ((u.style.height = ""),
                                                            f._fireEvent("open", u),
                                                            f._dispatch("open.hs.collapse", u, u));
                                                });
                                        },
                                    },
                                    {
                                        key: "hide",
                                        value: function(u) {
                                            var f = this;
                                            (u.style.height = "".concat(u.scrollHeight, "px")),
                                            setTimeout(function() {
                                                    u.style.height = 0;
                                                }),
                                                u.classList.remove("open"),
                                                this.afterTransition(u, function() {
                                                    u.classList.contains("open") ||
                                                        (u.classList.add("hidden"),
                                                            (u.style.height = null),
                                                            f._fireEvent("hide", u),
                                                            f._dispatch("hide.hs.collapse", u, u),
                                                            u
                                                            .querySelectorAll(".hs-mega-menu-content.block")
                                                            .forEach(function(S) {
                                                                S.classList.remove("block"),
                                                                    S.classList.add("hidden");
                                                            }));
                                                }),
                                                document
                                                .querySelectorAll(this.selector)
                                                .forEach(function(S) {
                                                    u.closest(S.getAttribute("data-hs-collapse")) &&
                                                        S.classList.remove("open");
                                                });
                                        },
                                    },
                                ]) && h(d.prototype, g),
                                Object.defineProperty(d, "prototype", {
                                    writable: !1
                                }),
                                O
                            );
                        })(c(765).Z);
                        (window.HSCollapse = new j()),
                        document.addEventListener("load", window.HSCollapse.init());
                    },
                    682: (s, l, c) => {
                        var a = c(714),
                            m = c(765);
                        const h = {
                            historyIndex: -1,
                            addHistory: function(D) {
                                this.historyIndex = D;
                            },
                            existsInHistory: function(D) {
                                return D > this.historyIndex;
                            },
                            clearHistory: function() {
                                this.historyIndex = -1;
                            },
                        };

                        function $(D) {
                            return (
                                ($ =
                                    typeof Symbol == "function" &&
                                    typeof Symbol.iterator == "symbol" ?
                                    function(M) {
                                        return typeof M;
                                    } :
                                    function(M) {
                                        return M &&
                                            typeof Symbol == "function" &&
                                            M.constructor === Symbol &&
                                            M !== Symbol.prototype ?
                                            "symbol" :
                                            typeof M;
                                    }),
                                $(D)
                            );
                        }

                        function k(D) {
                            return (
                                (function(M) {
                                    if (Array.isArray(M)) return A(M);
                                })(D) ||
                                (function(M) {
                                    if (
                                        (typeof Symbol < "u" && M[Symbol.iterator] != null) ||
                                        M["@@iterator"] != null
                                    )
                                        return Array.from(M);
                                })(D) ||
                                (function(M, O) {
                                    if (M) {
                                        if (typeof M == "string") return A(M, O);
                                        var u = Object.prototype.toString.call(M).slice(8, -1);
                                        return (
                                            u === "Object" &&
                                            M.constructor &&
                                            (u = M.constructor.name),
                                            u === "Map" || u === "Set" ?
                                            Array.from(M) :
                                            u === "Arguments" ||
                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ?
                                            A(M, O) :
                                            void 0
                                        );
                                    }
                                })(D) ||
                                (function() {
                                    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                })()
                            );
                        }

                        function A(D, M) {
                            (M == null || M > D.length) && (M = D.length);
                            for (var O = 0, u = new Array(M); O < M; O++) u[O] = D[O];
                            return u;
                        }

                        function j(D, M) {
                            for (var O = 0; O < M.length; O++) {
                                var u = M[O];
                                (u.enumerable = u.enumerable || !1),
                                (u.configurable = !0),
                                "value" in u && (u.writable = !0),
                                    Object.defineProperty(D, u.key, u);
                            }
                        }

                        function b(D, M) {
                            return (
                                (b =
                                    Object.setPrototypeOf ||
                                    function(O, u) {
                                        return (O.__proto__ = u), O;
                                    }),
                                b(D, M)
                            );
                        }

                        function d(D, M) {
                            if (M && ($(M) === "object" || typeof M == "function")) return M;
                            if (M !== void 0)
                                throw new TypeError(
                                    "Derived constructors may only return object or undefined"
                                );
                            return (function(O) {
                                if (O === void 0)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return O;
                            })(D);
                        }

                        function g(D) {
                            return (
                                (g = Object.setPrototypeOf ?
                                    Object.getPrototypeOf :
                                    function(M) {
                                        return M.__proto__ || Object.getPrototypeOf(M);
                                    }),
                                g(D)
                            );
                        }
                        var w = (function(D) {
                            (function(C, P) {
                                if (typeof P != "function" && P !== null)
                                    throw new TypeError(
                                        "Super expression must either be null or a function"
                                    );
                                (C.prototype = Object.create(P && P.prototype, {
                                    constructor: {
                                        value: C,
                                        writable: !0,
                                        configurable: !0
                                    },
                                })),
                                Object.defineProperty(C, "prototype", {
                                        writable: !1
                                    }),
                                    P && b(C, P);
                            })(T, D);
                            var M,
                                O,
                                u,
                                f,
                                S =
                                ((u = T),
                                    (f = (function() {
                                        if (
                                            typeof Reflect > "u" ||
                                            !Reflect.construct ||
                                            Reflect.construct.sham
                                        )
                                            return !1;
                                        if (typeof Proxy == "function") return !0;
                                        try {
                                            return (
                                                Boolean.prototype.valueOf.call(
                                                    Reflect.construct(Boolean, [], function() {})
                                                ),
                                                !0
                                            );
                                        } catch {
                                            return !1;
                                        }
                                    })()),
                                    function() {
                                        var C,
                                            P = g(u);
                                        if (f) {
                                            var H = g(this).constructor;
                                            C = Reflect.construct(P, arguments, H);
                                        } else C = P.apply(this, arguments);
                                        return d(this, C);
                                    });

                            function T() {
                                var C;
                                return (
                                    (function(P, H) {
                                        if (!(P instanceof H))
                                            throw new TypeError("Cannot call a class as a function");
                                    })(this, T),
                                    ((C = S.call(this, ".hs-dropdown")).positions = {
                                        top: "top",
                                        "top-left": "top-start",
                                        "top-right": "top-end",
                                        bottom: "bottom",
                                        "bottom-left": "bottom-start",
                                        "bottom-right": "bottom-end",
                                        right: "right",
                                        "right-top": "right-start",
                                        "right-bottom": "right-end",
                                        left: "left",
                                        "left-top": "left-start",
                                        "left-bottom": "left-end",
                                    }),
                                    (C.absoluteStrategyModifiers = function(P) {
                                        return [{
                                                name: "applyStyles",
                                                fn: function(H) {
                                                    var N = (
                                                            window
                                                            .getComputedStyle(P)
                                                            .getPropertyValue("--strategy") || "absolute"
                                                        ).replace(" ", ""),
                                                        W = (
                                                            window
                                                            .getComputedStyle(P)
                                                            .getPropertyValue("--adaptive") || "adaptive"
                                                        ).replace(" ", "");
                                                    (H.state.elements.popper.style.position = N),
                                                    (H.state.elements.popper.style.transform =
                                                        W === "adaptive" ?
                                                        H.state.styles.popper.transform :
                                                        null),
                                                    (H.state.elements.popper.style.top = null),
                                                    (H.state.elements.popper.style.bottom = null),
                                                    (H.state.elements.popper.style.left = null),
                                                    (H.state.elements.popper.style.right = null),
                                                    (H.state.elements.popper.style.margin = 0);
                                                },
                                            },
                                            {
                                                name: "computeStyles",
                                                options: {
                                                    adaptive: !1
                                                }
                                            },
                                        ];
                                    }),
                                    (C._history = h),
                                    C
                                );
                            }
                            return (
                                (M = T),
                                (O = [{
                                        key: "init",
                                        value: function() {
                                            var C = this;
                                            document.addEventListener("click", function(P) {
                                                    var H = P.target,
                                                        N = H.closest(C.selector),
                                                        W = H.closest(".hs-dropdown-menu");
                                                    if (
                                                        ((N && N.classList.contains("open")) ||
                                                            C._closeOthers(N),
                                                            W)
                                                    ) {
                                                        var J = (
                                                            window
                                                            .getComputedStyle(N)
                                                            .getPropertyValue("--auto-close") || ""
                                                        ).replace(" ", "");
                                                        if (
                                                            (J == "false" || J == "inside") &&
                                                            !N.parentElement.closest(C.selector)
                                                        )
                                                            return;
                                                    }
                                                    N &&
                                                        (N.classList.contains("open") ?
                                                            C.close(N) :
                                                            C.open(N));
                                                }),
                                                document.addEventListener("mousemove", function(P) {
                                                    var H = P.target,
                                                        N = H.closest(C.selector);
                                                    if ((H.closest(".hs-dropdown-menu"), N)) {
                                                        var W = (
                                                            window
                                                            .getComputedStyle(N)
                                                            .getPropertyValue("--trigger") || "click"
                                                        ).replace(" ", "");
                                                        if (W !== "hover") return;
                                                        (N && N.classList.contains("open")) ||
                                                        C._closeOthers(N),
                                                            W !== "hover" ||
                                                            N.classList.contains("open") ||
                                                            /iPad|iPhone|iPod/.test(navigator.platform) ||
                                                            (navigator.maxTouchPoints &&
                                                                navigator.maxTouchPoints > 2 &&
                                                                /MacIntel/.test(navigator.platform)) ||
                                                            (navigator.maxTouchPoints &&
                                                                navigator.maxTouchPoints > 2 &&
                                                                /MacIntel/.test(navigator.platform)) ||
                                                            C._hover(H);
                                                    }
                                                }),
                                                document.addEventListener(
                                                    "keydown",
                                                    this._keyboardSupport.bind(this)
                                                ),
                                                window.addEventListener("resize", function() {
                                                    document
                                                        .querySelectorAll(".hs-dropdown.open")
                                                        .forEach(function(P) {
                                                            C.close(P, !0);
                                                        });
                                                });
                                        },
                                    },
                                    {
                                        key: "_closeOthers",
                                        value: function() {
                                            var C = this,
                                                P =
                                                arguments.length > 0 && arguments[0] !== void 0 ?
                                                arguments[0] :
                                                null,
                                                H = document.querySelectorAll(
                                                    "".concat(this.selector, ".open")
                                                );
                                            H.forEach(function(N) {
                                                if (!P || P.closest(".hs-dropdown.open") !== N) {
                                                    var W = (
                                                        window
                                                        .getComputedStyle(N)
                                                        .getPropertyValue("--auto-close") || ""
                                                    ).replace(" ", "");
                                                    W != "false" && W != "outside" && C.close(N);
                                                }
                                            });
                                        },
                                    },
                                    {
                                        key: "_hover",
                                        value: function(C) {
                                            var P = this,
                                                H = C.closest(this.selector);
                                            this.open(H),
                                                document.addEventListener(
                                                    "mousemove",
                                                    function N(W) {
                                                        (W.target.closest(P.selector) &&
                                                            W.target.closest(P.selector) !==
                                                            H.parentElement.closest(P.selector)) ||
                                                        (P.close(H),
                                                            document.removeEventListener("mousemove", N, !0));
                                                    },
                                                    !0
                                                );
                                        },
                                    },
                                    {
                                        key: "close",
                                        value: function(C) {
                                            var P = this,
                                                H =
                                                arguments.length > 1 &&
                                                arguments[1] !== void 0 &&
                                                arguments[1],
                                                N = C.querySelector(".hs-dropdown-menu"),
                                                W = function() {
                                                    C.classList.contains("open") ||
                                                        (N.classList.remove("block"),
                                                            N.classList.add("hidden"),
                                                            (N.style.inset = null),
                                                            (N.style.position = null),
                                                            C._popper && C._popper.destroy());
                                                };
                                            H ||
                                                this.afterTransition(
                                                    C.querySelector("[data-hs-dropdown-transition]") || N,
                                                    function() {
                                                        W();
                                                    }
                                                ),
                                                (N.style.margin = null),
                                                C.classList.remove("open"),
                                                H && W(),
                                                this._fireEvent("close", C),
                                                this._dispatch("close.hs.dropdown", C, C);
                                            var J = N.querySelectorAll(".hs-dropdown.open");
                                            J.forEach(function(Se) {
                                                P.close(Se, !0);
                                            });
                                        },
                                    },
                                    {
                                        key: "open",
                                        value: function(C) {
                                            var P = C.querySelector(".hs-dropdown-menu"),
                                                H = (
                                                    window
                                                    .getComputedStyle(C)
                                                    .getPropertyValue("--placement") || ""
                                                ).replace(" ", ""),
                                                N = (
                                                    window
                                                    .getComputedStyle(C)
                                                    .getPropertyValue("--strategy") || "fixed"
                                                ).replace(" ", ""),
                                                W =
                                                ((
                                                        window
                                                        .getComputedStyle(C)
                                                        .getPropertyValue("--adaptive") || "adaptive"
                                                    ).replace(" ", ""),
                                                    parseInt(
                                                        (
                                                            window
                                                            .getComputedStyle(C)
                                                            .getPropertyValue("--offset") || "10"
                                                        ).replace(" ", "")
                                                    ));
                                            if (N !== "static") {
                                                C._popper && C._popper.destroy();
                                                var J = (0, a.fi)(C, P, {
                                                    placement: this.positions[H] || "bottom-start",
                                                    strategy: N,
                                                    modifiers: [].concat(
                                                        k(
                                                            N !== "fixed" ?
                                                            this.absoluteStrategyModifiers(C) :
                                                            []
                                                        ),
                                                        [{
                                                            name: "offset",
                                                            options: {
                                                                offset: [0, W]
                                                            }
                                                        }]
                                                    ),
                                                });
                                                C._popper = J;
                                            }
                                            (P.style.margin = null),
                                            P.classList.add("block"),
                                                P.classList.remove("hidden"),
                                                setTimeout(function() {
                                                    C.classList.add("open");
                                                }),
                                                this._fireEvent("open", C),
                                                this._dispatch("open.hs.dropdown", C, C);
                                        },
                                    },
                                    {
                                        key: "_keyboardSupport",
                                        value: function(C) {
                                            var P = document.querySelector(".hs-dropdown.open");
                                            if (P)
                                                return C.keyCode === 27 ?
                                                    (C.preventDefault(), this._esc(P)) :
                                                    C.keyCode === 40 ?
                                                    (C.preventDefault(), this._down(P)) :
                                                    C.keyCode === 38 ?
                                                    (C.preventDefault(), this._up(P)) :
                                                    C.keyCode === 36 ?
                                                    (C.preventDefault(), this._start(P)) :
                                                    C.keyCode === 35 ?
                                                    (C.preventDefault(), this._end(P)) :
                                                    void this._byChar(P, C.key);
                                        },
                                    },
                                    {
                                        key: "_esc",
                                        value: function(C) {
                                            this.close(C);
                                        },
                                    },
                                    {
                                        key: "_up",
                                        value: function(C) {
                                            var P = C.querySelector(".hs-dropdown-menu"),
                                                H = k(P.querySelectorAll("a"))
                                                .reverse()
                                                .filter(function(J) {
                                                    return !J.disabled;
                                                }),
                                                N = P.querySelector("a:focus"),
                                                W = H.findIndex(function(J) {
                                                    return J === N;
                                                });
                                            W + 1 < H.length && W++, H[W].focus();
                                        },
                                    },
                                    {
                                        key: "_down",
                                        value: function(C) {
                                            var P = C.querySelector(".hs-dropdown-menu"),
                                                H = k(P.querySelectorAll("a")).filter(function(J) {
                                                    return !J.disabled;
                                                }),
                                                N = P.querySelector("a:focus"),
                                                W = H.findIndex(function(J) {
                                                    return J === N;
                                                });
                                            W + 1 < H.length && W++, H[W].focus();
                                        },
                                    },
                                    {
                                        key: "_start",
                                        value: function(C) {
                                            var P = k(
                                                C.querySelector(".hs-dropdown-menu").querySelectorAll(
                                                    "a"
                                                )
                                            ).filter(function(H) {
                                                return !H.disabled;
                                            });
                                            P.length && P[0].focus();
                                        },
                                    },
                                    {
                                        key: "_end",
                                        value: function(C) {
                                            var P = k(
                                                    C.querySelector(".hs-dropdown-menu").querySelectorAll(
                                                        "a"
                                                    )
                                                )
                                                .reverse()
                                                .filter(function(H) {
                                                    return !H.disabled;
                                                });
                                            P.length && P[0].focus();
                                        },
                                    },
                                    {
                                        key: "_byChar",
                                        value: function(C, P) {
                                            var H = this,
                                                N = k(
                                                    C.querySelector(".hs-dropdown-menu").querySelectorAll(
                                                        "a"
                                                    )
                                                ),
                                                W = function() {
                                                    return N.findIndex(function(Se, ae) {
                                                        return (
                                                            Se.innerText.toLowerCase().charAt(0) ===
                                                            P.toLowerCase() &&
                                                            H._history.existsInHistory(ae)
                                                        );
                                                    });
                                                },
                                                J = W();
                                            J === -1 && (this._history.clearHistory(), (J = W())),
                                                J !== -1 && (N[J].focus(), this._history.addHistory(J));
                                        },
                                    },
                                    {
                                        key: "toggle",
                                        value: function(C) {
                                            C.classList.contains("open") ?
                                                this.close(C) :
                                                this.open(C);
                                        },
                                    },
                                ]),
                                O && j(M.prototype, O),
                                Object.defineProperty(M, "prototype", {
                                    writable: !1
                                }),
                                T
                            );
                        })(m.Z);
                        (window.HSDropdown = new w()),
                        document.addEventListener("load", window.HSDropdown.init());
                    },
                    284: (s, l, c) => {
                        function a(b) {
                            return (
                                (a =
                                    typeof Symbol == "function" &&
                                    typeof Symbol.iterator == "symbol" ?
                                    function(d) {
                                        return typeof d;
                                    } :
                                    function(d) {
                                        return d &&
                                            typeof Symbol == "function" &&
                                            d.constructor === Symbol &&
                                            d !== Symbol.prototype ?
                                            "symbol" :
                                            typeof d;
                                    }),
                                a(b)
                            );
                        }

                        function m(b, d) {
                            (d == null || d > b.length) && (d = b.length);
                            for (var g = 0, w = new Array(d); g < d; g++) w[g] = b[g];
                            return w;
                        }

                        function h(b, d) {
                            for (var g = 0; g < d.length; g++) {
                                var w = d[g];
                                (w.enumerable = w.enumerable || !1),
                                (w.configurable = !0),
                                "value" in w && (w.writable = !0),
                                    Object.defineProperty(b, w.key, w);
                            }
                        }

                        function $(b, d) {
                            return (
                                ($ =
                                    Object.setPrototypeOf ||
                                    function(g, w) {
                                        return (g.__proto__ = w), g;
                                    }),
                                $(b, d)
                            );
                        }

                        function k(b, d) {
                            if (d && (a(d) === "object" || typeof d == "function")) return d;
                            if (d !== void 0)
                                throw new TypeError(
                                    "Derived constructors may only return object or undefined"
                                );
                            return (function(g) {
                                if (g === void 0)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return g;
                            })(b);
                        }

                        function A(b) {
                            return (
                                (A = Object.setPrototypeOf ?
                                    Object.getPrototypeOf :
                                    function(d) {
                                        return d.__proto__ || Object.getPrototypeOf(d);
                                    }),
                                A(b)
                            );
                        }
                        var j = (function(b) {
                            (function(u, f) {
                                if (typeof f != "function" && f !== null)
                                    throw new TypeError(
                                        "Super expression must either be null or a function"
                                    );
                                (u.prototype = Object.create(f && f.prototype, {
                                    constructor: {
                                        value: u,
                                        writable: !0,
                                        configurable: !0
                                    },
                                })),
                                Object.defineProperty(u, "prototype", {
                                        writable: !1
                                    }),
                                    f && $(u, f);
                            })(O, b);
                            var d,
                                g,
                                w,
                                D,
                                M =
                                ((w = O),
                                    (D = (function() {
                                        if (
                                            typeof Reflect > "u" ||
                                            !Reflect.construct ||
                                            Reflect.construct.sham
                                        )
                                            return !1;
                                        if (typeof Proxy == "function") return !0;
                                        try {
                                            return (
                                                Boolean.prototype.valueOf.call(
                                                    Reflect.construct(Boolean, [], function() {})
                                                ),
                                                !0
                                            );
                                        } catch {
                                            return !1;
                                        }
                                    })()),
                                    function() {
                                        var u,
                                            f = A(w);
                                        if (D) {
                                            var S = A(this).constructor;
                                            u = Reflect.construct(f, arguments, S);
                                        } else u = f.apply(this, arguments);
                                        return k(this, u);
                                    });

                            function O() {
                                var u;
                                return (
                                    (function(f, S) {
                                        if (!(f instanceof S))
                                            throw new TypeError("Cannot call a class as a function");
                                    })(this, O),
                                    ((u = M.call(this, "[data-hs-overlay]")).openNextOverlay = !1),
                                    u
                                );
                            }
                            return (
                                (d = O),
                                (g = [{
                                        key: "init",
                                        value: function() {
                                            var u = this;
                                            document.addEventListener("click", function(f) {
                                                    var S = f.target.closest(u.selector),
                                                        T = f.target.closest("[data-hs-overlay-close]"),
                                                        C = f.target.getAttribute("aria-overlay") === "true";
                                                    return T ?
                                                        u.close(T.closest(".hs-overlay.open")) :
                                                        S ?
                                                        u.toggle(
                                                            document.querySelector(
                                                                S.getAttribute("data-hs-overlay")
                                                            )
                                                        ) :
                                                        void(C && u._onBackdropClick(f.target));
                                                }),
                                                document.addEventListener("keydown", function(f) {
                                                    if (f.keyCode === 27) {
                                                        var S = document.querySelector(".hs-overlay.open");
                                                        if (!S) return;
                                                        setTimeout(function() {
                                                            S.getAttribute("data-hs-overlay-keyboard") !==
                                                                "false" && u.close(S);
                                                        });
                                                    }
                                                });
                                        },
                                    },
                                    {
                                        key: "toggle",
                                        value: function(u) {
                                            u &&
                                                (u.classList.contains("hidden") ?
                                                    this.open(u) :
                                                    this.close(u));
                                        },
                                    },
                                    {
                                        key: "open",
                                        value: function(u) {
                                            var f = this;
                                            if (u) {
                                                var S = document.querySelector(".hs-overlay.open"),
                                                    T =
                                                    this.getClassProperty(
                                                        u,
                                                        "--body-scroll",
                                                        "false"
                                                    ) !== "true";
                                                if (S)
                                                    return (
                                                        (this.openNextOverlay = !0),
                                                        this.close(S).then(function() {
                                                            f.open(u), (f.openNextOverlay = !1);
                                                        })
                                                    );
                                                T && (document.body.style.overflow = "hidden"),
                                                    this._buildBackdrop(u),
                                                    this._checkTimer(u),
                                                    this._autoHide(u),
                                                    u.classList.remove("hidden"),
                                                    u.setAttribute("aria-overlay", "true"),
                                                    u.setAttribute("tabindex", "-1"),
                                                    setTimeout(function() {
                                                        u.classList.contains("hidden") ||
                                                            (u.classList.add("open"),
                                                                f._fireEvent("open", u),
                                                                f._dispatch("open.hs.overlay", u, u),
                                                                f._focusInput(u));
                                                    }, 50);
                                            }
                                        },
                                    },
                                    {
                                        key: "close",
                                        value: function(u) {
                                            var f = this;
                                            return new Promise(function(S) {
                                                u &&
                                                    (u.classList.remove("open"),
                                                        u.removeAttribute("aria-overlay"),
                                                        u.removeAttribute("tabindex", "-1"),
                                                        f.afterTransition(u, function() {
                                                            u.classList.contains("open") ||
                                                                (u.classList.add("hidden"),
                                                                    f._destroyBackdrop(),
                                                                    f._fireEvent("close", u),
                                                                    f._dispatch("close.hs.overlay", u, u),
                                                                    (document.body.style.overflow = ""),
                                                                    S(u));
                                                        }));
                                            });
                                        },
                                    },
                                    {
                                        key: "_autoHide",
                                        value: function(u) {
                                            var f = this,
                                                S = parseInt(
                                                    this.getClassProperty(u, "--auto-hide", "0")
                                                );
                                            S &&
                                                (u.autoHide = setTimeout(function() {
                                                    f.close(u);
                                                }, S));
                                        },
                                    },
                                    {
                                        key: "_checkTimer",
                                        value: function(u) {
                                            u.autoHide &&
                                                (clearTimeout(u.autoHide), delete u.autoHide);
                                        },
                                    },
                                    {
                                        key: "_onBackdropClick",
                                        value: function(u) {
                                            this.getClassProperty(u, "--overlay-backdrop", "true") !==
                                                "static" && this.close(u);
                                        },
                                    },
                                    {
                                        key: "_buildBackdrop",
                                        value: function(u) {
                                            var f,
                                                S = this,
                                                T =
                                                u.getAttribute(
                                                    "data-hs-overlay-backdrop-container"
                                                ) || !1,
                                                C = document.createElement("div"),
                                                P =
                                                "transition duration fixed inset-0 z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 hs-overlay-backdrop",
                                                H = (function(J, Se) {
                                                    var ae =
                                                        (typeof Symbol < "u" && J[Symbol.iterator]) ||
                                                        J["@@iterator"];
                                                    if (!ae) {
                                                        if (
                                                            Array.isArray(J) ||
                                                            (ae = (function(be, ft) {
                                                                if (be) {
                                                                    if (typeof be == "string") return m(be, ft);
                                                                    var Qe = Object.prototype.toString
                                                                        .call(be)
                                                                        .slice(8, -1);
                                                                    return (
                                                                        Qe === "Object" &&
                                                                        be.constructor &&
                                                                        (Qe = be.constructor.name),
                                                                        Qe === "Map" || Qe === "Set" ?
                                                                        Array.from(be) :
                                                                        Qe === "Arguments" ||
                                                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                                            Qe
                                                                        ) ?
                                                                        m(be, ft) :
                                                                        void 0
                                                                    );
                                                                }
                                                            })(J)) ||
                                                            (Se && J && typeof J.length == "number")
                                                        ) {
                                                            ae && (J = ae);
                                                            var ot = 0,
                                                                tt = function() {};
                                                            return {
                                                                s: tt,
                                                                n: function() {
                                                                    return ot >= J.length ?
                                                                        {
                                                                            done: !0
                                                                        } :
                                                                        {
                                                                            done: !1,
                                                                            value: J[ot++]
                                                                        };
                                                                },
                                                                e: function(be) {
                                                                    throw be;
                                                                },
                                                                f: tt,
                                                            };
                                                        }
                                                        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                                    }
                                                    var Ge,
                                                        Ue = !0,
                                                        ht = !1;
                                                    return {
                                                        s: function() {
                                                            ae = ae.call(J);
                                                        },
                                                        n: function() {
                                                            var be = ae.next();
                                                            return (Ue = be.done), be;
                                                        },
                                                        e: function(be) {
                                                            (ht = !0), (Ge = be);
                                                        },
                                                        f: function() {
                                                            try {
                                                                Ue || ae.return == null || ae.return();
                                                            } finally {
                                                                if (ht) throw Ge;
                                                            }
                                                        },
                                                    };
                                                })(u.classList.values());
                                            try {
                                                for (H.s(); !(f = H.n()).done;) {
                                                    var N = f.value;
                                                    N.startsWith("hs-overlay-backdrop-open:") &&
                                                        (P += " ".concat(N));
                                                }
                                            } catch (J) {
                                                H.e(J);
                                            } finally {
                                                H.f();
                                            }
                                            var W =
                                                this.getClassProperty(
                                                    u,
                                                    "--overlay-backdrop",
                                                    "true"
                                                ) !== "static";
                                            this.getClassProperty(u, "--overlay-backdrop", "true") ===
                                                "false" ||
                                                (T &&
                                                    ((C = document
                                                            .querySelector(T)
                                                            .cloneNode(!0)).classList.remove("hidden"),
                                                        (P = C.classList),
                                                        (C.classList = "")),
                                                    W &&
                                                    C.addEventListener(
                                                        "click",
                                                        function() {
                                                            return S.close(u);
                                                        },
                                                        !0
                                                    ),
                                                    C.setAttribute("data-hs-overlay-backdrop-template", ""),
                                                    document.body.appendChild(C),
                                                    setTimeout(function() {
                                                        C.classList = P;
                                                    }));
                                        },
                                    },
                                    {
                                        key: "_destroyBackdrop",
                                        value: function() {
                                            var u = document.querySelector(
                                                "[data-hs-overlay-backdrop-template]"
                                            );
                                            u &&
                                                (this.openNextOverlay &&
                                                    (u.style.transitionDuration = "".concat(
                                                        1.8 *
                                                        parseFloat(
                                                            window
                                                            .getComputedStyle(u)
                                                            .transitionDuration.replace(/[^\d.-]/g, "")
                                                        ),
                                                        "s"
                                                    )),
                                                    u.classList.add("opacity-0"),
                                                    this.afterTransition(u, function() {
                                                        u.remove();
                                                    }));
                                        },
                                    },
                                    {
                                        key: "_focusInput",
                                        value: function(u) {
                                            var f = u.querySelector("[autofocus]");
                                            f && f.focus();
                                        },
                                    },
                                ]) && h(d.prototype, g),
                                Object.defineProperty(d, "prototype", {
                                    writable: !1
                                }),
                                O
                            );
                        })(c(765).Z);
                        (window.HSOverlay = new j()),
                        document.addEventListener("load", window.HSOverlay.init());
                    },
                    181: (s, l, c) => {
                        function a(j) {
                            return (
                                (a =
                                    typeof Symbol == "function" &&
                                    typeof Symbol.iterator == "symbol" ?
                                    function(b) {
                                        return typeof b;
                                    } :
                                    function(b) {
                                        return b &&
                                            typeof Symbol == "function" &&
                                            b.constructor === Symbol &&
                                            b !== Symbol.prototype ?
                                            "symbol" :
                                            typeof b;
                                    }),
                                a(j)
                            );
                        }

                        function m(j, b) {
                            for (var d = 0; d < b.length; d++) {
                                var g = b[d];
                                (g.enumerable = g.enumerable || !1),
                                (g.configurable = !0),
                                "value" in g && (g.writable = !0),
                                    Object.defineProperty(j, g.key, g);
                            }
                        }

                        function h(j, b) {
                            return (
                                (h =
                                    Object.setPrototypeOf ||
                                    function(d, g) {
                                        return (d.__proto__ = g), d;
                                    }),
                                h(j, b)
                            );
                        }

                        function $(j, b) {
                            if (b && (a(b) === "object" || typeof b == "function")) return b;
                            if (b !== void 0)
                                throw new TypeError(
                                    "Derived constructors may only return object or undefined"
                                );
                            return (function(d) {
                                if (d === void 0)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return d;
                            })(j);
                        }

                        function k(j) {
                            return (
                                (k = Object.setPrototypeOf ?
                                    Object.getPrototypeOf :
                                    function(b) {
                                        return b.__proto__ || Object.getPrototypeOf(b);
                                    }),
                                k(j)
                            );
                        }
                        var A = (function(j) {
                            (function(O, u) {
                                if (typeof u != "function" && u !== null)
                                    throw new TypeError(
                                        "Super expression must either be null or a function"
                                    );
                                (O.prototype = Object.create(u && u.prototype, {
                                    constructor: {
                                        value: O,
                                        writable: !0,
                                        configurable: !0
                                    },
                                })),
                                Object.defineProperty(O, "prototype", {
                                        writable: !1
                                    }),
                                    u && h(O, u);
                            })(M, j);
                            var b,
                                d,
                                g,
                                w,
                                D =
                                ((g = M),
                                    (w = (function() {
                                        if (
                                            typeof Reflect > "u" ||
                                            !Reflect.construct ||
                                            Reflect.construct.sham
                                        )
                                            return !1;
                                        if (typeof Proxy == "function") return !0;
                                        try {
                                            return (
                                                Boolean.prototype.valueOf.call(
                                                    Reflect.construct(Boolean, [], function() {})
                                                ),
                                                !0
                                            );
                                        } catch {
                                            return !1;
                                        }
                                    })()),
                                    function() {
                                        var O,
                                            u = k(g);
                                        if (w) {
                                            var f = k(this).constructor;
                                            O = Reflect.construct(u, arguments, f);
                                        } else O = u.apply(this, arguments);
                                        return $(this, O);
                                    });

                            function M() {
                                return (
                                    (function(O, u) {
                                        if (!(O instanceof u))
                                            throw new TypeError("Cannot call a class as a function");
                                    })(this, M),
                                    D.call(this, "[data-hs-remove-element]")
                                );
                            }
                            return (
                                (b = M),
                                (d = [{
                                    key: "init",
                                    value: function() {
                                        var O = this;
                                        document.addEventListener("click", function(u) {
                                            var f = u.target.closest(O.selector);
                                            if (f) {
                                                var S = document.querySelector(
                                                    f.getAttribute("data-hs-remove-element")
                                                );
                                                S &&
                                                    (S.classList.add("hs-removing"),
                                                        O.afterTransition(S, function() {
                                                            S.remove();
                                                        }));
                                            }
                                        });
                                    },
                                }, ]) && m(b.prototype, d),
                                Object.defineProperty(b, "prototype", {
                                    writable: !1
                                }),
                                M
                            );
                        })(c(765).Z);
                        (window.HSRemoveElement = new A()),
                        document.addEventListener("load", window.HSRemoveElement.init());
                    },
                    778: (s, l, c) => {
                        function a(j) {
                            return (
                                (a =
                                    typeof Symbol == "function" &&
                                    typeof Symbol.iterator == "symbol" ?
                                    function(b) {
                                        return typeof b;
                                    } :
                                    function(b) {
                                        return b &&
                                            typeof Symbol == "function" &&
                                            b.constructor === Symbol &&
                                            b !== Symbol.prototype ?
                                            "symbol" :
                                            typeof b;
                                    }),
                                a(j)
                            );
                        }

                        function m(j, b) {
                            for (var d = 0; d < b.length; d++) {
                                var g = b[d];
                                (g.enumerable = g.enumerable || !1),
                                (g.configurable = !0),
                                "value" in g && (g.writable = !0),
                                    Object.defineProperty(j, g.key, g);
                            }
                        }

                        function h(j, b) {
                            return (
                                (h =
                                    Object.setPrototypeOf ||
                                    function(d, g) {
                                        return (d.__proto__ = g), d;
                                    }),
                                h(j, b)
                            );
                        }

                        function $(j, b) {
                            if (b && (a(b) === "object" || typeof b == "function")) return b;
                            if (b !== void 0)
                                throw new TypeError(
                                    "Derived constructors may only return object or undefined"
                                );
                            return (function(d) {
                                if (d === void 0)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return d;
                            })(j);
                        }

                        function k(j) {
                            return (
                                (k = Object.setPrototypeOf ?
                                    Object.getPrototypeOf :
                                    function(b) {
                                        return b.__proto__ || Object.getPrototypeOf(b);
                                    }),
                                k(j)
                            );
                        }
                        var A = (function(j) {
                            (function(O, u) {
                                if (typeof u != "function" && u !== null)
                                    throw new TypeError(
                                        "Super expression must either be null or a function"
                                    );
                                (O.prototype = Object.create(u && u.prototype, {
                                    constructor: {
                                        value: O,
                                        writable: !0,
                                        configurable: !0
                                    },
                                })),
                                Object.defineProperty(O, "prototype", {
                                        writable: !1
                                    }),
                                    u && h(O, u);
                            })(M, j);
                            var b,
                                d,
                                g,
                                w,
                                D =
                                ((g = M),
                                    (w = (function() {
                                        if (
                                            typeof Reflect > "u" ||
                                            !Reflect.construct ||
                                            Reflect.construct.sham
                                        )
                                            return !1;
                                        if (typeof Proxy == "function") return !0;
                                        try {
                                            return (
                                                Boolean.prototype.valueOf.call(
                                                    Reflect.construct(Boolean, [], function() {})
                                                ),
                                                !0
                                            );
                                        } catch {
                                            return !1;
                                        }
                                    })()),
                                    function() {
                                        var O,
                                            u = k(g);
                                        if (w) {
                                            var f = k(this).constructor;
                                            O = Reflect.construct(u, arguments, f);
                                        } else O = u.apply(this, arguments);
                                        return $(this, O);
                                    });

                            function M() {
                                var O;
                                return (
                                    (function(u, f) {
                                        if (!(u instanceof f))
                                            throw new TypeError("Cannot call a class as a function");
                                    })(this, M),
                                    ((O = D.call(this, "[data-hs-scrollspy] ")).activeSection =
                                        null),
                                    O
                                );
                            }
                            return (
                                (b = M),
                                (d = [{
                                        key: "init",
                                        value: function() {
                                            var O = this;
                                            document
                                                .querySelectorAll(this.selector)
                                                .forEach(function(u) {
                                                    var f = document.querySelector(
                                                            u.getAttribute("data-hs-scrollspy")
                                                        ),
                                                        S = u.querySelectorAll("[href]"),
                                                        T = f.children,
                                                        C = u.getAttribute(
                                                            "data-hs-scrollspy-scrollable-parent"
                                                        ) ?
                                                        document.querySelector(
                                                            u.getAttribute(
                                                                "data-hs-scrollspy-scrollable-parent"
                                                            )
                                                        ) :
                                                        document;
                                                    Array.from(T).forEach(function(P) {
                                                            P.getAttribute("id") &&
                                                                C.addEventListener("scroll", function(H) {
                                                                    return O._update({
                                                                        $scrollspyEl: u,
                                                                        $scrollspyContentEl: f,
                                                                        links: S,
                                                                        $sectionEl: P,
                                                                        sections: T,
                                                                        ev: H,
                                                                    });
                                                                });
                                                        }),
                                                        S.forEach(function(P) {
                                                            P.addEventListener("click", function(H) {
                                                                H.preventDefault(),
                                                                    P.getAttribute("href") !== "javascript:;" &&
                                                                    O._scrollTo({
                                                                        $scrollspyEl: u,
                                                                        $scrollableEl: C,
                                                                        $link: P,
                                                                    });
                                                            });
                                                        });
                                                });
                                        },
                                    },
                                    {
                                        key: "_update",
                                        value: function(O) {
                                            var u = O.ev,
                                                f = O.$scrollspyEl,
                                                S = (O.sections, O.links),
                                                T = O.$sectionEl,
                                                C = parseInt(
                                                    this.getClassProperty(f, "--scrollspy-offset", "0")
                                                ),
                                                P = this.getClassProperty(T, "--scrollspy-offset") || C,
                                                H =
                                                u.target === document ?
                                                0 :
                                                parseInt(u.target.getBoundingClientRect().top),
                                                N = parseInt(T.getBoundingClientRect().top) - P - H,
                                                W = T.offsetHeight;
                                            if (N <= 0 && N + W > 0) {
                                                if (this.activeSection === T) return;
                                                S.forEach(function(ot) {
                                                    ot.classList.remove("active");
                                                });
                                                var J = f.querySelector(
                                                    '[href="#'.concat(T.getAttribute("id"), '"]')
                                                );
                                                if (J) {
                                                    J.classList.add("active");
                                                    var Se = J.closest("[data-hs-scrollspy-group]");
                                                    if (Se) {
                                                        var ae = Se.querySelector("[href]");
                                                        ae && ae.classList.add("active");
                                                    }
                                                }
                                                this.activeSection = T;
                                            }
                                        },
                                    },
                                    {
                                        key: "_scrollTo",
                                        value: function(O) {
                                            var u = O.$scrollspyEl,
                                                f = O.$scrollableEl,
                                                S = O.$link,
                                                T = document.querySelector(S.getAttribute("href")),
                                                C = parseInt(
                                                    this.getClassProperty(u, "--scrollspy-offset", "0")
                                                ),
                                                P = this.getClassProperty(T, "--scrollspy-offset") || C,
                                                H = f === document ? 0 : f.offsetTop,
                                                N = T.offsetTop - P - H,
                                                W = f === document ? window : f;
                                            this._fireEvent("scroll", u),
                                                this._dispatch("scroll.hs.scrollspy", u, u),
                                                window.history.replaceState(
                                                    null,
                                                    null,
                                                    S.getAttribute("href")
                                                ),
                                                W.scrollTo({
                                                    top: N,
                                                    left: 0,
                                                    behavior: "smooth"
                                                });
                                        },
                                    },
                                ]) && m(b.prototype, d),
                                Object.defineProperty(b, "prototype", {
                                    writable: !1
                                }),
                                M
                            );
                        })(c(765).Z);
                        (window.HSScrollspy = new A()),
                        document.addEventListener("load", window.HSScrollspy.init());
                    },
                    51: (s, l, c) => {
                        function a(d) {
                            return (
                                (a =
                                    typeof Symbol == "function" &&
                                    typeof Symbol.iterator == "symbol" ?
                                    function(g) {
                                        return typeof g;
                                    } :
                                    function(g) {
                                        return g &&
                                            typeof Symbol == "function" &&
                                            g.constructor === Symbol &&
                                            g !== Symbol.prototype ?
                                            "symbol" :
                                            typeof g;
                                    }),
                                a(d)
                            );
                        }

                        function m(d) {
                            return (
                                (function(g) {
                                    if (Array.isArray(g)) return h(g);
                                })(d) ||
                                (function(g) {
                                    if (
                                        (typeof Symbol < "u" && g[Symbol.iterator] != null) ||
                                        g["@@iterator"] != null
                                    )
                                        return Array.from(g);
                                })(d) ||
                                (function(g, w) {
                                    if (g) {
                                        if (typeof g == "string") return h(g, w);
                                        var D = Object.prototype.toString.call(g).slice(8, -1);
                                        return (
                                            D === "Object" &&
                                            g.constructor &&
                                            (D = g.constructor.name),
                                            D === "Map" || D === "Set" ?
                                            Array.from(g) :
                                            D === "Arguments" ||
                                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D) ?
                                            h(g, w) :
                                            void 0
                                        );
                                    }
                                })(d) ||
                                (function() {
                                    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                })()
                            );
                        }

                        function h(d, g) {
                            (g == null || g > d.length) && (g = d.length);
                            for (var w = 0, D = new Array(g); w < g; w++) D[w] = d[w];
                            return D;
                        }

                        function $(d, g) {
                            for (var w = 0; w < g.length; w++) {
                                var D = g[w];
                                (D.enumerable = D.enumerable || !1),
                                (D.configurable = !0),
                                "value" in D && (D.writable = !0),
                                    Object.defineProperty(d, D.key, D);
                            }
                        }

                        function k(d, g) {
                            return (
                                (k =
                                    Object.setPrototypeOf ||
                                    function(w, D) {
                                        return (w.__proto__ = D), w;
                                    }),
                                k(d, g)
                            );
                        }

                        function A(d, g) {
                            if (g && (a(g) === "object" || typeof g == "function")) return g;
                            if (g !== void 0)
                                throw new TypeError(
                                    "Derived constructors may only return object or undefined"
                                );
                            return (function(w) {
                                if (w === void 0)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return w;
                            })(d);
                        }

                        function j(d) {
                            return (
                                (j = Object.setPrototypeOf ?
                                    Object.getPrototypeOf :
                                    function(g) {
                                        return g.__proto__ || Object.getPrototypeOf(g);
                                    }),
                                j(d)
                            );
                        }
                        var b = (function(d) {
                            (function(f, S) {
                                if (typeof S != "function" && S !== null)
                                    throw new TypeError(
                                        "Super expression must either be null or a function"
                                    );
                                (f.prototype = Object.create(S && S.prototype, {
                                    constructor: {
                                        value: f,
                                        writable: !0,
                                        configurable: !0
                                    },
                                })),
                                Object.defineProperty(f, "prototype", {
                                        writable: !1
                                    }),
                                    S && k(f, S);
                            })(u, d);
                            var g,
                                w,
                                D,
                                M,
                                O =
                                ((D = u),
                                    (M = (function() {
                                        if (
                                            typeof Reflect > "u" ||
                                            !Reflect.construct ||
                                            Reflect.construct.sham
                                        )
                                            return !1;
                                        if (typeof Proxy == "function") return !0;
                                        try {
                                            return (
                                                Boolean.prototype.valueOf.call(
                                                    Reflect.construct(Boolean, [], function() {})
                                                ),
                                                !0
                                            );
                                        } catch {
                                            return !1;
                                        }
                                    })()),
                                    function() {
                                        var f,
                                            S = j(D);
                                        if (M) {
                                            var T = j(this).constructor;
                                            f = Reflect.construct(S, arguments, T);
                                        } else f = S.apply(this, arguments);
                                        return A(this, f);
                                    });

                            function u() {
                                return (
                                    (function(f, S) {
                                        if (!(f instanceof S))
                                            throw new TypeError("Cannot call a class as a function");
                                    })(this, u),
                                    O.call(this, "[data-hs-tab]")
                                );
                            }
                            return (
                                (g = u),
                                (w = [{
                                        key: "init",
                                        value: function() {
                                            var f = this;
                                            document.addEventListener(
                                                    "keydown",
                                                    this._keyboardSupport.bind(this)
                                                ),
                                                document.addEventListener("click", function(S) {
                                                    var T = S.target.closest(f.selector);
                                                    T && f.open(T);
                                                }),
                                                document
                                                .querySelectorAll("[hs-data-tab-select]")
                                                .forEach(function(S) {
                                                    var T = document.querySelector(
                                                        S.getAttribute("hs-data-tab-select")
                                                    );
                                                    T &&
                                                        T.addEventListener("change", function(C) {
                                                            var P = document.querySelector(
                                                                '[data-hs-tab="'.concat(C.target.value, '"]')
                                                            );
                                                            P && f.open(P);
                                                        });
                                                });
                                        },
                                    },
                                    {
                                        key: "open",
                                        value: function(f) {
                                            var S = document.querySelector(
                                                    f.getAttribute("data-hs-tab")
                                                ),
                                                T = m(f.parentElement.children),
                                                C = m(S.parentElement.children),
                                                P = f.closest("[hs-data-tab-select]"),
                                                H = P ?
                                                document.querySelector(
                                                    P.getAttribute("data-hs-tab")
                                                ) :
                                                null;
                                            T.forEach(function(N) {
                                                    return N.classList.remove("active");
                                                }),
                                                C.forEach(function(N) {
                                                    return N.classList.add("hidden");
                                                }),
                                                f.classList.add("active"),
                                                S.classList.remove("hidden"),
                                                this._fireEvent("change", f),
                                                this._dispatch("change.hs.tab", f, f),
                                                H && (H.value = f.getAttribute("data-hs-tab"));
                                        },
                                    },
                                    {
                                        key: "_keyboardSupport",
                                        value: function(f) {
                                            var S = f.target.closest(this.selector);
                                            if (S) {
                                                var T =
                                                    S.closest('[role="tablist"]').getAttribute(
                                                        "data-hs-tabs-vertical"
                                                    ) === "true";
                                                return (T ? f.keyCode === 38 : f.keyCode === 37) ?
                                                    (f.preventDefault(), this._left(S)) :
                                                    (T ? f.keyCode === 40 : f.keyCode === 39) ?
                                                    (f.preventDefault(), this._right(S)) :
                                                    f.keyCode === 36 ?
                                                    (f.preventDefault(), this._start(S)) :
                                                    f.keyCode === 35 ?
                                                    (f.preventDefault(), this._end(S)) :
                                                    void 0;
                                            }
                                        },
                                    },
                                    {
                                        key: "_right",
                                        value: function(f) {
                                            var S = f.closest('[role="tablist"]');
                                            if (S) {
                                                var T = m(S.querySelectorAll(this.selector)).filter(
                                                        function(H) {
                                                            return !H.disabled;
                                                        }
                                                    ),
                                                    C = S.querySelector("button:focus"),
                                                    P = T.findIndex(function(H) {
                                                        return H === C;
                                                    });
                                                P + 1 < T.length ? P++ : (P = 0),
                                                    T[P].focus(),
                                                    this.open(T[P]);
                                            }
                                        },
                                    },
                                    {
                                        key: "_left",
                                        value: function(f) {
                                            var S = f.closest('[role="tablist"]');
                                            if (S) {
                                                var T = m(S.querySelectorAll(this.selector))
                                                    .filter(function(H) {
                                                        return !H.disabled;
                                                    })
                                                    .reverse(),
                                                    C = S.querySelector("button:focus"),
                                                    P = T.findIndex(function(H) {
                                                        return H === C;
                                                    });
                                                P + 1 < T.length ? P++ : (P = 0),
                                                    T[P].focus(),
                                                    this.open(T[P]);
                                            }
                                        },
                                    },
                                    {
                                        key: "_start",
                                        value: function(f) {
                                            var S = f.closest('[role="tablist"]');
                                            if (S) {
                                                var T = m(S.querySelectorAll(this.selector)).filter(
                                                    function(C) {
                                                        return !C.disabled;
                                                    }
                                                );
                                                T.length && (T[0].focus(), this.open(T[0]));
                                            }
                                        },
                                    },
                                    {
                                        key: "_end",
                                        value: function(f) {
                                            var S = f.closest('[role="tablist"]');
                                            if (S) {
                                                var T = m(S.querySelectorAll(this.selector))
                                                    .reverse()
                                                    .filter(function(C) {
                                                        return !C.disabled;
                                                    });
                                                T.length && (T[0].focus(), this.open(T[0]));
                                            }
                                        },
                                    },
                                ]) && $(g.prototype, w),
                                Object.defineProperty(g, "prototype", {
                                    writable: !1
                                }),
                                u
                            );
                        })(c(765).Z);
                        (window.HSTabs = new b()),
                        document.addEventListener("load", window.HSTabs.init());
                    },
                    185: (s, l, c) => {
                        var a = c(765),
                            m = c(714);

                        function h(d) {
                            return (
                                (h =
                                    typeof Symbol == "function" &&
                                    typeof Symbol.iterator == "symbol" ?
                                    function(g) {
                                        return typeof g;
                                    } :
                                    function(g) {
                                        return g &&
                                            typeof Symbol == "function" &&
                                            g.constructor === Symbol &&
                                            g !== Symbol.prototype ?
                                            "symbol" :
                                            typeof g;
                                    }),
                                h(d)
                            );
                        }

                        function $(d, g) {
                            for (var w = 0; w < g.length; w++) {
                                var D = g[w];
                                (D.enumerable = D.enumerable || !1),
                                (D.configurable = !0),
                                "value" in D && (D.writable = !0),
                                    Object.defineProperty(d, D.key, D);
                            }
                        }

                        function k(d, g) {
                            return (
                                (k =
                                    Object.setPrototypeOf ||
                                    function(w, D) {
                                        return (w.__proto__ = D), w;
                                    }),
                                k(d, g)
                            );
                        }

                        function A(d, g) {
                            if (g && (h(g) === "object" || typeof g == "function")) return g;
                            if (g !== void 0)
                                throw new TypeError(
                                    "Derived constructors may only return object or undefined"
                                );
                            return (function(w) {
                                if (w === void 0)
                                    throw new ReferenceError(
                                        "this hasn't been initialised - super() hasn't been called"
                                    );
                                return w;
                            })(d);
                        }

                        function j(d) {
                            return (
                                (j = Object.setPrototypeOf ?
                                    Object.getPrototypeOf :
                                    function(g) {
                                        return g.__proto__ || Object.getPrototypeOf(g);
                                    }),
                                j(d)
                            );
                        }
                        var b = (function(d) {
                            (function(f, S) {
                                if (typeof S != "function" && S !== null)
                                    throw new TypeError(
                                        "Super expression must either be null or a function"
                                    );
                                (f.prototype = Object.create(S && S.prototype, {
                                    constructor: {
                                        value: f,
                                        writable: !0,
                                        configurable: !0
                                    },
                                })),
                                Object.defineProperty(f, "prototype", {
                                        writable: !1
                                    }),
                                    S && k(f, S);
                            })(u, d);
                            var g,
                                w,
                                D,
                                M,
                                O =
                                ((D = u),
                                    (M = (function() {
                                        if (
                                            typeof Reflect > "u" ||
                                            !Reflect.construct ||
                                            Reflect.construct.sham
                                        )
                                            return !1;
                                        if (typeof Proxy == "function") return !0;
                                        try {
                                            return (
                                                Boolean.prototype.valueOf.call(
                                                    Reflect.construct(Boolean, [], function() {})
                                                ),
                                                !0
                                            );
                                        } catch {
                                            return !1;
                                        }
                                    })()),
                                    function() {
                                        var f,
                                            S = j(D);
                                        if (M) {
                                            var T = j(this).constructor;
                                            f = Reflect.construct(S, arguments, T);
                                        } else f = S.apply(this, arguments);
                                        return A(this, f);
                                    });

                            function u() {
                                return (
                                    (function(f, S) {
                                        if (!(f instanceof S))
                                            throw new TypeError("Cannot call a class as a function");
                                    })(this, u),
                                    O.call(this, ".hs-tooltip")
                                );
                            }
                            return (
                                (g = u),
                                (w = [{
                                        key: "init",
                                        value: function() {
                                            var f = this;
                                            document.addEventListener("click", function(S) {
                                                    var T = S.target.closest(f.selector);
                                                    T &&
                                                        f.getClassProperty(T, "--trigger") === "focus" &&
                                                        f._focus(T),
                                                        T &&
                                                        f.getClassProperty(T, "--trigger") === "click" &&
                                                        f._click(T);
                                                }),
                                                document.addEventListener("mousemove", function(S) {
                                                    var T = S.target.closest(f.selector);
                                                    T &&
                                                        f.getClassProperty(T, "--trigger") !== "focus" &&
                                                        f.getClassProperty(T, "--trigger") !== "click" &&
                                                        f._hover(T);
                                                });
                                        },
                                    },
                                    {
                                        key: "_hover",
                                        value: function(f) {
                                            var S = this;
                                            if (!f.classList.contains("show")) {
                                                var T = f.querySelector(".hs-tooltip-toggle"),
                                                    C = f.querySelector(".hs-tooltip-content"),
                                                    P = this.getClassProperty(f, "--placement");
                                                (0, m.fi)(T, C, {
                                                    placement: P || "top",
                                                    strategy: "fixed",
                                                    modifiers: [{
                                                        name: "offset",
                                                        options: {
                                                            offset: [0, 5]
                                                        }
                                                    }, ],
                                                }),
                                                this.show(f),
                                                    f.addEventListener(
                                                        "mouseleave",
                                                        function H(N) {
                                                            (N.relatedTarget.closest(S.selector) &&
                                                                N.relatedTarget.closest(S.selector) == f) ||
                                                            (S.hide(f),
                                                                f.removeEventListener("mouseleave", H, !0));
                                                        },
                                                        !0
                                                    );
                                            }
                                        },
                                    },
                                    {
                                        key: "_focus",
                                        value: function(f) {
                                            var S = this,
                                                T = f.querySelector(".hs-tooltip-toggle"),
                                                C = f.querySelector(".hs-tooltip-content"),
                                                P = this.getClassProperty(f, "--placement"),
                                                H = this.getClassProperty(f, "--strategy");
                                            (0, m.fi)(T, C, {
                                                placement: P || "top",
                                                strategy: H || "fixed",
                                                modifiers: [{
                                                    name: "offset",
                                                    options: {
                                                        offset: [0, 5]
                                                    }
                                                }, ],
                                            }),
                                            this.show(f),
                                                f.addEventListener(
                                                    "blur",
                                                    function N() {
                                                        S.hide(f), f.removeEventListener("blur", N, !0);
                                                    },
                                                    !0
                                                );
                                        },
                                    },
                                    {
                                        key: "_click",
                                        value: function(f) {
                                            var S = this;
                                            if (!f.classList.contains("show")) {
                                                var T = f.querySelector(".hs-tooltip-toggle"),
                                                    C = f.querySelector(".hs-tooltip-content"),
                                                    P = this.getClassProperty(f, "--placement"),
                                                    H = this.getClassProperty(f, "--strategy");
                                                (0, m.fi)(T, C, {
                                                    placement: P || "top",
                                                    strategy: H || "fixed",
                                                    modifiers: [{
                                                        name: "offset",
                                                        options: {
                                                            offset: [0, 5]
                                                        }
                                                    }, ],
                                                }),
                                                this.show(f);
                                                var N = function W(J) {
                                                    setTimeout(function() {
                                                        S.hide(f),
                                                            f.removeEventListener("click", W, !0),
                                                            f.removeEventListener("blur", W, !0);
                                                    });
                                                };
                                                f.addEventListener("blur", N, !0),
                                                    f.addEventListener("click", N, !0);
                                            }
                                        },
                                    },
                                    {
                                        key: "show",
                                        value: function(f) {
                                            var S = this;
                                            f
                                                .querySelector(".hs-tooltip-content")
                                                .classList.remove("hidden"),
                                                setTimeout(function() {
                                                    f.classList.add("show"),
                                                        S._fireEvent("show", f),
                                                        S._dispatch("show.hs.tooltip", f, f);
                                                });
                                        },
                                    },
                                    {
                                        key: "hide",
                                        value: function(f) {
                                            var S = f.querySelector(".hs-tooltip-content");
                                            f.classList.remove("show"),
                                                this._fireEvent("hide", f),
                                                this._dispatch("hide.hs.tooltip", f, f),
                                                this.afterTransition(S, function() {
                                                    f.classList.contains("show") ||
                                                        S.classList.add("hidden");
                                                });
                                        },
                                    },
                                ]) && $(g.prototype, w),
                                Object.defineProperty(g, "prototype", {
                                    writable: !1
                                }),
                                u
                            );
                        })(a.Z);
                        (window.HSTooltip = new b()),
                        document.addEventListener("load", window.HSTooltip.init());
                    },
                    765: (s, l, c) => {
                        function a(h, $) {
                            for (var k = 0; k < $.length; k++) {
                                var A = $[k];
                                (A.enumerable = A.enumerable || !1),
                                (A.configurable = !0),
                                "value" in A && (A.writable = !0),
                                    Object.defineProperty(h, A.key, A);
                            }
                        }
                        c.d(l, {
                            Z: () => m
                        });
                        var m = (function() {
                            function h(A, j) {
                                (function(b, d) {
                                    if (!(b instanceof d))
                                        throw new TypeError("Cannot call a class as a function");
                                })(this, h),
                                (this.$collection = []),
                                (this.selector = A),
                                (this.config = j),
                                (this.events = {});
                            }
                            var $, k;
                            return (
                                ($ = h),
                                (k = [{
                                        key: "_fireEvent",
                                        value: function(A) {
                                            var j =
                                                arguments.length > 1 && arguments[1] !== void 0 ?
                                                arguments[1] :
                                                null;
                                            this.events.hasOwnProperty(A) && this.events[A](j);
                                        },
                                    },
                                    {
                                        key: "_dispatch",
                                        value: function(A, j) {
                                            var b =
                                                arguments.length > 2 && arguments[2] !== void 0 ?
                                                arguments[2] :
                                                null,
                                                d = new CustomEvent(A, {
                                                    detail: {
                                                        payload: b
                                                    },
                                                    bubbles: !0,
                                                    cancelable: !0,
                                                    composed: !1,
                                                });
                                            j.dispatchEvent(d);
                                        },
                                    },
                                    {
                                        key: "on",
                                        value: function(A, j) {
                                            this.events[A] = j;
                                        },
                                    },
                                    {
                                        key: "afterTransition",
                                        value: function(A, j) {
                                            window
                                                .getComputedStyle(A, null)
                                                .getPropertyValue("transition") !== "all 0s ease 0s" ?
                                                A.addEventListener(
                                                    "transitionend",
                                                    function b() {
                                                        j(),
                                                            A.removeEventListener("transitionend", b, !0);
                                                    },
                                                    !0
                                                ) :
                                                j();
                                        },
                                    },
                                    {
                                        key: "getClassProperty",
                                        value: function(A, j) {
                                            var b =
                                                arguments.length > 2 && arguments[2] !== void 0 ?
                                                arguments[2] :
                                                "",
                                                d = (
                                                    window.getComputedStyle(A).getPropertyValue(j) || b
                                                ).replace(" ", "");
                                            return d;
                                        },
                                    },
                                ]),
                                k && a($.prototype, k),
                                Object.defineProperty($, "prototype", {
                                    writable: !1
                                }),
                                h
                            );
                        })();
                    },
                    714: (s, l, c) => {
                        function a(_) {
                            if (_ == null) return window;
                            if (_.toString() !== "[object Window]") {
                                var y = _.ownerDocument;
                                return (y && y.defaultView) || window;
                            }
                            return _;
                        }

                        function m(_) {
                            return _ instanceof a(_).Element || _ instanceof Element;
                        }

                        function h(_) {
                            return _ instanceof a(_).HTMLElement || _ instanceof HTMLElement;
                        }

                        function $(_) {
                            return (
                                typeof ShadowRoot < "u" &&
                                (_ instanceof a(_).ShadowRoot || _ instanceof ShadowRoot)
                            );
                        }
                        c.d(l, {
                            fi: () => Wr
                        });
                        var k = Math.max,
                            A = Math.min,
                            j = Math.round;

                        function b(_, y) {
                            y === void 0 && (y = !1);
                            var x = _.getBoundingClientRect(),
                                R = 1,
                                U = 1;
                            if (h(_) && y) {
                                var z = _.offsetHeight,
                                    V = _.offsetWidth;
                                V > 0 && (R = j(x.width) / V || 1),
                                    z > 0 && (U = j(x.height) / z || 1);
                            }
                            return {
                                width: x.width / R,
                                height: x.height / U,
                                top: x.top / U,
                                right: x.right / R,
                                bottom: x.bottom / U,
                                left: x.left / R,
                                x: x.left / R,
                                y: x.top / U,
                            };
                        }

                        function d(_) {
                            var y = a(_);
                            return {
                                scrollLeft: y.pageXOffset,
                                scrollTop: y.pageYOffset
                            };
                        }

                        function g(_) {
                            return _ ? (_.nodeName || "").toLowerCase() : null;
                        }

                        function w(_) {
                            return ((m(_) ? _.ownerDocument : _.document) || window.document)
                                .documentElement;
                        }

                        function D(_) {
                            return b(w(_)).left + d(_).scrollLeft;
                        }

                        function M(_) {
                            return a(_).getComputedStyle(_);
                        }

                        function O(_) {
                            var y = M(_),
                                x = y.overflow,
                                R = y.overflowX,
                                U = y.overflowY;
                            return /auto|scroll|overlay|hidden/.test(x + U + R);
                        }

                        function u(_, y, x) {
                            x === void 0 && (x = !1);
                            var R,
                                U,
                                z = h(y),
                                V =
                                h(y) &&
                                (function(te) {
                                    var Ae = te.getBoundingClientRect(),
                                        se = j(Ae.width) / te.offsetWidth || 1,
                                        he = j(Ae.height) / te.offsetHeight || 1;
                                    return se !== 1 || he !== 1;
                                })(y),
                                Y = w(y),
                                X = b(_, V),
                                ne = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                re = {
                                    x: 0,
                                    y: 0
                                };
                            return (
                                (z || (!z && !x)) &&
                                ((g(y) !== "body" || O(Y)) &&
                                    (ne =
                                        (R = y) !== a(R) && h(R) ?
                                        {
                                            scrollLeft: (U = R).scrollLeft,
                                            scrollTop: U.scrollTop,
                                        } :
                                        d(R)),
                                    h(y) ?
                                    (((re = b(y, !0)).x += y.clientLeft),
                                        (re.y += y.clientTop)) :
                                    Y && (re.x = D(Y))), {
                                    x: X.left + ne.scrollLeft - re.x,
                                    y: X.top + ne.scrollTop - re.y,
                                    width: X.width,
                                    height: X.height,
                                }
                            );
                        }

                        function f(_) {
                            var y = b(_),
                                x = _.offsetWidth,
                                R = _.offsetHeight;
                            return (
                                Math.abs(y.width - x) <= 1 && (x = y.width),
                                Math.abs(y.height - R) <= 1 && (R = y.height), {
                                    x: _.offsetLeft,
                                    y: _.offsetTop,
                                    width: x,
                                    height: R
                                }
                            );
                        }

                        function S(_) {
                            return g(_) === "html" ?
                                _ :
                                _.assignedSlot ||
                                _.parentNode ||
                                ($(_) ? _.host : null) ||
                                w(_);
                        }

                        function T(_) {
                            return ["html", "body", "#document"].indexOf(g(_)) >= 0 ?
                                _.ownerDocument.body :
                                h(_) && O(_) ?
                                _ :
                                T(S(_));
                        }

                        function C(_, y) {
                            var x;
                            y === void 0 && (y = []);
                            var R = T(_),
                                U = R === ((x = _.ownerDocument) == null ? void 0 : x.body),
                                z = a(R),
                                V = U ? [z].concat(z.visualViewport || [], O(R) ? R : []) : R,
                                Y = y.concat(V);
                            return U ? Y : Y.concat(C(S(V)));
                        }

                        function P(_) {
                            return ["table", "td", "th"].indexOf(g(_)) >= 0;
                        }

                        function H(_) {
                            return h(_) && M(_).position !== "fixed" ? _.offsetParent : null;
                        }

                        function N(_) {
                            for (
                                var y = a(_), x = H(_); x && P(x) && M(x).position === "static";

                            )
                                x = H(x);
                            return x &&
                                (g(x) === "html" ||
                                    (g(x) === "body" && M(x).position === "static")) ?
                                y :
                                x ||
                                (function(R) {
                                    var U =
                                        navigator.userAgent.toLowerCase().indexOf("firefox") !==
                                        -1;
                                    if (
                                        navigator.userAgent.indexOf("Trident") !== -1 &&
                                        h(R) &&
                                        M(R).position === "fixed"
                                    )
                                        return null;
                                    for (
                                        var z = S(R); h(z) && ["html", "body"].indexOf(g(z)) < 0;

                                    ) {
                                        var V = M(z);
                                        if (
                                            V.transform !== "none" ||
                                            V.perspective !== "none" ||
                                            V.contain === "paint" || ["transform", "perspective"].indexOf(V.willChange) !==
                                            -1 ||
                                            (U && V.willChange === "filter") ||
                                            (U && V.filter && V.filter !== "none")
                                        )
                                            return z;
                                        z = z.parentNode;
                                    }
                                    return null;
                                })(_) ||
                                y;
                        }
                        var W = "top",
                            J = "bottom",
                            Se = "right",
                            ae = "left",
                            ot = "auto",
                            tt = [W, J, Se, ae],
                            Ge = "start",
                            Ue = "end",
                            ht = "viewport",
                            be = "popper",
                            ft = tt.reduce(function(_, y) {
                                return _.concat([y + "-" + Ge, y + "-" + Ue]);
                            }, []),
                            Qe = [].concat(tt, [ot]).reduce(function(_, y) {
                                return _.concat([y, y + "-" + Ge, y + "-" + Ue]);
                            }, []),
                            yt = [
                                "beforeRead",
                                "read",
                                "afterRead",
                                "beforeMain",
                                "main",
                                "afterMain",
                                "beforeWrite",
                                "write",
                                "afterWrite",
                            ];

                        function It(_) {
                            var y = new Map(),
                                x = new Set(),
                                R = [];

                            function U(z) {
                                x.add(z.name),
                                    []
                                    .concat(z.requires || [], z.requiresIfExists || [])
                                    .forEach(function(V) {
                                        if (!x.has(V)) {
                                            var Y = y.get(V);
                                            Y && U(Y);
                                        }
                                    }),
                                    R.push(z);
                            }
                            return (
                                _.forEach(function(z) {
                                    y.set(z.name, z);
                                }),
                                _.forEach(function(z) {
                                    x.has(z.name) || U(z);
                                }),
                                R
                            );
                        }
                        var Nt = {
                            placement: "bottom",
                            modifiers: [],
                            strategy: "absolute",
                        };

                        function qe() {
                            for (
                                var _ = arguments.length, y = new Array(_), x = 0; x < _; x++
                            )
                                y[x] = arguments[x];
                            return !y.some(function(R) {
                                return !(R && typeof R.getBoundingClientRect == "function");
                            });
                        }

                        function bt(_) {
                            _ === void 0 && (_ = {});
                            var y = _,
                                x = y.defaultModifiers,
                                R = x === void 0 ? [] : x,
                                U = y.defaultOptions,
                                z = U === void 0 ? Nt : U;
                            return function(V, Y, X) {
                                X === void 0 && (X = z);
                                var ne,
                                    re,
                                    te = {
                                        placement: "bottom",
                                        orderedModifiers: [],
                                        options: Object.assign({}, Nt, z),
                                        modifiersData: {},
                                        elements: {
                                            reference: V,
                                            popper: Y
                                        },
                                        attributes: {},
                                        styles: {},
                                    },
                                    Ae = [],
                                    se = !1,
                                    he = {
                                        state: te,
                                        setOptions: function(ie) {
                                            var Me = typeof ie == "function" ? ie(te.options) : ie;
                                            me(),
                                                (te.options = Object.assign({}, z, te.options, Me)),
                                                (te.scrollParents = {
                                                    reference: m(V) ?
                                                        C(V) :
                                                        V.contextElement ?
                                                        C(V.contextElement) :
                                                        [],
                                                    popper: C(Y),
                                                });
                                            var ke,
                                                fe,
                                                ve = (function(le) {
                                                    var ce = It(le);
                                                    return yt.reduce(function(de, ge) {
                                                        return de.concat(
                                                            ce.filter(function($e) {
                                                                return $e.phase === ge;
                                                            })
                                                        );
                                                    }, []);
                                                })(
                                                    ((ke = [].concat(R, te.options.modifiers)),
                                                        (fe = ke.reduce(function(le, ce) {
                                                            var de = le[ce.name];
                                                            return (
                                                                (le[ce.name] = de ?
                                                                    Object.assign({}, de, ce, {
                                                                        options: Object.assign({},
                                                                            de.options,
                                                                            ce.options
                                                                        ),
                                                                        data: Object.assign({}, de.data, ce.data),
                                                                    }) :
                                                                    ce),
                                                                le
                                                            );
                                                        }, {})),
                                                        Object.keys(fe).map(function(le) {
                                                            return fe[le];
                                                        }))
                                                );
                                            return (
                                                (te.orderedModifiers = ve.filter(function(le) {
                                                    return le.enabled;
                                                })),
                                                te.orderedModifiers.forEach(function(le) {
                                                    var ce = le.name,
                                                        de = le.options,
                                                        ge = de === void 0 ? {} : de,
                                                        $e = le.effect;
                                                    if (typeof $e == "function") {
                                                        var Ie = $e({
                                                            state: te,
                                                            name: ce,
                                                            instance: he,
                                                            options: ge,
                                                        });
                                                        Ae.push(Ie || function() {});
                                                    }
                                                }),
                                                he.update()
                                            );
                                        },
                                        forceUpdate: function() {
                                            if (!se) {
                                                var ie = te.elements,
                                                    Me = ie.reference,
                                                    ke = ie.popper;
                                                if (qe(Me, ke)) {
                                                    (te.rects = {
                                                        reference: u(
                                                            Me,
                                                            N(ke),
                                                            te.options.strategy === "fixed"
                                                        ),
                                                        popper: f(ke),
                                                    }),
                                                    (te.reset = !1),
                                                    (te.placement = te.options.placement),
                                                    te.orderedModifiers.forEach(function($e) {
                                                        return (te.modifiersData[$e.name] = Object.assign({},
                                                            $e.data
                                                        ));
                                                    });
                                                    for (
                                                        var fe = 0; fe < te.orderedModifiers.length; fe++
                                                    )
                                                        if (te.reset !== !0) {
                                                            var ve = te.orderedModifiers[fe],
                                                                le = ve.fn,
                                                                ce = ve.options,
                                                                de = ce === void 0 ? {} : ce,
                                                                ge = ve.name;
                                                            typeof le == "function" &&
                                                                (te =
                                                                    le({
                                                                        state: te,
                                                                        options: de,
                                                                        name: ge,
                                                                        instance: he,
                                                                    }) || te);
                                                        } else(te.reset = !1), (fe = -1);
                                                }
                                            }
                                        },
                                        update: ((ne = function() {
                                                return new Promise(function(ie) {
                                                    he.forceUpdate(), ie(te);
                                                });
                                            }),
                                            function() {
                                                return (
                                                    re ||
                                                    (re = new Promise(function(ie) {
                                                        Promise.resolve().then(function() {
                                                            (re = void 0), ie(ne());
                                                        });
                                                    })),
                                                    re
                                                );
                                            }),
                                        destroy: function() {
                                            me(), (se = !0);
                                        },
                                    };
                                if (!qe(V, Y)) return he;

                                function me() {
                                    Ae.forEach(function(ie) {
                                            return ie();
                                        }),
                                        (Ae = []);
                                }
                                return (
                                    he.setOptions(X).then(function(ie) {
                                        !se && X.onFirstUpdate && X.onFirstUpdate(ie);
                                    }),
                                    he
                                );
                            };
                        }
                        var Re = {
                            passive: !0
                        };

                        function ze(_) {
                            return _.split("-")[0];
                        }

                        function je(_) {
                            return _.split("-")[1];
                        }

                        function Pe(_) {
                            return ["top", "bottom"].indexOf(_) >= 0 ? "x" : "y";
                        }

                        function ee(_) {
                            var y,
                                x = _.reference,
                                R = _.element,
                                U = _.placement,
                                z = U ? ze(U) : null,
                                V = U ? je(U) : null,
                                Y = x.x + x.width / 2 - R.width / 2,
                                X = x.y + x.height / 2 - R.height / 2;
                            switch (z) {
                                case W:
                                    y = {
                                        x: Y,
                                        y: x.y - R.height
                                    };
                                    break;
                                case J:
                                    y = {
                                        x: Y,
                                        y: x.y + x.height
                                    };
                                    break;
                                case Se:
                                    y = {
                                        x: x.x + x.width,
                                        y: X
                                    };
                                    break;
                                case ae:
                                    y = {
                                        x: x.x - R.width,
                                        y: X
                                    };
                                    break;
                                default:
                                    y = {
                                        x: x.x,
                                        y: x.y
                                    };
                            }
                            var ne = z ? Pe(z) : null;
                            if (ne != null) {
                                var re = ne === "y" ? "height" : "width";
                                switch (V) {
                                    case Ge:
                                        y[ne] = y[ne] - (x[re] / 2 - R[re] / 2);
                                        break;
                                    case Ue:
                                        y[ne] = y[ne] + (x[re] / 2 - R[re] / 2);
                                }
                            }
                            return y;
                        }
                        var Be = {
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                        };

                        function oe(_) {
                            var y,
                                x = _.popper,
                                R = _.popperRect,
                                U = _.placement,
                                z = _.variation,
                                V = _.offsets,
                                Y = _.position,
                                X = _.gpuAcceleration,
                                ne = _.adaptive,
                                re = _.roundOffsets,
                                te = _.isFixed,
                                Ae = V.x,
                                se = Ae === void 0 ? 0 : Ae,
                                he = V.y,
                                me = he === void 0 ? 0 : he,
                                ie =
                                typeof re == "function" ?
                                re({
                                    x: se,
                                    y: me
                                }) :
                                {
                                    x: se,
                                    y: me
                                };
                            (se = ie.x), (me = ie.y);
                            var Me = V.hasOwnProperty("x"),
                                ke = V.hasOwnProperty("y"),
                                fe = ae,
                                ve = W,
                                le = window;
                            if (ne) {
                                var ce = N(x),
                                    de = "clientHeight",
                                    ge = "clientWidth";
                                ce === a(x) &&
                                    M((ce = w(x))).position !== "static" &&
                                    Y === "absolute" &&
                                    ((de = "scrollHeight"), (ge = "scrollWidth")),
                                    (ce = ce),
                                    (U === W || ((U === ae || U === Se) && z === Ue)) &&
                                    ((ve = J),
                                        (me -=
                                            (te && le.visualViewport ?
                                                le.visualViewport.height :
                                                ce[de]) - R.height),
                                        (me *= X ? 1 : -1)),
                                    (U !== ae && ((U !== W && U !== J) || z !== Ue)) ||
                                    ((fe = Se),
                                        (se -=
                                            (te && le.visualViewport ?
                                                le.visualViewport.width :
                                                ce[ge]) - R.width),
                                        (se *= X ? 1 : -1));
                            }
                            var $e,
                                Ie = Object.assign({
                                    position: Y
                                }, ne && Be),
                                Ne =
                                re === !0 ?
                                (function(Je) {
                                    var it = Je.x,
                                        dt = Je.y,
                                        Ye = window.devicePixelRatio || 1;
                                    return {
                                        x: j(it * Ye) / Ye || 0,
                                        y: j(dt * Ye) / Ye || 0,
                                    };
                                })({
                                    x: se,
                                    y: me
                                }) :
                                {
                                    x: se,
                                    y: me
                                };
                            return (
                                (se = Ne.x),
                                (me = Ne.y),
                                X ?
                                Object.assign({},
                                    Ie,
                                    ((($e = {})[ve] = ke ? "0" : ""),
                                        ($e[fe] = Me ? "0" : ""),
                                        ($e.transform =
                                            (le.devicePixelRatio || 1) <= 1 ?
                                            "translate(" + se + "px, " + me + "px)" :
                                            "translate3d(" + se + "px, " + me + "px, 0)"),
                                        $e)
                                ) :
                                Object.assign({},
                                    Ie,
                                    (((y = {})[ve] = ke ? me + "px" : ""),
                                        (y[fe] = Me ? se + "px" : ""),
                                        (y.transform = ""),
                                        y)
                                )
                            );
                        }
                        var $t = {
                            left: "right",
                            right: "left",
                            bottom: "top",
                            top: "bottom",
                        };

                        function Ft(_) {
                            return _.replace(/left|right|bottom|top/g, function(y) {
                                return $t[y];
                            });
                        }
                        var Qr = {
                            start: "end",
                            end: "start"
                        };

                        function Tn(_) {
                            return _.replace(/start|end/g, function(y) {
                                return Qr[y];
                            });
                        }

                        function jn(_, y) {
                            var x = y.getRootNode && y.getRootNode();
                            if (_.contains(y)) return !0;
                            if (x && $(x)) {
                                var R = y;
                                do {
                                    if (R && _.isSameNode(R)) return !0;
                                    R = R.parentNode || R.host;
                                } while (R);
                            }
                            return !1;
                        }

                        function mn(_) {
                            return Object.assign({}, _, {
                                left: _.x,
                                top: _.y,
                                right: _.x + _.width,
                                bottom: _.y + _.height,
                            });
                        }

                        function Pn(_, y) {
                            return y === ht ?
                                mn(
                                    (function(x) {
                                        var R = a(x),
                                            U = w(x),
                                            z = R.visualViewport,
                                            V = U.clientWidth,
                                            Y = U.clientHeight,
                                            X = 0,
                                            ne = 0;
                                        return (
                                            z &&
                                            ((V = z.width),
                                                (Y = z.height),
                                                /^((?!chrome|android).)*safari/i.test(
                                                    navigator.userAgent
                                                ) || ((X = z.offsetLeft), (ne = z.offsetTop))), {
                                                width: V,
                                                height: Y,
                                                x: X + D(x),
                                                y: ne
                                            }
                                        );
                                    })(_)
                                ) :
                                m(y) ?
                                (function(x) {
                                    var R = b(x);
                                    return (
                                        (R.top = R.top + x.clientTop),
                                        (R.left = R.left + x.clientLeft),
                                        (R.bottom = R.top + x.clientHeight),
                                        (R.right = R.left + x.clientWidth),
                                        (R.width = x.clientWidth),
                                        (R.height = x.clientHeight),
                                        (R.x = R.left),
                                        (R.y = R.top),
                                        R
                                    );
                                })(y) :
                                mn(
                                    (function(x) {
                                        var R,
                                            U = w(x),
                                            z = d(x),
                                            V = (R = x.ownerDocument) == null ? void 0 : R.body,
                                            Y = k(
                                                U.scrollWidth,
                                                U.clientWidth,
                                                V ? V.scrollWidth : 0,
                                                V ? V.clientWidth : 0
                                            ),
                                            X = k(
                                                U.scrollHeight,
                                                U.clientHeight,
                                                V ? V.scrollHeight : 0,
                                                V ? V.clientHeight : 0
                                            ),
                                            ne = -z.scrollLeft + D(x),
                                            re = -z.scrollTop;
                                        return (
                                            M(V || U).direction === "rtl" &&
                                            (ne += k(U.clientWidth, V ? V.clientWidth : 0) - Y), {
                                                width: Y,
                                                height: X,
                                                x: ne,
                                                y: re
                                            }
                                        );
                                    })(w(_))
                                );
                        }

                        function qn(_) {
                            return Object.assign({}, {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                _
                            );
                        }

                        function An(_, y) {
                            return y.reduce(function(x, R) {
                                return (x[R] = _), x;
                            }, {});
                        }

                        function zt(_, y) {
                            y === void 0 && (y = {});
                            var x = y,
                                R = x.placement,
                                U = R === void 0 ? _.placement : R,
                                z = x.boundary,
                                V = z === void 0 ? "clippingParents" : z,
                                Y = x.rootBoundary,
                                X = Y === void 0 ? ht : Y,
                                ne = x.elementContext,
                                re = ne === void 0 ? be : ne,
                                te = x.altBoundary,
                                Ae = te !== void 0 && te,
                                se = x.padding,
                                he = se === void 0 ? 0 : se,
                                me = qn(typeof he != "number" ? he : An(he, tt)),
                                ie = re === be ? "reference" : be,
                                Me = _.rects.popper,
                                ke = _.elements[Ae ? ie : re],
                                fe = (function(Ne, Je, it) {
                                    var dt =
                                        Je === "clippingParents" ?
                                        (function(Ee) {
                                            var vt = C(S(Ee)),
                                                Ke = ["absolute", "fixed"].indexOf(M(Ee).position) >=
                                                0 && h(Ee) ?
                                                N(Ee) :
                                                Ee;
                                            return m(Ke) ?
                                                vt.filter(function(We) {
                                                    return (
                                                        m(We) && jn(We, Ke) && g(We) !== "body"
                                                    );
                                                }) :
                                                [];
                                        })(Ne) :
                                        [].concat(Je),
                                        Ye = [].concat(dt, [it]),
                                        Ze = Ye[0],
                                        He = Ye.reduce(function(Ee, vt) {
                                            var Ke = Pn(Ne, vt);
                                            return (
                                                (Ee.top = k(Ke.top, Ee.top)),
                                                (Ee.right = A(Ke.right, Ee.right)),
                                                (Ee.bottom = A(Ke.bottom, Ee.bottom)),
                                                (Ee.left = k(Ke.left, Ee.left)),
                                                Ee
                                            );
                                        }, Pn(Ne, Ze));
                                    return (
                                        (He.width = He.right - He.left),
                                        (He.height = He.bottom - He.top),
                                        (He.x = He.left),
                                        (He.y = He.top),
                                        He
                                    );
                                })(
                                    m(ke) ? ke : ke.contextElement || w(_.elements.popper),
                                    V,
                                    X
                                ),
                                ve = b(_.elements.reference),
                                le = ee({
                                    reference: ve,
                                    element: Me,
                                    strategy: "absolute",
                                    placement: U,
                                }),
                                ce = mn(Object.assign({}, Me, le)),
                                de = re === be ? ce : ve,
                                ge = {
                                    top: fe.top - de.top + me.top,
                                    bottom: de.bottom - fe.bottom + me.bottom,
                                    left: fe.left - de.left + me.left,
                                    right: de.right - fe.right + me.right,
                                },
                                $e = _.modifiersData.offset;
                            if (re === be && $e) {
                                var Ie = $e[U];
                                Object.keys(ge).forEach(function(Ne) {
                                    var Je = [Se, J].indexOf(Ne) >= 0 ? 1 : -1,
                                        it = [W, J].indexOf(Ne) >= 0 ? "y" : "x";
                                    ge[Ne] += Ie[it] * Je;
                                });
                            }
                            return ge;
                        }

                        function Vt(_, y, x) {
                            return k(_, A(y, x));
                        }

                        function Mn(_, y, x) {
                            return (
                                x === void 0 && (x = {
                                    x: 0,
                                    y: 0
                                }), {
                                    top: _.top - y.height - x.y,
                                    right: _.right - y.width + x.x,
                                    bottom: _.bottom - y.height + x.y,
                                    left: _.left - y.width - x.x,
                                }
                            );
                        }

                        function Dn(_) {
                            return [W, Se, J, ae].some(function(y) {
                                return _[y] >= 0;
                            });
                        }
                        var Wr = bt({
                            defaultModifiers: [{
                                    name: "eventListeners",
                                    enabled: !0,
                                    phase: "write",
                                    fn: function() {},
                                    effect: function(_) {
                                        var y = _.state,
                                            x = _.instance,
                                            R = _.options,
                                            U = R.scroll,
                                            z = U === void 0 || U,
                                            V = R.resize,
                                            Y = V === void 0 || V,
                                            X = a(y.elements.popper),
                                            ne = [].concat(
                                                y.scrollParents.reference,
                                                y.scrollParents.popper
                                            );
                                        return (
                                            z &&
                                            ne.forEach(function(re) {
                                                re.addEventListener("scroll", x.update, Re);
                                            }),
                                            Y && X.addEventListener("resize", x.update, Re),
                                            function() {
                                                z &&
                                                    ne.forEach(function(re) {
                                                        re.removeEventListener("scroll", x.update, Re);
                                                    }),
                                                    Y && X.removeEventListener("resize", x.update, Re);
                                            }
                                        );
                                    },
                                    data: {},
                                },
                                {
                                    name: "popperOffsets",
                                    enabled: !0,
                                    phase: "read",
                                    fn: function(_) {
                                        var y = _.state,
                                            x = _.name;
                                        y.modifiersData[x] = ee({
                                            reference: y.rects.reference,
                                            element: y.rects.popper,
                                            strategy: "absolute",
                                            placement: y.placement,
                                        });
                                    },
                                    data: {},
                                },
                                {
                                    name: "computeStyles",
                                    enabled: !0,
                                    phase: "beforeWrite",
                                    fn: function(_) {
                                        var y = _.state,
                                            x = _.options,
                                            R = x.gpuAcceleration,
                                            U = R === void 0 || R,
                                            z = x.adaptive,
                                            V = z === void 0 || z,
                                            Y = x.roundOffsets,
                                            X = Y === void 0 || Y,
                                            ne = {
                                                placement: ze(y.placement),
                                                variation: je(y.placement),
                                                popper: y.elements.popper,
                                                popperRect: y.rects.popper,
                                                gpuAcceleration: U,
                                                isFixed: y.options.strategy === "fixed",
                                            };
                                        y.modifiersData.popperOffsets != null &&
                                            (y.styles.popper = Object.assign({},
                                                y.styles.popper,
                                                oe(
                                                    Object.assign({}, ne, {
                                                        offsets: y.modifiersData.popperOffsets,
                                                        position: y.options.strategy,
                                                        adaptive: V,
                                                        roundOffsets: X,
                                                    })
                                                )
                                            )),
                                            y.modifiersData.arrow != null &&
                                            (y.styles.arrow = Object.assign({},
                                                y.styles.arrow,
                                                oe(
                                                    Object.assign({}, ne, {
                                                        offsets: y.modifiersData.arrow,
                                                        position: "absolute",
                                                        adaptive: !1,
                                                        roundOffsets: X,
                                                    })
                                                )
                                            )),
                                            (y.attributes.popper = Object.assign({},
                                                y.attributes.popper, {
                                                    "data-popper-placement": y.placement
                                                }
                                            ));
                                    },
                                    data: {},
                                },
                                {
                                    name: "applyStyles",
                                    enabled: !0,
                                    phase: "write",
                                    fn: function(_) {
                                        var y = _.state;
                                        Object.keys(y.elements).forEach(function(x) {
                                            var R = y.styles[x] || {},
                                                U = y.attributes[x] || {},
                                                z = y.elements[x];
                                            h(z) &&
                                                g(z) &&
                                                (Object.assign(z.style, R),
                                                    Object.keys(U).forEach(function(V) {
                                                        var Y = U[V];
                                                        Y === !1 ?
                                                            z.removeAttribute(V) :
                                                            z.setAttribute(V, Y === !0 ? "" : Y);
                                                    }));
                                        });
                                    },
                                    effect: function(_) {
                                        var y = _.state,
                                            x = {
                                                popper: {
                                                    position: y.options.strategy,
                                                    left: "0",
                                                    top: "0",
                                                    margin: "0",
                                                },
                                                arrow: {
                                                    position: "absolute"
                                                },
                                                reference: {},
                                            };
                                        return (
                                            Object.assign(y.elements.popper.style, x.popper),
                                            (y.styles = x),
                                            y.elements.arrow &&
                                            Object.assign(y.elements.arrow.style, x.arrow),
                                            function() {
                                                Object.keys(y.elements).forEach(function(R) {
                                                    var U = y.elements[R],
                                                        z = y.attributes[R] || {},
                                                        V = Object.keys(
                                                            y.styles.hasOwnProperty(R) ? y.styles[R] : x[R]
                                                        ).reduce(function(Y, X) {
                                                            return (Y[X] = ""), Y;
                                                        }, {});
                                                    h(U) &&
                                                        g(U) &&
                                                        (Object.assign(U.style, V),
                                                            Object.keys(z).forEach(function(Y) {
                                                                U.removeAttribute(Y);
                                                            }));
                                                });
                                            }
                                        );
                                    },
                                    requires: ["computeStyles"],
                                },
                                {
                                    name: "offset",
                                    enabled: !0,
                                    phase: "main",
                                    requires: ["popperOffsets"],
                                    fn: function(_) {
                                        var y = _.state,
                                            x = _.options,
                                            R = _.name,
                                            U = x.offset,
                                            z = U === void 0 ? [0, 0] : U,
                                            V = Qe.reduce(function(re, te) {
                                                return (
                                                    (re[te] = (function(Ae, se, he) {
                                                        var me = ze(Ae),
                                                            ie = [ae, W].indexOf(me) >= 0 ? -1 : 1,
                                                            Me =
                                                            typeof he == "function" ?
                                                            he(Object.assign({}, se, {
                                                                placement: Ae
                                                            })) :
                                                            he,
                                                            ke = Me[0],
                                                            fe = Me[1];
                                                        return (
                                                            (ke = ke || 0),
                                                            (fe = (fe || 0) * ie),
                                                            [ae, Se].indexOf(me) >= 0 ?
                                                            {
                                                                x: fe,
                                                                y: ke
                                                            } :
                                                            {
                                                                x: ke,
                                                                y: fe
                                                            }
                                                        );
                                                    })(te, y.rects, z)),
                                                    re
                                                );
                                            }, {}),
                                            Y = V[y.placement],
                                            X = Y.x,
                                            ne = Y.y;
                                        y.modifiersData.popperOffsets != null &&
                                            ((y.modifiersData.popperOffsets.x += X),
                                                (y.modifiersData.popperOffsets.y += ne)),
                                            (y.modifiersData[R] = V);
                                    },
                                },
                                {
                                    name: "flip",
                                    enabled: !0,
                                    phase: "main",
                                    fn: function(_) {
                                        var y = _.state,
                                            x = _.options,
                                            R = _.name;
                                        if (!y.modifiersData[R]._skip) {
                                            for (
                                                var U = x.mainAxis,
                                                    z = U === void 0 || U,
                                                    V = x.altAxis,
                                                    Y = V === void 0 || V,
                                                    X = x.fallbackPlacements,
                                                    ne = x.padding,
                                                    re = x.boundary,
                                                    te = x.rootBoundary,
                                                    Ae = x.altBoundary,
                                                    se = x.flipVariations,
                                                    he = se === void 0 || se,
                                                    me = x.allowedAutoPlacements,
                                                    ie = y.options.placement,
                                                    Me = ze(ie),
                                                    ke =
                                                    X ||
                                                    (Me !== ie && he ?
                                                        (function(We) {
                                                            if (ze(We) === ot) return [];
                                                            var st = Ft(We);
                                                            return [Tn(We), st, Tn(st)];
                                                        })(ie) :
                                                        [Ft(ie)]),
                                                    fe = [ie].concat(ke).reduce(function(We, st) {
                                                        return We.concat(
                                                            ze(st) === ot ?
                                                            (function(Lt, _t) {
                                                                _t === void 0 && (_t = {});
                                                                var lt = _t,
                                                                    Jt = lt.placement,
                                                                    Yt = lt.boundary,
                                                                    Et = lt.rootBoundary,
                                                                    gn = lt.padding,
                                                                    hn = lt.flipVariations,
                                                                    Tt = lt.allowedAutoPlacements,
                                                                    yn = Tt === void 0 ? Qe : Tt,
                                                                    Gt = je(Jt),
                                                                    Kt = Gt ?
                                                                    hn ?
                                                                    ft :
                                                                    ft.filter(function(ct) {
                                                                        return je(ct) === Gt;
                                                                    }) :
                                                                    tt,
                                                                    jt = Kt.filter(function(ct) {
                                                                        return yn.indexOf(ct) >= 0;
                                                                    });
                                                                jt.length === 0 && (jt = Kt);
                                                                var Pt = jt.reduce(function(ct, kt) {
                                                                    return (
                                                                        (ct[kt] = zt(Lt, {
                                                                            placement: kt,
                                                                            boundary: Yt,
                                                                            rootBoundary: Et,
                                                                            padding: gn,
                                                                        })[ze(kt)]),
                                                                        ct
                                                                    );
                                                                }, {});
                                                                return Object.keys(Pt).sort(function(
                                                                    ct,
                                                                    kt
                                                                ) {
                                                                    return Pt[ct] - Pt[kt];
                                                                });
                                                            })(y, {
                                                                placement: st,
                                                                boundary: re,
                                                                rootBoundary: te,
                                                                padding: ne,
                                                                flipVariations: he,
                                                                allowedAutoPlacements: me,
                                                            }) :
                                                            st
                                                        );
                                                    }, []),
                                                    ve = y.rects.reference,
                                                    le = y.rects.popper,
                                                    ce = new Map(),
                                                    de = !0,
                                                    ge = fe[0],
                                                    $e = 0; $e < fe.length; $e++
                                            ) {
                                                var Ie = fe[$e],
                                                    Ne = ze(Ie),
                                                    Je = je(Ie) === Ge,
                                                    it = [W, J].indexOf(Ne) >= 0,
                                                    dt = it ? "width" : "height",
                                                    Ye = zt(y, {
                                                        placement: Ie,
                                                        boundary: re,
                                                        rootBoundary: te,
                                                        altBoundary: Ae,
                                                        padding: ne,
                                                    }),
                                                    Ze = it ? (Je ? Se : ae) : Je ? J : W;
                                                ve[dt] > le[dt] && (Ze = Ft(Ze));
                                                var He = Ft(Ze),
                                                    Ee = [];
                                                if (
                                                    (z && Ee.push(Ye[Ne] <= 0),
                                                        Y && Ee.push(Ye[Ze] <= 0, Ye[He] <= 0),
                                                        Ee.every(function(We) {
                                                            return We;
                                                        }))
                                                ) {
                                                    (ge = Ie), (de = !1);
                                                    break;
                                                }
                                                ce.set(Ie, Ee);
                                            }
                                            if (de)
                                                for (
                                                    var vt = function(We) {
                                                            var st = fe.find(function(Lt) {
                                                                var _t = ce.get(Lt);
                                                                if (_t)
                                                                    return _t.slice(0, We).every(function(lt) {
                                                                        return lt;
                                                                    });
                                                            });
                                                            if (st) return (ge = st), "break";
                                                        },
                                                        Ke = he ? 3 : 1; Ke > 0 && vt(Ke) !== "break"; Ke--
                                                );
                                            y.placement !== ge &&
                                                ((y.modifiersData[R]._skip = !0),
                                                    (y.placement = ge),
                                                    (y.reset = !0));
                                        }
                                    },
                                    requiresIfExists: ["offset"],
                                    data: {
                                        _skip: !1
                                    },
                                },
                                {
                                    name: "preventOverflow",
                                    enabled: !0,
                                    phase: "main",
                                    fn: function(_) {
                                        var y = _.state,
                                            x = _.options,
                                            R = _.name,
                                            U = x.mainAxis,
                                            z = U === void 0 || U,
                                            V = x.altAxis,
                                            Y = V !== void 0 && V,
                                            X = x.boundary,
                                            ne = x.rootBoundary,
                                            re = x.altBoundary,
                                            te = x.padding,
                                            Ae = x.tether,
                                            se = Ae === void 0 || Ae,
                                            he = x.tetherOffset,
                                            me = he === void 0 ? 0 : he,
                                            ie = zt(y, {
                                                boundary: X,
                                                rootBoundary: ne,
                                                padding: te,
                                                altBoundary: re,
                                            }),
                                            Me = ze(y.placement),
                                            ke = je(y.placement),
                                            fe = !ke,
                                            ve = Pe(Me),
                                            le = ve === "x" ? "y" : "x",
                                            ce = y.modifiersData.popperOffsets,
                                            de = y.rects.reference,
                                            ge = y.rects.popper,
                                            $e =
                                            typeof me == "function" ?
                                            me(
                                                Object.assign({}, y.rects, {
                                                    placement: y.placement,
                                                })
                                            ) :
                                            me,
                                            Ie =
                                            typeof $e == "number" ?
                                            {
                                                mainAxis: $e,
                                                altAxis: $e
                                            } :
                                            Object.assign({
                                                mainAxis: 0,
                                                altAxis: 0
                                            }, $e),
                                            Ne = y.modifiersData.offset ?
                                            y.modifiersData.offset[y.placement] :
                                            null,
                                            Je = {
                                                x: 0,
                                                y: 0
                                            };
                                        if (ce) {
                                            if (z) {
                                                var it,
                                                    dt = ve === "y" ? W : ae,
                                                    Ye = ve === "y" ? J : Se,
                                                    Ze = ve === "y" ? "height" : "width",
                                                    He = ce[ve],
                                                    Ee = He + ie[dt],
                                                    vt = He - ie[Ye],
                                                    Ke = se ? -ge[Ze] / 2 : 0,
                                                    We = ke === Ge ? de[Ze] : ge[Ze],
                                                    st = ke === Ge ? -ge[Ze] : -de[Ze],
                                                    Lt = y.elements.arrow,
                                                    _t = se && Lt ? f(Lt) : {
                                                        width: 0,
                                                        height: 0
                                                    },
                                                    lt = y.modifiersData["arrow#persistent"] ?
                                                    y.modifiersData["arrow#persistent"].padding :
                                                    {
                                                        top: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        left: 0
                                                    },
                                                    Jt = lt[dt],
                                                    Yt = lt[Ye],
                                                    Et = Vt(0, de[Ze], _t[Ze]),
                                                    gn = fe ?
                                                    de[Ze] / 2 - Ke - Et - Jt - Ie.mainAxis :
                                                    We - Et - Jt - Ie.mainAxis,
                                                    hn = fe ?
                                                    -de[Ze] / 2 + Ke + Et + Yt + Ie.mainAxis :
                                                    st + Et + Yt + Ie.mainAxis,
                                                    Tt = y.elements.arrow && N(y.elements.arrow),
                                                    yn = Tt ?
                                                    ve === "y" ?
                                                    Tt.clientTop || 0 :
                                                    Tt.clientLeft || 0 :
                                                    0,
                                                    Gt =
                                                    (it = Ne == null ? void 0 : Ne[ve]) != null ?
                                                    it :
                                                    0,
                                                    Kt = He + hn - Gt,
                                                    jt = Vt(
                                                        se ? A(Ee, He + gn - Gt - yn) : Ee,
                                                        He,
                                                        se ? k(vt, Kt) : vt
                                                    );
                                                (ce[ve] = jt), (Je[ve] = jt - He);
                                            }
                                            if (Y) {
                                                var Pt,
                                                    ct = ve === "x" ? W : ae,
                                                    kt = ve === "x" ? J : Se,
                                                    xt = ce[le],
                                                    Xt = le === "y" ? "height" : "width",
                                                    Rn = xt + ie[ct],
                                                    Hn = xt - ie[kt],
                                                    bn = [W, ae].indexOf(Me) !== -1,
                                                    Bn =
                                                    (Pt = Ne == null ? void 0 : Ne[le]) != null ?
                                                    Pt :
                                                    0,
                                                    In = bn ? Rn : xt - de[Xt] - ge[Xt] - Bn + Ie.altAxis,
                                                    Nn = bn ? xt + de[Xt] + ge[Xt] - Bn - Ie.altAxis : Hn,
                                                    zn =
                                                    se && bn ?
                                                    (function(Fr, Jr, vn) {
                                                        var Vn = Vt(Fr, Jr, vn);
                                                        return Vn > vn ? vn : Vn;
                                                    })(In, xt, Nn) :
                                                    Vt(se ? In : Rn, xt, se ? Nn : Hn);
                                                (ce[le] = zn), (Je[le] = zn - xt);
                                            }
                                            y.modifiersData[R] = Je;
                                        }
                                    },
                                    requiresIfExists: ["offset"],
                                },
                                {
                                    name: "arrow",
                                    enabled: !0,
                                    phase: "main",
                                    fn: function(_) {
                                        var y,
                                            x = _.state,
                                            R = _.name,
                                            U = _.options,
                                            z = x.elements.arrow,
                                            V = x.modifiersData.popperOffsets,
                                            Y = ze(x.placement),
                                            X = Pe(Y),
                                            ne = [ae, Se].indexOf(Y) >= 0 ? "height" : "width";
                                        if (z && V) {
                                            var re = (function(ge, $e) {
                                                    return qn(
                                                        typeof(ge =
                                                            typeof ge == "function" ?
                                                            ge(
                                                                Object.assign({}, $e.rects, {
                                                                    placement: $e.placement,
                                                                })
                                                            ) :
                                                            ge) != "number" ?
                                                        ge :
                                                        An(ge, tt)
                                                    );
                                                })(U.padding, x),
                                                te = f(z),
                                                Ae = X === "y" ? W : ae,
                                                se = X === "y" ? J : Se,
                                                he =
                                                x.rects.reference[ne] +
                                                x.rects.reference[X] -
                                                V[X] -
                                                x.rects.popper[ne],
                                                me = V[X] - x.rects.reference[X],
                                                ie = N(z),
                                                Me = ie ?
                                                X === "y" ?
                                                ie.clientHeight || 0 :
                                                ie.clientWidth || 0 :
                                                0,
                                                ke = he / 2 - me / 2,
                                                fe = re[Ae],
                                                ve = Me - te[ne] - re[se],
                                                le = Me / 2 - te[ne] / 2 + ke,
                                                ce = Vt(fe, le, ve),
                                                de = X;
                                            x.modifiersData[R] =
                                                (((y = {})[de] = ce), (y.centerOffset = ce - le), y);
                                        }
                                    },
                                    effect: function(_) {
                                        var y = _.state,
                                            x = _.options.element,
                                            R = x === void 0 ? "[data-popper-arrow]" : x;
                                        R != null &&
                                            (typeof R != "string" ||
                                                (R = y.elements.popper.querySelector(R))) &&
                                            jn(y.elements.popper, R) &&
                                            (y.elements.arrow = R);
                                    },
                                    requires: ["popperOffsets"],
                                    requiresIfExists: ["preventOverflow"],
                                },
                                {
                                    name: "hide",
                                    enabled: !0,
                                    phase: "main",
                                    requiresIfExists: ["preventOverflow"],
                                    fn: function(_) {
                                        var y = _.state,
                                            x = _.name,
                                            R = y.rects.reference,
                                            U = y.rects.popper,
                                            z = y.modifiersData.preventOverflow,
                                            V = zt(y, {
                                                elementContext: "reference"
                                            }),
                                            Y = zt(y, {
                                                altBoundary: !0
                                            }),
                                            X = Mn(V, R),
                                            ne = Mn(Y, U, z),
                                            re = Dn(X),
                                            te = Dn(ne);
                                        (y.modifiersData[x] = {
                                            referenceClippingOffsets: X,
                                            popperEscapeOffsets: ne,
                                            isReferenceHidden: re,
                                            hasPopperEscaped: te,
                                        }),
                                        (y.attributes.popper = Object.assign({},
                                            y.attributes.popper, {
                                                "data-popper-reference-hidden": re,
                                                "data-popper-escaped": te,
                                            }
                                        ));
                                    },
                                },
                            ],
                        });
                    },
                },
                t = {};

            function r(s) {
                var l = t[s];
                if (l !== void 0) return l.exports;
                var c = (t[s] = {
                    exports: {}
                });
                return n[s](c, c.exports, r), c.exports;
            }
            (r.d = (s, l) => {
                for (var c in l)
                    r.o(l, c) &&
                    !r.o(s, c) &&
                    Object.defineProperty(s, c, {
                        enumerable: !0,
                        get: l[c]
                    });
            }),
            (r.o = (s, l) => Object.prototype.hasOwnProperty.call(s, l)),
            (r.r = (s) => {
                typeof Symbol < "u" &&
                    Symbol.toStringTag &&
                    Object.defineProperty(s, Symbol.toStringTag, {
                        value: "Module"
                    }),
                    Object.defineProperty(s, "__esModule", {
                        value: !0
                    });
            });
            var i = {};
            return (
                r.r(i), r(661), r(795), r(682), r(284), r(181), r(778), r(51), r(185), i
            );
        })();
    });
})(qo);

function Ao(o) {
    let e = o[0].title + "",
        n;
    return {
        c() {
            n = pe(e);
        },
        m(t, r) {
            I(t, n, r);
        },
        p(t, r) {
            r & 1 && e !== (e = t[0].title + "") && De(n, e);
        },
        d(t) {
            t && B(n);
        },
    };
}

function Mo(o) {
    let e, n;
    return {
        c() {
            (e = pe("Welcome to ")),
            (n = L("span")),
            (n.textContent = "CashCoach"),
            p(n, "class", "nav-title");
        },
        m(t, r) {
            I(t, e, r), I(t, n, r);
        },
        p: K,
        d(t) {
            t && (B(e), B(n));
        },
    };
}

function Do(o) {
    let e,
        n,
        t,
        r,
        i = o[0].subtitle + "",
        s;

    function l(m, h) {
        return m[0].title == "Welcome to CashCoach" ? Mo : Ao;
    }
    let c = l(o),
        a = c(o);
    return {
        c() {
            (e = L("div")),
            (n = L("h1")),
            a.c(),
                (t = F()),
                (r = L("p")),
                (s = pe(i)),
                p(
                    n,
                    "class",
                    "text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white"
                ),
                p(r, "class", "mt-3 text-gray-600 dark:text-gray-400"),
                p(e, "class", "max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center");
        },
        m(m, h) {
            I(m, e, h), v(e, n), a.m(n, null), v(e, t), v(e, r), v(r, s);
        },
        p(m, [h]) {
            c === (c = l(m)) && a ?
                a.p(m, h) :
                (a.d(1), (a = c(m)), a && (a.c(), a.m(n, null))),
                h & 1 && i !== (i = m[0].subtitle + "") && De(s, i);
        },
        i: K,
        o: K,
        d(m) {
            m && B(e), a.d();
        },
    };
}

function Ro(o, e, n) {
    let t;
    return et(o, Ot, (r) => n(0, (t = r))), [t];
}
class Ho extends we {
    constructor(e) {
        super(), _e(this, e, Ro, Do, ye, {});
    }
}

function Bo(o) {
    let e, n;
    const t = o[1].default,
        r = on(t, o, o[0], null);
    return {
        c() {
            (e = L("p")),
            r && r.c(),
                p(e, "class", "text-gray-800 dark:text-gray-200");
        },
        m(i, s) {
            I(i, e, s), r && r.m(e, null), (n = !0);
        },
        p(i, [s]) {
            r &&
                r.p &&
                (!n || s & 1) &&
                ln(r, t, i, i[0], n ? sn(t, i[0], s, null) : an(i[0]), null);
        },
        i(i) {
            n || (E(r, i), (n = !0));
        },
        o(i) {
            q(r, i), (n = !1);
        },
        d(i) {
            i && B(e), r && r.d(i);
        },
    };
}

function Io(o, e, n) {
    let {
        $$slots: t = {},
        $$scope: r
    } = e;
    return (
        (o.$$set = (i) => {
            "$$scope" in i && n(0, (r = i.$$scope));
        }),
        [r, t]
    );
}
class at extends we {
    constructor(e) {
        super(), _e(this, e, Io, Bo, ye, {});
    }
}

function No(o) {
    let e;
    return {
        c() {
            e = pe(o[0]);
        },
        m(n, t) {
            I(n, e, t);
        },
        p(n, t) {
            t & 1 && De(e, n[0]);
        },
        d(n) {
            n && B(e);
        },
    };
}

function zo(o) {
    let e, n, t, r, i, s, l, c, a;
    l = new at({
        props: {
            $$slots: {
                default: [No]
            },
            $$scope: {
                ctx: o
            }
        }
    });
    const m = o[1].default,
        h = on(m, o, o[2], null);
    return {
        c() {
            (e = L("li")),
            (n = L("div")),
            (t = L("div")),
            (r = L("span")),
            (r.innerHTML =
                '<span class="text-sm font-medium text-white leading-none">You</span>'),
            (i = F()),
            (s = L("div")),
            Q(l.$$.fragment),
                (c = F()),
                h && h.c(),
                p(
                    r,
                    "class",
                    "flex-shrink-0 inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-600"
                ),
                p(s, "class", "grow mt-2 space-y-3"),
                p(t, "class", "max-w-2xl flex gap-x-2 sm:gap-x-4"),
                p(n, "class", "max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto"),
                p(e, "class", "py-2 sm:py-4");
        },
        m($, k) {
            I($, e, k),
                v(e, n),
                v(n, t),
                v(t, r),
                v(t, i),
                v(t, s),
                G(l, s, null),
                v(s, c),
                h && h.m(s, null),
                (a = !0);
        },
        p($, [k]) {
            const A = {};
            k & 5 && (A.$$scope = {
                    dirty: k,
                    ctx: $
                }),
                l.$set(A),
                h &&
                h.p &&
                (!a || k & 4) &&
                ln(h, m, $, $[2], a ? sn(m, $[2], k, null) : an($[2]), null);
        },
        i($) {
            a || (E(l.$$.fragment, $), E(h, $), (a = !0));
        },
        o($) {
            q(l.$$.fragment, $), q(h, $), (a = !1);
        },
        d($) {
            $ && B(e), Z(l), h && h.d($);
        },
    };
}

function Vo(o, e, n) {
    let {
        $$slots: t = {},
        $$scope: r
    } = e, {
        message: i
    } = e;
    return (
        (o.$$set = (s) => {
            "message" in s && n(0, (i = s.message)),
                "$$scope" in s && n(2, (r = s.$$scope));
        }),
        [i, t, r]
    );
}
class Ct extends we {
    constructor(e) {
        super(), _e(this, e, Vo, zo, ye, {
            message: 0
        });
    }
}

function Go(o) {
    let e, n, t;
    return {
        c() {
            (e = L("button")),
            (e.innerHTML =
                '<svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>'),
            p(e, "type", "button"),
                p(
                    e,
                    "class",
                    "inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                );
        },
        m(r, i) {
            I(r, e, i), n || ((t = Te(e, "click", o[1])), (n = !0));
        },
        p: K,
        d(r) {
            r && B(e), (n = !1), t();
        },
    };
}

function Zo(o) {
    let e;
    return {
        c() {
            (e = L("button")),
            (e.innerHTML =
                '<svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>'),
            p(e, "type", "button"),
                p(
                    e,
                    "class",
                    "animate-ping animate-pulse inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-red-500 hover:text-red-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-red-500 dark:hover:text-red-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-red-600"
                );
        },
        m(n, t) {
            I(n, e, t);
        },
        p: K,
        d(n) {
            n && B(e);
        },
    };
}

function Uo(o) {
    let e;

    function n(i, s) {
        return i[0] ? Zo : Go;
    }
    let t = n(o),
        r = t(o);
    return {
        c() {
            r.c(), (e = Ve());
        },
        m(i, s) {
            r.m(i, s), I(i, e, s);
        },
        p(i, [s]) {
            t === (t = n(i)) && r ?
                r.p(i, s) :
                (r.d(1), (r = t(i)), r && (r.c(), r.m(e.parentNode, e)));
        },
        i: K,
        o: K,
        d(i) {
            i && B(e), r.d(i);
        },
    };
}

function Qo(o, e, n) {
    let {
        newMessage: t
    } = e,
    r = !1;

    function i() {
        if ((n(0, (r = !0)), Br.set(!0), "webkitSpeechRecognition" in window))
            var s = new window.webkitSpeechRecognition();
        else var s = new window.SpeechRecognition();
        (s.lang = "en-US"),
        s.start(),
            (s.onresult = (l) => {
                const c = l.results[0][0].transcript;
            }),
            (s.onend = () => {
                n(0, (r = !1));
            }),
            (s.onerror = () => {
                n(0, (r = !1));
            });
    }
    return (
        (o.$$set = (s) => {
            "newMessage" in s && n(2, (t = s.newMessage));
        }),
        [r, i, t]
    );
}
class Wo extends we {
    constructor(e) {
        super(), _e(this, e, Qo, Uo, ye, {
            newMessage: 2
        });
    }
}

function Fo(o) {
    let e, n, n1, t, r, i, s, l, c, a, m, h, $, k, A, j;

    function b(g) {
        o[5](g);
    }
    let d = {};
    return (
        o[0] !== void 0 && (d.newMessage = o[0]),
        (a = new Wo({
            props: d
        })),
        $n.push(() => co(a, "newMessage", b)), {
            c() {
                (e = L("div")),
                (n = L("input")),
                (n1 = L("input")),
                (t = F()),
                (r = L("div")),
                (i = L("div")),
                (s = L("div")),
                (s.innerHTML = ""),
                (l = F()),
                (c = L("div")),
                Q(a.$$.fragment),
                    (h = F()),
                    ($ = L("button")),
                    ($.innerHTML =
                        '<svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path></svg>'),
                    p(n, "type", "text"),
                    p(
                        n,
                        "class",
                        "p-4 pb-12 block w-full bg-gray-100 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
                    ),
                    p(
                        n,
                        "placeholder",
                        "Ask me a question about your data that I can turn into SQL."
                    ),

                    p(n1, "type", "text"),
                    p(
                        n1,
                        "class",
                        "p-4 block w-full bg-gray-100 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
                    ),
                    p(
                        n1,
                        "placeholder",
                        "User Id"
                    ),

                    p(s, "class", "flex items-center"),
                    p($, "type", "button"),
                    p(
                        $,
                        "class",
                        "inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    ),
                    p(c, "class", "flex items-center gap-x-1"),
                    p(i, "class", "flex justify-between items-center"),
                    p(
                        r,
                        "class",
                        "absolute bottom-px inset-x-px p-2 rounded-b-md bg-gray-100 dark:bg-slate-800"
                    ),
                    p(e, "class", "relative");
                    n1.style.marginBottom = '8px'
            },
            m(g, w) {
                I(g, e, w),
                    v(e, n1),
                    v(e, n),
                    mt(n, o[0]),
                    v(e, t),
                    v(e, r),
                    v(r, i),
                    v(i, s),
                    v(i, l),
                    v(i, c),
                    G(a, c, null),
                    v(c, h),
                    v(c, $),
                    (k = !0),
                    A ||
                    ((j = [
                            Te(n, "input", o[4]),
                            Te(n1, "input", o[6]),
                            Te(n, "keydown", o[1]),
                            Te($, "click", o[2]),
                        ]),
                        (A = !0));
            },
            p(g, [w]) {
                w & 1 && n.value !== g[0] && mt(n, g[0]);
                const D = {};
                !m && w & 1 && ((m = !0), (D.newMessage = g[0]) , so(() => (m = !1))),
                    a.$set(D);
            },
            i(g) {
                k || (E(a.$$.fragment, g), (k = !0));
            },
            o(g) {
                q(a.$$.fragment, g), (k = !1);

            },
            d(g) {
                g && B(e), Z(a), (A = !1), gt(j);
            },
        }
    );
}

function isValidUUID(input) {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(input);
}

function Jo(o, e, n) {
    let {
        onSubmit: t
    } = e,
    r = "",
    userId = "";

    function i(a) {
        a.key === "Enter" && (t(r, userId), a.preventDefault());
    }

    function s() {
        if (isValidUUID(userId)) {
            if (r == "") {
                alert('Question cannot be empty');
             }
             t(r, userId);
        } else {
            alert('UserId is not a valid UUID.');
        }
    }

    function l() {
        (r = this.value), n(0, r);
    }

    function l2() {
        (userId = this.value);
    }

    function c(a) {
        (r = a), n(0, r);
    }
    return (
        (o.$$set = (a) => {
            "onSubmit" in a && n(3, (t = a.onSubmit));
        }),
        [r, i, s, t, l, c, l2]
    );
}
class Yo extends we {
    constructor(e) {
        super(), _e(this, e, Jo, Fo, ye, {
            onSubmit: 3
        });
    }
}

function Ko(o) {
    let e;
    return {
        c() {
            (e = L("div")),
            (e.innerHTML =
                '<button type="button" class="p-2 inline-flex justify-center items-center gap-1.5 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xs dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation"><svg class="w-3.5 h-3.5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg> <span>Sidebar</span></button>'),
            p(e, "class", "lg:hidden flex justify-end mb-2 sm:mb-3");
        },
        m(n, t) {
            I(n, e, t);
        },
        p: K,
        i: K,
        o: K,
        d(n) {
            n && B(e);
        },
    };
}
class Xo extends we {
    constructor(e) {
        super(), _e(this, e, null, Ko, ye, {});
    }
}

function ei(o) {
    let e, n, t, r;
    return {
        c() {
            (e = L("button")),
            (n = pe(o[0])),

            p(e, "type", "button"),
                p(
                    e,
                    "class",
                    "mb-2.5 mr-1.5 py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-md border border-blue-600 bg-white text-blue-600 align-middle hover:bg-blue-50 text-sm dark:bg-slate-900 dark:text-blue-500 dark:border-blue-500 dark:hover:text-blue-400 dark:hover:border-blue-400"
                );
        },
        m(i, s) {
            I(i, e, s), v(e, n), t || ((r = Te(e, "click", o[1])), (t = !0));
        },
        p(i, [s]) {
            s & 1 && De(n, i[0]);
        },
        i: K,
        o: K,
        d(i) {
            i && B(e), (t = !1), r();
        },
    };
}

function ti(o, e, n) {
    let {
        message: t
    } = e, {
        onSubmit: r
    } = e;

    function i() {
        r(t);
    }
    return (
        (o.$$set = (s) => {
            "message" in s && n(0, (t = s.message)),
                "onSubmit" in s && n(2, (r = s.onSubmit));
        }),
        [t, i, r]
    );
}
class ut extends we {
    constructor(e) {
        super(), _e(this, e, ti, ei, ye, {
            message: 0,
            onSubmit: 2
        });
    }
}

function ni(o) {
    let e, n, t, r, i, s, l, c, a, m, h;
    return {
        c() {
            (e = L("span")),
            (n = Xe("svg")),
            (t = Xe("defs")),
            (r = Xe("linearGradient")),
            (i = Xe("stop")),
            (s = Xe("stop")),
            (l = Xe("g")),
            (c = Xe("g")),
            (a = Xe("path")),
            (m = Xe("path")),
            p(i, "offset", "0"),
                p(i, "stop-color", "#009efd"),
                p(s, "offset", "1"),
                p(s, "stop-color", "#2af598"),
                p(
                    r,
                    "gradientTransform",
                    "matrix(1.09331 0 0 1.09331 -47.1838 -88.8946)"
                ),
                p(r, "gradientUnits", "userSpaceOnUse"),
                p(r, "id", "LinearGradient"),
                p(r, "x1", "237.82"),
                p(r, "x2", "785.097"),
                p(r, "y1", "549.609"),
                p(r, "y2", "549.609"),
                p(
                    a,
                    "d",
                    "M117.718 228.798C117.718 119.455 206.358 30.8151 315.701 30.8151L708.299 30.8151C817.642 30.8151 906.282 119.455 906.282 228.798L906.282 795.202C906.282 904.545 817.642 993.185 708.299 993.185L315.701 993.185C206.358 993.185 117.718 904.545 117.718 795.202L117.718 228.798Z"
                ),
                p(a, "fill", "#0f172a"),
                p(a, "fill-rule", "nonzero"),
                p(a, "opacity", "1"),
                p(a, "stroke", "#374151"),
                p(a, "stroke-linecap", "butt"),
                p(a, "stroke-linejoin", "round"),
                p(a, "stroke-width", "20"),
                p(
                    m,
                    "d",
                    "M212.828 215.239C213.095 281.169 213.629 413.028 213.629 413.028C213.629 413.028 511.51 808.257 513.993 809.681C612.915 677.809 810.759 414.065 810.759 414.065C810.759 414.065 811.034 280.901 811.172 214.319C662.105 362.973 662.105 362.973 513.038 511.627C362.933 363.433 362.933 363.433 212.828 215.239Z"
                ),
                p(m, "fill", "url(#LinearGradient)"),
                p(m, "fill-rule", "nonzero"),
                p(m, "opacity", "1"),
                p(m, "stroke", "none"),
                p(c, "opacity", "1"),
                p(l, "id", "Layer-1"),
                p(n, "height", "100%"),
                p(n, "stroke-miterlimit", "10"),
                tn(n, "fill-rule", "nonzero"),
                tn(n, "clip-rule", "evenodd"),
                tn(n, "stroke-linecap", "round"),
                tn(n, "stroke-linejoin", "round"),
                p(n, "version", "1.1"),
                p(n, "viewBox", "0 0 1024 1024"),
                p(n, "width", "100%"),
                p(n, "xml:space", "preserve"),
                p(n, "xmlns", "http://www.w3.org/2000/svg"),
                p(e, "class", (h = "flex-shrink-0 w-[2.375rem] h-[2.375rem] " + o[0]));
        },
        m($, k) {
            I($, e, k),
                v(e, n),
                v(n, t),
                v(t, r),
                v(r, i),
                v(r, s),
                v(n, l),
                v(l, c),
                v(c, a),
                v(c, m);
        },
        p($, [k]) {
            k & 1 &&
                h !== (h = "flex-shrink-0 w-[2.375rem] h-[2.375rem] " + $[0]) &&
                p(e, "class", h);
        },
        i: K,
        o: K,
        d($) {
            $ && B(e);
        },
    };
}

function ri(o, e, n) {
    let t, {
        animate: r = !1
    } = e;
    return (
        (o.$$set = (i) => {
            "animate" in i && n(1, (r = i.animate));
        }),
        (o.$$.update = () => {
            o.$$.dirty & 2 && n(0, (t = r ? "animate-bounce" : ""));
        }),
        [t, r]
    );
}
class zr extends we {
    constructor(e) {
        super(), _e(this, e, ri, ni, ye, {
            animate: 1
        });
    }
}

function oi(o) {
    let e, n, t, r, i;
    n = new zr({});
    const s = o[1].default,
        l = on(s, o, o[0], null);
    return {
        c() {
            (e = L("li")),
            Q(n.$$.fragment),
                (t = F()),
                (r = L("div")),
                l && l.c(),
                p(
                    r,
                    "class",
                    "space-y-3 overflow-x-auto overflow-y-hidden whitespace-break-spaces"
                ),
                p(
                    e,
                    "class",
                    "max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4"
                );
        },
        m(c, a) {
            I(c, e, a), G(n, e, null), v(e, t), v(e, r), l && l.m(r, null), (i = !0);
        },
        p(c, [a]) {
            l &&
                l.p &&
                (!i || a & 1) &&
                ln(l, s, c, c[0], i ? sn(s, c[0], a, null) : an(c[0]), null);
        },
        i(c) {
            i || (E(n.$$.fragment, c), E(l, c), (i = !0));
        },
        o(c) {
            q(n.$$.fragment, c), q(l, c), (i = !1);
        },
        d(c) {
            c && B(e), Z(n), l && l.d(c);
        },
    };
}

function ii(o, e, n) {
    let {
        $$slots: t = {},
        $$scope: r
    } = e;
    return (
        (o.$$set = (i) => {
            "$$scope" in i && n(0, (r = i.$$scope));
        }),
        [r, t]
    );
}
class Fe extends we {
    constructor(e) {
        super(), _e(this, e, ii, oi, ye, {});
    }
}

function si(o) {
    let e;
    return {
        c() {
            e = pe("Thinking...");
        },
        m(n, t) {
            I(n, e, t);
        },
        d(n) {
            n && B(e);
        },
    };
}

function li(o) {
    let e, n, t, r, i, s;
    return (
        (n = new zr({
            props: {
                animate: !0
            }
        })),
        (i = new at({
            props: {
                $$slots: {
                    default: [si]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                (e = L("li")),
                Q(n.$$.fragment),
                    (t = F()),
                    (r = L("div")),
                    Q(i.$$.fragment),
                    p(r, "class", "space-y-3"),
                    p(
                        e,
                        "class",
                        "max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto flex gap-x-2 sm:gap-x-4"
                    );
            },
            m(l, c) {
                I(l, e, c), G(n, e, null), v(e, t), v(e, r), G(i, r, null), (s = !0);
            },
            p(l, [c]) {
                const a = {};
                c & 1 && (a.$$scope = {
                    dirty: c,
                    ctx: l
                }), i.$set(a);
            },
            i(l) {
                s || (E(n.$$.fragment, l), E(i.$$.fragment, l), (s = !0));
            },
            o(l) {
                q(n.$$.fragment, l), q(i.$$.fragment, l), (s = !1);
            },
            d(l) {
                l && B(e), Z(n), Z(i);
            },
        }
    );
}
class ai extends we {
    constructor(e) {
        super(), _e(this, e, null, li, ye, {});
    }
}

function ci(o) {
    let e, n, t, r, i, s, l, c, a, m, h;
    return {
        c() {
            (e = L("ul")),
            (n = L("li")),
            (t = L("div")),
            (r = L("span")),
            (r.textContent = "CSV"),
            (i = F()),
            (s = L("a")),
            (l = Xe("svg")),
            (c = Xe("path")),
            (a = Xe("path")),
            (m = pe(`
          Download`)),
            p(r, "class", "mr-3 flex-1 w-0 truncate"),
                p(
                    c,
                    "d",
                    "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                ),
                p(
                    a,
                    "d",
                    "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                ),
                p(l, "class", "flex-shrink-0 w-3 h-3"),
                p(l, "width", "16"),
                p(l, "height", "16"),
                p(l, "viewBox", "0 0 16 16"),
                p(l, "fill", "currentColor"),
                p(
                    s,
                    "class",
                    "flex items-center gap-x-2 text-gray-500 hover:text-blue-500 whitespace-nowrap"
                ),
                p(s, "href", (h = "/api/v0/download_csv?id=" + o[0])),
                p(t, "class", "w-full flex justify-between truncate"),
                p(
                    n,
                    "class",
                    "flex items-center gap-x-2 p-3 text-sm bg-white border text-gray-800 first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200"
                ),
                p(e, "class", "flex flex-col justify-end text-start -space-y-px");
        },
        m($, k) {
            I($, e, k),
                v(e, n),
                v(n, t),
                v(t, r),
                v(t, i),
                v(t, s),
                v(s, l),
                v(l, c),
                v(l, a),
                v(s, m);
        },
        p($, [k]) {
            k & 1 && h !== (h = "/api/v0/download_csv?id=" + $[0]) && p(s, "href", h);
        },
        i: K,
        o: K,
        d($) {
            $ && B(e);
        },
    };
}

function ui(o, e, n) {
    let {
        id: t
    } = e;
    return (
        (o.$$set = (r) => {
            "id" in r && n(0, (t = r.id));
        }),
        [t]
    );
}
class fi extends we {
    constructor(e) {
        super(), _e(this, e, ui, ci, ye, {
            id: 0
        });
    }
}

function Jn(o, e, n) {
    const t = o.slice();
    return (t[5] = e[n]), t;
}

function Yn(o, e, n) {
    const t = o.slice();
    return (t[8] = e[n]), t;
}

function Kn(o, e, n) {
    const t = o.slice();
    return (t[8] = e[n]), t;
}

function Xn(o) {
    let e, n, t, r;
    return {
        c() {
            (e = L("th")),
            (n = L("div")),
            (t = L("span")),
            (t.textContent = `${o[8]}`),
            (r = F()),
            p(
                    t,
                    "class",
                    "text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                ),
                p(n, "class", "flex items-center gap-x-2"),
                p(e, "scope", "col"),
                p(e, "class", "px-6 py-3 text-left");
        },
        m(i, s) {
            I(i, e, s), v(e, n), v(n, t), v(e, r);
        },
        p: K,
        d(i) {
            i && B(e);
        },
    };
}

function er(o) {
    let e, n, t;
    return {
        c() {
            (e = L("td")),
            (n = L("div")),
            (t = L("span")),
            (t.textContent = `${o[5][o[8]]}`),
            p(t, "class", "text-gray-800 dark:text-gray-200"),
                p(n, "class", "px-6 py-3"),
                p(e, "class", "h-px w-px whitespace-nowrap");
        },
        m(r, i) {
            I(r, e, i), v(e, n), v(n, t);
        },
        p: K,
        d(r) {
            r && B(e);
        },
    };
}

function tr(o) {
    let e,
        n,
        t = Le(o[3]),
        r = [];
    for (let i = 0; i < t.length; i += 1) r[i] = er(Yn(o, t, i));
    return {
        c() {
            e = L("tr");
            for (let i = 0; i < r.length; i += 1) r[i].c();
            n = F();
        },
        m(i, s) {
            I(i, e, s);
            for (let l = 0; l < r.length; l += 1) r[l] && r[l].m(e, null);
            v(e, n);
        },
        p(i, s) {
            if (s & 12) {
                t = Le(i[3]);
                let l;
                for (l = 0; l < t.length; l += 1) {
                    const c = Yn(i, t, l);
                    r[l] ? r[l].p(c, s) : ((r[l] = er(c)), r[l].c(), r[l].m(e, n));
                }
                for (; l < r.length; l += 1) r[l].d(1);
                r.length = t.length;
            }
        },
        d(i) {
            i && B(e), nt(r, i);
        },
    };
}

function nr(o) {
    let e, n;
    return (
        (e = new fi({
            props: {
                id: o[0]
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 1 && (i.id = t[0]), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function di(o) {
    let e,
        n,
        t,
        r,
        i,
        s,
        l,
        c,
        a,
        m,
        h,
        $ = Le(o[3]),
        k = [];
    for (let d = 0; d < $.length; d += 1) k[d] = Xn(Kn(o, $, d));
    let A = Le(o[2]),
        j = [];
    for (let d = 0; d < A.length; d += 1) j[d] = tr(Jn(o, A, d));
    let b = o[1].csv_download && nr(o);
    return {
        c() {
            (e = L("div")),
            (n = L("div")),
            (t = L("div")),
            (r = L("table")),
            (i = L("thead")),
            (s = L("tr"));
            for (let d = 0; d < k.length; d += 1) k[d].c();
            (l = F()), (c = L("tbody"));
            for (let d = 0; d < j.length; d += 1) j[d].c();
            (a = F()),
            b && b.c(),
                (m = Ve()),
                p(i, "class", "bg-gray-50 dark:bg-slate-800"),
                p(c, "class", "divide-y divide-gray-200 dark:divide-gray-700"),
                p(
                    r,
                    "class",
                    "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                ),
                p(t, "class", "p-1.5 min-w-full inline-block align-middle"),
                p(n, "class", "-m-1.5 overflow-x-auto"),
                p(
                    e,
                    "class",
                    "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
                );
        },
        m(d, g) {
            I(d, e, g), v(e, n), v(n, t), v(t, r), v(r, i), v(i, s);
            for (let w = 0; w < k.length; w += 1) k[w] && k[w].m(s, null);
            v(r, l), v(r, c);
            for (let w = 0; w < j.length; w += 1) j[w] && j[w].m(c, null);
            I(d, a, g), b && b.m(d, g), I(d, m, g), (h = !0);
        },
        p(d, [g]) {
            if (g & 8) {
                $ = Le(d[3]);
                let w;
                for (w = 0; w < $.length; w += 1) {
                    const D = Kn(d, $, w);
                    k[w] ? k[w].p(D, g) : ((k[w] = Xn(D)), k[w].c(), k[w].m(s, null));
                }
                for (; w < k.length; w += 1) k[w].d(1);
                k.length = $.length;
            }
            if (g & 12) {
                A = Le(d[2]);
                let w;
                for (w = 0; w < A.length; w += 1) {
                    const D = Jn(d, A, w);
                    j[w] ? j[w].p(D, g) : ((j[w] = tr(D)), j[w].c(), j[w].m(c, null));
                }
                for (; w < j.length; w += 1) j[w].d(1);
                j.length = A.length;
            }
            d[1].csv_download ?
                b ?
                (b.p(d, g), g & 2 && E(b, 1)) :
                ((b = nr(d)), b.c(), E(b, 1), b.m(m.parentNode, m)) :
                b &&
                (Oe(),
                    q(b, 1, 1, () => {
                        b = null;
                    }),
                    Ce());
        },
        i(d) {
            h || (E(b), (h = !0));
        },
        o(d) {
            q(b), (h = !1);
        },
        d(d) {
            d && (B(e), B(a), B(m)), nt(k, d), nt(j, d), b && b.d(d);
        },
    };
}

function pi(o, e, n) {
    let t;
    et(o, Ot, (c) => n(1, (t = c)));
    let {
        id: r
    } = e, {
        df: i
    } = e,
    s = JSON.parse(i),
        l = s.length > 0 ? Object.keys(s[0]) : [];
    return (
        (o.$$set = (c) => {
            "id" in c && n(0, (r = c.id)), "df" in c && n(4, (i = c.df));
        }),
        [r, t, s, l, i]
    );
}
class Vr extends we {
    constructor(e) {
        super(), _e(this, e, pi, di, ye, {
            id: 0,
            df: 4
        });
    }
}

function mi(o) {
    let e;
    return {
        c() {
            (e = L("div")), p(e, "id", o[0]);
        },
        m(n, t) {
            I(n, e, t);
        },
        p: K,
        i: K,
        o: K,
        d(n) {
            n && B(e);
        },
    };
}

function gi(o, e, n) {
    let {
        fig: t
    } = e,
    r = JSON.parse(t),
        i =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    return (
        Rr(() => {
            Plotly.newPlot(document.getElementById(i), r, {
                responsive: !0
            });
        }),
        (o.$$set = (s) => {
            "fig" in s && n(1, (t = s.fig));
        }),
        [i, t]
    );
}
class Gr extends we {
    constructor(e) {
        super(), _e(this, e, gi, mi, ye, {
            fig: 1
        });
    }
}

function hi(o) {
    let e, n, t, r;
    return {
        c() {
            (e = L("button")),
            (n = pe(o[0])),
            p(e, "type", "button"),
                p(
                    e,
                    "class",
                    "mb-2.5 mr-1.5 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-green-200 font-semibold text-green-500 hover:text-white hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                );
        },
        m(i, s) {
            I(i, e, s), v(e, n), t || ((r = Te(e, "click", o[1])), (t = !0));
        },
        p(i, [s]) {
            s & 1 && De(n, i[0]);
        },
        i: K,
        o: K,
        d(i) {
            i && B(e), (t = !1), r();
        },
    };
}

function yi(o, e, n) {
    let {
        message: t
    } = e, {
        onSubmit: r
    } = e;

    function i() {
        r(t);
    }
    return (
        (o.$$set = (s) => {
            "message" in s && n(0, (t = s.message)),
                "onSubmit" in s && n(2, (r = s.onSubmit));
        }),
        [t, i, r]
    );
}
class Zr extends we {
    constructor(e) {
        super(), _e(this, e, yi, hi, ye, {
            message: 0,
            onSubmit: 2
        });
    }
}

function bi(o) {
    let e, n, t, r, i, s, l, c, a;
    return {
        c() {
            (e = L("div")),
            (n = L("div")),
            (t = L("div")),
            (t.innerHTML =
                '<svg class="h-4 w-4 text-yellow-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg>'),
            (r = F()),
            (i = L("div")),
            (s = L("h3")),
            (s.textContent = "Error"),
            (l = F()),
            (c = L("div")),
            (a = pe(o[0])),
            p(t, "class", "flex-shrink-0"),
                p(s, "class", "text-sm text-yellow-800 font-semibold"),
                p(c, "class", "mt-1 text-sm text-yellow-700"),
                p(i, "class", "ml-4"),
                p(n, "class", "flex"),
                p(e, "class", "bg-yellow-50 border border-yellow-200 rounded-md p-4"),
                p(e, "role", "alert");
        },
        m(m, h) {
            I(m, e, h),
                v(e, n),
                v(n, t),
                v(n, r),
                v(n, i),
                v(i, s),
                v(i, l),
                v(i, c),
                v(c, a);
        },
        p(m, [h]) {
            h & 1 && De(a, m[0]);
        },
        i: K,
        o: K,
        d(m) {
            m && B(e);
        },
    };
}

function vi(o, e, n) {
    let {
        message: t
    } = e;
    return (
        (o.$$set = (r) => {
            "message" in r && n(0, (t = r.message));
        }),
        [t]
    );
}
let En = class extends we {
    constructor(e) {
        super(), _e(this, e, vi, bi, ye, {
            message: 0
        });
    }
};

function _i(o) {
    let e, n;
    const t = o[1].default,
        r = on(t, o, o[0], null);
    return {
        c() {
            (e = L("div")),
            r && r.c(),
                p(e, "class", "font-mono whitespace-pre-wrap");
        },
        m(i, s) {
            I(i, e, s), r && r.m(e, null), (n = !0);
        },
        p(i, [s]) {
            r &&
                r.p &&
                (!n || s & 1) &&
                ln(r, t, i, i[0], n ? sn(t, i[0], s, null) : an(i[0]), null);
        },
        i(i) {
            n || (E(r, i), (n = !0));
        },
        o(i) {
            q(r, i), (n = !1);
        },
        d(i) {
            i && B(e), r && r.d(i);
        },
    };
}

function wi(o, e, n) {
    let {
        $$slots: t = {},
        $$scope: r
    } = e;
    return (
        (o.$$set = (i) => {
            "$$scope" in i && n(0, (r = i.$$scope));
        }),
        [r, t]
    );
}
class Ur extends we {
    constructor(e) {
        super(), _e(this, e, wi, _i, ye, {});
    }
}

function $i(o) {
    let e;
    return {
        c() {
            e = pe(o[1]);
        },
        m(n, t) {
            I(n, e, t);
        },
        p(n, t) {
            t & 2 && De(e, n[1]);
        },
        d(n) {
            n && B(e);
        },
    };
}

function ki(o) {
    let e, n, t, r, i, s, l, c;
    return (
        (t = new ut({
            props: {
                message: "Run SQL",
                onSubmit: o[3]
            }
        })),
        (i = new at({
            props: {
                $$slots: {
                    default: [$i]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                (e = L("textarea")),
                (n = F()),
                Q(t.$$.fragment),
                    (r = F()),
                    Q(i.$$.fragment),
                    p(e, "rows", "6"),
                    p(
                        e,
                        "class",
                        "block p-2.5 w-full text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 font-mono"
                    ),
                    p(e, "placeholder", "SELECT col1, col2, col3 FROM ...");
            },
            m(a, m) {
                I(a, e, m),
                    mt(e, o[1]),
                    I(a, n, m),
                    G(t, a, m),
                    I(a, r, m),
                    G(i, a, m),
                    (s = !0),
                    l || ((c = Te(e, "input", o[2])), (l = !0));
            },
            p(a, [m]) {
                m & 2 && mt(e, a[1]);
                const h = {};
                m & 3 && (h.onSubmit = a[3]), t.$set(h);
                const $ = {};
                m & 18 && ($.$$scope = {
                    dirty: m,
                    ctx: a
                }), i.$set($);
            },
            i(a) {
                s || (E(t.$$.fragment, a), E(i.$$.fragment, a), (s = !0));
            },
            o(a) {
                q(t.$$.fragment, a), q(i.$$.fragment, a), (s = !1);
            },
            d(a) {
                a && (B(e), B(n), B(r)), Z(t, a), Z(i, a), (l = !1), c();
            },
        }
    );
}

function xi(o, e, n) {
    let t;
    et(o, Wt, (l) => n(1, (t = l)));
    let {
        onSubmit: r
    } = e;

    function i() {
        (t = this.value), Wt.set(t);
    }
    const s = () => r(t);
    return (
        (o.$$set = (l) => {
            "onSubmit" in l && n(0, (r = l.onSubmit));
        }),
        [r, t, i, s]
    );
}
class Si extends we {
    constructor(e) {
        super(), _e(this, e, xi, ki, ye, {
            onSubmit: 0
        });
    }
}

function Oi(o) {
    let e, n, t, r, i, s;
    return (
        (t = new ut({
            props: {
                message: o[3],
                onSubmit: o[5]
            }
        })), {
            c() {
                (e = L("textarea")),
                (n = F()),
                Q(t.$$.fragment),
                    p(e, "rows", "6"),
                    p(
                        e,
                        "class",
                        "block p-2.5 w-full text-blue-600 hover:text-blue-500 dark:text-blue-500 dark:hover:text-blue-400 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 font-mono"
                    ),
                    p(e, "placeholder", o[2]);
            },
            m(l, c) {
                I(l, e, c),
                    mt(e, o[0]),
                    I(l, n, c),
                    G(t, l, c),
                    (r = !0),
                    i || ((s = Te(e, "input", o[4])), (i = !0));
            },
            p(l, [c]) {
                (!r || c & 4) && p(e, "placeholder", l[2]), c & 1 && mt(e, l[0]);
                const a = {};
                c & 8 && (a.message = l[3]), c & 3 && (a.onSubmit = l[5]), t.$set(a);
            },
            i(l) {
                r || (E(t.$$.fragment, l), (r = !0));
            },
            o(l) {
                q(t.$$.fragment, l), (r = !1);
            },
            d(l) {
                l && (B(e), B(n)), Z(t, l), (i = !1), s();
            },
        }
    );
}

function Ci(o, e, n) {
    let {
        onSubmit: t
    } = e, {
        currentValue: r
    } = e, {
        placeholder: i
    } = e, {
        buttonText: s
    } = e;

    function l() {
        (r = this.value), n(0, r);
    }
    const c = () => t(r);
    return (
        (o.$$set = (a) => {
            "onSubmit" in a && n(1, (t = a.onSubmit)),
                "currentValue" in a && n(0, (r = a.currentValue)),
                "placeholder" in a && n(2, (i = a.placeholder)),
                "buttonText" in a && n(3, (s = a.buttonText));
        }),
        [r, t, i, s, l, c]
    );
}
class Li extends we {
    constructor(e) {
        super(),
            _e(this, e, Ci, Oi, ye, {
                onSubmit: 1,
                currentValue: 0,
                placeholder: 2,
                buttonText: 3,
            });
    }
}

function Ei(o) {
    let e, n;
    return (
        (e = new ut({
            props: {
                message: "Play",
                onSubmit: o[2]
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, [r]) {
                const i = {};
                r & 1 && (i.onSubmit = t[2]), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function rr(o) {
    if ("speechSynthesis" in window) {
        const e = new SpeechSynthesisUtterance(o);
        (e.lang = "en-US"),
        (e.volume = 1),
        (e.rate = 1),
        (e.pitch = 1),
        window.speechSynthesis.speak(e);
    } else console.error("SpeechSynthesis API is not supported in this browser.");
}

function Ti(o, e, n) {
    let t;
    et(o, Br, (s) => n(1, (t = s)));
    let {
        message: r
    } = e;
    const i = () => rr(r);
    return (
        (o.$$set = (s) => {
            "message" in s && n(0, (r = s.message));
        }),
        (o.$$.update = () => {
            o.$$.dirty & 3 && t && rr(r);
        }),
        [r, t, i]
    );
}
class ji extends we {
    constructor(e) {
        super(), _e(this, e, Ti, Ei, ye, {
            message: 0
        });
    }
}

function or(o, e, n) {
    const t = o.slice();
    return (t[11] = e[n]), t;
}

function ir(o, e, n) {
    const t = o.slice();
    return (t[14] = e[n]), t;
}

function sr(o, e, n) {
    const t = o.slice();
    return (t[17] = e[n]), t;
}

function lr(o, e, n) {
    const t = o.slice();
    return (t[17] = e[n]), t;
}

function ar(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [qi]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194305 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function cr(o) {
    let e, n;
    return (
        (e = new ut({
            props: {
                message: o[17],
                onSubmit: Ln
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 1 && (i.message = t[17]), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Pi(o) {
    let e = o[0].header + "",
        n,
        t,
        r,
        i,
        s = Le(o[0].questions),
        l = [];
    for (let a = 0; a < s.length; a += 1) l[a] = cr(lr(o, s, a));
    const c = (a) =>
        q(l[a], 1, 1, () => {
            l[a] = null;
        });
    return {
        c() {
            (n = pe(e)), (t = F());
            for (let a = 0; a < l.length; a += 1) l[a].c();
            r = Ve();
        },
        m(a, m) {
            I(a, n, m), I(a, t, m);
            for (let h = 0; h < l.length; h += 1) l[h] && l[h].m(a, m);
            I(a, r, m), (i = !0);
        },
        p(a, m) {
            if (((!i || m & 1) && e !== (e = a[0].header + "") && De(n, e), m & 1)) {
                s = Le(a[0].questions);
                let h;
                for (h = 0; h < s.length; h += 1) {
                    const $ = lr(a, s, h);
                    l[h] ?
                        (l[h].p($, m), E(l[h], 1)) :
                        ((l[h] = cr($)), l[h].c(), E(l[h], 1), l[h].m(r.parentNode, r));
                }
                for (Oe(), h = s.length; h < l.length; h += 1) c(h);
                Ce();
            }
        },
        i(a) {
            if (!i) {
                for (let m = 0; m < s.length; m += 1) E(l[m]);
                i = !0;
            }
        },
        o(a) {
            l = l.filter(Boolean);
            for (let m = 0; m < l.length; m += 1) q(l[m]);
            i = !1;
        },
        d(a) {
            a && (B(n), B(t), B(r)), nt(l, a);
        },
    };
}

function qi(o) {
    let e, n;
    return (
        (e = new at({
            props: {
                $$slots: {
                    default: [Pi]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194305 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Ai(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [Yi]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Mi(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [Xi]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Di(o) {
    let e, n;
    return (
        (e = new Ct({
            props: {
                message: "Put your SQL here",
                $$slots: {
                    default: [es]
                },
                $$scope: {
                    ctx: o
                },
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194304 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Ri(o) {
    let e, n, t, r, i, s, l, c, a, m;
    (e = new Ct({
        props: {
            message: o[14].question
        }
    })),
    (t = new Fe({
        props: {
            $$slots: {
                default: [rs]
            },
            $$scope: {
                ctx: o
            }
        },
    })),
    (i = new Fe({
        props: {
            $$slots: {
                default: [os]
            },
            $$scope: {
                ctx: o
            }
        },
    })),
    (l = new Fe({
        props: {
            $$slots: {
                default: [is]
            },
            $$scope: {
                ctx: o
            }
        },
    }));
    let h = o[14].summary && ur(o);
    return {
        c() {
            Q(e.$$.fragment),
                (n = F()),
                Q(t.$$.fragment),
                (r = F()),
                Q(i.$$.fragment),
                (s = F()),
                Q(l.$$.fragment),
                (c = F()),
                h && h.c(),
                (a = Ve());
        },
        m($, k) {
            G(e, $, k),
                I($, n, k),
                G(t, $, k),
                I($, r, k),
                G(i, $, k),
                I($, s, k),
                G(l, $, k),
                I($, c, k),
                h && h.m($, k),
                I($, a, k),
                (m = !0);
        },
        p($, k) {
            const A = {};
            k & 4 && (A.message = $[14].question), e.$set(A);
            const j = {};
            k & 4194308 && (j.$$scope = {
                dirty: k,
                ctx: $
            }), t.$set(j);
            const b = {};
            k & 4194308 && (b.$$scope = {
                dirty: k,
                ctx: $
            }), i.$set(b);
            const d = {};
            k & 4194308 && (d.$$scope = {
                    dirty: k,
                    ctx: $
                }),
                l.$set(d),
                $[14].summary ?
                h ?
                (h.p($, k), k & 4 && E(h, 1)) :
                ((h = ur($)), h.c(), E(h, 1), h.m(a.parentNode, a)) :
                h &&
                (Oe(),
                    q(h, 1, 1, () => {
                        h = null;
                    }),
                    Ce());
        },
        i($) {
            m ||
                (E(e.$$.fragment, $),
                    E(t.$$.fragment, $),
                    E(i.$$.fragment, $),
                    E(l.$$.fragment, $),
                    E(h),
                    (m = !0));
        },
        o($) {
            q(e.$$.fragment, $),
                q(t.$$.fragment, $),
                q(i.$$.fragment, $),
                q(l.$$.fragment, $),
                q(h),
                (m = !1);
        },
        d($) {
            $ && (B(n), B(r), B(s), B(c), B(a)),
                Z(e, $),
                Z(t, $),
                Z(i, $),
                Z(l, $),
                h && h.d($);
        },
    };
}

function Hi(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [as]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194316 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Bi(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [cs]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Ii(o) {
    let e, n;
    return (
        (e = new Ct({
            props: {
                message: "No, the results were not correct."
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p: K,
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Ni(o) {
    let e, n;
    return (
        (e = new Ct({
            props: {
                message: "Yes, the results were correct."
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p: K,
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function zi(o) {
    let e,
        n,
        t = o[3].ask_results_correct && dr(o);
    return {
        c() {
            t && t.c(), (e = Ve());
        },
        m(r, i) {
            t && t.m(r, i), I(r, e, i), (n = !0);
        },
        p(r, i) {
            r[3].ask_results_correct ?
                t ?
                i & 8 && E(t, 1) :
                ((t = dr(r)), t.c(), E(t, 1), t.m(e.parentNode, e)) :
                t &&
                (Oe(),
                    q(t, 1, 1, () => {
                        t = null;
                    }),
                    Ce());
        },
        i(r) {
            n || (E(t), (n = !0));
        },
        o(r) {
            q(t), (n = !1);
        },
        d(r) {
            r && B(e), t && t.d(r);
        },
    };
}

function Vi(o) {
    let e,
        n,
        t = o[3].ask_results_correct && pr(o);
    return {
        c() {
            t && t.c(), (e = Ve());
        },
        m(r, i) {
            t && t.m(r, i), I(r, e, i), (n = !0);
        },
        p(r, i) {
            r[3].ask_results_correct ?
                t ?
                i & 8 && E(t, 1) :
                ((t = pr(r)), t.c(), E(t, 1), t.m(e.parentNode, e)) :
                t &&
                (Oe(),
                    q(t, 1, 1, () => {
                        t = null;
                    }),
                    Ce());
        },
        i(r) {
            n || (E(t), (n = !0));
        },
        o(r) {
            q(t), (n = !1);
        },
        d(r) {
            r && B(e), t && t.d(r);
        },
    };
}

function Gi(o) {
    let e, n;
    return (
        (e = new Ct({
            props: {
                message: "Change the chart based on these instructions",
                $$slots: {
                    default: [ps]
                },
                $$scope: {
                    ctx: o
                },
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194304 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Zi(o) {
    let e,
        n,
        t = o[3].chart && mr(o);
    return {
        c() {
            t && t.c(), (e = Ve());
        },
        m(r, i) {
            t && t.m(r, i), I(r, e, i), (n = !0);
        },
        p(r, i) {
            r[3].chart ?
                t ?
                (t.p(r, i), i & 8 && E(t, 1)) :
                ((t = mr(r)), t.c(), E(t, 1), t.m(e.parentNode, e)) :
                t &&
                (Oe(),
                    q(t, 1, 1, () => {
                        t = null;
                    }),
                    Ce());
        },
        i(r) {
            n || (E(t), (n = !0));
        },
        o(r) {
            q(t), (n = !1);
        },
        d(r) {
            r && B(e), t && t.d(r);
        },
    };
}

function Ui(o) {
    let e,
        n,
        t = o[3].table && hr(o);
    return {
        c() {
            t && t.c(), (e = Ve());
        },
        m(r, i) {
            t && t.m(r, i), I(r, e, i), (n = !0);
        },
        p(r, i) {
            r[3].table ?
                t ?
                (t.p(r, i), i & 8 && E(t, 1)) :
                ((t = hr(r)), t.c(), E(t, 1), t.m(e.parentNode, e)) :
                t &&
                (Oe(),
                    q(t, 1, 1, () => {
                        t = null;
                    }),
                    Ce());
        },
        i(r) {
            n || (E(t), (n = !0));
        },
        o(r) {
            q(t), (n = !1);
        },
        d(r) {
            r && B(e), t && t.d(r);
        },
    };
}

function Qi(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [bs]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Wi(o) {
    let e,
        n,
        t = o[3].sql == !0 && br(o);
    return {
        c() {
            t && t.c(), (e = Ve());
        },
        m(r, i) {
            t && t.m(r, i), I(r, e, i), (n = !0);
        },
        p(r, i) {
            r[3].sql == !0 ?
                t ?
                (t.p(r, i), i & 8 && E(t, 1)) :
                ((t = br(r)), t.c(), E(t, 1), t.m(e.parentNode, e)) :
                t &&
                (Oe(),
                    q(t, 1, 1, () => {
                        t = null;
                    }),
                    Ce());
        },
        i(r) {
            n || (E(t), (n = !0));
        },
        o(r) {
            q(t), (n = !1);
        },
        d(r) {
            r && B(e), t && t.d(r);
        },
    };
}

function Fi(o) {
    let e, n;
    return (
        (e = new Ct({
            props: {
                message: o[14].question
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4 && (i.message = t[14].question), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Ji(o) {
    let e = JSON.stringify(o[14]) + "",
        n;
    return {
        c() {
            n = pe(e);
        },
        m(t, r) {
            I(t, n, r);
        },
        p(t, r) {
            r & 4 && e !== (e = JSON.stringify(t[14]) + "") && De(n, e);
        },
        d(t) {
            t && B(n);
        },
    };
}

function Yi(o) {
    let e, n;
    return (
        (e = new at({
            props: {
                $$slots: {
                    default: [Ji]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Ki(o) {
    let e = o[14].text + "",
        n;
    return {
        c() {
            n = pe(e);
        },
        m(t, r) {
            I(t, n, r);
        },
        p(t, r) {
            r & 4 && e !== (e = t[14].text + "") && De(n, e);
        },
        d(t) {
            t && B(n);
        },
    };
}

function Xi(o) {
    let e, n, t, r;
    return (
        (e = new at({
            props: {
                $$slots: {
                    default: [Ki]
                },
                $$scope: {
                    ctx: o
                }
            },
        })),
        (t = new ji({
            props: {
                message: o[14].text
            }
        })), {
            c() {
                Q(e.$$.fragment), (n = F()), Q(t.$$.fragment);
            },
            m(i, s) {
                G(e, i, s), I(i, n, s), G(t, i, s), (r = !0);
            },
            p(i, s) {
                const l = {};
                s & 4194308 && (l.$$scope = {
                    dirty: s,
                    ctx: i
                }), e.$set(l);
                const c = {};
                s & 4 && (c.message = i[14].text), t.$set(c);
            },
            i(i) {
                r || (E(e.$$.fragment, i), E(t.$$.fragment, i), (r = !0));
            },
            o(i) {
                q(e.$$.fragment, i), q(t.$$.fragment, i), (r = !1);
            },
            d(i) {
                i && B(n), Z(e, i), Z(t, i);
            },
        }
    );
}

function es(o) {
    let e, n;
    return (
        (e = new Si({
            props: {
                onSubmit: Oo
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p: K,
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function ts(o) {
    let e = o[14].sql + "",
        n;
    return {
        c() {
            n = pe(e);
        },
        m(t, r) {
            I(t, n, r);
        },
        p(t, r) {
            r & 4 && e !== (e = t[14].sql + "") && De(n, e);
        },
        d(t) {
            t && B(n);
        },
    };
}

function ns(o) {
    let e, n;
    return (
        (e = new Ur({
            props: {
                $$slots: {
                    default: [ts]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function rs(o) {
    let e, n;
    return (
        (e = new at({
            props: {
                $$slots: {
                    default: [ns]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function os(o) {
    let e, n;
    return (
        (e = new Vr({
            props: {
                id: o[14].id,
                df: o[14].df
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4 && (i.id = t[14].id), r & 4 && (i.df = t[14].df), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function is(o) {
    let e, n;
    return (
        (e = new Gr({
            props: {
                fig: o[14].fig
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4 && (i.fig = t[14].fig), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function ur(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [ls]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function ss(o) {
    let e = o[14].summary + "",
        n;
    return {
        c() {
            n = pe(e);
        },
        m(t, r) {
            I(t, n, r);
        },
        p(t, r) {
            r & 4 && e !== (e = t[14].summary + "") && De(n, e);
        },
        d(t) {
            t && B(n);
        },
    };
}

function ls(o) {
    let e, n;
    return (
        (e = new at({
            props: {
                $$slots: {
                    default: [ss]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function fr(o) {
    let e, n;

    function t() {
        return o[9](o[14]);
    }
    return (
        (e = new ut({
            props: {
                message: "Auto Fix",
                onSubmit: t
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(r, i) {
                G(e, r, i), (n = !0);
            },
            p(r, i) {
                o = r;
                const s = {};
                i & 4 && (s.onSubmit = t), e.$set(s);
            },
            i(r) {
                n || (E(e.$$.fragment, r), (n = !0));
            },
            o(r) {
                q(e.$$.fragment, r), (n = !1);
            },
            d(r) {
                Z(e, r);
            },
        }
    );
}

function as(o) {
    let e, n, t, r, i, s;
    (e = new En({
        props: {
            message: o[14].error
        }
    })),
    (t = new ut({
        props: {
            message: "Manually Fix",
            onSubmit: o[8]
        }
    }));
    let l = o[3].auto_fix_sql && fr(o);
    return {
        c() {
            Q(e.$$.fragment),
                (n = F()),
                Q(t.$$.fragment),
                (r = F()),
                l && l.c(),
                (i = Ve());
        },
        m(c, a) {
            G(e, c, a),
                I(c, n, a),
                G(t, c, a),
                I(c, r, a),
                l && l.m(c, a),
                I(c, i, a),
                (s = !0);
        },
        p(c, a) {
            const m = {};
            a & 4 && (m.message = c[14].error),
                e.$set(m),
                c[3].auto_fix_sql ?
                l ?
                (l.p(c, a), a & 8 && E(l, 1)) :
                ((l = fr(c)), l.c(), E(l, 1), l.m(i.parentNode, i)) :
                l &&
                (Oe(),
                    q(l, 1, 1, () => {
                        l = null;
                    }),
                    Ce());
        },
        i(c) {
            s || (E(e.$$.fragment, c), E(t.$$.fragment, c), E(l), (s = !0));
        },
        o(c) {
            q(e.$$.fragment, c), q(t.$$.fragment, c), q(l), (s = !1);
        },
        d(c) {
            c && (B(n), B(r), B(i)), Z(e, c), Z(t, c), l && l.d(c);
        },
    };
}

function cs(o) {
    let e, n;
    return (
        (e = new En({
            props: {
                message: o[14].error
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4 && (i.message = t[14].error), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function dr(o) {
    let e, n;
    return (
        (e = new Ct({
            props: {
                message: "",
                $$slots: {
                    default: [us]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function us(o) {
    let e, n, t, r;
    return (
        (e = new ut({
            props: {
                message: "Yes",
                onSubmit: o[6]
            }
        })),
        (t = new ut({
            props: {
                message: "No",
                onSubmit: o[7]
            }
        })), {
            c() {
                Q(e.$$.fragment), (n = F()), Q(t.$$.fragment);
            },
            m(i, s) {
                G(e, i, s), I(i, n, s), G(t, i, s), (r = !0);
            },
            p: K,
            i(i) {
                r || (E(e.$$.fragment, i), E(t.$$.fragment, i), (r = !0));
            },
            o(i) {
                q(e.$$.fragment, i), q(t.$$.fragment, i), (r = !1);
            },
            d(i) {
                i && B(n), Z(e, i), Z(t, i);
            },
        }
    );
}

function pr(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [ds]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function fs(o) {
    let e;
    return {
        c() {
            e = pe("Were the results correct?");
        },
        m(n, t) {
            I(n, e, t);
        },
        d(n) {
            n && B(e);
        },
    };
}

function ds(o) {
    let e, n;
    return (
        (e = new at({
            props: {
                $$slots: {
                    default: [fs]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194304 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function ps(o) {
    let e, n;
    return (
        (e = new Li({
            props: {
                onSubmit: o[5],
                placeholder: "Make the line red",
                buttonText: "Update Chart",
                currentValue: "",
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p: K,
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function mr(o) {
    let e, n, t, r;
    e = new Fe({
        props: {
            $$slots: {
                default: [ms]
            },
            $$scope: {
                ctx: o
            }
        }
    });
    let i = o[3].redraw_chart && gr(o);
    return {
        c() {
            Q(e.$$.fragment), (n = F()), i && i.c(), (t = Ve());
        },
        m(s, l) {
            G(e, s, l), I(s, n, l), i && i.m(s, l), I(s, t, l), (r = !0);
        },
        p(s, l) {
            const c = {};
            l & 4194308 && (c.$$scope = {
                    dirty: l,
                    ctx: s
                }),
                e.$set(c),
                s[3].redraw_chart ?
                i ?
                l & 8 && E(i, 1) :
                ((i = gr(s)), i.c(), E(i, 1), i.m(t.parentNode, t)) :
                i &&
                (Oe(),
                    q(i, 1, 1, () => {
                        i = null;
                    }),
                    Ce());
        },
        i(s) {
            r || (E(e.$$.fragment, s), E(i), (r = !0));
        },
        o(s) {
            q(e.$$.fragment, s), q(i), (r = !1);
        },
        d(s) {
            s && (B(n), B(t)), Z(e, s), i && i.d(s);
        },
    };
}

function ms(o) {
    let e, n;
    return (
        (e = new Gr({
            props: {
                fig: o[14].fig
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4 && (i.fig = t[14].fig), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function gr(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [gs]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function gs(o) {
    let e, n;
    return (
        (e = new ut({
            props: {
                message: "Redraw Chart",
                onSubmit: Co
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p: K,
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function hr(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [hs]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function hs(o) {
    let e, n;
    return (
        (e = new Vr({
            props: {
                id: o[14].id,
                df: o[14].df
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4 && (i.id = t[14].id), r & 4 && (i.df = t[14].df), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function yr(o) {
    let e, n;
    return (
        (e = new ut({
            props: {
                message: o[17],
                onSubmit: Ln
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4 && (i.message = t[17]), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function ys(o) {
    let e = o[14].header + "",
        n,
        t,
        r,
        i,
        s = Le(o[14].questions),
        l = [];
    for (let a = 0; a < s.length; a += 1) l[a] = yr(sr(o, s, a));
    const c = (a) =>
        q(l[a], 1, 1, () => {
            l[a] = null;
        });
    return {
        c() {
            (n = pe(e)), (t = F());
            for (let a = 0; a < l.length; a += 1) l[a].c();
            r = Ve();
        },
        m(a, m) {
            I(a, n, m), I(a, t, m);
            for (let h = 0; h < l.length; h += 1) l[h] && l[h].m(a, m);
            I(a, r, m), (i = !0);
        },
        p(a, m) {
            if (((!i || m & 4) && e !== (e = a[14].header + "") && De(n, e), m & 4)) {
                s = Le(a[14].questions);
                let h;
                for (h = 0; h < s.length; h += 1) {
                    const $ = sr(a, s, h);
                    l[h] ?
                        (l[h].p($, m), E(l[h], 1)) :
                        ((l[h] = yr($)), l[h].c(), E(l[h], 1), l[h].m(r.parentNode, r));
                }
                for (Oe(), h = s.length; h < l.length; h += 1) c(h);
                Ce();
            }
        },
        i(a) {
            if (!i) {
                for (let m = 0; m < s.length; m += 1) E(l[m]);
                i = !0;
            }
        },
        o(a) {
            l = l.filter(Boolean);
            for (let m = 0; m < l.length; m += 1) q(l[m]);
            i = !1;
        },
        d(a) {
            a && (B(n), B(t), B(r)), nt(l, a);
        },
    };
}

function bs(o) {
    let e, n;
    return (
        (e = new at({
            props: {
                $$slots: {
                    default: [ys]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function br(o) {
    let e, n;
    return (
        (e = new Fe({
            props: {
                $$slots: {
                    default: [ws]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function vs(o) {
    let e = o[14].text + "",
        n;
    return {
        c() {
            n = pe(e);
        },
        m(t, r) {
            I(t, n, r);
        },
        p(t, r) {
            r & 4 && e !== (e = t[14].text + "") && De(n, e);
        },
        d(t) {
            t && B(n);
        },
    };
}

function _s(o) {
    let e, n;
    return (
        (e = new Ur({
            props: {
                $$slots: {
                    default: [vs]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function ws(o) {
    let e, n;
    return (
        (e = new at({
            props: {
                $$slots: {
                    default: [_s]
                },
                $$scope: {
                    ctx: o
                }
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 4194308 && (i.$$scope = {
                    dirty: r,
                    ctx: t
                }), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function vr(o) {
    let e, n, t, r;
    const i = [Fi, Wi, Qi, Ui, Zi, Gi, Vi, zi, Ni, Ii, Bi, Hi, Ri, Di, Mi, Ai],
        s = [];

    function l(c, a) {
        return c[14].type === "user_question" ?
            0 :
            c[14].type === "sql" ?
            1 :
            c[14].type === "question_list" ?
            2 :
            c[14].type === "df" ?
            3 :
            c[14].type === "plotly_figure" ?
            4 :
            c[14].type === "chart_modification" ?
            5 :
            c[14].type === "feedback_question" ?
            6 :
            c[14].type === "feedback_buttons" ?
            7 :
            c[14].type === "feedback_correct" ?
            8 :
            c[14].type === "feedback_incorrect" ?
            9 :
            c[14].type === "error" ?
            10 :
            c[14].type === "sql_error" ?
            11 :
            c[14].type === "question_cache" ?
            12 :
            c[14].type === "user_sql" ?
            13 :
            c[14].type === "text" ?
            14 :
            15;
    }
    return (
        (e = l(o)),
        (n = s[e] = i[e](o)), {
            c() {
                n.c(), (t = Ve());
            },
            m(c, a) {
                s[e].m(c, a), I(c, t, a), (r = !0);
            },
            p(c, a) {
                let m = e;
                (e = l(c)),
                e === m ?
                    s[e].p(c, a) :
                    (Oe(),
                        q(s[m], 1, 1, () => {
                            s[m] = null;
                        }),
                        Ce(),
                        (n = s[e]),
                        n ? n.p(c, a) : ((n = s[e] = i[e](c)), n.c()),
                        E(n, 1),
                        n.m(t.parentNode, t));
            },
            i(c) {
                r || (E(n), (r = !0));
            },
            o(c) {
                q(n), (r = !1);
            },
            d(c) {
                c && B(t), s[e].d(c);
            },
        }
    );
}

function _r(o) {
    let e, n;
    return (
        (e = new ai({})), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function $s(o) {
    let e, n;
    return (
        (e = new Yo({
            props: {
                onSubmit: Ln
            }

        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p: K,
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function ks(o) {
    let e, n, t, r;
    e = new Zr({
        props: {
            message: "New Question",
            onSubmit: dn
        }
    });
    let i = Le(o[2]),
        s = [];
    for (let c = 0; c < i.length; c += 1) s[c] = $r(or(o, i, c));
    const l = (c) =>
        q(s[c], 1, 1, () => {
            s[c] = null;
        });
    return {
        c() {
            Q(e.$$.fragment), (n = F());
            for (let c = 0; c < s.length; c += 1) s[c].c();
            t = Ve();
        },
        m(c, a) {
            G(e, c, a), I(c, n, a);
            for (let m = 0; m < s.length; m += 1) s[m] && s[m].m(c, a);
            I(c, t, a), (r = !0);
        },
        p(c, a) {
            if (a & 4) {
                i = Le(c[2]);
                let m;
                for (m = 0; m < i.length; m += 1) {
                    const h = or(c, i, m);
                    s[m] ?
                        (s[m].p(h, a), E(s[m], 1)) :
                        ((s[m] = $r(h)), s[m].c(), E(s[m], 1), s[m].m(t.parentNode, t));
                }
                for (Oe(), m = i.length; m < s.length; m += 1) l(m);
                Ce();
            }
        },
        i(c) {
            if (!r) {
                E(e.$$.fragment, c);
                for (let a = 0; a < i.length; a += 1) E(s[a]);
                r = !0;
            }
        },
        o(c) {
            q(e.$$.fragment, c), (s = s.filter(Boolean));
            for (let a = 0; a < s.length; a += 1) q(s[a]);
            r = !1;
        },
        d(c) {
            c && (B(n), B(t)), Z(e, c), nt(s, c);
        },
    };
}

function wr(o) {
    let e, n;

    function t() {
        return o[10](o[11]);
    }
    return (
        (e = new Zr({
            props: {
                message: "Re-Run SQL",
                onSubmit: t
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(r, i) {
                G(e, r, i), (n = !0);
            },
            p(r, i) {
                o = r;
                const s = {};
                i & 4 && (s.onSubmit = t), e.$set(s);
            },
            i(r) {
                n || (E(e.$$.fragment, r), (n = !0));
            },
            o(r) {
                q(e.$$.fragment, r), (n = !1);
            },
            d(r) {
                Z(e, r);
            },
        }
    );
}

function $r(o) {
    let e,
        n,
        t = o[11].type === "question_cache" && wr(o);
    return {
        c() {
            t && t.c(), (e = Ve());
        },
        m(r, i) {
            t && t.m(r, i), I(r, e, i), (n = !0);
        },
        p(r, i) {
            r[11].type === "question_cache" ?
                t ?
                (t.p(r, i), i & 4 && E(t, 1)) :
                ((t = wr(r)), t.c(), E(t, 1), t.m(e.parentNode, e)) :
                t &&
                (Oe(),
                    q(t, 1, 1, () => {
                        t = null;
                    }),
                    Ce());
        },
        i(r) {
            n || (E(t), (n = !0));
        },
        o(r) {
            q(t), (n = !1);
        },
        d(r) {
            r && B(e), t && t.d(r);
        },
    };
}

function xs(o) {
    let e, n, t, r, i, s, l, c, a, m, h, $, k, A;
    t = new Ho({});
    let j = o[0] && o[0].type == "question_list" && !o[1] && ar(o),
        b = Le(o[2]),
        d = [];
    for (let u = 0; u < b.length; u += 1) d[u] = vr(ir(o, b, u));
    const g = (u) =>
        q(d[u], 1, 1, () => {
            d[u] = null;
        });
    let w = o[4] && _r();
    m = new Xo({});
    const D = [ks, $s],
        M = [];

    function O(u, f) {
        return u[1] ? 0 : 1;
    }
    return (
        ($ = O(o)),
        (k = M[$] = D[$](o)), {
            c() {
                (e = L("div")),
                (n = L("div")),
                Q(t.$$.fragment),
                    (r = F()),
                    j && j.c(),
                    (i = F()),
                    (s = L("ul"));
                for (let u = 0; u < d.length; u += 1) d[u].c();
                (l = F()),
                w && w.c(),
                    (c = F()),
                    (a = L("footer")),
                    Q(m.$$.fragment),
                    (h = F()),
                    k.c(),
                    p(s, "class", "mt-16 space-y-5"),
                    p(n, "class", "py-10 lg:py-14"),
                    p(a, "class", "max-w-4xl mx-auto sticky bottom-0 z-10 p-3 sm:py-6"),
                    p(e, "class", "relative h-screen w-full lg:pl-64");
            },
            m(u, f) {
                I(u, e, f),
                    v(e, n),
                    G(t, n, null),
                    v(n, r),
                    j && j.m(n, null),
                    v(n, i),
                    v(n, s);
                for (let S = 0; S < d.length; S += 1) d[S] && d[S].m(s, null);
                v(s, l),
                    w && w.m(s, null),
                    v(e, c),
                    v(e, a),
                    G(m, a, null),
                    v(a, h),
                    M[$].m(a, null),
                    (A = !0);
            },
            p(u, [f]) {
                if (
                    (u[0] && u[0].type == "question_list" && !u[1] ?
                        j ?
                        (j.p(u, f), f & 3 && E(j, 1)) :
                        ((j = ar(u)), j.c(), E(j, 1), j.m(n, i)) :
                        j &&
                        (Oe(),
                            q(j, 1, 1, () => {
                                j = null;
                            }),
                            Ce()),
                        f & 12)
                ) {
                    b = Le(u[2]);
                    let T;
                    for (T = 0; T < b.length; T += 1) {
                        const C = ir(u, b, T);
                        d[T] ?
                            (d[T].p(C, f), E(d[T], 1)) :
                            ((d[T] = vr(C)), d[T].c(), E(d[T], 1), d[T].m(s, l));
                    }
                    for (Oe(), T = b.length; T < d.length; T += 1) g(T);
                    Ce();
                }
                u[4] ?
                    w ?
                    f & 16 && E(w, 1) :
                    ((w = _r()), w.c(), E(w, 1), w.m(s, null)) :
                    w &&
                    (Oe(),
                        q(w, 1, 1, () => {
                            w = null;
                        }),
                        Ce());
                let S = $;
                ($ = O(u)),
                $ === S ?
                    M[$].p(u, f) :
                    (Oe(),
                        q(M[S], 1, 1, () => {
                            M[S] = null;
                        }),
                        Ce(),
                        (k = M[$]),
                        k ? k.p(u, f) : ((k = M[$] = D[$](u)), k.c()),
                        E(k, 1),
                        k.m(a, null));
            },
            i(u) {
                if (!A) {
                    E(t.$$.fragment, u), E(j);
                    for (let f = 0; f < b.length; f += 1) E(d[f]);
                    E(w), E(m.$$.fragment, u), E(k), (A = !0);
                }
            },
            o(u) {
                q(t.$$.fragment, u), q(j), (d = d.filter(Boolean));
                for (let f = 0; f < d.length; f += 1) q(d[f]);
                q(w), q(m.$$.fragment, u), q(k), (A = !1);
            },
            d(u) {
                u && B(e), Z(t), j && j.d(), nt(d, u), w && w.d(), Z(m), M[$].d();
            },
        }
    );
}

function Ss(o, e, n) {
    let t, r, i, s, l;
    return (
        et(o, On, (A) => n(0, (t = A))),
        et(o, un, (A) => n(1, (r = A))),
        et(o, Bt, (A) => n(2, (i = A))),
        et(o, Ot, (A) => n(3, (s = A))),
        et(o, Ut, (A) => n(4, (l = A))),
        [
            t,
            r,
            i,
            s,
            l,
            (A) => {
                Eo(A);
            },
            () => {
                Lo();
            },
            () => {
                Un();
            },
            () => {
                Un();
            },
            (A) => {
                So(A.error);
            },
            (A) => (A.type === "question_cache" ? mo(A.id) : void 0),
        ]
    );
}
class Os extends we {
    constructor(e) {
        super(), _e(this, e, Ss, xs, ye, {});
    }
}

function Cs(o) {
    let e, n, t, r, i, s, l, c, a, m, h, $, k, A, j, b, d, g, w;
    return {
        c() {
            (e = L("div")),
            (n = L("div")),
            (t = L("div")),
            (r = L("div")),
            (i = L("h3")),
            (i.textContent = "Are you sure?"),
            (s = F()),
            (l = L("button")),
            (l.innerHTML =
                '<span class="sr-only">Close</span> <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"></path></svg>'),
            (c = F()),
            (a = L("div")),
            (m = L("p")),
            (h = pe(o[0])),
            ($ = F()),
            (k = L("div")),
            (A = L("button")),
            (A.textContent = "Close"),
            (j = F()),
            (b = L("button")),
            (d = pe(o[1])),
            p(i, "class", "font-bold text-gray-800 dark:text-white"),
                p(l, "type", "button"),
                p(
                    l,
                    "class",
                    "hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                ),
                p(l, "data-hs-overlay", "#hs-vertically-centered-modal"),
                p(
                    r,
                    "class",
                    "flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
                ),
                p(m, "class", "text-gray-800 dark:text-gray-400"),
                p(a, "class", "p-4 overflow-y-auto"),
                p(A, "type", "button"),
                p(
                    A,
                    "class",
                    "hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                ),
                p(A, "data-hs-overlay", "#hs-vertically-centered-modal"),
                p(
                    b,
                    "class",
                    "py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                ),
                p(
                    k,
                    "class",
                    "flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700"
                ),
                p(
                    t,
                    "class",
                    "flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
                ),
                p(
                    n,
                    "class",
                    "hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
                ),
                p(
                    e,
                    "class",
                    "hs-overlay open w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
                );
        },
        m(D, M) {
            I(D, e, M),
                v(e, n),
                v(n, t),
                v(t, r),
                v(r, i),
                v(r, s),
                v(r, l),
                v(t, c),
                v(t, a),
                v(a, m),
                v(m, h),
                v(t, $),
                v(t, k),
                v(k, A),
                v(k, j),
                v(k, b),
                v(b, d),
                g ||
                ((w = [
                        Te(l, "click", function() {
                            Dt(o[2]) && o[2].apply(this, arguments);
                        }),
                        Te(A, "click", function() {
                            Dt(o[2]) && o[2].apply(this, arguments);
                        }),
                        Te(b, "click", function() {
                            Dt(o[3]) && o[3].apply(this, arguments);
                        }),
                    ]),
                    (g = !0));
        },
        p(D, [M]) {
            (o = D), M & 1 && De(h, o[0]), M & 2 && De(d, o[1]);
        },
        i: K,
        o: K,
        d(D) {
            D && B(e), (g = !1), gt(w);
        },
    };
}

function Ls(o, e, n) {
    let {
        message: t
    } = e, {
        buttonLabel: r
    } = e, {
        onClose: i
    } = e, {
        onConfirm: s
    } = e;
    return (
        (o.$$set = (l) => {
            "message" in l && n(0, (t = l.message)),
                "buttonLabel" in l && n(1, (r = l.buttonLabel)),
                "onClose" in l && n(2, (i = l.onClose)),
                "onConfirm" in l && n(3, (s = l.onConfirm));
        }),
        [t, r, i, s]
    );
}
class Es extends we {
    constructor(e) {
        super(),
            _e(this, e, Ls, Cs, ye, {
                message: 0,
                buttonLabel: 1,
                onClose: 2,
                onConfirm: 3,
            });
    }
}

function kr(o, e, n) {
    const t = o.slice();
    return (
        (t[10] = e[n].name), (t[11] = e[n].description), (t[12] = e[n].example), t
    );
}

function xr(o) {
    let e, n, t, r, i, s, l, c, a, m, h, $;
    return (
        (m = to(o[7][0])), {
            c() {
                (e = L("div")),
                (n = L("div")),
                (t = L("input")),
                (r = F()),
                (i = L("label")),
                (s = L("span")),
                (s.textContent = `${o[10]}`),
                (l = F()),
                (c = L("span")),
                (c.textContent = `${o[11]}`),
                (a = F()),
                p(t, "id", "hs-radio-" + o[10]),
                    (t.__value = o[10]),
                    mt(t, t.__value),
                    p(t, "name", "hs-radio-with-description"),
                    p(t, "type", "radio"),
                    p(
                        t,
                        "class",
                        "border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    ),
                    p(t, "aria-describedby", "hs-radio-delete-description"),
                    p(n, "class", "flex items-center h-5 mt-1"),
                    p(
                        s,
                        "class",
                        "block text-sm font-semibold text-gray-800 dark:text-gray-300"
                    ),
                    p(c, "id", "hs-radio-ddl-description"),
                    p(c, "class", "block text-sm text-gray-600 dark:text-gray-500"),
                    p(i, "for", "hs-radio-" + o[10]),
                    p(i, "class", "ml-3"),
                    p(e, "class", "relative flex items-start"),
                    m.p(t);
            },
            m(k, A) {
                I(k, e, A),
                    v(e, n),
                    v(n, t),
                    (t.checked = t.__value === o[0]),
                    v(e, r),
                    v(e, i),
                    v(i, s),
                    v(i, l),
                    v(i, c),
                    v(e, a),
                    h || (($ = Te(t, "change", o[6])), (h = !0));
            },
            p(k, A) {
                A & 1 && (t.checked = t.__value === k[0]);
            },
            d(k) {
                k && B(e), m.r(), (h = !1), $();
            },
        }
    );
}

function Ts(o) {
    let e,
        n,
        t,
        r,
        i,
        s,
        l,
        c,
        a,
        m,
        h,
        $,
        k,
        A,
        j,
        b,
        d,
        g,
        w,
        D,
        M,
        O,
        u,
        f,
        S,
        T = Le(o[3]),
        C = [];
    for (let P = 0; P < T.length; P += 1) C[P] = xr(kr(o, T, P));
    return {
        c() {
            var P;
            (e = L("div")),
            (n = L("div")),
            (t = L("div")),
            (r = L("div")),
            (i = L("h2")),
            (i.textContent = "Add Training Data"),
            (s = F()),
            (l = L("button")),
            (l.innerHTML =
                '<span class="sr-only">Close</span> <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"></path></svg>'),
            (c = F()),
            (a = L("span")),
            (a.textContent = "Training Data Type"),
            (m = F()),
            (h = L("div"));
            for (let H = 0; H < C.length; H += 1) C[H].c();
            ($ = F()),
            (k = L("div")),
            (A = L("label")),
            (j = pe("Your ")),
            (b = pe(o[0])),
            (d = F()),
            (g = L("div")),
            (w = L("textarea")),
            (M = F()),
            (O = L("div")),
            (u = L("button")),
            (u.textContent = "Save"),
            p(
                    i,
                    "class",
                    "text-xl text-gray-800 font-bold sm:text-3xl dark:text-white"
                ),
                p(l, "type", "button"),
                p(
                    l,
                    "class",
                    "hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                ),
                p(l, "data-hs-overlay", "#hs-vertically-centered-modal"),
                p(
                    r,
                    "class",
                    "flex justify-between items-center py-3 px-4 border-b dark:border-gray-700 mb-2"
                ),
                p(a, "class", "block mb-2 text-sm font-medium dark:text-white"),
                p(h, "class", "grid space-y-3 mb-1"),
                p(A, "for", "hs-feedback-post-comment-textarea-1"),
                p(A, "class", "block mt-2 mb-2 text-sm font-medium dark:text-white"),
                p(w, "id", "hs-feedback-post-comment-textarea-1"),
                p(w, "name", "hs-feedback-post-comment-textarea-1"),
                p(w, "rows", "3"),
                p(
                    w,
                    "class",
                    "py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                ),
                p(
                    w,
                    "placeholder",
                    (D =
                        ((P = o[3].find(o[8])) == null ? void 0 : P.example) ??
                        "No example available")
                ),
                p(g, "class", "mt-1"),
                p(k, "class", "mt-2 border-t dark:border-gray-700"),
                p(
                    u,
                    "class",
                    "py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800"
                ),
                p(O, "class", "mt-6 grid"),
                p(
                    t,
                    "class",
                    "mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-gray-800 dark:border-gray-700"
                ),
                p(n, "class", "mx-auto max-w-2xl"),
                p(
                    e,
                    "class",
                    "max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
                );
        },
        m(P, H) {
            I(P, e, H),
                v(e, n),
                v(n, t),
                v(t, r),
                v(r, i),
                v(r, s),
                v(r, l),
                v(t, c),
                v(t, a),
                v(t, m),
                v(t, h);
            for (let N = 0; N < C.length; N += 1) C[N] && C[N].m(h, null);
            v(t, $),
                v(t, k),
                v(k, A),
                v(A, j),
                v(A, b),
                v(k, d),
                v(k, g),
                v(g, w),
                mt(w, o[2]),
                v(t, M),
                v(t, O),
                v(O, u),
                f ||
                ((S = [
                        Te(l, "click", function() {
                            Dt(o[1]) && o[1].apply(this, arguments);
                        }),
                        Te(w, "input", o[9]),
                        Te(u, "click", o[4]),
                    ]),
                    (f = !0));
        },
        p(P, [H]) {
            var N;
            if (((o = P), H & 9)) {
                T = Le(o[3]);
                let W;
                for (W = 0; W < T.length; W += 1) {
                    const J = kr(o, T, W);
                    C[W] ? C[W].p(J, H) : ((C[W] = xr(J)), C[W].c(), C[W].m(h, null));
                }
                for (; W < C.length; W += 1) C[W].d(1);
                C.length = T.length;
            }
            H & 1 && De(b, o[0]),
                H & 1 &&
                D !==
                (D =
                    ((N = o[3].find(o[8])) == null ? void 0 : N.example) ??
                    "No example available") &&
                p(w, "placeholder", D),
                H & 4 && mt(w, o[2]);
        },
        i: K,
        o: K,
        d(P) {
            P && B(e), nt(C, P), (f = !1), gt(S);
        },
    };
}

function js(o, e, n) {
    let {
        onDismiss: t
    } = e, {
        onTrain: r
    } = e, {
        selectedTrainingDataType: i = "SQL"
    } = e,
    s = [{
                name: "DDL",
                description: "These are the CREATE TABLE statements that define your database structure.",
                example: "CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype);",
            },
            {
                name: "Documentation",
                description: "This can be any text-based documentation. Keep the chunks small and focused on a single topic.",
                example: "Our definition of ABC is XYZ.",
            },
            {
                name: "SQL",
                description: "This can be any SQL statement that works. The more the merrier.",
                example: "SELECT column_1, column_2 FROM table_name;",
            },
        ],
        l = "";
    const c = () => {
            r(l, i.toLowerCase());
        },
        a = [
            []
        ];

    function m() {
        (i = this.__value), n(0, i);
    }
    const h = (k) => k.name === i;

    function $() {
        (l = this.value), n(2, l);
    }
    return (
        (o.$$set = (k) => {
            "onDismiss" in k && n(1, (t = k.onDismiss)),
                "onTrain" in k && n(5, (r = k.onTrain)),
                "selectedTrainingDataType" in k &&
                n(0, (i = k.selectedTrainingDataType));
        }),
        [i, t, l, s, c, r, m, a, h, $]
    );
}
class Ps extends we {
    constructor(e) {
        super(),
            _e(this, e, js, Ts, ye, {
                onDismiss: 1,
                onTrain: 5,
                selectedTrainingDataType: 0,
            });
    }
}

function Sr(o, e, n) {
    const t = o.slice();
    return (t[21] = e[n]), t;
}

function Or(o, e, n) {
    const t = o.slice();
    return (t[24] = e[n]), t;
}

function Cr(o, e, n) {
    const t = o.slice();
    return (t[24] = e[n]), t;
}

function Lr(o) {
    let e, n;
    return (
        (e = new Ps({
            props: {
                onDismiss: o[13],
                onTrain: o[0]
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 1 && (i.onTrain = t[0]), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function qs(o) {
    let e;
    return {
        c() {
            e = pe("Action");
        },
        m(n, t) {
            I(n, e, t);
        },
        p: K,
        d(n) {
            n && B(e);
        },
    };
}

function As(o) {
    let e = o[24] + "",
        n;
    return {
        c() {
            n = pe(e);
        },
        m(t, r) {
            I(t, n, r);
        },
        p: K,
        d(t) {
            t && B(n);
        },
    };
}

function Er(o) {
    let e, n, t, r;

    function i(c, a) {
        return c[24] != "id" ? As : qs;
    }
    let l = i(o)(o);
    return {
        c() {
            (e = L("th")),
            (n = L("div")),
            (t = L("span")),
            l.c(),
                (r = F()),
                p(
                    t,
                    "class",
                    "text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200"
                ),
                p(n, "class", "flex items-center gap-x-2"),
                p(e, "scope", "col"),
                p(e, "class", "px-6 py-3 text-left");
        },
        m(c, a) {
            I(c, e, a), v(e, n), v(n, t), l.m(t, null), v(e, r);
        },
        p(c, a) {
            l.p(c, a);
        },
        d(c) {
            c && B(e), l.d();
        },
    };
}

function Ms(o) {
    let e, n, t;

    function r() {
        return o[18](o[21], o[24]);
    }
    return {
        c() {
            (e = L("button")),
            (e.textContent = "Delete"),
            p(e, "type", "button"),
                p(
                    e,
                    "class",
                    "py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-red-200 font-semibold text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                );
        },
        m(i, s) {
            I(i, e, s), n || ((t = Te(e, "click", r)), (n = !0));
        },
        p(i, s) {
            o = i;
        },
        d(i) {
            i && B(e), (n = !1), t();
        },
    };
}

function Ds(o) {
    let e,
        n = o[21][o[24]] + "",
        t;
    return {
        c() {
            (e = L("span")),
            (t = pe(n)),
            p(e, "class", "text-gray-800 dark:text-gray-200");
        },
        m(r, i) {
            I(r, e, i), v(e, t);
        },
        p(r, i) {
            i & 16 && n !== (n = r[21][r[24]] + "") && De(t, n);
        },
        d(r) {
            r && B(e);
        },
    };
}

function Tr(o) {
    let e, n;

    function t(s, l) {
        return s[24] != "id" ? Ds : Ms;
    }
    let i = t(o)(o);
    return {
        c() {
            (e = L("td")),
            (n = L("div")),
            i.c(),
                p(n, "class", "px-6 py-3"),
                p(e, "class", "h-px w-px ");
        },
        m(s, l) {
            I(s, e, l), v(e, n), i.m(n, null);
        },
        p(s, l) {
            i.p(s, l);
        },
        d(s) {
            s && B(e), i.d();
        },
    };
}

function jr(o) {
    let e,
        n,
        t = Le(o[8]),
        r = [];
    for (let i = 0; i < t.length; i += 1) r[i] = Tr(Or(o, t, i));
    return {
        c() {
            e = L("tr");
            for (let i = 0; i < r.length; i += 1) r[i].c();
            n = F();
        },
        m(i, s) {
            I(i, e, s);
            for (let l = 0; l < r.length; l += 1) r[l] && r[l].m(e, null);
            v(e, n);
        },
        p(i, s) {
            if (s & 304) {
                t = Le(i[8]);
                let l;
                for (l = 0; l < t.length; l += 1) {
                    const c = Or(i, t, l);
                    r[l] ? r[l].p(c, s) : ((r[l] = Tr(c)), r[l].c(), r[l].m(e, n));
                }
                for (; l < r.length; l += 1) r[l].d(1);
                r.length = t.length;
            }
        },
        d(i) {
            i && B(e), nt(r, i);
        },
    };
}

function Pr(o) {
    let e, n;
    return (
        (e = new Es({
            props: {
                message: "Are you sure you want to delete this?",
                buttonLabel: "Delete",
                onClose: o[19],
                onConfirm: o[20],
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 32 && (i.onClose = t[19]),
                    r & 34 && (i.onConfirm = t[20]),
                    e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Rs(o) {
    let e,
        n,
        t,
        r,
        i,
        s,
        l,
        c,
        a,
        m,
        h,
        $,
        k,
        A,
        j,
        b,
        d,
        g,
        w,
        D,
        M,
        O,
        u,
        f,
        S,
        T,
        C,
        P = o[2] + 1 + "",
        H,
        N,
        W = Math.min(o[3], o[7].length) + "",
        J,
        Se,
        ae,
        ot,
        tt,
        Ge,
        Ue,
        ht,
        be,
        ft,
        Qe,
        yt,
        It,
        Nt,
        qe = o[6] && Lr(o),
        bt = Le(o[8]),
        Re = [];
    for (let ee = 0; ee < bt.length; ee += 1) Re[ee] = Er(Cr(o, bt, ee));
    let ze = Le(o[4]),
        je = [];
    for (let ee = 0; ee < ze.length; ee += 1) je[ee] = jr(Sr(o, ze, ee));
    let Pe = o[5] != null && Pr(o);
    return {
        c() {
            qe && qe.c(),
                (e = F()),
                (n = L("div")),
                (t = L("div")),
                (r = L("div")),
                (i = L("div")),
                (s = L("div")),
                (l = L("div")),
                (c = L("div")),
                (c.innerHTML =
                    '<h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">Training Data</h2> <p class="text-sm text-gray-600 dark:text-gray-400">Add or remove training data. Good training data is the key to accuracy.</p>'),
                (a = F()),
                (m = L("div")),
                (h = L("div")),
                ($ = L("button")),
                ($.textContent = "View all"),
                (k = F()),
                (A = L("button")),
                (A.innerHTML = `<svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
                    Add training data`),
                (j = F()),
                (b = L("table")),
                (d = L("thead")),
                (g = L("tr"));
            for (let ee = 0; ee < Re.length; ee += 1) Re[ee].c();
            (w = F()), (D = L("tbody"));
            for (let ee = 0; ee < je.length; ee += 1) je[ee].c();
            (M = F()),
            (O = L("div")),
            (u = L("div")),
            (f = L("p")),
            (f.textContent = "Showing:"),
            (S = F()),
            (T = L("div")),
            (C = L("span")),
            (H = pe(P)),
            (N = pe(" - ")),
            (J = pe(W)),
            (Se = F()),
            (ae = L("p")),
            (ae.textContent = `of ${o[7].length}`),
            (ot = F()),
            (tt = L("div")),
            (Ge = L("div")),
            (Ue = L("button")),
            (Ue.innerHTML = `<svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path></svg>
                    Prev`),
            (ht = F()),
            (be = L("button")),
            (be.innerHTML = `Next
                    <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>`),
            (ft = F()),
            Pe && Pe.c(),
                (Qe = Ve()),
                p(
                    $,
                    "class",
                    "py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                ),
                p(
                    A,
                    "class",
                    "py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                ),
                p(h, "class", "inline-flex gap-x-2"),
                p(
                    l,
                    "class",
                    "px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700"
                ),
                p(d, "class", "bg-gray-50 dark:bg-slate-800"),
                p(D, "class", "divide-y divide-gray-200 dark:divide-gray-700"),
                p(
                    b,
                    "class",
                    "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                ),
                p(f, "class", "text-sm text-gray-600 dark:text-gray-400"),
                p(
                    C,
                    "class",
                    "py-2 px-3 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                ),
                p(T, "class", "max-w-sm space-y-3"),
                p(ae, "class", "text-sm text-gray-600 dark:text-gray-400"),
                p(u, "class", "inline-flex items-center gap-x-2"),
                p(Ue, "type", "button"),
                p(
                    Ue,
                    "class",
                    "py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                ),
                p(be, "type", "button"),
                p(
                    be,
                    "class",
                    "py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                ),
                p(Ge, "class", "inline-flex gap-x-2"),
                p(
                    O,
                    "class",
                    "px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700"
                ),
                p(
                    s,
                    "class",
                    "bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700"
                ),
                p(i, "class", "p-1.5 min-w-full inline-block align-middle"),
                p(r, "class", "-m-1.5 overflow-x-auto"),
                p(t, "class", "flex flex-col"),
                p(
                    n,
                    "class",
                    "max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
                );
        },
        m(ee, Be) {
            qe && qe.m(ee, Be),
                I(ee, e, Be),
                I(ee, n, Be),
                v(n, t),
                v(t, r),
                v(r, i),
                v(i, s),
                v(s, l),
                v(l, c),
                v(l, a),
                v(l, m),
                v(m, h),
                v(h, $),
                v(h, k),
                v(h, A),
                v(s, j),
                v(s, b),
                v(b, d),
                v(d, g);
            for (let oe = 0; oe < Re.length; oe += 1) Re[oe] && Re[oe].m(g, null);
            v(b, w), v(b, D);
            for (let oe = 0; oe < je.length; oe += 1) je[oe] && je[oe].m(D, null);
            v(s, M),
                v(s, O),
                v(O, u),
                v(u, f),
                v(u, S),
                v(u, T),
                v(T, C),
                v(C, H),
                v(C, N),
                v(C, J),
                v(u, Se),
                v(u, ae),
                v(O, ot),
                v(O, tt),
                v(tt, Ge),
                v(Ge, Ue),
                v(Ge, ht),
                v(Ge, be),
                I(ee, ft, Be),
                Pe && Pe.m(ee, Be),
                I(ee, Qe, Be),
                (yt = !0),
                It ||
                ((Nt = [
                        Te($, "click", o[11]),
                        Te(A, "click", o[12]),
                        Te(Ue, "click", o[9]),
                        Te(be, "click", o[10]),
                    ]),
                    (It = !0));
        },
        p(ee, [Be]) {
            if (
                (ee[6] ?
                    qe ?
                    (qe.p(ee, Be), Be & 64 && E(qe, 1)) :
                    ((qe = Lr(ee)), qe.c(), E(qe, 1), qe.m(e.parentNode, e)) :
                    qe &&
                    (Oe(),
                        q(qe, 1, 1, () => {
                            qe = null;
                        }),
                        Ce()),
                    Be & 256)
            ) {
                bt = Le(ee[8]);
                let oe;
                for (oe = 0; oe < bt.length; oe += 1) {
                    const $t = Cr(ee, bt, oe);
                    Re[oe] ?
                        Re[oe].p($t, Be) :
                        ((Re[oe] = Er($t)), Re[oe].c(), Re[oe].m(g, null));
                }
                for (; oe < Re.length; oe += 1) Re[oe].d(1);
                Re.length = bt.length;
            }
            if (Be & 304) {
                ze = Le(ee[4]);
                let oe;
                for (oe = 0; oe < ze.length; oe += 1) {
                    const $t = Sr(ee, ze, oe);
                    je[oe] ?
                        je[oe].p($t, Be) :
                        ((je[oe] = jr($t)), je[oe].c(), je[oe].m(D, null));
                }
                for (; oe < je.length; oe += 1) je[oe].d(1);
                je.length = ze.length;
            }
            (!yt || Be & 4) && P !== (P = ee[2] + 1 + "") && De(H, P),
                (!yt || Be & 8) &&
                W !== (W = Math.min(ee[3], ee[7].length) + "") &&
                De(J, W),
                ee[5] != null ?
                Pe ?
                (Pe.p(ee, Be), Be & 32 && E(Pe, 1)) :
                ((Pe = Pr(ee)), Pe.c(), E(Pe, 1), Pe.m(Qe.parentNode, Qe)) :
                Pe &&
                (Oe(),
                    q(Pe, 1, 1, () => {
                        Pe = null;
                    }),
                    Ce());
        },
        i(ee) {
            yt || (E(qe), E(Pe), (yt = !0));
        },
        o(ee) {
            q(qe), q(Pe), (yt = !1);
        },
        d(ee) {
            ee && (B(e), B(n), B(ft), B(Qe)),
                qe && qe.d(ee),
                nt(Re, ee),
                nt(je, ee),
                Pe && Pe.d(ee),
                (It = !1),
                gt(Nt);
        },
    };
}

function Hs(o, e, n) {
    let {
        df: t
    } = e, {
        onTrain: r
    } = e, {
        removeTrainingData: i
    } = e,
    s = JSON.parse(t),
        l = s.length > 0 ? Object.keys(s[0]) : [],
        c = 10,
        a = 1,
        m = Math.ceil(s.length / c),
        h = (a - 1) * c,
        $ = a * c,
        k = s.slice(h, $);
    const A = () => {
            a > 1 && n(16, a--, a);
        },
        j = () => {
            a < m && n(16, a++, a);
        },
        b = () => {
            n(16, (a = 1)), n(15, (c = s.length));
        };
    let d = null,
        g = !1;
    const w = () => {
            n(6, (g = !0));
        },
        D = () => {
            n(6, (g = !1));
        },
        M = (f, S) => {
            n(5, (d = f[S]));
        },
        O = () => {
            n(5, (d = null));
        },
        u = () => {
            d && i(d);
        };
    return (
        (o.$$set = (f) => {
            "df" in f && n(14, (t = f.df)),
                "onTrain" in f && n(0, (r = f.onTrain)),
                "removeTrainingData" in f && n(1, (i = f.removeTrainingData));
        }),
        (o.$$.update = () => {
            o.$$.dirty & 98304 && n(2, (h = (a - 1) * c)),
                o.$$.dirty & 98304 && n(3, ($ = a * c)),
                o.$$.dirty & 12 && n(4, (k = s.slice(h, $))),
                o.$$.dirty & 32768 && n(17, (m = Math.ceil(s.length / c))),
                o.$$.dirty & 196608 && console.log(a, m);
        }),
        [r, i, h, $, k, d, g, s, l, A, j, b, w, D, t, c, a, m, M, O, u]
    );
}
class Bs extends we {
    constructor(e) {
        super(),
            _e(this, e, Hs, Rs, ye, {
                df: 14,
                onTrain: 0,
                removeTrainingData: 1
            });
    }
}

function Is(o) {
    let e;
    return {
        c() {
            (e = L("div")),
            (e.innerHTML =
                '<div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5"><div class="flex justify-center"><div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading"><span class="sr-only">Loading...</span></div></div></div>'),
            p(
                e,
                "class",
                "min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            );
        },
        m(n, t) {
            I(n, e, t);
        },
        p: K,
        i: K,
        o: K,
        d(n) {
            n && B(e);
        },
    };
}

function Ns(o) {
    let e, n, t, r;
    const i = [Vs, zs],
        s = [];

    function l(c, a) {
        return c[0].type === "df" ? 0 : c[0].type === "error" ? 1 : -1;
    }
    return (
        ~(e = l(o)) && (n = s[e] = i[e](o)), {
            c() {
                n && n.c(), (t = Ve());
            },
            m(c, a) {
                ~e && s[e].m(c, a), I(c, t, a), (r = !0);
            },
            p(c, a) {
                let m = e;
                (e = l(c)),
                e === m ?
                    ~e && s[e].p(c, a) :
                    (n &&
                        (Oe(),
                            q(s[m], 1, 1, () => {
                                s[m] = null;
                            }),
                            Ce()),
                        ~e ?
                        ((n = s[e]),
                            n ? n.p(c, a) : ((n = s[e] = i[e](c)), n.c()),
                            E(n, 1),
                            n.m(t.parentNode, t)) :
                        (n = null));
            },
            i(c) {
                r || (E(n), (r = !0));
            },
            o(c) {
                q(n), (r = !1);
            },
            d(c) {
                c && B(t), ~e && s[e].d(c);
            },
        }
    );
}

function zs(o) {
    let e, n;
    return (
        (e = new En({
            props: {
                message: o[0].error
            }
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 1 && (i.message = t[0].error), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Vs(o) {
    let e, n;
    return (
        (e = new Bs({
            props: {
                df: o[0].df,
                removeTrainingData: bo,
                onTrain: $o
            },
        })), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            p(t, r) {
                const i = {};
                r & 1 && (i.df = t[0].df), e.$set(i);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Gs(o) {
    let e, n, t, r, i;
    const s = [Ns, Is],
        l = [];

    function c(a, m) {
        return a[0] !== null ? 0 : 1;
    }
    return (
        (t = c(o)),
        (r = l[t] = s[t](o)), {
            c() {
                (e = L("div")),
                (n = L("div")),
                r.c(),
                    p(n, "class", "py-10 lg:py-14"),
                    p(e, "class", "relative h-screen w-full lg:pl-64");
            },
            m(a, m) {
                I(a, e, m), v(e, n), l[t].m(n, null), (i = !0);
            },
            p(a, [m]) {
                let h = t;
                (t = c(a)),
                t === h ?
                    l[t].p(a, m) :
                    (Oe(),
                        q(l[h], 1, 1, () => {
                            l[h] = null;
                        }),
                        Ce(),
                        (r = l[t]),
                        r ? r.p(a, m) : ((r = l[t] = s[t](a)), r.c()),
                        E(r, 1),
                        r.m(n, null));
            },
            i(a) {
                i || (E(r), (i = !0));
            },
            o(a) {
                q(r), (i = !1);
            },
            d(a) {
                a && B(e), l[t].d();
            },
        }
    );
}

function Zs(o, e, n) {
    let t;
    return et(o, cn, (r) => n(0, (t = r))), [t];
}
class Us extends we {
    constructor(e) {
        super(), _e(this, e, Zs, Gs, ye, {});
    }
}

function Qs(o) {
    let e;
    return {
        c() {
            (e = L("body")),
            (e.innerHTML = `<div class="max-w-[50rem] flex flex-col mx-auto size-full"><header class="mb-auto flex justify-center z-50 w-full py-4"><nav class="px-4 sm:px-6 lg:px-8" aria-label="Global"><span class="flex-none text-xl font-semibold sm:text-3xl dark:text-white">CashCoach</span></nav></header> <div class="text-center py-10 px-4 sm:px-6 lg:px-8"><h1 class="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">No Training Data</h1> <h1 class="block text-2xl font-bold text-white">Did you read the docs?</h1> <p class="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p> <p class="text-gray-600 dark:text-gray-400">You need some training data before you can use Vanna</p> <div class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"><a class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html" target="_blank"><svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            Get the source code</a> <a class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples.html"><svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
            Back to examples</a></div></div> <footer class="mt-auto text-center py-5"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><p class="text-sm text-gray-500">© All Rights Reserved. 2022.</p></div></footer></div>`),
            p(e, "class", "flex h-full");
        },
        m(n, t) {
            I(n, e, t);
        },
        p: K,
        i: K,
        o: K,
        d(n) {
            n && B(e);
        },
    };
}
class Ws extends we {
    constructor(e) {
        super(), _e(this, e, null, Qs, ye, {});
    }
}

function Fs(o) {
    let e, n, t;
    return {
        c() {
            (e = L("div")),
            (n = L("div")),
            (t = L("div")),
            p(
                    t,
                    "class",
                    "mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
                ),
                p(n, "class", "w-full max-w-md mx-auto p-6"),
                p(
                    e,
                    "class",
                    "dark:bg-slate-900 bg-gray-100 flex h-screen items-center py-16"
                );
        },
        m(r, i) {
            I(r, e, i), v(e, n), v(n, t), (t.innerHTML = o[0]);
        },
        p(r, [i]) {
            i & 1 && (t.innerHTML = r[0]);
        },
        i: K,
        o: K,
        d(r) {
            r && B(e);
        },
    };
}

function Js(o, e, n) {
    let t;
    return et(o, fn, (r) => n(0, (t = r))), [t];
}
class Ys extends we {
    constructor(e) {
        super(), _e(this, e, Js, Fs, ye, {});
    }
}

function qr(o) {
    let e, n;
    return (
        (e = new Po({})), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Ks(o) {
    let e, n;
    return (
        (e = new Ys({})), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function Xs(o) {
    let e, n;
    return (
        (e = new Ws({})), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function el(o) {
    let e, n;
    return (
        (e = new Us({})), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function tl(o) {
    let e, n;
    return (
        (e = new Os({})), {
            c() {
                Q(e.$$.fragment);
            },
            m(t, r) {
                G(e, t, r), (n = !0);
            },
            i(t) {
                n || (E(e.$$.fragment, t), (n = !0));
            },
            o(t) {
                q(e.$$.fragment, t), (n = !1);
            },
            d(t) {
                Z(e, t);
            },
        }
    );
}

function nl(o) {
    let e,
        n,
        t,
        r,
        i,
        s = o[0] !== "login" && qr();
    const l = [tl, el, Xs, Ks],
        c = [];

    function a(m, h) {
        return m[0] === "chat" ?
            0 :
            m[0] === "training-data" ?
            1 :
            m[0] === "no-training-data" ?
            2 :
            m[0] === "login" ?
            3 :
            -1;
    }
    return (
        ~(t = a(o)) && (r = c[t] = l[t](o)), {
            c() {
                (e = L("main")), s && s.c(), (n = F()), r && r.c();
            },
            m(m, h) {
                I(m, e, h), s && s.m(e, null), v(e, n), ~t && c[t].m(e, null), (i = !0);
            },
            p(m, [h]) {
                m[0] !== "login" ?
                    s ?
                    h & 1 && E(s, 1) :
                    ((s = qr()), s.c(), E(s, 1), s.m(e, n)) :
                    s &&
                    (Oe(),
                        q(s, 1, 1, () => {
                            s = null;
                        }),
                        Ce());
                let $ = t;
                (t = a(m)),
                t !== $ &&
                    (r &&
                        (Oe(),
                            q(c[$], 1, 1, () => {
                                c[$] = null;
                            }),
                            Ce()),
                        ~t ?
                        ((r = c[t]),
                            r || ((r = c[t] = l[t](m)), r.c()),
                            E(r, 1),
                            r.m(e, null)) :
                        (r = null));
            },
            i(m) {
                i || (E(s), E(r), (i = !0));
            },
            o(m) {
                q(s), q(r), (i = !1);
            },
            d(m) {
                m && B(e), s && s.d(), ~t && c[t].d();
            },
        }
    );
}

function rl(o, e, n) {
    let t;
    return (
        et(o, wt, (r) => n(0, (t = r))),
        Rr(async () => {
            ho(),
                go(),
                new URL(window.location.href).hash.slice(1) === "training-data" ?
                Ir() :
                Nr();
        }),
        [t]
    );
}
class ol extends we {
    constructor(e) {
        super(), _e(this, e, rl, nl, ye, {});
    }
}
new ol({
    target: document.getElementById("app")
});

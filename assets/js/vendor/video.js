/*==========================
    Youtube Player 
==========================*/
/*! YU2FVL - jQuery Youtube Url To FullScreen Video Lightbox - v0.1.0 - 2016-02-07
 * http://otakod.es/yu2fvl
 * Copyright (c) 2016 darkylmnx; Licensed MIT */
! function(t, e, s) {
    function i(t) {
        return /youtu\.be/.test(t) ? t.split("youtu.be/")[1].split("?")[0].split("&")[0].split("#")[0] : /youtube\.com\/v\//.test(t) ? t.split("youtube.com/v/")[1].split("?")[0].split("&")[0].split("#")[0] : /youtube\.com\/embed\//.test(t) ? t.split("youtube.com/embed/")[1].split("?")[0].split("&")[0].split("#")[0] : /youtube.com|youtuberepeater.com|listenonrepeat.com/.test(t) ? t.split("v=")[1].split("&")[0].split("#")[0] : !1
    }

    function n(t, e, s) {
        var i = JSON.stringify({
            event: "command",
            func: e,
            args: s || []
        }); - 1 !== t.src.indexOf("youtube.com/embed") && t.contentWindow.postMessage(i, "*")
    }

    function o(e, i, o) {
        function f() {
            var t = a.width() - e.minPaddingX,
                s = a.height() - e.minPaddingY,
                i = t / s,
                n = e.ratio;
            i > n ? (C.height(s), C.width(s * n)) : (C.width(t), C.height(t / n)), C.css("left", (a.width() - C.width()) / 2), C.css("top", (a.height() - C.height()) / 2)
        }

        function r() {
            n(w[0], "playVideo"), h()
        }

        function h() {
            b.stop().fadeIn("fast"), C.stop().fadeIn("fast")
        }

        function m() {
            b.stop().fadeOut("fast"), C.stop().fadeOut("fast", function() {
                null === i && e.open && (b.remove(), C.remove())
            })
        }

        function v(t) {
            t.on("click", function(t) {
                t.preventDefault(), r()
            })
        }

        function y(t) {
            t.on("click", function(t) {
                t.preventDefault(), n(w[0], "pauseVideo"), m()
            })
        }
        var C = t(s.createElement("DIV")).addClass(e.cssClass).css(c),
            b = t(s.createElement("DIV")).addClass(e.cssClass + e.overlayCssClass).css(p),
            g = t(s.createElement("BUTTON")).addClass(e.cssClass + e.closeCssClass).html(e.closeText),
            w = t(s.createElement("IFRAME")).addClass(e.cssClass + e.iframeCssClass).attr({
                src: l + o + d
            }).css(u);
        C.append(w).append(g), t("body").append(b).append(C), e.open && w.on("load", function() {
            r()
        }), null !== i && v(i), y(g.add(b)), a.on("resize", f).trigger("resize")
    }
    var a = t(e),
        l = "https://www.youtube.com/embed/",
        d = "?enablejsapi=1",
        c = {
            display: "none",
            position: "fixed"
        },
        u = {
            width: "100%",
            height: "100%"
        },
        p = {
            display: "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        },
        f = {
            minPaddingX: 50,
            minPaddingY: 50,
            ratio: 16 / 9,
            cssClass: "yu2fvl",
            overlayCssClass: "-overlay",
            iframeCssClass: "-iframe",
            closeCssClass: "-close",
            closeText: "X",
            open: !1,
            vid: !1
        };
    t.yu2fvl = function(e) {
        var s = t.extend({}, f, e);
        if (s.vid === !1) throw "YOU MUST SET THE 'vid' option";
        o(s, null, s.vid)
    }, t.fn.yu2fvl = function(e) {
        function s() {
            var e = t(this),
                s = i(e.attr("href"));
            o(n, e, s)
        }
        var n = t.extend({}, f, e);
        return n.vid !== !1 ? (o(n, this, n.vid), this) : this.each(s)
    }
}(jQuery, window, document);
let canvas,
  ctx,
  cw,
  ch,
  container = document.querySelector(".container");
setTimeout(() => {
  container.classList.add("newyear"),
    setTimeout(() => {
      document.querySelector("h2").classList.add("active"),
        setTimeout(() => {
          (container.style.display = "none"),
            (canvas = document.getElementById("canvas")),
            (canvas.style.zIndex = "-2"),
            (ctx = canvas.getContext("2d"));
          var t = Math.PI;
          function c() {
            (canvas.width = cw = window.innerWidth),
              (canvas.height = ch = window.innerHeight);
          }
          function e(c, e, n, a) {
            (ctx.fillStyle = a),
              ctx.beginPath(),
              ctx.arc(c, e, n, 0, 2 * t),
              ctx.fill();
          }
          function n(t, c, e, n, a) {
            (ctx.strokeStyle = a),
              ctx.beginPath(),
              ctx.moveTo(t, c),
              ctx.lineTo(e, n),
              ctx.stroke();
          }
          c();
          var a,
            i,
            o,
            r,
            s,
            h,
            l = 30,
            w = ch / 3,
            d = 0.8 * ch,
            u = ch / 50,
            x = 0.1 * ch,
            v = ch - x;
          (window.onresize = c),
            (window.onmousemove = function (t) {
              d = t.clientY;
            }),
            (function c() {
              (ctx.fillStyle = "rgb(10, 24, 30)"),
                ctx.fillRect(0, 0, cw, ch),
                n(cw / 2, x, cw / 2, ch, "rgba(150,255,150,.5)");
              for (var m = 0; m < 10; m++)
                for (var f = x; f < v; f += u)
                  (h = (f / v) * (l / (2 * t)) + (m / 10) * 2 * t),
                    (a = cw / 2 + ((f - 10) / v) * w * Math.cos(h)),
                    (o = w + ((f - 10) / v) * w * Math.sin(h)),
                    (i = f + 100 * Math.sin((d - ch / 2) / (ch / 2))),
                    (r = 0.0075 * o + 0.002 * i),
                    n(
                      cw / 2,
                      f,
                      a,
                      i,
                      "rgba(255,255,255," + (s = o / (2 * w) + 0.2) / 5 + ")"
                    ),
                    e(
                      a,
                      i,
                      r,
                      m % 2
                        ? "rgba(255,155,0," + s + ")"
                        : "rgba(0,155,255," + s + ")"
                    );
              (l += t / 90), window.requestAnimationFrame(c);
            })();
        }, 3e3);
    }, 3e3);
}, 3e3);

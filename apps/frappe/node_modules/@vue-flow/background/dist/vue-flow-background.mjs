import { h as k, defineComponent as x, computed as u, openBlock as s, createElementBlock as w, normalizeStyle as G, renderSlot as h, unref as e, createElementVNode as g, createBlock as y, createCommentVNode as $ } from "vue";
import { useVueFlow as b } from "@vue-flow/core";
var a = /* @__PURE__ */ ((t) => (t.Lines = "lines", t.Dots = "dots", t))(a || {});
const z = function({ dimensions: t, size: l, color: d }) {
  return k("path", {
    stroke: d,
    "stroke-width": l,
    d: `M${t[0] / 2} 0 V${t[1]} M0 ${t[1] / 2} H${t[0]}`
  });
}, C = function({ radius: t, color: l }) {
  return k("circle", { cx: t, cy: t, r: t, fill: l });
};
a.Lines + "", a.Dots + "";
const L = ["id", "x", "y", "width", "height", "patternTransform"], B = {
  key: 2,
  height: "100",
  width: "100"
}, S = ["fill"], E = ["x", "y", "fill"], M = {
  name: "Background",
  compatConfig: { MODE: 3 }
}, A = /* @__PURE__ */ x({
  ...M,
  props: {
    id: null,
    variant: { default: a.Dots },
    gap: { default: 20 },
    size: { default: 1 },
    lineWidth: { default: 1 },
    patternColor: null,
    bgColor: null,
    height: { default: 100 },
    width: { default: 100 },
    x: { default: 0 },
    y: { default: 0 },
    offset: { default: 2 }
  },
  setup(t) {
    const l = {
      [a.Dots]: "#81818a",
      [a.Lines]: "#eee"
    }, { id: d, viewport: o } = b(), n = u(() => {
      const [i, v] = Array.isArray(t.gap) ? t.gap : [t.gap, t.gap], c = [i * o.value.zoom || 1, v * o.value.zoom || 1], f = t.size * o.value.zoom, D = t.variant === a.Dots ? [f / t.offset, f / t.offset] : [c[0] / t.offset, c[1] / t.offset];
      return {
        scaledGap: c,
        offset: D,
        size: f
      };
    }), r = u(() => `pattern-${d}${t.id ? `-${t.id}` : ""}`), m = u(() => t.patternColor || l[t.variant || a.Dots]);
    return (i, v) => (s(), w("svg", {
      class: "vue-flow__background vue-flow__container",
      style: G({
        height: `${t.height > 100 ? 100 : t.height}%`,
        width: `${t.width > 100 ? 100 : t.width}%`
      })
    }, [
      h(i.$slots, "pattern-container", { id: e(r) }, () => [
        g("pattern", {
          id: e(r),
          x: e(o).x % e(n).scaledGap[0],
          y: e(o).y % e(n).scaledGap[1],
          width: e(n).scaledGap[0],
          height: e(n).scaledGap[1],
          patternTransform: `translate(-${e(n).offset[0]},-${e(n).offset[1]})`,
          patternUnits: "userSpaceOnUse"
        }, [
          h(i.$slots, "pattern", {}, () => [
            t.variant === e(a).Lines ? (s(), y(e(z), {
              key: 0,
              size: t.lineWidth,
              color: e(m),
              dimensions: e(n).scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : t.variant === e(a).Dots ? (s(), y(e(C), {
              key: 1,
              color: e(m),
              radius: e(n).size / t.offset
            }, null, 8, ["color", "radius"])) : $("", !0),
            t.bgColor ? (s(), w("svg", B, [
              g("rect", {
                width: "100%",
                height: "100%",
                fill: t.bgColor
              }, null, 8, S)
            ])) : $("", !0)
          ])
        ], 8, L)
      ]),
      g("rect", {
        x: t.x,
        y: t.y,
        width: "100%",
        height: "100%",
        fill: `url(#${e(r)})`
      }, null, 8, E),
      h(i.$slots, "default", { id: e(r) })
    ], 4));
  }
});
export {
  A as Background,
  a as BackgroundVariant
};

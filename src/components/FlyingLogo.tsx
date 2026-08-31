"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { useLayoutEffect, useState, type RefObject } from "react";

type Rect = { top: number; left: number; height: number };

function measure(el: HTMLElement | null): Rect | null {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { top: r.top, left: r.left, height: r.height };
}

/**
 * The single, real "Ishita" headline. It renders as a fixed-position overlay
 * that starts exactly on top of Hero's invisible headline spacer and, driven
 * by scroll progress, moves/scales (transform only — see src/lib/motion.ts
 * for why opacity is avoided) until it exactly overlaps Nav's invisible logo
 * slot, where it stays for the rest of the page. There is only ever one
 * "Ishita" element — it flies into place rather than crossfading with a
 * separately-appearing logo.
 */
export default function FlyingLogo({
  progress,
  startRef,
  endRef,
}: {
  progress: MotionValue<number>;
  startRef: RefObject<HTMLElement | null>;
  endRef: RefObject<HTMLElement | null>;
}) {
  const [rects, setRects] = useState<{ start: Rect; end: Rect } | null>(null);

  useLayoutEffect(() => {
    function update() {
      const start = measure(startRef.current);
      const end = measure(endRef.current);
      if (start && end) setRects({ start, end });
    }
    update();
    window.addEventListener("resize", update);
    document.fonts?.ready.then(update).catch(() => {});
    return () => window.removeEventListener("resize", update);
  }, [startRef, endRef]);

  const dx = rects ? rects.end.left - rects.start.left : 0;
  const dy = rects ? rects.end.top - rects.start.top : 0;
  const targetScale = rects ? rects.end.height / rects.start.height : 1;

  const x = useTransform(progress, [0, 0.5], [0, dx]);
  const y = useTransform(progress, [0, 0.5], [0, dy]);
  const scale = useTransform(progress, [0, 0.5], [1, targetScale]);

  if (!rects) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: rects.start.top,
        left: rects.start.left,
        x,
        y,
        scale,
        transformOrigin: "top left",
        zIndex: 60,
      }}
      className="pointer-events-none"
    >
      <a
        href="#top"
        className="pointer-events-auto whitespace-nowrap font-display text-[clamp(4rem,18vw,13rem)] font-bold leading-[0.85] tracking-[-0.02em]"
      >
        Ishita
      </a>
    </motion.div>
  );
}

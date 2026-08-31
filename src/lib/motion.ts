"use client";

import { useMotionValueEvent, type MotionValue } from "framer-motion";
import { useState } from "react";

/**
 * Mirrors a MotionValue's live number into React state.
 *
 * Scroll-linked `opacity` bound directly via `useTransform` + `style={{ opacity }}`
 * does not repaint in this project's framer-motion build (transform-based values
 * like scale/x/y update fine; plain `opacity` gets stuck at its initial value).
 * Driving opacity from plain React state sidesteps that and is reliable.
 */
export default function useProgressNumber(progress: MotionValue<number>) {
  const [value, setValue] = useState(progress.get());
  useMotionValueEvent(progress, "change", setValue);
  return value;
}

export function interpolate(
  value: number,
  [inMin, inMax]: [number, number],
  [outMin, outMax]: [number, number],
) {
  const t = Math.min(1, Math.max(0, (value - inMin) / (inMax - inMin)));
  return outMin + t * (outMax - outMin);
}
export { useProgressNumber };

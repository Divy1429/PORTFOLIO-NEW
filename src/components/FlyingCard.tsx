"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { useLayoutEffect, useState, type RefObject } from "react";
import type { Project } from "@/data/projects";
import type { StackPose } from "@/data/cardStack";
import OrbitScene from "./OrbitScene";
import DeliveryScene from "./DeliveryScene";

const SCENES = { orbit: OrbitScene, delivery: DeliveryScene } as const;

type Pose = { top: number; left: number; width: number; height: number; rotate: number };

/**
 * One project's card, rendered as a fixed-position overlay that travels
 * through three poses as the user scrolls the hero:
 *
 *   start (small, beside the hero text) → peak (enlarged, dominant)
 *   → end (settled into its slot in the "My Work" grid below)
 *
 * All five animated properties (top/left/width/height/rotate) are plain
 * geometry/transform values — deliberately not opacity, see src/lib/motion.ts
 * for why. `end` is measured live from the grid slot rather than hardcoded:
 * because the grid slot sits in normal document flow immediately after the
 * pinned hero, its position *relative to the Work section's own top* is
 * scroll-independent — and progress===1 is defined (via useScroll's
 * "end start" offset) to land exactly when the Work section's top reaches
 * the viewport's top. So that relative offset is already the correct
 * viewport-space target at progress===1, with no extra correction needed.
 */
export default function FlyingCard({
  project,
  progress,
  poses: config,
  workSectionRef,
  gridSlotRef,
}: {
  project: Project;
  progress: MotionValue<number>;
  poses: { start: StackPose; peak: StackPose };
  workSectionRef: RefObject<HTMLElement | null>;
  gridSlotRef: RefObject<HTMLDivElement | null>;
}) {
  const [poses, setPoses] = useState<{ start: Pose; peak: Pose; end: Pose } | null>(null);

  useLayoutEffect(() => {
    function update() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Clamp widths so a card never overflows past the viewport's right
      // edge on narrower screens, regardless of the configured pose.
      const startWidth = Math.min(config.start.width, vw - vw * config.start.leftFrac - 24);
      const peakWidth = Math.min(config.peak.width, vw - vw * config.peak.leftFrac - 24);

      const start: Pose = {
        top: vh * config.start.topFrac,
        left: vw * config.start.leftFrac,
        width: startWidth,
        height: startWidth * 0.75,
        rotate: config.start.rotate,
      };
      const peak: Pose = {
        top: vh * config.peak.topFrac,
        left: vw * config.peak.leftFrac,
        width: peakWidth,
        height: peakWidth * 0.75,
        rotate: config.peak.rotate,
      };

      const slotRect = gridSlotRef.current?.getBoundingClientRect();
      const sectionRect = workSectionRef.current?.getBoundingClientRect();
      const end: Pose =
        slotRect && sectionRect
          ? {
              top: slotRect.top - sectionRect.top,
              left: slotRect.left,
              width: slotRect.width,
              height: slotRect.height,
              rotate: 0,
            }
          : { ...peak, rotate: 0 };

      setPoses({ start, peak, end });
    }

    update();
    window.addEventListener("resize", update);
    document.fonts?.ready.then(update).catch(() => {});
    return () => window.removeEventListener("resize", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gridSlotRef, workSectionRef]);

  // 0 → 0.55: start pose grows into the enlarged peak pose.
  // 0.55 → 0.85: hold at peak — the dominant, "look at this" moment.
  // 0.85 → 1: collapse into the grid slot. Keeping this window short (rather
  // than sliding all the way from peak to end over the full 0–1 range) means
  // the card only sweeps across the hero's bio text briefly, right as that
  // text is itself scrolling away (the sticky hero starts unpinning well
  // before progress 1), instead of dragging the sweep out across the whole
  // scroll range.
  const stops: [number, number, number, number] = [0, 0.55, 0.85, 1];
  const fallback = poses?.start ?? { top: 0, left: 0, width: 220, height: 165, rotate: 0 };
  const mid = poses?.peak ?? fallback;
  const end = poses?.end ?? fallback;

  const top = useTransform(progress, stops, [fallback.top, mid.top, mid.top, end.top]);
  const left = useTransform(progress, stops, [fallback.left, mid.left, mid.left, end.left]);
  const width = useTransform(progress, stops, [fallback.width, mid.width, mid.width, end.width]);
  const height = useTransform(progress, stops, [fallback.height, mid.height, mid.height, end.height]);
  const rotate = useTransform(progress, stops, [fallback.rotate, mid.rotate, mid.rotate, end.rotate]);

  if (!poses) return null;

  const Scene = SCENES[project.variant];
  const bg =
    project.theme === "ink"
      ? "bg-[var(--project-ink-bg)]"
      : "bg-[var(--project-forest-bg)]";

  return (
    <motion.div
      style={{ position: "fixed", top, left, width, height, rotate, zIndex: 40 }}
      className="pointer-events-none"
    >
      <div
        className={`relative h-full w-full overflow-hidden rounded-[20px] shadow-2xl shadow-black/25 md:rounded-[32px] ${bg}`}
      >
        <Scene />
      </div>
    </motion.div>
  );
}

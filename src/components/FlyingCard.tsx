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
 * One project card rendered as a fixed-position overlay that travels
 * through three poses driven by the hero scroll progress:
 *
 *   start (small, stacked in pile) → peak (enlarged, fanned out)
 *   → end (settled into its 2×2 grid slot in "My Work")
 *
 * At progress === 1 the card fades out so the in-flow grid card
 * (rendered by WorkSection) takes over seamlessly.
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

  // start → peak (gradual) → hold at peak → settle into grid (slow)
  // Wider ranges = smoother transitions with Lenis' momentum
  const stops: [number, number, number, number, number] = [0, 0.35, 0.65, 0.90, 1];
  const fallback = poses?.start ?? { top: 0, left: 0, width: 220, height: 165, rotate: 0 };
  const mid = poses?.peak ?? fallback;
  const end = poses?.end ?? fallback;

  const top = useTransform(progress, stops, [fallback.top, mid.top, mid.top, end.top, end.top]);
  const left = useTransform(progress, stops, [fallback.left, mid.left, mid.left, end.left, end.left]);
  const width = useTransform(progress, stops, [fallback.width, mid.width, mid.width, end.width, end.width]);
  const height = useTransform(progress, stops, [fallback.height, mid.height, mid.height, end.height, end.height]);
  const rotate = useTransform(progress, stops, [fallback.rotate, mid.rotate, mid.rotate, end.rotate, end.rotate]);
  // Fade out once landed so in-flow cards in WorkSection take over
  const opacity = useTransform(progress, [0.88, 1], [1, 0]);

  if (!poses) return null;

  const Scene = SCENES[project.variant];
  const bg =
    project.theme === "ink"
      ? "bg-[var(--project-ink-bg)]"
      : "bg-[var(--project-forest-bg)]";

  return (
    <motion.div
      style={{ position: "fixed", top, left, width, height, rotate, opacity, zIndex: 40 }}
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

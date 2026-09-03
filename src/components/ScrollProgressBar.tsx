"use client";

import { useScroll, useSpring, motion } from "framer-motion";

/**
 * Thin progress bar pinned directly under the fixed nav.
 * Uses the full-document scroll (no target), so it covers the entire page.
 * The spring adds a slight smoothing — feel is "elastic" rather than instant.
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  // Light spring so the bar feels responsive but not perfectly rigid
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-foreground"
      aria-hidden
    />
  );
}

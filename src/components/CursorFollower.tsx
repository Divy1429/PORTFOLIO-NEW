"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor — a small filled dot (instant) + a slightly larger ring
 * (spring-lagged) that follows the mouse.
 *
 * Matches the skeuomorphic portfolio aesthetic:
 *  - dot uses --foreground fill
 *  - ring is hollow with --accent-mint border on interactive elements
 *
 * Hidden automatically on touch devices (pointer: coarse).
 */
export default function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring lags behind the dot with a spring
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 18 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 18 });

  useEffect(() => {
    // Only show on fine-pointer (mouse) devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function onLeave() {
      setVisible(false);
    }

    // Enlarge ring when hovering interactive elements
    function onOver(e: MouseEvent) {
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [role='button'], input, textarea, select, label");
      setHovered(!!interactive);
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);

    // Hide the native cursor globally via a style tag
    const style = document.createElement("style");
    style.id = "cursor-follower-style";
    style.textContent = "* { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.getElementById("cursor-follower-style")?.remove();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot — instant, no spring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9999] rounded-full bg-foreground"
        style={{
          x: mouseX,
          y: mouseY,
          width: hovered ? 6 : 5,
          height: hovered ? 6 : 5,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer ring — spring-lagged */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[9998] rounded-full border-2 border-foreground"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovered ? 40 : 28,
          height: hovered ? 40 : 28,
          borderColor: hovered ? "var(--accent-mint)" : "var(--foreground)",
          opacity: visible ? 0.55 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

export default function FloatingItem({
  children,
  className,
  style,
  baseRotate = 0,
  rotateRange = 5,
  floatY = 14,
  duration = 4,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  baseRotate?: number;
  rotateRange?: number;
  floatY?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ rotate: baseRotate }}
      animate={{
        y: [0, -floatY, 0],
        rotate: [baseRotate - rotateRange, baseRotate + rotateRange, baseRotate - rotateRange],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

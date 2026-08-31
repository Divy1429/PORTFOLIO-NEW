"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
] as const;

export default function Nav({
  progress,
  logoSlotRef,
}: {
  progress: MotionValue<number>;
  logoSlotRef: RefObject<HTMLSpanElement | null>;
}) {
  // Fade in a subtle backdrop once the user starts scrolling
  const bgOpacity = useTransform(progress, [0.02, 0.15], [0, 1]);

  return (
    <motion.header
      style={{
        backgroundColor: useTransform(bgOpacity, (v) => `rgba(248, 244, 236, ${v * 0.92})`),
      }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm"
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-12">
        {/*
          Invisible, layout-only slot. FlyingLogo (rendered in SiteShell) measures
          this rect and animates the real "Divy" text onto it.
        */}
        <span
          ref={logoSlotRef}
          aria-hidden
          className="invisible whitespace-nowrap font-display text-xl font-semibold"
        >
          Divy
        </span>

        {/* Right-aligned link group */}
        <div className="flex items-center gap-8 md:gap-10">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-normal tracking-wide text-foreground/80 transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}

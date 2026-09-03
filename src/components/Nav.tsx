"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
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
          className="invisible whitespace-nowrap font-display text-base font-bold"
        >
          Divy
        </span>

        {/* Right-aligned link group */}
        <div className="flex items-center gap-6 md:gap-8">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-sm font-normal tracking-wide text-foreground/80 transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          {/* Resume CTA — visually distinct from nav links */}
          <a
            href="/resume"
            id="nav-resume-link"
            className="group hidden items-center gap-2 border-2 border-foreground bg-foreground px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-background shadow-[2px_2px_0px_0px_var(--accent-mint)] transition-all hover:-translate-y-px hover:shadow-[4px_4px_0px_0px_var(--accent-mint)] sm:flex"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-3 w-3 transition-transform group-hover:translate-y-0.5"
              aria-hidden
            >
              <path d="M8 12L3 7h3V1h4v6h3L8 12zM1 14h14v1.5H1V14z" />
            </svg>
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";

const LINKS = [
  { label: "Work", href: "#work", spread: 3.2, clustered: 72.4 },
  { label: "About", href: "#about", spread: 33.7, clustered: 79.3 },
  { label: "Resume", href: "#resume", spread: 64.6, clustered: 86.7 },
  { label: "Contact", href: "#contact", spread: 95.8, clustered: 94.5 },
] as const;

function NavLink({
  label,
  href,
  spread,
  clustered,
  progress,
}: {
  label: string;
  href: string;
  spread: number;
  clustered: number;
  progress: MotionValue<number>;
}) {
  const left = useTransform(progress, [0, 0.5], [`${spread}%`, `${clustered}%`]);

  return (
    <motion.a
      href={href}
      style={{ left }}
      className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-normal tracking-wide text-foreground/90 transition-opacity hover:opacity-60"
    >
      {label}
    </motion.a>
  );
}

export default function Nav({
  progress,
  logoSlotRef,
}: {
  progress: MotionValue<number>;
  logoSlotRef: RefObject<HTMLSpanElement | null>;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="relative mx-auto h-20 w-full max-w-[1600px] px-6 md:px-12">
        {/*
          Invisible, layout-only slot. FlyingLogo (rendered in SiteShell) measures
          this rect and animates the real text onto it.
        */}
        <span
          ref={logoSlotRef}
          aria-hidden
          className="invisible absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-xl font-semibold md:left-12"
        >
          Divy
        </span>

        {LINKS.map((link) => (
          <NavLink key={link.label} progress={progress} {...link} />
        ))}
      </nav>
    </header>
  );
}

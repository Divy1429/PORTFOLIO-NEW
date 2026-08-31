"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { interpolate, useProgressNumber } from "@/lib/motion";

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

export default function Nav({ progress }: { progress: MotionValue<number> }) {
  const p = useProgressNumber(progress);
  const logoOpacity = interpolate(p, [0.28, 0.48], [0, 1]);
  const logoScale = useTransform(progress, [0.28, 0.48], [0.7, 1]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="relative mx-auto h-20 w-full max-w-[1600px] px-6 md:px-12">
        <motion.a
          href="#top"
          style={{ opacity: logoOpacity, scale: logoScale }}
          className="absolute left-6 top-1/2 -translate-y-1/2 font-display text-xl font-semibold md:left-12"
        >
          Ishita
        </motion.a>

        {LINKS.map((link) => (
          <NavLink key={link.label} progress={progress} {...link} />
        ))}
      </nav>
    </header>
  );
}

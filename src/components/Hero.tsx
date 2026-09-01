"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";
import { interpolate, useProgressNumber } from "@/lib/motion";

// CSS injected once — drives the marquee with animation-play-state so hover pause works reliably
const MARQUEE_CSS = `
  @keyframes hero-marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .hero-ticker-track {
    animation: hero-marquee 60s linear infinite;
  }
  .hero-ticker-wrap:hover .hero-ticker-track {
    animation-play-state: paused;
  }
`;

const TICKER_ITEMS = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Tailwind CSS", "Socket.IO", "Redis",
  "REST APIs", "Git", "Framer Motion", "Docker", "Prisma",
];

export default function Hero({
  heroRef,
  headlineRef,
  progress,
}: {
  heroRef: RefObject<HTMLElement | null>;
  headlineRef: RefObject<HTMLHeadingElement | null>;
  progress: MotionValue<number>;
}) {
  const p = useProgressNumber(progress);

  const helloOpacity = interpolate(p, [0, 0.06], [1, 0]);
  const hereOpacity = helloOpacity;

  const paraOpacity = interpolate(p, [0.03, 0.14], [0, 1]);
  const paraY = useTransform(progress, [0.03, 0.14], [24, 0]);

  const overlayOpacity = useTransform(progress, [0, 0.08], [1, 0]);

  // Duplicate items so the marquee loops seamlessly
  const marqueeItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section id="top" ref={heroRef} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center">
        {/*
          Left column only — the right half of the viewport is left open for
          the project card stack (FlyingCard, rendered as fixed overlays from
          SiteShell) to occupy and grow into as the user scrolls.
        */}
        <div className="mx-auto flex w-full max-w-[1600px] flex-col px-6 md:px-12">
          <div className="flex max-w-[560px] flex-col md:max-w-[640px]">
            <motion.span
              style={{ opacity: helloOpacity }}
              className="font-sans text-2xl font-light text-foreground/80 md:text-3xl ml-2"
            >
              Hello
            </motion.span>

            {/*
              Invisible, layout-only spacer. The real, visible "Divy" headline is
              FlyingLogo (rendered in SiteShell as a fixed-position overlay) — it
              starts by measuring this element's rect so it lines up exactly here,
              then animates on scroll toward the nav logo slot. This element just
              reserves the vertical space so Hello/Here/the paragraph don't shift.
            */}
            <h1
              ref={headlineRef}
              aria-hidden
              className="invisible mb-2 whitespace-nowrap font-display text-[clamp(4rem,18vw,13rem)] font-bold leading-[0.85] tracking-[-0.02em] md:mb-0"
            >
              Divy
            </h1>

            <motion.span
              style={{ opacity: hereOpacity }}
              className="font-sans text-2xl font-light text-foreground/80 md:text-3xl  ml-2"
            >
              Here
            </motion.span>

            <motion.p
              style={{ opacity: paraOpacity, y: paraY }}
              className="mt-8 max-w-md text-left font-sans text-xl font-light leading-snug text-foreground md:mt-10 md:text-2xl"
            >
              I am a Full Stack Web Developer <br />with experience with 1+ year.
            </motion.p>

            {/* ── Availability pill — inline below paragraph ── */}
            <motion.div
              style={{ opacity: paraOpacity, y: paraY }}
              className="mt-6 ml-0.5"
            >
              <div className="inline-flex items-center gap-2.5 border border-foreground/15 bg-foreground/[0.03] px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-[11px] text-foreground/60 tracking-wider">
                  Available for opportunities
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Tech ticker strip — pinned to bottom ── */}
        <style dangerouslySetInnerHTML={{ __html: MARQUEE_CSS }} />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="hero-ticker-wrap absolute bottom-28 left-0 w-full overflow-hidden cursor-default"
        >
          {/* fade masks on left / right edges */}
          <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <div className="hero-ticker-track flex gap-8 w-max py-2">
            {marqueeItems.map((item, i) => (
              <div key={i} className="flex items-center gap-8 shrink-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground/30 whitespace-nowrap select-none">
                  {item}
                </span>
                <span className="w-1 h-1 rounded-full bg-foreground/15 shrink-0" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Scroll to Explore ── */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-foreground/40">
            Scroll to Explore
          </span>
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
              className="w-px h-8 bg-gradient-to-b from-foreground/50 to-transparent origin-top"
            />
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-foreground/50 -mt-0.5"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

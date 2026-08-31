"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";
import { interpolate, useProgressNumber } from "@/lib/motion";

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
              className="font-sans text-2xl font-light text-foreground/80 md:text-3xl"
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
              className="invisible mb-2 whitespace-nowrap font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.85] tracking-[-0.02em] md:mb-3"
            >
              Divy
            </h1>

            <motion.span
              style={{ opacity: hereOpacity }}
              className="font-sans text-2xl font-light text-foreground/80 md:text-3xl mt-41"
            >
              Here
            </motion.span>

            <motion.p
              style={{ opacity: paraOpacity, y: paraY }}
              className="mt-8 max-w-md text-left font-sans text-xl font-light leading-snug text-foreground md:mt-10 md:text-2xl"
            >
              I am a Full Stack Web Developer <br />with experience with 1+ year.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

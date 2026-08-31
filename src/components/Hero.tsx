"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";
import { interpolate, useProgressNumber } from "@/lib/motion";

export default function Hero({
  heroRef,
  progress,
}: {
  heroRef: RefObject<HTMLElement | null>;
  progress: MotionValue<number>;
}) {
  const p = useProgressNumber(progress);

  const helloOpacity = interpolate(p, [0, 0.18], [1, 0]);
  const hereOpacity = helloOpacity;

  const headlineScale = useTransform(progress, [0, 0.5], [1, 0.05]);
  const headlineX = useTransform(progress, [0, 0.5], ["0%", "-46%"]);
  const headlineY = useTransform(progress, [0, 0.5], ["0%", "-78%"]);
  const headlineOpacity = interpolate(p, [0.32, 0.48], [1, 0]);

  const paraOpacity = interpolate(p, [0.12, 0.36], [0, 1]);
  const paraY = useTransform(progress, [0.12, 0.36], [32, 0]);

  return (
    <section id="top" ref={heroRef} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col px-6 md:px-12">
          <motion.span
            style={{ opacity: helloOpacity }}
            className="font-sans text-2xl font-light text-foreground/80 md:text-3xl"
          >
            Hello
          </motion.span>

          <motion.h1
            style={{
              scale: headlineScale,
              x: headlineX,
              y: headlineY,
              opacity: headlineOpacity,
            }}
            className="origin-top-left whitespace-nowrap font-display text-[clamp(4rem,18vw,13rem)] font-bold leading-[0.85] tracking-[-0.02em]"
          >
            Ishita
          </motion.h1>

          <motion.span
            style={{ opacity: hereOpacity }}
            className="self-end font-sans text-2xl font-light text-foreground/80 md:text-3xl"
          >
            Here
          </motion.span>

          <motion.p
            style={{ opacity: paraOpacity, y: paraY }}
            className="ml-auto mt-16 max-w-md text-left font-sans text-2xl font-light leading-snug text-foreground md:mt-24 md:text-[2rem]"
          >
            I am a Product Designer with a love for motion, interaction
            design and crime documentries
          </motion.p>
        </div>
      </div>
    </section>
  );
}

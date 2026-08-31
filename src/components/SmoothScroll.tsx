"use client";

import { ReactLenis } from "lenis/react";

/**
 * Global smooth-scroll. `root` makes Lenis drive the real window/document
 * scroll (via native scrollTo each frame) rather than wrapping the page in
 * a transformed container — so position:fixed overlays (Nav, FlyingLogo,
 * FlyingCard) and every getBoundingClientRect()-based measurement keep
 * working unmodified, and Framer Motion's useScroll (which listens for
 * native scroll events) stays in sync automatically.
 *
 * Tuned for buttery-smooth scroll-linked card animations:
 *  - lerp 0.06 → slower interpolation = silkier momentum
 *  - duration 1.6 → longer coast for cinematic feel
 *  - wheelMultiplier 0.8 → tames fast scroll wheels for precise control
 *  - touchMultiplier 1.5 → keeps touch/trackpad responsive
 */
export default function SmoothScroll() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.06,
        duration: 1.6,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
      }}
    />
  );
}

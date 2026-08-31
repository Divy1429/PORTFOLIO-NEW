"use client";

import { ReactLenis } from "lenis/react";

/**
 * Global smooth-scroll. `root` makes Lenis drive the real window/document
 * scroll (via native scrollTo each frame) rather than wrapping the page in
 * a transformed container — so position:fixed overlays (Nav, FlyingLogo,
 * FlyingCard) and every getBoundingClientRect()-based measurement keep
 * working unmodified, and Framer Motion's useScroll (which listens for
 * native scroll events) stays in sync automatically.
 */
export default function SmoothScroll() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
      }}
    />
  );
}

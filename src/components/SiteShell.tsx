"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Nav from "./Nav";
import Hero from "./Hero";
import WorkSection from "./WorkSection";

export default function SiteShell() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <Nav progress={scrollYProgress} />
      <Hero heroRef={heroRef} progress={scrollYProgress} />
      <WorkSection />
    </>
  );
}

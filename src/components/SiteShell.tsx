"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Nav from "./Nav";
import Hero from "./Hero";
import FlyingLogo from "./FlyingLogo";
import FlyingCard from "./FlyingCard";
import WorkSection from "./WorkSection";
import { projects } from "@/data/projects";
import { STACK_CONFIG } from "@/data/cardStack";

export default function SiteShell() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const logoSlotRef = useRef<HTMLSpanElement>(null);
  const workSectionRef = useRef<HTMLElement>(null);

  const gridSlotRef0 = useRef<HTMLDivElement>(null);
  const gridSlotRef1 = useRef<HTMLDivElement>(null);
  const gridSlotRef2 = useRef<HTMLDivElement>(null);
  const gridSlotRef3 = useRef<HTMLDivElement>(null);
  const gridSlotRefs = [gridSlotRef0, gridSlotRef1, gridSlotRef2, gridSlotRef3];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <Nav progress={scrollYProgress} logoSlotRef={logoSlotRef} />

      <FlyingLogo
        progress={scrollYProgress}
        startRef={headlineRef}
        endRef={logoSlotRef}
      />

      {projects.map((project, i) => (
        <FlyingCard
          key={project.id}
          project={project}
          progress={scrollYProgress}
          poses={STACK_CONFIG[project.id]}
          workSectionRef={workSectionRef}
          gridSlotRef={gridSlotRefs[i]}
        />
      ))}

      <Hero heroRef={heroRef} headlineRef={headlineRef} progress={scrollYProgress} />
      <WorkSection sectionRef={workSectionRef} gridSlotRefs={gridSlotRefs} heroProgress={scrollYProgress} />
    </>
  );
}

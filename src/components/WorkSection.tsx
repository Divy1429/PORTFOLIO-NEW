"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <section id="work" className="relative bg-background pb-24 pt-24 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 font-display text-2xl font-normal md:mb-14 md:text-3xl"
        >
          My Work
        </motion.h2>

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

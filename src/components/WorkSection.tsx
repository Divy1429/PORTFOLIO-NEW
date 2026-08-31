"use client";

import { motion } from "framer-motion";
import type { RefObject } from "react";
import { projects, type ProjectTag } from "@/data/projects";

const TAG_STYLE: Record<ProjectTag["tone"], string> = {
  blue: "bg-[var(--tag-blue-bg)] text-[var(--tag-blue-fg)]",
  green: "bg-[var(--tag-green-bg)] text-[var(--tag-green-fg)]",
};

function Tag({ tag }: { tag: ProjectTag }) {
  return (
    <span
      className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-normal ${TAG_STYLE[tag.tone]}`}
    >
      {tag.label}
    </span>
  );
}

export default function WorkSection({
  sectionRef,
  gridSlotRefs,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  gridSlotRefs: RefObject<HTMLDivElement | null>[];
}) {
  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-background pb-24 pt-24 md:pt-32"
    >
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

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((project, i) => (
            <div key={project.id} className="flex flex-col">
              {/*
                Invisible, layout-only slot. FlyingCard (fixed overlay, rendered
                from SiteShell) measures this element's rect and animates the
                real, visible card panel onto it as the hero scroll completes.
              */}
              <div
                ref={gridSlotRefs[i]}
                aria-hidden
                className="invisible aspect-[4/3] w-full rounded-[20px] md:rounded-[32px]"
              />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
              >
                <div>
                  <h3 className="font-display text-2xl font-medium md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-sans text-base text-muted md:text-lg">
                    {project.subtitle}
                    {project.subtitleAccent && (
                      <>
                        {" "}
                        <span className="font-medium text-[var(--accent-mint)]">
                          {project.subtitleAccent}
                        </span>
                      </>
                    )}
                  </p>
                </div>

                <div className="flex flex-shrink-0 gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag.label} tag={tag} />
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

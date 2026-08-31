"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { RefObject } from "react";
import { projects, type ProjectTag } from "@/data/projects";
import OrbitScene from "./OrbitScene";
import DeliveryScene from "./DeliveryScene";

const SCENES = { orbit: OrbitScene, delivery: DeliveryScene } as const;

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
  heroProgress,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  gridSlotRefs: RefObject<HTMLDivElement | null>[];
  heroProgress: MotionValue<number>;
}) {
  // Cards stay invisible until the flying overlays have almost fully landed
  const contentOpacity = useTransform(heroProgress, [0.88, 1], [0, 1]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-background pb-24 pt-24 md:pt-32"
    >
      <motion.div
        style={{ opacity: contentOpacity }}
        className="mx-auto max-w-[1600px] px-6 md:px-12"
      >
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
          {projects.map((project, i) => {
            const Scene = SCENES[project.variant];
            const bg =
              project.theme === "ink"
                ? "bg-[var(--project-ink-bg)]"
                : "bg-[var(--project-forest-bg)]";

            return (
              <div key={project.id} className="flex flex-col">
                <div
                  ref={gridSlotRefs[i]}
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-[20px] md:rounded-[32px] ${bg}`}
                >
                  <Scene />
                </div>

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
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import type { Project, ProjectTag } from "@/data/projects";
import OrbitScene from "./OrbitScene";
import DeliveryScene from "./DeliveryScene";

const THEME_BG: Record<Project["theme"], string> = {
  ink: "bg-[var(--project-ink-bg)]",
  forest: "bg-[var(--project-forest-bg)]",
};

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

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-20 md:mb-28"
    >
      <div
        className={`relative h-[380px] overflow-hidden rounded-[28px] md:h-[520px] md:rounded-[36px] ${THEME_BG[project.theme]}`}
      >
        {project.variant === "orbit" ? <OrbitScene /> : <DeliveryScene />}
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
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
      </div>
    </motion.article>
  );
}

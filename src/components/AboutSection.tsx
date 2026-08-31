"use client";

import { motion } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const TECH_STACKS = [
  {
    label: "CLIENT-SIDE",
    bigLabel: "UI",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind", "Redux"],
  },
  {
    label: "SERVER-SIDE",
    bigLabel: "DB",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    label: "DEPLOYMENT",
    bigLabel: "OPS",
    skills: ["AWS", "Docker", "Git", "Nginx", "CI/CD"],
  },
] as const;

const EDUCATION = [
  {
    period: "2019 — 2023",
    degree: "BACHELOR OF TECHNOLOGY",
    field: "Computer Science & Engineering",
    description:
      "Specialized in full-stack architecture, distributed systems, and modern software engineering principles.",
  },
  {
    period: "2017 — 2019",
    degree: "HIGHER SECONDARY",
    field: "Science & Mathematics",
    description:
      "Foundational studies in Physics, Mathematics, and Computer Science.",
  },
] as const;

/* ─── Animation helpers ──────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.07 },
  }),
};

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-0">
      <span className="bg-foreground text-background text-[10px] font-mono font-semibold uppercase tracking-widest px-3 py-1.5">
        {children}
      </span>
      <div className="flex-1 h-px bg-foreground/20" />
    </div>
  );
}

function TechCard({
  stack,
  index,
}: {
  stack: (typeof TECH_STACKS)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative border-2 border-foreground bg-background p-6 shadow-[4px_4px_0px_0px_var(--foreground)]"
    >
      {/* category label */}
      <p className="mb-4 text-[10px] font-mono font-semibold uppercase tracking-widest text-muted">
        {stack.label}
      </p>

      {/* skill pills */}
      <div className="flex flex-wrap gap-2">
        {stack.skills.map((skill) => (
          <motion.span
            key={skill}
            variants={fadeUp}
            custom={index + 0.5}
            className="border border-foreground/30 px-3 py-1 text-xs font-mono text-foreground"
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* big background label */}
      <p className="mt-6 font-display text-5xl font-bold text-foreground/8 select-none">
        {stack.bigLabel}
      </p>
    </motion.div>
  );
}

function EducationCard({
  edu,
  index,
}: {
  edu: (typeof EDUCATION)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative border-2 border-foreground bg-background p-8 shadow-[4px_4px_0px_0px_var(--foreground)]"
    >
      {/* year badge */}
      <span className="inline-block border border-[var(--accent-mint)] text-[var(--accent-mint)] px-2 py-0.5 text-[10px] font-mono font-semibold tracking-widest mb-4">
        {edu.period}
      </span>

      {/* degree */}
      <h3 className="font-display text-2xl font-black leading-tight uppercase tracking-tight mb-1">
        {edu.degree.split(" ").map((word, wi) =>
          wi === edu.degree.split(" ").length - 1 ? (
            <mark
              key={wi}
              className="bg-foreground text-background not-italic px-1"
            >
              {word}
            </mark>
          ) : (
            <span key={wi}>{word} </span>
          )
        )}
      </h3>

      {/* field */}
      <p className="mt-2 font-sans text-sm italic text-muted">{edu.field}</p>

      {/* divider */}
      <div className="my-4 h-px bg-foreground/15" />

      {/* description */}
      <p className="font-sans text-sm leading-relaxed text-foreground/80">
        {edu.description}
      </p>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function AboutSection() {
  return (
    <section id="about" className="bg-background pb-0 pt-24 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">

        {/* ── Technical Arsenal ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Technical Arsenal</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-20">
          {TECH_STACKS.map((stack, i) => (
            <TechCard key={stack.bigLabel} stack={stack} index={i} />
          ))}
        </div>

        {/* ── Academic Foundation ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Academic Foundation</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-20">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={edu.period} edu={edu} index={i} />
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border-2 border-foreground bg-[var(--tag-green-bg)] shadow-[4px_4px_0px_0px_var(--foreground)] mb-24 flex flex-col gap-6 px-8 py-10 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 className="font-display text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl">
              Ready for the
              <br />
              Next Big Thing.
            </h2>
            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-mint)] animate-pulse" />
              <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-foreground/70">
                Currently open for roles
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-block border-2 border-foreground bg-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest text-background transition-transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            Hire Divy
          </a>
        </motion.div>

      </div>

      {/* ── Footer ── */}
      <footer className="border-t-2 border-foreground/15 bg-background py-6">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-12">
          {/* Logo mark */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground text-background text-xs font-bold">
              D
            </div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest">
              Divy / Engineer
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            {[
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "GitHub", href: "https://github.com/Divy1429" },
              { label: "X", href: "https://x.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold uppercase tracking-widest text-foreground/60 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">
            ©2024 · Divy Patel · All rights reserved
          </p>
        </div>
      </footer>
    </section>
  );
}

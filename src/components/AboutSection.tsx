"use client";

import { motion } from "framer-motion";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const TECH_STACKS = [
  {
    label: "CLIENT-SIDE",
    bigLabel: "UI",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "Redux"],
  },
  {
    label: "SERVER-SIDE",
    bigLabel: "API",
    skills: ["Node.js", "Express.js", "MongoDB", "Redis", "Socket.IO", "Mongoose"],
  },
  {
    label: "TOOLS & DEPLOY",
    bigLabel: "OPS",
    skills: ["Git", "GitHub", "Vercel", "MongoDB Atlas", "Netlify", "Cloudinary"],
  },
] as const;

const EDUCATION = [
  {
    period: "2022 — 2026 · SPI: 8.00",
    degree: "B.E. INFORMATION TECHNOLOGY",
    field: "LDRP Institute of Technology and Research, Gandhinagar, Gujarat",
    description:
      "Specialized in Full Stack Web Development (MERN), RESTful API architecture, real-time WebSocket systems, and database engineering.",
  },
  {
    period: "2020 — 2022",
    degree: "HIGHER SECONDARY",
    field: "Science & Mathematics Stream",
    description:
      "Core studies in Mathematics, Physics, and foundational Computer Science principles.",
  },
] as const;

/* ─── Animation helpers ──────────────────────────────────────────────────── */

/** Staggered fade-up for cards — driven via `custom` index */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: "easeOut" as const, delay: i * 0.2 },
  }),
};

/** Individual skill pill stagger inside each card */
const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: 0.5 + i * 0.1 },
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
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      /* Hover: lift up, shadow grows */
      whileHover={{
        y: -6,
        boxShadow: "8px 8px 0px 0px var(--foreground)",
        transition: { duration: 0.35, ease: "easeOut" },
      }}
      className="relative border-2 border-foreground bg-background p-6 shadow-[4px_4px_0px_0px_var(--foreground)] cursor-default"
    >
      {/* category label */}
      <p className="mb-4 text-[10px] font-mono font-semibold uppercase tracking-widest text-muted">
        {stack.label}
      </p>

      {/* skill pills — each staggers in individually */}
      <div className="flex flex-wrap gap-2">
        {stack.skills.map((skill, si) => (
          <motion.span
            key={skill}
            variants={pillVariants}
            custom={si}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            /* Hover: fill background, invert colours */
            whileHover={{
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
              borderColor: "var(--foreground)",
              scale: 1.05,
              transition: { duration: 0.28 },
            }}
            className="border border-foreground/30 px-3 py-1 text-xs font-mono text-foreground cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* big background watermark — reveals slightly on hover */}
      <motion.p
        className="mt-6 font-display text-5xl font-bold select-none"
        initial={{ opacity: 0.08 }}
        whileHover={{ opacity: 0.18, transition: { duration: 0.45 } }}
      >
        {stack.bigLabel}
      </motion.p>
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
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      /* Hover: lift + shadow grows + subtle border brightens */
      whileHover={{
        y: -6,
        boxShadow: "8px 8px 0px 0px var(--foreground)",
        transition: { duration: 0.35, ease: "easeOut" },
      }}
      className="relative border-2 border-foreground bg-background p-8 shadow-[4px_4px_0px_0px_var(--foreground)] cursor-default"
    >
      {/* year badge — mint colour pulses subtly on hover */}
      <motion.span
        whileHover={{ scale: 1.06, transition: { duration: 0.3 } }}
        className="inline-block border border-[var(--accent-mint)] text-[var(--accent-mint)] px-2 py-0.5 text-[10px] font-mono font-semibold tracking-widest mb-4"
      >
        {edu.period}
      </motion.span>

      {/* degree */}
      <h3 className="font-display text-2xl font-black leading-tight uppercase tracking-tight mb-1">
        {edu.degree.split(" ").map((word, wi) =>
          wi === edu.degree.split(" ").length - 1 ? (
            <mark key={wi} className="bg-foreground text-background not-italic px-1">
              {word}
            </mark>
          ) : (
            <span key={wi}>{word} </span>
          )
        )}
      </h3>

      {/* field */}
      <p className="mt-2 font-sans text-sm italic text-muted">{edu.field}</p>

      {/* divider — expands from left on scroll entry */}
      <motion.div
        className="my-4 h-px bg-foreground/15 origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.5 + index * 0.15 }}
      />

      {/* description */}
      <motion.p
        className="font-sans text-sm leading-relaxed text-foreground/80"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 + index * 0.15 }}
      >
        {edu.description}
      </motion.p>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export default function AboutSection() {
  return (
    <section id="about" className="bg-background pb-24 pt-24 md:pt-32">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={edu.period} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

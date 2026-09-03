"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* ─── Contact details ──────────────────────────────────────────────────────
   Placeholders — swap EMAIL and the LinkedIn/X hrefs for the real ones.
   GitHub carries over from the link already used elsewhere in the site.
──────────────────────────────────────────────────────────────────────────── */
const EMAIL = "hello@divy.dev";
const SOCIALS = [
  { label: "in", name: "LinkedIn", href: "https://linkedin.com" },
  { label: "gh", name: "GitHub", href: "https://github.com/Divy1429" },
  { label: "x", name: "X", href: "https://x.com" },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-0">
      <span className="bg-foreground text-background px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest">
        {children}
      </span>
      <div className="h-px flex-1 bg-foreground/20" />
    </div>
  );
}

/** Dashed-perforation "stamp" pinned to the postcard's corner. */
function StampGraphic() {
  return (
    <div className="absolute -right-2 -top-3 flex h-16 w-14 rotate-6 flex-col items-center justify-center gap-1 border-2 border-dashed border-foreground/50 bg-[var(--tag-green-bg)] shadow-[2px_2px_0px_0px_var(--foreground)] md:-right-3 md:-top-4 md:h-20 md:w-16">
      <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-[var(--tag-green-fg)]">
        Air&nbsp;Mail
      </span>
      <span className="text-lg leading-none">✉</span>
      <span className="font-mono text-[7px] uppercase tracking-widest text-foreground/40">
        Divy Co.
      </span>
    </div>
  );
}

/** Rotated ink-stamp badge — "postmarked" onto the card, like the topographic
 *  map trick in ExperienceSection: mix-blend-multiply reads as pressed ink. */
function Postmark() {
  return (
    <div className="pointer-events-none absolute -bottom-4 -left-4 flex h-20 w-20 rotate-[-14deg] flex-col items-center justify-center rounded-full border-2 border-[var(--accent-mint)] text-center opacity-70 mix-blend-multiply md:-bottom-6 md:-left-6 md:h-28 md:w-28">
      <div className="absolute inset-1.5 rounded-full border border-dashed border-[var(--accent-mint)]" />
      <span className="font-mono text-[8px] font-bold uppercase tracking-widest text-[var(--accent-mint)]">
        Status
      </span>
      <span className="font-display text-[11px] font-black uppercase leading-tight text-[var(--accent-mint)]">
        Open to
        <br />
        Work
      </span>
    </div>
  );
}

function Postcard() {
  const [copied, setCopied] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 15 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 15 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(py * -10);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the mailto link below still works.
    }
  }

  return (
    <div style={{ perspective: 1200 }} className="relative">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springX, rotateY: springY }}
        initial={{ opacity: 0, y: 30, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative border-2 border-foreground bg-[#F3ECD9] p-8 shadow-[8px_8px_0px_0px_var(--foreground)] md:p-10"
      >
        <StampGraphic />
        <Postmark />

        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-foreground/50">
          To: Divy Patel — Gandhinagar, GJ
        </p>

        <h3 className="mt-4 font-display text-2xl font-black uppercase leading-tight tracking-tight md:text-3xl">
          Got a project
          <br />
          worth building?
        </h3>

        <button
          type="button"
          onClick={handleCopy}
          className="group mt-6 flex w-full items-center justify-between gap-3 border-2 border-foreground bg-background px-4 py-3.5 text-left transition-transform hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--foreground)]"
        >
          <span className="truncate font-mono text-sm font-semibold text-foreground md:text-base">
            {EMAIL}
          </span>
          <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground/50 group-hover:text-foreground">
            {copied ? "Copied ✓" : "Copy"}
          </span>
        </button>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-3 inline-block font-sans text-sm text-foreground/60 underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-foreground"
        >
          or open your mail app →
        </a>

        <div className="mt-8 flex flex-col-reverse items-start gap-4 border-t border-dashed border-foreground/25 pt-5 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex gap-2 pl-14 md:pl-0">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-9 w-9 items-center justify-center border-2 border-foreground bg-background font-mono text-[10px] font-bold uppercase text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {s.label}
              </a>
            ))}
          </div>
          <span className="font-serif text-xs italic text-foreground/50">
            usually replies within a day
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-background pb-0 pt-24 md:pt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel>Get In Touch</SectionLabel>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-12 pb-24 md:mb-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.95] tracking-tight">
              Let&apos;s build
              <br />
              something{" "}
              <mark className="bg-foreground px-2 text-background not-italic">
                great
              </mark>
              .
            </h2>
            <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-foreground/70">
              Open to full-time roles, freelance builds, and interesting
              problems. Tell me what you&apos;re working on — I read every
              message myself, no forms, no gatekeeping.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] tracking-wider text-foreground/60">
                Currently open for roles
              </span>
            </div>
          </motion.div>

          <Postcard />
        </div>
      </div>

      <footer className="border-t-2 border-foreground/15 bg-background py-6">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-4 px-6 md:flex-row md:items-center md:justify-between md:px-12">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground text-xs font-bold text-background">
              D
            </div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest">
              Divy / Engineer
            </span>
          </div>

          <div className="flex gap-8">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground/60 transition-colors hover:text-foreground"
              >
                {s.name}
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            ©2026 · Divy Patel · Built with Next.js &amp; Framer Motion
          </p>
        </div>
      </footer>
    </section>
  );
}

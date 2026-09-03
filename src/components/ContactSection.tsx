"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

/* ─── Icons ─────────────────────────────────────────────────────────────── */
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

/* ─── Contact details ─────────────────────────────────────────────────────── */
const EMAIL = "hello@divy.dev";
const SOCIALS = [
  { label: "in", name: "LinkedIn", href: "https://linkedin.com/in/divy1429", Icon: LinkedInIcon },
  { label: "gh", name: "GitHub", href: "https://github.com/Divy1429", Icon: GitHubIcon },
  { label: "x", name: "X / Twitter", href: "https://x.com", Icon: XIcon },
] as const;

/* ─── Toast ───────────────────────────────────────────────────────────────── */
function Toast({ message, type }: { message: string; type: "success" | "error" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 border-2 px-5 py-3.5 shadow-[4px_4px_0px_0px_var(--foreground)] ${
        type === "success"
          ? "border-foreground bg-[var(--tag-green-bg)] text-[var(--tag-green-fg)]"
          : "border-foreground bg-red-50 text-red-700"
      }`}
    >
      <span className="text-lg">{type === "success" ? "✓" : "✕"}</span>
      <span className="font-mono text-xs font-bold uppercase tracking-widest">{message}</span>
    </motion.div>
  );
}

/* ─── Section label ───────────────────────────────────────────────────────── */
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

/* ─── Stamp graphic ───────────────────────────────────────────────────────── */
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

/* ─── Postmark ────────────────────────────────────────────────────────────── */
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

/* ─── Postcard ────────────────────────────────────────────────────────────── */
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
          className="group mt-6 flex w-full items-center justify-between gap-3 border-2 border-foreground bg-background px-4 py-3.5 text-left transition-all hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--foreground)]"
        >
          <span className="truncate font-mono text-sm font-semibold text-foreground md:text-base">
            {EMAIL}
          </span>
          <motion.span
            key={copied ? "copied" : "copy"}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-foreground/50 group-hover:text-foreground"
          >
            {copied ? "Copied ✓" : "Copy"}
          </motion.span>
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
                title={s.name}
                className="flex h-9 w-9 items-center justify-center border-2 border-foreground bg-background text-foreground transition-all hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]"
              >
                <s.Icon />
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

/* ─── Floating-label form field ───────────────────────────────────────────── */
function FormField({
  label,
  id,
  type = "text",
  textarea = false,
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  const sharedProps = {
    id,
    value,
    required,
    placeholder: focused || hasValue ? placeholder : "",
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    className: `w-full border-2 border-foreground/25 bg-background/60 px-4 pt-6 pb-2.5 font-sans text-sm text-foreground outline-none backdrop-blur-sm transition-all placeholder:text-foreground/30 focus:border-foreground focus:bg-background focus:shadow-[3px_3px_0px_0px_var(--foreground)]${
      textarea ? " min-h-[120px] resize-none" : ""
    }`,
  };

  return (
    <div className="relative">
      <motion.label
        htmlFor={id}
        animate={
          focused || hasValue
            ? { y: -18, scale: 0.78, opacity: 1 }
            : { y: 0, scale: 1, opacity: 0.5 }
        }
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="pointer-events-none absolute left-4 top-4 origin-left font-mono text-xs font-bold uppercase tracking-widest text-foreground"
      >
        {label}
        {required && <span className="ml-0.5 text-[var(--accent-mint)]">*</span>}
      </motion.label>
      {textarea ? (
        <textarea {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
    </div>
  );
}

/* ─── Contact form ────────────────────────────────────────────────────────── */
function ContactForm({
  onToast,
}: {
  onToast: (msg: string, type: "success" | "error") => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async send — replace with your real API / Resend / Formspree call.
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setName("");
    setEmail("");
    setMessage("");
    onToast("Message sent — I'll be in touch soon!", "success");
  }

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
      className="flex flex-col gap-4"
      noValidate
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          label="Name"
          id="contact-name"
          value={name}
          onChange={setName}
          required
          placeholder="Your name"
        />
        <FormField
          label="Email"
          id="contact-email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          placeholder="you@example.com"
        />
      </div>
      <FormField
        label="Message"
        id="contact-message"
        textarea
        value={message}
        onChange={setMessage}
        required
        placeholder="Tell me about your project..."
      />

      <div className="flex items-center justify-between gap-4 pt-1">
        <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
          <span className="text-[var(--accent-mint)]">*</span> required
        </p>
        <motion.button
          type="submit"
          disabled={submitting}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="relative flex min-w-[160px] items-center justify-center gap-2 border-2 border-foreground bg-foreground px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-background shadow-[4px_4px_0px_0px_var(--accent-mint)] transition-all hover:shadow-[6px_6px_0px_0px_var(--accent-mint)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <AnimatePresence mode="wait">
            {submitting ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <span className="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-background border-t-transparent" />
                Sending…
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Send message →
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.form>
  );
}

/* ─── Decorative grid background ─────────────────────────────────────────── */
function GridTexture() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.035]"
      style={{
        backgroundImage:
          "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
  );
}

/* ─── Main export ─────────────────────────────────────────────────────────── */
export default function ContactSection() {
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);

  function showToast(msg: string, type: "success" | "error") {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }

  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-background pb-0 pt-24 md:pt-32">
        <GridTexture />

        <div className="relative mx-auto max-w-[1600px] px-6 md:px-12">
          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Get In Touch</SectionLabel>
          </motion.div>

          {/* ── Hero headline + availability badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
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
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <p className="max-w-md font-sans text-lg leading-relaxed text-foreground/70">
                Open to full-time roles, freelance builds, and interesting
                problems. Tell me what you&apos;re working on — I read every
                message myself, no forms, no gatekeeping.
              </p>
              <div className="flex items-center gap-2.5 border border-foreground/15 bg-[var(--tag-green-bg)] px-3.5 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[11px] font-semibold tracking-wider text-[var(--tag-green-fg)]">
                  Currently open for roles
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Two-column: form + postcard ── */}
          <div className="grid grid-cols-1 items-start gap-12 pb-24 lg:grid-cols-2 lg:gap-20">
            {/* Left — contact form */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-6 font-mono text-[11px] uppercase tracking-widest text-foreground/50"
              >
                Drop me a line
              </motion.p>
              <ContactForm onToast={showToast} />
            </div>

            {/* Right — postcard */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="mb-6 font-mono text-[11px] uppercase tracking-widest text-foreground/50"
              >
                Or reach out directly
              </motion.p>
              <Postcard />
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="border-t-2 border-foreground/15 bg-background py-7">
          <div className="mx-auto flex max-w-[1600px] flex-col items-start gap-5 px-6 md:flex-row md:items-center md:justify-between md:gap-0 md:px-12">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center border-2 border-foreground bg-foreground text-xs font-bold text-background">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest">
                  Divy Patel
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/40">
                  Full-Stack Engineer
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-foreground/50 transition-colors hover:text-foreground"
                >
                  <s.Icon />
                  <span className="hidden sm:inline">{s.name}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
              ©2026 · Divy Patel · Built with Next.js &amp; Framer Motion
            </p>
          </div>
        </footer>
      </section>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && <Toast key="toast" message={toast.msg} type={toast.type} />}
      </AnimatePresence>
    </>
  );
}

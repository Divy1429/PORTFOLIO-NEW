"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const RESUME_EMBED =
  "https://docs.google.com/document/d/14lT-Vhg5Ebk_OrbRdeny_iTnJZiN4itTYyAmV_1KxT8/preview";

const RESUME_OPEN =
  "https://docs.google.com/document/d/14lT-Vhg5Ebk_OrbRdeny_iTnJZiN4itTYyAmV_1KxT8/edit?tab=t.0";

const RESUME_PDF =
  "https://docs.google.com/document/d/14lT-Vhg5Ebk_OrbRdeny_iTnJZiN4itTYyAmV_1KxT8/export?format=pdf";

export default function ResumeView() {
  const [layoutMode, setLayoutMode] = useState<"sheet" | "expand">("sheet");
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="relative flex h-screen flex-col overflow-hidden bg-[#f5f2eb] text-[#1c1917] selection:bg-[#1c1917] selection:text-[#f5f2eb]">
      {/* ── Background Ambient Texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#1c1917 1px, transparent 1px), linear-gradient(90deg, #1c1917 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Soft radial glow centered behind document */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,transparent_75%)]"
      />

      {/* ── Refined Top Header ── */}
      <header className="relative z-20 shrink-0 border-b border-[#1c1917]/10 bg-[#f5f2eb]/85 px-4 py-2.5 backdrop-blur-md sm:px-6">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3">
          {/* Back link */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-lg border border-[#1c1917]/15 bg-white/70 px-3 py-1.5 font-mono text-xs font-medium tracking-wide text-[#1c1917] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:border-[#1c1917] hover:bg-white hover:shadow-sm"
          >
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
              aria-hidden
            >
              <path d="M8 1L1 8l7 7 1.4-1.4L3.8 9H15V7H3.8l5.6-5.6L8 1z" />
            </svg>
            <span>Portfolio</span>
          </Link>

          {/* Document metadata badge */}
          <div className="hidden items-center gap-2.5 rounded-full border border-[#1c1917]/10 bg-white/60 px-4 py-1 sm:flex shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-sans text-xs font-semibold text-[#1c1917]">
              Patel Divy Ramchandrabhai
            </span>
            <span className="text-[#1c1917]/25">·</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#1c1917]/60">
              Resume / CV
            </span>
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            {/* View width toggle */}
            <div className="hidden items-center rounded-lg border border-[#1c1917]/15 bg-white/60 p-0.5 md:flex">
              <button
                type="button"
                onClick={() => setLayoutMode("sheet")}
                className={`rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all ${
                  layoutMode === "sheet"
                    ? "bg-[#1c1917] text-white shadow-sm"
                    : "text-[#1c1917]/60 hover:text-[#1c1917]"
                }`}
              >
                Page
              </button>
              <button
                type="button"
                onClick={() => setLayoutMode("expand")}
                className={`rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-all ${
                  layoutMode === "expand"
                    ? "bg-[#1c1917] text-white shadow-sm"
                    : "text-[#1c1917]/60 hover:text-[#1c1917]"
                }`}
              >
                Full
              </button>
            </div>

            {/* Print button */}
            <button
              type="button"
              onClick={handlePrint}
              title="Print document"
              className="hidden h-8 w-8 items-center justify-center rounded-lg border border-[#1c1917]/15 bg-white/70 text-[#1c1917]/70 transition-all hover:border-[#1c1917] hover:bg-white hover:text-[#1c1917] sm:flex"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
                <path d="M4 1h8v3H4V1zm8 10v4H4v-4h8zm2-5.5a1 1 0 100-2 1 1 0 000 2zM3 5h10a2 2 0 012 2v4a1 1 0 01-1 1h-1v-2H3v2H2a1 1 0 01-1-1V7a2 2 0 012-2z" />
              </svg>
            </button>

            {/* Copy share link */}
            <button
              type="button"
              onClick={handleCopy}
              title="Copy link to resume"
              className="hidden h-8 w-8 items-center justify-center rounded-lg border border-[#1c1917]/15 bg-white/70 text-[#1c1917]/70 transition-all hover:border-[#1c1917] hover:bg-white hover:text-[#1c1917] sm:flex"
            >
              {copied ? (
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-emerald-600">
                  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                  <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L7.336 10.994a1.5 1.5 0 0 1-2.122-2.122l1.372-1.372a4 4 0 0 0-.871-.958z" />
                  <path d="M10.243 9.458l1.371-1.372a3 3 0 1 0-4.243-4.243L5.543 5.672a3 3 0 0 0 .828 4.828l.586-.586a1 1 0 0 0 .154-.199 2 2 0 0 1-.861-3.337l1.371-1.372a1.5 1.5 0 1 1 2.122 2.122L8.371 8.5a4 4 0 0 0 .872.958z" />
                </svg>
              )}
            </button>

            {/* Download PDF button */}
            <a
              href={RESUME_PDF}
              download="Patel_Divy_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#1c1917]/15 bg-white px-3 py-1.5 font-mono text-xs font-medium text-[#1c1917] shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:border-[#1c1917] hover:shadow"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-[#1c1917]/70" aria-hidden>
                <path d="M8 12L3 7h3V1h4v6h3L8 12zM1 14h14v1.5H1V14z" />
              </svg>
              <span>Download PDF</span>
            </a>

            {/* Open Google Doc external button */}
            <a
              href={RESUME_OPEN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1c1917] px-3.5 py-1.5 font-mono text-xs font-medium text-white shadow-sm transition-all hover:bg-black hover:shadow active:scale-[0.98]"
            >
              <span>Open in Docs</span>
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 text-white/70" aria-hidden>
                <path d="M11 1h4v4h-1.5V3.5l-8 8-1-1 8-8H11V1zM2 3h5v1.5H2.5v9h9V9H13v5a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* ── Document Stage / Workspace Canvas ── */}
      <main className="relative z-10 flex flex-1 items-center justify-center overflow-hidden p-2 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={`relative h-full w-full overflow-hidden bg-white transition-all duration-300 ${
            layoutMode === "sheet"
              ? "max-w-[920px] rounded-xl border border-black/[0.08] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.03),0_12px_24px_-4px_rgba(0,0,0,0.08),0_24px_48px_-12px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.03]"
              : "max-w-none rounded-none border-none shadow-none"
          }`}
        >
          {/* Authentic Document Embed */}
          <iframe
            src={RESUME_EMBED}
            className="h-full w-full border-none bg-white"
            title="Patel Divy Ramchandrabhai — Resume"
            allow="autoplay"
          />
        </motion.div>
      </main>

      {/* ── Copied Toast Notification ── */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="pointer-events-none fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-[#1c1917] px-3.5 py-2 font-mono text-xs font-medium text-white shadow-lg"
          >
            <span className="text-emerald-400">✓</span>
            <span>Link copied to clipboard</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

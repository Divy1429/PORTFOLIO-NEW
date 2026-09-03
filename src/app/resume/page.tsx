import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Divy Patel",
  description: "Full Stack Web Developer resume of Divy Patel.",
};

const RESUME_EMBED =
  "https://docs.google.com/document/d/14lT-Vhg5Ebk_OrbRdeny_iTnJZiN4itTYyAmV_1KxT8/preview";

const RESUME_OPEN =
  "https://docs.google.com/document/d/14lT-Vhg5Ebk_OrbRdeny_iTnJZiN4itTYyAmV_1KxT8/edit?tab=t.0";

export default function ResumePage() {
  return (
    <div className="flex h-screen flex-col bg-[#f8f4ec]">
      {/* Slim top bar */}
      <header className="flex h-12 shrink-0 items-center justify-between border-b-2 border-foreground/10 bg-[#f8f4ec] px-5">
        <a
          href="/"
          className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-foreground/70 transition-colors hover:text-foreground"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
            <path d="M8 1L1 8l7 7 1.4-1.4L3.8 9H15V7H3.8l5.6-5.6L8 1z" />
          </svg>
          Back to Portfolio
        </a>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
            Divy Patel · Resume
          </span>
          <a
            href={RESUME_OPEN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border-2 border-foreground bg-foreground px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-background transition-all hover:-translate-y-px hover:shadow-[2px_2px_0px_0px_var(--accent-mint,#37b26c)]"
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden>
              <path d="M11 1h4v4h-1.5V3.5l-8 8-1-1 8-8H11V1zM2 3h5v1.5H2.5v9h9V9H13v5a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z" />
            </svg>
            Open in Google Docs
          </a>
        </div>
      </header>

      {/* Full-height Google Doc embed */}
      <iframe
        src={RESUME_EMBED}
        className="flex-1 w-full border-none"
        title="Divy Patel — Resume"
        allow="autoplay"
      />
    </div>
  );
}

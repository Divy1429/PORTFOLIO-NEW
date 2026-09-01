"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { EXPERIENCES, ExperienceItem } from "@/data/experience";

/* ─── Skeuomorphic Clamps & Paper Clips ───────────────────────────────────── */

function BulldogClip() {
  return (
    <svg
      width="54"
      height="48"
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_6px_8px_rgba(0,0,0,0.4)]"
    >
      <defs>
        <linearGradient id="metal-silver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="25%" stopColor="#9ca3af" />
          <stop offset="50%" stopColor="#e5e7eb" />
          <stop offset="75%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
        <linearGradient id="chrome-shine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#d1d5db" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6b7280" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="hole-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#4b5563" />
        </radialGradient>
      </defs>
      {/* Upper Wire Ring */}
      <path
        d="M19 20V10C19 5.58 22.58 2 27 2C31.42 2 35 5.58 35 10V20"
        stroke="url(#metal-silver)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="27" cy="10" r="3" fill="url(#hole-shadow)" stroke="#4b5563" strokeWidth="0.8" />

      {/* Main Metal Clip Clamp Body */}
      <rect
        x="9"
        y="19"
        width="36"
        height="17"
        rx="3"
        fill="url(#metal-silver)"
        stroke="#374151"
        strokeWidth="1"
      />
      {/* Specular Highlight Strip */}
      <rect x="11" y="21" width="32" height="4" rx="1.5" fill="url(#chrome-shine)" />

      {/* Lower Clamp Jaw Lips */}
      <path
        d="M11 36L15 46H39L43 36H11Z"
        fill="url(#metal-silver)"
        stroke="#1f2937"
        strokeWidth="1"
      />
      <line x1="15" y1="41" x2="39" y2="41" stroke="#374151" strokeWidth="1.2" />
    </svg>
  );
}

function WirePaperClip() {
  return (
    <svg
      width="24"
      height="42"
      viewBox="0 0 24 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_3px_5px_rgba(0,0,0,0.35)]"
    >
      <defs>
        <linearGradient id="wire-silver" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#94a3b8" />
          <stop offset="80%" stopColor="#475569" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
      </defs>
      <path
        d="M8 12V31C8 35.4183 11.5817 39 16 39C20.4183 39 24 35.4183 24 31V7C24 3.68629 21.3137 1 18 1C14.6863 1 12 3.68629 12 7V29C12 30.6569 13.3431 32 15 32C16.6569 32 18 30.6569 18 29V12"
        stroke="url(#wire-silver)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MetalSliderFastener() {
  return (
    <div className="flex flex-col items-center justify-between h-20 w-3.5 bg-gradient-to-r from-gray-300 via-white to-gray-400 rounded-[2px] border border-gray-600 shadow-[2px_3px_6px_rgba(0,0,0,0.45)] py-1.5">
      <div className="w-2 h-2 rounded-full bg-gradient-to-b from-gray-600 to-gray-900 border border-gray-400 shadow-inner" />
      <div className="w-0.5 h-10 bg-gray-500 rounded-full" />
      <div className="w-2 h-2 rounded-full bg-gradient-to-b from-gray-600 to-gray-900 border border-gray-400 shadow-inner" />
    </div>
  );
}

function TopographicMapGraphic() {
  return (
    <svg
      width="240"
      height="200"
      viewBox="0 0 240 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-35 mix-blend-multiply"
    >
      <path
        d="M10 30C60 15 130 55 180 25C220 -5 250 40 260 70"
        stroke="#9a6e3a"
        strokeWidth="0.9"
        strokeDasharray="3 2"
      />
      <path
        d="M0 70C45 50 100 90 160 70C210 50 240 100 250 130"
        stroke="#b87a40"
        strokeWidth="0.9"
      />
      <path
        d="M30 115C75 95 135 135 195 105C240 80 265 145 280 175"
        stroke="#a8713a"
        strokeWidth="0.9"
      />
      <path
        d="M0 160C60 140 120 180 180 150C225 125 255 190 270 215"
        stroke="#b87a40"
        strokeWidth="0.9"
        strokeDasharray="4 3"
      />
      <line x1="120" y1="0" x2="120" y2="200" stroke="#b87a40" strokeWidth="0.6" strokeOpacity="0.3" />
      <line x1="0" y1="100" x2="240" y2="100" stroke="#b87a40" strokeWidth="0.6" strokeOpacity="0.3" />
    </svg>
  );
}

/* ─── Mockup Screen Views ─────────────────────────────────────────────────── */

function MockupScreen({ type }: { type: ExperienceItem["screenType"] }) {
  if (type === "codage") {
    return (
      <div className="w-full h-full bg-[#FCFCFA] rounded-md border border-neutral-300 p-2.5 flex flex-col justify-between font-mono text-[9px] text-neutral-800 shadow-xs">
        {/* Top App Bar */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-xs" />
            <span className="font-bold tracking-tight text-neutral-900 font-sans text-[10px]">Codage UI</span>
            <span className="text-[7.5px] bg-neutral-100 text-neutral-600 px-1 py-0.5 rounded border border-neutral-200">React & Tailwind</span>
          </div>
          <div className="flex items-center gap-2 text-[8px]">
            <span className="text-blue-700 font-semibold bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200/60">REST API Connected</span>
          </div>
        </div>

        {/* Dynamic Component System Card */}
        <div className="bg-white rounded border border-neutral-200/90 p-2 shadow-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[9px] text-neutral-800">Reusable Component Library</span>
            <span className="text-[8px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
              Auth Verified (JWT)
            </span>
          </div>
          <p className="text-[8.5px] text-neutral-600 leading-snug font-sans">
            Modular responsive pages with dynamic data integration and secure database authentication.
          </p>
          <div className="grid grid-cols-3 gap-1.5 pt-1 border-t border-neutral-100">
            <div className="bg-neutral-50 p-1 rounded text-center border border-neutral-100">
              <span className="block text-[7px] text-neutral-400">Framework</span>
              <span className="font-bold text-neutral-800 text-[8.5px]">React.js</span>
            </div>
            <div className="bg-neutral-50 p-1 rounded text-center border border-neutral-100">
              <span className="block text-[7px] text-neutral-400">Styling</span>
              <span className="font-bold text-blue-600 text-[8.5px]">Tailwind</span>
            </div>
            <div className="bg-neutral-50 p-1 rounded text-center border border-neutral-100">
              <span className="block text-[7px] text-neutral-400">Security</span>
              <span className="font-bold text-emerald-600 text-[8.5px]">Bcrypt/Auth</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Cognifyz Full Stack View
  return (
    <div className="w-full h-full bg-[#16161D] rounded-md border border-neutral-700 p-2 flex items-center justify-center gap-3 font-mono">
      {/* Full-Stack API Card 1 */}
      <div className="w-[48%] h-full bg-neutral-900 rounded-[8px] border border-neutral-700 p-1.5 flex flex-col justify-between shadow-md">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-1">
          <span className="text-[7.5px] font-bold text-blue-400 tracking-wider">FULL STACK</span>
          <span className="text-[6.5px] text-emerald-400 font-bold bg-emerald-950/60 px-1 rounded">OPTIMIZED</span>
        </div>
        <div className="bg-neutral-800/90 rounded p-1 text-[7.5px] text-neutral-300">
          <span className="text-blue-300 font-semibold block">⚡ Node & Express</span>
          <span className="text-[6.5px] text-neutral-400 block mt-0.5">REST API Architecture</span>
        </div>
        <div className="space-y-0.5">
          <div className="h-2.5 w-full bg-blue-950/70 rounded border border-blue-800/40 text-[6.5px] text-blue-200 px-1 flex items-center justify-between">
            <span>Database Query</span>
            <span className="text-emerald-400">Optimized</span>
          </div>
        </div>
        <div className="w-full py-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded text-[7px] font-bold text-white text-center shadow-xs">
          Scalable Web Solution
        </div>
      </div>

      {/* Real-World Project Card 2 */}
      <div className="w-[48%] h-full bg-neutral-900 rounded-[8px] border border-neutral-700 p-1.5 flex flex-col justify-between shadow-md">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-1">
          <span className="text-[7.5px] font-bold text-neutral-300">COLLABORATION</span>
          <span className="text-[6.5px] text-emerald-400 font-bold bg-emerald-950/60 px-1 rounded">ACTIVE</span>
        </div>
        <div className="bg-emerald-950/40 border border-emerald-800/40 rounded p-1 text-center">
          <span className="text-[7.5px] text-emerald-300 font-bold block">✓ Project Delivered</span>
          <span className="text-[6.5px] text-neutral-400 block">End-to-End MERN</span>
        </div>
        <div className="bg-neutral-800/80 rounded p-1 text-[6.5px] text-neutral-300 space-y-0.5">
          <div className="flex justify-between"><span>Integration:</span><span className="text-blue-300">Clean</span></div>
          <div className="flex justify-between text-emerald-400"><span>Security:</span><span>Verified</span></div>
        </div>
        <div className="w-full py-0.5 bg-neutral-800 rounded text-[6.5px] text-neutral-400 text-center font-mono">
          COGNIFYZ INTERNSHIP
        </div>
      </div>
    </div>
  );
}

/* ─── Single Tactile Folder Card ─────────────────────────────────────────── */

function FolderCard({
  item,
  index,
  scrollProgress,
}: {
  item: ExperienceItem;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  // Stacking scroll timelines for 2 cards:
  // Card 0: resting at center (always visible)
  // Card 1: slides up smoothly between 0.20 and 0.75
  const y = useTransform(
    scrollProgress,
    index === 0
      ? [0, 1]
      : [0.15, 0.70],
    index === 0 ? [0, 0] : [900, 0]
  );

  const scale = useTransform(
    scrollProgress,
    index === 0 ? [0, 1] : [0.20, 0.75],
    index === 0 ? [1, 1] : [0.96, 1]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        zIndex: 10 + index * 10,
      }}
      className="absolute inset-0 flex justify-center items-center pointer-events-auto"
    >
      {/* Manila Folder Container with Cutout Tab */}
      <div className="relative w-full max-w-[1340px] h-[590px] md:h-[630px]">
        {/* Trapezoidal Manila Folder Tab on Top */}
        <div
          style={{ backgroundColor: item.folderTheme.bg }}
          className={`absolute -top-7 ${item.tabPosition} h-8 px-8 rounded-t-lg border-t-2 border-x-2 border-[#333522] flex items-center justify-center shadow-md z-10`}
        >
          <span className="font-mono text-xs md:text-sm font-black tracking-widest text-[#181a0e] uppercase">
            {item.tabLabel}
          </span>
        </div>

        {/* Main Folder Body with Thick Tactile Paper Border and Shadows */}
        <div
          style={{ backgroundColor: item.folderTheme.bg }}
          className="relative w-full h-full rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.65),0_12px_24px_rgba(0,0,0,0.4)] border-2 border-[#333522] overflow-hidden select-none"
        >
          {/* Right Flap Dark Accent Edge to Simulate Manila File Depth */}
          <div
            style={{ backgroundColor: item.folderTheme.darkEdge }}
            className="absolute top-0 right-0 bottom-0 w-8 md:w-12 pointer-events-none opacity-40 border-l border-[#222415]"
          />

          {/* Topographic Map Graphic in Corner */}
          <div className="absolute right-2 bottom-0 pointer-events-none">
            <TopographicMapGraphic />
          </div>

          {/* 2-Page Scrapbook Spread */}
          <div className="relative z-10 w-full h-full flex flex-col md:flex-row gap-5 md:gap-7 items-stretch">
            
            {/* ── Left Page: Perforated Torn Spiral Notebook Sheet ── */}
            <div className="relative flex-1 bg-[#FDFCF7] rounded-xl border border-[#D8D2BC] shadow-[3px_6px_16px_rgba(0,0,0,0.22)] p-6 md:p-8 flex flex-col justify-between overflow-hidden">
              
              {/* Spiral Hole Strip with Realistic Depth */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#F5F2E6] border-r border-[#DED7C0] flex flex-col justify-between py-6 items-center pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3.5 h-3.5 rounded-full bg-[#242617] shadow-[inset_1px_2px_3px_rgba(0,0,0,0.8)] border border-[#E9E4D3]"
                  />
                ))}
              </div>

              {/* Top Row: Sticker Tag + Polaroid with Bulldog Clip */}
              <div className="relative pl-5">
                <div className="flex items-start justify-between">
                  {/* Adhesive tape label badge */}
                  <span className="inline-block bg-[#EFE9DA] border border-[#BCB199] px-3 py-1 text-[11px] font-mono font-bold tracking-widest text-[#4C4533] rounded shadow-xs rotate-[-2deg]">
                    _{item.stickerBadge?.toUpperCase() || "EXPERIENCE"}
                  </span>

                  {/* Polaroid Frame with Real Bulldog Clamp */}
                  <div className="relative -mt-3 -mr-1">
                    {/* Metal Bulldog Clip Centered on Photo Top */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30">
                      <BulldogClip />
                    </div>
                    {/* Polaroid Body */}
                    <div className="w-22 md:w-26 h-26 md:h-30 bg-[#FAF7EE] p-1.5 pb-5 rounded-xs border border-neutral-300 shadow-[3px_8px_14px_rgba(0,0,0,0.3)] rotate-[2.5deg]">
                      <div className="w-full h-full bg-[#202118] rounded-xs flex flex-col items-center justify-center text-white/50 font-mono text-[9px] tracking-widest">
                        <span className="text-emerald-400 text-[10px]">●</span>
                        <span>{item.brief.company.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bold Story Headline */}
                <h3 className="mt-2 font-display text-xl md:text-2xl font-bold tracking-tight leading-snug text-[#14120F] uppercase">
                  {item.title}
                </h3>

                {/* Narrative Paragraph */}
                <p className="mt-3 font-sans text-xs md:text-sm text-[#46443C] leading-relaxed">
                  {item.narrative.split(item.narrativeHighlight)[0]}
                  <strong className="font-bold text-[#14120F]">
                    {item.narrativeHighlight}
                  </strong>
                  {item.narrative.split(item.narrativeHighlight)[1] || ""}
                </p>
              </div>

              {/* Bottom Row: Manila Action Pill + Doc Ref */}
              <div className="pl-5 pt-3 flex items-center justify-between border-t border-[#EDE7D4]">
                <a
                  href={item.caseStudyLink}
                  className="inline-flex items-center gap-2 bg-[#C7BC84] hover:bg-[#BAAE74] text-[#222013] font-mono text-xs font-bold px-4 py-2 rounded border border-[#9E9156] transition-colors shadow-xs"
                >
                  <span>VIEW ROLE</span>
                  <span>↳</span>
                </a>
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
                  DOC. REF #{item.tagNumber}/02
                </span>
              </div>
            </div>

            {/* ── Right Page: Typewriter Tech Brief & Superimposed UI Mockup ── */}
            <div className="relative flex-1 bg-[#F7F4E7] rounded-xl border border-[#D5CDB0] shadow-[3px_6px_16px_rgba(0,0,0,0.22)] p-6 md:p-8 flex flex-col justify-between overflow-hidden">
              
              {/* Bookmark Ribbon with Wire Paperclip at Top Right */}
              <div className="absolute top-0 right-8 z-30 flex flex-col items-center">
                <div className="absolute -top-3 z-40">
                  <WirePaperClip />
                </div>
                <div
                  style={{ backgroundColor: item.tagBg }}
                  className="pt-3.5 pb-2 px-3 rounded-b text-white font-mono text-center shadow-md border-t border-black/20"
                >
                  <span className="block text-[7.5px] font-bold tracking-widest uppercase">
                    {item.tagCategory}
                  </span>
                  <span className="block text-sm font-black leading-none mt-0.5">
                    {item.tagNumber}
                  </span>
                </div>
              </div>

              {/* 4 Punched Binder Holes on Left Margin */}
              <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-around py-8 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-[#242617] shadow-[inset_1px_2px_3px_rgba(0,0,0,0.8)] border border-[#E9E4D3]"
                  />
                ))}
              </div>

              {/* Typewriter Metadata Brief Block */}
              <div className="pl-5 pr-16 font-mono text-[10px] md:text-[11px] text-[#3D3A2F] leading-tight space-y-1">
                <p className="font-bold text-[#14120F] tracking-wide">
                  COMPANY: {item.brief.company.toUpperCase()}
                </p>
                <p>Classification: {item.brief.classification}</p>
                <p>Role: {item.brief.role} · {item.brief.period}</p>
                <p>Status: {item.brief.status}</p>
                <div className="my-2 border-b border-dashed border-[#BDB496]" />
                <p className="font-bold text-[#14120F]">KEY CONTRIBUTIONS & IMPACT</p>
                <p className="text-[9px] md:text-[10px] text-[#4E4B3E] leading-relaxed line-clamp-3 md:line-clamp-4">
                  {item.brief.keyAchievements}
                </p>
              </div>

              {/* Floating UI Mockup Card with Metal Slide Binder */}
              <div className="relative mt-3 ml-5 bg-[#E8E3CF] p-2.5 rounded-lg border border-[#C6BCA0] shadow-[2px_8px_18px_rgba(0,0,0,0.22)]">
                {/* Silver Metal Sliding Fastener on Left Edge */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-30">
                  <MetalSliderFastener />
                </div>

                {/* Screen Preview Container */}
                <div className="h-34 md:h-38 w-full pl-2">
                  <MockupScreen type={item.screenType} />
                </div>

                {/* Handwritten Pen Ink Note */}
                <div className="mt-2 text-right pr-2">
                  <span className="font-serif italic text-xs md:text-sm text-[#262818] font-semibold tracking-wide">
                    &ldquo;{item.handwrittenNote}&rdquo;
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Experience Pinned Scroll Deck ─────────────────────────────────── */

export default function ExperienceSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative bg-background h-[220vh]"
    >
      {/* Sticky Stage Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-16 md:pt-20 pb-8 px-4 md:px-12 overflow-hidden">
        {/* Section Header */}
        <div className="mx-auto w-full max-w-[1600px] flex items-center justify-between z-40 border-b border-foreground/10 pb-4">
          <div className="flex items-baseline gap-4">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Experience
            </h2>
            <span className="hidden sm:inline-block font-mono text-xs uppercase tracking-widest text-muted">
              (Career History & Internships)
            </span>
          </div>
          <div className="font-mono text-xs md:text-sm text-foreground/70 tracking-widest">
            V1.0 · 23.01.2002
          </div>
        </div>

        {/* The 2 Pinned Stacking Folder Cards */}
        <div className="relative flex-1 w-full max-w-[1400px] mx-auto flex items-center justify-center my-2">
          {EXPERIENCES.map((item, index) => (
            <FolderCard
              key={item.id}
              item={item}
              index={index}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Bottom Scroll Indicator Helper */}
        <div className="mx-auto w-full max-w-[1600px] flex items-center justify-between text-[11px] font-mono text-muted uppercase tracking-widest z-40">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Scroll to browse roles & history</span>
          </div>
          <span>[ 01 / 02 ]</span>
        </div>
      </div>
    </section>
  );
}

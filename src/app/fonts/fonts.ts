import localFont from "next/font/local";

/**
 * Display face used for the giant hero headline and section titles.
 * Self-hosted from Fontshare (free for personal & commercial use).
 */
export const clashDisplay = localFont({
  variable: "--font-display",
  display: "swap",
  src: [
    { path: "./clash-display/200.woff2", weight: "200", style: "normal" },
    { path: "./clash-display/300.woff2", weight: "300", style: "normal" },
    { path: "./clash-display/400.woff2", weight: "400", style: "normal" },
    { path: "./clash-display/500.woff2", weight: "500", style: "normal" },
    { path: "./clash-display/600.woff2", weight: "600", style: "normal" },
    { path: "./clash-display/700.woff2", weight: "700", style: "normal" },
  ],
});

/**
 * Body / UI face used for nav, labels, copy and tags.
 * Self-hosted from Fontshare (free for personal & commercial use).
 */
export const generalSans = localFont({
  variable: "--font-sans",
  display: "swap",
  src: [
    { path: "./general-sans/200.woff2", weight: "200", style: "normal" },
    { path: "./general-sans/300.woff2", weight: "300", style: "normal" },
    { path: "./general-sans/400.woff2", weight: "400", style: "normal" },
    { path: "./general-sans/500.woff2", weight: "500", style: "normal" },
    { path: "./general-sans/600.woff2", weight: "600", style: "normal" },
    { path: "./general-sans/700.woff2", weight: "700", style: "normal" },
  ],
});

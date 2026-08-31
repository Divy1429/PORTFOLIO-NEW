# Ishita — Portfolio Clone

A Next.js + TypeScript recreation of the [wallofportfolios.in/portfolios/ishita-jain](https://www.wallofportfolios.in/portfolios/ishita-jain) design, built from screenshots as a reference clone. Priority was on matching the UI and animation system, not the exact photography.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.js`)
- **Framer Motion** for all scroll-linked and floating animations
- Self-hosted **Clash Display** + **General Sans** (Fontshare, free for commercial use) via `next/font/local`

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's implemented

- **Hero → nav logo morph**: the giant "Ishita" headline shrinks and fades as you scroll, while the compact logo and the four nav links (Work / About / Resume / Contact) animate from an edge-to-edge spread into a right-clustered nav — driven by `useScroll` + `useTransform` against a pinned (`sticky`) hero section.
- **My Work section**: two project cards (`src/data/projects.ts`) with themed rounded media panels — an orbiting-book-covers scene and a two-phone delivery scene — built from CSS/SVG placeholders with continuous floating/rotating decorative animation (`FloatingItem`), plus scroll-triggered fade-up reveals.
- Only **Hero** and **Work** are pixel-referenced (from user-provided screenshots). **About / Resume / Contact** are stubbed as nav anchors — not yet built.

## Known gotcha (read before touching animations)

In this exact dependency combo (**framer-motion 13.1.1** + **React 19.2** + **Next 16 Turbopack**), a `useTransform` MotionValue bound directly to `style={{ opacity }}` on a `motion.*` element **does not repaint** — it freezes at its initial value forever, while transform-based bindings (`scale`, `x`, `y`) and even other plain style props (e.g. `left`) update correctly. Root cause not isolated (looked like it could be a dual-package-instance issue from Turbopack's resolution, but wasn't confirmed).

**Workaround in place:** `src/lib/motion.ts` exports `useProgressNumber` (mirrors a MotionValue into React state via `useMotionValueEvent`) and `interpolate` (plain-JS clamped lerp). Every scroll-linked *opacity* value in `Hero.tsx` and `Nav.tsx` is computed this way instead of via `useTransform`. Keep doing this for any new opacity animation; `useTransform` is still fine for transform properties.

## Content

Kept as a faithful template clone (Ishita's name, Zomato/PagarBook case studies) per the reference design — swap in real content/images whenever you're ready to make it yours. Project screens/decorative art are stylized placeholders (no real app screenshots were available).

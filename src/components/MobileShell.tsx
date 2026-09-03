"use client";

import { projects, type ProjectTag } from "@/data/projects";
import OrbitScene from "./OrbitScene";
import DeliveryScene from "./DeliveryScene";
import ExperienceSection from "./ExperienceSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

const SCENES = { orbit: OrbitScene, delivery: DeliveryScene } as const;

const TAG_STYLE: Record<ProjectTag["tone"], string> = {
  blue: "bg-[var(--tag-blue-bg)] text-[var(--tag-blue-fg)]",
  green: "bg-[var(--tag-green-bg)] text-[var(--tag-green-fg)]",
};

function Tag({ tag }: { tag: ProjectTag }) {
  return (
    <span
      className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-normal ${TAG_STYLE[tag.tone]}`}
    >
      {tag.label}
    </span>
  );
}

export default function MobileShell() {
  return (
    <div className="bg-background text-foreground min-h-screen pb-16 pt-16">
      {/* Mobile Nav */}
      <header className="fixed inset-x-0 top-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-foreground/5">
        <nav className="flex items-center justify-between h-16 px-6">
          <span className="font-display text-xl font-bold leading-none tracking-tight">
            Divy
          </span>
          <div className="flex items-center gap-3.5">
            <a href="#work" className="text-xs font-medium text-foreground/80 hover:text-foreground">Work</a>
            <a href="#experience" className="text-xs font-medium text-foreground/80 hover:text-foreground">Experience</a>
            <a href="#about" className="text-xs font-medium text-foreground/80 hover:text-foreground">About</a>
            <a href="#contact" className="text-xs font-medium text-foreground/80 hover:text-foreground">Contact</a>
            <a
              href="/resume"
              className="border-2 border-foreground bg-foreground px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-background shadow-[2px_2px_0px_0px_var(--accent-mint)]"
            >
              CV
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Hero */}
      <section className="flex flex-col justify-center px-6 min-h-[75vh] py-12">
        <div className="flex flex-col max-w-full">
          <span className="font-sans text-xl font-light text-foreground/80 ml-0.5">
            Hello
          </span>
          <h1 className="whitespace-nowrap font-display text-[clamp(3.5rem,15vw,6rem)] font-bold leading-[0.85] tracking-[-0.02em] my-3">
            Divy
          </h1>
          <span className="font-sans text-xl font-light text-foreground/80 ml-0.5">
            Here
          </span>
          <p className="mt-8 text-left font-sans text-lg font-light leading-snug text-foreground max-w-md">
            I am a Full Stack Web Developer <br />with experience with 1+ year.
          </p>
        </div>
      </section>

      {/* Mobile Work Grid */}
      <section id="work" className="px-6 mt-8">
        <h2 className="mb-8 font-display text-2xl font-normal">
          My Work
        </h2>
        <div className="flex flex-col gap-12">
          {projects.map((project) => {
            const Scene = SCENES[project.variant];
            const bg =
              project.theme === "ink"
                ? "bg-[var(--project-ink-bg)]"
                : "bg-[var(--project-forest-bg)]";

            return (
              <div key={project.id} className="flex flex-col">
                <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-[20px] ${bg}`}>
                  <Scene />
                </div>
                <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-sans text-lg font-normal text-foreground">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs font-normal text-muted">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Tag key={tag.label} tag={tag} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mobile Experience Section */}
      <ExperienceSection />

      {/* Mobile About Section */}
      <AboutSection />

      {/* Mobile Contact Section */}
      <ContactSection />
    </div>
  );
}

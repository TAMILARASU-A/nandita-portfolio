import { about } from "@/lib/data";
import { SectionHeading, RevealOnScroll, Card } from "./ui/primitives";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-8 bg-surface">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading eyebrow="01 — About" title="About Me" />
        </RevealOnScroll>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-start">
          <RevealOnScroll delay={0.05}>
            <div className="space-y-5 text-[1.05rem] leading-relaxed text-slate-600 dark:text-slate-300">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <Card tab>
              <p className="eyebrow text-gold mb-2">Career Objective</p>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {about.objective}
              </p>
            </Card>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

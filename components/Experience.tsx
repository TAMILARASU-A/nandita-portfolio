import { experience } from "@/lib/data";
import { SectionHeading, RevealOnScroll, Card } from "./ui/primitives";
import { Briefcase, MapPin, CalendarDays, Check } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-8 bg-surface">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading eyebrow="03 — Experience" title="Professional Experience" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <Card tab className="max-w-3xl">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900/5 dark:bg-white/10 text-navy-800 dark:text-white">
                  <Briefcase size={17} />
                </span>
                <div>
                  <h3 className="font-display text-xl text-navy-900 dark:text-white font-medium">
                    {experience.role}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {experience.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={13} />
                {experience.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} />
                {experience.location}
              </span>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {experience.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                >
                  <Check size={14} className="mt-0.5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </RevealOnScroll>
      </div>
    </section>
  );
}

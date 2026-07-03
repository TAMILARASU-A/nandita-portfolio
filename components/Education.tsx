import { education } from "@/lib/data";
import { SectionHeading, RevealOnScroll } from "./ui/primitives";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 px-6 md:px-8">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading eyebrow="02 — Education" title="Academic Background" />
        </RevealOnScroll>

        <div className="relative border-l border-border ml-3 md:ml-4">
          {education.map((item, i) => (
            <RevealOnScroll key={item.degree} delay={i * 0.08}>
              <div className="relative pl-8 pb-10 last:pb-0">
                <span className="absolute -left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-navy-900 dark:bg-gold ring-4 ring-white dark:ring-bg">
                  <GraduationCap size={9} className="text-white" />
                </span>
                <p className="eyebrow text-slate-400 mb-1">{item.duration}</p>
                <h3 className="font-display text-xl text-navy-900 dark:text-white font-medium">
                  {item.degree}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-1">
                  {item.institution}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.detail}
                </p>
                <span className="inline-block mt-2 text-xs font-mono text-navy-700 dark:text-slate-200 bg-navy-900/5 dark:bg-white/5 rounded-md px-2 py-0.5">
                  {item.scoreLabel}: {item.score}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

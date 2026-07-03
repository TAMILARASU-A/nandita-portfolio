import { projects } from "@/lib/data";
import { SectionHeading, RevealOnScroll, Card, Badge } from "./ui/primitives";
import { FolderKanban } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-6 md:px-8">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading eyebrow="05 — Projects" title="Project Work" />
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.title} delay={i * 0.06}>
              <Card tab className="h-full flex flex-col">
                <div className="flex items-center gap-2.5 mb-3 text-navy-800 dark:text-white">
                  <FolderKanban size={16} />
                  <span className="eyebrow text-slate-400">{project.type}</span>
                </div>
                <h3 className="font-display text-lg text-navy-900 dark:text-white font-medium mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {project.summary}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {project.outcome}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

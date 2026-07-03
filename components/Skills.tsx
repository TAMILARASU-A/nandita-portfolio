import { skills } from "@/lib/data";
import { SectionHeading, RevealOnScroll, Card, Badge } from "./ui/primitives";
import { Users, BarChart3, Code2, Sparkles } from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  "Human Resources": <Users size={16} />,
  "Business Analytics": <BarChart3 size={16} />,
  Technical: <Code2 size={16} />,
  "Soft Skills": <Sparkles size={16} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-6 md:px-8">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading eyebrow="04 — Skills" title="Core Competencies" />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-5">
          {Object.entries(skills).map(([category, items], i) => (
            <RevealOnScroll key={category} delay={i * 0.06}>
              <Card>
                <div className="flex items-center gap-2.5 mb-4 text-navy-800 dark:text-white">
                  {ICONS[category]}
                  <h3 className="font-medium text-[0.95rem]">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
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

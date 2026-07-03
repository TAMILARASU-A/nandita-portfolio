import { contact } from "@/lib/data";
import { SectionHeading, RevealOnScroll, Card } from "./ui/primitives";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "View Profile", href: contact.linkedin },
  { icon: MapPin, label: "Location", value: contact.location, href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-8 bg-surface">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading eyebrow="08 — Contact" title="Let's Connect" align="center" />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl mx-auto">
          {CONTACT_ITEMS.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <Card className="h-full text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900/5 dark:bg-white/10 text-navy-800 dark:text-white mb-3">
                  <Icon size={16} />
                </span>
                <p className="text-xs text-slate-400 uppercase tracking-wide font-mono mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-navy-900 dark:text-white font-medium break-words">
                  {item.value}
                </p>
              </Card>
            );

            return (
              <RevealOnScroll key={item.label} delay={i * 0.05}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

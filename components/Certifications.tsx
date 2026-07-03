"use client";

import { useState } from "react";
import { certifications } from "@/lib/data";
import { SectionHeading, RevealOnScroll, Card } from "./ui/primitives";
import { X } from "lucide-react";

export default function Certifications() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 px-6 md:px-8 bg-surface">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading eyebrow="06 — Certifications" title="Certifications" />
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {certifications.map((cert, i) => (
            <RevealOnScroll key={cert.title} delay={i * 0.05}>
              <Card className="h-full">
                <img
                  src={`/${cert.fileName}`}
                  alt={cert.title}
                  className="w-full aspect-[4/3] object-cover rounded-lg cursor-pointer mb-4 hover:opacity-80 transition-opacity"
                  onClick={() => setSelected(cert.fileName)}
                />
                <h3 className="font-medium text-sm text-navy-900 dark:text-white leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {cert.issuer}
                </p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>

        {selected && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={`/${selected}`}
                alt="Full preview"
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-black transition-colors"
                aria-label="Close lightbox"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

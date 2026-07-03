"use client";

import { useState, useRef, useEffect } from "react";
import { resume } from "@/lib/data";
import { SectionHeading, RevealOnScroll } from "./ui/primitives";
import { Download, FileText, ChevronDown } from "lucide-react";

export default function Resume() {
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const resumeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resumeDropdownRef.current && !resumeDropdownRef.current.contains(e.target as Node)) {
        setResumeDropdownOpen(false);
      }
    };
    if (resumeDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [resumeDropdownOpen]);

  return (
    <section id="resume" className="py-20 md:py-28 px-6 md:px-8">
      <div className="mx-auto max-w-content">
        <RevealOnScroll>
          <SectionHeading eyebrow="07 — Resume" title="Resume" align="center" />
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="mx-auto max-w-xl rounded-2xl border border-border bg-surface p-10 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900/5 dark:bg-white/10 text-navy-800 dark:text-white mb-5">
              <FileText size={22} />
            </span>
            <h3 className="font-display text-lg text-navy-900 dark:text-white font-medium mb-2">
              {resume.fileName.replace(/-/g, " ").replace(".pdf", "")}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              {/* [Replace this preview block with an embedded PDF viewer once the resume file is added] */}
              Resume preview will appear here once the PDF is uploaded.
            </p>
            <div className="relative" ref={resumeDropdownRef}>
              <button
                onClick={() => setResumeDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full bg-navy-900 dark:bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-navy-800 dark:hover:bg-gold-light transition-colors"
              >
                <Download size={15} />
                Download Resume
                <ChevronDown size={14} className={`transition-transform ${resumeDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {resumeDropdownOpen && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-xl border border-border bg-white dark:bg-navy-950 shadow-card overflow-hidden">
                  <a
                    href={resume.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <FileText size={14} />
                    View Resume
                  </a>
                  <a
                    href={resume.fileUrl}
                    download={resume.fileName}
                    onClick={() => setResumeDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-t border-border"
                  >
                    <Download size={14} />
                    Download Resume
                  </a>
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

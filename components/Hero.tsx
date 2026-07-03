"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, CircleDot, Download, ArrowRight, ChevronDown, FileText } from "lucide-react";
import { profile, resume } from "@/lib/data";

export default function Hero() {
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
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-content grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow text-gold mb-4">{profile.status} · {profile.location}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] font-medium text-navy-900 dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium">
            {profile.headline}
          </p>
          <p className="mt-6 text-base md:text-[1.05rem] leading-relaxed text-slate-500 dark:text-slate-400 max-w-xl">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 dark:bg-gold px-5 py-3 text-sm font-medium text-white hover:bg-navy-800 dark:hover:bg-gold-light transition-colors"
            >
              Get in Touch
              <ArrowRight size={15} />
            </a>
            <div className="relative" ref={resumeDropdownRef}>
              <button
                onClick={() => setResumeDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 dark:border-white/20 px-5 py-3 text-sm font-medium text-navy-900 dark:text-white hover:border-navy-900/40 dark:hover:border-white/40 transition-colors"
              >
                <Download size={15} />
                Download Resume
                <ChevronDown size={14} className={`transition-transform ${resumeDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {resumeDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-border bg-white dark:bg-navy-950 shadow-card overflow-hidden z-50">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="record-tab pl-7 rounded-2xl border border-border bg-white dark:bg-surface shadow-card p-7">
            <div className="flex items-center justify-between mb-6">
              <span className="eyebrow text-slate-400">Profile Summary</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-900/5 dark:bg-white/10 px-2.5 py-1 text-[11px] font-medium text-navy-800 dark:text-slate-100">
                <CircleDot size={10} className="text-gold" />
                {profile.status}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-400 font-mono mb-1">
                  Name
                </p>
                <p className="text-navy-900 dark:text-white font-medium">
                  {profile.name}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wide text-slate-400 font-mono mb-1">
                  Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {profile.roles.slice(0, 4).map((role) => (
                    <span
                      key={role}
                      className="rounded-md bg-slate-50 dark:bg-white/5 px-2.5 py-1 text-xs text-navy-700 dark:text-slate-200"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-border text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={14} />
                {profile.location}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

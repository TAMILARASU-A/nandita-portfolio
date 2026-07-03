"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, Download, ChevronDown, FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile, resume } from "@/lib/data";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  const [mobileResumeDropdownOpen, setMobileResumeDropdownOpen] = useState(false);
  const resumeDropdownRef = useRef<HTMLDivElement>(null);
  const mobileResumeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileResumeDropdownRef.current && !mobileResumeDropdownRef.current.contains(e.target as Node)) {
        setMobileResumeDropdownOpen(false);
      }
    };
    if (mobileResumeDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileResumeDropdownOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? "bg-white/85 dark:bg-navy-950/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-content px-6 md:px-8 flex items-center justify-between h-16">
        <a
          href="#top"
          className="font-display text-lg font-medium text-navy-900 dark:text-white tracking-tight"
        >
          {profile.name}
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <div className="relative" ref={resumeDropdownRef}>
            <button
              onClick={() => setResumeDropdownOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 dark:bg-white px-4 py-2 text-sm font-medium text-white dark:text-navy-900 hover:bg-navy-800 dark:hover:bg-slate-100 transition-colors"
            >
              Resume
              <ChevronDown size={14} className={`transition-transform ${resumeDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {resumeDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-border bg-white dark:bg-navy-950 shadow-card overflow-hidden">
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

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-navy-900 dark:text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-white dark:bg-navy-950 border-t border-border px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-600 dark:text-slate-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <div className="relative" ref={mobileResumeDropdownRef}>
                <button
                  onClick={() => setMobileResumeDropdownOpen((prev) => !prev)}
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 w-full"
                >
                  Resume
                  <ChevronDown size={14} className={`transition-transform ${mobileResumeDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileResumeDropdownOpen && (
                  <div className="mt-2 rounded-xl border border-border bg-white dark:bg-navy-900 shadow-card overflow-hidden">
                    <a
                      href={resume.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setMobileResumeDropdownOpen(false);
                        setOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                    >
                      <FileText size={14} />
                      View Resume
                    </a>
                    <a
                      href={resume.fileUrl}
                      download={resume.fileName}
                      onClick={() => {
                        setMobileResumeDropdownOpen(false);
                        setOpen(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-t border-border"
                    >
                      <Download size={14} />
                      Download Resume
                    </a>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

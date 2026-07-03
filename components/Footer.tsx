"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 md:px-8 py-8">
      <div className="mx-auto max-w-content flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>Designed and Developed by Tamilarasu A</p>
        <a
          href="#top"
          aria-label="Back to top"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-gold text-navy-800 dark:text-slate-100 transition-colors"
        >
          <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}

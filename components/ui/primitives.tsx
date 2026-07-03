"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-navy-900/10 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3 py-1 text-xs font-medium text-navy-800 dark:text-slate-100",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center")}>
      <p className="eyebrow text-gold mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl font-medium text-navy-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
}

export function RevealOnScroll({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Card({
  children,
  className,
  tab = false,
}: {
  children: React.ReactNode;
  className?: string;
  tab?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white dark:bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover",
        tab && "record-tab pl-7",
        className
      )}
    >
      {children}
    </div>
  );
}

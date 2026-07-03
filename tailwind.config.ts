import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        navy: {
          950: "#060E1C",
          900: "#0B1F3A",
          800: "#122A4B",
          700: "#1E3A5F",
          600: "#2A4D77",
          500: "#3D6491",
        },
        slate: {
          50: "#F7F8FA",
          100: "#EEF1F5",
          400: "#8996A8",
          500: "#64748B",
          600: "#475467",
        },
        gold: {
          DEFAULT: "#B08D57",
          light: "#C9A876",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11, 31, 58, 0.04), 0 4px 16px rgba(11, 31, 58, 0.06)",
        "card-hover": "0 2px 4px rgba(11, 31, 58, 0.06), 0 12px 32px rgba(11, 31, 58, 0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

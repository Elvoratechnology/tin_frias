import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0d12",
        foreground: "#ffffff",
        raven: "#0c0d12",
        royal: "#4169e1",
        cobalt: "#2563eb",
        indigo: "#6366f1",
        cyan: "#38bdf8",
        steel: "#6f86b3",
        "deep-navy": "#263456",
        muted: "rgba(255, 255, 255, 0.62)",
        line: "rgba(255, 255, 255, 0.16)",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        glass: "24px",
      },
      boxShadow: {
        glass: "inset 0 1px 0 rgba(255,255,255,0.38), inset 0 -1px 0 rgba(255,255,255,0.05), 0 20px 50px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;


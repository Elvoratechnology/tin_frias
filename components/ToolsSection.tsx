"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  FileCode2,
  Layers,
  Zap,
  Cpu,
  Database,
  Smartphone,
  Sparkles,
  Terminal,
  Radio,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface ToolItem {
  category: string;
  name: string;
  detail: string;
  icon: React.ElementType;
  wide?: boolean;
}

const toolItems: ToolItem[] = [
  // Row 1: 2 Wide Core Engines
  {
    category: "CORE ENGINE",
    name: "Next.js & React",
    detail: "PRODUCTION STANDARD & SSR ARCHITECTURE",
    icon: Code2,
    wide: true,
  },
  {
    category: "CORE ENGINE",
    name: "TypeScript",
    detail: "STRICT TYPES & MODULAR CODEBASE",
    icon: FileCode2,
    wide: true,
  },

  // Row 2: 4 Cards
  {
    category: "UI & STYLING",
    name: "Tailwind CSS",
    detail: "RAPID RESPONSIVE SYSTEMS",
    icon: Layers,
  },
  {
    category: "COMPONENT SYSTEM",
    name: "shadcn/ui",
    detail: "ACCESSIBLE DESIGN TOKENS",
    icon: Layers,
  },
  {
    category: "INTERACTION",
    name: "Framer Motion",
    detail: "CINEMATIC LIQUID GLASS UI",
    icon: Zap,
  },
  {
    category: "STATE & BUNDLER",
    name: "Zustand & Vite",
    detail: "REAL-TIME STATE MANAGEMENT",
    icon: Cpu,
  },

  // Row 3: 4 Cards
  {
    category: "BACKEND & DATA",
    name: "Python & SQL",
    detail: "POSTGRESQL & MYSQL DATABASE",
    icon: Database,
  },
  {
    category: "MOBILE HYBRID",
    name: "React Native",
    detail: "FLUTTER, SWIFT & ANDROID STUDIO",
    icon: Smartphone,
  },
  {
    category: "AI ENGINEERING",
    name: "Antigravity & Cursor",
    detail: "AI-ASSISTED DEVELOPMENT PIPELINE",
    icon: Sparkles,
  },
  {
    category: "HARDWARE & IOT",
    name: "Arduino",
    detail: "EMBEDDED HARDWARE TROUBLESHOOTING",
    icon: Radio,
  },
];

function ToolCard({ item, index }: { item: ToolItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      cardRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      cardRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
  };

  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`group relative overflow-hidden rounded-[14px] sm:rounded-[16px] border border-white/[0.12] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-black/70 backdrop-blur-[20px] p-3.5 sm:p-5 md:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#4169e1]/60 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(65,105,225,0.18)] ${
        item.wide ? "col-span-2 sm:col-span-2 md:col-span-2" : "col-span-1"
      } before:pointer-events-none before:absolute before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(220px_circle_at_var(--mx,50%)_var(--my,0%),rgba(65,105,225,0.22),transparent_70%)]`}
    >
      {/* Top Row: Category Label (Left) and Subtle Icon (Right) */}
      <div className="flex items-center justify-between gap-2 mb-2 sm:mb-4">
        <span className="text-[9px] sm:text-[10px] md:text-[10.5px] font-mono font-bold tracking-[0.16em] sm:tracking-[0.2em] text-white/50 uppercase select-none group-hover:text-[#4169e1] transition-colors truncate">
          {item.category}
        </span>
        <div className="text-white/40 group-hover:text-[#4169e1] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" strokeWidth={1.75} />
        </div>
      </div>

      {/* Middle: Tool Name */}
      <div className="my-auto py-1">
        <h3 className="font-display text-[15px] sm:text-[18px] md:text-[21px] text-white leading-tight tracking-tight group-hover:translate-x-0.5 transition-transform">
          {item.name}
        </h3>
      </div>

      {/* Bottom: Bullet Detail */}
      <div className="mt-2.5 sm:mt-3.5 pt-1.5 sm:pt-2 flex items-center gap-1.5 text-[9px] sm:text-[10.5px] md:text-[11px] font-mono tracking-[0.06em] sm:tracking-[0.1em] text-white/60">
        <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#4169e1] group-hover:scale-125 transition-transform flex-shrink-0" />
        <span className="uppercase truncate group-hover:text-white/80 transition-colors">{item.detail}</span>
      </div>
    </motion.div>
  );
}

export function ToolsSection() {
  return (
    <motion.section
      id="tools"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pt-14 sm:pt-20 pb-8 sm:pb-10"
    >
      <SectionHeading>Tools</SectionHeading>

      {/* Bento Grid: 2 columns on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
        {toolItems.map((item, idx) => (
          <ToolCard key={idx} item={item} index={idx} />
        ))}
      </div>

      {/* Animated Section Divider Line Beam */}
      <div className="relative w-full mt-16 sm:mt-20 h-[1px] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
        <div className="animate-border-beam-slow absolute top-0 -left-1/3 h-[1.5px] w-2/3 bg-gradient-to-r from-transparent via-[#4169e1] via-[60%] to-[#6366f1] opacity-90 blur-[0.5px]" />
        <div className="animate-border-beam-slow absolute top-0 -left-1/3 h-[4px] w-2/3 bg-gradient-to-r from-transparent via-[#38bdf8]/50 via-[60%] to-[#6366f1]/30 opacity-70 blur-sm" />
      </div>
    </motion.section>
  );
}

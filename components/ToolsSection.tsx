"use client";

import React, { useRef } from "react";
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

function ToolCard({ item }: { item: ToolItem }) {
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
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`group relative overflow-hidden rounded-[16px] border border-white/[0.12] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-black/70 backdrop-blur-[20px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:scale-[1.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_36px_rgba(0,0,0,0.5)] ${
        item.wide ? "col-span-1 sm:col-span-2 md:col-span-2" : "col-span-1"
      } before:pointer-events-none before:absolute before:inset-0 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(220px_circle_at_var(--mx,50%)_var(--my,0%),rgba(255,255,255,0.18),transparent_70%)]`}
    >
      {/* Top Row: Category Label (Left) and Subtle Icon (Right) */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="text-[10px] sm:text-[10.5px] font-mono font-bold tracking-[0.2em] text-white/50 uppercase select-none">
          {item.category}
        </span>
        <div className="text-white/40 group-hover:text-white/80 transition-colors">
          <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.75} />
        </div>
      </div>

      {/* Middle: Tool Name */}
      <div className="my-auto py-1">
        <h3 className="font-display text-[18px] sm:text-[21px] text-white leading-tight tracking-tight">
          {item.name}
        </h3>
      </div>

      {/* Bottom: Bullet Detail */}
      <div className="mt-3.5 pt-2 flex items-center gap-1.5 text-[10.5px] sm:text-[11px] font-mono tracking-[0.1em] text-white/60">
        <span className="h-1 w-1 rounded-full bg-[#6f86b3]" />
        <span className="uppercase truncate">{item.detail}</span>
      </div>
    </div>
  );
}

export function ToolsSection() {
  return (
    <section id="tools" className="pt-20 pb-10">
      <SectionHeading>Tools</SectionHeading>

      {/* Bento Grid: 2 wide cards on row 1, 4 cards on row 2, 4 cards on row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
        {toolItems.map((item, idx) => (
          <ToolCard key={idx} item={item} />
        ))}
      </div>
    </section>
  );
}

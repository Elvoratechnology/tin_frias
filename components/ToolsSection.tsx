"use client";

import React from "react";
import { portfolioContent } from "@/data/content";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

export function ToolsSection() {
  const { tools } = portfolioContent;

  return (
    <section id="tools" className="pt-24 pb-8">
      <SectionHeading>{tools.title}</SectionHeading>

      <GlassCard className="p-7 sm:p-9 divide-y divide-white/[0.12]">
        {tools.groups.map((group, idx) => (
          <div
            key={idx}
            className={`grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 items-baseline ${
              idx === 0 ? "pb-5" : idx === tools.groups.length - 1 ? "pt-5" : "py-5"
            }`}
          >
            <h3 className="font-display text-[17px] sm:text-[18px] text-white tracking-wide">
              {group.category}
            </h3>
            <p className="text-white/70 text-[15px] sm:text-[16px] leading-relaxed">
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </GlassCard>
    </section>
  );
}


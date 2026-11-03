"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Project } from "@/data/content";
import { GlassCard } from "./GlassCard";
import { LivePreview } from "./LivePreview";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      linkRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      linkRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
  };

  return (
    <GlassCard
      as="article"
      className={`p-6 sm:p-8 flex flex-col gap-4 ${
        project.wide ? "md:col-span-2" : ""
      }`}
    >
      {/* Top Header: Tag & Open Link */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Tag */}
        <span className="inline-block text-[12px] font-semibold px-3.5 py-1 rounded-full bg-[#6f86b3]/25 border border-[#6f86b3]/60 text-white/90">
          {project.tag}
        </span>

        {/* Open full site link */}
        <a
          ref={linkRef}
          onPointerMove={handlePointerMove}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-[11px] font-bold tracking-[0.12em] uppercase text-white hover:border-white/40 hover:bg-white/[0.14] transition-all shadow-sm"
        >
          Open full site ↗
        </a>
      </div>

      {/* Title & Subtitle */}
      <div>
        <h3 className="font-display text-[26px] sm:text-[30px] leading-[1.1] text-white">
          {project.title}
        </h3>
        <p className="text-white/60 text-[14px] sm:text-[15px] mt-1.5 leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      {/* Live Preview Embed */}
      <div className="my-1">
        <LivePreview
          url={project.url}
          title={project.title}
          fallbackScreenshot={project.screenshot}
          wide={project.wide}
        />
      </div>

      {/* Project feature bullets */}
      <ul className="mt-2 space-y-2 pl-4 text-white/70 text-[13px] sm:text-[14px] list-disc marker:text-[#6f86b3]">
        {project.bullets.map((bullet, idx) => (
          <li key={idx} className="leading-relaxed">
            {bullet}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}


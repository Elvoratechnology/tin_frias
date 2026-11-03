"use client";

import React, { useRef } from "react";
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
      className="p-4 sm:p-5 flex flex-col justify-between h-full rounded-[20px] transition-all duration-300 hover:border-white/30"
    >
      <div className="flex flex-col flex-1">
        {/* Top Header: Tag & Open Link */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#6f86b3]/25 border border-[#6f86b3]/60 text-white/90">
            {project.tag}
          </span>

          <a
            ref={linkRef}
            onPointerMove={handlePointerMove}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-[10px] font-bold tracking-[0.12em] uppercase text-white hover:border-white/40 hover:bg-white/[0.16] active:scale-95 transition-all"
          >
            Open ↗
          </a>
        </div>

        {/* Title & Subtitle (Clickable) */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-1"
        >
          <h3 className="font-display text-[17px] sm:text-[19px] leading-tight text-white group-hover:text-[#8b9bbd] transition-colors">
            {project.title}
          </h3>
        </a>
        <p className="text-white/60 text-[11.5px] sm:text-[12px] leading-snug min-h-[30px] line-clamp-2">
          {project.subtitle}
        </p>

        {/* Compact Clickable Live Preview */}
        <div className="my-3">
          <LivePreview
            url={project.url}
            title={project.title}
            fallbackScreenshot={project.screenshot}
          />
        </div>

        {/* Bullets */}
        <ul className="mt-1 space-y-1.5 pl-3.5 text-white/70 text-[11.5px] sm:text-[12px] list-disc marker:text-[#6f86b3] leading-relaxed flex-1">
          {project.bullets.map((bullet, idx) => (
            <li key={idx} className="leading-snug">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}

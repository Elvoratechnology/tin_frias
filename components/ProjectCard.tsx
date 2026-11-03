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

  // If wide card (Resiboss 2.0), layout as a compact horizontal split on desktop
  if (project.wide) {
    return (
      <GlassCard
        as="article"
        className="p-5 sm:p-6 md:col-span-2 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-5 md:gap-7 items-center">
          {/* Left: Preview (Clickable to visit site) */}
          <div className="w-full">
            <LivePreview
              url={project.url}
              title={project.title}
              fallbackScreenshot={project.screenshot}
              wide={true}
            />
          </div>

          {/* Right: Info & Bullets */}
          <div className="flex flex-col justify-between h-full">
            <div>
              {/* Header: Tag + Open link */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full bg-[#6f86b3]/25 border border-[#6f86b3]/60 text-white/90">
                  {project.tag}
                </span>

                <a
                  ref={linkRef}
                  onPointerMove={handlePointerMove}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-white hover:border-white/40 hover:bg-white/[0.14] transition-all"
                >
                  Open site ↗
                </a>
              </div>

              {/* Title & Subtitle */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <h3 className="font-display text-[22px] sm:text-[25px] leading-tight text-white group-hover:text-[#8b9bbd] transition-colors">
                  {project.title}
                </h3>
              </a>
              <p className="text-white/60 text-[13px] sm:text-[14px] mt-1 leading-relaxed">
                {project.subtitle}
              </p>

              {/* Feature Bullets */}
              <ul className="mt-4 space-y-1.5 pl-4 text-white/70 text-[12px] sm:text-[13px] list-disc marker:text-[#6f86b3]">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </GlassCard>
    );
  }

  // Standard 2-column cards (Worklane & Inky)
  return (
    <GlassCard as="article" className="p-5 sm:p-6 flex flex-col justify-between">
      <div>
        {/* Top Header: Tag & Open Link */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-block text-[11px] font-semibold px-3 py-0.5 rounded-full bg-[#6f86b3]/25 border border-[#6f86b3]/60 text-white/90">
            {project.tag}
          </span>

          <a
            ref={linkRef}
            onPointerMove={handlePointerMove}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-white hover:border-white/40 hover:bg-white/[0.14] transition-all"
          >
            Open site ↗
          </a>
        </div>

        {/* Title & Subtitle (Clickable) */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <h3 className="font-display text-[20px] sm:text-[22px] leading-tight text-white group-hover:text-[#8b9bbd] transition-colors">
            {project.title}
          </h3>
        </a>
        <p className="text-white/60 text-[13px] mt-1 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Live Preview Embed (Clickable directly to site) */}
        <div className="my-3.5">
          <LivePreview
            url={project.url}
            title={project.title}
            fallbackScreenshot={project.screenshot}
          />
        </div>

        {/* Bullets */}
        <ul className="mt-3 space-y-1.5 pl-4 text-white/70 text-[12px] sm:text-[13px] list-disc marker:text-[#6f86b3]">
          {project.bullets.map((bullet, idx) => (
            <li key={idx} className="leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}

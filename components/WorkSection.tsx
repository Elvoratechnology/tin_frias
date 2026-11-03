"use client";

import React from "react";
import { portfolioContent } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  const { work } = portfolioContent;

  return (
    <section id="work" className="pt-20 pb-10">
      <SectionHeading>{work.title}</SectionHeading>

      {/* Uniform 3-Column Grid: Worklane, Inky, Resiboss 2.0 all equal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {work.projects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

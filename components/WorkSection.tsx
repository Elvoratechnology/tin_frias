"use client";

import React from "react";
import { portfolioContent } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  const { work } = portfolioContent;

  return (
    <section id="work" className="pt-24 pb-8">
      <SectionHeading>{work.title}</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {work.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  const { work } = portfolioContent;

  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pt-20 pb-10"
    >
      <SectionHeading>{work.title}</SectionHeading>

      {/* Uniform 3-Column Grid: Worklane, Inky, Resiboss 2.0 all equal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
        {work.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: idx * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="h-full flex flex-col"
          >
            <ProjectCard project={project} />
          </motion.div>
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

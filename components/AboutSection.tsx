"use client";

import React from "react";
import { portfolioContent } from "@/data/content";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  const { about } = portfolioContent;

  return (
    <section id="about" className="pt-24 pb-8">
      <SectionHeading>{about.title}</SectionHeading>

      {/* Main Glass Paragraph */}
      <GlassCard className="p-7 sm:p-9 mb-8 text-[16px] sm:text-[18px] leading-relaxed text-white/75 font-normal">
        <p>{about.bio}</p>
      </GlassCard>

      {/* 3 Glass Cards: Education, Awards, Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Education */}
        <GlassCard className="p-7 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-[22px] sm:text-[24px] text-white mb-5 leading-tight">
              Education
            </h3>
            <div className="space-y-4 text-white/70 text-[14px]">
              {about.education.map((item, idx) => (
                <div key={idx}>
                  <strong className="block text-white font-semibold text-[15px]">
                    {item.institution}
                  </strong>
                  <span className="text-white/60 leading-relaxed block mt-0.5">
                    {item.degree}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Awards */}
        <GlassCard className="p-7 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-[22px] sm:text-[24px] text-white mb-5 leading-tight">
              Awards
            </h3>
            <div className="space-y-4 text-white/70 text-[14px]">
              {about.awards.map((item, idx) => (
                <div key={idx}>
                  <strong className="block text-white font-semibold text-[15px]">
                    {item.title}
                  </strong>
                  <span className="text-white/60 leading-relaxed block mt-0.5">
                    {item.eventOrDetail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Certifications */}
        <GlassCard className="p-7 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-[22px] sm:text-[24px] text-white mb-5 leading-tight">
              Certifications
            </h3>
            <div className="space-y-4 text-white/70 text-[14px]">
              {about.certifications.map((item, idx) => (
                <div key={idx}>
                  <strong className="block text-white font-semibold text-[15px]">
                    {item.title}
                  </strong>
                  {item.detail && (
                    <span className="text-white/60 leading-relaxed block mt-0.5">
                      {item.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}


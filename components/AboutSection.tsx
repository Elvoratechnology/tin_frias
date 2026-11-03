"use client";

import React, { useRef } from "react";
import { portfolioContent } from "@/data/content";

export function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      cardRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      cardRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
  };

  return (
    <section id="about" className="pt-20 sm:pt-24 pb-12">
      {/* Top Eyebrow / Tagline */}
      <div className="flex items-center gap-2 mb-6 sm:mb-8 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-white/55 uppercase select-none">
        <span className="text-[#6f86b3] text-sm">✦</span>
        <span>ABOUT ME // PROFESSIONAL PROFILE</span>
      </div>

      {/* 2-Column Layout matching reference image */}
      <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] xl:grid-cols-[460px_1fr] gap-8 xl:gap-14 items-start">
        {/* Left Side: Technical Arsenal / Credentials Glass Card */}
        <div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          className="relative overflow-hidden rounded-[20px] border border-white/[0.14] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-black/60 backdrop-blur-[24px] backdrop-saturate-[180%] p-5 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_50px_rgba(0,0,0,0.6)] before:pointer-events-none before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,0%),rgba(255,255,255,0.18),transparent_70%)]"
        >
          {/* Card Title */}
          <div className="flex items-center gap-2 mb-5 sm:mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <h3 className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-white/90 uppercase">
              TECHNICAL ARSENAL & CREDENTIALS
            </h3>
          </div>

          {/* List of items with circle-check icons */}
          <div className="space-y-4 sm:space-y-5">
            {/* 1. Education */}
            <div className="flex items-start gap-3 sm:gap-3.5 group">
              <div className="mt-0.5 flex-shrink-0 h-[18px] w-[18px] rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/80 group-hover:border-white/60 transition-colors">
                ✓
              </div>
              <div className="min-w-0">
                <h4 className="text-[12.5px] sm:text-[13px] font-extrabold tracking-[0.06em] text-white uppercase leading-snug">
                  BS IN COMPUTER ENGINEERING
                </h4>
                <p className="text-[11.5px] sm:text-[12px] text-white/55 mt-1 leading-relaxed">
                  STI College Ortigas-Cainta (2022 to present) · TeksSquad
                  Institute of Technology, TVL: ICT Track (2016 to 2018).
                </p>
              </div>
            </div>

            {/* 2. Line-Following Robot Award */}
            <div className="flex items-start gap-3 sm:gap-3.5 group">
              <div className="mt-0.5 flex-shrink-0 h-[18px] w-[18px] rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/80 group-hover:border-white/60 transition-colors">
                ✓
              </div>
              <div className="min-w-0">
                <h4 className="text-[12.5px] sm:text-[13px] font-extrabold tracking-[0.06em] text-white uppercase leading-snug">
                  1ST PLACE, LINE-FOLLOWING ROBOT
                </h4>
                <p className="text-[11.5px] sm:text-[12px] text-white/55 mt-1 leading-relaxed">
                  Tech Fest 2025 · Autonomous sensor tracking, logic design, and
                  hardware implementation.
                </p>
              </div>
            </div>

            {/* 3. Automated Peanut Fryer System */}
            <div className="flex items-start gap-3 sm:gap-3.5 group">
              <div className="mt-0.5 flex-shrink-0 h-[18px] w-[18px] rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/80 group-hover:border-white/60 transition-colors">
                ✓
              </div>
              <div className="min-w-0">
                <h4 className="text-[12.5px] sm:text-[13px] font-extrabold tracking-[0.06em] text-white uppercase leading-snug">
                  AUTOMATED PEANUT FRYER SYSTEM
                </h4>
                <p className="text-[11.5px] sm:text-[12px] text-white/55 mt-1 leading-relaxed">
                  Arduino-based automated peanut fryer with air cooling,
                  measuring and grinding stages for peanut butter production.
                </p>
              </div>
            </div>

            {/* 4. Certifications */}
            <div className="flex items-start gap-3 sm:gap-3.5 group">
              <div className="mt-0.5 flex-shrink-0 h-[18px] w-[18px] rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/80 group-hover:border-white/60 transition-colors">
                ✓
              </div>
              <div className="min-w-0">
                <h4 className="text-[12.5px] sm:text-[13px] font-extrabold tracking-[0.06em] text-white uppercase leading-snug">
                  TESDA NC II & DEV CERTIFICATIONS
                </h4>
                <p className="text-[11.5px] sm:text-[12px] text-white/55 mt-1 leading-relaxed">
                  TESDA NC II Computer Systems Servicing · Java Fundamentals ·
                  Basic VB 6.0 Programming (TVL: ICT Track).
                </p>
              </div>
            </div>
          </div>

          {/* Card Bottom Meta Bar: responsive wrap for all mobile screens */}
          <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-white/[0.1] flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider">
            <span className="flex items-center gap-2 text-emerald-400 font-semibold whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              AVAILABLE FOR ROLES
            </span>
            <span className="text-white/40 uppercase tracking-[0.14em]">
              NEXT.JS · TS · EMBEDDED
            </span>
          </div>
        </div>

        {/* Right Side: Headline, Paragraphs, Quote Callout */}
        <div className="flex flex-col justify-between h-full pt-1">
          {/* Main Display Headline */}
          <h2 className="font-display text-[clamp(26px,4.5vw,56px)] leading-[1.1] tracking-[-0.01em] uppercase mb-5 sm:mb-6">
            <span className="text-white block">CREATING IMPACT THROUGH</span>
            <span className="bg-gradient-to-r from-white via-white/85 to-[#6f86b3] bg-clip-text text-transparent block">
              VISUAL FLOW & CODE
            </span>
          </h2>

          {/* Bio Copy (Exact words kept untouched) */}
          <div className="space-y-4 text-white/75 text-[14px] sm:text-[16px] leading-[1.7] font-normal">
            <p>
              I&apos;m a frontend developer who specializes in{" "}
              <strong className="text-white font-semibold">React</strong>,{" "}
              <strong className="text-white font-semibold">Next.js</strong> and{" "}
              <strong className="text-white font-semibold">TypeScript</strong>.
              I build responsive, animated interfaces with Tailwind CSS,
              shadcn/ui and Framer Motion, and I know enough Python, PostgreSQL
              and MySQL to work with the backend.
            </p>

            <p>
              My Computer Engineering background in hardware and embedded
              systems shapes how I solve problems, and I use AI-assisted
              workflows to ship features quickly without lowering code quality.
            </p>
          </div>

          {/* Highlight Quote Box with Left Border Accent */}
          <div className="mt-6 pl-4 border-l-2 border-[#6f86b3] py-1 bg-white/[0.02] rounded-r-lg">
            <p className="text-[12.5px] sm:text-[14px] italic text-white/90 leading-relaxed">
              &ldquo;My Computer Engineering background in hardware and embedded
              systems shapes how I solve problems, and I use AI-assisted
              workflows to ship features quickly without lowering code
              quality.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

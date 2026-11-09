"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "@/data/content";

export function AboutSection() {
  const { about } = portfolioContent;
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      cardRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      cardRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="pt-16 sm:pt-24 pb-10 sm:pb-12"
    >
      {/* Top Eyebrow / Tagline */}
      <div className="flex items-center gap-2 mb-6 sm:mb-8 text-[10.5px] sm:text-[11px] font-mono tracking-[0.25em] text-white/55 uppercase select-none">
        <span className="text-[#4169e1] text-sm">✦</span>
        <span>ABOUT ME // PROFESSIONAL PROFILE</span>
      </div>

      {/* 2-Column Layout matching natural site aesthetic - Balanced width */}
      <div className="grid grid-cols-1 lg:grid-cols-[430px_1fr] xl:grid-cols-[460px_1fr] gap-8 xl:gap-12 items-start">
        {/* Left Side: Technical Arsenal / Credentials Glass Card */}
        <div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          className="relative overflow-hidden rounded-[20px] border border-white/[0.14] bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-black/60 backdrop-blur-[24px] backdrop-saturate-[180%] p-6 sm:p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_50px_rgba(0,0,0,0.6)] before:pointer-events-none before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(260px_circle_at_var(--mx,50%)_var(--my,0%),rgba(65,105,225,0.20),transparent_70%)]"
        >
          {/* Animated Top Border Beam */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] overflow-hidden pointer-events-none z-10">
            <div className="animate-border-beam absolute top-0 -left-1/3 h-full w-2/3 bg-gradient-to-r from-transparent via-[#4169e1] via-[60%] to-[#6366f1] opacity-90 blur-[0.5px]" />
            <div className="animate-border-beam absolute top-0 -left-1/3 h-[4px] w-2/3 bg-gradient-to-r from-transparent via-[#4169e1]/50 via-[60%] to-[#6366f1]/30 opacity-70 blur-sm" />
          </div>

          {/* Card Title */}
          <div className="flex items-center gap-2 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            <h3 className="font-mono text-[12px] font-bold tracking-[0.2em] text-white/90 uppercase">
              TECHNICAL ARSENAL &amp; CREDENTIALS
            </h3>
          </div>

          {/* List of items with circle-check icons */}
          <div className="space-y-5">
            {/* 1. Education */}
            <div className="flex items-start gap-3.5 group">
              <div className="mt-0.5 flex-shrink-0 h-[18px] w-[18px] rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/80 group-hover:border-[#4169e1] group-hover:bg-[#4169e1]/20 group-hover:scale-110 transition-all">
                ✓
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold tracking-[0.06em] text-white uppercase leading-snug group-hover:text-[#4169e1] transition-colors">
                  BS IN COMPUTER ENGINEERING
                </h4>
                <p className="text-[12px] text-white/55 mt-1 leading-relaxed">
                  STI College Ortigas-Cainta (2022 to present) · TeksSquad
                  Institute of Technology, TVL: ICT Track (2016 to 2018).
                </p>
              </div>
            </div>

            {/* 2. Line-Following Robot Award */}
            <div className="flex items-start gap-3.5 group">
              <div className="mt-0.5 flex-shrink-0 h-[18px] w-[18px] rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/80 group-hover:border-[#4169e1] group-hover:bg-[#4169e1]/20 group-hover:scale-110 transition-all">
                ✓
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold tracking-[0.06em] text-white uppercase leading-snug group-hover:text-[#4169e1] transition-colors">
                  1ST PLACE, LINE-FOLLOWING ROBOT
                </h4>
                <p className="text-[12px] text-white/55 mt-1 leading-relaxed">
                  Tech Fest 2025 · Autonomous sensor tracking, logic design, and
                  hardware implementation.
                </p>
              </div>
            </div>

            {/* 3. Automated Peanut Fryer System */}
            <div className="flex items-start gap-3.5 group">
              <div className="mt-0.5 flex-shrink-0 h-[18px] w-[18px] rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/80 group-hover:border-[#4169e1] group-hover:bg-[#4169e1]/20 group-hover:scale-110 transition-all">
                ✓
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold tracking-[0.06em] text-white uppercase leading-snug group-hover:text-[#4169e1] transition-colors">
                  AUTOMATED PEANUT FRYER SYSTEM
                </h4>
                <p className="text-[12px] text-white/55 mt-1 leading-relaxed">
                  Arduino-based automated peanut fryer with air cooling,
                  measuring and grinding stages for peanut butter production.
                </p>
              </div>
            </div>

            {/* 4. Certifications */}
            <div className="flex items-start gap-3.5 group">
              <div className="mt-0.5 flex-shrink-0 h-[18px] w-[18px] rounded-full border border-white/30 flex items-center justify-center text-[10px] text-white/80 group-hover:border-[#4169e1] group-hover:bg-[#4169e1]/20 group-hover:scale-110 transition-all">
                ✓
              </div>
              <div>
                <h4 className="text-[13px] font-extrabold tracking-[0.06em] text-white uppercase leading-snug group-hover:text-[#4169e1] transition-colors">
                  TESDA NC II &amp; DEV CERTIFICATIONS
                </h4>
                <p className="text-[12px] text-white/55 mt-1 leading-relaxed">
                  TESDA NC II Computer Systems Servicing · Java Fundamentals ·
                  Basic VB 6.0 Programming (TVL: ICT Track).
                </p>
              </div>
            </div>
          </div>

          {/* Card Bottom Meta Bar with animated divider line */}
          <div className="relative mt-7 pt-5">
            {/* Animated Divider Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-white/[0.1]" />
              <div className="animate-border-beam-slow absolute top-0 -left-1/3 h-full w-1/2 bg-gradient-to-r from-transparent via-[#38bdf8] via-[60%] to-[#4169e1] opacity-80" />
            </div>
            <div className="flex items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider">
              <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                AVAILABLE FOR ROLES
              </span>
              <span className="text-white/40 uppercase tracking-[0.14em]">
                NEXT.JS · TS · EMBEDDED
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Headline, Paragraphs, Quote Callout (pulled up snug under headline) */}
        <div className="flex flex-col justify-start pt-1">
          {/* Main Display Headline (Short, punchy & balanced 2-line layout) */}
          <h2 className="font-display text-[clamp(30px,3.8vw,52px)] leading-[1.12] tracking-[-0.01em] uppercase mb-4 sm:mb-5">
            <span className="text-white block">CREATING IMPACT</span>
            <span className="bg-gradient-to-r from-white via-white/85 to-[#4169e1] bg-clip-text text-transparent block">
              THROUGH CODE
            </span>
          </h2>

          {/* Bio Copy (Elevated directly under headline) */}
          <div className="space-y-3.5 text-white/75 text-[14.5px] sm:text-[15.5px] leading-[1.65] font-normal">
            <p>
              I&apos;m a frontend developer who specializes in{" "}
              <strong className="text-white font-bold">React, Next.js</strong> and{" "}
              <strong className="text-white font-bold">TypeScript</strong>. I build
              responsive, animated interfaces with Tailwind CSS, shadcn/ui and
              Framer Motion, and I know enough Python, PostgreSQL and MySQL to
              work with the backend.
            </p>

            <p>
              My Computer Engineering background in hardware and embedded
              systems shapes how I solve problems, and I use AI-assisted
              workflows to ship features quickly without lowering code quality.
            </p>
          </div>

          {/* Highlight Quote Box with Animated Vertical Line Beam */}
          <div className="relative mt-5 sm:mt-6 pl-5 py-2.5 bg-gradient-to-r from-white/[0.04] to-transparent rounded-r-xl overflow-hidden border border-white/[0.06] border-l-0">
            {/* Animated Vertical Line Border on the left */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] overflow-hidden bg-white/[0.12]">
              {/* Static accent underlay */}
              <div className="absolute inset-0 bg-[#4169e1]/30" />
              {/* Animated vertical traveling beam */}
              <div className="animate-line-beam-v absolute left-0 -top-full w-full h-full bg-gradient-to-b from-transparent via-[#38bdf8] via-[50%] to-[#6366f1] blur-[0.5px]" />
              <div className="animate-line-beam-v absolute left-0 -top-full w-full h-full bg-gradient-to-b from-transparent via-[#4169e1] to-[#38bdf8] blur-sm opacity-80" />
            </div>

            <p className="text-[13px] sm:text-[13.5px] italic text-white/90 leading-relaxed font-sans">
              &ldquo;My Computer Engineering background in hardware and embedded
              systems shapes how I solve problems, and I use AI-assisted
              workflows to ship features quickly without lowering code
              quality.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Animated Section Divider Line Beam */}
      <div className="relative w-full mt-16 sm:mt-20 h-[1px] overflow-hidden pointer-events-none">
        {/* Subtle static guide line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
        {/* Traveling laser beam */}
        <div className="animate-border-beam absolute top-0 -left-1/3 h-[1.5px] w-2/3 bg-gradient-to-r from-transparent via-[#4169e1] via-[60%] to-[#6366f1] opacity-90 blur-[0.5px]" />
        <div className="animate-border-beam absolute top-0 -left-1/3 h-[4px] w-2/3 bg-gradient-to-r from-transparent via-[#38bdf8]/50 via-[60%] to-[#6366f1]/30 opacity-70 blur-sm" />
      </div>
    </motion.section>
  );
}

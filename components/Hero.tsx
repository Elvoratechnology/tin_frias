"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { portfolioContent } from "@/data/content";

export function Hero() {
  const collabBtnRef = useRef<HTMLAnchorElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (collabBtnRef.current) {
      const rect = collabBtnRef.current.getBoundingClientRect();
      collabBtnRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      collabBtnRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
  };

  return (
    <section
      id="home"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden select-none"
    >
      {/* Huge Split Name with page-load animation: fades in, slides up, unblurs */}
      <div className="pointer-events-none absolute left-0 right-0 top-[18%] md:top-[30%] z-[5] md:z-[1]">
        <div
          className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-stretch md:items-baseline md:gap-10 lg:gap-16 font-display text-[21vw] md:text-[clamp(50px,8vw,155px)] leading-[0.92] md:leading-none tracking-[-0.01em] animate-hero-rise motion-reduce:animate-none"
          aria-label={portfolioContent.personal.displayName}
        >
          {/* JUSTIN: white to light gray-blue */}
          <span className="bg-gradient-to-r from-white via-white/90 to-[#c9d2e6] bg-clip-text text-transparent self-start md:self-auto text-left">
            {portfolioContent.personal.firstName}
          </span>

          {/* FRIAS: gray-blue to deep navy with generous space before FRIAS */}
          <span className="bg-gradient-to-r from-[#8b9bbd] to-[#263456] bg-clip-text text-transparent self-end md:self-auto flex items-baseline text-right md:ml-12 lg:ml-20">
            FRIA
            {/* S outline-only without the vertical cursor bar */}
            <span className="relative inline-block font-normal text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.55)]">
              S
            </span>
          </span>
        </div>
      </div>

      {/* Justin Cutout Photo: centered, bottom-aligned, layers in front of name */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 z-[2] md:z-[2] h-[58svh] md:h-[82svh] max-w-[94vw] md:max-w-none flex items-end justify-center">
        <img
          src="/justin-cutout.png"
          alt="Justin Lyoid Frias"
          className="h-full w-auto object-contain object-bottom contrast-[1.05] brightness-[0.96] [mask-image:linear-gradient(to_bottom,#000_68%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_68%,transparent_98%)]"
        />
      </div>

      {/* Bottom Container: perfectly aligns with JUSTIN on the left and FRIAS on the right */}
      <div className="absolute left-0 right-0 bottom-[5%] md:bottom-[10%] z-10 pointer-events-none">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
          {/* Bottom Left: Role & Subrole - Aligned with left edge of JUSTIN */}
          <div className="pointer-events-auto max-w-[85vw] md:max-w-none text-left">
            <h1 className="text-[clamp(18px,2.2vw,32px)] font-bold font-sans tracking-[0.02em] uppercase text-white leading-[1.1] m-0">
              {portfolioContent.personal.role}
            </h1>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.3em] text-white/60 uppercase">
              {portfolioContent.personal.subRole}
            </p>
          </div>

          {/* Bottom Right: DESIGN. BUILD. SHIP. & Buttons - Aligned with right edge of FRIAS */}
          <div className="pointer-events-auto text-left md:text-right w-full md:w-auto">
            {/* Stacked words: hidden on mobile */}
            <div className="hidden md:block font-display text-[clamp(22px,2.4vw,36px)] leading-[1.15] mb-4 text-right">
              <div className="text-white">{portfolioContent.hero.words[0]}</div>
              <div className="text-[#b8b8b8]">{portfolioContent.hero.words[1]}</div>
              <div className="text-[#8a8a8a]">{portfolioContent.hero.words[2]}</div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-[14px] justify-start md:justify-end items-center">
              {/* Solid White Button: VIEW WORK */}
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-[22px] sm:px-[26px] py-3.5 sm:py-4 text-[11px] font-bold tracking-[0.18em] uppercase rounded-xl bg-white text-black transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
              >
                {portfolioContent.hero.ctaWork}
              </Link>

              {/* Glass Button: COLLABORATE ↗ */}
              <Link
                ref={collabBtnRef}
                onPointerMove={handlePointerMove}
                href="#contact"
                className="relative overflow-hidden inline-flex items-center gap-2 px-[22px] sm:px-[26px] py-3.5 sm:py-4 text-[11px] font-bold tracking-[0.18em] uppercase rounded-xl border border-white/[0.18] bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-[22px] backdrop-saturate-[170%] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] before:pointer-events-none before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(160px_circle_at_var(--mx,50%)_var(--my,0%),rgba(255,255,255,0.22),transparent_70%)]"
              >
                {portfolioContent.hero.ctaContact}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

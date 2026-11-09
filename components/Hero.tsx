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
      className="relative h-[100svh] min-h-[580px] sm:min-h-[640px] w-full overflow-hidden select-none"
    >
      {/* Huge Split Name framing the portrait: JUSTIN on left, FRIAS on right (z-[1] placed behind the cutout) */}
      <div className="pointer-events-none absolute left-0 right-0 top-[27%] sm:top-[29%] md:top-[35%] lg:top-[36%] z-[1]">
        <div
          className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-row justify-between items-baseline gap-4 sm:gap-6 md:gap-8 lg:gap-10 font-display font-black text-[13.5vw] xs:text-[14vw] md:text-[clamp(56px,8.4vw,158px)] leading-none tracking-[-0.02em] animate-hero-rise motion-reduce:animate-none"
          aria-label={portfolioContent.personal.displayName}
        >
          {/* JUSTIN: white to light gray-blue with bold stroke */}
          <span className="font-black bg-gradient-to-r from-white via-white to-[#d1d5db] bg-clip-text text-transparent text-left [-webkit-text-stroke:1.5px_rgba(255,255,255,0.9)] flex-shrink-0">
            {portfolioContent.personal.firstName}
          </span>

          {/* FRIAS: steel blue to slate with bold stroke & space from JUSTIN */}
          <span className="font-black bg-gradient-to-r from-[#94a3b8] via-[#71829f] to-[#4a5d82] bg-clip-text text-transparent flex items-baseline text-right [-webkit-text-stroke:1.5px_rgba(148,163,184,0.9)] ml-4 sm:ml-6 md:ml-8 lg:ml-10 flex-shrink-0">
            FRIA
            {/* S outline-only without the vertical cursor bar */}
            <span className="relative inline-block font-black text-transparent [-webkit-text-stroke:2.5px_rgba(255,255,255,0.75)] md:[-webkit-text-stroke:3.5px_rgba(255,255,255,0.85)] ml-1">
              S
            </span>
          </span>
        </div>
      </div>

      {/* Justin Cutout Photo: elevated & standing tall (z-[2] in front of name) */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 z-[2] md:z-[2] h-[78svh] sm:h-[82svh] md:h-[84svh] max-w-[96vw] md:max-w-none flex items-end justify-center">
        <img
          src="/justin-cutout.png?v=restore-29k"
          alt="Justin Lyoid Frias"
          className="h-full w-auto object-contain object-bottom contrast-[1.08] brightness-[0.98] saturate-[1.04] [mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0.85)_78%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0.85)_78%,transparent_98%)]"
        />
      </div>

      {/* Base Dark Gradient Vignette for seamless bottom melt */}
      <div
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-28 md:h-36 z-[3] bg-gradient-to-t from-[#0c0d12] via-[#0c0d12]/80 to-transparent"
        aria-hidden="true"
      />

      {/* Bottom Container: elevated directly underneath the name matching reference */}
      <div className="absolute left-0 right-0 bottom-[14%] sm:bottom-[18%] md:bottom-[28%] lg:bottom-[30%] z-10 pointer-events-none">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-row justify-between items-end gap-3 sm:gap-5">
          {/* Bottom Left: Role & Subrole */}
          <div className="pointer-events-auto max-w-[48vw] sm:max-w-[85vw] md:max-w-none text-left">
            <h1 className="text-[13.5px] xs:text-[15.5px] sm:text-[clamp(18px,2.2vw,32px)] font-bold font-sans tracking-[0.02em] uppercase text-white leading-[1.1] m-0">
              {portfolioContent.personal.role}
            </h1>
            <p className="mt-1 sm:mt-2 text-[8px] xs:text-[9.5px] sm:text-[11px] font-semibold tracking-[0.2em] sm:tracking-[0.3em] text-white/60 uppercase">
              {portfolioContent.personal.subRole}
            </p>
          </div>

          {/* Bottom Right: DESIGN. BUILD. SHIP. & Buttons (Preserved in portrait) */}
          <div className="pointer-events-auto text-right flex flex-col items-end flex-shrink-0">
            {/* Stacked words: DESIGN. BUILD. SHIP. */}
            <div className="font-display text-[10.5px] xs:text-[12px] sm:text-[18px] md:text-[clamp(22px,2.4vw,36px)] leading-[1.1] mb-2 sm:mb-3 text-right select-none">
              <div className="text-white">{portfolioContent.hero.words[0]}</div>
              <div className="text-[#b8b8b8]">{portfolioContent.hero.words[1]}</div>
              <div className="text-[#8a8a8a]">{portfolioContent.hero.words[2]}</div>
            </div>

            {/* Buttons: side by side identical to desktop */}
            <div className="flex flex-row gap-1.5 xs:gap-2 sm:gap-[14px] items-center">
              {/* Solid White Button: VIEW WORK */}
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 xs:px-3 sm:px-[26px] py-2 xs:py-2.5 sm:py-4 text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.18em] uppercase rounded-lg sm:rounded-xl bg-white text-black transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10 text-center whitespace-nowrap"
              >
                {portfolioContent.hero.ctaWork}
              </Link>

              {/* Glass Button: COLLABORATE ↗ */}
              <Link
                ref={collabBtnRef}
                onPointerMove={handlePointerMove}
                href="#contact"
                className="relative overflow-hidden inline-flex items-center justify-center gap-1 sm:gap-2 px-2.5 xs:px-3 sm:px-[26px] py-2 xs:py-2.5 sm:py-4 text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.18em] uppercase rounded-lg sm:rounded-xl border border-white/[0.18] bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-[22px] backdrop-saturate-[170%] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] text-center whitespace-nowrap"
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

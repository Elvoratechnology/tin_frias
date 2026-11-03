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
      className="relative h-[100svh] min-h-[580px] w-full overflow-hidden select-none"
    >
      {/* Volumetric Atmosphere & Silhouette Backlight behind the person */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-[15%] -translate-x-1/2 z-[1] w-[clamp(280px,42vw,620px)] h-[clamp(280px,42vw,620px)] rounded-full blur-[80px] sm:blur-[90px] opacity-75"
        style={{
          background:
            "radial-gradient(circle, rgba(111, 134, 179, 0.32) 0%, rgba(38, 52, 86, 0.28) 50%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Grounding Base Glow under the cutout */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 z-[1] w-[clamp(300px,50vw,700px)] h-[160px] sm:h-[180px] blur-[55px] sm:blur-[60px] opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at bottom, rgba(111, 134, 179, 0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Split Name: IDENTICAL TO PC on all screens (single row, JUSTIN on left, FRIAS on right, head in center) */}
      <div className="pointer-events-none absolute left-0 right-0 top-[26%] sm:top-[28%] md:top-[30%] z-[1]">
        <div
          className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-row justify-center items-baseline gap-2 sm:gap-4 lg:gap-6 font-display text-[clamp(28px,7.8vw,165px)] leading-none tracking-[-0.01em] animate-hero-rise motion-reduce:animate-none"
          aria-label={portfolioContent.personal.displayName}
        >
          {/* JUSTIN: white to light gray-blue */}
          <span className="bg-gradient-to-r from-white via-white/90 to-[#c9d2e6] bg-clip-text text-transparent">
            {portfolioContent.personal.firstName}
          </span>

          {/* FRIAS: gray-blue to deep navy */}
          <span className="bg-gradient-to-r from-[#8b9bbd] to-[#263456] bg-clip-text text-transparent flex items-baseline ml-1.5 sm:ml-3 lg:ml-4">
            FRIA
            {/* S outline-only without the vertical cursor bar */}
            <span className="relative inline-block font-normal text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.55)] md:[-webkit-text-stroke:2px_rgba(255,255,255,0.55)]">
              S
            </span>
          </span>
        </div>
      </div>

      {/* Justin Cutout Photo: commanding presence, head between JUSTIN and FRIAS just like PC */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 z-[2] h-[78svh] sm:h-[80svh] md:h-[82svh] max-w-[96vw] md:max-w-none flex items-end justify-center">
        <img
          src="/justin-cutout.png"
          alt="Justin Lyoid Frias"
          className="h-full w-auto object-contain object-bottom contrast-[1.08] brightness-[0.98] saturate-[1.04] drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)] drop-shadow-[0_0_70px_rgba(38,52,86,0.4)] [mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0.85)_78%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0.85)_78%,transparent_98%)]"
        />
      </div>

      {/* Base Dark Gradient Vignette for seamless bottom melt */}
      <div
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-28 sm:h-32 md:h-36 z-[3] bg-gradient-to-t from-black via-black/85 to-transparent"
        aria-hidden="true"
      />

      {/* Bottom Container: aligns with the hero boundaries */}
      <div className="absolute left-0 right-0 bottom-[4%] sm:bottom-[6%] md:bottom-[8%] z-10 pointer-events-none pb-[env(safe-area-inset-bottom,0px)]">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-3.5 sm:gap-5">
          {/* Bottom Left: Role & Subrole */}
          <div className="pointer-events-auto max-w-[90vw] md:max-w-none text-left">
            <h1 className="text-[clamp(17px,2.2vw,32px)] font-bold font-sans tracking-[0.02em] uppercase text-white leading-[1.1] m-0 drop-shadow-md">
              {portfolioContent.personal.role}
            </h1>
            <p className="mt-1 sm:mt-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-white/60 uppercase">
              {portfolioContent.personal.subRole}
            </p>
          </div>

          {/* Bottom Right: DESIGN. BUILD. SHIP. & Buttons */}
          <div className="pointer-events-auto text-left md:text-right w-full md:w-auto">
            {/* Stacked words: hidden on mobile */}
            <div className="hidden md:block font-display text-[clamp(22px,2.4vw,36px)] leading-[1.15] mb-4 text-right">
              <div className="text-white">{portfolioContent.hero.words[0]}</div>
              <div className="text-[#b8b8b8]">{portfolioContent.hero.words[1]}</div>
              <div className="text-[#8a8a8a]">{portfolioContent.hero.words[2]}</div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2.5 sm:gap-[14px] justify-start md:justify-end items-center">
              {/* Solid White Button: VIEW WORK */}
              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-[22px] md:px-[26px] py-2.5 sm:py-3.5 md:py-4 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase rounded-xl bg-white text-black transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
              >
                {portfolioContent.hero.ctaWork}
              </Link>

              {/* Glass Button: COLLABORATE ↗ */}
              <Link
                ref={collabBtnRef}
                onPointerMove={handlePointerMove}
                href="#contact"
                className="relative overflow-hidden inline-flex items-center justify-center gap-1.5 px-4 sm:px-[22px] md:px-[26px] py-2.5 sm:py-3.5 md:py-4 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase rounded-xl border border-white/[0.18] bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-[22px] backdrop-saturate-[170%] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] before:pointer-events-none before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(160px_circle_at_var(--mx,50%)_var(--my,0%),rgba(255,255,255,0.22),transparent_70%)]"
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

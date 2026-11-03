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
      {/* Huge Split Name — JUSTIN on left, FRIAS on right, photo in center */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[18%] md:top-[33%] z-[1] flex items-baseline justify-between w-full font-display leading-none tracking-[-0.02em] animate-hero-rise motion-reduce:animate-none"
        style={{ fontSize: "clamp(54px, 9.4vw, 190px)" }}
        aria-label={portfolioContent.personal.displayName}
      >
        {/* JUSTIN: left-pinned, white → light gray-blue */}
        <span
          className="bg-gradient-to-r from-white via-white/95 to-[#c9d2e6] bg-clip-text text-transparent pl-[clamp(8px,2.5vw,32px)]"
          style={{ letterSpacing: "-0.02em" }}
        >
          JUSTIN
        </span>

        {/* FRIAS: right-pinned, gray-blue → deep navy */}
        <span
          className="bg-gradient-to-r from-[#8b9bbd] to-[#263456] bg-clip-text text-transparent pr-[clamp(8px,2.5vw,32px)]"
          style={{ letterSpacing: "-0.02em" }}
        >
          FRIAS
        </span>
      </div>

      {/* Mobile stacked name (shown only on mobile) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[16%] z-[5] flex flex-col px-4 font-display leading-[0.9] tracking-[-0.02em] animate-hero-rise motion-reduce:animate-none md:hidden"
        style={{ fontSize: "21vw" }}
        aria-hidden="true"
      >
        <span className="bg-gradient-to-r from-white via-white/95 to-[#c9d2e6] bg-clip-text text-transparent self-start">
          JUSTIN
        </span>
        <span className="bg-gradient-to-r from-[#8b9bbd] to-[#263456] bg-clip-text text-transparent self-end">
          FRIAS
        </span>
      </div>

      {/* Justin Cutout Photo */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 z-[2] h-[58svh] md:h-[82svh] max-w-[94vw] md:max-w-none flex items-end justify-center">
        <img
          src="/justin-cutout.png"
          alt="Justin Lyoid Frias"
          className="h-full w-auto object-contain object-bottom contrast-[1.05] brightness-[0.96] [mask-image:linear-gradient(to_bottom,#000_68%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_68%,transparent_98%)]"
        />
      </div>

      {/* Bottom Left: Role & Subrole */}
      <div className="absolute left-4 sm:left-[clamp(16px,6vw,110px)] bottom-[22%] md:bottom-[15%] z-10 max-w-[85vw] md:max-w-none">
        <h1 className="text-[clamp(18px,2.2vw,32px)] font-bold font-sans tracking-[0.02em] uppercase text-white leading-[1.1] m-0">
          {portfolioContent.personal.role}
        </h1>
        <p className="mt-2 text-[11px] font-semibold tracking-[0.3em] text-white/60 uppercase">
          {portfolioContent.personal.subRole}
        </p>
      </div>

      {/* Bottom Right: Design. Build. Ship. & Buttons */}
      <div className="absolute left-4 right-4 md:left-auto md:right-[clamp(16px,6vw,110px)] bottom-[5%] md:bottom-[15%] z-10 text-left md:text-right">
        {/* Stacked words: hidden on mobile */}
        <div className="hidden md:block font-display text-[clamp(22px,2.4vw,36px)] leading-[1.15] mb-5">
          <div className="text-white">{portfolioContent.hero.words[0]}</div>
          <div className="text-[#b8b8b8]">{portfolioContent.hero.words[1]}</div>
          <div className="text-[#8a8a8a]">{portfolioContent.hero.words[2]}</div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-[14px] justify-start md:justify-end items-center">
          {/* Solid White Button: VIEW WORK */}
          <Link
            href="#work"
            className="inline-flex items-center gap-2 px-[26px] py-4 text-[11px] font-bold tracking-[0.18em] uppercase rounded-xl bg-white text-black transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
          >
            {portfolioContent.hero.ctaWork}
          </Link>

          {/* Glass Button: COLLABORATE ↗ */}
          <Link
            ref={collabBtnRef}
            onPointerMove={handlePointerMove}
            href="#contact"
            className="relative overflow-hidden inline-flex items-center gap-2 px-[26px] py-4 text-[11px] font-bold tracking-[0.18em] uppercase rounded-xl border border-white/[0.18] bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-[22px] backdrop-saturate-[170%] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] before:pointer-events-none before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(160px_circle_at_var(--mx,50%)_var(--my,0%),rgba(255,255,255,0.22),transparent_70%)]"
          >
            {portfolioContent.hero.ctaContact}
          </Link>
        </div>
      </div>
    </section>
  );
}

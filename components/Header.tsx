"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { portfolioContent } from "@/data/content";

export function Header() {
  const talkBtnRef = useRef<HTMLAnchorElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (talkBtnRef.current) {
      const rect = talkBtnRef.current.getBoundingClientRect();
      talkBtnRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      talkBtnRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
  };

  return (
    <header className="fixed top-[calc(14px+env(safe-area-inset-top,0px))] left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-[clamp(16px,6vw,110px)] gap-3 pointer-events-none">
      {/* Left: Logo */}
      <Link
        href="#home"
        className="pointer-events-auto text-[13px] font-bold tracking-[0.3em] text-white hover:text-white/80 transition-colors uppercase select-none"
      >
        {portfolioContent.personal.displayName}
      </Link>

      {/* Center: Glass Pill Nav (hidden on mobile) */}
      <nav
        aria-label="Main"
        className="pointer-events-auto hidden md:flex items-center gap-1 p-[5px] rounded-full border border-white/[0.18] bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-[22px] backdrop-saturate-[170%] shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)]"
      >
        {portfolioContent.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[11px] font-semibold tracking-[0.2em] text-white/90 hover:text-white px-4 py-[9px] rounded-full transition-all hover:bg-white/[0.16] focus-visible:bg-white/[0.2] focus-visible:outline-none"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right: Glass Button LET'S TALK */}
      <Link
        ref={talkBtnRef}
        onPointerMove={handlePointerMove}
        href="#contact"
        className="pointer-events-auto relative overflow-hidden rounded-full border border-white/[0.18] bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-[22px] backdrop-saturate-[170%] px-[22px] py-[11px] text-[11px] font-bold tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.4)] transition-all hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] before:pointer-events-none before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(120px_circle_at_var(--mx,50%)_var(--my,0%),rgba(255,255,255,0.25),transparent_70%)]"
      >
        LET’S TALK
      </Link>
    </header>
  );
}

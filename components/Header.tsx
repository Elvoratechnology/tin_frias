"use client";

import React from "react";
import Link from "next/link";
import { portfolioContent } from "@/data/content";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 px-6 sm:px-10 md:px-16 lg:px-20 transition-all">
      {/* Left: Logo (JUSTIN in bright white, FRIAS with soft fade, natural word spacing) */}
      <Link
        href="#home"
        className="group inline-flex items-center text-[12px] sm:text-[13px] font-black tracking-[0.2em] uppercase select-none transition-opacity hover:opacity-90"
      >
        <span className="text-white font-extrabold">JUSTIN</span>
        <span className="ml-1.5 bg-gradient-to-r from-white/95 via-white/55 to-white/30 bg-clip-text text-transparent font-extrabold">
          FRIAS
        </span>
      </Link>

      {/* Center: Compact Floating Nav (HOME ABOUT WORK TOOLS - closely grouped like reference) */}
      <nav
        aria-label="Main"
        className="hidden md:flex items-center gap-5 lg:gap-6"
      >
        {portfolioContent.navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[11px] font-bold tracking-[0.16em] text-white/75 hover:text-white uppercase transition-colors duration-200 focus-visible:text-white focus-visible:outline-none"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right: Rectangular Outlined LET'S TALK Button */}
      <Link
        href="#contact"
        className="relative inline-flex items-center justify-center px-4 sm:px-5 py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.16em] text-white uppercase border border-white/25 hover:border-white/60 bg-black/40 hover:bg-white/[0.08] backdrop-blur-md rounded-[2px] transition-all duration-200 active:scale-[0.98]"
      >
        LET’S TALK
      </Link>
    </header>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolioContent } from "@/data/content";

export function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0c0d12]/85 backdrop-blur-md transition-all"
    >
      <div className="flex items-center justify-between py-3 sm:py-4 md:py-5 px-3 sm:px-6 md:px-8 lg:px-10 max-w-[1360px] mx-auto gap-2">
        {/* Left: Logo (Static text, not clickable) */}
        <div
          className="inline-flex items-baseline text-[10.5px] sm:text-[12px] font-black tracking-[0.16em] sm:tracking-[0.2em] uppercase select-none cursor-default flex-shrink-0"
        >
          <span className="text-white font-extrabold">JUSTIN</span>
          <span className="ml-[4px] sm:ml-[6px] bg-gradient-to-r from-white/95 via-white/55 to-white/30 bg-clip-text text-transparent font-extrabold">
            FRIAS
          </span>
        </div>

        {/* Center: Very Compact Floating Nav (HOME ABOUT WORK TOOLS) - Visible across all screen sizes! */}
        <nav
          aria-label="Main"
          className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {portfolioContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-1 text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-bold tracking-[0.1em] sm:tracking-[0.15em] text-white/70 hover:text-white uppercase transition-colors duration-200 focus-visible:text-white focus-visible:outline-none"
            >
              {item.label}
              {/* Subtle animated underline indicator on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#4169e1] to-[#6366f1] rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Sleek Rectangular Outlined LET'S TALK Button */}
        <Link
          href="#contact"
          className="group relative inline-flex items-center justify-center px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 text-[8.5px] xs:text-[9.5px] sm:text-[11px] font-bold tracking-[0.12em] sm:tracking-[0.16em] text-white uppercase border border-white/25 hover:border-[#4169e1]/80 bg-black/40 hover:bg-white/[0.08] backdrop-blur-md rounded-[2px] transition-all duration-300 active:scale-[0.98] overflow-hidden flex-shrink-0"
        >
          {/* Subtle sheen highlight sweep on hover */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          <span className="relative z-10">LET’S TALK</span>
        </Link>
      </div>

      {/* Animated Bottom Border Beam */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] w-full overflow-hidden pointer-events-none">
        {/* Subtle static baseline border */}
        <div className="absolute inset-0 bg-white/[0.08]" />
        {/* Continuous sweeping animated gradient beam */}
        <div className="animate-border-beam absolute top-0 -left-1/3 h-[1.5px] w-2/3 bg-gradient-to-r from-transparent via-[#4169e1] via-[65%] to-[#6366f1] opacity-90 blur-[0.5px]" />
        {/* Soft ambient blur trail */}
        <div className="animate-border-beam absolute top-0 -left-1/3 h-[4px] w-2/3 bg-gradient-to-r from-transparent via-[#4169e1]/40 via-[65%] to-[#6366f1]/30 opacity-70 blur-sm" />
      </div>
    </motion.header>
  );
}

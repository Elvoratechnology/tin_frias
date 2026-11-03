"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { portfolioContent } from "@/data/content";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 sm:py-5 px-4 sm:px-8 md:px-12 lg:px-14 max-w-[1440px] mx-auto transition-all">
        {/* Left: Logo (JUSTIN in solid white, FRIAS with subtle fade, natural gap) */}
        <Link
          href="#home"
          onClick={() => setMobileMenuOpen(false)}
          className="group inline-flex items-baseline text-[11px] sm:text-[12px] font-black tracking-[0.2em] uppercase select-none transition-opacity hover:opacity-90"
        >
          <span className="text-white font-extrabold">JUSTIN</span>
          <span className="ml-[6px] bg-gradient-to-r from-white/95 via-white/55 to-white/30 bg-clip-text text-transparent font-extrabold">
            FRIAS
          </span>
        </Link>

        {/* Center: Very Compact Floating Nav on Tablets & Desktops */}
        <nav
          aria-label="Main"
          className="hidden md:flex items-center gap-4 lg:gap-[18px]"
        >
          {portfolioContent.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-white/75 hover:text-white uppercase transition-colors duration-200 focus-visible:text-white focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Group: LET'S TALK Button + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="relative inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 text-[9.5px] sm:text-[11px] font-bold tracking-[0.16em] text-white uppercase border border-white/25 hover:border-white/60 bg-black/40 hover:bg-white/[0.08] backdrop-blur-md rounded-[2px] transition-all duration-200 active:scale-[0.98]"
          >
            LET’S TALK
          </Link>

          {/* Mobile Hamburger / Close Button for Phones */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-[4px] border border-white/20 bg-black/50 text-white/80 hover:text-white hover:border-white/40 active:scale-95 transition-all"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay for Android & iPhone */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 md:hidden bg-black/85 backdrop-blur-[24px] pt-24 px-6 pb-10 flex flex-col justify-between animate-in fade-in duration-200"
        >
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-5">
            <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase">
              // Navigation
            </span>
            {portfolioContent.navigation.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[20px] font-display uppercase tracking-wider text-white/85 hover:text-white hover:translate-x-1 transition-all py-1 border-b border-white/[0.06] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[11px] text-[#6f86b3]">
                  0{idx + 1}
                </span>
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-[12px] tracking-[0.18em] uppercase bg-white text-black hover:bg-white/90 active:scale-[0.98] transition-all"
            >
              LET’S TALK ↗
            </Link>
          </div>

          {/* Drawer Bottom Info */}
          <div className="pt-6 border-t border-white/[0.1] flex items-center justify-between text-[10px] font-mono tracking-wider text-white/45">
            <span>JUSTIN FRIAS</span>
            <span>ANTIPOLO CITY, PH</span>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React, { useRef } from "react";
import { portfolioContent } from "@/data/content";
import { GlassCard } from "./GlassCard";

export function ContactSection() {
  const { contact } = portfolioContent;
  const phoneBtnRef = useRef<HTMLAnchorElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (phoneBtnRef.current) {
      const rect = phoneBtnRef.current.getBoundingClientRect();
      phoneBtnRef.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      phoneBtnRef.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }
  };

  return (
    <section id="contact" className="pt-24 pb-12">
      <GlassCard className="p-8 sm:p-14 text-center flex flex-col items-center">
        {/* Section Heading */}
        <h2 className="font-display text-[clamp(28px,4.5vw,50px)] leading-tight mb-3 bg-gradient-to-r from-white via-white/95 to-[#8b9bbd] bg-clip-text text-transparent">
          {contact.title}
        </h2>

        {/* Subtext */}
        <p className="text-white/65 text-[15px] sm:text-[17px] max-w-[46ch] mx-auto mb-8 leading-relaxed">
          {contact.text}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          {/* Solid White Email Button */}
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white text-black font-bold text-[12px] sm:text-[13px] tracking-[0.16em] uppercase hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-white/10"
          >
            ✉ {contact.email}
          </a>

          {/* Glass Phone Button */}
          <a
            ref={phoneBtnRef}
            onPointerMove={handlePointerMove}
            href={contact.tel}
            className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-white/[0.18] bg-gradient-to-br from-white/[0.12] to-white/[0.03] backdrop-blur-[22px] backdrop-saturate-[170%] text-white font-bold text-[12px] sm:text-[13px] tracking-[0.16em] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] before:pointer-events-none before:absolute before:inset-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(160px_circle_at_var(--mx,50%)_var(--my,0%),rgba(255,255,255,0.25),transparent_70%)]"
          >
            📞 {contact.phone}
          </a>
        </div>
      </GlassCard>
    </section>
  );
}


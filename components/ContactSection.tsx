"use client";

import React, { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { portfolioContent } from "@/data/content";

export function ContactSection() {
  const { contact } = portfolioContent;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-24 pb-20 text-center">
      {/* Top Eyebrow */}
      <div className="mb-4 text-[11px] font-mono tracking-[0.28em] text-white/45 uppercase select-none">
        PROJECT INQUIRIES
      </div>

      {/* Main Display Headline */}
      <h2 className="font-display text-[clamp(36px,6vw,72px)] leading-none tracking-tight uppercase mb-6 select-none">
        <span className="text-white">LET&apos;S </span>
        <span className="bg-gradient-to-r from-white via-white/85 to-[#6f86b3] bg-clip-text text-transparent">
          CREATE.
        </span>
      </h2>

      {/* Monospace Subcaption */}
      <p className="font-mono text-[12px] sm:text-[13px] text-white/55 max-w-[62ch] mx-auto mb-10 leading-relaxed tracking-wide px-4">
        // {contact.text}
      </p>

      {/* Two Sleek Glass Contact Action Cards */}
      <div className="max-w-[760px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 text-left">
        {/* Left Card: Direct Mail */}
        <a
          href={`mailto:${contact.email}`}
          onClick={handleCopyEmail}
          className="group relative overflow-hidden rounded-[14px] border border-white/[0.12] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-black/70 backdrop-blur-[20px] p-4 sm:p-5 flex items-center justify-between transition-all duration-300 hover:border-white/35 hover:scale-[1.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_36px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Icon Box */}
            <div className="flex-shrink-0 h-10 w-10 rounded-[10px] border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/30 transition-colors">
              <Mail className="w-4 h-4" strokeWidth={1.8} />
            </div>

            {/* Text details */}
            <div className="min-w-0">
              <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-white/45 uppercase">
                DIRECT MAIL
              </span>
              <span className="block font-bold text-[13px] sm:text-[14px] text-white tracking-wide truncate mt-0.5 group-hover:text-white/90">
                {contact.email}
              </span>
            </div>
          </div>

          {/* Action icon (Copy / Copied) */}
          <div
            className="flex-shrink-0 ml-2 text-white/40 group-hover:text-white/80 transition-colors"
            title="Click to copy email"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.2} />
            ) : (
              <Copy className="w-4 h-4" strokeWidth={1.8} />
            )}
          </div>
        </a>

        {/* Right Card: Instant Contact / Phone */}
        <a
          href={contact.tel}
          className="group relative overflow-hidden rounded-[14px] border border-white/[0.12] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-black/70 backdrop-blur-[20px] p-4 sm:p-5 flex items-center justify-between transition-all duration-300 hover:border-white/35 hover:scale-[1.01] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_36px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            {/* Icon Box */}
            <div className="flex-shrink-0 h-10 w-10 rounded-[10px] border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/30 transition-colors">
              <Phone className="w-4 h-4" strokeWidth={1.8} />
            </div>

            {/* Text details */}
            <div className="min-w-0">
              <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-white/45 uppercase">
                INSTANT CONTACT
              </span>
              <span className="block font-bold text-[14px] sm:text-[15px] text-white tracking-wide truncate mt-0.5 group-hover:text-white/90">
                {contact.phone}
              </span>
            </div>
          </div>

          {/* Action icon (Arrow Up Right) */}
          <div className="flex-shrink-0 ml-2 text-white/40 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </div>
        </a>
      </div>
    </section>
  );
}

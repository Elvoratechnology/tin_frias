"use client";

import React, { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { portfolioContent } from "@/data/content";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialIconMap: Record<string, React.FC<{ className?: string }>> = {
  GitHub: GithubIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  "Twitter / X": TwitterXIcon,
};

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

      {/* Two Main Glass Contact Action Cards (Direct Mail & Phone) */}
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

      {/* Social Media Accounts with Official Logos */}
      <div className="max-w-[760px] mx-auto mt-4 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          {contact.socials?.map((social) => {
            const IconComponent = socialIconMap[social.name];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[14px] border border-white/[0.12] bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-black/70 backdrop-blur-[20px] p-3 sm:p-3.5 flex items-center justify-between transition-all duration-300 hover:border-white/35 hover:scale-[1.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_rgba(0,0,0,0.4)] cursor-pointer"
                title={`Visit ${social.name} profile (${social.username})`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* Official SVG Logo Box */}
                  <div className="flex-shrink-0 h-8 w-8 rounded-[8px] border border-white/15 bg-white/[0.04] flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/30 transition-colors">
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                  </div>

                  {/* Name & Handle */}
                  <div className="min-w-0">
                    <span className="block font-bold text-[12px] sm:text-[12.5px] text-white tracking-wide truncate group-hover:text-white">
                      {social.name}
                    </span>
                    <span className="block font-mono text-[9.5px] text-white/45 truncate">
                      {social.username}
                    </span>
                  </div>
                </div>

                {/* External arrow icon */}
                <div className="flex-shrink-0 text-white/35 group-hover:text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

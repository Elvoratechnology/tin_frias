import React from "react";
import { CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="pt-8 sm:pt-10 pb-[calc(env(safe-area-inset-bottom,0px)+3.5rem)] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-mono tracking-widest text-white/45 uppercase select-none text-center sm:text-left">
      {/* Left: Identity & Location */}
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 text-white/60 flex-shrink-0" strokeWidth={2} />
        <span>HI! I AM JUSTIN FRIAS · ANTIPOLO CITY</span>
      </div>

      {/* Right: Copyright */}
      <div>
        <span>© 2026 // ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
}

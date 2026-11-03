import React from "react";
import { portfolioContent } from "@/data/content";

export function Footer() {
  return (
    <footer className="text-center text-white/50 text-[13px] py-10 pb-16 tracking-wide border-t border-white/[0.08]">
      {portfolioContent.personal.footerText}
    </footer>
  );
}

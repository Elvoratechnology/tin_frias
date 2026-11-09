import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-display text-[clamp(26px,5.5vw,54px)] leading-tight mb-6 sm:mb-8",
        "bg-gradient-to-r from-white via-white/95 to-[#4169e1] bg-clip-text text-transparent select-none",
        className
      )}
    >
      {children}
    </h2>
  );
}


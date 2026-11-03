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
        "font-display text-[clamp(30px,4.5vw,54px)] leading-none mb-8",
        "bg-gradient-to-r from-white via-white/95 to-[#8b9bbd] bg-clip-text text-transparent select-none",
        className
      )}
    >
      {children}
    </h2>
  );
}


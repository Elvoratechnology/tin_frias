"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "nav" | "aside";
  interactive?: boolean;
}

export function GlassCard({
  children,
  className,
  as: Component = "div",
  interactive = true,
  onPointerMove,
  onPointerLeave,
  style,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (interactive && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cardRef.current.style.setProperty("--mx", `${x}px`);
      cardRef.current.style.setProperty("--my", `${y}px`);
    }
    onPointerMove?.(e);
  };

  return (
    <Component
      ref={cardRef as any}
      onPointerMove={handlePointerMove}
      onPointerLeave={onPointerLeave}
      style={style}
      className={cn(
        "glass-surface relative overflow-hidden rounded-[24px] border border-white/[0.18]",
        "bg-gradient-to-br from-white/[0.12] to-white/[0.03]",
        "backdrop-blur-[22px] backdrop-saturate-[170%]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.5)]",
        "transition-all duration-300",
        interactive &&
          "before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[24px] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 before:bg-[radial-gradient(240px_circle_at_var(--mx,50%)_var(--my,0%),rgba(255,255,255,0.2),transparent_70%)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

import React from "react";

export function BackgroundGlow() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {/* Raven Black (#0c0d12) base canvas */}
      <div className="absolute inset-0 bg-[#0c0d12]" />

      {/* Royal Blue (#4169e1) & Cobalt Atmospheric Ambient Glows */}
      {/* Upper-right expansive radiance */}
      <div
        className="animate-pulse-glow absolute -top-[16%] -right-[12%] w-[76vw] h-[76vw] max-w-[1060px] max-h-[1060px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(65, 105, 225, 0.45) 0%, rgba(37, 99, 235, 0.22) 42%, rgba(56, 189, 248, 0.08) 65%, transparent 75%)",
        }}
      />
      {/* Mid-left royal blue & indigo ambient wash */}
      <div
        className="animate-float-glow absolute top-[38%] -left-[15%] w-[62vw] h-[62vw] max-w-[860px] max-h-[860px] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(65, 105, 225, 0.32) 0%, rgba(99, 102, 241, 0.16) 48%, transparent 70%)",
        }}
      />
      {/* Lower ambient royal blue pool */}
      <div
        className="animate-pulse-glow absolute bottom-[5%] left-[25%] w-[52vw] h-[52vw] max-w-[760px] max-h-[760px] rounded-full blur-[135px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.30) 0%, rgba(65, 105, 225, 0.12) 50%, transparent 70%)",
        }}
      />

      {/* Complementary Accents: Electric Indigo & Ice Cyan (Complements Raven Black) */}
      {/* Lower-right electric indigo accent */}
      <div
        className="animate-float-glow absolute bottom-[6%] -right-[6%] w-[40vw] h-[40vw] max-w-[560px] max-h-[560px] rounded-full blur-[125px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.42) 0%, rgba(65, 105, 225, 0.18) 45%, transparent 70%)",
        }}
      />
      {/* Upper-left subtle ice cyan accent rim */}
      <div
        className="animate-pulse-glow absolute top-[10%] left-[6%] w-[26vw] h-[26vw] max-w-[360px] max-h-[360px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.32) 0%, rgba(65, 105, 225, 0.10) 50%, transparent 70%)",
        }}
      />

      {/* Depth vignette: preserves contrast and sharp UI readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(12, 13, 18, 0.65) 100%)",
        }}
      />
    </div>
  );
}

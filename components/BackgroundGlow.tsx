import React from "react";

export function BackgroundGlow() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {/* Raven Black (#0c0d12) canvas anchor */}
      <div className="absolute inset-0 bg-[#0c0d12]" />

      {/* Powder Blue (#b0e0e6) Dominant Atmospheric Presence */}
      {/* Upper-right expansive radiance */}
      <div
        className="absolute -top-[15%] -right-[12%] w-[75vw] h-[75vw] max-w-[1050px] max-h-[1050px] rounded-full blur-[140px] opacity-55"
        style={{
          background:
            "radial-gradient(circle, rgba(176, 224, 230, 0.44) 0%, rgba(176, 224, 230, 0.18) 45%, rgba(150, 205, 225, 0.06) 65%, transparent 75%)",
        }}
      />
      {/* Mid-left powder blue ambient wash */}
      <div
        className="absolute top-[38%] -left-[15%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full blur-[130px] opacity-45"
        style={{
          background:
            "radial-gradient(circle, rgba(176, 224, 230, 0.35) 0%, rgba(176, 224, 230, 0.12) 48%, transparent 70%)",
        }}
      />
      {/* Lower ambient powder blue pool */}
      <div
        className="absolute bottom-[5%] left-[25%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full blur-[135px] opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(176, 224, 230, 0.28) 0%, rgba(176, 224, 230, 0.08) 50%, transparent 70%)",
        }}
      />

      {/* Poppy Red (#e33d2f) Dynamic Accent Glows */}
      {/* Lower-right fiery poppy red accent */}
      <div
        className="absolute bottom-[6%] -right-[6%] w-[38vw] h-[38vw] max-w-[540px] max-h-[540px] rounded-full blur-[125px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(227, 61, 47, 0.50) 0%, rgba(227, 61, 47, 0.18) 45%, transparent 70%)",
        }}
      />
      {/* Upper-left subtle poppy red accent rim */}
      <div
        className="absolute top-[10%] left-[6%] w-[24vw] h-[24vw] max-w-[340px] max-h-[340px] rounded-full blur-[95px] opacity-35"
        style={{
          background:
            "radial-gradient(circle, rgba(227, 61, 47, 0.40) 0%, rgba(227, 61, 47, 0.10) 50%, transparent 70%)",
        }}
      />

      {/* Depth vignette: preserves contrast and sharp UI readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(12, 13, 18, 0.60) 100%)",
        }}
      />
    </div>
  );
}

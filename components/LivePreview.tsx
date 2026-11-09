"use client";

import React, { useEffect, useRef, useState } from "react";

interface LivePreviewProps {
  url: string;
  title: string;
  fallbackScreenshot: string;
  wide?: boolean;
}

export function LivePreview({
  url,
  title,
  fallbackScreenshot,
  wide = false,
}: LivePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.35);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    function updateScale() {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0) {
          setScale(width / 1280);
        }
      }
    }

    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (containerRef.current) {
      ro.observe(containerRef.current);
    }
    window.addEventListener("resize", updateScale);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  return (
    <div className="relative w-full group">
      {/* Top Left Live Badge */}
      <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-[0.14em] text-white/90 bg-black/75 backdrop-blur-md border border-white/20 select-none">
          <span className="relative flex h-[6px] w-[6px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
            <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
          </span>
          LIVE
        </span>
      </div>

      {/* Frame Container - Compact Aspect Ratio */}
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden rounded-xl border border-white/15 bg-[#05070d] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-[#4169e1]/50 ${
          wide ? "aspect-[16/9] md:aspect-[16/10]" : "aspect-[16/9.5]"
        }`}
      >
        {!isBlocked ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              src={url}
              title={`${title} live preview`}
              loading="lazy"
              onError={() => setIsBlocked(true)}
              style={{
                width: "1280px",
                height: "800px",
                transform: `scale(${scale})`,
                transformOrigin: "0 0",
              }}
              className="border-0 bg-[#05070d] pointer-events-none select-none"
            />
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c1220] to-[#04060a] p-4">
            <img
              src={fallbackScreenshot}
              alt={`${title} screenshot`}
              className="w-full h-full object-cover object-top opacity-90 rounded-lg"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-black/40 backdrop-blur-[2px]">
              <span className="text-xl mb-1">🌐</span>
              <p className="text-xs font-semibold text-white/90">{title}</p>
            </div>
          </div>
        )}

        {/* Clickable Overlay: Clicking anywhere navigates directly to the website! */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-30 cursor-pointer flex items-center justify-center bg-black/0 hover:bg-black/45 transition-all duration-200"
          title={`Click to open ${title} in new tab`}
        >
          <span className="opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-200 px-3.5 py-1.5 rounded-full bg-white text-black font-extrabold text-[11px] tracking-[0.14em] uppercase shadow-2xl flex items-center gap-1.5">
            Visit Website ↗
          </span>
        </a>
      </div>
    </div>
  );
}

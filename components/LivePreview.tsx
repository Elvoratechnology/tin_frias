"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [scale, setScale] = useState(0.4);
  const [isBlocked, setIsBlocked] = useState(false);
  const [viewMode, setViewMode] = useState<"live" | "fallback">("live");

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
    <div className="relative w-full">
      {/* Top Controls: Live badge + Switch mode button */}
      <div className="absolute top-2.5 left-2.5 right-2.5 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.14em] text-white/90 bg-black/60 backdrop-blur-md border border-white/20 select-none">
            <span
              className={`h-[7px] w-[7px] rounded-full ${
                viewMode === "live"
                  ? "bg-[#4ade80] shadow-[0_0_8px_#4ade80]"
                  : "bg-amber-400 shadow-[0_0_8px_#fbbf24]"
              }`}
            />
            {viewMode === "live" ? "● LIVE" : "SCREENSHOT"}
          </span>
        </div>

        {/* Fallback Switcher */}
        <button
          type="button"
          onClick={() => setViewMode(viewMode === "live" ? "fallback" : "live")}
          className="pointer-events-auto text-[10px] font-medium tracking-wider text-white/70 hover:text-white px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 hover:border-white/30 transition-all"
          title="Toggle between live interactive iframe and static screenshot"
        >
          {viewMode === "live" ? "Show Screenshot" : "Show Live"}
        </button>
      </div>

      {/* Frame Container */}
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden rounded-2xl border border-white/15 bg-[#05070d] shadow-[0_12px_40px_rgba(0,0,0,0.5)] ${
          wide ? "aspect-[16/8]" : "aspect-[16/10]"
        }`}
      >
        {viewMode === "live" && !isBlocked ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              ref={iframeRef}
              src={url}
              title={`${title} live preview`}
              loading="lazy"
              onError={() => {
                setIsBlocked(true);
                setViewMode("fallback");
              }}
              style={{
                width: "1280px",
                height: "800px",
                transform: `scale(${scale})`,
                transformOrigin: "0 0",
              }}
              className="border-0 bg-[#05070d] pointer-events-auto select-none"
            />
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c1220] to-[#04060a] p-4">
            <img
              src={fallbackScreenshot}
              alt={`${title} screenshot`}
              className="w-full h-full object-cover object-top opacity-90 rounded-xl"
              onError={(e) => {
                // If screenshot placeholder is 1x1, show attractive fallback placeholder
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40 backdrop-blur-[2px]">
              <div className="p-3 rounded-full bg-white/10 border border-white/20 mb-3">
                <span className="text-xl">🌐</span>
              </div>
              <p className="text-sm font-semibold text-white/90">
                {title} Preview
              </p>
              <p className="text-xs text-white/60 mt-1 max-w-sm">
                Live interactive embed or high-res preview. Click &quot;Open
                full site&quot; to test production app directly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

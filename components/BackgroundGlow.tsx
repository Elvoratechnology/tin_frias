import React from "react";

export function BackgroundGlow() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft steel-blue radial glows: bottom-right and bottom-left */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(40vw 40vw at 85% 55%, rgba(60, 90, 170, 0.26), transparent 70%),
            radial-gradient(35vw 35vw at 10% 90%, rgba(111, 134, 179, 0.16), transparent 70%),
            radial-gradient(30vw 30vw at 50% 15%, rgba(38, 52, 86, 0.18), transparent 70%)
          `,
        }}
      />
    </div>
  );
}


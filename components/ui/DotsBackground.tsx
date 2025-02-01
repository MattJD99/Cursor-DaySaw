import React from "react";

export function DotsBackground() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-white via-pink-50/50 to-white py-8">
      <div className="w-full h-12 bg-[url('/images/googlefi-dots.webp')] bg-repeat-x bg-contain" />
    </div>
  );
} 
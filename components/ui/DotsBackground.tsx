import React from "react";

interface DotsBackgroundProps {
  className?: string;
}

export function DotsBackground({ className = 'h-12' }: DotsBackgroundProps) {
  return (
    <div className={`w-full bg-[url('/images/googlefi-dots.webp')] bg-repeat-x bg-contain ${className}`} />
  );
} 
import React from 'react';

interface HeroHeadlineProps {
  text: string;
  className?: string;
}

export function HeroHeadline({ text, className = '' }: HeroHeadlineProps) {
  return (
    <h2 className={`section-title ${className}`}>
      {text}
    </h2>
  );
} 
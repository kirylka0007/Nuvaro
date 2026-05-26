'use client';

import React from 'react';
import SectionLabel from './SectionLabel';
import GradientButton from './GradientButton';
import OutlineButton from './OutlineButton';

interface ProductCardProps {
  label: string;
  headline: string;
  tagline: string;
  bullets: string[];
  price: string;
  ctaText: string;
  ctaHref: string;
  variant: 'primary' | 'secondary';
}

export default function ProductCard({
  label,
  headline,
  tagline,
  bullets,
  price,
  ctaText,
  ctaHref,
  variant,
}: ProductCardProps) {
  const borderClass =
    variant === 'primary'
      ? 'border-brand/40'
      : 'border-navy-700 hover:border-brand/40';

  const topBorderStyle =
    variant === 'primary'
      ? { borderTopColor: 'transparent' }
      : undefined;

  const topGradientBar =
    variant === 'primary' ? (
      <div
        className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
        style={{ background: 'linear-gradient(135deg, #1E7FD8, #00D4FF)' }}
      />
    ) : null;

  return (
    <div
      className={`relative bg-navy-900 border ${borderClass} rounded-2xl p-8 flex flex-col gap-5 h-full hover:-translate-y-0.5 transition-all duration-300`}
      style={topBorderStyle}
    >
      {topGradientBar}

      {/* Label */}
      <SectionLabel>{label}</SectionLabel>

      {/* Headline & tagline */}
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-bold text-text-primary">{headline}</h2>
        <p className="text-sm text-text-secondary">{tagline}</p>
      </div>

      {/* Bullets */}
      <ul className="flex flex-col gap-2 flex-1">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <span
              className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
              style={{ background: 'linear-gradient(135deg, #1E7FD8, #00D4FF)' }}
              aria-hidden="true"
            >
              ✓
            </span>
            <span className="text-sm text-text-secondary leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="flex flex-col gap-0.5">
        <span className="text-xs text-text-muted">Starting from</span>
        <span className="text-sm font-bold text-text-primary">{price}</span>
      </div>

      {/* CTA */}
      {variant === 'primary' ? (
        <GradientButton href={ctaHref} size="md" className="w-full justify-center">
          {ctaText}
        </GradientButton>
      ) : (
        <OutlineButton href={ctaHref} size="md" className="w-full justify-center">
          {ctaText}
        </OutlineButton>
      )}
    </div>
  );
}

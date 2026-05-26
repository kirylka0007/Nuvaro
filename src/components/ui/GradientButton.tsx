'use client';

import React from 'react';

type Size = 'sm' | 'md' | 'lg';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: Size;
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm font-semibold',
  lg: 'px-8 py-4 text-base font-semibold',
};

const base =
  'inline-flex items-center justify-center rounded-lg text-white font-semibold ' +
  'transition-all duration-200 hover:scale-105 hover:shadow-lg ' +
  'focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-navy-900 ' +
  'cursor-pointer select-none';

const gradientStyle = {
  background: 'linear-gradient(135deg, #1E7FD8, #00D4FF)',
} as const;

export default function GradientButton({
  children,
  onClick,
  href,
  className = '',
  size = 'md',
}: GradientButtonProps) {
  const classes = `${base} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} style={gradientStyle}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} style={gradientStyle}>
      {children}
    </button>
  );
}

'use client';

import React from 'react';

type Size = 'sm' | 'md' | 'lg';

interface OutlineButtonProps {
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
  'inline-flex items-center justify-center rounded-lg font-semibold ' +
  'border border-navy-600 text-text-secondary ' +
  'hover:border-brand hover:text-text-primary ' +
  'transition-all duration-200 ' +
  'focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-navy-900 ' +
  'cursor-pointer select-none';

export default function OutlineButton({
  children,
  onClick,
  href,
  className = '',
  size = 'md',
}: OutlineButtonProps) {
  const classes = `${base} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

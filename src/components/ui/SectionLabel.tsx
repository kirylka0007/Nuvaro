import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${className}`}
      style={{
        background: 'rgba(30, 127, 216, 0.1)',
        color: '#00D4FF',
      }}
    >
      {children}
    </span>
  );
}

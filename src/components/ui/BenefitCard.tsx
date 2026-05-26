import React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function BenefitCard({
  icon,
  title,
  description,
  className = '',
}: BenefitCardProps) {
  return (
    <div
      className={`bg-navy-900 border border-navy-700 rounded-xl p-5 hover:border-brand/40 transition-colors duration-200 ${className}`}
    >
      <div
        className="inline-flex items-center justify-center rounded-lg p-2"
        style={{ background: 'rgba(30, 127, 216, 0.15)' }}
      >
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-text-primary mt-3 mb-1">{title}</h3>
      <p className="text-xs text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}

'use client';

import React from 'react';
import { Zap, Shield, Clock } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cards: ValueCard[] = [
  {
    icon: <Zap size={24} color="#1E7FD8" aria-hidden="true" />,
    title: 'No-code for end users',
    description:
      'Your team uses the tools they already know — Excel, Word, your CRM. We connect the intelligence behind the scenes. No training required.',
  },
  {
    icon: <Shield size={24} color="#1E7FD8" aria-hidden="true" />,
    title: 'Enterprise security',
    description:
      'Nuvaro Sync aligns with Microsoft 365 identity. Your data never leaves your environment. SOC2-aligned architecture.',
  },
  {
    icon: <Clock size={24} color="#1E7FD8" aria-hidden="true" />,
    title: 'Fast time to value',
    description:
      'Flow delivers a diagnostic report in 5 working days. Sync runs on your first template launch. No multi-year rollouts.',
  },
];

export default function WhyNuvaro() {
  return (
    <section id="why" className="py-24 px-6" style={{ backgroundColor: '#071120' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <SectionLabel>WHY NUVARO</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Built different. By design.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We combine enterprise rigour with SME pragmatism — no bloated software, no endless
            consulting engagements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-navy-900 border border-navy-700 rounded-2xl p-8 hover:border-brand/40 transition-colors duration-300"
            >
              <div
                className="inline-flex items-center justify-center rounded-xl p-3"
                style={{ background: 'rgba(30, 127, 216, 0.1)' }}
              >
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">{card.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

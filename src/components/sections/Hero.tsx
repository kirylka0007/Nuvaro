'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';
import OutlineButton from '@/components/ui/OutlineButton';

const bullets = {
  flow: [
    'No software to install',
    'Plain-English report, not a dashboard',
    'Results in 5 working days',
  ],
  sync: [
    'Template-agnostic — no rebuild when templates change',
    'Secure, Microsoft 365 identity',
    'Saves 10–20 hours per user per year',
  ],
};

function BulletItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full"
        style={{ background: 'linear-gradient(135deg, #1E7FD8, #00D4FF)' }}
        aria-hidden="true"
      />
      <span className="text-sm text-slate-400 leading-relaxed">{text}</span>
    </li>
  );
}

function ProductChip({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-2"
      style={{ background: 'rgba(30, 127, 216, 0.1)', color: '#00D4FF' }}
    >
      {label}
    </span>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-navy-800 min-h-screen flex flex-col justify-center items-center pt-16 pb-24 px-6">
      {/* Radial glow overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(30,127,216,0.15), transparent)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto w-full text-center flex flex-col items-center">
        {/* Badge chip */}
        <div className="inline-flex items-center gap-2 bg-navy-700 border border-navy-600 text-xs text-slate-400 px-4 py-1.5 rounded-full mb-8">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #1E7FD8, #00D4FF)' }}
            aria-hidden="true"
          />
          AI Automation · Process Mining · Tech Consulting
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 mx-auto"
          style={{ maxWidth: '900px' }}
        >
          Intelligent automation for modern finance &amp; operations teams.
        </h1>

        {/* Subheading */}
        <p className="text-lg text-slate-400 mb-16 max-w-xl mx-auto">
          Two focused solutions. Zero manual effort. Measurable results.
        </p>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
          {/* Flow card */}
          <div
            className="bg-navy-900 rounded-2xl p-8 text-left flex flex-col gap-5"
            style={{ border: '1px solid rgba(30,127,216,0.4)' }}
          >
            <div>
              <ProductChip label="Nuvaro Flow" />
              <h2 className="text-xl font-bold text-white mt-1">
                See exactly where your business is losing time and money
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Fixed-price process diagnostics for SMEs, delivered in 5 days.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {bullets.flow.map((b) => (
                <BulletItem key={b} text={b} />
              ))}
            </ul>

            <div>
              <p className="text-xs text-slate-500">Starting from</p>
              <p className="text-sm font-bold text-white">From £299 per diagnostic</p>
            </div>

            <GradientButton onClick={() => scrollTo('flow')} size="md">
              Explore Nuvaro Flow →
            </GradientButton>
          </div>

          {/* Sync card */}
          <div
            className="bg-navy-900 rounded-2xl p-8 text-left flex flex-col gap-5"
            style={{ border: '1px solid rgba(30,127,216,0.2)' }}
          >
            <div>
              <ProductChip label="Nuvaro Sync" />
              <h2 className="text-xl font-bold text-white mt-1">
                Your Power BI data, live in Word — automatically
              </h2>
              <p className="text-sm text-slate-400 mt-2">
                Stop copying figures manually. Templates bind to your semantic model at runtime.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {bullets.sync.map((b) => (
                <BulletItem key={b} text={b} />
              ))}
            </ul>

            <div>
              <p className="text-xs text-slate-500">Starting from</p>
              <p className="text-sm font-bold text-white">From £12/user/month</p>
              <p className="text-xs text-slate-500 mt-0.5">Enterprise from £40k/year</p>
            </div>

            <OutlineButton onClick={() => scrollTo('sync')} size="md">
              Explore Nuvaro Sync →
            </OutlineButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          type="button"
          onClick={() => scrollTo('flow')}
          className="mt-16 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors duration-200 cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span className="text-xs tracking-wide">Scroll to explore</span>
          <ChevronDown
            size={20}
            className="animate-bounce"
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}

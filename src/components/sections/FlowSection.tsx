'use client'

import { Package, FileText, Zap, Target, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: Package,
    title: 'No software to install',
    description: 'Just export a CSV or connect your existing tool. We do the technical heavy lifting.',
  },
  {
    icon: FileText,
    title: 'Plain-English report, not a dashboard',
    description: 'A one-page findings document with 3 prioritised, actionable recommendations.',
  },
  {
    icon: Zap,
    title: 'Results in 5 working days',
    description: 'From data upload to delivered report. No lengthy consulting engagement.',
  },
  {
    icon: Target,
    title: 'Works with your existing data',
    description: 'CRM exports, booking system data, accounting software — we work with what you have.',
  },
]

const customerPills = [
  'Law firms',
  'Dental practices',
  'Recruitment agencies',
  'E-commerce',
]

const steps = [
  {
    number: 1,
    title: 'Export your data',
    description:
      'Download a CSV or data export from your CRM, booking system, or accounting software.',
  },
  {
    number: 2,
    title: 'Upload securely',
    description:
      'Share your data file via our secure portal. No new accounts or integrations required.',
  },
  {
    number: 3,
    title: 'We analyse',
    description:
      'Our team applies process mining techniques to identify bottlenecks and inefficiencies.',
  },
  {
    number: 4,
    title: 'Report delivered',
    description:
      'You receive a plain-English report with findings and 3 prioritised recommendations.',
  },
]

const bottlenecks = [
  {
    label: 'Client onboarding',
    width: '78%',
    barClass: 'bg-gradient-to-r from-red-500 to-orange-400',
    value: '4.2 days avg delay',
  },
  {
    label: 'Invoice processing',
    width: '55%',
    barClass: 'bg-gradient-to-r from-amber-500 to-yellow-400',
    value: '2.8 days avg delay',
  },
  {
    label: 'File retrieval',
    width: '32%',
    barClass: 'gradient-bg',
    value: '1.4 days avg delay',
  },
]

const recommendations = [
  'Implement digital intake forms to eliminate manual data re-entry at client onboarding stage.',
  'Automate invoice approval workflow — current 3-step email chain adds 2+ days.',
  'Centralise document storage with standardised naming convention.',
]

export default function FlowSection() {
  return (
    <section id="flow" className="bg-navy-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text */}
          <div>
            {/* Section label */}
            <span
              className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full"
              style={{ color: '#00D4FF', background: 'rgba(30,127,216,0.1)' }}
            >
              NUVARO FLOW
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4 leading-tight">
              See exactly where your business is losing time and money
            </h2>

            <p className="text-base text-slate-400 mb-8">
              A fixed-price process diagnostic service for SMEs. Export data from your existing
              systems — we analyse it and deliver a plain-English bottleneck report with
              prioritised recommendations.
            </p>

            {/* Benefits */}
            <div className="space-y-5 mb-8">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="gradient-bg w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="text-sm text-slate-400">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trusted by */}
            <div className="flex flex-wrap gap-2 items-center mb-8">
              <span className="text-xs text-slate-500 font-medium">Trusted by:</span>
              {customerPills.map((pill) => (
                <span
                  key={pill}
                  className="bg-navy-800 border border-navy-700 text-xs text-slate-400 px-3 py-1 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Pricing callout */}
            <div
              className="mt-8 p-5 rounded-xl"
              style={{
                background: 'rgba(30,127,216,0.08)',
                border: '1px solid rgba(30,127,216,0.2)',
              }}
            >
              <p className="text-2xl font-bold text-white">From £299 per diagnostic</p>
              <p className="text-sm text-slate-400 mt-1">
                Fixed price. No surprises. No ongoing subscription.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="gradient-bg inline-block text-white px-6 py-3 rounded-lg text-sm font-semibold mt-4 hover:scale-105 transition-transform"
              >
                Request a diagnostic →
              </a>
            </div>
          </div>

          {/* RIGHT: Mock visual */}
          <div
            className="rounded-2xl border border-navy-700 p-6"
            style={{ background: '#071120' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="gradient-bg w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText size={14} className="text-white" />
                </div>
                <span className="text-sm font-semibold text-white">Diagnostic Report</span>
              </div>
              <span
                className="text-xs px-2 py-1 rounded"
                style={{ background: 'rgba(30,127,216,0.1)', color: '#00D4FF' }}
              >
                5 day turnaround
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Example: Thornton &amp; Associates LLP
            </p>

            {/* Bottlenecks */}
            <p className="text-xs font-bold tracking-wider text-slate-500 mb-3 uppercase">
              Process Bottlenecks
            </p>
            <div className="space-y-4 mb-2">
              {bottlenecks.map(({ label, width, barClass, value }) => (
                <div key={label}>
                  <p className="text-xs text-slate-400 mb-1">{label}</p>
                  <div className="w-full h-2 rounded-full bg-navy-700">
                    <div
                      className={`h-2 rounded-full ${barClass}`}
                      style={{ width }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">{value}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-navy-700 my-5" />

            {/* Recommendations */}
            <p className="text-xs font-bold tracking-wider text-slate-500 mb-3 uppercase">
              Top Recommendations
            </p>
            <div>
              {recommendations.map((rec, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <div className="gradient-bg w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-navy-700 pt-4 mt-4 flex items-center gap-2">
              <CheckCircle size={13} className="text-slate-500 flex-shrink-0" />
              <p className="text-xs text-slate-500">Delivered securely. Plain-English format.</p>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS timeline */}
        <div className="mt-16">
          <div className="mb-10 flex items-center gap-3">
            <span
              className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full"
              style={{ color: '#00D4FF', background: 'rgba(30,127,216,0.1)' }}
            >
              HOW IT WORKS
            </span>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-0">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex-1 flex flex-col md:flex-row items-start">
                <div className="flex flex-col items-center">
                  <div className="gradient-bg w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                  {/* Connector line — only on desktop, not after last step */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block h-0.5 w-full" />
                  )}
                </div>
                {/* Connector line (horizontal, desktop) between circle and next step */}
                {idx < steps.length - 1 && (
                  <div
                    className="hidden md:block self-center flex-1 h-px mx-3"
                    style={{ background: 'rgba(30,127,216,0.3)' }}
                  />
                )}
                <div className="md:hidden mt-3 pl-0 max-w-xs">
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Step labels below circles — desktop */}
          <div className="hidden md:grid grid-cols-4 gap-6 mt-4">
            {steps.map((step) => (
              <div key={step.number}>
                <p className="text-sm font-semibold text-white mt-3">{step.title}</p>
                <p className="text-xs text-slate-400 mt-1">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

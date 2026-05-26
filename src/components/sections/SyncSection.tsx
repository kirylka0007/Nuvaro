'use client'

import { Layers, Shield, RefreshCw, Clock, Zap, Clock3 } from 'lucide-react'

const benefits = [
  {
    icon: Layers,
    title: 'Template-agnostic',
    description:
      'No rebuild when your Word template changes. Bindings are declared in the document, not hardcoded.',
  },
  {
    icon: Shield,
    title: 'Secure by design',
    description:
      'Aligns with Microsoft 365 identity. No data leaves your tenant. Works with existing governance.',
  },
  {
    icon: RefreshCw,
    title: 'Always up to date',
    description:
      'Data resolves at runtime from your Power BI semantic model. Every report publish is fresh.',
  },
  {
    icon: Clock,
    title: 'Saves 10–20 hours per user per year',
    description:
      'Eliminate manual copy-paste cycles across all your Word-based reporting workflows.',
  },
]

const customerPills = [
  'Asset managers',
  'Banks',
  'Insurers',
  'Consulting firms',
  'ESG reporting teams',
]

const steps = [
  {
    number: 1,
    title: 'Define your template',
    description:
      'Add named content controls to your Word document where you want data to appear.',
  },
  {
    number: 2,
    title: 'Connect your model',
    description:
      'Nuvaro Sync connects to your Power BI semantic model via Microsoft identity.',
  },
  {
    number: 3,
    title: 'Declare your bindings',
    description:
      'Map content controls to measures and columns in your semantic model.',
  },
  {
    number: 4,
    title: 'Publish automatically',
    description:
      'Every time you publish the report, Word resolves all bindings from the latest model data.',
  },
]

const tableRows = [
  {
    metric: 'AUM (£bn)',
    current: '4.82',
    prior: '4.61',
    delta: '+4.6%',
    live: true,
  },
  {
    metric: 'Net Inflows (£m)',
    current: '127.3',
    prior: '89.4',
    delta: '+42.4%',
    live: true,
  },
  {
    metric: 'Sharpe Ratio',
    current: '1.24',
    prior: '1.18',
    delta: '+5.1%',
    live: true,
  },
]

export default function SyncSection() {
  return (
    <section id="sync" className="bg-navy-800 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Mock visual (order-last on mobile so text appears first) */}
          <div className="order-last lg:order-first">
            {/* Word document mock */}
            <div className="rounded-2xl bg-white p-6 shadow-2xl">
              {/* Word toolbar strip */}
              <div className="bg-slate-100 rounded-lg px-4 py-2 flex items-center gap-3 mb-5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-blue-600" />
                  <div className="w-3 h-3 rounded-sm bg-blue-500" />
                  <div className="w-3 h-3 rounded-sm bg-blue-400" />
                </div>
                <span className="text-xs text-slate-600 font-medium">
                  Q1 2026 Financial Report.docx
                </span>
              </div>

              {/* Document title */}
              <p className="text-base font-bold text-slate-800 mb-1">
                Q1 2026 — Quarterly Financial Report
              </p>
              <p className="text-xs text-slate-500 mb-4">Meridian Asset Management</p>

              {/* Table */}
              <table className="w-full border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-100">
                    {['Metric', 'Q1 2026', 'Q4 2025', 'Δ'].map((h) => (
                      <th
                        key={h}
                        className="text-slate-600 font-semibold p-2 border border-slate-200 text-left"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.metric}>
                      <td className="p-2 border border-slate-200 text-slate-700">
                        {row.metric}
                      </td>
                      <td
                        className="p-2 border font-semibold"
                        style={{
                          background: 'rgba(30,127,216,0.08)',
                          border: '1px solid rgba(30,127,216,0.3)',
                          color: '#1E7FD8',
                        }}
                      >
                        <span className="flex items-center gap-1">
                          {/* Chain-link binding indicator */}
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-70 flex-shrink-0"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          {row.current}
                        </span>
                      </td>
                      <td className="p-2 border border-slate-200 text-slate-600">
                        {row.prior}
                      </td>
                      <td className="p-2 border border-slate-200 text-green-600 font-medium">
                        {row.delta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Binding note */}
              <div
                className="rounded p-3 mt-4 flex items-start gap-2"
                style={{
                  background: 'rgba(30,127,216,0.05)',
                  border: '1px solid rgba(30,127,216,0.2)',
                }}
              >
                <Zap size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#1E7FD8' }} />
                <p className="text-xs text-slate-600">
                  3 values bound to Power BI semantic model — auto-updates on publish
                </p>
              </div>

              {/* Last refreshed */}
              <div className="flex items-center gap-1.5 mt-4">
                <Clock3 size={11} className="text-slate-400 flex-shrink-0" />
                <p className="text-xs text-slate-400">Last refreshed: Today at 09:14</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Text (order-first on mobile) */}
          <div className="order-first lg:order-last">
            {/* Section label */}
            <span
              className="inline-block text-xs font-bold tracking-widest px-3 py-1 rounded-full"
              style={{ color: '#00D4FF', background: 'rgba(30,127,216,0.1)' }}
            >
              NUVARO SYNC
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4 leading-tight">
              Your Power BI data, live in Word — automatically
            </h2>

            <p className="text-base text-slate-400 mb-8">
              A dynamic data binding engine that connects Power BI semantic models directly to
              Microsoft Word documents. Finance and reporting teams stop copying and pasting
              figures manually.
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

            {/* Deployed by */}
            <div className="flex flex-wrap gap-2 items-center mb-8">
              <span className="text-xs text-slate-500 font-medium">Deployed by:</span>
              {customerPills.map((pill) => (
                <span
                  key={pill}
                  className="bg-navy-900 border border-navy-700 text-xs text-slate-400 px-3 py-1 rounded-full"
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
                <div className="flex-1">
                  <p className="text-2xl font-bold text-white">£12/user/month</p>
                  <p className="text-sm text-slate-400 mt-0.5">Per-user licence</p>
                </div>
                <div className="hidden sm:block w-px h-10 mx-6" style={{ background: 'rgba(30,127,216,0.3)' }} />
                <div className="sm:hidden h-px w-full" style={{ background: 'rgba(30,127,216,0.3)' }} />
                <div className="flex-1">
                  <p className="text-2xl font-bold text-white">From £40k/year</p>
                  <p className="text-sm text-slate-400 mt-0.5">Enterprise licence</p>
                </div>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="gradient-bg inline-block text-white px-6 py-3 rounded-lg text-sm font-semibold mt-4 hover:scale-105 transition-transform"
              >
                Request a demo →
              </a>
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

          {/* Steps row */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-0">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex-1 flex flex-col md:flex-row items-start">
                <div className="flex flex-col items-center">
                  <div className="gradient-bg w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {step.number}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className="hidden md:block self-center flex-1 h-px mx-3"
                    style={{ background: 'rgba(30,127,216,0.3)' }}
                  />
                )}
                {/* Mobile step text */}
                <div className="md:hidden mt-3 max-w-xs">
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

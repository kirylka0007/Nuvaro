function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="gradient-bg w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        aria-hidden="true"
      >
        <span className="text-white font-bold text-sm leading-none select-none">N</span>
      </div>
      <span className="font-bold text-white text-lg leading-none">Nuvaro</span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="border-t border-navy-700 py-12 px-6"
      style={{ backgroundColor: '#071120' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Brand */}
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
              AI Automation | Process Mining | Tech Consulting
            </p>
          </div>

          {/* Center: Product & Company links */}
          <div className="flex gap-12 md:justify-center">
            {/* Products */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Products
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#flow"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Nuvaro Flow
                  </a>
                </li>
                <li>
                  <a
                    href="#sync"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Nuvaro Sync
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Company
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#why"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Why Nuvaro
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Get in touch */}
          <div className="flex flex-col gap-3 md:items-end">
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Get in touch
            </h3>
            <a
              href="mailto:enquiries@nuvaro.co.uk"
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              enquiries@nuvaro.co.uk
            </a>
            <a
              href="#"
              aria-label="Nuvaro on LinkedIn"
              className="text-slate-400 hover:text-white transition-colors duration-200 mt-1"
            >
              <LinkedInIcon size={20} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-700 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 Nuvaro Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-slate-700 text-xs" aria-hidden="true">|</span>
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

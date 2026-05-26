'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Flow', href: '#flow' },
  { label: 'Sync', href: '#sync' },
  { label: 'Why Nuvaro', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5 group" aria-label="Nuvaro home">
      <div
        className="gradient-bg w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        aria-hidden="true"
      >
        <span className="text-white font-bold text-sm leading-none select-none">N</span>
      </div>
      <span className="font-bold text-white text-lg leading-none">Nuvaro</span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page loads mid-scroll
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-800/95 backdrop-blur-md border-b border-navy-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="gradient-bg text-white text-sm font-semibold px-4 py-2 rounded-lg transition-opacity duration-200 hover:opacity-90"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-slate-400 hover:text-white transition-colors duration-200 p-1"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        id="mobile-nav"
        className={`md:hidden bg-navy-900 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col px-6 pt-2 pb-6 gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 py-2.5 border-b border-navy-700/50 last:border-none"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className="gradient-bg text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center mt-3 hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = 'nuvaro_cookie_consent';

function loadGA() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'true') {
      loadGA();
      setVisible(false);
    } else if (stored === 'false') {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'true');
    loadGA();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy-700"
      style={{ backgroundColor: '#0A1628' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
          We use Google Analytics to understand how visitors use our site. This helps us
          improve your experience.
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={handleDecline}
            className="border border-navy-600 text-slate-400 hover:text-white hover:border-navy-500 px-4 py-2 rounded-lg text-sm transition-colors duration-200 cursor-pointer"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="gradient-bg text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

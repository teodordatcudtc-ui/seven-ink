'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE, NAV_LINKS } from '@/lib/site';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/5"
      role="banner"
    >
      <div className="section-padding flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl tracking-[0.2em] text-brand-white hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
          aria-label="SEVEN INK. TATTOO SOCIETY - Acasă"
        >
          <span className="font-semibold">SEVEN INK.</span>
          <br className="hidden sm:block" />
          <span className="text-sm md:text-base tracking-[0.3em] text-brand-muted font-body font-normal">
            tattoo society
          </span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navigare principală"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black ${
                pathname === href
                  ? 'text-brand-gold'
                  : 'text-brand-white/80 hover:text-brand-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-brand-white"
          aria-label="Meniu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{menuOpen ? 'Închide meniul' : 'Deschide meniul'}</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-brand-charcoal border-t border-white/5 overflow-hidden"
          >
            <nav className="section-padding py-6 flex flex-col gap-4" aria-label="Navigare mobilă">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm uppercase tracking-widest py-2 ${
                    pathname === href ? 'text-brand-gold' : 'text-brand-white/80'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

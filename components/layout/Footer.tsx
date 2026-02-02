import Link from 'next/link';
import { SITE, NAV_LINKS } from '@/lib/site';

export function Footer() {
  return (
    <footer
      className="bg-brand-charcoal border-t border-white/10 section-padding py-12 md:py-16"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div>
          <p className="font-display text-2xl tracking-[0.15em] text-brand-white">
            {SITE.name}
          </p>
          <p className="font-body text-sm tracking-[0.2em] text-brand-muted mt-1">
            {SITE.tagline}
          </p>
          <p className="mt-4 text-sm text-brand-muted/90">{SITE.description}</p>
        </div>

        <nav aria-label="Linkuri footer">
          <p className="text-xs uppercase tracking-widest text-brand-muted mb-4">Navigare</p>
          <ul className="space-y-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-brand-white/80 hover:text-brand-gold transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/legal/privacy"
                className="text-brand-white/60 hover:text-brand-muted text-sm"
              >
                Politica de confidențialitate
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms"
                className="text-brand-white/60 hover:text-brand-muted text-sm"
              >
                Termeni și condiții
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-xs uppercase tracking-widest text-brand-muted mb-4">Contact</p>
          <address className="not-italic text-sm text-brand-white/90 space-y-2">
            <p>{SITE.address}</p>
            <p>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
              >
                {SITE.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-brand-gold transition-colors"
              >
                {SITE.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-brand-muted">
        <p>© {new Date().getFullYear()} {SITE.name} {SITE.tagline}. Toate drepturile rezervate.</p>
      </div>
    </footer>
  );
}

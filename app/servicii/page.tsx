import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Servicii',
  description: `Servicii SEVEN INK. TATTOO SOCIETY: tatuaje custom, cover-up, piercing. ${SITE.addressShort}.`,
};

export default function ServiciiPage() {
  return (
    <article className="pt-24 pb-20 md:pt-28 md:pb-24">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 md:mb-20 animate-fade-in">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              Ce oferim
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-brand-white leading-[0.95]">
              Servicii
            </h1>
            <p className="mt-6 text-brand-white/80 text-lg max-w-2xl">
              Tatuaje custom, cover-up și piercing – toate în condiții de igienă
              și calitate maximă.
            </p>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" role="list">
            {SERVICES.map((service, i) => (
              <li key={service.slug}>
                <Link
                  href={`/servicii/${service.slug}`}
                  className="group block p-6 md:p-8 bg-brand-charcoal border border-white/10 hover:border-brand-gold/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                >
                  <span className="text-xs uppercase tracking-widest text-brand-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-2 font-display text-2xl md:text-3xl tracking-wide text-brand-white group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-brand-muted">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-block text-sm uppercase tracking-widest text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Detalii →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

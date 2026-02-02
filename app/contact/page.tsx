import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact SEVEN INK. TATTOO SOCIETY – ${SITE.address}, ${SITE.phone}. Programează-te.`,
};

export default function ContactPage() {
  return (
    <article className="pt-24 pb-20 md:pt-28 md:pb-24">
      <section className="section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              Contact
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-white leading-[0.95]">
              Programează-te
            </h1>
            <p className="mt-6 text-brand-white/80 text-lg">
              {SITE.description} Ne găsești pe Lipscani 43.
            </p>
            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Adresă</p>
                <p className="text-brand-white">{SITE.address}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Telefon</p>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                  className="text-brand-white hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-brand-white hover:text-brand-gold transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="max-w-6xl mx-auto mt-16 md:mt-20">
          <h2 className="sr-only">Locație pe hartă</h2>
          <div className="rounded-sm overflow-hidden border border-white/10 aspect-video md:aspect-[21/9] bg-brand-charcoal">
            <iframe
              src={SITE.mapsEmbed}
              width="600"
              height="450"
              style={{ border: 0, width: '100%', height: '100%', minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SEVEN INK TATTOO SOCIETY pe Google Maps"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { GalerieGrid } from '@/components/galerie/GalerieGrid';

export const metadata: Metadata = {
  title: 'Galerie',
  description: `Galerie lucrări SEVEN INK. TATTOO SOCIETY – salon de tatuaje ${SITE.addressShort}.`,
};

export default function GaleriePage() {
  return (
    <article className="pt-24 pb-20 md:pt-28 md:pb-24">
      <section className="section-padding mb-16 md:mb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
            Lucrări
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-brand-white leading-[0.95]">
            Galerie
          </h1>
          <p className="mt-6 text-brand-white/80 text-lg max-w-2xl">
            O selecție din lucrările realizate la SEVEN INK. Fiecare tatuaj este
            unic și creat în colaborare cu clientul.
          </p>
        </div>
      </section>

      <section className="section-padding" aria-label="Galerie imagini">
        <div className="max-w-6xl mx-auto">
          <GalerieGrid />
        </div>
      </section>
    </article>
  );
}

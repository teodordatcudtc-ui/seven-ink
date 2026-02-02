import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Despre noi',
  description: `Misiunea și viziunea SEVEN INK. TATTOO SOCIETY – salon de tatuaje în ${SITE.addressShort}.`,
};

export default function DespreNoiPage() {
  return (
    <article className="pt-24 pb-20 md:pt-28 md:pb-24">
      <section className="section-padding pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="pl-0 md:pl-8 animate-fade-in">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4">
              Povestea noastră
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-brand-white leading-[0.95]">
              Despre noi
            </h1>
            <p className="mt-6 text-brand-white/80 text-lg md:text-xl max-w-2xl">
              {SITE.description} Suntem în inima Bucureștiului, pe Lipscani 43.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-padding py-16 md:py-20 bg-brand-charcoal"
        aria-labelledby="misiune"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2
              id="misiune"
              className="font-display text-3xl md:text-4xl tracking-tight text-brand-white"
            >
              Misiune
            </h2>
            <p className="mt-4 text-brand-white/80 leading-relaxed">
              Să oferim artă pe piele la cel mai înalt nivel: design unic, execuție
              precisă și un spațiu în care fiecare client se simte în siguranță și
              respectat. Fiecare tatuaj este o colaborare între artist și client.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight text-brand-white">
              Viziune
            </h2>
            <p className="mt-4 text-brand-white/80 leading-relaxed">
              Să rămânem un punct de referință pentru tatuajul de calitate în
              București: un loc unde stilul industrial și atmosfera premium se
              întâlnesc cu artă autentică și profesionalism.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-padding py-20 md:py-28"
        aria-labelledby="echipa"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="echipa"
            className="font-display text-3xl md:text-4xl tracking-tight text-brand-white"
          >
            Echipă
          </h2>
          <p className="mt-6 text-brand-white/80 text-lg leading-relaxed">
            Lucrăm cu artiști dedicați, care îmbină tehnică cu sensibilitate
            artistică. Fiecare membru al echipei aduce o perspectivă unică, iar
            împreună oferim o gamă largă de stiluri: de la realism și tradițional
            la minimalist și blackwork.
          </p>
          <p className="mt-6 text-brand-white/80 text-lg leading-relaxed">
            Salonul nostru este gândit ca un spațiu în care te poți relaxa și în
            care procesul de tatuare este tratat cu seriozitate și respect.
          </p>
          <div className="mt-10">
            <Button as="link" href="/contact" variant="primary">
              Contact
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}

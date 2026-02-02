import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Termeni și condiții',
  description: `Termeni și condiții SEVEN INK. TATTOO SOCIETY – ${SITE.addressShort}.`,
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <article className="pt-24 pb-20 md:pt-28 md:pb-24">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto prose prose-invert prose-brand">
          <h1 className="font-display text-4xl md:text-5xl tracking-tight text-brand-white">
            Termeni și condiții
          </h1>
          <p className="text-brand-muted mt-2">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
          <div className="mt-10 space-y-6 text-brand-white/80 leading-relaxed">
            <p>
              Accesând și folosind site-ul {SITE.name} {SITE.tagline} (&quot;site&quot;),
              acceptați acești termeni și condiții.
            </p>
            <h2 className="font-display text-2xl text-brand-white mt-8">
              Servicii
            </h2>
            <p>
              Oferim servicii de tatuaj și piercing la adresa {SITE.address}.
              Programările se fac prin contact (telefon, email sau formular).
              Prețurile și disponibilitatea se stabilesc la programare.
            </p>
            <h2 className="font-display text-2xl text-brand-white mt-8">
              Programări
            </h2>
            <p>
              O programare este confirmată după acordul nostru (telefonic sau
              email). Anulările se fac cu cel puțin 24h înainte, dacă este
              posibil.
            </p>
            <h2 className="font-display text-2xl text-brand-white mt-8">
              Conținut site
            </h2>
            <p>
              Textele, imaginile și logo-urile de pe site sunt proprietatea
              {SITE.name} {SITE.tagline} și nu pot fi reproduse fără acord.
            </p>
            <h2 className="font-display text-2xl text-brand-white mt-8">
              Contact
            </h2>
            <p>
              Întrebări: {SITE.email}, {SITE.phone}, {SITE.address}.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

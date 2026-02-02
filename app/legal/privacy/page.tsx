import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate',
  description: `Politica de confidențialitate SEVEN INK. TATTOO SOCIETY – ${SITE.addressShort}.`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <article className="pt-24 pb-20 md:pt-28 md:pb-24">
      <section className="section-padding">
        <div className="max-w-3xl mx-auto prose prose-invert prose-brand">
          <h1 className="font-display text-4xl md:text-5xl tracking-tight text-brand-white">
            Politica de confidențialitate
          </h1>
          <p className="text-brand-muted mt-2">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
          <div className="mt-10 space-y-6 text-brand-white/80 leading-relaxed">
            <p>
              {SITE.name} {SITE.tagline} (&quot;noi&quot;) respectă confidențialitatea
              vizitatorilor și clienților. Această politică descrie ce date
              colectăm și cum le folosim.
            </p>
            <h2 className="font-display text-2xl text-brand-white mt-8">
              Date colectate
            </h2>
            <p>
              Putem colecta: nume, email, telefon și mesajul tău atunci când ne
              trimiți un formular de contact. Nu vindem aceste date către terți.
            </p>
            <h2 className="font-display text-2xl text-brand-white mt-8">
              Scopul utilizării
            </h2>
            <p>
              Datele sunt folosite exclusiv pentru a răspunde la solicitările tale
              (programări, întrebări) și pentru comunicări legate de serviciile
              noastre.
            </p>
            <h2 className="font-display text-2xl text-brand-white mt-8">
              Cookie-uri
            </h2>
            <p>
              Site-ul poate folosi cookie-uri tehnice necesare pentru funcționare
              (ex.: preferințe). Nu folosim cookie-uri de publicitate fără
              consimțământ.
            </p>
            <h2 className="font-display text-2xl text-brand-white mt-8">
              Contact
            </h2>
            <p>
              Pentru întrebări despre datele tale: {SITE.email}, {SITE.phone},{' '}
              {SITE.address}.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

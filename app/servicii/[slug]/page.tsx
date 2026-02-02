import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/services';
import { Button } from '@/components/ui/Button';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiciuPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <article className="pt-24 pb-20 md:pt-28 md:pb-24">
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap gap-2 text-sm text-brand-muted">
              <li>
                <Link href="/servicii" className="hover:text-brand-gold transition-colors">
                  Servicii
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-brand-white">{service.title}</li>
            </ol>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-brand-white leading-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-brand-gold text-lg uppercase tracking-widest">
            {service.shortDescription}
          </p>
          <div className="mt-8 prose prose-invert max-w-none">
            <p className="text-brand-white/80 text-lg leading-relaxed">
              {service.description}
            </p>
            {service.highlights && service.highlights.length > 0 && (
              <ul className="mt-8 space-y-2 text-brand-white/80">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-12">
            <Button as="link" href="/contact" variant="primary">
              Programează-te
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HomeGallery } from '@/components/home/HomeGallery';
import { SITE } from '@/lib/site';
import { SERVICES } from '@/lib/services';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function HomeSections() {
  return (
    <>
      {/* Section: Servicii - asymmetric blocks, distinct identity */}
      <section
        className="section-padding py-20 md:py-28 bg-brand-charcoal"
        aria-labelledby="servicii-home"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
          >
            <h2
              id="servicii-home"
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-white"
            >
              Servicii
            </h2>
            <Link
              href="/servicii"
              className="text-sm uppercase tracking-widest text-brand-gold hover:text-brand-goldLight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
            >
              Toate serviciile →
            </Link>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {SERVICES.map((service, i) => (
              <motion.article
                key={service.slug}
                variants={item}
                className={`group relative overflow-hidden rounded-sm ${
                  i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-16' : ''
                }`}
              >
                <Link
                  href={`/servicii/${service.slug}`}
                  className="block p-6 md:p-8 bg-brand-green-deep/40 border border-white/10 hover:border-brand-gold/30 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal"
                >
                  <span className="text-xs uppercase tracking-widest text-brand-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl tracking-wide text-brand-white group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-brand-muted text-sm md:text-base">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-block text-sm uppercase tracking-widest text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Detalii →
                  </span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section: Galerie - sub Servicii, cu buton Vezi toate pozele */}
      <HomeGallery />

      {/* Section: Despre noi - different visual identity: lighter, more space */}
      <section
        className="section-padding py-20 md:py-28 relative overflow-hidden"
        aria-labelledby="despre-noi-home"
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(45, 90, 61, 0.3) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h2
              id="despre-noi-home"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-white"
            >
              Despre noi
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-brand-white/80 text-lg leading-relaxed"
            >
              {SITE.description} Suntem în inima Bucureștiului, pe Lipscani 43.
              Fiecare lucrare este tratată ca artă — de la consultare la design și
              execuție.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <Button as="link" href="/despre-noi" variant="secondary">
                Povestea noastră
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="aspect-[4/3] bg-brand-green-deep/30 border border-white/10 rounded-sm flex items-center justify-center"
          >
            <span className="font-display text-6xl md:text-7xl text-brand-white/10 tracking-[0.2em]">
              {SITE.name}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Section: CTA + Contact - gold block, breaks rhythm */}
      <section
        className="section-padding py-20 md:py-28 bg-brand-gold"
        aria-labelledby="contact-cta"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="contact-cta"
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-black"
          >
            Programează-te
          </h2>
          <p className="mt-4 text-brand-black/80 text-lg">
            {SITE.addressShort} · {SITE.phone}
          </p>
          <div className="mt-10">
            <Button
              as="link"
              href="/contact"
              variant="primary"
              className="!bg-brand-black !text-brand-gold hover:!bg-brand-charcoal hover:!text-brand-white border-2 border-brand-black"
            >
              Contact
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

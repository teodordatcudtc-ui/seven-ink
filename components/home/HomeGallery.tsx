'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HOME_GALLERY_IMAGES } from '@/lib/gallery';

const DISPLAY_COUNT = 6;
const images = HOME_GALLERY_IMAGES.slice(0, DISPLAY_COUNT);

export function HomeGallery() {
  if (images.length === 0) return null;

  return (
    <section
      className="section-padding py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="galerie-home"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(45, 90, 61, 0.2) 50%, transparent 100%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
        >
          <h2
            id="galerie-home"
            className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand-white"
          >
            Galerie
          </h2>
          <Link
            href="/galerie"
            className="text-sm uppercase tracking-widest text-brand-gold hover:text-brand-goldLight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black rounded"
          >
            Vezi toate pozele →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
        >
          {images.map((src, i) => (
            <Link
              key={src + i}
              href="/galerie"
              className={`group relative block overflow-hidden rounded-sm border border-white/10 hover:border-brand-gold/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black ${
                i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto min-h-[180px] md:min-h-[280px]' : 'aspect-square min-h-[140px] md:min-h-[180px]'
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.closest('a');
                  if (parent) parent.classList.add('bg-brand-charcoal');
                }}
              />
              <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors duration-300" />
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Button as="link" href="/galerie" variant="secondary" aria-label="Vezi toate pozele din galerie">
            Vezi toate pozele
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

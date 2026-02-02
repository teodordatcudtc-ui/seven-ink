'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '@/lib/gallery';

const sizes = [
  'md:col-span-2 md:row-span-2',
  'md:row-span-1',
  'md:col-span-1',
  'md:col-span-2',
  'md:col-span-1 md:row-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2 md:row-span-2',
  'md:col-span-1',
];

export function GalerieGrid() {
  if (GALLERY_IMAGES.length === 0) {
    return (
      <p className="text-center text-brand-muted py-12">
        Adaugă imagini în <code className="text-brand-gold">public/gallery/</code> și listează-le în <code className="text-brand-gold">lib/gallery.ts</code> (GALLERY_IMAGES).
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {GALLERY_IMAGES.map((src, i) => (
        <motion.div
          key={src + i}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className={`relative aspect-square md:aspect-auto ${sizes[i % sizes.length]} min-h-[160px] md:min-h-[200px] rounded-sm overflow-hidden bg-brand-charcoal border border-white/10`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

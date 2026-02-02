'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { HERO_IMAGES } from '@/lib/gallery';

const SLIDE_INTERVAL_MS = 5000;
const FADE_DURATION_MS = 1200;

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hasImages = HERO_IMAGES.length > 0;
  const n = HERO_IMAGES.length;
  const nextIndex = n > 0 ? (currentIndex + 1) % n : 0;

  useEffect(() => {
    if (!hasImages || n < 2) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      const t = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % n);
        setIsTransitioning(false);
      }, FADE_DURATION_MS);
      return () => clearTimeout(t);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [hasImages, n]);

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-20"
      aria-label="Secțiune principală"
    >
      {/* Background: slideshow sau gradient */}
      {hasImages ? (
        <>
          <div className="absolute inset-0 bg-brand-black" />
          {/* Strat current */}
          <div
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              transitionDuration: `${FADE_DURATION_MS}ms`,
              opacity: isTransitioning ? 0 : 1,
            }}
          >
            <Image
              src={HERO_IMAGES[currentIndex]}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          {/* Strat următor (pentru crossfade) */}
          {n > 1 && (
            <div
              className="absolute inset-0 transition-opacity ease-in-out"
              style={{
                transitionDuration: `${FADE_DURATION_MS}ms`,
                opacity: isTransitioning ? 1 : 0,
              }}
            >
              <Image
                src={HERO_IMAGES[nextIndex]}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}
          {/* Overlay gradient: mai întunecat în dreapta, lasă stânga să respire */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0.9) 70%, rgba(10,10,10,0.95) 100%)',
            }}
            aria-hidden
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-brand-black" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(45, 90, 61, 0.4) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 70% 60%, rgba(26, 61, 46, 0.3) 0%, transparent 50%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </>
      )}

      {/* Glow verde – accent stânga, depth */}
      <div
        className="absolute top-1/2 left-0 w-[80vw] max-w-[500px] h-[120%] -translate-y-1/2 -translate-x-1/3 blur-[100px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 30% 50%, rgba(74, 157, 95, 0.5) 0%, transparent 70%)' }}
      />
      {/* Vignette ușoară pe margini */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 20vh 10px rgba(0,0,0,0.4), inset -20vw 0 30vh -10px rgba(0,0,0,0.2)',
        }}
        aria-hidden
      />

      <div className="relative section-padding w-full z-10 flex justify-start">
        <div className="max-w-3xl mr-auto w-full ml-12 md:ml-24 lg:ml-32">
          {/* Linie verticală accent + conținut */}
          <div className="pl-0 md:pl-2 lg:pl-4 border-l-2 border-brand-gold/40 md:border-l-brand-gold/50 md:pl-8 lg:pl-12">
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.4em] text-brand-gold/90 font-body"
            >
              București · Lipscani
            </motion.span>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3 mt-3"
            >
              <h1
                className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[8rem] tracking-[0.02em] leading-[0.95] text-brand-white"
                style={{
                  textShadow: '0 0 60px rgba(0,0,0,0.5), 0 2px 20px rgba(0,0,0,0.3)',
                }}
              >
                SEVEN INK.
              </h1>
              <p className="font-body text-xl sm:text-2xl md:text-3xl tracking-[0.25em] text-brand-muted uppercase flex items-center gap-2">
                tattoo society
                <span className="text-brand-pink/80 text-2xl md:text-3xl" aria-hidden>♥</span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 md:mt-10 text-brand-white/85 text-xl md:text-2xl max-w-lg leading-relaxed"
            >
              Salon de tatuaje în inima Bucureștiului. Artă, stil și profesionalism.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 md:mt-12 flex flex-wrap gap-4"
            >
              <Button as="link" href="/contact" variant="primary" aria-label="Programează-te la SEVEN INK">
                Programează-te
              </Button>
              <Button as="link" href="/galerie" variant="secondary" aria-label="Vezi galeria">
                Vezi galeria
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gradient fade jos */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to top, var(--bg-primary), transparent 60%)',
        }}
      />
    </section>
  );
}
